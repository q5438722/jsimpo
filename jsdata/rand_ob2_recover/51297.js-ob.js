const {nodeResolve} = require('@rollup/plugin-node-resolve'), commonjs = require(_0x44a58d(226)), json = require(_0x44a58d(227));
module[_0x44a58d(228)] = {
    'input': _0x44a58d(229),
    'output': {
        'file': _0x44a58d(230),
        'format': 'es',
        'sourcemap': ![],
        'exports': _0x44a58d(231)
    },
    'external': [
        'node:events',
        'node:fs',
        _0x44a58d(232),
        _0x44a58d(233),
        'node:stream',
        _0x44a58d(234)
    ],
    'plugins': [
        {
            'name': _0x44a58d(235),
            'transform'(_0x2ae3e1, _0x13ebd0) {
                const _0x1739db = _0x44a58d, _0x5ab59e = _0x13ebd0[_0x1739db(236)](__dirname, '')['replace'](/\\+/g, '/');
                if (_0x5ab59e === _0x1739db(237))
                    return _0x2ae3e1[_0x1739db(236)](_0x1739db(238), _0x1739db(239));
                if (_0x5ab59e === _0x1739db(240))
                    return _0x2ae3e1[_0x1739db(236)]('\'./schema\'', _0x1739db(241));
                if (_0x5ab59e === '/node_modules/chokidar/lib/fsevents-handler.js')
                    return _0x2ae3e1[_0x1739db(236)](_0x1739db(242), _0x1739db(243));
                return _0x2ae3e1[_0x1739db(236)](_0x1739db(244), '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': [_0x44a58d(245)] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x19e10a) {
                const _0x470650 = _0x44a58d, _0x3a8dc6 = _0x470650(246) + _0x470650(247);
                return _0x19e10a['replace'](_0x470650(248), '\'use strict\';\n\n' + _0x3a8dc6);
            }
        }
    ]
};