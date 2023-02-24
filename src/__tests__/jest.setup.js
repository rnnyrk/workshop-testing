import '@testing-library/jest-dom';

jest.mock('*.svg', () => 'svg');

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'MOCK_NEXT_IMAGE';
  },
}));
