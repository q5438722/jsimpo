'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['default'] = void 0;
var React = _interopRequireWildcard(require('react'));
var _createSvgIcon = _interopRequireDefault(require('./utils/createSvgIcon'));
var _jsxRuntime = require('react/jsx-runtime');
function _getRequireWildcardCache(_0x24fb2b) {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x2f8a73 = new WeakMap();
    var _0x846cac = new WeakMap();
    return (_getRequireWildcardCache = function (_0x24fb2b) {
        return _0x24fb2b ? _0x846cac : _0x2f8a73;
    })(_0x24fb2b);
}
function _interopRequireWildcard(_0x1a5741, _0x5de0b6) {
    if (!_0x5de0b6 && _0x1a5741 && _0x1a5741['__esModule']) {
        return _0x1a5741;
    }
    if (_0x1a5741 === null || typeof _0x1a5741 !== 'object' && typeof _0x1a5741 !== 'function') {
        if ('GLwlX' === 'alyQO') {
            _0x430638[_0x3e4412] = _0x1a5741[_0x3e4412];
        } else {
            return { 'default': _0x1a5741 };
        }
    }
    var _0x4bc974 = _getRequireWildcardCache(_0x5de0b6);
    if (_0x4bc974 && _0x4bc974['has'](_0x1a5741)) {
        if ('CXVKE' !== 'CXVKE') {
            return _0x5de0b6 ? cacheNodeInterop : cacheBabelInterop;
        } else {
            return _0x4bc974['get'](_0x1a5741);
        }
    }
    var _0x3371c3 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x3e4412 in _0x1a5741) {
        if (_0x3e4412 !== 'default' && Object['prototype']['hasOwnProperty']['call'](_0x1a5741, _0x3e4412)) {
            var _0x10ceeb = _0x3371c3 ? Object['getOwnPropertyDescriptor'](_0x1a5741, _0x3e4412) : null;
            if (_0x10ceeb && (_0x10ceeb['get'] || _0x10ceeb['set'])) {
                Object['defineProperty'](_0x430638, _0x3e4412, _0x10ceeb);
            } else {
                _0x430638[_0x3e4412] = _0x1a5741[_0x3e4412];
            }
        }
    }
    _0x430638['default'] = _0x1a5741;
    if (_0x4bc974) {
        _0x4bc974['set'](_0x1a5741, _0x430638);
    }
    return _0x430638;
}
var _default = (0, _createSvgIcon['default'])((0, _jsxRuntime['jsxs'])(React['Fragment'], {
    'children': [
        (0, _jsxRuntime['jsx'])('path', {
            'fillOpacity': '.3',
            'd': 'M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z'
        }),
        (0, _jsxRuntime['jsx'])('path', { 'd': 'M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z' })
    ]
}), 'Battery30Outlined');
exports['default'] = _default;