module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(vue-the-mask)/)'],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  snapshotSerializers: [
    'jest-serializer-vue',
  ],
  testMatch: [
    '<rootDir>/src/**/*.spec.js',
  ],
  automock: false,
  testURL: 'http://localhost/',
  cache: false,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,vue}',
    '!<rootDir>/src/**/{index,images}.js',
  ],
};
