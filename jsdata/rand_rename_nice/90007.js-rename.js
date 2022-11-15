'use strict';
import Typography from "typography";
import{
  colors as colors,
  animation as animation
}from "./presets";
const bodyFontFamily = [`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `Oxygen`, `Ubuntu`, `Cantarell`, `Fira Sans`, `Droid Sans`, `Helvetica Neue`, `Arial`, `sans-serif`];
const settings = {
  bodyFontFamily : bodyFontFamily,
  baseLineHeight : 1.5,
  blockMarginBottom : .75,
  headerColor : `#000`,
  headerWeight : 700,
  boldWeight : 700,
  bodyColor : `#26222a`,
  scaleRatio : 1.25,
  accentColor : colors.gatsby,
  monospaceFontFamily : [`SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `Courier New`, `monospace`],
  headerFontFamily : bodyFontFamily,
  overrideStyles : ({
    rhythm : getMarginTop
  }, options) => {
    return {
      "h1, h2, h3, h4, h5, h6" : {
        letterSpacing : `-.0125em`,
        marginTop : getMarginTop(2)
      },
      a : {
        backgroundImage : `linear-gradient(to top, ${colors.ui.bright}, ${colors.ui.bright} 1px, rgba(0, 0, 0, 0) 2px)`,
        color : colors.gatsby,
        fontWeight : `bold`,
        textDecoration : `none`,
        transition : `${animation.speedDefault} ${animation.curveDefault}`
      },
      "a:hover" : {
        backgroundColor : colors.ui.light
      },
      code : {
        fontSize : `100%`,
        fontFamily : options.monospaceFontFamily.join(`,`)
      }
    };
  }
};
const props = new Typography(settings);
if (process.env.NODE_ENV !== `production`) {
  props.injectStyles();
}
const {
  scale : scale,
  rhythm : startX,
  options : options
} = props;
export{
  scale as scale,
  startX as rhythm,
  options as options
};
export default props;

