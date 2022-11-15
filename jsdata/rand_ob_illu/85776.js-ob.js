/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x36d4 = ['507108WMGqXE', '357243nfUIVQ', '25KOOMki', '3489qvWmId', '155fpVmvE', '2924YOUTtS', '33729DPozIp', '15OtTUIi', './SafeRange', 'split', 'Nldiq', 'length', 'wCnMv', 'TaPMW', 'gygwt', '209113gPamZW', '1bfeYgX', '79829GBmpkS'];
const _0x27c2f2 = _0x48fe;

function _0x48fe(_0x4760f2, _0x255311) {
    return _0x48fe = function (_0x46a094, _0x2d23f2) {
        _0x46a094 = _0x46a094 - 130;
        const _0x4b4a5a = _0x36d4[_0x46a094];

        return _0x4b4a5a;
    }, _0x48fe(_0x4760f2, _0x255311);
}
(function (_0x29b60b, _0x18284f) {
    const _0x35e36a = _0x48fe;

    while (true) {
        try {
            const _0x308eb5 = parseInt(_0x35e36a(0x82)) + -parseInt(_0x35e36a(0x83)) * -parseInt(_0x35e36a(0x84)) + -parseInt(_0x35e36a(0x85)) + -parseInt(_0x35e36a(0x86)) + -parseInt(_0x35e36a(0x87)) * parseInt(_0x35e36a(0x88)) + -parseInt(_0x35e36a(0x89)) * -parseInt(_0x35e36a(0x8a)) + parseInt(_0x35e36a(0x8b)) * parseInt(_0x35e36a(0x8c));

            if (_0x308eb5 === _0x18284f) break;else _0x29b60b.push(_0x29b60b.shift());
        } catch (_0x496844) {
            _0x29b60b.push(_0x29b60b.shift());
        }
    }
})(_0x36d4, 296521);

const SafeRange = require(_0x27c2f2(0x8d));

const CountAllMatching = function (_0x3ddf4e, _0x209a5a, _0x4fc725, _0x19e117, _0x33f70c) {
    const _0x20d19f = _0x27c2f2;
    const _0x4715f9 = {
        'Nldiq': function (_0x1cf289, _0x118741) {
            return _0x1cf289 === _0x118741;
        },
        'wCnMv': function (_0x1976d8, _0x4e6efd, _0x2ac907, _0x44c201) {
            return _0x1976d8(_0x4e6efd, _0x2ac907, _0x44c201);
        },
        'TaPMW': function (_0x734e39, _0x5d645c) {
            return _0x734e39 < _0x5d645c;
        },
        'gygwt': function (_0x4b8618, _0x506478) {
            return _0x4b8618 === _0x506478;
        }
    };

    const _0x393382 = '0|1|4|3|2'[_0x20d19f(0x8e)]('|');

    var _0x507150 = 0;

    while (true) {
        switch (_0x393382[_0x507150++]) {
            case '0':
                _0x19e117 === undefined && (_0x19e117 = 0);
                continue;
            case '1':
                _0x4715f9[_0x20d19f(0x8f)](_0x33f70c, undefined) && (_0x33f70c = _0x3ddf4e[_0x20d19f(0x90)]);
                continue;
            case '2':
                return _0x1a19c4;
            case '3':
                if (_0x4715f9[_0x20d19f(0x91)](SafeRange, _0x3ddf4e, _0x19e117, _0x33f70c)) for (var _0x5d3fb2 = _0x19e117; _0x4715f9[_0x20d19f(0x92)](_0x5d3fb2, _0x33f70c); _0x5d3fb2++) {
                    const _0x1f12f6 = _0x3ddf4e[_0x5d3fb2];

                    _0x4715f9[_0x20d19f(0x93)](_0x1f12f6[_0x209a5a], _0x4fc725) && _0x1a19c4++;
                }
                continue;
            case '4':
                var _0x1a19c4 = 0;

                continue;
        }
        break;
    }
};

module['exports'] = CountAllMatching;
