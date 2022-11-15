'use strict';
var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['default'] = void 0;
var React = _interopRequireWildcard(require('react'));
var _createSvgIcon = _interopRequireDefault(require('./utils/createSvgIcon'));
var _jsxRuntime = require('react/jsx-runtime');
function _getRequireWildcardCache(_0x233821) {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x14b48d = new WeakMap();
    var _0x175a02 = new WeakMap();
    return (_getRequireWildcardCache = function (_0x233821) {
        if ('CCttq' !== 'CCttq') {
            return { 'default': obj };
        } else {
            return _0x233821 ? _0x175a02 : _0x14b48d;
        }
    })(_0x233821);
}
function _interopRequireWildcard(_0x424623, _0x42b888) {
    if (!_0x42b888 && _0x424623 && _0x424623['__esModule']) {
        return _0x424623;
    }
    if (_0x424623 === null || typeof _0x424623 !== 'object' && typeof _0x424623 !== 'function') {
        if ('EXQse' === 'fbewf') {
            return _0x424623;
        } else {
            return { 'default': _0x424623 };
        }
    }
    var _0x30246c = _getRequireWildcardCache(_0x42b888);
    if (_0x30246c && _0x30246c['has'](_0x424623)) {
        return _0x30246c['get'](_0x424623);
    }
    var _0x402e69 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x211290 in _0x424623) {
        if ('AvFOU' === 'AvFOU') {
            if (_0x211290 !== 'default' && Object['prototype']['hasOwnProperty']['call'](_0x424623, _0x211290)) {
                var _0x34426 = _0x402e69 ? Object['getOwnPropertyDescriptor'](_0x424623, _0x211290) : null;
                if (_0x34426 && (_0x34426['get'] || _0x34426['set'])) {
                    Object['defineProperty'](_0xb0d46, _0x211290, _0x34426);
                } else {
                    _0xb0d46[_0x211290] = _0x424623[_0x211290];
                }
            }
        } else {
            _0xb0d46[_0x211290] = _0x424623[_0x211290];
        }
    }
    _0xb0d46['default'] = _0x424623;
    if (_0x30246c) {
        _0x30246c['set'](_0x424623, _0xb0d46);
    }
    return _0xb0d46;
}
var _default = (0, _createSvgIcon['default'])((0, _jsxRuntime['jsxs'])(React['Fragment'], {
    'children': [
        (0, _jsxRuntime['jsx'])('path', { 'd': 'M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z' }),
        (0, _jsxRuntime['jsx'])('path', {
            'fillOpacity': '.3',
            'd': 'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z'
        })
    ]
}), 'BatteryCharging20TwoTone');
exports['default'] = _default;