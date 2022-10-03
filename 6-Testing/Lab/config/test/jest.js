module.exports = {
  rootDir: '../../',
  verbose: true,
  restoreMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/config/test/setup-after.ts'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  modulePathIgnorePatterns: ['<rootDir>/cypress'],
};
