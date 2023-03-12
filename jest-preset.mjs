/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{cjs,cts,js,jsx,mjs,mts,ts,tsx}',
    '!<rootDir>/src/**/*.d.ts',
  ],
  coveragePathIgnorePatterns: ['/build/', '/dist/', '/docs/', '/coverage/', '/node_modules/'],
  coverageReporters: ['html', 'json-summary', 'text'],
  moduleNameMapper: {
    'lodash-es': 'lodash',
    'fetch-mock/esm/client': 'fetch-mock/cjs/client',
  },
  testEnvironment: 'jsdom',
  transform: { '^.+\\.[tj]sx?$': 'ts-jest' },
};

export default config;
