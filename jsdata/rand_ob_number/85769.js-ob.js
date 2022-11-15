/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SafeRange = require('./SafeRange'), EachInRange = function (_0x3cb9cb, _0xb2ee8f, _0x376ffe, _0x454a24, _0x543d80) {
        _0x454a24 === undefined && (_0x454a24 = -0x224 + -0x1 * 0x263b + -0x35 * -0xc3);
        _0x543d80 === undefined && (_0x543d80 = _0x3cb9cb['length']);
        if (SafeRange(_0x3cb9cb, _0x454a24, _0x543d80)) {
            var _0x4936aa, _0x3e1721 = [null];
            for (_0x4936aa = 0x7ed * -0x4 + 0x10 * 0x59 + 0x1a29; _0x4936aa < arguments['length']; _0x4936aa++) {
                _0x3e1721['push'](arguments[_0x4936aa]);
            }
            for (_0x4936aa = _0x454a24; _0x4936aa < _0x543d80; _0x4936aa++) {
                _0x3e1721[-0x136 + -0x1 * 0x2296 + -0x74 * -0x4f] = _0x3cb9cb[_0x4936aa], _0xb2ee8f['apply'](_0x376ffe, _0x3e1721);
            }
        }
        return _0x3cb9cb;
    };
module['exports'] = EachInRange;
