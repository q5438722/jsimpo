'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
exports['Component'] = Component;
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache() {
    if (typeof WeakMap !== 'function')
        return null;
    var _0x501004 = new WeakMap();
    _getRequireWildcardCache = function () {
        if ('ZYdQK' !== 'dtJXW') {
            return _0x501004;
        } else {
            const [_0x2aa29a, _0x1f7fe1] = (0, _react['useState'])(0);
            return _react['default']['createElement']('div', null, _react['default']['createElement']('p', null, 'You clicked ', _0x2aa29a, ' times'), _react['default']['createElement']('button', { 'onClick': () => _0x1f7fe1(_0x2aa29a + 1) }, 'Click me'));
        }
    };
    return _0x501004;
}
function _interopRequireWildcard(_0x4e0874) {
    if (_0x4e0874 && _0x4e0874['__esModule']) {
        return _0x4e0874;
    }
    if (_0x4e0874 === null || typeof _0x4e0874 !== 'object' && typeof _0x4e0874 !== 'function') {
        return { 'default': _0x4e0874 };
    }
    var _0x4b0fb4 = _getRequireWildcardCache();
    if (_0x4b0fb4 && _0x4b0fb4['has'](_0x4e0874)) {
        return _0x4b0fb4['get'](_0x4e0874);
    }
    var _0x1217f9 = Object['defineProperty'] && Object['getOwnPropertyDescriptor'];
    for (var _0x285744 in _0x4e0874) {
        if ('EkllL' === 'vjEUH') {
            return _0x4b0fb4;
        } else {
            if (Object['prototype']['hasOwnProperty']['call'](_0x4e0874, _0x285744)) {
                var _0x542bb7 = _0x1217f9 ? Object['getOwnPropertyDescriptor'](_0x4e0874, _0x285744) : null;
                if (_0x542bb7 && (_0x542bb7['get'] || _0x542bb7['set'])) {
                    if ('IJUeD' !== 'IJUeD') {
                        return _0x4b0fb4['get'](_0x4e0874);
                    } else {
                        Object['defineProperty'](_0x28ad22, _0x285744, _0x542bb7);
                    }
                } else {
                    if ('kIDlA' !== 'CRXGw') {
                        _0x28ad22[_0x285744] = _0x4e0874[_0x285744];
                    } else {
                        return { 'default': _0x4e0874 };
                    }
                }
            }
        }
    }
    _0x28ad22['default'] = _0x4e0874;
    if (_0x4b0fb4) {
        _0x4b0fb4['set'](_0x4e0874, _0x28ad22);
    }
    return _0x28ad22;
}
function Component() {
    const [_0x5d6a31, _0x55486a] = (0, _react['useState'])(0);
    return _react['default']['createElement']('div', null, _react['default']['createElement']('p', null, 'You clicked ', _0x5d6a31, ' times'), _react['default']['createElement']('button', { 'onClick': () => _0x55486a(_0x5d6a31 + 1) }, 'Click me'));
}