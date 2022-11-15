const getBabelWebpackConfig = require("./getBabelWebpackConfig");

var { startDevServer } = require("@cypress/webpack-dev-server");

module.exports = (r, t, a) => {
  r("dev-server:start", async e => {
    return startDevServer({ options: e, webpackConfig: getBabelWebpackConfig(r, t, a) });
  });t.env.reactDevtools = true;return t;
};
