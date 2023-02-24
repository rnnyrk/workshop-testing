import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RenderOptions, render } from '@testing-library/react';
import { default as userTestEvents } from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
    },
    logger: {
      /* eslint no-console: ["error", { allow: ["warn", "log"] }] */
      log: console.log,
      warn: console.warn,
      error: () => null,
    },
  });

const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  const testQueryClient = createTestQueryClient();

  return (
    <QueryClientProvider client={testQueryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
  const userEvent = userTestEvents.setup();
  const { rerender, ...result } = render(<RootWrapper>{ui}</RootWrapper>, { ...options });

  return {
    userEvent,
    ...result,
    rerender: (rerenderUi: React.ReactElement) => rerender(<RootWrapper>{rerenderUi}</RootWrapper>),
  };
};

export const defaultPageProps = {
  params: {},
  state: {
    mutations: [],
    queries: [],
  },
};

export * from '@testing-library/react';
export { customRender as testRenderer };
