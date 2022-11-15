/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SafeRange = require('./SafeRange'), EachInRange = function (_0x445ce9, _0x465d36, _0x5a84a8, _0x579447, _0x11f3b9) {
        var _0x2040f9 = {
            'AiFKf': function (_0x373405, _0x31cd95) {
                return _0x373405 === _0x31cd95;
            },
            'nCgtf': function (_0x3b9d46, _0x59b02b) {
                return _0x3b9d46 === _0x59b02b;
            },
            'uHZRN': function (_0x2a80f2, _0x5f394f, _0x197977, _0x4f42e9) {
                return _0x2a80f2(_0x5f394f, _0x197977, _0x4f42e9);
            },
            'xpZAf': function (_0x486cc3, _0x181b3c) {
                return _0x486cc3 < _0x181b3c;
            }
        };
        _0x2040f9['AiFKf'](_0x579447, undefined) && (_0x579447 = 0x0);
        _0x2040f9['nCgtf'](_0x11f3b9, undefined) && (_0x11f3b9 = _0x445ce9['length']);
        if (_0x2040f9['uHZRN'](SafeRange, _0x445ce9, _0x579447, _0x11f3b9)) {
            var _0x545544, _0x2f84f7 = [null];
            for (_0x545544 = 0x5; _0x2040f9['xpZAf'](_0x545544, arguments['length']); _0x545544++) {
                _0x2f84f7['push'](arguments[_0x545544]);
            }
            for (_0x545544 = _0x579447; _0x2040f9['xpZAf'](_0x545544, _0x11f3b9); _0x545544++) {
                _0x2f84f7[0x0] = _0x445ce9[_0x545544], _0x465d36['apply'](_0x5a84a8, _0x2f84f7);
            }
        }
        return _0x445ce9;
    };
module['exports'] = EachInRange;
