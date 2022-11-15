'use strict';
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
var _foo = _interopRequireDefault(require('foo'));
var _bar = require('bar');
Object['keys'](_bar)['forEach'](function (_0x4c3e07) {
    if (_0x4c3e07 === 'default' || _0x4c3e07 === '__esModule')
        return;
    if (_0x4c3e07 in exports && exports[_0x4c3e07] === _bar[_0x4c3e07])
        return;
    Object['defineProperty'](exports, _0x4c3e07, {
        'enumerable': !![],
        'get': function () {
            return _bar[_0x4c3e07];
        }
    });
});
function _interopRequireDefault(_0x3ca5b2) {
    return _0x3ca5b2 && _0x3ca5b2['__esModule'] ? _0x3ca5b2 : { 'default': _0x3ca5b2 };
}
var anything = {};