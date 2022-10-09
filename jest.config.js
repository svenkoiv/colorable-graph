module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '__tests__/.*\\.test\\.[t]sx?$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  roots: [
    '<rootDir>/src',
  ],
};

