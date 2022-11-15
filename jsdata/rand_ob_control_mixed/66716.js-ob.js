const path = require('path'), fs = require('fs'), terser = require('terser'), prettier = require('prettier'), doWrite = process['argv']['includes']('--write'), files = ['lib/util/semver.js'];
(async () => {
    const _0x4a5007 = {
        'rrFxL': 'utf-8',
        'GITON': function (_0x1ac6e9, _0x427c81) {
            return _0x1ac6e9(_0x427c81);
        },
        'jnuZh': function (_0x558148, _0x2eb633) {
            return _0x558148 !== _0x2eb633;
        }
    };
    for (const _0x3dce97 of files) {
        const _0x1ab2ef = path['resolve'](__dirname, '..', _0x3dce97), _0x51a35a = fs['readFileSync'](_0x1ab2ef, _0x4a5007['rrFxL']), _0x48d6dd = _0x4a5007['GITON'](require, '../' + _0x3dce97), _0x52d8f9 = /\n\/\/#region runtime code: (.+)\n[\s\S]+?\/\/#endregion\n/g, _0x3e1e13 = new Map();
        let _0x1a7875 = _0x52d8f9['exec'](_0x51a35a);
        while (_0x1a7875) {
            const [_0x2bc843, _0x3f3eff] = _0x1a7875, _0x117bb5 = _0x48d6dd[_0x3f3eff]['toString'](), _0x5a1a34 = /^\(?([^=)]+)\)?\s=> \{/['exec'](_0x117bb5), _0x323659 = _0x117bb5['slice'](_0x5a1a34[0x0]['length'], -0x1), _0x5a7aa4 = await terser['minify']({ ['input.js']: _0x323659 }, {
                    'compress': !![],
                    'mangle': !![],
                    'ecma': 0x5,
                    'toplevel': !![],
                    'parse': { 'bare_returns': !![] }
                }), _0x140232 = _0x5a1a34[0x1];
            if (/`|const|let|=>|\.\.\./['test'](_0x5a7aa4['code']))
                throw new Error('Code\x20Style\x20of\x20' + _0x3f3eff + '\x20in\x20' + _0x3dce97 + '\x20is\x20too\x20high');
            let _0x415138 = ![];
            const _0x2909f9 = _0x5a7aa4['code']['replace'](/\\/g, '\x5c\x5c')['replace'](/'/g, '\x5c\x27')['replace'](/function\(([^)]+)\)/g, (_0x19c27e, _0x30261e) => {
                return _0x415138 = !![], '${runtimeTemplate.supportsArrowFunction()\x20?\x20\x27' + (_0x30261e['includes'](',') ? '(' + _0x30261e + ')' : _0x30261e) + '=>\x27\x20:\x20\x27function(' + _0x30261e + ')\x27}';
            });
            _0x3e1e13['set'](_0x2bc843, '\x0a//#region\x20runtime\x20code:\x20' + _0x3f3eff + '\x0aexports.' + _0x3f3eff + 'RuntimeCode\x20=\x20runtimeTemplate\x20=>\x20`var\x20' + _0x3f3eff + '\x20=\x20${runtimeTemplate.basicFunction(\x22' + _0x140232 + '\x22,\x20[\x0a\x09\x22//\x20see\x20webpack/' + _0x3dce97 + '\x20for\x20original\x20code\x22,\x0a\x09' + (_0x415138 ? '`' + _0x2909f9 + '`' : '\x27' + _0x2909f9 + '\x27') + '\x0a])}`;\x0a//#endregion\x0a'), _0x1a7875 = _0x52d8f9['exec'](_0x51a35a);
        }
        const _0xd5cfcb = prettier['resolveConfig']['sync'](_0x1ab2ef), _0x53a3c6 = prettier['format'](_0x51a35a['replace'](_0x52d8f9, _0x429014 => _0x3e1e13['get'](_0x429014)), {
                'filepath': _0x1ab2ef,
                ..._0xd5cfcb
            });
        _0x4a5007['jnuZh'](_0x53a3c6, _0x51a35a) && (doWrite ? (fs['writeFileSync'](_0x1ab2ef, _0x53a3c6, _0x4a5007['rrFxL']), console['error'](_0x3dce97 + '\x20updated')) : (console['error'](_0x3dce97 + '\x20need\x20to\x20be\x20updated'), process['exitCode'] = 0x1));
    }
})();
