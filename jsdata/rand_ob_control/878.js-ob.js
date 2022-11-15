import * as _0x2d9c49 from '../src/api';
describe('systemInfo', () => {
    const _0x53a942 = {
        'gOjaC': function (_0x1988bd, _0x184025) {
            return _0x1988bd(_0x184025);
        },
        'DNUER': 'brand',
        'kkAzl': function (_0x212a56, _0x1b2038) {
            return _0x212a56(_0x1b2038);
        },
        'Urjlp': 'model',
        'eKyMV': function (_0x4f5c2f, _0x830f64) {
            return _0x4f5c2f(_0x830f64);
        },
        'kzyFx': 'system',
        'buaFp': function (_0x47d5cd, _0x11ac1a) {
            return _0x47d5cd(_0x11ac1a);
        },
        'wxbSK': 'pixelRatio',
        'naMlX': function (_0x30d9a1, _0x240600) {
            return _0x30d9a1(_0x240600);
        },
        'MeRDs': 'screenWidth',
        'MocoR': function (_0x44aa30, _0x4f144e) {
            return _0x44aa30(_0x4f144e);
        },
        'BtRDr': 'screenHeight',
        'PYHSc': function (_0xbbb86a, _0x342090) {
            return _0xbbb86a(_0x342090);
        },
        'fWbnE': 'windowWidth',
        'IjmAT': 'windowHeight',
        'Tsrfo': function (_0x567c2a, _0x2f83f5) {
            return _0x567c2a(_0x2f83f5);
        },
        'IWnQR': 'version',
        'BHbeD': function (_0x36cb1b, _0x4dc75c) {
            return _0x36cb1b(_0x4dc75c);
        },
        'dDphf': 'statusBarHeight',
        'UwmrB': function (_0x2f8002, _0x1f524a) {
            return _0x2f8002(_0x1f524a);
        },
        'ldLmH': 'platform',
        'htczW': function (_0x4e89d8, _0x18c3ae) {
            return _0x4e89d8(_0x18c3ae);
        },
        'XycwS': 'language',
        'Bwwcx': function (_0x2963ea, _0x1342c9) {
            return _0x2963ea(_0x1342c9);
        },
        'tbvcm': 'fontSizeSetting',
        'aShIF': 'SDKVersion',
        'ySMWO': function (_0x3ef4cd, _0x31fd86) {
            return _0x3ef4cd(_0x31fd86);
        },
        'YBvxp': function (_0x3b2c1c, _0x5ceba2, _0x109c14) {
            return _0x3b2c1c(_0x5ceba2, _0x109c14);
        },
        'vyEUq': 'should\x20getSystemInfoSync\x20return\x20system\x20information',
        'WBnqR': function (_0x2d434d, _0x44e369, _0x4ef345) {
            return _0x2d434d(_0x44e369, _0x4ef345);
        },
        'noDVk': 'should\x20getSystemInfo\x20return\x20Promise\x20that\x20resolve\x20system\x20information'
    };
    _0x53a942['YBvxp'](test, _0x53a942['vyEUq'], () => {
        const _0x4b541f = _0x2d9c49['getSystemInfoSync']();
        _0x53a942['gOjaC'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['DNUER']), _0x53a942['kkAzl'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['Urjlp']), _0x53a942['eKyMV'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['kzyFx']), _0x53a942['buaFp'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['wxbSK']), _0x53a942['naMlX'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['MeRDs']), _0x53a942['MocoR'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['BtRDr']), _0x53a942['PYHSc'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['fWbnE']), _0x53a942['PYHSc'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['IjmAT']), _0x53a942['Tsrfo'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['IWnQR']), _0x53a942['BHbeD'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['dDphf']), _0x53a942['UwmrB'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['ldLmH']), _0x53a942['htczW'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['XycwS']), _0x53a942['Bwwcx'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['tbvcm']), _0x53a942['Bwwcx'](expect, _0x4b541f)['toHaveProperty'](_0x53a942['aShIF']);
    }), _0x53a942['WBnqR'](test, _0x53a942['noDVk'], () => {
        const _0x312ade = jest['fn'](), _0x4f4210 = jest['fn']();
        return expect['assertions'](0x3), _0x2d9c49['getSystemInfo']({
            'success': _0x312ade,
            'complete': _0x4f4210
        })['then'](_0x180bc4 => {
            _0x53a942['ySMWO'](expect, _0x312ade['mock']['calls']['length'])['toBe'](0x1), _0x53a942['ySMWO'](expect, _0x4f4210['mock']['calls']['length'])['toBe'](0x1), _0x53a942['ySMWO'](expect, _0x180bc4)['toEqual'](_0x2d9c49['getSystemInfoSync']());
        });
    });
});
