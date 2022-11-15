const _0x1fc3 = ['can\'t find npm module \'', 'TCweq', 'hOsgL', 'UCMsg', '\'. In package.js, Npm.require can only find built-in modules.', '836872FDiREN', '427836STkSqD', '2OmMuMV', '542413YCgNBo', '11539zIpsGo', '68vIbzqQ', '72840XsPFbh', '740733xlTifu', '2931760RcQjWw', '_dependencies', 'depends', 'object', 'the argument to Npm.depends should be an ', 'object, like this: {gcd: \'0.0.0\'}', 'MIpzZ', 'error', 'Ngtus', 'xBsnc', 'VasCT', 'merge', 'require'];
const _0x1e8cb6 = _0x5e1d;

(function (_0x154c38, _0x4902ed) {
    const _0x344913 = _0x5e1d;

    while (true) {
        try {
            const _0x1c870f = -parseInt(_0x344913(0x98)) + -parseInt(_0x344913(0x99)) + parseInt(_0x344913(0x9a)) * -parseInt(_0x344913(0x9b)) + -parseInt(_0x344913(0x9c)) * -parseInt(_0x344913(0x9d)) + -parseInt(_0x344913(0x9e)) + -parseInt(_0x344913(0x9f)) + parseInt(_0x344913(0xa0));

            if (_0x1c870f === _0x4902ed) break;else _0x154c38.push(_0x154c38.shift());
        } catch (_0x31f6b1) {
            _0x154c38.push(_0x154c38.shift());
        }
    }
})(_0x1fc3, 553305);
function _0x5e1d(_0x4d1486, _0x1a21cc) {
    return _0x5e1d = function (_0x1a1149, _0x140b1a) {
        _0x1a1149 = _0x1a1149 - 152;
        const _0x1b28d8 = _0x1fc3[_0x1a1149];

        return _0x1b28d8;
    }, _0x5e1d(_0x4d1486, _0x1a21cc);
}
import { ensureOnlyValidVersions } from '../utils/utils.js';
import _0x1b6f6f from '../utils/buildmessage.js';
import _0xd07ba6 from './npm-discards';
const nodeRequire = require;

export class PackageNpm {
    constructor() {
        const _0x1b5695 = _0x5e1d;

        this['_discards'] = new _0xd07ba6(), this[_0x1b5695(0xa1)] = null;
    }
    [_0x1e8cb6(0xa2)](_0x435a0e) {
        const _0x572cae = _0x1e8cb6;
        const _0x4c4505 = {
            'MIpzZ': function (_0x1df69d, _0x204049) {
                return _0x1df69d !== _0x204049;
            },
            'THXjJ': _0x572cae(0xa3),
            'zgJKd': function (_0x14ea2c, _0xf0db7b) {
                return _0x14ea2c + _0xf0db7b;
            },
            'Ngtus': _0x572cae(0xa4),
            'xBsnc': _0x572cae(0xa5),
            'VasCT': function (_0x72e10a, _0x4f40aa, _0x584b92) {
                return _0x72e10a(_0x4f40aa, _0x584b92);
            }
        };

        if (this[_0x572cae(0xa1)]) {
            _0x1b6f6f.error('Npm.depends may only be called once per package', { 'useMyCaller': true });
            return;
        }
        if (_0x4c4505[_0x572cae(0xa6)](typeof _0x435a0e, _0x4c4505.THXjJ)) {
            _0x1b6f6f[_0x572cae(0xa7)](_0x4c4505.zgJKd(_0x4c4505[_0x572cae(0xa8)], _0x4c4505[_0x572cae(0xa9)]), { 'useMyCaller': true });
            return;
        }
        try {
            _0x4c4505[_0x572cae(0xaa)](ensureOnlyValidVersions, _0x435a0e, { 'forCordova': false });
        } catch (_0x552f65) {
            _0x1b6f6f[_0x572cae(0xa7)](_0x552f65.message, {
                'useMyCaller': true,
                'downcase': true
            });
            return;
        }
        this[_0x572cae(0xa1)] = _0x435a0e;
    }
    ['strip'](_0x11c87c) {
        const _0x47444b = _0x1e8cb6;

        this._discards[_0x47444b(0xab)](_0x11c87c);
    }
    [_0x1e8cb6(0xac)](_0x151f0b) {
        const _0xb04df6 = _0x1e8cb6;
        const _0x184514 = {
            'TCweq': function (_0x39524f, _0x5290d4) {
                return _0x39524f(_0x5290d4);
            },
            'hOsgL': function (_0x5bbeed, _0x180c5d) {
                return _0x5bbeed + _0x180c5d;
            },
            'UCMsg': _0xb04df6(0xad)
        };

        try {
            return _0x184514[_0xb04df6(0xae)](nodeRequire, _0x151f0b);
        } catch (_0x57749e) {
            _0x1b6f6f[_0xb04df6(0xa7)](_0x184514[_0xb04df6(0xaf)](_0x184514.hOsgL(_0x184514[_0xb04df6(0xb0)], _0x151f0b), _0xb04df6(0xb1)), { 'useMyCaller': true });
        }
    }
}
