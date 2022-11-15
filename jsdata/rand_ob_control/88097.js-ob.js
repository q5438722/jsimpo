import { ensureOnlyValidVersions } from '../utils/utils.js';
import _0x261b0f from '../utils/buildmessage.js';
import _0x32d1d4 from './npm-discards';
const nodeRequire = require;
export class PackageNpm {
    constructor() {
        this['_discards'] = new _0x32d1d4(), this['_dependencies'] = null;
    }
    ['depends'](_0x5b9a47) {
        const _0x4edf70 = {
            'Cyzdb': 'Npm.depends\x20may\x20only\x20be\x20called\x20once\x20per\x20package',
            'sWdDx': function (_0x4adb5c, _0x2fae69) {
                return _0x4adb5c !== _0x2fae69;
            },
            'GtWHU': 'object',
            'sQFJF': function (_0x2809bb, _0x2d091e) {
                return _0x2809bb + _0x2d091e;
            },
            'dUFJO': 'the\x20argument\x20to\x20Npm.depends\x20should\x20be\x20an\x20',
            'kSibn': 'object,\x20like\x20this:\x20{gcd:\x20\x270.0.0\x27}',
            'inqbu': function (_0x44a60e, _0x548f50, _0x584d94) {
                return _0x44a60e(_0x548f50, _0x584d94);
            }
        };
        if (this['_dependencies']) {
            _0x261b0f['error'](_0x4edf70['Cyzdb'], { 'useMyCaller': !![] });
            return;
        }
        if (_0x4edf70['sWdDx'](typeof _0x5b9a47, _0x4edf70['GtWHU'])) {
            _0x261b0f['error'](_0x4edf70['sQFJF'](_0x4edf70['dUFJO'], _0x4edf70['kSibn']), { 'useMyCaller': !![] });
            return;
        }
        try {
            _0x4edf70['inqbu'](ensureOnlyValidVersions, _0x5b9a47, { 'forCordova': ![] });
        } catch (_0x1b0bda) {
            _0x261b0f['error'](_0x1b0bda['message'], {
                'useMyCaller': !![],
                'downcase': !![]
            });
            return;
        }
        this['_dependencies'] = _0x5b9a47;
    }
    ['strip'](_0x305c34) {
        this['_discards']['merge'](_0x305c34);
    }
    ['require'](_0x1723c7) {
        const _0x19960a = {
            'FgsZe': function (_0x5a5e77, _0x7182f8) {
                return _0x5a5e77(_0x7182f8);
            },
            'swFPH': function (_0x549ef3, _0x13276e) {
                return _0x549ef3 + _0x13276e;
            },
            'Zdzcg': function (_0x3a2adf, _0x47f1be) {
                return _0x3a2adf + _0x47f1be;
            },
            'eFcWx': 'can\x27t\x20find\x20npm\x20module\x20\x27',
            'nujbf': '\x27.\x20In\x20package.js,\x20Npm.require\x20can\x20only\x20find\x20built-in\x20modules.'
        };
        try {
            return _0x19960a['FgsZe'](nodeRequire, _0x1723c7);
        } catch (_0x4ebf5e) {
            _0x261b0f['error'](_0x19960a['swFPH'](_0x19960a['Zdzcg'](_0x19960a['eFcWx'], _0x1723c7), _0x19960a['nujbf']), { 'useMyCaller': !![] });
        }
    }
}
