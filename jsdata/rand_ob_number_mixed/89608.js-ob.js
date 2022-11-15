const fs = require('fs-extra'), path = require('path'), glob = require('glob'), replaceHtmlCompilationHash = (_0x182bc5, _0x5bfbcc) => {
        const _0x2b81d9 = fs['readFileSync'](_0x182bc5, 'utf-8'), _0x270e95 = /window\.webpackCompilationHash="\w*"/, _0x22ae21 = 'window.webpackCompilationHash=\x22' + _0x5bfbcc + '\x22';
        fs['writeFileSync'](_0x182bc5, _0x2b81d9['replace'](_0x270e95, _0x22ae21), 'utf-8');
    }, replacePageDataCompilationHash = (_0x4b1553, _0x55bd87) => {
        const _0x34ffed = JSON['parse'](fs['readFileSync'](_0x4b1553, 'utf-8'));
        _0x34ffed['webpackCompilationHash'] = _0x55bd87, fs['writeFileSync'](_0x4b1553, JSON['stringify'](_0x34ffed), 'utf-8');
    }, overwriteWebpackCompilationHash = _0xba5947 => {
        return glob['sync'](path['join'](__dirname, '../../public/page-data/**/page-data.json'))['forEach'](_0x3cf686 => replacePageDataCompilationHash(_0x3cf686, _0xba5947)), glob['sync'](path['join'](__dirname, '../../public/**/*.html'))['forEach'](_0x36256c => {
            if (!_0x36256c['match'](/\/page-data\/[^/.]+\.html/))
                replaceHtmlCompilationHash(_0x36256c, _0xba5947);
        }), null;
    };
module['exports'] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };
