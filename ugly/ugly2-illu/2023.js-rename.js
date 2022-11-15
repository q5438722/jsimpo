import { assignWithDepth } from "./utils";import { log } from "./logger";import theme from "./themes";import config from "./defaultConfig";
const handleThemeVariables = e => {
  return theme[e] ? theme[e].getThemeVariables() : theme.default.getThemeVariables();
};

const manipulators = { themeVariables: handleThemeVariables };
config.class.arrowMarkerAbsolute = config.arrowMarkerAbsolute;config.git.arrowMarkerAbsolute = config.arrowMarkerAbsolute;export const defaultConfig = Object.freeze(config);const siteConfig = assignWithDepth({}, defaultConfig);
const currentConfig = assignWithDepth({}, defaultConfig);
export const setSiteConfig = i => {
  console.log("setSiteConfig");Object.keys(i).forEach(e => {
    const t = manipulators[e];
    i[e] = t ? t(i[e]) : i[e];
  });assignWithDepth(currentConfig, i, { clobber: true });assignWithDepth(siteConfig, i);return getSiteConfig();
};export const getSiteConfig = () => {
  return assignWithDepth({}, siteConfig);
};export const setConfig = i => {
  console.log("setConfig");sanitize(i);Object.keys(i).forEach(e => {
    const t = manipulators[e];
    i[e] = t ? t(i[e]) : i[e];
  });assignWithDepth(currentConfig, i);return getConfig();
};export const getConfig = () => {
  return assignWithDepth({}, currentConfig);
};export const sanitize = t => {
  Object.keys(siteConfig.secure).forEach(e => {
    if (typeof t[siteConfig.secure[e]] !== "undefined") {
      log.trace(`Denied attempt to modify a secure key ${siteConfig.secure[e]}`, t[siteConfig.secure[e]]);delete t[siteConfig.secure[e]];
    }
  });
};export const reset = (e = getSiteConfig()) => {
  console.warn("reset");Object.keys(siteConfig).forEach(e => delete siteConfig[e]);Object.keys(currentConfig).forEach(e => delete currentConfig[e]);assignWithDepth(siteConfig, e, { clobber: true });assignWithDepth(currentConfig, e, { clobber: true });
};const configApi = Object.freeze({ sanitize: sanitize, setSiteConfig: setSiteConfig, getSiteConfig: getSiteConfig, setConfig: setConfig, getConfig: getConfig, reset: reset, defaultConfig: defaultConfig });
export default configApi;
