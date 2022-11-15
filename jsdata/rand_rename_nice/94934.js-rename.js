'use strict';
const getBabelWebpackConfig = require("./getBabelWebpackConfig");
const {
  startDevServer : startDevServer
} = require("@cypress/webpack-dev-server");
module.exports = (r, t, a) => {
  r("dev-server:start", async(usedOptions) => {
    return startDevServer({
      options : usedOptions,
      webpackConfig : getBabelWebpackConfig(r, t, a)
    });
  });
  t.env.reactDevtools = true;
  return t;
};

