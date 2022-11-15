const _0x263d = ['195579kUicph', '51054ocNfeA', '6AoocKQ', '14813kSoYTy', '14ufVegj', '32179SZOLnN', '13vuxqBH', 'test/mjsunit/wasm/wasm-module-builder.js', 'addFunction', 'instantiate', 'exports', 'mul', 'float result: ', '*exception:* ', '2GrLkFe', '85759NAOfxm', '110872JZrnAD', '321969PnWewg', '1rfkOgI'];
const _0x7b1181 = _0x490c;

(function (_0x277a34, _0x436e70) {
    const _0xeb6c4c = _0x490c;

    while (true) {
        try {
            const _0x2db637 = -parseInt(_0xeb6c4c(0xe6)) * parseInt(_0xeb6c4c(0xe7)) + parseInt(_0xeb6c4c(0xe8)) + parseInt(_0xeb6c4c(0xe9)) * parseInt(_0xeb6c4c(0xea)) + -parseInt(_0xeb6c4c(0xeb)) + -parseInt(_0xeb6c4c(0xec)) * -parseInt(_0xeb6c4c(0xed)) + parseInt(_0xeb6c4c(0xee)) * parseInt(_0xeb6c4c(0xef)) + -parseInt(_0xeb6c4c(0xf0)) * parseInt(_0xeb6c4c(0xf1));

            if (_0x2db637 === _0x436e70) break;else _0x277a34.push(_0x277a34.shift());
        } catch (_0x2bc5fc) {
            _0x277a34.push(_0x277a34.shift());
        }
    }
})(_0x263d, 161123), load(_0x7b1181(0xf2));
const builder = new WasmModuleBuilder();

builder[_0x7b1181(0xf3)]('mul', kSig_f_ff).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprF32Mul]).exportFunc();
function _0x490c(_0x19b9c0, _0x358f1b) {
    return _0x490c = function (_0x150a96, _0x447c63) {
        _0x150a96 = _0x150a96 - 230;
        const _0x299b1d = _0x263d[_0x150a96];

        return _0x299b1d;
    }, _0x490c(_0x19b9c0, _0x358f1b);
}

const instance = builder[_0x7b1181(0xf4)]();

const wasm_f = instance[_0x7b1181(0xf5)][_0x7b1181(0xf6)];

function f() {
    const _0x3bc9ea = wasm_f(12, 3.5);

    return _0x3bc9ea;
}
try {
    const val = f();

    print(_0x7b1181(0xf7) + val);
} catch (_0x4bbee9) {
    print(_0x7b1181(0xf8) + _0x4bbee9);
}
