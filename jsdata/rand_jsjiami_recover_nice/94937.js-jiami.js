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
module["exports"] = function wrap(genf, {
  webpackConfigPath : artistTrack
} = {
  "webpackConfigPath" : "react-scripts/config/webpack.config"
}) {
  process["env"]["FAST_REFRESH"] = _0x4e1d4a["RaZct"];
  const compileCommand = tryLoadWebpackConfig(artistTrack);
  if (!compileCommand) {
    throw new Error("\u26a0\ufe0f Could not find Webpack options for react-scripts. Make sure that you have react-scripts module available.");
  }
  addCypressToWebpackEslintRulesInPlace(compileCommand);
  getTranspileFolders(genf)["forEach"]((mmCoreSplitViewBlock) => {
    allowModuleSourceInPlace(mmCoreSplitViewBlock, compileCommand);
    addFolderToBabelLoaderTranspileInPlace(mmCoreSplitViewBlock, compileCommand);
  });
  debug("resolved webpack config: %o", compileCommand);
  return compileCommand;
};

