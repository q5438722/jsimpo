const _0x5e78 = ['lsBQE', 'end', '388961WsPeWK', '2QrKpdD', '43YQDfYf', '18043yOxWmg', '681616SuwXAt', '280433IlpeJD', '1oiGMav', '2494rTAMVN', '83VrcODv', '210277CnjNkU', '95FLedmN', '25913iVZdLH', '../', 'path', 'tap', 'test', '0755', 'root', 'resolve', 'kSZeH', 'target is a directory'];
const _0x483af6 = _0x24c9;

(function (_0x1cdba1, _0x2d885f) {
    const _0x3b4d52 = _0x24c9;

    while (true) {
        try {
            const _0x3f8ef7 = parseInt(_0x3b4d52(0x82)) * -parseInt(_0x3b4d52(0x83)) + parseInt(_0x3b4d52(0x84)) * -parseInt(_0x3b4d52(0x85)) + -parseInt(_0x3b4d52(0x86)) + parseInt(_0x3b4d52(0x87)) * parseInt(_0x3b4d52(0x88)) + parseInt(_0x3b4d52(0x89)) * -parseInt(_0x3b4d52(0x8a)) + parseInt(_0x3b4d52(0x8b)) + -parseInt(_0x3b4d52(0x8c)) * -parseInt(_0x3b4d52(0x8d));

            if (_0x3f8ef7 === _0x2d885f) break;else _0x1cdba1.push(_0x1cdba1.shift());
        } catch (_0x29dce9) {
            _0x1cdba1.push(_0x1cdba1.shift());
        }
    }
})(_0x5e78, 510056);
function _0x24c9(_0x17e9c9, _0x3a0a95) {
    return _0x24c9 = function (_0x29af07, _0x4354d1) {
        _0x29af07 = _0x29af07 - 130;
        const _0x455c3b = _0x5e78[_0x29af07];

        return _0x455c3b;
    }, _0x24c9(_0x17e9c9, _0x3a0a95);
}

const mkdirp = require(_0x483af6(0x8e));

const path = require(_0x483af6(0x8f));

const fs = require('fs');

const test = require(_0x483af6(0x90))[_0x483af6(0x91)];

const _0755 = parseInt(_0x483af6(0x92), 8);

test(_0x483af6(0x93), function (_0x3c2979) {
    const _0x530185 = _0x483af6;
    const _0x4594c9 = {
        'kSZeH': function (_0x3cce62, _0x1f18ed, _0x38894c, _0x2fa3e8) {
            return _0x3cce62(_0x1f18ed, _0x38894c, _0x2fa3e8);
        }
    };

    const _0x2e7d5d = path[_0x530185(0x94)]('/');

    _0x4594c9[_0x530185(0x95)](mkdirp, _0x2e7d5d, _0755, function (_0x2ce559) {
        const _0x20f553 = _0x530185;
        const _0x1239b9 = { 'lsBQE': _0x20f553(0x96) };

        if (_0x2ce559) throw _0x2ce559;
        fs.stat(_0x2e7d5d, function (_0xae77ce, _0x3e9204) {
            const _0x37af72 = _0x20f553;

            if (_0xae77ce) throw _0xae77ce;
            _0x3c2979.ok(_0x3e9204.isDirectory(), _0x1239b9[_0x37af72(0x97)]), _0x3c2979[_0x37af72(0x98)]();
        });
    });
});
