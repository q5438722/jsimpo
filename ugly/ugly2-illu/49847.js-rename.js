exports.__esModule = true;exports.isWebpack5 = false;exports.default = undefined;var initializedWebpack5 = false;
var initializedWebpack4 = false;
const initFns = [];
exports.init = function (e) {
  if (e) {
    Object.assign(exports, require("./bundle5")());exports.isWebpack5 = true;if (!initializedWebpack5) for (const i of initFns) i();initializedWebpack5 = true;
  } else {
    Object.assign(exports, require("./bundle4")());exports.isWebpack5 = false;if (!initializedWebpack4) for (const i of initFns) i();initializedWebpack4 = true;
  }
};exports.onWebpackInit = function (e) {
  if (initializedWebpack5 || initializedWebpack4) e();else initFns.push(e);
};
