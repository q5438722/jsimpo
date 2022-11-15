const _0x11bd = [
    'UUrzs',
    'writeFileSync',
    'error',
    '\x20updated',
    '\x20need\x20to\x20be\x20updated',
    '591548omjTZU',
    '1krxaPv',
    '263itbJzC',
    '2279JTzXjo',
    '444018cpyCIt',
    '11CpytzF',
    '9391QoOauf',
    '14792YQrJFL',
    '37SXEBul',
    '362304TpiQAR',
    '4235ADsNWx',
    '284oJjwgR',
    'prettier',
    'includes',
    'lib/util/semver.js',
    'utf-8',
    'resolve',
    'readFileSync',
    'PLWSp',
    'zcjFV',
    '../',
    'exec',
    'minify',
    'input.js',
    'test',
    'code',
    '\x20in\x20',
    '\x20is\x20too\x20high',
    'replace',
    '=>\x27\x20:\x20\x27function(',
    '\x0a//#region\x20runtime\x20code:\x20',
    'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20',
    '\x20=\x20${runtimeTemplate.basicFunction(\x22',
    '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/',
    'resolveConfig',
    'sync',
    'format',
    'get'
];
function _0x4372(_0x541042, _0x2f3ace) {
    return _0x4372 = function (_0x3a1adf, _0x368d57) {
        _0x3a1adf = _0x3a1adf - (0xf9f + -0x10d * 0x12 + -0x3f3 * -0x1);
        let _0x2f584e = _0x11bd[_0x3a1adf];
        return _0x2f584e;
    }, _0x4372(_0x541042, _0x2f3ace);
}
const _0xe827fe = _0x4372;
(function (_0x3e7267, _0x46ab2c) {
    const _0x51bf31 = _0x4372;
    while (!![]) {
        try {
            const _0x5ed3b4 = -parseInt(_0x51bf31(0xa8)) * -parseInt(_0x51bf31(0xa9)) + parseInt(_0x51bf31(0xaa)) * parseInt(_0x51bf31(0xab)) + parseInt(_0x51bf31(0xac)) + parseInt(_0x51bf31(0xad)) * parseInt(_0x51bf31(0xae)) + parseInt(_0x51bf31(0xaf)) * -parseInt(_0x51bf31(0xb0)) + parseInt(_0x51bf31(0xb1)) + -parseInt(_0x51bf31(0xb2)) * parseInt(_0x51bf31(0xb3));
            if (_0x5ed3b4 === _0x46ab2c)
                break;
            else
                _0x3e7267['push'](_0x3e7267['shift']());
        } catch (_0x1955f2) {
            _0x3e7267['push'](_0x3e7267['shift']());
        }
    }
}(_0x11bd, -0x82426 + -0x3c68a + 0x1143d8));
const path = require('path'), fs = require('fs'), terser = require('terser'), prettier = require(_0xe827fe(0xb4)), doWrite = process['argv'][_0xe827fe(0xb5)]('--write'), files = [_0xe827fe(0xb6)];
(async () => {
    const _0x4209b1 = _0xe827fe, _0x246e9e = {
            'PLWSp': _0x4209b1(0xb7),
            'zcjFV': function (_0xa504bb, _0x3c7d1c) {
                return _0xa504bb(_0x3c7d1c);
            },
            'UUrzs': function (_0x37b416, _0xfe75ff) {
                return _0x37b416 !== _0xfe75ff;
            }
        };
    for (const _0xcb6290 of files) {
        const _0x163439 = path[_0x4209b1(0xb8)](__dirname, '..', _0xcb6290), _0x1d6b0e = fs[_0x4209b1(0xb9)](_0x163439, _0x246e9e[_0x4209b1(0xba)]), _0x34b46d = _0x246e9e[_0x4209b1(0xbb)](require, _0x4209b1(0xbc) + _0xcb6290), _0x254bec = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0x451f3a = new Map();
        let _0xab09f = _0x254bec[_0x4209b1(0xbd)](_0x1d6b0e);
        while (_0xab09f) {
            const [_0x4f07e3, _0x2cb542] = _0xab09f, _0x4c1488 = _0x34b46d[_0x2cb542]['toString'](), _0x5032aa = /^\(?([^=)]+)\)?\s=> \{/[_0x4209b1(0xbd)](_0x4c1488), _0x2e9d29 = _0x4c1488['slice'](_0x5032aa[0x254d + -0xaa * 0x2b + -0x8bf]['length'], -(-0x2d * -0xc + 0x17c5 + -0x450 * 0x6)), _0x5b893c = await terser[_0x4209b1(0xbe)]({ [_0x4209b1(0xbf)]: _0x2e9d29 }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x214de0 = _0x5032aa[0x103c + -0x1976 + 0x93b];
            if (/`|const|let|=>|\.\.\./[_0x4209b1(0xc0)](_0x5b893c[_0x4209b1(0xc1)]))
                throw new Error('Code\x20Style\x20of\x20' + _0x2cb542 + _0x4209b1(0xc2) + _0xcb6290 + _0x4209b1(0xc3));
            let _0x9adc7 = ![];
            const _0x558d5f = _0x5b893c[_0x4209b1(0xc1)][_0x4209b1(0xc4)](/\\/g, '\x5c\x5c')['replace'](/'/g, '\x5c\x27')[_0x4209b1(0xc4)](/function\(([^)]+)\)/g, (_0x1d438e, _0x2990d1) => {
                const _0x2867c9 = _0x4209b1;
                return _0x9adc7 = !![], '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27' + (_0x2990d1[_0x2867c9(0xb5)](',') ? '(' + _0x2990d1 + ')' : _0x2990d1) + _0x2867c9(0xc5) + _0x2990d1 + ')\x27}';
            });
            _0x451f3a['set'](_0x4f07e3, _0x4209b1(0xc6) + _0x2cb542 + '\x0aexports.' + _0x2cb542 + _0x4209b1(0xc7) + _0x2cb542 + _0x4209b1(0xc8) + _0x214de0 + _0x4209b1(0xc9) + _0xcb6290 + '\x20for\x20original\x20code\x22,\x0a\x09' + (_0x9adc7 ? '`' + _0x558d5f + '`' : '\x27' + _0x558d5f + '\x27') + '\x0a])}`;\x0a//#endregion\x0a'), _0xab09f = _0x254bec[_0x4209b1(0xbd)](_0x1d6b0e);
        }
        const _0x2602b9 = prettier[_0x4209b1(0xca)][_0x4209b1(0xcb)](_0x163439), _0x407884 = prettier[_0x4209b1(0xcc)](_0x1d6b0e[_0x4209b1(0xc4)](_0x254bec, _0x551510 => _0x451f3a[_0x4209b1(0xcd)](_0x551510)), {
                'filepath': _0x163439,
                ..._0x2602b9
            });
        _0x246e9e[_0x4209b1(0xce)](_0x407884, _0x1d6b0e) && (doWrite ? (fs[_0x4209b1(0xcf)](_0x163439, _0x407884, _0x4209b1(0xb7)), console[_0x4209b1(0xd0)](_0xcb6290 + _0x4209b1(0xd1))) : (console[_0x4209b1(0xd0)](_0xcb6290 + _0x4209b1(0xd2)), process['exitCode'] = 0x1 * 0x217d + -0x16d9 + -0xaa3));
    }
})();
