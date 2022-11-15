const _0x3f8c = [
    '2245mrNWIB',
    '427dGdXWN',
    'path',
    'prettier',
    'argv',
    '--write',
    'resolve',
    'XhPWi',
    '../',
    'toString',
    'exec',
    'slice',
    'minify',
    'input.js',
    'test',
    'code',
    'Code\x20Style\x20of\x20',
    '\x20in\x20',
    '\x20is\x20too\x20high',
    'replace',
    '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27',
    'includes',
    '=>\x27\x20:\x20\x27function(',
    'set',
    '\x0a//#region\x20runtime\x20code:\x20',
    '\x20=\x20${runtimeTemplate.basicFunction(\x22',
    '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/',
    '\x20for\x20original\x20code\x22,\x0a\x09',
    '\x0a])}`;\x0a//#endregion\x0a',
    'sync',
    'format',
    'get',
    'error',
    '\x20need\x20to\x20be\x20updated',
    'exitCode',
    '428333UeQblT',
    '355323QFuYMA',
    '319875rcVpNP',
    '3219AIOnHd',
    '14Lfblvb',
    '24634asaYHH',
    '11WEqUfP',
    '618QHdvYH',
    '911HmadHu'
];
function _0x333f(_0x3752e5, _0x3fdb96) {
    return _0x333f = function (_0x22b3a7, _0xb27548) {
        _0x22b3a7 = _0x22b3a7 - (0x1 * -0x193b + -0x1 * -0x2b4 + 0x1760);
        let _0x1ddd86 = _0x3f8c[_0x22b3a7];
        return _0x1ddd86;
    }, _0x333f(_0x3752e5, _0x3fdb96);
}
const _0x10a205 = _0x333f;
(function (_0x1e0333, _0x20da8e) {
    const _0x34c67d = _0x333f;
    while (!![]) {
        try {
            const _0x216822 = -parseInt(_0x34c67d(0xd9)) + parseInt(_0x34c67d(0xda)) + parseInt(_0x34c67d(0xdb)) + -parseInt(_0x34c67d(0xdc)) * parseInt(_0x34c67d(0xdd)) + parseInt(_0x34c67d(0xde)) * -parseInt(_0x34c67d(0xdf)) + -parseInt(_0x34c67d(0xe0)) * parseInt(_0x34c67d(0xe1)) + parseInt(_0x34c67d(0xe2)) * parseInt(_0x34c67d(0xe3));
            if (_0x216822 === _0x20da8e)
                break;
            else
                _0x1e0333['push'](_0x1e0333['shift']());
        } catch (_0x3bd44e) {
            _0x1e0333['push'](_0x1e0333['shift']());
        }
    }
}(_0x3f8c, -0xca * -0x4be + -0x26f2e + 0x3ac6c));
const path = require(_0x10a205(0xe4)), fs = require('fs'), terser = require('terser'), prettier = require(_0x10a205(0xe5)), doWrite = process[_0x10a205(0xe6)]['includes'](_0x10a205(0xe7)), files = ['lib/util/semver.js'];
(async () => {
    const _0x492fab = _0x10a205, _0x32cd64 = {
            'XhPWi': 'utf-8',
            'ZTWYy': function (_0x38c0ae, _0x20af67) {
                return _0x38c0ae !== _0x20af67;
            }
        };
    for (const _0x187bea of files) {
        const _0x55d6ee = path[_0x492fab(0xe8)](__dirname, '..', _0x187bea), _0x3a71e2 = fs['readFileSync'](_0x55d6ee, _0x32cd64[_0x492fab(0xe9)]), _0x4369a5 = require(_0x492fab(0xea) + _0x187bea), _0x35b46c = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0x18209d = new Map();
        let _0x4ee1e3 = _0x35b46c['exec'](_0x3a71e2);
        while (_0x4ee1e3) {
            const [_0x40f66c, _0x2e9855] = _0x4ee1e3, _0x10f6da = _0x4369a5[_0x2e9855][_0x492fab(0xeb)](), _0x3388c3 = /^\(?([^=)]+)\)?\s=> \{/[_0x492fab(0xec)](_0x10f6da), _0x5c3625 = _0x10f6da[_0x492fab(0xed)](_0x3388c3[0x537 + -0xdd4 + 0x89d]['length'], -(-0x5 * 0xef + -0x1e00 + 0x22ac)), _0x3a3403 = await terser[_0x492fab(0xee)]({ [_0x492fab(0xef)]: _0x5c3625 }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x526e54 = _0x3388c3[-0x1f0f * -0x1 + -0x1 * -0x21d9 + -0xcfb * 0x5];
            if (/`|const|let|=>|\.\.\./[_0x492fab(0xf0)](_0x3a3403[_0x492fab(0xf1)]))
                throw new Error(_0x492fab(0xf2) + _0x2e9855 + _0x492fab(0xf3) + _0x187bea + _0x492fab(0xf4));
            let _0x489268 = ![];
            const _0x4c75f1 = _0x3a3403[_0x492fab(0xf1)][_0x492fab(0xf5)](/\\/g, '\x5c\x5c')[_0x492fab(0xf5)](/'/g, '\x5c\x27')[_0x492fab(0xf5)](/function\(([^)]+)\)/g, (_0x8732e6, _0x36d1cb) => {
                const _0x37fbf6 = _0x492fab;
                return _0x489268 = !![], _0x37fbf6(0xf6) + (_0x36d1cb[_0x37fbf6(0xf7)](',') ? '(' + _0x36d1cb + ')' : _0x36d1cb) + _0x37fbf6(0xf8) + _0x36d1cb + ')\x27}';
            });
            _0x18209d[_0x492fab(0xf9)](_0x40f66c, _0x492fab(0xfa) + _0x2e9855 + '\x0aexports.' + _0x2e9855 + 'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20' + _0x2e9855 + _0x492fab(0xfb) + _0x526e54 + _0x492fab(0xfc) + _0x187bea + _0x492fab(0xfd) + (_0x489268 ? '`' + _0x4c75f1 + '`' : '\x27' + _0x4c75f1 + '\x27') + _0x492fab(0xfe)), _0x4ee1e3 = _0x35b46c[_0x492fab(0xec)](_0x3a71e2);
        }
        const _0x171b1a = prettier['resolveConfig'][_0x492fab(0xff)](_0x55d6ee), _0x6daf61 = prettier[_0x492fab(0x100)](_0x3a71e2[_0x492fab(0xf5)](_0x35b46c, _0x1e68b9 => _0x18209d[_0x492fab(0x101)](_0x1e68b9)), {
                'filepath': _0x55d6ee,
                ..._0x171b1a
            });
        _0x32cd64['ZTWYy'](_0x6daf61, _0x3a71e2) && (doWrite ? (fs['writeFileSync'](_0x55d6ee, _0x6daf61, _0x32cd64[_0x492fab(0xe9)]), console[_0x492fab(0x102)](_0x187bea + '\x20updated')) : (console['error'](_0x187bea + _0x492fab(0x103)), process[_0x492fab(0x104)] = 0x30d * -0x9 + 0x24f7 + 0x981 * -0x1));
    }
})();
