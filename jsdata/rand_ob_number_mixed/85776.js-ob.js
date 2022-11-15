/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var SafeRange = require('./SafeRange'), CountAllMatching = function (_0x17ab9e, _0x2307f9, _0xe96b7d, _0x4bbc4c, _0x117365) {
        _0x4bbc4c === undefined && (_0x4bbc4c = -0x1 * -0x1674 + -0x3 * 0x8c5 + 0x3 * 0x149);
        _0x117365 === undefined && (_0x117365 = _0x17ab9e['length']);
        var _0x4fe14a = -0x2 * 0x506 + -0x1 * -0x1b0a + -0x10fe;
        if (SafeRange(_0x17ab9e, _0x4bbc4c, _0x117365))
            for (var _0x5da50f = _0x4bbc4c; _0x5da50f < _0x117365; _0x5da50f++) {
                var _0x5dd806 = _0x17ab9e[_0x5da50f];
                _0x5dd806[_0x2307f9] === _0xe96b7d && _0x4fe14a++;
            }
        return _0x4fe14a;
    };
module['exports'] = CountAllMatching;
