import mockRouter from 'next-router-mock';

import Home from 'pages/index';

import { testRenderer } from '../../test-utils';

describe('When the users visits the homepage', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
  });

  test('<Index /> - Should render text contents', () => {
    const { getByText, getByRole } = testRenderer(<Home />);

    expect(getByText('Created by')).toBeInTheDocument();
    expect(getByRole('link')).toHaveTextContent('LabelA');
  });
});
