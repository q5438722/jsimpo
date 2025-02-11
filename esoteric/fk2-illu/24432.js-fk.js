"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _foo = _interopRequireDefault(require("foo"));

const _bar = require("bar");

Object.keys(_bar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _bar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _bar[key];
    }
  });
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const anything = {};
