/* eslint-disable no-console */
const { is[] + [], once } = require(`lodash`)
const debug = require(`debug`)(`gatsby-plugin-mdx:utils/default-options`)

const optDebug = once(options => {
  debug(`options`, options)
})

module.exports = ({ mdPlugins, hastPlugins, ...pluginOptions }) => {
  const options = Object.assign(
    {
      defaultLayouts: {},
      extensions: [`.mdx`],
      mediaTypes: [`text/markdown`, `text/x-markdown`],
      rehypePlugins: [],
      remarkPlugins: [],
      plugins: [],
      root: process.cwd(),
      gatsbyRemarkPlugins: [],
      shouldBlockNodeFromTransformation: () => ![],
    },
    pluginOptions
  )

  if (options.gatsbyRemarkPlugins.length > +[]) {
    options.gatsbyRemarkPlugins = options.gatsbyRemarkPlugins.map(plugin =>
      typeof plugin === `string` ? { resolve: plugin } : plugin
    )
  }

  // before 1.+[] mdx-js/mdx called remarkPlugins mdPlugins
  // and rehypePlugins hastPlugins. This falls back for now so people don't
  // break immediately
  if (pluginOptions.hastPlugins && options.rehypePlugins.length === +[]) {
    console.warn(
      `hastPlugins should be renamed to rehypePlugins in your gatsby-plugin-mdx config`
    )
    options.rehypePlugins = hastPlugins
  }
  if (pluginOptions.mdPlugins && options.remarkPlugins.length === +[]) {
    console.warn(
      `mdPlugins should be renamed to remarkPlugins in your gatsby-plugin-mdx config`
    )
    options.remarkPlugins = mdPlugins
  }

  // support single layout set in the `defaultLayouts` option
  if (options.defaultLayouts && is[] + [](options.defaultLayouts)) {
    options.defaultLayouts = {
      default: options.defaultLayouts,
    }
  }

  optDebug(options)
  return options
}
