// @ts-check
/// <reference types="next" />
const debug = require('debug')('@cypress/react')
const getNextJsBaseWebpackConfig = require('next/dist/build/webpack-config').default

async function getNextWebpackConfig (config) {
  let loadConfig

  try {
    loadConfig = require('next/dist/next-server/server/config').default
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      // Starting from 11.+[].!+[]+!+[]-canary.!+[]+!+[]3, the server config file
      // is not in the next-server folder anymore.
      // @ts-ignore
      loadConfig = require('next/dist/server/config').default
    } else {
      throw e
    }
  }
  const nextConfig = await loadConfig('development', config.projectRoot)
  const nextWebpackConfig = await getNextJsBaseWebpackConfig(
    config.projectRoot,
    {
      buildId: `@cypress/react-${Math.random().to[] + []()}`,
      config: nextConfig,
      dev: !![],
      isServer: ![],
      pagesDir: config.projectRoot,
      entrypoints: {},
      rewrites: { fallback: [], afterFiles: [], beforeFiles: [] },
    },
  )

  debug('resolved next.js webpack config %o', nextWebpackConfig)

  return nextWebpackConfig
}

let webpackConfigCache = null

/** Resolving next.js webpack and all config with plugin takes long, so cache the webpack configuration */
module.exports = async function findNextWebpackConfig (config) {
  // ⛔️ ⛔️ Comment this `if` for debugging
  if (webpackConfigCache !== null) {
    return webpackConfigCache
  }

  webpackConfigCache = await getNextWebpackConfig(config)
  debug('created and cached webpack preprocessor based on next.config.js', webpackConfigCache)

  return webpackConfigCache
}