'use strict';

const _0x358f = ['aiUre', 'MvcDH', 'mgRlC', 'foo', 'qoMUW', 'Ynlbf', 'eehnN', 'ZflGP', 'wKpEU', 'false', 'wePfZ', 'nMppm', 'sRZqV', 'SWYHi', 'should match if parent is behind variables', 'yVUNZ', 'mWpDR', 'BTtJL', 'uETLi', 'childParent\0ok', 'lmUdz', 'XtizJ', 'true', '368728rPnxvs', '128463pLYavS', '14657mYXtCG', '16nZzryC', '66417xPAkam', '4VxrgcM', '379400odMqOY', '348203wnOYax', '15749oKWTcW', '5hCvSsY', 'test/unit/lib/configuration/variables/is-property-resolved.test.js', '${a:}', 'root', 'childParent\0child', 'childParent', 'parent\0parentChild', 'elo', 'should match property directly', 'should match if children are behind variables', 'should not match not existing'];
const _0x210542 = _0x36d0;

(function (_0x127518, _0x536748) {
    const _0x2942b6 = _0x36d0;

    while (true) {
        try {
            const _0xebc76d = parseInt(_0x2942b6(0x128)) + parseInt(_0x2942b6(0x129)) + -parseInt(_0x2942b6(0x12a)) * -parseInt(_0x2942b6(0x12b)) + -parseInt(_0x2942b6(0x12c)) * -parseInt(_0x2942b6(0x12d)) + -parseInt(_0x2942b6(0x12e)) + -parseInt(_0x2942b6(0x12f)) + parseInt(_0x2942b6(0x130)) * -parseInt(_0x2942b6(0x131));

            if (_0xebc76d === _0x536748) break;else _0x127518.push(_0x127518.shift());
        } catch (_0x4e98b3) {
            _0x127518.push(_0x127518.shift());
        }
    }
})(_0x358f, 191023);
function _0x36d0(_0xffba60, _0x4c9bb0) {
    return _0x36d0 = function (_0x2b7a6d, _0x152e05) {
        _0x2b7a6d = _0x2b7a6d - 296;
        const _0x16008b = _0x358f[_0x2b7a6d];

        return _0x16008b;
    }, _0x36d0(_0xffba60, _0x4c9bb0);
}

var { expect } = require('chai');

const resolveMeta = require('../../../../../lib/configuration/variables/resolve-meta');

const isPropertyResolved = require('../../../../../lib/configuration/variables/is-property-resolved');

