"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = useTheme;exports.ThemeContext = void 0;
const _react = require("react");

const ThemeContext = (0, _react.createContext)("bright");
exports.ThemeContext = ThemeContext;function useTheme() {
  const e = (0, _react.useContext)(ThemeContext);
  (0, _react.useDebugValue)(e);return e;
}
