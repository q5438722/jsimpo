const _0x5397 = [
    'exitCode',
    '83208TkCiHx',
    '69763MRDrxJ',
    '470642OiPpoO',
    '20zqKHlX',
    '50822eRzaDj',
    '758335VvKWpJ',
    '305oLMFkI',
    '1751jXhegf',
    '347996Kgacqb',
    'path',
    'terser',
    'prettier',
    'argv',
    'includes',
    'lib/util/semver.js',
    'resolve',
    'readFileSync',
    'utf-8',
    'exec',
    'toString',
    'slice',
    'length',
    'minify',
    'input.js',
    'code',
    '\x20is\x20too\x20high',
    'replace',
    '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27',
    '=>\x27\x20:\x20\x27function(',
    ')\x27}',
    'set',
    '\x0a//#region\x20runtime\x20code:\x20',
    '\x0aexports.',
    'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20',
    '\x20=\x20${runtimeTemplate.basicFunction(\x22',
    '\x0a])}`;\x0a//#endregion\x0a',
    'resolveConfig',
    'sync',
    'get',
    'error',
    '\x20need\x20to\x20be\x20updated'
];
function _0x2430(_0x3f33b8, _0x111a7e) {
    return _0x2430 = function (_0x5397cb, _0x24308e) {
        _0x5397cb = _0x5397cb - 0x166;
        let _0x4b66d0 = _0x5397[_0x5397cb];
        return _0x4b66d0;
    }, _0x2430(_0x3f33b8, _0x111a7e);
}
const _0x2123e2 = _0x2430;
(function (_0x2147d2, _0x42225d) {
    const _0x27547c = _0x2430;
    while (!![]) {
        try {
            const _0xdeffb9 = -parseInt(_0x27547c(0x166)) + parseInt(_0x27547c(0x167)) + -parseInt(_0x27547c(0x168)) + -parseInt(_0x27547c(0x169)) * -parseInt(_0x27547c(0x16a)) + -parseInt(_0x27547c(0x16b)) + -parseInt(_0x27547c(0x16c)) * -parseInt(_0x27547c(0x16d)) + parseInt(_0x27547c(0x16e));
            if (_0xdeffb9 === _0x42225d)
                break;
            else
                _0x2147d2['push'](_0x2147d2['shift']());
        } catch (_0x2303a0) {
            _0x2147d2['push'](_0x2147d2['shift']());
        }
    }
}(_0x5397, 0xa02c5));
const path = require(_0x2123e2(0x16f)), fs = require('fs'), terser = require(_0x2123e2(0x170)), prettier = require(_0x2123e2(0x171)), doWrite = process[_0x2123e2(0x172)][_0x2123e2(0x173)]('--write'), files = [_0x2123e2(0x174)];
(async () => {
    const _0x30d0ec = _0x2123e2;
    for (const _0xbc7c44 of files) {
        const _0x17ffe9 = path[_0x30d0ec(0x175)](__dirname, '..', _0xbc7c44), _0x18634a = fs[_0x30d0ec(0x176)](_0x17ffe9, _0x30d0ec(0x177)), _0x1f0447 = require('../' + _0xbc7c44), _0x2700c9 = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0x56ef34 = new Map();
        let _0x3f4fbd = _0x2700c9[_0x30d0ec(0x178)](_0x18634a);
        while (_0x3f4fbd) {
            const [_0x1a38f4, _0x17adc4] = _0x3f4fbd, _0x1715c2 = _0x1f0447[_0x17adc4][_0x30d0ec(0x179)](), _0x5762c8 = /^\(?([^=)]+)\)?\s=> \{/[_0x30d0ec(0x178)](_0x1715c2), _0x443323 = _0x1715c2[_0x30d0ec(0x17a)](_0x5762c8[0x0][_0x30d0ec(0x17b)], -0x1), _0x4e23ab = await terser[_0x30d0ec(0x17c)]({ [_0x30d0ec(0x17d)]: _0x443323 }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x3e02d4 = _0x5762c8[0x1];
            if (/`|const|let|=>|\.\.\./['test'](_0x4e23ab[_0x30d0ec(0x17e)]))
                throw new Error('Code\x20Style\x20of\x20' + _0x17adc4 + '\x20in\x20' + _0xbc7c44 + _0x30d0ec(0x17f));
            let _0xa4dfde = ![];
            const _0x5b45cf = _0x4e23ab[_0x30d0ec(0x17e)][_0x30d0ec(0x180)](/\\/g, '\x5c\x5c')[_0x30d0ec(0x180)](/'/g, '\x5c\x27')[_0x30d0ec(0x180)](/function\(([^)]+)\)/g, (_0x5143b8, _0x23c4ca) => {
                const _0x53e74f = _0x30d0ec;
                return _0xa4dfde = !![], _0x53e74f(0x181) + (_0x23c4ca[_0x53e74f(0x173)](',') ? '(' + _0x23c4ca + ')' : _0x23c4ca) + _0x53e74f(0x182) + _0x23c4ca + _0x53e74f(0x183);
            });
            _0x56ef34[_0x30d0ec(0x184)](_0x1a38f4, _0x30d0ec(0x185) + _0x17adc4 + _0x30d0ec(0x186) + _0x17adc4 + _0x30d0ec(0x187) + _0x17adc4 + _0x30d0ec(0x188) + _0x3e02d4 + '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/' + _0xbc7c44 + '\x20for\x20original\x20code\x22,\x0a\x09' + (_0xa4dfde ? '`' + _0x5b45cf + '`' : '\x27' + _0x5b45cf + '\x27') + _0x30d0ec(0x189)), _0x3f4fbd = _0x2700c9[_0x30d0ec(0x178)](_0x18634a);
        }
        const _0x15f1fa = prettier[_0x30d0ec(0x18a)][_0x30d0ec(0x18b)](_0x17ffe9), _0x14ebed = prettier['format'](_0x18634a[_0x30d0ec(0x180)](_0x2700c9, _0x6a0857 => _0x56ef34[_0x30d0ec(0x18c)](_0x6a0857)), {
                'filepath': _0x17ffe9,
                ..._0x15f1fa
            });
        _0x14ebed !== _0x18634a && (doWrite ? (fs['writeFileSync'](_0x17ffe9, _0x14ebed, _0x30d0ec(0x177)), console['error'](_0xbc7c44 + '\x20updated')) : (console[_0x30d0ec(0x18d)](_0xbc7c44 + _0x30d0ec(0x18e)), process[_0x30d0ec(0x18f)] = 0x1));
    }
})();
