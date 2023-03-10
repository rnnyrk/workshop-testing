import '@testing-library/jest-dom';

import { server } from './mocks/server';

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

jest.mock('*.svg', () => 'svg');

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'MOCK_NEXT_IMAGE';
  },
}));
