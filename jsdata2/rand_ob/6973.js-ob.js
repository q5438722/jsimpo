const _0x4458 = [
    'pdZSs',
    'addArguments',
    'ENpoH',
    '80279ShVJKU',
    '509736KLRdva',
    '184764jquadm',
    '386BMnAVY',
    '10gKlNdK',
    '447670bnmeSO',
    '2mecBlB',
    '270267sxzJHD',
    '987801AJPaCz',
    'duration',
    'https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json',
    'join',
    'logs',
    'XlwOV',
    'string',
    'wpWEd',
    'replace',
    'log',
    'Stat\x20error:',
    'preact-v8',
    'file:',
    'benches/proxy-packages/preact-v8-proxy',
    'cIAnR',
    'dependencies',
    'preact-master',
    'benches/proxy-packages/preact-master-proxy',
    'preact.tgz',
    'NCgXB',
    'emCVZ',
    'framework',
    'preact-local',
    '02_replace1k',
    'window.usedJSHeapSize',
    'basename',
    '.html',
    'posix',
    'TlgrF',
    'dGPbr',
    'XhcWN',
    'TBXgF',
    'ZUvJw',
    'uERTV',
    'SvKhi',
    'expression',
    'ngQFg',
    'iZQBQ',
    'run-warmup-',
    'push',
    'ElnyI',
    'performance',
    'geQNU',
    'FmPPh',
    'sEALj',
    'isFile',
    'Given\x20path\x20is\x20not\x20a\x20file:\x20',
    'chrome',
    '**/*',
    'Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time',
    'acHsx',
    'isArray',
    'browser',
    'EUiHq',
    'trace',
    'name',
    'urUJl',
    'wythW',
    'jozWK',
    'find',
    'filter',
    'includes',
    'label',
    'Unrecognized\x20framework\x20option:\x20',
    'length',
    'IIksA',
    'Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a',
    '\x09Provided\x20option:\x20',
    '\x09Available\x20frameworks:\x20[',
    'map',
    'stringify',
    'Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20',
    'MKKYe',
    'ebOCP',
    'isValid',
    'Could\x20not\x20locate\x20path\x20for\x20',
    '.\x20\x0aSkipping...',
    'has',
    'warn',
    'add',
    'prepare',
    'packageVersions',
    'OAoLa',
    'horizon',
    'split',
    'benchmarks',
    'Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20',
    'dist',
    '.config.json',
    'utf8',
    'GmeRC',
    'CFjIh',
    'yDcLY',
    'lSVed',
    'dirname',
    'vuPMv',
    '-headless',
    '--enable-precise-memory-info',
    'zRuAU',
    'substring',
    'tXPDL'
];
const _0x4a2da1 = _0x23cf;
(function (_0x12dede, _0x23ef78) {
    const _0x355217 = _0x23cf;
    while (!![]) {
        try {
            const _0x45ca61 = -parseInt(_0x355217(0x14d)) + -parseInt(_0x355217(0x14e)) + -parseInt(_0x355217(0x14f)) + parseInt(_0x355217(0x150)) * -parseInt(_0x355217(0x151)) + -parseInt(_0x355217(0x152)) + -parseInt(_0x355217(0x153)) * -parseInt(_0x355217(0x154)) + parseInt(_0x355217(0x155));
            if (_0x45ca61 === _0x23ef78)
                break;
            else
                _0x12dede['push'](_0x12dede['shift']());
        } catch (_0x439270) {
            _0x12dede['push'](_0x12dede['shift']());
        }
    }
}(_0x4458, 0x1 * 0x658d + 0x66865 + -0x23228));
import * as _0x375d37 from 'path';
import _0x42f629 from 'del';
import {
    writeFile,
    stat,
    mkdir
} from 'fs/promises';
import {
    repoRoot,
    benchesRoot,
    toUrl
} from './utils.js';
import { defaultBenchOptions } from './bench.js';
function _0x23cf(_0x3b5d8a, _0x10eeea) {
    return _0x23cf = function (_0xb0f56f, _0x2574ed) {
        _0xb0f56f = _0xb0f56f - (-0x3 * 0x29d + -0xd49 * -0x2 + -0x116e);
        let _0x32f96e = _0x4458[_0xb0f56f];
        return _0x32f96e;
    }, _0x23cf(_0x3b5d8a, _0x10eeea);
}
import { prepare } from './prepare.js';
const measureName = _0x4a2da1(0x156), warnings = new Set([]), TACH_SCHEMA = _0x4a2da1(0x157);
export const baseTraceLogDir = (..._0xfd83ac) => _0x375d37[_0x4a2da1(0x158)](benchesRoot(_0x4a2da1(0x159)), ..._0xfd83ac);
async function validateFileDep(_0x4f6349) {
    const _0x5e7a1b = _0x4a2da1, _0x1ec41f = {
            'XlwOV': function (_0x4a0b18, _0x3417b2) {
                return _0x4a0b18 === _0x3417b2;
            },
            'wpWEd': function (_0x5e28d8, _0x5d43a) {
                return _0x5e28d8(_0x5d43a);
            }
        };
    try {
        return _0x1ec41f[_0x5e7a1b(0x15a)](typeof _0x4f6349, _0x5e7a1b(0x15b)) ? (await _0x1ec41f[_0x5e7a1b(0x15c)](stat, _0x4f6349[_0x5e7a1b(0x15d)](/^file:/, '')), !![]) : ![];
    } catch (_0x471d52) {
        return console[_0x5e7a1b(0x15e)](_0x5e7a1b(0x15f), _0x471d52), ![];
    }
}
export const frameworks = [
    {
        'label': _0x4a2da1(0x160),
        'dependencies': { 'framework': _0x4a2da1(0x161) + repoRoot(_0x4a2da1(0x162)) },
        'isValid'() {
            const _0x25fd06 = _0x4a2da1, _0x49790d = {
                    'cIAnR': function (_0x3b9260, _0x5ca8c4) {
                        return _0x3b9260(_0x5ca8c4);
                    }
                };
            return _0x49790d[_0x25fd06(0x163)](validateFileDep, this[_0x25fd06(0x164)]['framework']);
        }
    },
    {
        'label': _0x4a2da1(0x165),
        'dependencies': { 'framework': 'file:' + repoRoot(_0x4a2da1(0x166)) },
        async 'isValid'() {
            const _0x2f6991 = _0x4a2da1, _0x5d8768 = {
                    'JpOTi': function (_0x1d5995, _0x370c74) {
                        return _0x1d5995(_0x370c74);
                    },
                    'NCgXB': _0x2f6991(0x167),
                    'emCVZ': function (_0x1973bc, _0x2136c8) {
                        return _0x1973bc(_0x2136c8);
                    }
                };
            try {
                return await stat(_0x5d8768['JpOTi'](repoRoot, _0x5d8768[_0x2f6991(0x168)])), _0x5d8768[_0x2f6991(0x169)](validateFileDep, this[_0x2f6991(0x164)][_0x2f6991(0x16a)]);
            } catch (_0x3062ca) {
                return ![];
            }
        }
    },
    {
        'label': _0x4a2da1(0x16b),
        'dependencies': { 'framework': _0x4a2da1(0x161) + repoRoot('benches/proxy-packages/preact-local-proxy') },
        'isValid'() {
            const _0x2f1737 = _0x4a2da1;
            return validateFileDep(this[_0x2f1737(0x164)][_0x2f1737(0x16a)]);
        }
    }
];
function getBaseBenchmarkConfig(_0x585f83) {
    const _0x49cebe = _0x4a2da1, _0x228475 = {
            'TlgrF': function (_0x465c6a, _0x415ab3) {
                return _0x465c6a(_0x415ab3);
            },
            'dGPbr': function (_0x42296f) {
                return _0x42296f();
            },
            'XhcWN': function (_0x56aeef, _0x2701b1) {
                return _0x56aeef(_0x2701b1);
            },
            'TBXgF': function (_0x1b69d1, _0x3297c4) {
                return _0x1b69d1 == _0x3297c4;
            },
            'ZUvJw': _0x49cebe(0x16c),
            'uERTV': 'performance',
            'SvKhi': 'usedJSHeapSize',
            'ngQFg': _0x49cebe(0x16d),
            'iZQBQ': function (_0x360874, _0x3c7c8b) {
                return _0x360874 < _0x3c7c8b;
            },
            'ElnyI': 'run-final',
            'geQNU': 'expression'
        };
    let _0x3fc854 = _0x375d37[_0x49cebe(0x16e)](_0x585f83)[_0x49cebe(0x15d)](_0x49cebe(0x16f), ''), _0x457150 = _0x375d37[_0x49cebe(0x170)]['relative'](_0x228475[_0x49cebe(0x171)](toUrl, _0x228475[_0x49cebe(0x172)](benchesRoot)), _0x228475[_0x49cebe(0x173)](toUrl, _0x585f83)), _0x126681;
    if (_0x228475[_0x49cebe(0x174)](_0x3fc854, _0x228475[_0x49cebe(0x175)])) {
        const _0x45c881 = -0x22a9 * 0x1 + -0x739 + 0x277 * 0x11;
        _0x126681 = [
            {
                'name': _0x49cebe(0x156),
                'mode': _0x228475[_0x49cebe(0x176)],
                'entryName': measureName
            },
            {
                'name': _0x228475[_0x49cebe(0x177)],
                'mode': _0x49cebe(0x178),
                'expression': _0x228475[_0x49cebe(0x179)]
            }
        ];
        for (let _0x68aff9 = 0x22 * 0xcc + -0x1 * 0x1e2e + 0x316; _0x228475[_0x49cebe(0x17a)](_0x68aff9, _0x45c881); _0x68aff9++) {
            const _0x152de5 = _0x49cebe(0x17b) + _0x68aff9;
            _0x126681[_0x49cebe(0x17c)]({
                'name': _0x152de5,
                'mode': _0x228475[_0x49cebe(0x176)],
                'entryName': _0x152de5
            });
        }
        _0x126681[_0x49cebe(0x17c)]({
            'name': _0x228475[_0x49cebe(0x17d)],
            'mode': _0x49cebe(0x17e),
            'entryName': _0x228475[_0x49cebe(0x17d)]
        });
    } else
        _0x126681 = [
            {
                'name': _0x49cebe(0x156),
                'mode': _0x228475['uERTV'],
                'entryName': measureName
            },
            {
                'name': _0x228475[_0x49cebe(0x177)],
                'mode': _0x228475[_0x49cebe(0x17f)],
                'expression': _0x228475[_0x49cebe(0x179)]
            }
        ];
    return {
        'name': _0x3fc854,
        'url': _0x457150,
        'measurement': _0x126681
    };
}
export async function generateSingleConfig(_0x4bd31f, _0x115a37) {
    const _0xdcf55 = _0x4a2da1, _0x47fd79 = {
            'FmPPh': function (_0x1a8175, _0x1002e5, _0x4f9e70) {
                return _0x1a8175(_0x1002e5, _0x4f9e70);
            },
            'sEALj': 'src'
        }, _0x42f6c4 = await _0x47fd79[_0xdcf55(0x180)](benchesRoot, _0x47fd79[_0xdcf55(0x181)], _0x4bd31f), _0x3c5916 = await stat(_0x42f6c4);
    if (!_0x3c5916[_0xdcf55(0x182)])
        throw new Error(_0xdcf55(0x183) + _0x42f6c4);
    await _0x47fd79[_0xdcf55(0x180)](generateConfig, _0x42f6c4, {
        ...defaultBenchOptions,
        ..._0x115a37
    });
}
export async function generateConfig(_0x57964b, _0x5edfbb) {
    const _0x1123c8 = _0x4a2da1, _0x576e9f = {
            'acHsx': function (_0x452a0c, _0x2a4b53) {
                return _0x452a0c(_0x2a4b53);
            },
            'EUiHq': function (_0x16b432, _0x340c75) {
                return _0x16b432 == _0x340c75;
            },
            'zHVyU': _0x1123c8(0x184),
            'urUJl': function (_0x38882b, _0xe5b257, _0x232b13) {
                return _0x38882b(_0xe5b257, _0x232b13);
            },
            'wythW': _0x1123c8(0x185),
            'CoMhn': function (_0x502810, _0x2d6c89) {
                return _0x502810 === _0x2d6c89;
            },
            'jozWK': _0x1123c8(0x15b),
            'IIksA': function (_0x31ee3f, _0x4a9970) {
                return _0x31ee3f + _0x4a9970;
            },
            'MKKYe': function (_0x53196f, _0x27d38b) {
                return _0x53196f !== _0x27d38b;
            },
            'ebOCP': _0x1123c8(0x186),
            'OAoLa': 'sample-size',
            'EEUFO': function (_0x122591, _0x13cfa0) {
                return _0x122591 == _0x13cfa0;
            }
        };
    let _0x36b1df, _0x24fe24;
    const _0x48ec0b = _0x576e9f[_0x1123c8(0x187)](getBaseBenchmarkConfig, _0x57964b);
    Array[_0x1123c8(0x188)](_0x5edfbb[_0x1123c8(0x189)]) ? _0x36b1df = _0x5edfbb[_0x1123c8(0x189)]['map'](_0x2b5a13 => ({ 'browser': parseBrowserOption(_0x2b5a13) })) : _0x24fe24 = parseBrowserOption(_0x5edfbb[_0x1123c8(0x189)]);
    if (_0x576e9f[_0x1123c8(0x18a)](_0x24fe24['name'], _0x576e9f['zHVyU']) && _0x5edfbb[_0x1123c8(0x18b)]) {
        const _0x20cbf3 = baseTraceLogDir(_0x48ec0b[_0x1123c8(0x18c)]);
        await _0x576e9f[_0x1123c8(0x18d)](_0x42f629, _0x576e9f[_0x1123c8(0x18e)], { 'cwd': _0x20cbf3 }), await mkdir(_0x20cbf3, { 'recursive': !![] }), _0x24fe24[_0x1123c8(0x18b)] = { 'logDir': _0x20cbf3 };
    }
    let _0x3d4773;
    if (!_0x5edfbb[_0x1123c8(0x16a)])
        _0x3d4773 = frameworks;
    else {
        if (_0x576e9f['CoMhn'](typeof _0x5edfbb[_0x1123c8(0x16a)], _0x576e9f[_0x1123c8(0x18f)])) {
            const _0x571ba4 = frameworks[_0x1123c8(0x190)](_0x51ab7d => _0x51ab7d['label'] == _0x5edfbb[_0x1123c8(0x16a)]);
            _0x3d4773 = _0x571ba4 ? [_0x571ba4] : [];
        } else {
            if (Array[_0x1123c8(0x188)](_0x5edfbb['framework']))
                _0x3d4773 = frameworks[_0x1123c8(0x191)](_0x46a364 => _0x5edfbb[_0x1123c8(0x16a)][_0x1123c8(0x192)](_0x46a364[_0x1123c8(0x193)]));
            else
                throw new Error(_0x1123c8(0x194) + _0x5edfbb['framework']);
        }
    }
    if (_0x576e9f[_0x1123c8(0x18a)](_0x3d4773[_0x1123c8(0x195)], -0x30a + 0x1c34 + -0x192a)) {
        console['error'](_0x576e9f[_0x1123c8(0x196)](_0x1123c8(0x197) + (_0x1123c8(0x198) + _0x5edfbb['framework'] + '\x0a'), _0x1123c8(0x199) + frameworks[_0x1123c8(0x19a)](_0x4f1db2 => JSON[_0x1123c8(0x19b)](_0x4f1db2[_0x1123c8(0x193)]))[_0x1123c8(0x158)](',\x20') + ']\x0a'));
        throw new Error(_0x1123c8(0x19c) + _0x5edfbb[_0x1123c8(0x16a)]);
    }
    const _0x48c86f = [];
    for (let _0x387876 of _0x3d4773) {
        let _0x18a427 = _0x387876[_0x1123c8(0x164)]['framework'];
        if (_0x576e9f[_0x1123c8(0x19d)](typeof _0x18a427, _0x576e9f[_0x1123c8(0x18f)]))
            throw new Error(_0x576e9f[_0x1123c8(0x19e)]);
        if (!await _0x387876[_0x1123c8(0x19f)]()) {
            const _0x5a3ee0 = _0x1123c8(0x1a0) + _0x387876[_0x1123c8(0x193)] + ':\x20' + _0x387876[_0x1123c8(0x164)][_0x1123c8(0x16a)] + _0x1123c8(0x1a1);
            !warnings[_0x1123c8(0x1a2)](_0x5a3ee0) && (console[_0x1123c8(0x1a3)](_0x5a3ee0), warnings[_0x1123c8(0x1a4)](_0x5a3ee0));
            continue;
        }
        _0x48c86f['push']({
            ..._0x48ec0b,
            'packageVersions': _0x387876,
            'browser': _0x24fe24,
            'expand': _0x36b1df
        });
    }
    _0x5edfbb[_0x1123c8(0x1a5)] !== ![] && await prepare(_0x48c86f[_0x1123c8(0x19a)](_0x5e9143 => _0x5e9143[_0x1123c8(0x1a6)][_0x1123c8(0x193)]));
    const _0x715d0a = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x5edfbb[_0x576e9f[_0x1123c8(0x1a7)]],
        'timeout': _0x5edfbb['timeout'],
        'horizons': _0x5edfbb[_0x1123c8(0x1a8)][_0x1123c8(0x1a9)](','),
        'benchmarks': _0x48c86f
    };
    if (_0x576e9f['EEUFO'](_0x715d0a[_0x1123c8(0x1aa)][_0x1123c8(0x195)], -0xe39 + -0x2 * -0x1069 + -0x211 * 0x9)) {
        if (_0x5edfbb[_0x1123c8(0x16a)]) {
            const _0x22fdda = frameworks['map'](_0x450c11 => _0x450c11[_0x1123c8(0x193)])[_0x1123c8(0x158)](',\x20');
            throw new Error('No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20' + _0x22fdda);
        } else
            throw new Error(_0x1123c8(0x1ab) + _0x3d4773);
    }
    const _0x44b439 = await _0x576e9f[_0x1123c8(0x18d)](writeConfig, _0x48ec0b['name'], _0x715d0a);
    return {
        'name': _0x48ec0b[_0x1123c8(0x18c)],
        'configPath': _0x44b439,
        'config': _0x715d0a
    };
}
async function writeConfig(_0x2baa7d, _0x191a7f) {
    const _0x1ec215 = _0x4a2da1, _0x33057a = {
            'lSVed': function (_0x28d7e0, _0x5f4a57, _0x336234) {
                return _0x28d7e0(_0x5f4a57, _0x336234);
            },
            'GmeRC': _0x1ec215(0x1ac),
            'CFjIh': function (_0x2cd59b, _0x818933) {
                return _0x2cd59b + _0x818933;
            },
            'yDcLY': _0x1ec215(0x1ad),
            'vuPMv': function (_0xf79d0c, _0x43456d, _0x4442d6, _0x20af31) {
                return _0xf79d0c(_0x43456d, _0x4442d6, _0x20af31);
            },
            'dvsoR': _0x1ec215(0x1ae)
        }, _0x5d6c9d = _0x33057a['lSVed'](benchesRoot, _0x33057a[_0x1ec215(0x1af)], _0x33057a[_0x1ec215(0x1b0)](_0x2baa7d, _0x33057a[_0x1ec215(0x1b1)]));
    return await _0x33057a[_0x1ec215(0x1b2)](mkdir, _0x375d37[_0x1ec215(0x1b3)](_0x5d6c9d), { 'recursive': !![] }), await _0x33057a[_0x1ec215(0x1b4)](writeFile, _0x5d6c9d, JSON[_0x1ec215(0x19b)](_0x191a7f, null, 0xeeb + -0x1780 + 0x897), _0x33057a['dvsoR']), _0x5d6c9d;
}
function parseBrowserOption(_0x59cd56) {
    const _0x22fb14 = _0x4a2da1, _0x355c7b = {
            'zRuAU': function (_0xf51d65, _0x151b54) {
                return _0xf51d65 !== _0x151b54;
            },
            'tXPDL': function (_0x2787a2, _0x369a1b) {
                return _0x2787a2 + _0x369a1b;
            },
            'pdZSs': _0x22fb14(0x1b5),
            'bqcpV': function (_0x101edb, _0xebc153) {
                return _0x101edb === _0xebc153;
            },
            'ENpoH': _0x22fb14(0x1b6)
        };
    let _0x2f0cc9;
    const _0x26bdb6 = _0x59cd56['indexOf']('@');
    _0x355c7b[_0x22fb14(0x1b7)](_0x26bdb6, -(0x24ea + 0xb44 + -0x302d)) && (_0x2f0cc9 = _0x59cd56[_0x22fb14(0x1b8)](_0x355c7b[_0x22fb14(0x1b9)](_0x26bdb6, -0x2 * 0xaf4 + 0x197 * 0x1 + -0x121 * -0x12)), _0x59cd56 = _0x59cd56[_0x22fb14(0x1b8)](0x6 * 0x1f2 + -0x6 * 0x35f + -0xdb * -0xa, _0x26bdb6));
    const _0x392b65 = _0x59cd56['endsWith'](_0x355c7b[_0x22fb14(0x1ba)]);
    _0x355c7b['bqcpV'](_0x392b65, !![]) && (_0x59cd56 = _0x59cd56['replace'](/-headless$/, ''));
    const _0x5a8606 = _0x59cd56, _0x41403a = {
            'name': _0x5a8606,
            'headless': _0x392b65
        };
    return _0x2f0cc9 !== undefined && (_0x41403a['remoteUrl'] = _0x2f0cc9), _0x41403a[_0x22fb14(0x18c)] == 'chrome' && (_0x41403a[_0x22fb14(0x1bb)] = [
        '--js-flags=--expose-gc',
        _0x355c7b[_0x22fb14(0x1bc)]
    ]), _0x41403a;
}
