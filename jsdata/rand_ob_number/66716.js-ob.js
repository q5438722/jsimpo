const path = require('path'), fs = require('fs'), terser = require('terser'), prettier = require('prettier'), doWrite = process['argv']['includes']('--write'), files = ['lib/util/semver.js'];
(async () => {
    for (const _0x3cf33a of files) {
        const _0x4ddb74 = path['resolve'](__dirname, '..', _0x3cf33a), _0x32c87d = fs['readFileSync'](_0x4ddb74, 'utf-8'), _0x4c8937 = require('../' + _0x3cf33a), _0x164bb9 = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0x4372d3 = new Map();
        let _0x1d6ee1 = _0x164bb9['exec'](_0x32c87d);
        while (_0x1d6ee1) {
            const [_0x32f8cd, _0x39f4a8] = _0x1d6ee1, _0x5e775b = _0x4c8937[_0x39f4a8]['toString'](), _0x55241a = /^\(?([^=)]+)\)?\s=> \{/['exec'](_0x5e775b), _0x127758 = _0x5e775b['slice'](_0x55241a[0x165f + -0x5 * 0x3a9 + 0x1 * -0x412]['length'], -(-0x6 * -0x23 + 0x12fe + -0x13cf)), _0x517127 = await terser['minify']({ ['input.js']: _0x127758 }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x3cd725 = _0x55241a[-0x11e3 + -0x1cee + 0x2ed2];
            if (/`|const|let|=>|\.\.\./['test'](_0x517127['code']))
                throw new Error('Code\x20Style\x20of\x20' + _0x39f4a8 + '\x20in\x20' + _0x3cf33a + '\x20is\x20too\x20high');
            let _0x4565cd = ![];
            const _0x20d91c = _0x517127['code']['replace'](/\\/g, '\x5c\x5c')['replace'](/'/g, '\x5c\x27')['replace'](/function\(([^)]+)\)/g, (_0x5bafef, _0x40ff61) => {
                return _0x4565cd = !![], '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27' + (_0x40ff61['includes'](',') ? '(' + _0x40ff61 + ')' : _0x40ff61) + '=>\x27\x20:\x20\x27function(' + _0x40ff61 + ')\x27}';
            });
            _0x4372d3['set'](_0x32f8cd, '\x0a//#region\x20runtime\x20code:\x20' + _0x39f4a8 + '\x0aexports.' + _0x39f4a8 + 'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20' + _0x39f4a8 + '\x20=\x20${runtimeTemplate.basicFunction(\x22' + _0x3cd725 + '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/' + _0x3cf33a + '\x20for\x20original\x20code\x22,\x0a\x09' + (_0x4565cd ? '`' + _0x20d91c + '`' : '\x27' + _0x20d91c + '\x27') + '\x0a])}`;\x0a//#endregion\x0a'), _0x1d6ee1 = _0x164bb9['exec'](_0x32c87d);
        }
        const _0xbdf95f = prettier['resolveConfig']['sync'](_0x4ddb74), _0x31e880 = prettier['format'](_0x32c87d['replace'](_0x164bb9, _0x28e9d5 => _0x4372d3['get'](_0x28e9d5)), {
                'filepath': _0x4ddb74,
                ..._0xbdf95f
            });
        _0x31e880 !== _0x32c87d && (doWrite ? (fs['writeFileSync'](_0x4ddb74, _0x31e880, 'utf-8'), console['error'](_0x3cf33a + '\x20updated')) : (console['error'](_0x3cf33a + '\x20need\x20to\x20be\x20updated'), process['exitCode'] = -0x221d + 0x197c + -0x5 * -0x1ba));
    }
})();
