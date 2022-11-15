const _0x1090 = [
    'writeFileSync',
    'error',
    '\x20need\x20to\x20be\x20updated',
    'exitCode',
    '617402NzoFzf',
    '919899QNkokx',
    '1psUaZZ',
    '1160544YetagC',
    '27qrzCzQ',
    '56621ESnUoM',
    '1567234QbWCTC',
    '736918TuKVbW',
    '303789KQaeDd',
    '9cLTwUB',
    'path',
    'terser',
    'prettier',
    'argv',
    'includes',
    '--write',
    'lib/util/semver.js',
    'resolve',
    'readFileSync',
    'utf-8',
    '../',
    'exec',
    'toString',
    'slice',
    'length',
    'minify',
    'input.js',
    'code',
    'Code\x20Style\x20of\x20',
    '\x20in\x20',
    'replace',
    '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27',
    '=>\x27\x20:\x20\x27function(',
    'set',
    '\x0a//#region\x20runtime\x20code:\x20',
    'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20',
    '\x20=\x20${runtimeTemplate.basicFunction(\x22',
    '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/',
    '\x0a])}`;\x0a//#endregion\x0a',
    'resolveConfig',
    'sync',
    'get'
];
function _0x58d0(_0x3765cb, _0x45167a) {
    return _0x58d0 = function (_0x10907b, _0x58d0b6) {
        _0x10907b = _0x10907b - 0x136;
        let _0x4d9162 = _0x1090[_0x10907b];
        return _0x4d9162;
    }, _0x58d0(_0x3765cb, _0x45167a);
}
const _0x161d15 = _0x58d0;
(function (_0x2eb053, _0x165f06) {
    const _0x348259 = _0x58d0;
    while (!![]) {
        try {
            const _0x35562e = -parseInt(_0x348259(0x136)) + -parseInt(_0x348259(0x137)) * parseInt(_0x348259(0x138)) + -parseInt(_0x348259(0x139)) + parseInt(_0x348259(0x13a)) * -parseInt(_0x348259(0x13b)) + parseInt(_0x348259(0x13c)) + parseInt(_0x348259(0x13d)) + parseInt(_0x348259(0x13e)) * parseInt(_0x348259(0x13f));
            if (_0x35562e === _0x165f06)
                break;
            else
                _0x2eb053['push'](_0x2eb053['shift']());
        } catch (_0x49c80e) {
            _0x2eb053['push'](_0x2eb053['shift']());
        }
    }
}(_0x1090, 0xc6279));
const path = require(_0x161d15(0x140)), fs = require('fs'), terser = require(_0x161d15(0x141)), prettier = require(_0x161d15(0x142)), doWrite = process[_0x161d15(0x143)][_0x161d15(0x144)](_0x161d15(0x145)), files = [_0x161d15(0x146)];
(async () => {
    const _0x570ea9 = _0x161d15;
    for (const _0x59bc6b of files) {
        const _0x3b8fdb = path[_0x570ea9(0x147)](__dirname, '..', _0x59bc6b), _0x4f1e2e = fs[_0x570ea9(0x148)](_0x3b8fdb, _0x570ea9(0x149)), _0x1cce2c = require(_0x570ea9(0x14a) + _0x59bc6b), _0x5d332c = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0xbfeca3 = new Map();
        let _0x47e29c = _0x5d332c[_0x570ea9(0x14b)](_0x4f1e2e);
        while (_0x47e29c) {
            const [_0x72970b, _0x3f1a04] = _0x47e29c, _0x1c61bf = _0x1cce2c[_0x3f1a04][_0x570ea9(0x14c)](), _0x4e4974 = /^\(?([^=)]+)\)?\s=> \{/[_0x570ea9(0x14b)](_0x1c61bf), _0x375a0b = _0x1c61bf[_0x570ea9(0x14d)](_0x4e4974[0x0][_0x570ea9(0x14e)], -0x1), _0x476058 = await terser[_0x570ea9(0x14f)]({ [_0x570ea9(0x150)]: _0x375a0b }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x1012b5 = _0x4e4974[0x1];
            if (/`|const|let|=>|\.\.\./['test'](_0x476058[_0x570ea9(0x151)]))
                throw new Error(_0x570ea9(0x152) + _0x3f1a04 + _0x570ea9(0x153) + _0x59bc6b + '\x20is\x20too\x20high');
            let _0x146229 = ![];
            const _0x2ace65 = _0x476058[_0x570ea9(0x151)][_0x570ea9(0x154)](/\\/g, '\x5c\x5c')[_0x570ea9(0x154)](/'/g, '\x5c\x27')['replace'](/function\(([^)]+)\)/g, (_0x449682, _0x1f001d) => {
                const _0x4b8d96 = _0x570ea9;
                return _0x146229 = !![], _0x4b8d96(0x155) + (_0x1f001d['includes'](',') ? '(' + _0x1f001d + ')' : _0x1f001d) + _0x4b8d96(0x156) + _0x1f001d + ')\x27}';
            });
            _0xbfeca3[_0x570ea9(0x157)](_0x72970b, _0x570ea9(0x158) + _0x3f1a04 + '\x0aexports.' + _0x3f1a04 + _0x570ea9(0x159) + _0x3f1a04 + _0x570ea9(0x15a) + _0x1012b5 + _0x570ea9(0x15b) + _0x59bc6b + '\x20for\x20original\x20code\x22,\x0a\x09' + (_0x146229 ? '`' + _0x2ace65 + '`' : '\x27' + _0x2ace65 + '\x27') + _0x570ea9(0x15c)), _0x47e29c = _0x5d332c[_0x570ea9(0x14b)](_0x4f1e2e);
        }
        const _0x4095c1 = prettier[_0x570ea9(0x15d)][_0x570ea9(0x15e)](_0x3b8fdb), _0x5ad40d = prettier['format'](_0x4f1e2e[_0x570ea9(0x154)](_0x5d332c, _0x3424fa => _0xbfeca3[_0x570ea9(0x15f)](_0x3424fa)), {
                'filepath': _0x3b8fdb,
                ..._0x4095c1
            });
        _0x5ad40d !== _0x4f1e2e && (doWrite ? (fs[_0x570ea9(0x160)](_0x3b8fdb, _0x5ad40d, _0x570ea9(0x149)), console[_0x570ea9(0x161)](_0x59bc6b + '\x20updated')) : (console[_0x570ea9(0x161)](_0x59bc6b + _0x570ea9(0x162)), process[_0x570ea9(0x163)] = 0x1));
    }
})();
