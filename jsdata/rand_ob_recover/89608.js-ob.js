const fs = require(_0x5088ce(224)), path = require('path'), glob = require(_0x5088ce(225)), replaceHtmlCompilationHash = (_0x3a5083, _0x1e4e53) => {
        const _0x2c3e0f = _0x5088ce, _0x41e57b = fs['readFileSync'](_0x3a5083, _0x2c3e0f(226)), _0x44f0c1 = /window\.webpackCompilationHash="\w*"/, _0x1aa95f = 'window.webpackCompilationHash="' + _0x1e4e53 + '"';
        fs[_0x2c3e0f(227)](_0x3a5083, _0x41e57b['replace'](_0x44f0c1, _0x1aa95f), _0x2c3e0f(226));
    }, replacePageDataCompilationHash = (_0x129f7a, _0x320a57) => {
        const _0x197a15 = _0x5088ce, _0x14f658 = JSON[_0x197a15(228)](fs['readFileSync'](_0x129f7a, _0x197a15(226)));
        _0x14f658['webpackCompilationHash'] = _0x320a57, fs[_0x197a15(227)](_0x129f7a, JSON[_0x197a15(229)](_0x14f658), _0x197a15(226));
    }, overwriteWebpackCompilationHash = _0x34ca42 => {
        const _0xe6763e = _0x5088ce, _0x4d6316 = {
                'OLqqc': function (_0x40c63b, _0x401308, _0x468690) {
                    return _0x40c63b(_0x401308, _0x468690);
                }
            };
        return glob[_0xe6763e(230)](path['join'](__dirname, '../../public/page-data/**/page-data.json'))['forEach'](_0x1f5377 => replacePageDataCompilationHash(_0x1f5377, _0x34ca42)), glob[_0xe6763e(230)](path[_0xe6763e(231)](__dirname, '../../public/**/*.html'))[_0xe6763e(232)](_0x432d6c => {
            const _0x530d6b = _0xe6763e;
            if (!_0x432d6c[_0x530d6b(233)](/\/page-data\/[^/.]+\.html/))
                _0x4d6316[_0x530d6b(234)](replaceHtmlCompilationHash, _0x432d6c, _0x34ca42);
        }), null;
    };
module[_0x5088ce(235)] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };