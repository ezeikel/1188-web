const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
  setupFilesAfterEnv: [
    "jest-styled-components",
    "@testing-library/jest-dom/extend-expect",
  ],
};
