'use strict';

const _0x1e7e = ['30103PLvpCA', '1089229kJBqbK', '13DqSReP', '129576PWJptZ', '1187549SSbVjk', 'assert', '../../test-helpers/context', 'request', 'req.header', 'Its one header, with headerfields', 'should return the request header object', 'aAfZI', 'deepStrictEqual', 'header', 'req', 'headers', 'AIsKZ', 'hYfyJ', '1721035WJDltC', '1818057mUMWqg', '1420421Sdobpj', '7JpkyTL'];
const _0x49f7cc = _0x3df2;

(function (_0x1c916c, _0x16c8e3) {
    const _0x27416c = _0x3df2;

    while (true) {
        try {
            const _0xfa31d7 = parseInt(_0x27416c(0x6e)) + -parseInt(_0x27416c(0x6f)) + parseInt(_0x27416c(0x70)) + -parseInt(_0x27416c(0x71)) * -parseInt(_0x27416c(0x72)) + -parseInt(_0x27416c(0x73)) + parseInt(_0x27416c(0x74)) * parseInt(_0x27416c(0x75)) + -parseInt(_0x27416c(0x76));

            if (_0xfa31d7 === _0x16c8e3) break;else _0x1c916c.push(_0x1c916c.shift());
        } catch (_0x12f04c) {
            _0x1c916c.push(_0x1c916c.shift());
        }
    }
})(_0x1e7e, 941830);
function _0x3df2(_0x226474, _0x57d9c2) {
    return _0x3df2 = function (_0x44d406, _0x5e1946) {
        _0x44d406 = _0x44d406 - 110;
        const _0x468984 = _0x1e7e[_0x44d406];

        return _0x468984;
    }, _0x3df2(_0x226474, _0x57d9c2);
}

const assert = require(_0x49f7cc(0x77));

const request = require(_0x49f7cc(0x78))[_0x49f7cc(0x79)];

describe(_0x49f7cc(0x7a), () => {
    const _0x4227b4 = _0x49f7cc;
    const _0x24bc37 = {
        'aAfZI': function (_0x57a798) {
            return _0x57a798();
        },
        'hYfyJ': _0x4227b4(0x7b),
        'AIsKZ': function (_0x1cbab7, _0xa0ce94, _0x2bd94b) {
            return _0x1cbab7(_0xa0ce94, _0x2bd94b);
        },
        'MsYQd': _0x4227b4(0x7c),
        'Akpyx': 'should set the request header object'
    };

    _0x24bc37.AIsKZ(it, _0x24bc37.MsYQd, () => {
        const _0x1bdf6d = _0x4227b4;

        const _0x564353 = _0x24bc37[_0x1bdf6d(0x7d)](request);

        assert[_0x1bdf6d(0x7e)](_0x564353[_0x1bdf6d(0x7f)], _0x564353[_0x1bdf6d(0x80)][_0x1bdf6d(0x81)]);
    }), _0x24bc37[_0x4227b4(0x82)](it, _0x24bc37.Akpyx, () => {
        const _0x8ff7b4 = _0x4227b4;

        const _0x3beef6 = request();

        _0x3beef6[_0x8ff7b4(0x7f)] = { 'X-Custom-Headerfield': _0x24bc37[_0x8ff7b4(0x83)] }, assert[_0x8ff7b4(0x7e)](_0x3beef6.header, _0x3beef6[_0x8ff7b4(0x80)].headers);
    });
});
