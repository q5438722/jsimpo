var { getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions } = require("@dcloudio/uni-cli-shared/lib/platform");

const preprocessor = require("@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess");

const FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(e) {
  if (e.content) {
    e.content = preprocessor.preprocess(e.content, jsPreprocessOptions.context, { type: jsPreprocessOptions.type }).trim();
  }return e;
}module.exports = function e(t, r) {
  if (process.env.UNI_PLATFORM && process.env.UNI_PLATFORM.indexOf("mp-") === 0 && !t.script) {
    t.script = { type: "script", content: "export default {}", start: 100, attrs: {}, end: 125 };
  }if (!t.template || !FILTER_TAG || r.isAppNVue) {
    t.customBlocks.length = 0;return t;
  }const s = Object.create(null);
  t.customBlocks = t.customBlocks.filter(e => {
    if (e.attrs.module && (e.type === FILTER_TAG || e.attrs.lang === FILTER_TAG)) {
      s[e.attrs.module] = preprocessBlock(e);return true;
    }if (e.attrs.module && (e.type === "renderjs" || e.attrs.lang === "renderjs")) {
      e.type = "renderjs";e.attrs.lang = "js";t.renderjs = preprocessBlock(e);s[e.attrs.module] = Object.assign({}, e, { content: "" });
    }
  });if (Object.keys(s).length) {
    const o = JSON.parse(JSON.stringify(s));
    Object.keys(o).forEach(e => {
      const t = o[e];
      if (t.attrs.src) {
        t.attrs.src = normalizeNodeModules(t.attrs.src);
      }
    });t.template.attrs["filter-modules"] = Buffer.from(JSON.stringify(o)).toString("base64");
  }return t;
};