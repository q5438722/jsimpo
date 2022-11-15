const _0x505b = [
    'merge',
    'require',
    'can\x27t\x20find\x20npm\x20module\x20\x27',
    '\x27.\x20In\x20package.js,\x20Npm.require\x20can\x20only\x20find\x20built-in\x20modules.',
    '155450luyBkv',
    '18497GNqgxG',
    '1752rpNTXZ',
    '79lihIva',
    '317737SvHrcy',
    '1DSjdhN',
    '1zFwhMT',
    '10272LNbFhi',
    '350465jNsLPa',
    '1SeksQY',
    '1152592hPHyuX',
    '_discards',
    'depends',
    '_dependencies',
    'error',
    'Npm.depends\x20may\x20only\x20be\x20called\x20once\x20per\x20package',
    'object',
    'object,\x20like\x20this:\x20{gcd:\x20\x270.0.0\x27}',
    'message'
];
function _0x2aba(_0x528939, _0x5daf68) {
    return _0x2aba = function (_0x505b4d, _0x2aba0e) {
        _0x505b4d = _0x505b4d - 0x87;
        let _0x335d10 = _0x505b[_0x505b4d];
        return _0x335d10;
    }, _0x2aba(_0x528939, _0x5daf68);
}
const _0x5c4f8d = _0x2aba;
(function (_0x10db60, _0x2a3874) {
    const _0x15087d = _0x2aba;
    while (!![]) {
        try {
            const _0x49a2eb = -parseInt(_0x15087d(0x87)) + -parseInt(_0x15087d(0x88)) + parseInt(_0x15087d(0x89)) * -parseInt(_0x15087d(0x8a)) + -parseInt(_0x15087d(0x8b)) * parseInt(_0x15087d(0x8c)) + -parseInt(_0x15087d(0x8d)) * -parseInt(_0x15087d(0x8e)) + parseInt(_0x15087d(0x8f)) * -parseInt(_0x15087d(0x90)) + parseInt(_0x15087d(0x91));
            if (_0x49a2eb === _0x2a3874)
                break;
            else
                _0x10db60['push'](_0x10db60['shift']());
        } catch (_0x3c44fb) {
            _0x10db60['push'](_0x10db60['shift']());
        }
    }
}(_0x505b, 0x2c823));
import { ensureOnlyValidVersions } from '../utils/utils.js';
import _0x500e5f from '../utils/buildmessage.js';
import _0x2d9c3c from './npm-discards';
const nodeRequire = require;
export class PackageNpm {
    constructor() {
        const _0x5391db = _0x2aba;
        this[_0x5391db(0x92)] = new _0x2d9c3c(), this['_dependencies'] = null;
    }
    [_0x5c4f8d(0x93)](_0x419725) {
        const _0x1c4688 = _0x5c4f8d;
        if (this[_0x1c4688(0x94)]) {
            _0x500e5f[_0x1c4688(0x95)](_0x1c4688(0x96), { 'useMyCaller': !![] });
            return;
        }
        if (typeof _0x419725 !== _0x1c4688(0x97)) {
            _0x500e5f[_0x1c4688(0x95)]('the\x20argument\x20to\x20Npm.depends\x20should\x20be\x20an\x20' + _0x1c4688(0x98), { 'useMyCaller': !![] });
            return;
        }
        try {
            ensureOnlyValidVersions(_0x419725, { 'forCordova': ![] });
        } catch (_0x119c53) {
            _0x500e5f[_0x1c4688(0x95)](_0x119c53[_0x1c4688(0x99)], {
                'useMyCaller': !![],
                'downcase': !![]
            });
            return;
        }
        this[_0x1c4688(0x94)] = _0x419725;
    }
    ['strip'](_0x3d44d3) {
        const _0x23a86d = _0x5c4f8d;
        this[_0x23a86d(0x92)][_0x23a86d(0x9a)](_0x3d44d3);
    }
    [_0x5c4f8d(0x9b)](_0x5d2fff) {
        const _0x10f331 = _0x5c4f8d;
        try {
            return nodeRequire(_0x5d2fff);
        } catch (_0x2a5fb3) {
            _0x500e5f['error'](_0x10f331(0x9c) + _0x5d2fff + _0x10f331(0x9d), { 'useMyCaller': !![] });
        }
    }
}
