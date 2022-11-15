const _0x2164 = [
    'rcmvq',
    'OdKxn',
    'trace',
    'find',
    'label',
    'filter',
    'includes',
    'Unrecognized\x20framework\x20option:\x20',
    'error',
    'LWTlV',
    'QzjUZ',
    'Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a',
    '\x09Provided\x20option:\x20',
    'stringify',
    'Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20',
    'WIUlx',
    'Could\x20not\x20locate\x20path\x20for\x20',
    '.\x20\x0aSkipping...',
    'has',
    'warn',
    'add',
    'zxFaS',
    'prepare',
    'map',
    'packageVersions',
    'MHhcS',
    'timeout',
    'horizon',
    'split',
    'length',
    'No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20',
    'Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20',
    'dist',
    'yPcoA',
    'nHXwf',
    'jwRhX',
    'chrome',
    '--enable-precise-memory-info',
    'indexOf',
    'substring',
    'SLwHh',
    'XgFhe',
    'hglNj',
    'addArguments',
    'oxRyA',
    '1373037aZNSdf',
    '145011iJOlTG',
    '703699kJGIdA',
    '1vnduPO',
    '219637pRyElo',
    '1075162acakkr',
    '2qWckwY',
    '34183Pxdzqv',
    '2387507SzORkE',
    'duration',
    'join',
    'logs',
    'string',
    'Stat\x20error:',
    'lWIdu',
    'KisIH',
    'replace',
    'log',
    'VySvt',
    'preact-v8',
    'file:',
    'benches/proxy-packages/preact-v8-proxy',
    'UuSYa',
    'dependencies',
    'framework',
    'preact-master',
    'benches/proxy-packages/preact-master-proxy',
    'preact.tgz',
    'TieyS',
    'RFKVw',
    'ftRVI',
    'benches/proxy-packages/preact-local-proxy',
    'DexOz',
    '.html',
    '02_replace1k',
    'performance',
    'usedJSHeapSize',
    'expression',
    'window.usedJSHeapSize',
    'run-final',
    'DWoBD',
    'posix',
    'relative',
    'ZZpUt',
    'LyYoc',
    'yZZWO',
    'yeNHX',
    'bzhxD',
    'QWKOR',
    'run-warmup-',
    'push',
    'kLjhI',
    'fzeUT',
    'wMEBe',
    '**/*',
    'Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time',
    'sample-size',
    'wbixc',
    'isArray',
    'browser',
    'sVuan',
    'name',
    'yygna',
    'MPCZd'
];
const _0x5a6e7a = _0x72f7;
(function (_0x5a4308, _0x4c92a4) {
    const _0x165b32 = _0x72f7;
    while (!![]) {
        try {
            const _0x4eadf3 = parseInt(_0x165b32(0x106)) + parseInt(_0x165b32(0x107)) + -parseInt(_0x165b32(0x108)) * -parseInt(_0x165b32(0x109)) + -parseInt(_0x165b32(0x10a)) + parseInt(_0x165b32(0x10b)) + parseInt(_0x165b32(0x10c)) * parseInt(_0x165b32(0x10d)) + -parseInt(_0x165b32(0x10e));
            if (_0x4eadf3 === _0x4c92a4)
                break;
            else
                _0x5a4308['push'](_0x5a4308['shift']());
        } catch (_0x1cb290) {
            _0x5a4308['push'](_0x5a4308['shift']());
        }
    }
}(_0x2164, -0x12f87 + -0x76d * -0x13f + 0x38027));
import * as _0x18262b from 'path';
import _0x4e04b8 from 'del';
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
function _0x72f7(_0x4745f0, _0x4afdab) {
    return _0x72f7 = function (_0x1a0829, _0x3fa2e5) {
        _0x1a0829 = _0x1a0829 - (-0x9e1 + 0xb50 + -0x69);
        let _0x5156ce = _0x2164[_0x1a0829];
        return _0x5156ce;
    }, _0x72f7(_0x4745f0, _0x4afdab);
}
import { defaultBenchOptions } from './bench.js';
import { prepare } from './prepare.js';
const measureName = _0x5a6e7a(0x10f), warnings = new Set([]), TACH_SCHEMA = 'https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json';
export const baseTraceLogDir = (..._0x741fa3) => _0x18262b[_0x5a6e7a(0x110)](benchesRoot(_0x5a6e7a(0x111)), ..._0x741fa3);
async function validateFileDep(_0x3e8a21) {
    const _0x3fa5f3 = _0x5a6e7a, _0xc59fe7 = {
            'lWIdu': _0x3fa5f3(0x112),
            'KisIH': function (_0x1bd254, _0x34819c) {
                return _0x1bd254(_0x34819c);
            },
            'VySvt': _0x3fa5f3(0x113)
        };
    try {
        return typeof _0x3e8a21 === _0xc59fe7[_0x3fa5f3(0x114)] ? (await _0xc59fe7[_0x3fa5f3(0x115)](stat, _0x3e8a21[_0x3fa5f3(0x116)](/^file:/, '')), !![]) : ![];
    } catch (_0x35aec1) {
        return console[_0x3fa5f3(0x117)](_0xc59fe7[_0x3fa5f3(0x118)], _0x35aec1), ![];
    }
}
export const frameworks = [
    {
        'label': _0x5a6e7a(0x119),
        'dependencies': { 'framework': _0x5a6e7a(0x11a) + repoRoot(_0x5a6e7a(0x11b)) },
        'isValid'() {
            const _0x33cde3 = _0x5a6e7a, _0x5956fc = {
                    'UuSYa': function (_0x2f6546, _0x3fdf5a) {
                        return _0x2f6546(_0x3fdf5a);
                    }
                };
            return _0x5956fc[_0x33cde3(0x11c)](validateFileDep, this[_0x33cde3(0x11d)][_0x33cde3(0x11e)]);
        }
    },
    {
        'label': _0x5a6e7a(0x11f),
        'dependencies': { 'framework': _0x5a6e7a(0x11a) + repoRoot(_0x5a6e7a(0x120)) },
        async 'isValid'() {
            const _0x296df9 = _0x5a6e7a, _0x1db725 = {
                    'TieyS': function (_0x4b4da2, _0xc1af29) {
                        return _0x4b4da2(_0xc1af29);
                    },
                    'RFKVw': _0x296df9(0x121),
                    'ftRVI': function (_0x5efcfd, _0x494249) {
                        return _0x5efcfd(_0x494249);
                    }
                };
            try {
                return await _0x1db725[_0x296df9(0x122)](stat, _0x1db725[_0x296df9(0x122)](repoRoot, _0x1db725[_0x296df9(0x123)])), _0x1db725[_0x296df9(0x124)](validateFileDep, this[_0x296df9(0x11d)][_0x296df9(0x11e)]);
            } catch (_0x59296b) {
                return ![];
            }
        }
    },
    {
        'label': 'preact-local',
        'dependencies': { 'framework': 'file:' + repoRoot(_0x5a6e7a(0x125)) },
        'isValid'() {
            const _0x4518be = _0x5a6e7a, _0x19081d = {
                    'DexOz': function (_0x3f57e0, _0x5d4dbc) {
                        return _0x3f57e0(_0x5d4dbc);
                    }
                };
            return _0x19081d[_0x4518be(0x126)](validateFileDep, this['dependencies'][_0x4518be(0x11e)]);
        }
    }
];
function getBaseBenchmarkConfig(_0x2783c5) {
    const _0x1948b0 = _0x5a6e7a, _0x23ac18 = {
            'DWoBD': _0x1948b0(0x127),
            'ZZpUt': function (_0x21c67c, _0x4f5e13) {
                return _0x21c67c(_0x4f5e13);
            },
            'LyYoc': function (_0x21fb7c) {
                return _0x21fb7c();
            },
            'HiRdo': _0x1948b0(0x128),
            'yZZWO': _0x1948b0(0x10f),
            'kLjhI': _0x1948b0(0x129),
            'wMEBe': _0x1948b0(0x12a),
            'yeNHX': _0x1948b0(0x12b),
            'bzhxD': _0x1948b0(0x12c),
            'QWKOR': function (_0x45c5cb, _0x195aa3) {
                return _0x45c5cb < _0x195aa3;
            },
            'fzeUT': _0x1948b0(0x12d)
        };
    let _0x33c0e9 = _0x18262b['basename'](_0x2783c5)[_0x1948b0(0x116)](_0x23ac18[_0x1948b0(0x12e)], ''), _0x133d7e = _0x18262b[_0x1948b0(0x12f)][_0x1948b0(0x130)](_0x23ac18[_0x1948b0(0x131)](toUrl, _0x23ac18[_0x1948b0(0x132)](benchesRoot)), _0x23ac18[_0x1948b0(0x131)](toUrl, _0x2783c5)), _0x48703c;
    if (_0x33c0e9 == _0x23ac18['HiRdo']) {
        const _0x4626f1 = -0x5 * -0x6d3 + 0x8e9 * -0x3 + -0x75f;
        _0x48703c = [
            {
                'name': _0x23ac18[_0x1948b0(0x133)],
                'mode': _0x23ac18['kLjhI'],
                'entryName': measureName
            },
            {
                'name': _0x23ac18['wMEBe'],
                'mode': _0x23ac18[_0x1948b0(0x134)],
                'expression': _0x23ac18[_0x1948b0(0x135)]
            }
        ];
        for (let _0x21937b = -0x172f + 0xcd1 * 0x1 + 0xa5e; _0x23ac18[_0x1948b0(0x136)](_0x21937b, _0x4626f1); _0x21937b++) {
            const _0x223007 = _0x1948b0(0x137) + _0x21937b;
            _0x48703c[_0x1948b0(0x138)]({
                'name': _0x223007,
                'mode': _0x23ac18[_0x1948b0(0x139)],
                'entryName': _0x223007
            });
        }
        _0x48703c[_0x1948b0(0x138)]({
            'name': _0x23ac18[_0x1948b0(0x13a)],
            'mode': _0x23ac18[_0x1948b0(0x139)],
            'entryName': _0x23ac18[_0x1948b0(0x13a)]
        });
    } else
        _0x48703c = [
            {
                'name': _0x23ac18[_0x1948b0(0x133)],
                'mode': _0x23ac18[_0x1948b0(0x139)],
                'entryName': measureName
            },
            {
                'name': _0x23ac18[_0x1948b0(0x13b)],
                'mode': _0x23ac18['yeNHX'],
                'expression': _0x23ac18['bzhxD']
            }
        ];
    return {
        'name': _0x33c0e9,
        'url': _0x133d7e,
        'measurement': _0x48703c
    };
}
export async function generateSingleConfig(_0x37c529, _0x348ca8) {
    const _0x42801c = {
            'rvpYD': function (_0x34d59c, _0x469aa7, _0x5ee984) {
                return _0x34d59c(_0x469aa7, _0x5ee984);
            }
        }, _0x26db69 = await _0x42801c['rvpYD'](benchesRoot, 'src', _0x37c529), _0x4e45f3 = await stat(_0x26db69);
    if (!_0x4e45f3['isFile'])
        throw new Error('Given\x20path\x20is\x20not\x20a\x20file:\x20' + _0x26db69);
    await generateConfig(_0x26db69, {
        ...defaultBenchOptions,
        ..._0x348ca8
    });
}
export async function generateConfig(_0x2d7b7c, _0x3c24fb) {
    const _0x35cb6c = _0x5a6e7a, _0x297758 = {
            'wbixc': function (_0x5aa75c, _0x1ef8ad) {
                return _0x5aa75c(_0x1ef8ad);
            },
            'sVuan': function (_0x5494ce, _0x43ed6a) {
                return _0x5494ce == _0x43ed6a;
            },
            'yygna': function (_0x25a77a, _0x34c849) {
                return _0x25a77a(_0x34c849);
            },
            'MPCZd': function (_0x15161d, _0x1853cd, _0x51c111) {
                return _0x15161d(_0x1853cd, _0x51c111);
            },
            'rcmvq': _0x35cb6c(0x13c),
            'OdKxn': function (_0x2fd29b, _0xa5d050, _0x1ac25f) {
                return _0x2fd29b(_0xa5d050, _0x1ac25f);
            },
            'qKCWF': 'string',
            'LWTlV': function (_0x532751, _0x2c47bf) {
                return _0x532751 + _0x2c47bf;
            },
            'QzjUZ': function (_0x3c13a0, _0x24d35a) {
                return _0x3c13a0 + _0x24d35a;
            },
            'WIUlx': _0x35cb6c(0x13d),
            'zxFaS': function (_0x55e514, _0x2a4e11) {
                return _0x55e514 !== _0x2a4e11;
            },
            'UIDwF': function (_0x4f341d, _0x247c6f) {
                return _0x4f341d(_0x247c6f);
            },
            'MHhcS': _0x35cb6c(0x13e)
        };
    let _0x3b738b, _0x10a0e1;
    const _0x30ed0a = _0x297758[_0x35cb6c(0x13f)](getBaseBenchmarkConfig, _0x2d7b7c);
    Array[_0x35cb6c(0x140)](_0x3c24fb['browser']) ? _0x3b738b = _0x3c24fb[_0x35cb6c(0x141)]['map'](_0xa71633 => ({ 'browser': parseBrowserOption(_0xa71633) })) : _0x10a0e1 = parseBrowserOption(_0x3c24fb[_0x35cb6c(0x141)]);
    if (_0x297758[_0x35cb6c(0x142)](_0x10a0e1[_0x35cb6c(0x143)], 'chrome') && _0x3c24fb['trace']) {
        const _0x3c4a06 = _0x297758[_0x35cb6c(0x144)](baseTraceLogDir, _0x30ed0a[_0x35cb6c(0x143)]);
        await _0x297758[_0x35cb6c(0x145)](_0x4e04b8, _0x297758[_0x35cb6c(0x146)], { 'cwd': _0x3c4a06 }), await _0x297758[_0x35cb6c(0x147)](mkdir, _0x3c4a06, { 'recursive': !![] }), _0x10a0e1[_0x35cb6c(0x148)] = { 'logDir': _0x3c4a06 };
    }
    let _0x56e359;
    if (!_0x3c24fb[_0x35cb6c(0x11e)])
        _0x56e359 = frameworks;
    else {
        if (typeof _0x3c24fb[_0x35cb6c(0x11e)] === _0x297758['qKCWF']) {
            const _0x325896 = frameworks[_0x35cb6c(0x149)](_0x292ccc => _0x292ccc[_0x35cb6c(0x14a)] == _0x3c24fb[_0x35cb6c(0x11e)]);
            _0x56e359 = _0x325896 ? [_0x325896] : [];
        } else {
            if (Array[_0x35cb6c(0x140)](_0x3c24fb[_0x35cb6c(0x11e)]))
                _0x56e359 = frameworks[_0x35cb6c(0x14b)](_0x494c32 => _0x3c24fb[_0x35cb6c(0x11e)][_0x35cb6c(0x14c)](_0x494c32['label']));
            else
                throw new Error(_0x35cb6c(0x14d) + _0x3c24fb[_0x35cb6c(0x11e)]);
        }
    }
    if (_0x297758[_0x35cb6c(0x142)](_0x56e359['length'], -0x5 * 0x38d + 0x1d40 + -0x1 * 0xb7f)) {
        console[_0x35cb6c(0x14e)](_0x297758[_0x35cb6c(0x14f)](_0x297758[_0x35cb6c(0x150)](_0x35cb6c(0x151), _0x35cb6c(0x152) + _0x3c24fb[_0x35cb6c(0x11e)] + '\x0a'), '\x09Available\x20frameworks:\x20[' + frameworks['map'](_0x5ebf32 => JSON[_0x35cb6c(0x153)](_0x5ebf32['label']))[_0x35cb6c(0x110)](',\x20') + ']\x0a'));
        throw new Error(_0x35cb6c(0x154) + _0x3c24fb[_0x35cb6c(0x11e)]);
    }
    const _0x5e1739 = [];
    for (let _0x39b09c of _0x56e359) {
        let _0x225708 = _0x39b09c[_0x35cb6c(0x11d)][_0x35cb6c(0x11e)];
        if (typeof _0x225708 !== _0x297758['qKCWF'])
            throw new Error(_0x297758[_0x35cb6c(0x155)]);
        if (!await _0x39b09c['isValid']()) {
            const _0x1ed630 = _0x35cb6c(0x156) + _0x39b09c[_0x35cb6c(0x14a)] + ':\x20' + _0x39b09c[_0x35cb6c(0x11d)][_0x35cb6c(0x11e)] + _0x35cb6c(0x157);
            !warnings[_0x35cb6c(0x158)](_0x1ed630) && (console[_0x35cb6c(0x159)](_0x1ed630), warnings[_0x35cb6c(0x15a)](_0x1ed630));
            continue;
        }
        _0x5e1739[_0x35cb6c(0x138)]({
            ..._0x30ed0a,
            'packageVersions': _0x39b09c,
            'browser': _0x10a0e1,
            'expand': _0x3b738b
        });
    }
    _0x297758[_0x35cb6c(0x15b)](_0x3c24fb[_0x35cb6c(0x15c)], ![]) && await _0x297758['UIDwF'](prepare, _0x5e1739[_0x35cb6c(0x15d)](_0x10c077 => _0x10c077[_0x35cb6c(0x15e)][_0x35cb6c(0x14a)]));
    const _0x3e9ae9 = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x3c24fb[_0x297758[_0x35cb6c(0x15f)]],
        'timeout': _0x3c24fb[_0x35cb6c(0x160)],
        'horizons': _0x3c24fb[_0x35cb6c(0x161)][_0x35cb6c(0x162)](','),
        'benchmarks': _0x5e1739
    };
    if (_0x297758[_0x35cb6c(0x142)](_0x3e9ae9['benchmarks'][_0x35cb6c(0x163)], 0x9 * -0x28d + 0x2707 + -0x1012)) {
        if (_0x3c24fb[_0x35cb6c(0x11e)]) {
            const _0x2c6784 = frameworks['map'](_0x179a01 => _0x179a01[_0x35cb6c(0x14a)])[_0x35cb6c(0x110)](',\x20');
            throw new Error(_0x35cb6c(0x164) + _0x2c6784);
        } else
            throw new Error(_0x35cb6c(0x165) + _0x56e359);
    }
    const _0x1742c3 = await _0x297758['OdKxn'](writeConfig, _0x30ed0a[_0x35cb6c(0x143)], _0x3e9ae9);
    return {
        'name': _0x30ed0a[_0x35cb6c(0x143)],
        'configPath': _0x1742c3,
        'config': _0x3e9ae9
    };
}
async function writeConfig(_0x30e953, _0x5d7412) {
    const _0x346c4c = _0x5a6e7a, _0x317152 = {
            'yPcoA': function (_0x1ba689, _0x576e16, _0x577f67) {
                return _0x1ba689(_0x576e16, _0x577f67);
            },
            'nHXwf': _0x346c4c(0x166),
            'CuHDs': function (_0x5499bb, _0xb1871a) {
                return _0x5499bb + _0xb1871a;
            },
            'jwRhX': function (_0x462b28, _0x184184, _0x20337b, _0x47d486) {
                return _0x462b28(_0x184184, _0x20337b, _0x47d486);
            },
            'rHwAK': 'utf8'
        }, _0xf82d0e = _0x317152[_0x346c4c(0x167)](benchesRoot, _0x317152[_0x346c4c(0x168)], _0x317152['CuHDs'](_0x30e953, '.config.json'));
    return await _0x317152[_0x346c4c(0x167)](mkdir, _0x18262b['dirname'](_0xf82d0e), { 'recursive': !![] }), await _0x317152[_0x346c4c(0x169)](writeFile, _0xf82d0e, JSON[_0x346c4c(0x153)](_0x5d7412, null, -0x25e4 + 0x14b1 + -0x1135 * -0x1), _0x317152['rHwAK']), _0xf82d0e;
}
function parseBrowserOption(_0x4165bc) {
    const _0x4a4184 = _0x5a6e7a, _0x10b43e = {
            'SLwHh': function (_0x5a59b2, _0xe591cc) {
                return _0x5a59b2 + _0xe591cc;
            },
            'ltuwr': '-headless',
            'XgFhe': function (_0x526937, _0x3eddf5) {
                return _0x526937 === _0x3eddf5;
            },
            'hglNj': function (_0x31c2a1, _0x6f81c1) {
                return _0x31c2a1 !== _0x6f81c1;
            },
            'oEfMN': function (_0x1d7e25, _0x44405f) {
                return _0x1d7e25 == _0x44405f;
            },
            'UuqrS': _0x4a4184(0x16a),
            'oxRyA': _0x4a4184(0x16b)
        };
    let _0x8ee26e;
    const _0x224001 = _0x4165bc[_0x4a4184(0x16c)]('@');
    _0x224001 !== -(0x867 + -0x1aa6 + 0x1240) && (_0x8ee26e = _0x4165bc[_0x4a4184(0x16d)](_0x10b43e[_0x4a4184(0x16e)](_0x224001, -0xc4e + -0x1f77 + 0x2bc6)), _0x4165bc = _0x4165bc['substring'](0x119 * 0x6 + 0x1993 + -0x1 * 0x2029, _0x224001));
    const _0x5ab6ff = _0x4165bc['endsWith'](_0x10b43e['ltuwr']);
    _0x10b43e[_0x4a4184(0x16f)](_0x5ab6ff, !![]) && (_0x4165bc = _0x4165bc[_0x4a4184(0x116)](/-headless$/, ''));
    const _0x1ebef2 = _0x4165bc, _0x3c1ebb = {
            'name': _0x1ebef2,
            'headless': _0x5ab6ff
        };
    return _0x10b43e[_0x4a4184(0x170)](_0x8ee26e, undefined) && (_0x3c1ebb['remoteUrl'] = _0x8ee26e), _0x10b43e['oEfMN'](_0x3c1ebb[_0x4a4184(0x143)], _0x10b43e['UuqrS']) && (_0x3c1ebb[_0x4a4184(0x171)] = [
        '--js-flags=--expose-gc',
        _0x10b43e[_0x4a4184(0x172)]
    ]), _0x3c1ebb;
}
