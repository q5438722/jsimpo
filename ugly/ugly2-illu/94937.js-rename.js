const debug = require("debug")("@cypress/react");

const tryLoadWebpackConfig = require("../utils/tryLoadWebpackConfig");

var { allowModuleSourceInPlace } = require("../utils/webpack-helpers");

var { addCypressToWebpackEslintRulesInPlace } = require("../utils/eslint-helpers");

var { getTranspileFolders } = require("../utils/get-transpile-folders");

var { addFolderToBabelLoaderTranspileInPlace } = require("../utils/babel-helpers");

module.exports = function e(r, { webpackConfigPath: o } = { webpackConfigPath: "react-scripts/config/webpack.config" }) {
  process.env.FAST_REFRESH = "false";const a = tryLoadWebpackConfig(o);
  if (!a) {
    throw new Error("\u26A0\uFE0F Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.");
  }addCypressToWebpackEslintRulesInPlace(a);getTranspileFolders(r).forEach(e => {
    allowModuleSourceInPlace(e, a);addFolderToBabelLoaderTranspileInPlace(e, a);
  });debug("resolved webpack config: %o", a);return a;
};
