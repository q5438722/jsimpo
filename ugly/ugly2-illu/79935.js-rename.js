const fs = require("fs");

const path = require("path");

var { getJson } = require("./json");

function parseThemeByJsonStr(n, e, r) {
  if (n.indexOf("@") === -1) {
    return n;
  }e.forEach(e => {
    n = n.replace(new RegExp("@" + e, "g"), r[e]);
  });return n;
}const themeJsonPath = path.join(process.env.UNI_INPUT_DIR, "theme.json");
function hasTheme() {
  return fs.existsSync(themeJsonPath);
}function darkmode() {
  return !!(global.uniPlugin.options || {}).darkmode;
}module.exports = { darkmode: darkmode, hasTheme: hasTheme, initTheme() {
    if (!hasTheme()) {
      return;
    }if (darkmode()) {
      return;
    }try {
      const e = getJson("theme.json", true);
      global.uniPlugin.defaultTheme = e.light;
    } catch (e) {
      console.error(e);
    }
  }, parseTheme(e) {
    const n = global.uniPlugin.defaultTheme;
    if (!n) {
      return e;
    }const r = Object.keys(n);
    if (!r.length) {
      return e;
    }if (typeof e === "string") {
      return parseThemeByJsonStr(e, r, n);
    }return JSON.parse(parseThemeByJsonStr(JSON.stringify(e), r, n));
  } };
