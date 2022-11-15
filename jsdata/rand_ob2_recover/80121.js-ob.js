const path = require(_0x55187c(222)), fs = require('fs');
module[_0x55187c(223)] = function () {
    const _0x22267c = _0x55187c, _0x445a53 = [
            path['join'](__dirname, '../packages/uni-app-plus/dist/view.umd.min.js'),
            path[_0x22267c(224)](__dirname, _0x22267c(225)),
            path[_0x22267c(224)](__dirname, '../packages/uni-app-plus/template/v3/__uniappquillimageresize.js')
        ];
    _0x445a53[_0x22267c(226)](_0x162053 => {
        const _0x45bdd9 = _0x22267c, _0x975e6a = fs[_0x45bdd9(227)](_0x162053, { 'encoding': _0x45bdd9(228) });
        fs[_0x45bdd9(229)](_0x162053, _0x975e6a[_0x45bdd9(230)](/\.innerHTML\b/g, _0x45bdd9(231)), { 'encoding': _0x45bdd9(228) });
    });
};