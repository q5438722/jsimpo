'use strict';
const _0x213e = [
    'fsevents\x20=\x20require(\x27fsevents\x27);',
    'fsevents\x20=\x20undefined;',
    'replace',
    'krXOj',
    '/node_modules/concat-stream/index.js',
    'huBEf',
    'VSKdw',
    'oPDbV',
    'fTcrd',
    '/node_modules/chokidar/lib/fsevents-handler.js',
    'KTfOT',
    'var\x20Glob\x20=\x20require(\x27./glob.js\x27).Glob',
    'node',
    'GdAOL',
    '//\x20it\x20is\x20generated\x20from\x20tools/node-lint-md-cli-rollup',
    'JJvVR',
    'eGxRn',
    '1033JZRYnZ',
    '153cIIIFu',
    '21521Ontjaz',
    '6DMzyhe',
    '1663yhwwPa',
    '66qqhnXu',
    '1yDTXwS',
    '20611fIyRLC',
    '112067xdvBPy',
    '1qeVoNZ',
    '42803IaJaOu',
    '72238EoOXts',
    '@rollup/plugin-node-resolve',
    '@rollup/plugin-commonjs',
    '@rollup/plugin-json',
    'exports',
    'src/cli-entry.mjs',
    'dist/index.mjs',
    'none',
    'node:events',
    'node:fs',
    'node:path',
    'node:process',
    'node:stream',
    'node:url',
    'brute-replace',
    '\x27readable-stream\x27',
    '\x27stream\x27',
    '/node_modules/unified-args/lib/options.js'
];
const _0x55500e = _0x5250;
(function (_0x10cd9c, _0x6e7e89) {
    const _0x2b27ea = _0x5250;
    while (!![]) {
        try {
            const _0x393489 = -parseInt(_0x2b27ea(0x14b)) * parseInt(_0x2b27ea(0x14c)) + -parseInt(_0x2b27ea(0x14d)) * -parseInt(_0x2b27ea(0x14e)) + -parseInt(_0x2b27ea(0x14f)) * parseInt(_0x2b27ea(0x150)) + -parseInt(_0x2b27ea(0x151)) * -parseInt(_0x2b27ea(0x152)) + -parseInt(_0x2b27ea(0x153)) * -parseInt(_0x2b27ea(0x154)) + parseInt(_0x2b27ea(0x155)) + parseInt(_0x2b27ea(0x156));
            if (_0x393489 === _0x6e7e89)
                break;
            else
                _0x10cd9c['push'](_0x10cd9c['shift']());
        } catch (_0x2572ba) {
            _0x10cd9c['push'](_0x10cd9c['shift']());
        }
    }
}(_0x213e, -0x1a8da + 0x25d89 * -0x1 + 0x5b051));
function _0x5250(_0x303b5e, _0x3388cf) {
    return _0x5250 = function (_0x29c09c, _0x40ebc4) {
        _0x29c09c = _0x29c09c - (-0xcf8 + 0xb9 * 0x35 + -0x180a);
        let _0x2178ae = _0x213e[_0x29c09c];
        return _0x2178ae;
    }, _0x5250(_0x303b5e, _0x3388cf);
}
const {nodeResolve} = require(_0x55500e(0x157)), commonjs = require(_0x55500e(0x158)), json = require(_0x55500e(0x159));
module[_0x55500e(0x15a)] = {
    'input': _0x55500e(0x15b),
    'output': {
        'file': _0x55500e(0x15c),
        'format': 'es',
        'sourcemap': ![],
        'exports': _0x55500e(0x15d)
    },
    'external': [
        _0x55500e(0x15e),
        _0x55500e(0x15f),
        _0x55500e(0x160),
        _0x55500e(0x161),
        _0x55500e(0x162),
        _0x55500e(0x163)
    ],
    'plugins': [
        {
            'name': _0x55500e(0x164),
            'transform'(_0x34aa6b, _0x13c1f9) {
                const _0x38a359 = _0x55500e, _0x55d270 = {
                        'krXOj': function (_0x23221b, _0xfd9c0e) {
                            return _0x23221b === _0xfd9c0e;
                        },
                        'OogUu': _0x38a359(0x165),
                        'huBEf': _0x38a359(0x166),
                        'VSKdw': function (_0x38805d, _0x237691) {
                            return _0x38805d === _0x237691;
                        },
                        'oPDbV': _0x38a359(0x167),
                        'fTcrd': '\x27./schema\x27',
                        'KTfOT': _0x38a359(0x168),
                        'wjgFc': _0x38a359(0x169)
                    }, _0x3bfa44 = _0x13c1f9['replace'](__dirname, '')[_0x38a359(0x16a)](/\\+/g, '/');
                if (_0x55d270[_0x38a359(0x16b)](_0x3bfa44, _0x38a359(0x16c)))
                    return _0x34aa6b[_0x38a359(0x16a)](_0x55d270['OogUu'], _0x55d270[_0x38a359(0x16d)]);
                if (_0x55d270[_0x38a359(0x16e)](_0x3bfa44, _0x55d270[_0x38a359(0x16f)]))
                    return _0x34aa6b[_0x38a359(0x16a)](_0x55d270[_0x38a359(0x170)], '\x27./schema.json\x27');
                if (_0x55d270[_0x38a359(0x16e)](_0x3bfa44, _0x38a359(0x171)))
                    return _0x34aa6b[_0x38a359(0x16a)](_0x55d270[_0x38a359(0x172)], _0x55d270['wjgFc']);
                return _0x34aa6b[_0x38a359(0x16a)](_0x38a359(0x173), '');
            }
        },
        json({ 'preferConst': !![] }),
        nodeResolve({ 'exportConditions': [_0x55500e(0x174)] }),
        commonjs(),
        {
            'name': 'banner',
            'renderChunk'(_0x371531) {
                const _0x5ca287 = _0x55500e, _0x42ab52 = {
                        'GdAOL': function (_0x5764b2, _0x5a4469) {
                            return _0x5764b2 + _0x5a4469;
                        },
                        'JJvVR': '\x27use\x20strict\x27;',
                        'cCJkj': function (_0x3bd605, _0x1f277d) {
                            return _0x3bd605 + _0x1f277d;
                        },
                        'eGxRn': '\x27use\x20strict\x27;\x0a\x0a'
                    }, _0x3f534d = _0x42ab52[_0x5ca287(0x175)]('//\x20Don\x27t\x20change\x20this\x20file\x20manually,\x0a', _0x5ca287(0x176));
                return _0x371531[_0x5ca287(0x16a)](_0x42ab52[_0x5ca287(0x177)], _0x42ab52['cCJkj'](_0x42ab52[_0x5ca287(0x178)], _0x3f534d));
            }
        }
    ]
};
