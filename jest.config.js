const nextJest = require('next/jest');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');

const createJestConfig = nextJest({
  dir: './',
});

const jestConfig = {
  rootDir: '.',
  preset: 'ts-jest',
  globals: {
    __PROD__: false,
    __ACC__: false,
    __DEV__: false,
    __TEST__: true,
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.js'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  testMatch: ['<rootDir>/**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: ['/node_modules/', 'src/__tests__/', 'src/types/', 'types.ts'],
  collectCoverageFrom: ['src/**/*.(ts|tsx)', '!src/**/*.d.ts'],
  coverageDirectory: './coverage/',
};

module.exports = createJestConfig(jestConfig);
