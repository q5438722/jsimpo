'use strict';
const debug = require("debug")("@cypress/react");
const tryLoadWebpackConfig = require("../utils/tryLoadWebpackConfig");
const {
  allowModuleSourceInPlace : allowModuleSourceInPlace
} = require("../utils/webpack-helpers");
const {
  addCypressToWebpackEslintRulesInPlace : addCypressToWebpackEslintRulesInPlace
} = require("../utils/eslint-helpers");
const {
  getTranspileFolders : getTranspileFolders
} = require("../utils/get-transpile-folders");
const {
  addFolderToBabelLoaderTranspileInPlace : addFolderToBabelLoaderTranspileInPlace
} = require("../utils/babel-helpers");
module.exports = function e(r, {
  webpackConfigPath : artistTrack
} = {
  webpackConfigPath : "react-scripts/config/webpack.config"
}) {
  process.env.FAST_REFRESH = "false";
  const input = tryLoadWebpackConfig(artistTrack);
  if (!input) {
    throw new Error("\u26a0\ufe0f Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.");
  }
  addCypressToWebpackEslintRulesInPlace(input);
  getTranspileFolders(r).forEach((e) => {
    allowModuleSourceInPlace(e, input);
    addFolderToBabelLoaderTranspileInPlace(e, input);
  });
  debug("resolved webpack config: %o", input);
  return input;
};