describe(_0x210542(0x132), () => {
    const _0xc6d99a = _0x210542;
    const _0x150609 = {
        'MvcDH': function (_0x512092, _0x79cc04) {
            return _0x512092(_0x79cc04);
        },
        'mgRlC': _0xc6d99a(0x133),
        'eehnN': function (_0x2b2742, _0x3f8e66) {
            return _0x2b2742(_0x3f8e66);
        },
        'ZflGP': function (_0x4dafd5, _0x1fcd6a, _0x2c502c) {
            return _0x4dafd5(_0x1fcd6a, _0x2c502c);
        },
        'wKpEU': _0xc6d99a(0x134),
        'wePfZ': _0xc6d99a(0x135),
        'sRZqV': function (_0x287542, _0x10126d, _0x348e7a) {
            return _0x287542(_0x10126d, _0x348e7a);
        },
        'FSILz': _0xc6d99a(0x136),
        'koteW': function (_0x56642e, _0x4ec6eb) {
            return _0x56642e(_0x4ec6eb);
        },
        'jVaBW': function (_0x4de9d7, _0x4ea599, _0x31346d) {
            return _0x4de9d7(_0x4ea599, _0x31346d);
        },
        'yVUNZ': _0xc6d99a(0x137),
        'aiUre': function (_0x3befbb, _0x2c72b1) {
            return _0x3befbb(_0x2c72b1);
        },
        'BTtJL': function (_0x35e9fd, _0x52c538, _0x29a114) {
            return _0x35e9fd(_0x52c538, _0x29a114);
        },
        'rulMU': 'rooto',
        'uETLi': function (_0x451287, _0x3b0722, _0x269b08) {
            return _0x451287(_0x3b0722, _0x269b08);
        },
        'XtizJ': function (_0x1ced78, _0x532704, _0x5e2ea0) {
            return _0x1ced78(_0x532704, _0x5e2ea0);
        },
        'OzQme': _0xc6d99a(0x138),
        'qoMUW': function (_0x41ae7c, _0x5d5c15, _0x442941) {
            return _0x41ae7c(_0x5d5c15, _0x442941);
        },
        'Ynlbf': _0xc6d99a(0x139),
        'nMppm': _0xc6d99a(0x13a),
        'SWYHi': function (_0x55c468, _0x86d778, _0x49ab71) {
            return _0x55c468(_0x86d778, _0x49ab71);
        },
        'mWpDR': 'should not match not affected',
        'lmUdz': _0xc6d99a(0x13b)
    };

    var _0x1ca35a;

    _0x150609[_0xc6d99a(0x13c)](before, () => {
        const _0x271d0c = _0xc6d99a;

        _0x1ca35a = _0x150609[_0x271d0c(0x13d)](resolveMeta, {
            'root': _0x271d0c(0x133),
            'childParent': {
                'child': _0x271d0c(0x133),
                'ok': true
            },
            'parent': _0x150609[_0x271d0c(0x13e)],
            'rooto': _0x271d0c(0x13f)
        });
    }), _0x150609[_0xc6d99a(0x140)](it, _0x150609[_0xc6d99a(0x141)], () => {
        const _0x55b6d1 = _0xc6d99a;

        _0x150609[_0x55b6d1(0x142)](expect, _0x150609[_0x55b6d1(0x143)](isPropertyResolved, _0x1ca35a, _0x150609[_0x55b6d1(0x144)])).to.be[_0x55b6d1(0x145)], expect(_0x150609[_0x55b6d1(0x143)](isPropertyResolved, _0x1ca35a, _0x150609[_0x55b6d1(0x146)])).to.be[_0x55b6d1(0x145)];
    }), it(_0x150609[_0xc6d99a(0x147)], () => {
        const _0x1b449a = _0xc6d99a;

        _0x150609.eehnN(expect, _0x150609[_0x1b449a(0x148)](isPropertyResolved, _0x1ca35a, _0x150609.FSILz)).to.be[_0x1b449a(0x145)];
    }), _0x150609[_0xc6d99a(0x149)](it, _0xc6d99a(0x14a), () => {
        const _0x541316 = _0xc6d99a;

        _0x150609.koteW(expect, _0x150609.jVaBW(isPropertyResolved, _0x1ca35a, _0x150609[_0x541316(0x14b)])).to.be[_0x541316(0x145)];
    }), _0x150609.SWYHi(it, _0x150609[_0xc6d99a(0x14c)], () => {
        const _0xad3bf4 = _0xc6d99a;

        _0x150609[_0xad3bf4(0x13c)](expect, _0x150609[_0xad3bf4(0x14d)](isPropertyResolved, _0x1ca35a, _0x150609.rulMU)).to.be.true, _0x150609.aiUre(expect, _0x150609[_0xad3bf4(0x14e)](isPropertyResolved, _0x1ca35a, _0xad3bf4(0x14f))).to.be.true;
    }), _0x150609.SWYHi(it, _0x150609[_0xc6d99a(0x150)], () => {
        const _0xd60eee = _0xc6d99a;

        expect(_0x150609[_0xd60eee(0x151)](isPropertyResolved, _0x1ca35a, _0x150609.OzQme)).to.be.true, _0x150609[_0xd60eee(0x13c)](expect, _0x150609[_0xd60eee(0x151)](isPropertyResolved, _0x1ca35a, 'childParent\0none')).to.be[_0xd60eee(0x152)];
    });
});
