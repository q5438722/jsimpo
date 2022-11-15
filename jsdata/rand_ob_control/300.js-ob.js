import _0x16c444 from 'postcss';
import _0x2be408 from 'path';
import _0x98222e from '../../src/index.js';
function run(_0x1c09b7, _0x47569d = {}) {
    const _0x1be4e6 = {
        'OSyWX': function (_0x9e947, _0x438232) {
            return _0x9e947(_0x438232);
        }
    };
    return _0x1be4e6['OSyWX'](_0x16c444, _0x1be4e6['OSyWX'](_0x98222e, _0x47569d))['process'](_0x1c09b7, { 'from': _0x2be408['resolve'](__filename) });
}
test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height', () => {
    const _0x5125e2 = {
            'Yrazi': function (_0x251d4d, _0x17edfb) {
                return _0x251d4d(_0x17edfb);
            },
            'lhhhH': '12px',
            'caKsK': '16px',
            'VIHVv': '24px',
            'oWUVV': '20px',
            'jUyww': '28px',
            'seSFx': 'fontSize',
            'MrrRd': function (_0xd7e837, _0x4f8056, _0x37461f) {
                return _0xd7e837(_0x4f8056, _0x37461f);
            },
            'EEwWn': '@tailwind\x20utilities'
        }, _0x5e6e38 = {
            'theme': {
                'fontSize': {
                    'sm': _0x5125e2['lhhhH'],
                    'md': [
                        _0x5125e2['caKsK'],
                        _0x5125e2['VIHVv']
                    ],
                    'lg': [
                        _0x5125e2['oWUVV'],
                        _0x5125e2['jUyww']
                    ]
                }
            },
            'corePlugins': [_0x5125e2['seSFx']],
            'variants': { 'fontSize': [] }
        };
    return _0x5125e2['MrrRd'](run, _0x5125e2['EEwWn'], _0x5e6e38)['then'](_0x20eea8 => {
        _0x5125e2['Yrazi'](expect, _0x20eea8['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px\x20}\x0a\x20\x20\x20\x20');
    });
}), test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20letter-spacing', () => {
    const _0x21c566 = {
            'Tgfua': function (_0x217ce2, _0xd9f8e2) {
                return _0x217ce2(_0xd9f8e2);
            },
            'vgrlC': '12px',
            'HECCG': '16px',
            'onZQO': '-0.01em',
            'gyOJU': '20px',
            'rCqxc': '-0.02em',
            'ykeXX': 'fontSize',
            'oJPUx': function (_0xbc9f3a, _0x51a116, _0x3fced3) {
                return _0xbc9f3a(_0x51a116, _0x3fced3);
            },
            'kAxbO': '@tailwind\x20utilities'
        }, _0x54db36 = {
            'theme': {
                'fontSize': {
                    'sm': _0x21c566['vgrlC'],
                    'md': [
                        _0x21c566['HECCG'],
                        { 'letterSpacing': _0x21c566['onZQO'] }
                    ],
                    'lg': [
                        _0x21c566['gyOJU'],
                        { 'letterSpacing': _0x21c566['rCqxc'] }
                    ]
                }
            },
            'corePlugins': [_0x21c566['ykeXX']],
            'variants': { 'fontSize': [] }
        };
    return _0x21c566['oJPUx'](run, _0x21c566['kAxbO'], _0x54db36)['then'](_0x94075b => {
        _0x21c566['Tgfua'](expect, _0x94075b['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20');
    });
}), test('font-size\x20utilities\x20can\x20include\x20a\x20default\x20line-height\x20and\x20letter-spacing', () => {
    const _0x319984 = {
            'wOkhx': function (_0x4e7a97, _0x4174ff) {
                return _0x4e7a97(_0x4174ff);
            },
            'zyGZJ': '12px',
            'PDVLh': '16px',
            'aqKVs': '24px',
            'OGSBK': '-0.01em',
            'ZcsCJ': '20px',
            'nFDLj': '28px',
            'UwIYw': '-0.02em',
            'MUaOy': 'fontSize',
            'Ubryf': function (_0x3768b6, _0x1fd6d1, _0x5c0548) {
                return _0x3768b6(_0x1fd6d1, _0x5c0548);
            },
            'oASPY': '@tailwind\x20utilities'
        }, _0x55cffa = {
            'theme': {
                'fontSize': {
                    'sm': _0x319984['zyGZJ'],
                    'md': [
                        _0x319984['PDVLh'],
                        {
                            'lineHeight': _0x319984['aqKVs'],
                            'letterSpacing': _0x319984['OGSBK']
                        }
                    ],
                    'lg': [
                        _0x319984['ZcsCJ'],
                        {
                            'lineHeight': _0x319984['nFDLj'],
                            'letterSpacing': _0x319984['UwIYw']
                        }
                    ]
                }
            },
            'corePlugins': [_0x319984['MUaOy']],
            'variants': { 'fontSize': [] }
        };
    return _0x319984['Ubryf'](run, _0x319984['oASPY'], _0x55cffa)['then'](_0x3af5ba => {
        _0x319984['wOkhx'](expect, _0x3af5ba['css'])['toMatchCss']('\x0a\x20\x20\x20\x20\x20.text-sm\x20{\x20font-size:\x2012px\x20}\x0a\x20\x20\x20\x20\x20.text-md\x20{\x20font-size:\x2016px;\x20line-height:\x2024px;\x20letter-spacing:\x20-0.01em\x20}\x0a\x20\x20\x20\x20\x20.text-lg\x20{\x20font-size:\x2020px;\x20line-height:\x2028px;\x20letter-spacing:\x20-0.02em\x20}\x0a\x20\x20\x20\x20');
    });
});
