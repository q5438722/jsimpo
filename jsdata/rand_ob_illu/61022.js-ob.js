const _0x46ee = ['1smHqwb', '260482clEsaG', '2046260rODRjb', 'test/mjsunit/wasm/wasm-module-builder.js', 'addFunction', 'main', 'addBody', 'exportFunc', 'instantiate', 'ngjhC', 'exports', 'lszeH', '1081552KzCKcP', '1DZXvLd', '1079592QjFuRm', '2138bsUoCr', '19RRqaGX', '322853CzouDP', '434451fteRpJ'];

function _0x1088(_0x1d96c3, _0x21ded0) {
    return _0x1088 = function (_0x35fdf7, _0x2b9bc9) {
        _0x35fdf7 = _0x35fdf7 - 299;
        const _0x4fa4e5 = _0x46ee[_0x35fdf7];

        return _0x4fa4e5;
    }, _0x1088(_0x1d96c3, _0x21ded0);
}
const _0x3d3402 = _0x1088;

(function (_0x9d357f, _0x412b62) {
    const _0x420226 = _0x1088;

    while (true) {
        try {
            const _0x1eb6a4 = parseInt(_0x420226(0x12b)) + -parseInt(_0x420226(0x12c)) * -parseInt(_0x420226(0x12d)) + -parseInt(_0x420226(0x12e)) * parseInt(_0x420226(0x12f)) + parseInt(_0x420226(0x130)) + -parseInt(_0x420226(0x131)) * -parseInt(_0x420226(0x132)) + -parseInt(_0x420226(0x133)) + -parseInt(_0x420226(0x134));

            if (_0x1eb6a4 === _0x412b62) break;else _0x9d357f.push(_0x9d357f.shift());
        } catch (_0x3431e9) {
            _0x9d357f.push(_0x9d357f.shift());
        }
    }
})(_0x46ee, 571084), load(_0x3d3402(0x135)), function AddTest() {
    const _0x8df1da = _0x3d3402;
    const _0x2184f6 = {
        'ngjhC': function (_0x4f3864, _0x5ea2c4, _0x1e6176) {
            return _0x4f3864(_0x5ea2c4, _0x1e6176);
        }
    };

    const _0x3ff40b = new WasmModuleBuilder();

    _0x3ff40b[_0x8df1da(0x136)](_0x8df1da(0x137), kSig_i_v)[_0x8df1da(0x138)]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Add, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])[_0x8df1da(0x139)]();

    const _0x508c3f = _0x3ff40b[_0x8df1da(0x13a)]();

    _0x2184f6[_0x8df1da(0x13b)](assertEquals, 0, _0x508c3f[_0x8df1da(0x13c)][_0x8df1da(0x137)]());
}(), function SubTest() {
    const _0x68ec2a = _0x3d3402;
    const _0xa9f511 = {
        'cqjgi': _0x68ec2a(0x137),
        'lszeH': function (_0x2875dd, _0x558dcb, _0x32a6a7) {
            return _0x2875dd(_0x558dcb, _0x32a6a7);
        }
    };

    const _0x35f9f5 = new WasmModuleBuilder();

    _0x35f9f5[_0x68ec2a(0x136)](_0xa9f511.cqjgi, kSig_i_v)[_0x68ec2a(0x138)]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Sub, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])[_0x68ec2a(0x139)]();

    const _0x2ec33f = _0x35f9f5[_0x68ec2a(0x13a)]();

    _0xa9f511[_0x68ec2a(0x13d)](assertEquals, 0, _0x2ec33f[_0x68ec2a(0x13c)][_0x68ec2a(0x137)]());
}();
