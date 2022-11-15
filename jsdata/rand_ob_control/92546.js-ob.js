'use strict';
jest['setMock']('../../BatchedBridge/NativeModules', { 'BlobModule': require('../__mocks__/BlobModule') });
const Blob = require('../Blob'), File = require('../File');
describe('babel\x207\x20smoke\x20test', function () {
    const _0x409ac6 = {
        'AEwCT': 'PASS',
        'lLGdr': function (_0x126499, _0x367667) {
            return _0x126499(_0x367667);
        },
        'vigmx': function (_0x27cb2b, _0x526d60) {
            return _0x27cb2b(_0x526d60);
        },
        'dgqQM': function (_0x1068df, _0x56e140, _0x3a3310) {
            return _0x1068df(_0x56e140, _0x3a3310);
        },
        'DCNNy': 'should\x20be\x20able\x20to\x20extend\x20a\x20class\x20with\x20native\x20name'
    };
    _0x409ac6['dgqQM'](it, _0x409ac6['DCNNy'], function () {
        const _0x5bf6e4 = { 'cxpTX': _0x409ac6['AEwCT'] };
        let _0x52fa41 = ![];
        class _0x4f57dd {
            constructor() {
                return _0x52fa41 = !![], { 'foo': _0x5bf6e4['cxpTX'] };
            }
        }
        class _0x4cc69e extends _0x4f57dd {
            constructor() {
                super();
            }
        }
        _0x409ac6['lLGdr'](expect, new _0x4cc69e()['foo'])['toBe'](_0x409ac6['AEwCT']), _0x409ac6['vigmx'](expect, _0x52fa41)['toBe'](!![]);
    });
}), describe('Blob', function () {
    const _0x58ad0d = {
        'efUNB': 'image/jpeg',
        'llhgb': function (_0x53f55d, _0x5c3ed2) {
            return _0x53f55d(_0x5c3ed2);
        },
        'KzwPC': function (_0x30a591, _0x580825, _0x414126) {
            return _0x30a591(_0x580825, _0x414126);
        },
        'DFNhT': 'regression\x20caused\x20by\x20circular\x20dep\x20&&\x20babel\x207'
    };
    _0x58ad0d['KzwPC'](it, _0x58ad0d['DFNhT'], function () {
        const _0x1deac6 = new Blob([], { 'type': _0x58ad0d['efUNB'] });
        _0x58ad0d['llhgb'](expect, _0x1deac6)['toBeInstanceOf'](Blob);
    });
}), describe('File', function () {
    const _0x3222c4 = {
        'QdUFw': 'test.jpg',
        'bQzgN': function (_0x521e23, _0x19a1fa) {
            return _0x521e23(_0x19a1fa);
        },
        'YAfjl': function (_0xb59c1e, _0x1bfd83) {
            return _0xb59c1e(_0x1bfd83);
        },
        'ARnlo': function (_0x7936, _0x5f44b0) {
            return _0x7936(_0x5f44b0);
        },
        'UhvHx': function (_0x4d07f7, _0x5bbb2a) {
            return _0x4d07f7(_0x5bbb2a);
        },
        'aYlEH': 'image/jpeg',
        'JaVjc': function (_0x278db8, _0x103c66) {
            return _0x278db8(_0x103c66);
        },
        'NzUIF': function (_0x4fb751, _0x5b0a35) {
            return _0x4fb751(_0x5b0a35);
        },
        'QUtGh': function (_0xfd314b, _0x190982, _0xb7018b) {
            return _0xfd314b(_0x190982, _0xb7018b);
        },
        'DFsgg': 'should\x20create\x20empty\x20file',
        'nfXhP': 'should\x20create\x20empty\x20file\x20with\x20type',
        'ZGctG': function (_0x19f5dd, _0x5960ce, _0x1901cd) {
            return _0x19f5dd(_0x5960ce, _0x1901cd);
        },
        'FuKwT': 'should\x20create\x20empty\x20file\x20with\x20lastModified',
        'vsnkj': 'should\x20throw\x20on\x20invalid\x20arguments'
    };
    _0x3222c4['QUtGh'](it, _0x3222c4['DFsgg'], () => {
        const _0x4be53a = new File([], _0x3222c4['QdUFw']);
        _0x3222c4['bQzgN'](expect, _0x4be53a)['toBeInstanceOf'](File), _0x3222c4['YAfjl'](expect, _0x4be53a['data']['offset'])['toBe'](0x0), _0x3222c4['YAfjl'](expect, _0x4be53a['data']['size'])['toBe'](0x0), _0x3222c4['YAfjl'](expect, _0x4be53a['size'])['toBe'](0x0), _0x3222c4['ARnlo'](expect, _0x4be53a['type'])['toBe'](''), _0x3222c4['ARnlo'](expect, _0x4be53a['name'])['toBe'](_0x3222c4['QdUFw']), _0x3222c4['UhvHx'](expect, _0x4be53a['lastModified'])['toEqual'](expect['any'](Number));
    }), _0x3222c4['QUtGh'](it, _0x3222c4['nfXhP'], () => {
        const _0x4d1da6 = new File([], _0x3222c4['QdUFw'], { 'type': _0x3222c4['aYlEH'] });
        _0x3222c4['JaVjc'](expect, _0x4d1da6['type'])['toBe'](_0x3222c4['aYlEH']);
    }), _0x3222c4['ZGctG'](it, _0x3222c4['FuKwT'], () => {
        const _0x2e6bcf = new File([], _0x3222c4['QdUFw'], { 'lastModified': 0x539 });
        _0x3222c4['NzUIF'](expect, _0x2e6bcf['lastModified'])['toBe'](0x539);
    }), _0x3222c4['ZGctG'](it, _0x3222c4['vsnkj'], () => {
        _0x3222c4['NzUIF'](expect, () => new File())['toThrow'](), _0x3222c4['NzUIF'](expect, () => new File([]))['toThrow']();
    });
});
