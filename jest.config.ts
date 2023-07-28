import type { Config } from 'jest';

const config: Config = {
  coverageDirectory: './coverage',
  coverageReporters: [
    'lcov',
  ],
  passWithNoTests: true,
  preset: 'ts-jest',
  rootDir: './',
  setupFiles: [
    './src/env.ts',
  ],
  testMatch: [
    '<rootDir>/**/*.(test|spec).ts',
  ],
  verbose: true,
};

export default config;
