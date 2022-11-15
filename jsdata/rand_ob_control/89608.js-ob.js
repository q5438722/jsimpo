const fs = require('fs-extra'), path = require('path'), glob = require('glob'), replaceHtmlCompilationHash = (_0x3a61a0, _0xc2f9d4) => {
        const _0xefc1e0 = fs['readFileSync'](_0x3a61a0, 'utf-8'), _0x4ee112 = /window\.webpackCompilationHash="\w*"/, _0x2066e5 = 'window.webpackCompilationHash=\x22' + _0xc2f9d4 + '\x22';
        fs['writeFileSync'](_0x3a61a0, _0xefc1e0['replace'](_0x4ee112, _0x2066e5), 'utf-8');
    }, replacePageDataCompilationHash = (_0x3cb6b8, _0x2f7681) => {
        const _0x1265a8 = JSON['parse'](fs['readFileSync'](_0x3cb6b8, 'utf-8'));
        _0x1265a8['webpackCompilationHash'] = _0x2f7681, fs['writeFileSync'](_0x3cb6b8, JSON['stringify'](_0x1265a8), 'utf-8');
    }, overwriteWebpackCompilationHash = _0x3388c5 => {
        const _0x115a09 = {
            'sZagV': function (_0x163c7b, _0xaae175, _0x37b8bc) {
                return _0x163c7b(_0xaae175, _0x37b8bc);
            }
        };
        return glob['sync'](path['join'](__dirname, '../../public/page-data/**/page-data.json'))['forEach'](_0x361c0c => replacePageDataCompilationHash(_0x361c0c, _0x3388c5)), glob['sync'](path['join'](__dirname, '../../public/**/*.html'))['forEach'](_0x366353 => {
            if (!_0x366353['match'](/\/page-data\/[^/.]+\.html/))
                _0x115a09['sZagV'](replaceHtmlCompilationHash, _0x366353, _0x3388c5);
        }), null;
    };
module['exports'] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };
