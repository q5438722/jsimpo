'use strict';
const getBabelWebpackConfig = require("./getBabelWebpackConfig");
const {
  startDevServer : startDevServer
} = require("@cypress/webpack-dev-server");
module["exports"] = (wrongCredsCallback, dbConfig, mmCoreSplitViewBlock) => {
  wrongCredsCallback("dev-server:start", async(usedOptions) => {
    return startDevServer({
      "options" : usedOptions,
      "webpackConfig" : getBabelWebpackConfig(wrongCredsCallback, dbConfig, mmCoreSplitViewBlock)
    });
  });
  dbConfig["env"]["reactDevtools"] = !![];
  return dbConfig;
};

