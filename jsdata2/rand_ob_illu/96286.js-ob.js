const _0x7473 = ['2284537pEOpyr', 'tape', '--a.b', 'aa.bb', 'gVdLq', 'EBcKb', 'equal', 'end', 'TmNmy', 'hUYRl', 'dotted default with no alias', '570879RgQSqx', '7XErXcm', '27124JJiiTh', '3GKfJgK', '289405TVcmUA', '3501NxcnaS', '267iiDUpR', '41OrJSFe', '11941ombybq', '271635rOqybN', '1rvBjut'];

function _0xb833(_0x3490d6, _0x51ed59) {
    return _0xb833 = function (_0x6811e6, _0x5a82af) {
        _0x6811e6 = _0x6811e6 - 215;
        const _0x10a414 = _0x7473[_0x6811e6];

        return _0x10a414;
    }, _0xb833(_0x3490d6, _0x51ed59);
}
const _0x4d641e = _0xb833;

(function (_0x1ccbce, _0x30524a) {
    const _0x1e2f7b = _0xb833;

    while (true) {
        try {
            const _0x2dc993 = parseInt(_0x1e2f7b(0xd7)) + -parseInt(_0x1e2f7b(0xd8)) * -parseInt(_0x1e2f7b(0xd9)) + -parseInt(_0x1e2f7b(0xda)) * parseInt(_0x1e2f7b(0xdb)) + parseInt(_0x1e2f7b(0xdc)) * -parseInt(_0x1e2f7b(0xdd)) + parseInt(_0x1e2f7b(0xde)) * -parseInt(_0x1e2f7b(0xdf)) + -parseInt(_0x1e2f7b(0xe0)) + parseInt(_0x1e2f7b(0xe1)) * parseInt(_0x1e2f7b(0xe2));

            if (_0x2dc993 === _0x30524a) break;else _0x1ccbce.push(_0x1ccbce.shift());
        } catch (_0x463d15) {
            _0x1ccbce.push(_0x1ccbce.shift());
        }
    }
})(_0x7473, 481086);

const parse = require('../');

const test = require(_0x4d641e(0xe3));

test('dotted alias', function (_0x4a13a9) {
    const _0x1acebc = _0x4d641e;
    const _0x4bf6c8 = {
        'gVdLq': function (_0x13c1c8, _0x4ad969, _0x13f69d) {
            return _0x13c1c8(_0x4ad969, _0x13f69d);
        },
        'EBcKb': _0x1acebc(0xe4),
        'iydHK': _0x1acebc(0xe5)
    };

    const _0x32aa6b = _0x4bf6c8[_0x1acebc(0xe6)](parse, [_0x4bf6c8[_0x1acebc(0xe7)], '22'], {
        'default': { 'a.b': 0xb },
        'alias': { 'a.b': _0x4bf6c8.iydHK }
    });

    _0x4a13a9[_0x1acebc(0xe8)](_0x32aa6b.a.b, 22), _0x4a13a9[_0x1acebc(0xe8)](_0x32aa6b.aa.bb, 22), _0x4a13a9[_0x1acebc(0xe9)]();
}), test('dotted default', function (_0x1550fa) {
    const _0x3245d1 = _0x4d641e;
    const _0x3359a6 = {
        'TmNmy': function (_0x21a205, _0x1bb4c8, _0x53541d) {
            return _0x21a205(_0x1bb4c8, _0x53541d);
        },
        'hUYRl': _0x3245d1(0xe5)
    };

    const _0x52735d = _0x3359a6[_0x3245d1(0xea)](parse, '', {
        'default': { 'a.b': 0xb },
        'alias': { 'a.b': _0x3359a6[_0x3245d1(0xeb)] }
    });

    _0x1550fa[_0x3245d1(0xe8)](_0x52735d.a.b, 11), _0x1550fa[_0x3245d1(0xe8)](_0x52735d.aa.bb, 11), _0x1550fa.end();
}), test(_0x4d641e(0xec), function (_0x5668e4) {
    const _0x175f03 = _0x4d641e;

    const _0x51995f = parse('', { 'default': { 'a.b': 0xb } });

    _0x5668e4[_0x175f03(0xe8)](_0x51995f.a.b, 11), _0x5668e4[_0x175f03(0xe9)]();
});
