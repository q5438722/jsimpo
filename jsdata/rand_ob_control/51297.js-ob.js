'use strict';
const {nodeResolve} = require('@rollup/plugin-node-resolve'), commonjs = require('@rollup/plugin-commonjs'), json = require('@rollup/plugin-json');
module['exports'] = {
    'input': 'src/cli-entry.mjs',
    'output': {
        'file': 'dist/index.mjs',
        'format': 'es',
        'sourcemap': ![],
        'exports': 'none'
    },
    'external': [
        'node:events',
        'node:fs',
        'node:path',
        'node:process',
        'node:stream',
        'node:url'
    ],
    'plugins': [
        {
            'name': 'brute-replace',
            'transform'(_0x142ebd, _0x18a1f1) {
                const _0x466a8d = {
                        'vVeqN': function (_0x23ffcd, _0x36eefb) {
                            return _0x23ffcd === _0x36eefb;
                        },
                        'eFFtw': '/node_modules/concat-stream/index.js',
                        'UKAKv': '\x27readable-stream\x27',
                        'RxwCH': '\x27stream\x27',
                        'rjDEJ': '/node_modules/unified-args/lib/options.js',
                        'uEvAB': '\x27./schema\x27',
                        'XlxEG': '\x27./schema.json\x27',
                        'LoGdi': '/node_modules/chokidar/lib/fsevents-handler.js',
                        'icrwO': 'fsevents\x20=\x20require(\x27fsevents\x27);',
                        'AOHIw': 'fsevents\x20=\x20undefined;',
                        'uiUWV': 'var\x20Glob\x20=\x20require(\x27./glob.js\x27).Glob'
                    }, _0x1879f8 = _0x18a1f1['replace'](__dirname, '')['replace'](/\\+/g, '/');
                if (_0x466a8d['vVeqN'](_0x1879f8, _0x466a8d['eFFtw']))
                    return _0x142ebd['replace'](_0x466a8d['UKAKv'], _0x466a8d['RxwCH']);
                if (_0x466a8d['vVeqN'](_0x1879f8, _0x466a8d['rjDEJ']))
                    return _0x142ebd['replace'](_0x466a8d['uEvAB'], _0x466a8d['XlxEG']);
                if (_0x466a8d['vVeqN'](_0x1879f8, _0x466a8d['LoGdi']))
                    return _0x142ebd['replace'](_0x466a8d['icrwO'], _0x466a8d['AOHIw']);
                return _0x142ebd['replace'](_0x466a8d['uiUWV'], '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': ['node'] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x53bea4) {
                const _0x2b7e46 = {
                        'YFFZx': function (_0x43683b, _0x5bcbf8) {
                            return _0x43683b + _0x5bcbf8;
                        },
                        'VtEks': '//\x20Don\x27t\x20change\x20this\x20file\x20manually,\x0a',
                        'CeMSq': '//\x20it\x20is\x20generated\x20from\x20tools/node-lint-md-cli-rollup',
                        'KYMWG': '\x27use\x20strict\x27;',
                        'iecxL': function (_0x30c471, _0x1d682f) {
                            return _0x30c471 + _0x1d682f;
                        },
                        'zCmGI': '\x27use\x20strict\x27;\x0a\x0a'
                    }, _0x3c86ee = _0x2b7e46['YFFZx'](_0x2b7e46['VtEks'], _0x2b7e46['CeMSq']);
                return _0x53bea4['replace'](_0x2b7e46['KYMWG'], _0x2b7e46['iecxL'](_0x2b7e46['zCmGI'], _0x3c86ee));
            }
        }
    ]
};
