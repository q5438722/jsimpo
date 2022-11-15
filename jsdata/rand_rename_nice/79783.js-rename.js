'use strict';
const {
  getPlatformFilterTag : getPlatformFilterTag,
  normalizeNodeModules : normalizeNodeModules,
  jsPreprocessOptions : jsPreprocessOptions
} = require("@dcloudio/uni-cli-shared/lib/platform");
const preprocessor = require("@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess");
const FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(options) {
  if (options.content) {
    options.content = preprocessor.preprocess(options.content, jsPreprocessOptions.context, {
      type : jsPreprocessOptions.type
    }).trim();
  }
  return options;
}
module.exports = function e($scope, msg) {
  if (process.env.UNI_PLATFORM && process.env.UNI_PLATFORM.indexOf("mp-") === 0 && !$scope.script) {
    $scope.script = {
      type : "script",
      content : "export default {}",
      start : 100,
      attrs : {},
      end : 125
    };
  }
  if (!$scope.template || !FILTER_TAG || msg.isAppNVue) {
    $scope.customBlocks.length = 0;
    return $scope;
  }
  const s = Object.create(null);
  $scope.customBlocks = $scope.customBlocks.filter((obj) => {
    if (obj.attrs.module && (obj.type === FILTER_TAG || obj.attrs.lang === FILTER_TAG)) {
      s[obj.attrs.module] = preprocessBlock(obj);
      return true;
    }
    if (obj.attrs.module && (obj.type === "renderjs" || obj.attrs.lang === "renderjs")) {
      obj.type = "renderjs";
      obj.attrs.lang = "js";
      $scope.renderjs = preprocessBlock(obj);
      s[obj.attrs.module] = Object.assign({}, obj, {
        content : ""
      });
    }
  });
  if (Object.keys(s).length) {
    const commandObj = JSON.parse(JSON.stringify(s));
    Object.keys(commandObj).forEach((ballNumber) => {
      const t = commandObj[ballNumber];
      if (t.attrs.src) {
        t.attrs.src = normalizeNodeModules(t.attrs.src);
      }
    });
    $scope.template.attrs["filter-modules"] = Buffer.from(JSON.stringify(commandObj)).toString("base64");
  }
  return $scope;
};

