module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
  setupFilesAfterEnv: [
    "jest-styled-components",
    "@testing-library/jest-dom/extend-expect",
  ],
};
