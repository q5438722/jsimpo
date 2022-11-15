import * as _0x161f61 from 'path';
import _0x46a4bd from 'del';
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
export const baseTraceLogDir = (..._0xedaab1) => _0x161f61['join'](benchesRoot('logs'), ..._0xedaab1);
async function validateFileDep(_0x5a9f49) {
    try {
        return typeof _0x5a9f49 === 'string' ? (await stat(_0x5a9f49['replace'](/^file:/, '')), !![]) : ![];
    } catch (_0x32785e) {
        return console['log']('Stat\x20error:', _0x32785e), ![];
    }
}
export const frameworks = [
    {
        'label': 'preact-v8',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-v8-proxy') },
        'isValid'() {
            return validateFileDep(this['dependencies']['framework']);
        }
    },
    {
        'label': 'preact-master',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-master-proxy') },
        async 'isValid'() {
            try {
                return await stat(repoRoot('preact.tgz')), validateFileDep(this['dependencies']['framework']);
            } catch (_0x15dbf8) {
                return ![];
            }
        }
    },
    {
        'label': 'preact-local',
        'dependencies': { 'framework': 'file:' + repoRoot('benches/proxy-packages/preact-local-proxy') },
        'isValid'() {
            return validateFileDep(this['dependencies']['framework']);
        }
    }
];
function getBaseBenchmarkConfig(_0xd938d5) {
    let _0x5991fa = _0x161f61['basename'](_0xd938d5)['replace']('.html', ''), _0x3cd0e9 = _0x161f61['posix']['relative'](toUrl(benchesRoot()), toUrl(_0xd938d5)), _0x49452d;
    if (_0x5991fa == '02_replace1k') {
        const _0xaabd = -0x1 * -0x1e25 + 0x11f7 + 0xd * -0x3b3;
        _0x49452d = [
            {
                'name': 'duration',
                'mode': 'performance',
                'entryName': measureName
            },
            {
                'name': 'usedJSHeapSize',
                'mode': 'expression',
                'expression': 'window.usedJSHeapSize'
            }
        ];
        for (let _0x457e37 = 0x1c8e + 0x21bb + -0x3e49; _0x457e37 < _0xaabd; _0x457e37++) {
            const _0x258cb1 = 'run-warmup-' + _0x457e37;
            _0x49452d['push']({
                'name': _0x258cb1,
                'mode': 'performance',
                'entryName': _0x258cb1
            });
        }
        _0x49452d['push']({
            'name': 'run-final',
            'mode': 'performance',
            'entryName': 'run-final'
        });
    } else
        _0x49452d = [
            {
                'name': 'duration',
                'mode': 'performance',
                'entryName': measureName
            },
            {
                'name': 'usedJSHeapSize',
                'mode': 'expression',
                'expression': 'window.usedJSHeapSize'
            }
        ];
    return {
        'name': _0x5991fa,
        'url': _0x3cd0e9,
        'measurement': _0x49452d
    };
}
export async function generateSingleConfig(_0x174c2b, _0x3b9443) {
    const _0x2cb34a = await benchesRoot('src', _0x174c2b), _0x50cf17 = await stat(_0x2cb34a);
    if (!_0x50cf17['isFile'])
        throw new Error('Given\x20path\x20is\x20not\x20a\x20file:\x20' + _0x2cb34a);
    await generateConfig(_0x2cb34a, {
        ...defaultBenchOptions,
        ..._0x3b9443
    });
}
export async function generateConfig(_0x19895c, _0x3f2ec9) {
    let _0x1b1df5, _0x394732;
    const _0x422c95 = getBaseBenchmarkConfig(_0x19895c);
    Array['isArray'](_0x3f2ec9['browser']) ? _0x1b1df5 = _0x3f2ec9['browser']['map'](_0x2c018e => ({ 'browser': parseBrowserOption(_0x2c018e) })) : _0x394732 = parseBrowserOption(_0x3f2ec9['browser']);
    if (_0x394732['name'] == 'chrome' && _0x3f2ec9['trace']) {
        const _0x15fe83 = baseTraceLogDir(_0x422c95['name']);
        await _0x46a4bd('**/*', { 'cwd': _0x15fe83 }), await mkdir(_0x15fe83, { 'recursive': !![] }), _0x394732['trace'] = { 'logDir': _0x15fe83 };
    }
    let _0x303dae;
    if (!_0x3f2ec9['framework'])
        _0x303dae = frameworks;
    else {
        if (typeof _0x3f2ec9['framework'] === 'string') {
            const _0x5bbc38 = frameworks['find'](_0x303bf4 => _0x303bf4['label'] == _0x3f2ec9['framework']);
            _0x303dae = _0x5bbc38 ? [_0x5bbc38] : [];
        } else {
            if (Array['isArray'](_0x3f2ec9['framework']))
                _0x303dae = frameworks['filter'](_0x1edaef => _0x3f2ec9['framework']['includes'](_0x1edaef['label']));
            else
                throw new Error('Unrecognized\x20framework\x20option:\x20' + _0x3f2ec9['framework']);
        }
    }
    if (_0x303dae['length'] == 0x16ab + -0x755 * 0x1 + -0xf56) {
        console['error']('Framework\x20options\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x0a' + ('\x09Provided\x20option:\x20' + _0x3f2ec9['framework'] + '\x0a') + ('\x09Available\x20frameworks:\x20[' + frameworks['map'](_0x1ab16b => JSON['stringify'](_0x1ab16b['label']))['join'](',\x20') + ']\x0a'));
        throw new Error('Framework\x20option\x20did\x20not\x20match\x20any\x20configured\x20frameworks:\x20' + _0x3f2ec9['framework']);
    }
    const _0x40d9ec = [];
    for (let _0x5a1545 of _0x303dae) {
        let _0x54699b = _0x5a1545['dependencies']['framework'];
        if (typeof _0x54699b !== 'string')
            throw new Error('Only\x20string/npm\x20dependencies\x20are\x20supported\x20at\x20this\x20time');
        if (!await _0x5a1545['isValid']()) {
            const _0x343d08 = 'Could\x20not\x20locate\x20path\x20for\x20' + _0x5a1545['label'] + ':\x20' + _0x5a1545['dependencies']['framework'] + '.\x20\x0aSkipping...';
            !warnings['has'](_0x343d08) && (console['warn'](_0x343d08), warnings['add'](_0x343d08));
            continue;
        }
        _0x40d9ec['push']({
            ..._0x422c95,
            'packageVersions': _0x5a1545,
            'browser': _0x394732,
            'expand': _0x1b1df5
        });
    }
    _0x3f2ec9['prepare'] !== ![] && await prepare(_0x40d9ec['map'](_0x4a01a3 => _0x4a01a3['packageVersions']['label']));
    const _0x248ad3 = {
        '$schema': TACH_SCHEMA,
        'sampleSize': _0x3f2ec9['sample-size'],
        'timeout': _0x3f2ec9['timeout'],
        'horizons': _0x3f2ec9['horizon']['split'](','),
        'benchmarks': _0x40d9ec
    };
    if (_0x248ad3['benchmarks']['length'] == -0x2693 + 0xcea + 0x1 * 0x19a9) {
        if (_0x3f2ec9['framework']) {
            const _0xae5c68 = frameworks['map'](_0x4174ae => _0x4174ae['label'])['join'](',\x20');
            throw new Error('No\x20benchmarks\x20created.\x20Does\x20the\x20specified\x20framework\x20match\x20one\x20of\x20the\x20configured\x20frameworks?\x20' + _0xae5c68);
        } else
            throw new Error('Unknown\x20failure:\x20no\x20benchmarks\x20created.\x20frameworksToRun:\x20' + _0x303dae);
    }
    const _0x116a7e = await writeConfig(_0x422c95['name'], _0x248ad3);
    return {
        'name': _0x422c95['name'],
        'configPath': _0x116a7e,
        'config': _0x248ad3
    };
}
async function writeConfig(_0xe27804, _0x418e3e) {
    const _0x4b4f9b = benchesRoot('dist', _0xe27804 + '.config.json');
    return await mkdir(_0x161f61['dirname'](_0x4b4f9b), { 'recursive': !![] }), await writeFile(_0x4b4f9b, JSON['stringify'](_0x418e3e, null, 0x16af * 0x1 + 0x1cd5 + -0x3382), 'utf8'), _0x4b4f9b;
}
function parseBrowserOption(_0x133f4d) {
    let _0x17cc07;
    const _0x369f8a = _0x133f4d['indexOf']('@');
    _0x369f8a !== -(-0x23ea * -0x1 + 0x17c1 + -0x3baa) && (_0x17cc07 = _0x133f4d['substring'](_0x369f8a + (0x232d * 0x1 + -0xb17 * 0x1 + 0x807 * -0x3)), _0x133f4d = _0x133f4d['substring'](0x10b7 + -0xfeb + -0xcc * 0x1, _0x369f8a));
    const _0x1de627 = _0x133f4d['endsWith']('-headless');
    _0x1de627 === !![] && (_0x133f4d = _0x133f4d['replace'](/-headless$/, ''));
    const _0x54fbd5 = _0x133f4d, _0x40b6a8 = {
            'name': _0x54fbd5,
            'headless': _0x1de627
        };
    return _0x17cc07 !== undefined && (_0x40b6a8['remoteUrl'] = _0x17cc07), _0x40b6a8['name'] == 'chrome' && (_0x40b6a8['addArguments'] = [
        '--js-flags=--expose-gc',
        '--enable-precise-memory-info'
    ]), _0x40b6a8;
}
