'use strict';
const _0xea0f = [
    '977BZEHGc',
    '1532141dgFGCr',
    '487790YiteZl',
    '6tsSiUA',
    '@rollup/plugin-commonjs',
    '@rollup/plugin-json',
    'exports',
    'src/cli-entry.mjs',
    'dist/index.mjs',
    'none',
    'node:path',
    'node:process',
    'node:url',
    'brute-replace',
    'replace',
    '/node_modules/concat-stream/index.js',
    '\x27readable-stream\x27',
    '\x27stream\x27',
    '/node_modules/unified-args/lib/options.js',
    '\x27./schema.json\x27',
    'fsevents\x20=\x20require(\x27fsevents\x27);',
    'fsevents\x20=\x20undefined;',
    'var\x20Glob\x20=\x20require(\x27./glob.js\x27).Glob',
    'node',
    '//\x20Don\x27t\x20change\x20this\x20file\x20manually,\x0a',
    '//\x20it\x20is\x20generated\x20from\x20tools/node-lint-md-cli-rollup',
    '\x27use\x20strict\x27;',
    '239683tPmVMn',
    '5AwYIvT',
    '13vOeJtg',
    '120917PvyQAm',
    '1465183jKmFGW',
    '8983rNWyin',
    '17ujGPkF',
    '1033wqRhav'
];
function _0x3039(_0x21d403, _0x5a72fb) {
    return _0x3039 = function (_0xea0fcf, _0x303986) {
        _0xea0fcf = _0xea0fcf - 0xd6;
        let _0x102774 = _0xea0f[_0xea0fcf];
        return _0x102774;
    }, _0x3039(_0x21d403, _0x5a72fb);
}
const _0x44a58d = _0x3039;
(function (_0x530e85, _0x207824) {
    const _0x380d33 = _0x3039;
    while (!![]) {
        try {
            const _0x4c5341 = -parseInt(_0x380d33(0xd6)) * -parseInt(_0x380d33(0xd7)) + -parseInt(_0x380d33(0xd8)) * -parseInt(_0x380d33(0xd9)) + parseInt(_0x380d33(0xda)) + -parseInt(_0x380d33(0xdb)) * -parseInt(_0x380d33(0xdc)) + parseInt(_0x380d33(0xdd)) * parseInt(_0x380d33(0xde)) + -parseInt(_0x380d33(0xdf)) + -parseInt(_0x380d33(0xe0)) * parseInt(_0x380d33(0xe1));
            if (_0x4c5341 === _0x207824)
                break;
            else
                _0x530e85['push'](_0x530e85['shift']());
        } catch (_0x590416) {
            _0x530e85['push'](_0x530e85['shift']());
        }
    }
}(_0xea0f, 0xe525e));
const {nodeResolve} = require('@rollup/plugin-node-resolve'), commonjs = require(_0x44a58d(0xe2)), json = require(_0x44a58d(0xe3));
module[_0x44a58d(0xe4)] = {
    'input': _0x44a58d(0xe5),
    'output': {
        'file': _0x44a58d(0xe6),
        'format': 'es',
        'sourcemap': ![],
        'exports': _0x44a58d(0xe7)
    },
    'external': [
        'node:events',
        'node:fs',
        _0x44a58d(0xe8),
        _0x44a58d(0xe9),
        'node:stream',
        _0x44a58d(0xea)
    ],
    'plugins': [
        {
            'name': _0x44a58d(0xeb),
            'transform'(_0x2ae3e1, _0x13ebd0) {
                const _0x1739db = _0x44a58d, _0x5ab59e = _0x13ebd0[_0x1739db(0xec)](__dirname, '')['replace'](/\\+/g, '/');
                if (_0x5ab59e === _0x1739db(0xed))
                    return _0x2ae3e1[_0x1739db(0xec)](_0x1739db(0xee), _0x1739db(0xef));
                if (_0x5ab59e === _0x1739db(0xf0))
                    return _0x2ae3e1[_0x1739db(0xec)]('\x27./schema\x27', _0x1739db(0xf1));
                if (_0x5ab59e === '/node_modules/chokidar/lib/fsevents-handler.js')
                    return _0x2ae3e1[_0x1739db(0xec)](_0x1739db(0xf2), _0x1739db(0xf3));
                return _0x2ae3e1[_0x1739db(0xec)](_0x1739db(0xf4), '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': [_0x44a58d(0xf5)] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x19e10a) {
                const _0x470650 = _0x44a58d, _0x3a8dc6 = _0x470650(0xf6) + _0x470650(0xf7);
                return _0x19e10a['replace'](_0x470650(0xf8), '\x27use\x20strict\x27;\x0a\x0a' + _0x3a8dc6);
            }
        }
    ]
};
