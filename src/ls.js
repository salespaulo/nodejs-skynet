/* eslint-disable no-unused-vars */

const { defaultOptions } = require("./utils");

const defaultLsOptions = {
  ...defaultOptions(""),
  endpointPathLsDir: "/renter/dir",
  endpointPathLsFile: "/renter/file",
};

function ls(customOptions = {}) {
  const opts = { ...defaultLsOptions, ...customOptions };

  throw new Error("Unimplemented");
}

module.exports = {
  ls,
};
