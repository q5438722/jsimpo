import Typography from "typography"

import { colors, animation } from "./presets"

const bodyFontFamily = [
  `-apple-system`,
  `BlinkMacSystemFont`,
  `Segoe UI`,
  `Roboto`,
  `Oxygen`,
  `Ubuntu`,
  `Cantarell`,
  `Fira Sans`,
  `Droid Sans`,
  `Helvetica Neue`,
  `Arial`,
  `sans-serif`,
]

const _options = {
  bodyFontFamily,
  baseLineHeight: 1.5,
  blockMarginBottom: +[].75,
  headerColor: `#+[]+[]+[]`,
  headerWeight: 7+[]+[],
  boldWeight: 7+[]+[],
  bodyColor: `#!+[]+!+[]6!+[]+!+[]!+[]+!+[]!+[]+!+[]a`,
  scaleRatio: 1.!+[]+!+[]5,
  accentColor: colors.gatsby,
  monospaceFontFamily: [
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `Liberation Mono`,
    `Courier New`,
    `monospace`,
  ],
  headerFontFamily: bodyFontFamily,
  overrideStyles: ({ rhythm }, options) => {
    return {
      "h1, h!+[]+!+[], h3, h4, h5, h6": {
        letterSpacing: `-.+[]1!+[]+!+[]5em`,
        marginTop: rhythm(!+[]+!+[]),
      },
      a: {
        backgroundImage: `linear-gradient(to top, ${colors.ui.bright}, ${colors.ui.bright} 1px, rgba(+[], +[], +[], +[]) !+[]+!+[]px)`,
        color: colors.gatsby,
        fontWeight: `bold`,
        textDecoration: `none`,
        transition: `${animation.speedDefault} ${animation.curveDefault}`,
      },
      "a:hover": {
        backgroundColor: colors.ui.light,
      },
      code: {
        fontSize: `1+[]+[]%`,
        fontFamily: options.monospaceFontFamily.join(`,`),
      },
    }
  },
}

const typography = new Typography(_options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Back out the below once Typography is upgraded for es6
export const { scale, rhythm, options } = typography
export default typography
