const path = require('path'), fs = require('fs');
module['exports'] = function () {
    const _0x5be86d = [
        path['join'](__dirname, '../packages/uni-app-plus/dist/view.umd.min.js'),
        path['join'](__dirname, '../packages/uni-app-plus/template/v3/__uniappquill.js'),
        path['join'](__dirname, '../packages/uni-app-plus/template/v3/__uniappquillimageresize.js')
    ];
    _0x5be86d['forEach'](_0x318e6c => {
        const _0x3c9406 = fs['readFileSync'](_0x318e6c, { 'encoding': 'utf8' });
        fs['writeFileSync'](_0x318e6c, _0x3c9406['replace'](/\.innerHTML\b/g, '[\x22inner\x22+\x22HTML\x22]'), { 'encoding': 'utf8' });
    });
};
