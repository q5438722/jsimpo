const _0x3759 = [
    'run-final',
    'src',
    'Given\x20path\x20is\x20not\x20a\x20file:\x20',
    'isArray',
    'browser',
    'map',
    'chrome',
    'name',
    '**/*',
    'trace',
    'find',
    'filter',
    'includes',
    'label',
    'Unrecognized\x20framework\x20option:\x20',
    'error',
    '\x09Provided\x20option:\x20',
    'string',
    'isValid',
    'Could\x20not\x20locate\x20path\x20for\x20',
    'has',
    'add',
    'prepare',
    'packageVersions',
    'timeout',
    'horizon',
    'split',
    'benchmarks',
    'length',
    'No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20',
    'Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20',
    'dist',
    '.config.json',
    'dirname',
    'stringify',
    'substring',
    'endsWith',
    'addArguments',
    '--js-flags=--expose-gc',
    '45758oaJLFR',
    '4021OlcPVE',
    '44jhIeVr',
    '86856wbGNoG',
    '285805cmRrqE',
    '383bGfJAL',
    '22adGrzW',
    '60492mQUZNY',
    '161061GOZHsn',
    'duration',
    'https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json',
    'join',
    'log',
    'Stat\x20error:',
    'preact-v8',
    'file:',
    'dependencies',
    'framework',
    'benches/proxy-packages/preact-master-proxy',
    'benches/proxy-packages/preact-local-proxy',
    'replace',
    '.html',
    'posix',
    'relative',
    'performance',
    'usedJSHeapSize',
    'expression',
    'window.usedJSHeapSize',
    'push'
];
const _0x41becc = _0x1aed;
(function (_0x221f70, _0x316c0a) {
    const _0x30901c = _0x1aed;
    while (!![]) {
        try {
            const _0x42492e = parseInt(_0x30901c(0x1a1)) + parseInt(_0x30901c(0x1a2)) * -parseInt(_0x30901c(0x1a3)) + -parseInt(_0x30901c(0x1a4)) + parseInt(_0x30901c(0x1a5)) + -parseInt(_0x30901c(0x1a6)) * parseInt(_0x30901c(0x1a7)) + -parseInt(_0x30901c(0x1a8)) + parseInt(_0x30901c(0x1a9));
            if (_0x42492e === _0x316c0a)
                break;
            else
                _0x221f70['push'](_0x221f70['shift']());
        } catch (_0x55eef1) {
            _0x221f70['push'](_0x221f70['shift']());
        }
    }
}(_0x3759, 0x270b6));
function _0x1aed(_0x40f204, _0x4092b0) {
    return _0x1aed = function (_0x375947, _0x1aedf5) {
        _0x375947 = _0x375947 - 0x1a1;
        let _0x27f70f = _0x3759[_0x375947];
        return _0x27f70f;
    }, _0x1aed(_0x40f204, _0x4092b0);
}
import * as _0x1ad070 from 'path';
import _0x30c808 from 'del';
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
const measureName = _0x41becc(0x1aa), warnings = new Set([]), TACH_SCHEMA = _0x41becc(0x1ab);
export const baseTraceLogDir = (..._0x54efd8) => _0x1ad070[_0x41becc(0x1ac)](benchesRoot('logs'), ..._0x54efd8);
async function validateFileDep(_0xfe3f37) {
    const _0x2603a5 = _0x41becc;
    try {
        return typeof _0xfe3f37 === 'string' ? (await stat(_0xfe3f37['replace'](/^file:/, '')), !![]) : ![];
    } catch (_0x1c8eda) {
        return console[_0x2603a5(0x1ad)](_0x2603a5(0x1ae), _0x1c8eda), ![];
    }
}
export const frameworks = [
    {
        'label': _0x41becc(0x1af),
        'dependencies': { 'framework': _0x41becc(0x1b0) + repoRoot('benches/proxy-packages/preact-v8-proxy') },
        'isValid'() {
            const _0x298f37 = _0x41becc;
            return validateFileDep(this[_0x298f37(0x1b1)][_0x298f37(0x1b2)]);
        }
    },
    {
        'label': 'preact-master',
        'dependencies': { 'framework': _0x41becc(0x1b0) + repoRoot(_0x41becc(0x1b3)) },
        async 'isValid'() {
            const _0x1468e7 = _0x41becc;
            try {
                return await stat(repoRoot('preact.tgz')), validateFileDep(this[_0x1468e7(0x1b1)][_0x1468e7(0x1b2)]);
            } catch (_0x2441d6) {
                return ![];
            }
        }
    },
    {
        'label': 'preact-local',
        'dependencies': { 'framework': _0x41becc(0x1b0) + repoRoot(_0x41becc(0x1b4)) },
        'isValid'() {
            const _0xa4ea0 = _0x41becc;
            return validateFileDep(this[_0xa4ea0(0x1b1)][_0xa4ea0(0x1b2)]);
        }
    }
];
function getBaseBenchmarkConfig(_0x147293) {
    const _0x95b8e = _0x41becc;
    let _0x32f58b = _0x1ad070['basename'](_0x147293)[_0x95b8e(0x1b5)](_0x95b8e(0x1b6), ''), _0x584bb4 = _0x1ad070[_0x95b8e(0x1b7)][_0x95b8e(0x1b8)](toUrl(benchesRoot()), toUrl(_0x147293)), _0x30e2e0;
    if (_0x32f58b == '02_replace1k') {
        const _0x8508fb = 0x5;
        _0x30e2e0 = [
            {
                'name': _0x95b8e(0x1aa),
                'mode': _0x95b8e(0x1b9),
                'entryName': measureName
            },
            {
                'name': _0x95b8e(0x1ba),
                'mode': _0x95b8e(0x1bb),
                'expression': _0x95b8e(0x1bc)
            }
        ];
        for (let _0x106369 = 0x0; _0x106369 < _0x8508fb; _0x106369++) {
            const _0x4265a0 = 'run-warmup-' + _0x106369;
            _0x30e2e0[_0x95b8e(0x1bd)]({
                'name': _0x4265a0,
                'mode': _0x95b8e(0x1b9),
                'entryName': _0x4265a0
            });
        }
        _0x30e2e0[_0x95b8e(0x1bd)]({
            'name': 'run-final',
            'mode': 'performance',
            'entryName': _0x95b8e(0x1be)
        });
    } else
        _0x30e2e0 = [
            {
                'name': _0x95b8e(0x1aa),
                'mode': _0x95b8e(0x1b9),
                'entryName': measureName
            },
            {
                'name': 'usedJSHeapSize',
                'mode': 'expression',
                'expression': 'window.usedJSHeapSize'
            }
        ];
    return {
        'name': _0x32f58b,
        'url': _0x584bb4,
        'measurement': _0x30e2e0
    };
}
export async function generateSingleConfig(_0x50f131, _0x1c8d41) {
    const _0x46ada6 = _0x41becc, _0x469497 = await benchesRoot(_0x46ada6(0x1bf), _0x50f131), _0x58f7de = await stat(_0x469497);
    if (!_0x58f7de['isFile'])
        throw new Error(_0x46ada6(0x1c0) + _0x469497);
    await generateConfig(_0x469497, {
        ...defaultBenchOptions,
        ..._0x1c8d41
    });
}
export async function generateConfig(_0x3f7206, _0x4b8564) {
    const _0x4e692e = _0x41becc;
    let _0x28a539, _0x768bc6;
    const _0x18f1e5 = getBaseBenchmarkConfig(_0x3f7206);
    Array[_0x4e692e(0x1c1)](_0x4b8564['browser']) ? _0x28a539 = _0x4b8564[_0x4e692e(0x1c2)][_0x4e692e(0x1c3)](_0x21e1ab => ({ 'browser': parseBrowserOption(_0x21e1ab) })) : _0x768bc6 = parseBrowserOption(_0x4b8564[_0x4e692e(0x1c2)]);
    if (_0x768bc6['name'] == _0x4e692e(0x1c4) && _0x4b8564['trace']) {
        const _0x27bb8b = baseTraceLogDir(_0x18f1e5[_0x4e692e(0x1c5)]);
        await _0x30c808(_0x4e692e(0x1c6), { 'cwd': _0x27bb8b }), await mkdir(_0x27bb8b, { 'recursive': !![] }), _0x768bc6[_0x4e692e(0x1c7)] = { 'logDir': _0x27bb8b };
    }
    let _0x5776b9;
    if (!_0x4b8564['framework'])
        _0x5776b9 = frameworks;
    else {
        if (typeof _0x4b8564[_0x4e692e(0x1b2)] === 'string') {
            const _0x55c9ba = frameworks[_0x4e692e(0x1c8)](_0x148ae1 => _0x148ae1['label'] == _0x4b8564[_0x4e692e(0x1b2)]);
            _0x5776b9 = _0x55c9ba ? [_0x55c9ba] : [];
        } else {
            if (Array['isArray'](_0x4b8564[_0x4e692e(0x1b2)]))
                _0x5776b9 = frameworks[_0x4e692e(0x1c9)](_0x16428c => _0x4b8564[_0x4e692e(0x1b2)][_0x4e692e(0x1ca)](_0x16428c[_0x4e692e(0x1cb)]));
            else
                throw new Error(_0x4e692e(0x1cc) + _0x4b8564['framework']);
        }
    }
    if (_0x5776b9['length'] == 0x0) {
        console[_0x4e692e(0x1cd)]('Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a' + (_0x4e692e(0x1ce) + _0x4b8564[_0x4e692e(0x1b2)] + '\x0a') + ('\x09Available\x20frameworks:\x20[' + frameworks[_0x4e692e(0x1c3)](_0x4a3d1b => JSON['stringify'](_0x4a3d1b[_0x4e692e(0x1cb)]))[_0x4e692e(0x1ac)](',\x20') + ']\x0a'));
        throw new Error('Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20' + _0x4b8564['framework']);
    }
    const _0x5d2ace = [];
    for (let _0x1efc1f of _0x5776b9) {
        let _0x2d48e7 = _0x1efc1f[_0x4e692e(0x1b1)]['framework'];
        if (typeof _0x2d48e7 !== _0x4e692e(0x1cf))
            throw new Error('Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time');
        if (!await _0x1efc1f[_0x4e692e(0x1d0)]()) {
            const _0x20833b = _0x4e692e(0x1d1) + _0x1efc1f[_0x4e692e(0x1cb)] + ':\x20' + _0x1efc1f['dependencies']['framework'] + '.\x20\x0aSkipping...';
            !warnings[_0x4e692e(0x1d2)](_0x20833b) && (console['warn'](_0x20833b), warnings[_0x4e692e(0x1d3)](_0x20833b));
            continue;
        }
        _0x5d2ace[_0x4e692e(0x1bd)]({
            ..._0x18f1e5,
            'packageVersions': _0x1efc1f,
            'browser': _0x768bc6,
            'expand': _0x28a539
        });
    }
    _0x4b8564[_0x4e692e(0x1d4)] !== ![] && await prepare(_0x5d2ace[_0x4e692e(0x1c3)](_0x5d2305 => _0x5d2305[_0x4e692e(0x1d5)][_0x4e692e(0x1cb)]));
    const _0x3dcbb3 = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x4b8564['sample-size'],
        'timeout': _0x4b8564[_0x4e692e(0x1d6)],
        'horizons': _0x4b8564[_0x4e692e(0x1d7)][_0x4e692e(0x1d8)](','),
        'benchmarks': _0x5d2ace
    };
    if (_0x3dcbb3[_0x4e692e(0x1d9)][_0x4e692e(0x1da)] == 0x0) {
        if (_0x4b8564[_0x4e692e(0x1b2)]) {
            const _0x5a846a = frameworks[_0x4e692e(0x1c3)](_0x50fcb2 => _0x50fcb2['label'])['join'](',\x20');
            throw new Error(_0x4e692e(0x1db) + _0x5a846a);
        } else
            throw new Error(_0x4e692e(0x1dc) + _0x5776b9);
    }
    const _0x402b8f = await writeConfig(_0x18f1e5['name'], _0x3dcbb3);
    return {
        'name': _0x18f1e5[_0x4e692e(0x1c5)],
        'configPath': _0x402b8f,
        'config': _0x3dcbb3
    };
}
async function writeConfig(_0x35a8fd, _0x40eaa8) {
    const _0x27a09c = _0x41becc, _0x41a45a = benchesRoot(_0x27a09c(0x1dd), _0x35a8fd + _0x27a09c(0x1de));
    return await mkdir(_0x1ad070[_0x27a09c(0x1df)](_0x41a45a), { 'recursive': !![] }), await writeFile(_0x41a45a, JSON[_0x27a09c(0x1e0)](_0x40eaa8, null, 0x2), 'utf8'), _0x41a45a;
}
function parseBrowserOption(_0x2c576f) {
    const _0x3b27e8 = _0x41becc;
    let _0x105e3a;
    const _0x2e3b51 = _0x2c576f['indexOf']('@');
    _0x2e3b51 !== -0x1 && (_0x105e3a = _0x2c576f[_0x3b27e8(0x1e1)](_0x2e3b51 + 0x1), _0x2c576f = _0x2c576f[_0x3b27e8(0x1e1)](0x0, _0x2e3b51));
    const _0x33b3ec = _0x2c576f[_0x3b27e8(0x1e2)]('-headless');
    _0x33b3ec === !![] && (_0x2c576f = _0x2c576f[_0x3b27e8(0x1b5)](/-headless$/, ''));
    const _0xefe9a5 = _0x2c576f, _0x47da42 = {
            'name': _0xefe9a5,
            'headless': _0x33b3ec
        };
    return _0x105e3a !== undefined && (_0x47da42['remoteUrl'] = _0x105e3a), _0x47da42['name'] == _0x3b27e8(0x1c4) && (_0x47da42[_0x3b27e8(0x1e3)] = [
        _0x3b27e8(0x1e4),
        '--enable-precise-memory-info'
    ]), _0x47da42;
}
