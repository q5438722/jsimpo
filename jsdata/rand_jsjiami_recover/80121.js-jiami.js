const path = require('path');
const fs = require('fs');
module['exports'] = function () {
    const _0x1b12cc = [
        path['join'](__dirname, '../packages/uni-app-plus/dist/view.umd.min.js'),
        path['join'](__dirname, '../packages/uni-app-plus/template/v3/__uniappquill.js'),
        path['join'](__dirname, '../packages/uni-app-plus/template/v3/__uniappquillimageresize.js')
    ];
    _0x1b12cc['forEach'](_0x3325c8 => {
        const _0x1b0333 = fs['readFileSync'](_0x3325c8, { 'encoding': 'utf8' });
        fs['writeFileSync'](_0x3325c8, _0x1b0333['replace'](/\.innerHTML\b/g, '["inner"+"HTML"]'), { 'encoding': 'utf8' });
    });
};