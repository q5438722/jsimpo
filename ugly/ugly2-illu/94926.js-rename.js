const debug = require("debug")("@cypress/react");

const getNextJsBaseWebpackConfig = require("next/dist/build/webpack-config").default;

async function getNextWebpackConfig(e) {
  var t;
  try {
    t = require("next/dist/next-server/server/config").default;
  } catch (e) {
    if (e.code === "MODULE_NOT_FOUND") {
      t = require("next/dist/server/config").default;
    } else {
      throw e;
    }
  }const c = await t("development", e.projectRoot);
  const a = await getNextJsBaseWebpackConfig(e.projectRoot, { buildId: `@cypress/react-${Math.random().toString()}`, config: c, dev: true, isServer: false, pagesDir: e.projectRoot, entrypoints: {}, rewrites: { fallback: [], afterFiles: [], beforeFiles: [] } });
  debug("resolved next.js webpack config %o", a);return a;
}var webpackConfigCache = null;
module.exports = async function e(t) {
  if (webpackConfigCache !== null) {
    return webpackConfigCache;
  }webpackConfigCache = await getNextWebpackConfig(t);debug("created and cached webpack preprocessor based on next.config.js", webpackConfigCache);return webpackConfigCache;
};
