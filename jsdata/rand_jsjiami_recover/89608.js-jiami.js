const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');
const replaceHtmlCompilationHash = (_0xb7ae4, _0x5c8b51) => {
    const _0x3a0e29 = fs['readFileSync'](_0xb7ae4, 'utf-8');
    const _0x134ed6 = /window\.webpackCompilationHash="\w*"/;
    const _0x8c3032 = 'window.webpackCompilationHash="' + _0x5c8b51 + '"';
    fs['writeFileSync'](_0xb7ae4, _0x3a0e29['replace'](_0x134ed6, _0x8c3032), 'utf-8');
};
const replacePageDataCompilationHash = (_0x2c9cdc, _0x5b816b) => {
    const _0x340fd6 = JSON['parse'](fs['readFileSync'](_0x2c9cdc, 'utf-8'));
    _0x340fd6['webpackCompilationHash'] = _0x5b816b;
    fs['writeFileSync'](_0x2c9cdc, JSON['stringify'](_0x340fd6), 'utf-8');
};
const overwriteWebpackCompilationHash = _0x48ee9f => {
    glob['sync'](path['join'](__dirname, '../../public/page-data/**/page-data.json'))['forEach'](_0x20adf3 => replacePageDataCompilationHash(_0x20adf3, _0x48ee9f));
    glob['sync'](path['join'](__dirname, '../../public/**/*.html'))['forEach'](_0x15f65d => {
        if (!_0x15f65d['match'](/\/page-data\/[^\/.]+\.html/))
            replaceHtmlCompilationHash(_0x15f65d, _0x48ee9f);
    });
    return null;
};
module['exports'] = { 'overwriteWebpackCompilationHash': overwriteWebpackCompilationHash };