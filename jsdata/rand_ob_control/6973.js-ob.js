import * as _0x166236 from 'path';
import _0x3ea219 from 'del';
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
import { prepare } from './prepare.js';
const measureName = 'duration', warnings = new Set([]), TACH_SCHEMA = 'https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json';
export const baseTraceLogDir = (..._0x2f34b4) => _0x166236['join'](benchesRoot('logs'), ..._0x2f34b4);
async function validateFileDep(_0x312cd3) {
    const _0x1828fc = {
        'hJuZf': function (_0x2dd524, _0xb1157b) {
            return _0x2dd524 === _0xb1157b;
        },
        'BmDXM': 'string',
        'TGXKb': function (_0x220c31, _0x3fd3fe) {
            return _0x220c31(_0x3fd3fe);
        },
        'XNRMi': 'Stat\x20error:'
    };
    try {
        return _0x1828fc['hJuZf'](typeof _0x312cd3, _0x1828fc['BmDXM']) ? (await _0x1828fc['TGXKb'](stat, _0x312cd3['replace'](/^file:/, '')), !![]) : ![];
    } catch (_0x2f4e49) {
        return console['log'](_0x1828fc['XNRMi'], _0x2f4e49), ![];
    }
}
export const frameworks = [
    {
        'label': 'preact-v8',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-v8-proxy') },
        'isValid'() {
            const _0x32a979 = {
                'DoMzQ': function (_0x55a84a, _0x1a1bb3) {
                    return _0x55a84a(_0x1a1bb3);
                }
            };
            return _0x32a979['DoMzQ'](validateFileDep, this['dependencies']['framework']);
        }
    },
    {
        'label': 'preact-master',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-master-proxy') },
        async 'isValid'() {
            const _0x258e3b = {
                'xAHRI': function (_0x1eb8ff, _0x5599ea) {
                    return _0x1eb8ff(_0x5599ea);
                },
                'pPHvj': function (_0x5a5e12, _0x374fd1) {
                    return _0x5a5e12(_0x374fd1);
                },
                'UlYVE': 'preact.tgz',
                'uSUwd': function (_0x35a74b, _0x272dd1) {
                    return _0x35a74b(_0x272dd1);
                }
            };
            try {
                return await _0x258e3b['xAHRI'](stat, _0x258e3b['pPHvj'](repoRoot, _0x258e3b['UlYVE'])), _0x258e3b['uSUwd'](validateFileDep, this['dependencies']['framework']);
            } catch (_0x22ba16) {
                return ![];
            }
        }
    },
    {
        'label': 'preact-local',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-local-proxy') },
        'isValid'() {
            const _0x13e319 = {
                'uNuez': function (_0x10f027, _0x2cbd4d) {
                    return _0x10f027(_0x2cbd4d);
                }
            };
            return _0x13e319['uNuez'](validateFileDep, this['dependencies']['framework']);
        }
    }
];
function getBaseBenchmarkConfig(_0x2ec846) {
    const _0x2c98eb = {
        'dkLdt': '.html',
        'ZhHGq': function (_0x262eaa, _0x2a81ad) {
            return _0x262eaa(_0x2a81ad);
        },
        'pEUcW': function (_0x147942) {
            return _0x147942();
        },
        'jYIhb': function (_0x2f0973, _0x3989e6) {
            return _0x2f0973(_0x3989e6);
        },
        'vSiKu': function (_0x4c9209, _0x3cb1fd) {
            return _0x4c9209 == _0x3cb1fd;
        },
        'hdhvn': '02_replace1k',
        'kFqJM': 'duration',
        'hfhav': 'performance',
        'SfpxW': 'usedJSHeapSize',
        'yZQUQ': 'expression',
        'AQSfw': 'window.usedJSHeapSize',
        'OSIOd': function (_0x3b6703, _0x2d2647) {
            return _0x3b6703 < _0x2d2647;
        },
        'RxMVM': 'run-final'
    };
    let _0x71fcab = _0x166236['basename'](_0x2ec846)['replace'](_0x2c98eb['dkLdt'], ''), _0x1faa05 = _0x166236['posix']['relative'](_0x2c98eb['ZhHGq'](toUrl, _0x2c98eb['pEUcW'](benchesRoot)), _0x2c98eb['jYIhb'](toUrl, _0x2ec846)), _0x1b9990;
    if (_0x2c98eb['vSiKu'](_0x71fcab, _0x2c98eb['hdhvn'])) {
        const _0x158941 = 0x5;
        _0x1b9990 = [
            {
                'name': _0x2c98eb['kFqJM'],
                'mode': _0x2c98eb['hfhav'],
                'entryName': measureName
            },
            {
                'name': _0x2c98eb['SfpxW'],
                'mode': _0x2c98eb['yZQUQ'],
                'expression': _0x2c98eb['AQSfw']
            }
        ];
        for (let _0x35ed7e = 0x0; _0x2c98eb['OSIOd'](_0x35ed7e, _0x158941); _0x35ed7e++) {
            const _0x1affeb = 'run-warmup-' + _0x35ed7e;
            _0x1b9990['push']({
                'name': _0x1affeb,
                'mode': _0x2c98eb['hfhav'],
                'entryName': _0x1affeb
            });
        }
        _0x1b9990['push']({
            'name': _0x2c98eb['RxMVM'],
            'mode': _0x2c98eb['hfhav'],
            'entryName': _0x2c98eb['RxMVM']
        });
    } else
        _0x1b9990 = [
            {
                'name': _0x2c98eb['kFqJM'],
                'mode': _0x2c98eb['hfhav'],
                'entryName': measureName
            },
            {
                'name': _0x2c98eb['SfpxW'],
                'mode': _0x2c98eb['yZQUQ'],
                'expression': _0x2c98eb['AQSfw']
            }
        ];
    return {
        'name': _0x71fcab,
        'url': _0x1faa05,
        'measurement': _0x1b9990
    };
}
export async function generateSingleConfig(_0x4ef604, _0x14328e) {
    const _0x51454f = {
            'kTLBR': function (_0x579b41, _0x3822d2, _0x4de0a6) {
                return _0x579b41(_0x3822d2, _0x4de0a6);
            },
            'sVGGu': 'src',
            'ySqCk': function (_0x1ab601, _0x680fd2) {
                return _0x1ab601(_0x680fd2);
            },
            'jbMfH': function (_0x4f65c8, _0x1ae715, _0x37f37d) {
                return _0x4f65c8(_0x1ae715, _0x37f37d);
            }
        }, _0x1db4fe = await _0x51454f['kTLBR'](benchesRoot, _0x51454f['sVGGu'], _0x4ef604), _0x42972c = await _0x51454f['ySqCk'](stat, _0x1db4fe);
    if (!_0x42972c['isFile'])
        throw new Error('Given\x20path\x20is\x20not\x20a\x20file:\x20' + _0x1db4fe);
    await _0x51454f['jbMfH'](generateConfig, _0x1db4fe, {
        ...defaultBenchOptions,
        ..._0x14328e
    });
}
export async function generateConfig(_0x4aeded, _0x397c23) {
    const _0x586d09 = {
        'sUuuN': function (_0x4518a5, _0x3f67f4) {
            return _0x4518a5(_0x3f67f4);
        },
        'fwZcP': function (_0x5f53fd, _0x45f610) {
            return _0x5f53fd(_0x45f610);
        },
        'fcJGu': function (_0x2ab73c, _0x7aae2f) {
            return _0x2ab73c == _0x7aae2f;
        },
        'BWgKu': 'chrome',
        'ImlOV': function (_0x96f413, _0x1a8b5d) {
            return _0x96f413(_0x1a8b5d);
        },
        'arZXM': function (_0x205757, _0x52599b, _0x10a980) {
            return _0x205757(_0x52599b, _0x10a980);
        },
        'iTUMj': '**/*',
        'iOWRs': function (_0x49f29f, _0x29f819, _0x4ea48b) {
            return _0x49f29f(_0x29f819, _0x4ea48b);
        },
        'DwWLg': function (_0x153ad3, _0x25ec1f) {
            return _0x153ad3 === _0x25ec1f;
        },
        'CyuvP': 'string',
        'WUVgT': function (_0x3f36fb, _0x3df078) {
            return _0x3f36fb + _0x3df078;
        },
        'uvtxB': function (_0x23b5c4, _0x3c75f7) {
            return _0x23b5c4 !== _0x3c75f7;
        },
        'ZMPJt': 'Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time',
        'fBLXp': function (_0x3edf32, _0x43ce2a) {
            return _0x3edf32(_0x43ce2a);
        },
        'Mtoci': 'sample-size'
    };
    let _0x30f6a5, _0x424348;
    const _0x317dfd = _0x586d09['sUuuN'](getBaseBenchmarkConfig, _0x4aeded);
    Array['isArray'](_0x397c23['browser']) ? _0x30f6a5 = _0x397c23['browser']['map'](_0x27f931 => ({ 'browser': parseBrowserOption(_0x27f931) })) : _0x424348 = _0x586d09['fwZcP'](parseBrowserOption, _0x397c23['browser']);
    if (_0x586d09['fcJGu'](_0x424348['name'], _0x586d09['BWgKu']) && _0x397c23['trace']) {
        const _0x4b273d = _0x586d09['ImlOV'](baseTraceLogDir, _0x317dfd['name']);
        await _0x586d09['arZXM'](_0x3ea219, _0x586d09['iTUMj'], { 'cwd': _0x4b273d }), await _0x586d09['iOWRs'](mkdir, _0x4b273d, { 'recursive': !![] }), _0x424348['trace'] = { 'logDir': _0x4b273d };
    }
    let _0x15d6e7;
    if (!_0x397c23['framework'])
        _0x15d6e7 = frameworks;
    else {
        if (_0x586d09['DwWLg'](typeof _0x397c23['framework'], _0x586d09['CyuvP'])) {
            const _0x291619 = frameworks['find'](_0x4d095e => _0x4d095e['label'] == _0x397c23['framework']);
            _0x15d6e7 = _0x291619 ? [_0x291619] : [];
        } else {
            if (Array['isArray'](_0x397c23['framework']))
                _0x15d6e7 = frameworks['filter'](_0x3be4b7 => _0x397c23['framework']['includes'](_0x3be4b7['label']));
            else
                throw new Error('Unrecognized\x20framework\x20option:\x20' + _0x397c23['framework']);
        }
    }
    if (_0x586d09['fcJGu'](_0x15d6e7['length'], 0x0)) {
        console['error'](_0x586d09['WUVgT'](_0x586d09['WUVgT']('Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a', '\x09Provided\x20option:\x20' + _0x397c23['framework'] + '\x0a'), '\x09Available\x20frameworks:\x20[' + frameworks['map'](_0x25e256 => JSON['stringify'](_0x25e256['label']))['join'](',\x20') + ']\x0a'));
        throw new Error('Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20' + _0x397c23['framework']);
    }
    const _0x105b7d = [];
    for (let _0x16e686 of _0x15d6e7) {
        let _0x7ecbed = _0x16e686['dependencies']['framework'];
        if (_0x586d09['uvtxB'](typeof _0x7ecbed, _0x586d09['CyuvP']))
            throw new Error(_0x586d09['ZMPJt']);
        if (!await _0x16e686['isValid']()) {
            const _0x43d2c2 = 'Could\x20not\x20locate\x20path\x20for\x20' + _0x16e686['label'] + ':\x20' + _0x16e686['dependencies']['framework'] + '.\x20\x0aSkipping...';
            !warnings['has'](_0x43d2c2) && (console['warn'](_0x43d2c2), warnings['add'](_0x43d2c2));
            continue;
        }
        _0x105b7d['push']({
            ..._0x317dfd,
            'packageVersions': _0x16e686,
            'browser': _0x424348,
            'expand': _0x30f6a5
        });
    }
    _0x586d09['uvtxB'](_0x397c23['prepare'], ![]) && await _0x586d09['fBLXp'](prepare, _0x105b7d['map'](_0x2cc8fc => _0x2cc8fc['packageVersions']['label']));
    const _0xff8a58 = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x397c23[_0x586d09['Mtoci']],
        'timeout': _0x397c23['timeout'],
        'horizons': _0x397c23['horizon']['split'](','),
        'benchmarks': _0x105b7d
    };
    if (_0x586d09['fcJGu'](_0xff8a58['benchmarks']['length'], 0x0)) {
        if (_0x397c23['framework']) {
            const _0x51fcb0 = frameworks['map'](_0x22cc90 => _0x22cc90['label'])['join'](',\x20');
            throw new Error('No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20' + _0x51fcb0);
        } else
            throw new Error('Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20' + _0x15d6e7);
    }
    const _0x418a96 = await _0x586d09['iOWRs'](writeConfig, _0x317dfd['name'], _0xff8a58);
    return {
        'name': _0x317dfd['name'],
        'configPath': _0x418a96,
        'config': _0xff8a58
    };
}
async function writeConfig(_0x2b269a, _0x1c62c6) {
    const _0x1155a7 = {
            'DlLst': function (_0x453e7c, _0x4d9c83, _0x39dc39) {
                return _0x453e7c(_0x4d9c83, _0x39dc39);
            },
            'opDAP': 'dist',
            'Clbew': function (_0x4aa820, _0x29e482) {
                return _0x4aa820 + _0x29e482;
            },
            'nPCWT': '.config.json',
            'CoSiQ': function (_0x1a5f0e, _0x201ec8, _0x2b7f0b, _0x424525) {
                return _0x1a5f0e(_0x201ec8, _0x2b7f0b, _0x424525);
            },
            'itDsm': 'utf8'
        }, _0x3c6b16 = _0x1155a7['DlLst'](benchesRoot, _0x1155a7['opDAP'], _0x1155a7['Clbew'](_0x2b269a, _0x1155a7['nPCWT']));
    return await _0x1155a7['DlLst'](mkdir, _0x166236['dirname'](_0x3c6b16), { 'recursive': !![] }), await _0x1155a7['CoSiQ'](writeFile, _0x3c6b16, JSON['stringify'](_0x1c62c6, null, 0x2), _0x1155a7['itDsm']), _0x3c6b16;
}
function parseBrowserOption(_0xd88cb4) {
    const _0x73d4c3 = {
        'HAomF': function (_0x47b6b6, _0x56fcec) {
            return _0x47b6b6 !== _0x56fcec;
        },
        'gjQpT': function (_0x4bf03b, _0x981c36) {
            return _0x4bf03b + _0x981c36;
        },
        'zgbVb': '-headless',
        'fVPrS': function (_0x577e8a, _0x4193a7) {
            return _0x577e8a === _0x4193a7;
        },
        'tYpsC': function (_0xcad3df, _0x5afc7b) {
            return _0xcad3df == _0x5afc7b;
        },
        'zAsJe': 'chrome',
        'WoOHa': '--js-flags=--expose-gc',
        'IQPsO': '--enable-precise-memory-info'
    };
    let _0x250e73;
    const _0x4c9e5a = _0xd88cb4['indexOf']('@');
    _0x73d4c3['HAomF'](_0x4c9e5a, -0x1) && (_0x250e73 = _0xd88cb4['substring'](_0x73d4c3['gjQpT'](_0x4c9e5a, 0x1)), _0xd88cb4 = _0xd88cb4['substring'](0x0, _0x4c9e5a));
    const _0x25c90c = _0xd88cb4['endsWith'](_0x73d4c3['zgbVb']);
    _0x73d4c3['fVPrS'](_0x25c90c, !![]) && (_0xd88cb4 = _0xd88cb4['replace'](/-headless$/, ''));
    const _0x1300fe = _0xd88cb4, _0x54eb11 = {
            'name': _0x1300fe,
            'headless': _0x25c90c
        };
    return _0x73d4c3['HAomF'](_0x250e73, undefined) && (_0x54eb11['remoteUrl'] = _0x250e73), _0x73d4c3['tYpsC'](_0x54eb11['name'], _0x73d4c3['zAsJe']) && (_0x54eb11['addArguments'] = [
        _0x73d4c3['WoOHa'],
        _0x73d4c3['IQPsO']
    ]), _0x54eb11;
}
