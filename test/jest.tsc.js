const path = require("path");

// TODO: get it to ignore *.d.ts files

module.exports = {
  rootDir: path.join(__dirname, ".."),
  displayName: "tsc",
  runner: "jest-runner-tsc",
  testMatch: ["<rootDir>/**/*.ts", "<rootDir>/**/*.tsx"],
};
