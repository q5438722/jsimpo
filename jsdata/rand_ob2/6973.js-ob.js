const _0x1ee8 = [
    '211325JKxHzA',
    '264958CoMsof',
    '2UxQRxi',
    '360997vVIUCy',
    '7921xGdTsw',
    '2BkDjEC',
    '16937GUUiBC',
    '27MhAeeh',
    'duration',
    'https://raw.githubusercontent.com/Polymer/tachometer/master/config.schema.json',
    'logs',
    'string',
    'replace',
    'log',
    'preact-v8',
    'benches/proxy-packages/preact-v8-proxy',
    'framework',
    'preact-master',
    'file:',
    'benches/proxy-packages/preact-master-proxy',
    'preact.tgz',
    'dependencies',
    'preact-local',
    'benches/proxy-packages/preact-local-proxy',
    '.html',
    'posix',
    'relative',
    '02_replace1k',
    'performance',
    'window.usedJSHeapSize',
    'run-warmup-',
    'push',
    'run-final',
    'usedJSHeapSize',
    'expression',
    'isFile',
    'browser',
    'map',
    'name',
    'chrome',
    'trace',
    'find',
    'label',
    'isArray',
    'includes',
    'Unrecognized\x20framework\x20option:\x20',
    'error',
    '\x09Available\x20frameworks:\x20[',
    'stringify',
    'join',
    'Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20',
    'isValid',
    'warn',
    'add',
    'prepare',
    'packageVersions',
    'timeout',
    'horizon',
    'benchmarks',
    'length',
    'No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20',
    'dist',
    'utf8',
    'indexOf',
    'substring',
    'remoteUrl',
    '--js-flags=--expose-gc',
    '144329wxdlLQ',
    '1aMurJQ',
    '339419EdVvpP',
    '1RdHLTI'
];
const _0x4b8d4a = _0x2a77;
(function (_0x47f40c, _0x54c0a) {
    const _0x84c23a = _0x2a77;
    while (!![]) {
        try {
            const _0x95c5a2 = parseInt(_0x84c23a(0x93)) + -parseInt(_0x84c23a(0x94)) * -parseInt(_0x84c23a(0x95)) + parseInt(_0x84c23a(0x96)) * parseInt(_0x84c23a(0x97)) + parseInt(_0x84c23a(0x98)) * -parseInt(_0x84c23a(0x99)) + -parseInt(_0x84c23a(0x9a)) + parseInt(_0x84c23a(0x9b)) * parseInt(_0x84c23a(0x9c)) + -parseInt(_0x84c23a(0x9d)) * -parseInt(_0x84c23a(0x9e));
            if (_0x95c5a2 === _0x54c0a)
                break;
            else
                _0x47f40c['push'](_0x47f40c['shift']());
        } catch (_0x176c94) {
            _0x47f40c['push'](_0x47f40c['shift']());
        }
    }
}(_0x1ee8, 0x43b35));
function _0x2a77(_0x3aaa53, _0x15c43e) {
    return _0x2a77 = function (_0x1ee8f5, _0x2a77bf) {
        _0x1ee8f5 = _0x1ee8f5 - 0x93;
        let _0x5d79fb = _0x1ee8[_0x1ee8f5];
        return _0x5d79fb;
    }, _0x2a77(_0x3aaa53, _0x15c43e);
}
import * as _0x585cf5 from 'path';
import _0x5492ac from 'del';
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
const measureName = _0x4b8d4a(0x9f), warnings = new Set([]), TACH_SCHEMA = _0x4b8d4a(0xa0);
export const baseTraceLogDir = (..._0x3b542a) => _0x585cf5['join'](benchesRoot(_0x4b8d4a(0xa1)), ..._0x3b542a);
async function validateFileDep(_0x25d498) {
    const _0x25bf8c = _0x4b8d4a;
    try {
        return typeof _0x25d498 === _0x25bf8c(0xa2) ? (await stat(_0x25d498[_0x25bf8c(0xa3)](/^file:/, '')), !![]) : ![];
    } catch (_0x275395) {
        return console[_0x25bf8c(0xa4)]('Stat\x20error:', _0x275395), ![];
    }
}
export const frameworks = [
    {
        'label': _0x4b8d4a(0xa5),
        'dependencies': { 'framework': 'file:' + repoRoot(_0x4b8d4a(0xa6)) },
        'isValid'() {
            const _0x1e20b8 = _0x4b8d4a;
            return validateFileDep(this['dependencies'][_0x1e20b8(0xa7)]);
        }
    },
    {
        'label': _0x4b8d4a(0xa8),
        'dependencies': { 'framework': _0x4b8d4a(0xa9) + repoRoot(_0x4b8d4a(0xaa)) },
        async 'isValid'() {
            const _0x23dd8e = _0x4b8d4a;
            try {
                return await stat(repoRoot(_0x23dd8e(0xab))), validateFileDep(this[_0x23dd8e(0xac)][_0x23dd8e(0xa7)]);
            } catch (_0x1be2f4) {
                return ![];
            }
        }
    },
    {
        'label': _0x4b8d4a(0xad),
        'dependencies': { 'framework': 'file:' + repoRoot(_0x4b8d4a(0xae)) },
        'isValid'() {
            const _0x32840c = _0x4b8d4a;
            return validateFileDep(this[_0x32840c(0xac)][_0x32840c(0xa7)]);
        }
    }
];
function getBaseBenchmarkConfig(_0x46f2fd) {
    const _0x2b176f = _0x4b8d4a;
    let _0x3c074d = _0x585cf5['basename'](_0x46f2fd)[_0x2b176f(0xa3)](_0x2b176f(0xaf), ''), _0xd01a00 = _0x585cf5[_0x2b176f(0xb0)][_0x2b176f(0xb1)](toUrl(benchesRoot()), toUrl(_0x46f2fd)), _0x1f3197;
    if (_0x3c074d == _0x2b176f(0xb2)) {
        const _0x41efbb = 0x5;
        _0x1f3197 = [
            {
                'name': 'duration',
                'mode': _0x2b176f(0xb3),
                'entryName': measureName
            },
            {
                'name': 'usedJSHeapSize',
                'mode': 'expression',
                'expression': _0x2b176f(0xb4)
            }
        ];
        for (let _0x3555af = 0x0; _0x3555af < _0x41efbb; _0x3555af++) {
            const _0x3d545f = _0x2b176f(0xb5) + _0x3555af;
            _0x1f3197['push']({
                'name': _0x3d545f,
                'mode': _0x2b176f(0xb3),
                'entryName': _0x3d545f
            });
        }
        _0x1f3197[_0x2b176f(0xb6)]({
            'name': 'run-final',
            'mode': _0x2b176f(0xb3),
            'entryName': _0x2b176f(0xb7)
        });
    } else
        _0x1f3197 = [
            {
                'name': _0x2b176f(0x9f),
                'mode': _0x2b176f(0xb3),
                'entryName': measureName
            },
            {
                'name': _0x2b176f(0xb8),
                'mode': _0x2b176f(0xb9),
                'expression': _0x2b176f(0xb4)
            }
        ];
    return {
        'name': _0x3c074d,
        'url': _0xd01a00,
        'measurement': _0x1f3197
    };
}
export async function generateSingleConfig(_0x1b6e55, _0x34685e) {
    const _0xbf1e33 = _0x4b8d4a, _0x2eba21 = await benchesRoot('src', _0x1b6e55), _0x563780 = await stat(_0x2eba21);
    if (!_0x563780[_0xbf1e33(0xba)])
        throw new Error('Given\x20path\x20is\x20not\x20a\x20file:\x20' + _0x2eba21);
    await generateConfig(_0x2eba21, {
        ...defaultBenchOptions,
        ..._0x34685e
    });
}
export async function generateConfig(_0x23fed9, _0x2fbd84) {
    const _0x123d65 = _0x4b8d4a;
    let _0xdaf48e, _0x44f2ec;
    const _0x512dbf = getBaseBenchmarkConfig(_0x23fed9);
    Array['isArray'](_0x2fbd84['browser']) ? _0xdaf48e = _0x2fbd84[_0x123d65(0xbb)][_0x123d65(0xbc)](_0x1f2ac4 => ({ 'browser': parseBrowserOption(_0x1f2ac4) })) : _0x44f2ec = parseBrowserOption(_0x2fbd84['browser']);
    if (_0x44f2ec[_0x123d65(0xbd)] == _0x123d65(0xbe) && _0x2fbd84[_0x123d65(0xbf)]) {
        const _0x11dca9 = baseTraceLogDir(_0x512dbf[_0x123d65(0xbd)]);
        await _0x5492ac('**/*', { 'cwd': _0x11dca9 }), await mkdir(_0x11dca9, { 'recursive': !![] }), _0x44f2ec[_0x123d65(0xbf)] = { 'logDir': _0x11dca9 };
    }
    let _0x341677;
    if (!_0x2fbd84[_0x123d65(0xa7)])
        _0x341677 = frameworks;
    else {
        if (typeof _0x2fbd84[_0x123d65(0xa7)] === _0x123d65(0xa2)) {
            const _0x5503fb = frameworks[_0x123d65(0xc0)](_0x3be73a => _0x3be73a[_0x123d65(0xc1)] == _0x2fbd84[_0x123d65(0xa7)]);
            _0x341677 = _0x5503fb ? [_0x5503fb] : [];
        } else {
            if (Array[_0x123d65(0xc2)](_0x2fbd84[_0x123d65(0xa7)]))
                _0x341677 = frameworks['filter'](_0x3f1891 => _0x2fbd84[_0x123d65(0xa7)][_0x123d65(0xc3)](_0x3f1891[_0x123d65(0xc1)]));
            else
                throw new Error(_0x123d65(0xc4) + _0x2fbd84[_0x123d65(0xa7)]);
        }
    }
    if (_0x341677['length'] == 0x0) {
        console[_0x123d65(0xc5)]('Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a' + ('\x09Provided\x20option:\x20' + _0x2fbd84[_0x123d65(0xa7)] + '\x0a') + (_0x123d65(0xc6) + frameworks['map'](_0x343a69 => JSON[_0x123d65(0xc7)](_0x343a69[_0x123d65(0xc1)]))[_0x123d65(0xc8)](',\x20') + ']\x0a'));
        throw new Error(_0x123d65(0xc9) + _0x2fbd84[_0x123d65(0xa7)]);
    }
    const _0x20b5b3 = [];
    for (let _0x1cf956 of _0x341677) {
        let _0x3dc196 = _0x1cf956[_0x123d65(0xac)][_0x123d65(0xa7)];
        if (typeof _0x3dc196 !== _0x123d65(0xa2))
            throw new Error('Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time');
        if (!await _0x1cf956[_0x123d65(0xca)]()) {
            const _0x187dcb = 'Could\x20not\x20locate\x20path\x20for\x20' + _0x1cf956['label'] + ':\x20' + _0x1cf956[_0x123d65(0xac)][_0x123d65(0xa7)] + '.\x20\x0aSkipping...';
            !warnings['has'](_0x187dcb) && (console[_0x123d65(0xcb)](_0x187dcb), warnings[_0x123d65(0xcc)](_0x187dcb));
            continue;
        }
        _0x20b5b3[_0x123d65(0xb6)]({
            ..._0x512dbf,
            'packageVersions': _0x1cf956,
            'browser': _0x44f2ec,
            'expand': _0xdaf48e
        });
    }
    _0x2fbd84[_0x123d65(0xcd)] !== ![] && await prepare(_0x20b5b3[_0x123d65(0xbc)](_0x2d0c1f => _0x2d0c1f[_0x123d65(0xce)][_0x123d65(0xc1)]));
    const _0x17a987 = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x2fbd84['sample-size'],
        'timeout': _0x2fbd84[_0x123d65(0xcf)],
        'horizons': _0x2fbd84[_0x123d65(0xd0)]['split'](','),
        'benchmarks': _0x20b5b3
    };
    if (_0x17a987[_0x123d65(0xd1)][_0x123d65(0xd2)] == 0x0) {
        if (_0x2fbd84[_0x123d65(0xa7)]) {
            const _0x30048f = frameworks[_0x123d65(0xbc)](_0x3e95e3 => _0x3e95e3[_0x123d65(0xc1)])[_0x123d65(0xc8)](',\x20');
            throw new Error(_0x123d65(0xd3) + _0x30048f);
        } else
            throw new Error('Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20' + _0x341677);
    }
    const _0x1b6cfd = await writeConfig(_0x512dbf['name'], _0x17a987);
    return {
        'name': _0x512dbf[_0x123d65(0xbd)],
        'configPath': _0x1b6cfd,
        'config': _0x17a987
    };
}
async function writeConfig(_0x981cc, _0x586747) {
    const _0x32ddb2 = _0x4b8d4a, _0x1842c3 = benchesRoot(_0x32ddb2(0xd4), _0x981cc + '.config.json');
    return await mkdir(_0x585cf5['dirname'](_0x1842c3), { 'recursive': !![] }), await writeFile(_0x1842c3, JSON[_0x32ddb2(0xc7)](_0x586747, null, 0x2), _0x32ddb2(0xd5)), _0x1842c3;
}
function parseBrowserOption(_0x4520cc) {
    const _0x2075c3 = _0x4b8d4a;
    let _0x15f48d;
    const _0x2e523f = _0x4520cc[_0x2075c3(0xd6)]('@');
    _0x2e523f !== -0x1 && (_0x15f48d = _0x4520cc[_0x2075c3(0xd7)](_0x2e523f + 0x1), _0x4520cc = _0x4520cc[_0x2075c3(0xd7)](0x0, _0x2e523f));
    const _0x2c8960 = _0x4520cc['endsWith']('-headless');
    _0x2c8960 === !![] && (_0x4520cc = _0x4520cc['replace'](/-headless$/, ''));
    const _0x3ffc7e = _0x4520cc, _0xd9b6a4 = {
            'name': _0x3ffc7e,
            'headless': _0x2c8960
        };
    return _0x15f48d !== undefined && (_0xd9b6a4[_0x2075c3(0xd8)] = _0x15f48d), _0xd9b6a4['name'] == _0x2075c3(0xbe) && (_0xd9b6a4['addArguments'] = [
        _0x2075c3(0xd9),
        '--enable-precise-memory-info'
    ]), _0xd9b6a4;
}
