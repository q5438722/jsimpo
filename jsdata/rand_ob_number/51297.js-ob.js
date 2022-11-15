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
            'transform'(_0x2ec8f8, _0xc257b1) {
                const _0x44f604 = _0xc257b1['replace'](__dirname, '')['replace'](/\\+/g, '/');
                if (_0x44f604 === '/node_modules/concat-stream/index.js')
                    return _0x2ec8f8['replace']('\x27readable-stream\x27', '\x27stream\x27');
                if (_0x44f604 === '/node_modules/unified-args/lib/options.js')
                    return _0x2ec8f8['replace']('\x27./schema\x27', '\x27./schema.json\x27');
                if (_0x44f604 === '/node_modules/chokidar/lib/fsevents-handler.js')
                    return _0x2ec8f8['replace']('fsevents\x20=\x20require(\x27fsevents\x27);', 'fsevents\x20=\x20undefined;');
                return _0x2ec8f8['replace']('var\x20Glob\x20=\x20require(\x27./glob.js\x27).Glob', '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': ['node'] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x4a0f75) {
                const _0x549c6a = '//\x20Don\x27t\x20change\x20this\x20file\x20manually,\x0a' + '//\x20it\x20is\x20generated\x20from\x20tools/node-lint-md-cli-rollup';
                return _0x4a0f75['replace']('\x27use\x20strict\x27;', '\x27use\x20strict\x27;\x0a\x0a' + _0x549c6a);
            }
        }
    ]
};
