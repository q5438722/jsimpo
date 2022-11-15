'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['default'] = useTheme;
exports['ThemeContext'] = void 0;
var _react = require('react');
const ThemeContext = (0, _react['createContext'])('bright');
exports['ThemeContext'] = ThemeContext;
function useTheme() {
    const _0x3d35ed = (0, _react['useContext'])(ThemeContext);
    (0, _react['useDebugValue'])(_0x3d35ed);
    return _0x3d35ed;
}