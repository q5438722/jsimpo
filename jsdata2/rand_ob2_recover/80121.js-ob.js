const path = require(_0x393f49(199)), fs = require('fs');
module[_0x393f49(200)] = function () {
    const _0x4d7cf9 = _0x393f49, _0x2ef052 = [
            path[_0x4d7cf9(201)](__dirname, _0x4d7cf9(202)),
            path[_0x4d7cf9(201)](__dirname, '../packages/uni-app-plus/template/v3/__uniappquill.js'),
            path[_0x4d7cf9(201)](__dirname, _0x4d7cf9(203))
        ];
    _0x2ef052[_0x4d7cf9(204)](_0x3d1ae3 => {
        const _0x3345b3 = _0x4d7cf9, _0x11917f = fs[_0x3345b3(205)](_0x3d1ae3, { 'encoding': _0x3345b3(206) });
        fs[_0x3345b3(207)](_0x3d1ae3, _0x11917f[_0x3345b3(208)](/\.innerHTML\b/g, _0x3345b3(209)), { 'encoding': _0x3345b3(206) });
    });
};