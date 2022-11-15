'use strict';
const {nodeResolve} = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
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
            'transform'(_0x400b1d, _0x478787) {
                const _0x1d3e0f = _0x478787['replace'](__dirname, '')['replace'](/\\+/g, '/');
                if (_0x1d3e0f === '/node_modules/concat-stream/index.js') {
                    if ('KMIGK' === 'KMIGK') {
                        return _0x400b1d['replace']('\'readable-stream\'', '\'stream\'');
                    } else {
                        return _0x400b1d['replace']('\'readable-stream\'', '\'stream\'');
                    }
                }
                if (_0x1d3e0f === '/node_modules/unified-args/lib/options.js') {
                    return _0x400b1d['replace']('\'./schema\'', '\'./schema.json\'');
                }
                if (_0x1d3e0f === '/node_modules/chokidar/lib/fsevents-handler.js') {
                    if ('spUWs' === 'spUWs') {
                        return _0x400b1d['replace']('fsevents = require(\'fsevents\');', 'fsevents = undefined;');
                    } else {
                        const _0x239c0f = _0x478787['replace'](__dirname, '')['replace'](/\\+/g, '/');
                        if (_0x239c0f === '/node_modules/concat-stream/index.js') {
                            return _0x400b1d['replace']('\'readable-stream\'', '\'stream\'');
                        }
                        if (_0x239c0f === '/node_modules/unified-args/lib/options.js') {
                            return _0x400b1d['replace']('\'./schema\'', '\'./schema.json\'');
                        }
                        if (_0x239c0f === '/node_modules/chokidar/lib/fsevents-handler.js') {
                            return _0x400b1d['replace']('fsevents = require(\'fsevents\');', 'fsevents = undefined;');
                        }
                        return _0x400b1d['replace']('var Glob = require(\'./glob.js\').Glob', '');
                    }
                }
                return _0x400b1d['replace']('var Glob = require(\'./glob.js\').Glob', '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': ['node'] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x5dc31d) {
                const _0x53dac6 = '// Don\'t change this file manually,\n' + '// it is generated from tools/node-lint-md-cli-rollup';
                return _0x5dc31d['replace']('\'use strict\';', '\'use strict\';\n\n' + _0x53dac6);
            }
        }
    ]
};