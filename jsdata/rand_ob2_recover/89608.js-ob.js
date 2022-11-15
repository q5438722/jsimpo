const fs = require(_0x1da127(337)), path = require(_0x1da127(338)), glob = require('glob'), replaceHtmlCompilationHash = (_0x236dfa, _0x12823e) => {
        const _0x53d1a2 = _0x1da127, _0x5979ee = fs[_0x53d1a2(339)](_0x236dfa, _0x53d1a2(340)), _0x40f377 = /window\.webpackCompilationHash="\w*"/, _0x3e2e4f = _0x53d1a2(341) + _0x12823e + '"';
        fs[_0x53d1a2(342)](_0x236dfa, _0x5979ee[_0x53d1a2(343)](_0x40f377, _0x3e2e4f), _0x53d1a2(340));
    }, replacePageDataCompilationHash = (_0x49b371, _0x2f40ad) => {
        const _0x34ad12 = _0x1da127, _0x141c0f = JSON[_0x34ad12(344)](fs[_0x34ad12(339)](_0x49b371, _0x34ad12(340)));
        _0x141c0f[_0x34ad12(345)] = _0x2f40ad, fs[_0x34ad12(342)](_0x49b371, JSON[_0x34ad12(346)](_0x141c0f), 'utf-8');
    }, overwriteWebpackCompilationHash = _0x512e4e => {
        const _0x4e47ea = _0x1da127;
        return glob[_0x4e47ea(347)](path['join'](__dirname, '../../public/page-data/**/page-data.json'))[_0x4e47ea(348)](_0x4f3825 => replacePageDataCompilationHash(_0x4f3825, _0x512e4e)), glob[_0x4e47ea(347)](path[_0x4e47ea(349)](__dirname, '../../public/**/*.html'))['forEach'](_0x3c0403 => {
            if (!_0x3c0403['match'](/\/page-data\/[^/.]+\.html/))
                replaceHtmlCompilationHash(_0x3c0403, _0x512e4e);
        }), null;
    };
module['exports'] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };