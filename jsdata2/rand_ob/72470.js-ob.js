'use strict';
const _0x4f63 = [
    'options',
    'experiments',
    'layers',
    'eesMV',
    'uisha',
    'LPJEf',
    'checkEnabled',
    'wasmLoading',
    'dyafC',
    'type',
    '346ahXPFr',
    '814qMLipy',
    '111120bGUUqZ',
    '551009OQWQNb',
    '1ZYCPKd',
    '1AGyTBS',
    '16038eLIEUd',
    '1UyLztp',
    '333997HMMLZx',
    '1OyKLsh',
    '66161dDCNDq',
    '1ZdIrON',
    '734133Mchvif',
    'apply',
    'EntryOptionPlugin',
    'hooks',
    'entryOption',
    'tap',
    'ZYZAu',
    'applyEntryOption',
    './DynamicEntryPlugin',
    './EntryPlugin',
    'edoYt',
    'SNUQQ',
    'IQGVx',
    'mEcSJ',
    'KOfNb',
    'keys',
    'import',
    '\x27entryOptions.layer\x27\x20is\x20only\x20allowed\x20when\x20\x27experiments.layers\x27\x20is\x20enabled',
    './javascript/EnableChunkLoadingPlugin',
    './wasm/EnableWasmLoadingPlugin',
    './library/EnableLibraryPlugin',
    'runtime',
    'layer',
    'publicPath',
    'chunkLoading',
    'library'
];
const _0x2dc4d4 = _0x2578;
(function (_0x42a112, _0x3d7955) {
    const _0x4d883f = _0x2578;
    while (!![]) {
        try {
            const _0x2c839a = -parseInt(_0x4d883f(0x91)) * parseInt(_0x4d883f(0x92)) + parseInt(_0x4d883f(0x93)) + -parseInt(_0x4d883f(0x94)) * parseInt(_0x4d883f(0x95)) + parseInt(_0x4d883f(0x96)) * parseInt(_0x4d883f(0x97)) + parseInt(_0x4d883f(0x98)) * parseInt(_0x4d883f(0x99)) + parseInt(_0x4d883f(0x9a)) * parseInt(_0x4d883f(0x9b)) + -parseInt(_0x4d883f(0x9c)) * -parseInt(_0x4d883f(0x9d));
            if (_0x2c839a === _0x3d7955)
                break;
            else
                _0x42a112['push'](_0x42a112['shift']());
        } catch (_0x4f9101) {
            _0x42a112['push'](_0x42a112['shift']());
        }
    }
}(_0x4f63, 0xbbe52 + 0x41cc * 0x5 + 0x39a * -0x1cd));
function _0x2578(_0x2ec87b, _0x4cb600) {
    return _0x2578 = function (_0x2e18db, _0x40c8cc) {
        _0x2e18db = _0x2e18db - (-0x1 * 0x13ee + 0x2382 + -0xf03);
        let _0x177119 = _0x4f63[_0x2e18db];
        return _0x177119;
    }, _0x2578(_0x2ec87b, _0x4cb600);
}
class EntryOptionPlugin {
    [_0x2dc4d4(0x9e)](_0x441edc) {
        const _0x2f266b = _0x2dc4d4, _0x52cd98 = { 'ZYZAu': _0x2f266b(0x9f) };
        _0x441edc[_0x2f266b(0xa0)][_0x2f266b(0xa1)][_0x2f266b(0xa2)](_0x52cd98[_0x2f266b(0xa3)], (_0x562059, _0x531f65) => {
            const _0x560072 = _0x2f266b;
            return EntryOptionPlugin[_0x560072(0xa4)](_0x441edc, _0x562059, _0x531f65), !![];
        });
    }
    static [_0x2dc4d4(0xa4)](_0x2dba73, _0x13ccbc, _0x4d84a6) {
        const _0x41d1d2 = _0x2dc4d4, _0x3e8f06 = {
                'edoYt': function (_0x18b03f, _0x39e5b9) {
                    return _0x18b03f === _0x39e5b9;
                },
                'SNUQQ': 'function',
                'IQGVx': function (_0x435204, _0x1ddbe0) {
                    return _0x435204(_0x1ddbe0);
                },
                'mEcSJ': _0x41d1d2(0xa5),
                'KOfNb': _0x41d1d2(0xa6)
            };
        if (_0x3e8f06[_0x41d1d2(0xa7)](typeof _0x4d84a6, _0x3e8f06[_0x41d1d2(0xa8)])) {
            const _0x4ba474 = _0x3e8f06[_0x41d1d2(0xa9)](require, _0x3e8f06[_0x41d1d2(0xaa)]);
            new _0x4ba474(_0x13ccbc, _0x4d84a6)[_0x41d1d2(0x9e)](_0x2dba73);
        } else {
            const _0x57420a = _0x3e8f06[_0x41d1d2(0xa9)](require, _0x3e8f06[_0x41d1d2(0xab)]);
            for (const _0x485171 of Object[_0x41d1d2(0xac)](_0x4d84a6)) {
                const _0x29c3c6 = _0x4d84a6[_0x485171], _0x9ad48d = EntryOptionPlugin['entryDescriptionToOptions'](_0x2dba73, _0x485171, _0x29c3c6);
                for (const _0x57434a of _0x29c3c6[_0x41d1d2(0xad)]) {
                    new _0x57420a(_0x13ccbc, _0x57434a, _0x9ad48d)[_0x41d1d2(0x9e)](_0x2dba73);
                }
            }
        }
    }
    static ['entryDescriptionToOptions'](_0xec1456, _0xe1de54, _0x24d003) {
        const _0x447fff = _0x2dc4d4, _0x2c3c30 = {
                'tEWSv': function (_0x2e7a56, _0x4efd68) {
                    return _0x2e7a56 !== _0x4efd68;
                },
                'eesMV': _0x447fff(0xae),
                'uisha': function (_0x4ce433, _0x17f220) {
                    return _0x4ce433(_0x17f220);
                },
                'LPJEf': _0x447fff(0xaf),
                'dyafC': _0x447fff(0xb0),
                'NDcfe': _0x447fff(0xb1)
            }, _0x321506 = {
                'name': _0xe1de54,
                'filename': _0x24d003['filename'],
                'runtime': _0x24d003[_0x447fff(0xb2)],
                'layer': _0x24d003[_0x447fff(0xb3)],
                'dependOn': _0x24d003['dependOn'],
                'publicPath': _0x24d003[_0x447fff(0xb4)],
                'chunkLoading': _0x24d003[_0x447fff(0xb5)],
                'wasmLoading': _0x24d003['wasmLoading'],
                'library': _0x24d003[_0x447fff(0xb6)]
            };
        if (_0x2c3c30['tEWSv'](_0x24d003[_0x447fff(0xb3)], undefined) && !_0xec1456[_0x447fff(0xb7)][_0x447fff(0xb8)][_0x447fff(0xb9)])
            throw new Error(_0x2c3c30[_0x447fff(0xba)]);
        if (_0x24d003[_0x447fff(0xb5)]) {
            const _0x32a888 = _0x2c3c30[_0x447fff(0xbb)](require, _0x2c3c30[_0x447fff(0xbc)]);
            _0x32a888[_0x447fff(0xbd)](_0xec1456, _0x24d003['chunkLoading']);
        }
        if (_0x24d003[_0x447fff(0xbe)]) {
            const _0x3790bc = require(_0x2c3c30[_0x447fff(0xbf)]);
            _0x3790bc[_0x447fff(0xbd)](_0xec1456, _0x24d003[_0x447fff(0xbe)]);
        }
        if (_0x24d003['library']) {
            const _0x345172 = _0x2c3c30[_0x447fff(0xbb)](require, _0x2c3c30['NDcfe']);
            _0x345172['checkEnabled'](_0xec1456, _0x24d003[_0x447fff(0xb6)][_0x447fff(0xc0)]);
        }
        return _0x321506;
    }
}
module['exports'] = EntryOptionPlugin;
