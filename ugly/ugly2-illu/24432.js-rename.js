"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _foo = _interopRequireDefault(require("foo"));

const _bar = require("bar");

Object.keys(_bar).forEach(function (e) {
  if (e === "default" || e === "__esModule") return;if (e in exports && exports[e] === _bar[e]) return;Object.defineProperty(exports, e, { enumerable: true, get: function () {
      return _bar[e];
    } });
});function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}const anything = {};