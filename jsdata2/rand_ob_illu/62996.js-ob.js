const _0x1c38 = ['exports', 'ksBTI', 'JPPFg', 'arDeh', 'eKzwf', 'ptHOB', 'NVFpl', 'kTtxj', 'haNdV', 'CsUmT', 'sYaeX', 'yVUrg', 'plus_one', 'qDWUG', 'TestExternalCallBetweenTwoWasmModulesWithMemory', 'bnTic', 'kBkvJ', 'MUGGd', 'mDICY', 'iPKua', 'WQaTJ', 'ZGfUG', 'TestCorrectMemoryAccessedAfterReturningFromExternalCall', 'sandwich', 'rzXNn', 'SojZF', 'MjQez', 'CallThroughTableIndependenceTest', 'anyfunc', 'RfnyE', 'RfLQt', 'toModule', 'Instance', 'EktYq', 'Table', 'LcnzP', 'set', 'get', 'table', 'addType', 'gszDg', '1369827eWuyBb', '1652753nMKTCA', '769572qqxduv', '1ChPyUN', '1186tTUQWi', '769vCWItF', '1369194iVoeot', '1SiJtXz', '1666101sushcH', '814242VRrTZm', 'test/mjsunit/wasm/wasm-module-builder.js', 'import_module', 'other_module_fn', 'load', 'store', 'addImport', 'owoHy', 'IjVhi', 'FpCvl', 'addMemory', 'addFunction', 'npKRM', 'addBody', 'exportFunc', 'ISDog', '20|16|27|6|19|10|0|9|3|11|15|1|25|22|4|7|12|21|5|8|26|24|14|18|23|13|17|2', 'aGRtk', 'split', 'zFYnz', 'XLoyY', 'EKyUM', 'QqJIy', 'lambY', 'saEze', 'vmnfK', 'oEUXb', 'DJhuw', 'DwOpB', 'Wtlpc', 'Mjzpw', 'mod', 'zYGLi', 'aTilf', 'instantiate'];

function _0x1e9c(_0x1e2d53, _0x44e03f) {
    return _0x1e9c = function (_0x157ef6, _0x4b75d9) {
        _0x157ef6 = _0x157ef6 - 299;
        const _0x28ba06 = _0x1c38[_0x157ef6];

        return _0x28ba06;
    }, _0x1e9c(_0x1e2d53, _0x44e03f);
}
const _0xc9ccb0 = _0x1e9c;

(function (_0x3581ca, _0x542bf2) {
    const _0x1bb78e = _0x1e9c;

    while (true) {
        try {
            const _0x4d4be8 = -parseInt(_0x1bb78e(0x12b)) + -parseInt(_0x1bb78e(0x12c)) + parseInt(_0x1bb78e(0x12d)) * parseInt(_0x1bb78e(0x12e)) + -parseInt(_0x1bb78e(0x12f)) * -parseInt(_0x1bb78e(0x130)) + parseInt(_0x1bb78e(0x131)) + -parseInt(_0x1bb78e(0x132)) * -parseInt(_0x1bb78e(0x133)) + -parseInt(_0x1bb78e(0x134));

            if (_0x4d4be8 === _0x542bf2) break;else _0x3581ca.push(_0x3581ca.shift());
        } catch (_0x49f489) {
            _0x3581ca.push(_0x3581ca.shift());
        }
    }
})(_0x1c38, 880079), load(_0xc9ccb0(0x135));
const initialMemoryPages = 1;
const maximumMemoryPages = 5;
const other_fn_idx = 0;

function generateBuilder(_0x52994c, _0x249b59) {
    const _0x3ae8f9 = _0xc9ccb0;
    const _0x1bbad4 = {
        'owoHy': _0x3ae8f9(0x136),
        'IjVhi': _0x3ae8f9(0x137),
        'FpCvl': function (_0x22ab64, _0xc61d6b, _0xc48b83) {
            return _0x22ab64(_0xc61d6b, _0xc48b83);
        },
        'npKRM': _0x3ae8f9(0x138),
        'ISDog': _0x3ae8f9(0x139)
    };

    const _0x4478a6 = new WasmModuleBuilder();

    if (_0x249b59) {
        const _0x59dc2a = _0x4478a6[_0x3ae8f9(0x13a)](_0x1bbad4[_0x3ae8f9(0x13b)], _0x1bbad4[_0x3ae8f9(0x13c)], _0x249b59);

        _0x1bbad4[_0x3ae8f9(0x13d)](assertEquals, _0x59dc2a, other_fn_idx);
    }
    return _0x52994c && (_0x4478a6[_0x3ae8f9(0x13e)](initialMemoryPages, maximumMemoryPages, true), _0x4478a6[_0x3ae8f9(0x13f)](_0x1bbad4[_0x3ae8f9(0x140)], kSig_i_i)[_0x3ae8f9(0x141)]([kExprLocalGet, 0, kExprI32LoadMem, 0, 0])[_0x3ae8f9(0x142)](), _0x4478a6[_0x3ae8f9(0x13f)](_0x1bbad4[_0x3ae8f9(0x143)], kSig_i_ii)[_0x3ae8f9(0x141)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0, kExprLocalGet, 1])[_0x3ae8f9(0x142)]()), _0x4478a6;
}
function assertMemoryIndependence(_0x1d87c0, _0x4fceb3, _0x19cd6c, _0x51ea9e) {
    const _0x4cc045 = _0xc9ccb0;
    const _0x57be6c = {
        'aGRtk': _0x4cc045(0x144),
        'KRgYQ': function (_0x4b90b5, _0x24b1c9, _0x5b43ee) {
            return _0x4b90b5(_0x24b1c9, _0x5b43ee);
        },
        'zFYnz': function (_0x596c92, _0x15a0e2) {
            return _0x596c92(_0x15a0e2);
        },
        'XLoyY': function (_0x132a66, _0x2ab81e, _0x3ab90a) {
            return _0x132a66(_0x2ab81e, _0x3ab90a);
        },
        'EKyUM': function (_0x356cda, _0x31ccf8) {
            return _0x356cda(_0x31ccf8);
        },
        'VCrpb': function (_0x175383, _0x5ed138) {
            return _0x175383(_0x5ed138);
        },
        'QqJIy': function (_0x4cbabf, _0x496e83) {
            return _0x4cbabf(_0x496e83);
        },
        'lambY': function (_0x2b9f40, _0x2b0168) {
            return _0x2b9f40(_0x2b0168);
        },
        'saEze': function (_0x2fbe15, _0x150dbc, _0x17a4d2) {
            return _0x2fbe15(_0x150dbc, _0x17a4d2);
        },
        'vmnfK': function (_0x3eac0d, _0x4b86a0, _0x223ce1) {
            return _0x3eac0d(_0x4b86a0, _0x223ce1);
        },
        'oEUXb': function (_0x72bdd5, _0x16053b, _0x511260) {
            return _0x72bdd5(_0x16053b, _0x511260);
        },
        'DJhuw': function (_0x53af65, _0x216ede, _0xd29c92) {
            return _0x53af65(_0x216ede, _0xd29c92);
        },
        'DwOpB': function (_0x426953, _0x43d444, _0x53c956) {
            return _0x426953(_0x43d444, _0x53c956);
        },
        'Wtlpc': function (_0x51871c, _0x3fae0c) {
            return _0x51871c(_0x3fae0c);
        },
        'Mjzpw': function (_0x35d2fe, _0x39eb4b, _0x5f0da5) {
            return _0x35d2fe(_0x39eb4b, _0x5f0da5);
        }
    };

    const _0x5bee75 = _0x57be6c[_0x4cc045(0x145)][_0x4cc045(0x146)]('|');

    var _0x13304e = 0;

    while (true) {
        switch (_0x5bee75[_0x13304e++]) {
            case '0':
                _0x57be6c.KRgYQ(assertEquals, 0, _0x57be6c[_0x4cc045(0x147)](_0x19cd6c, 0));
                continue;
            case '1':
                _0x57be6c[_0x4cc045(0x148)](assertEquals, 0, _0x19cd6c(0));
                continue;
            case '2':
                _0x57be6c[_0x4cc045(0x148)](_0x51ea9e, 4, 0);
                continue;
            case '3':
                assertEquals(0, _0x57be6c[_0x4cc045(0x149)](_0x19cd6c, 4));
                continue;
            case '4':
                _0x51ea9e(0, 103);
                continue;
            case '5':
                _0x57be6c[_0x4cc045(0x148)](assertEquals, 0, _0x57be6c[_0x4cc045(0x149)](_0x19cd6c, 4));
                continue;
            case '6':
                _0x57be6c[_0x4cc045(0x148)](assertEquals, 0, _0x57be6c.VCrpb(_0x19cd6c, 4));
                continue;
            case '7':
                _0x57be6c[_0x4cc045(0x148)](assertEquals, 101, _0x57be6c[_0x4cc045(0x14a)](_0x1d87c0, 0));
                continue;
            case '8':
                _0x57be6c[_0x4cc045(0x148)](_0x51ea9e, 4, 107);
                continue;
            case '9':
                assertEquals(0, _0x57be6c[_0x4cc045(0x14b)](_0x1d87c0, 4));
                continue;
            case '10':
                _0x57be6c[_0x4cc045(0x14c)](assertEquals, 101, _0x1d87c0(0));
                continue;
            case '11':
                _0x4fceb3(4, 102);
                continue;
            case '12':
                _0x57be6c[_0x4cc045(0x14d)](assertEquals, 103, _0x57be6c[_0x4cc045(0x14b)](_0x19cd6c, 0));
                continue;
            case '13':
                _0x57be6c[_0x4cc045(0x14e)](_0x4fceb3, 4, 0);
                continue;
            case '14':
                assertEquals(102, _0x57be6c[_0x4cc045(0x14b)](_0x1d87c0, 4));
                continue;
            case '15':
                _0x57be6c[_0x4cc045(0x14f)](assertEquals, 101, _0x57be6c.lambY(_0x1d87c0, 0));
                continue;
            case '16':
                _0x57be6c[_0x4cc045(0x14f)](assertEquals, 0, _0x19cd6c(0));
                continue;
            case '17':
                _0x57be6c[_0x4cc045(0x14f)](_0x51ea9e, 0, 0);
                continue;
            case '18':
                assertEquals(107, _0x19cd6c(4));
                continue;
            case '19':
                _0x57be6c[_0x4cc045(0x150)](_0x4fceb3, 0, 101);
                continue;
            case '20':
                assertEquals(0, _0x57be6c[_0x4cc045(0x14b)](_0x1d87c0, 0));
                continue;
            case '21':
                _0x57be6c[_0x4cc045(0x150)](assertEquals, 102, _0x57be6c[_0x4cc045(0x151)](_0x1d87c0, 4));
                continue;
            case '22':
                _0x57be6c[_0x4cc045(0x152)](assertEquals, 0, _0x57be6c[_0x4cc045(0x151)](_0x19cd6c, 4));
                continue;
            case '23':
                _0x57be6c[_0x4cc045(0x152)](_0x4fceb3, 0, 0);
                continue;
            case '24':
                _0x57be6c[_0x4cc045(0x152)](assertEquals, 103, _0x19cd6c(0));
                continue;
            case '25':
                _0x57be6c[_0x4cc045(0x152)](assertEquals, 102, _0x1d87c0(4));
                continue;
            case '26':
                _0x57be6c[_0x4cc045(0x152)](assertEquals, 101, _0x57be6c.Wtlpc(_0x1d87c0, 0));
                continue;
            case '27':
                assertEquals(0, _0x57be6c[_0x4cc045(0x151)](_0x1d87c0, 4));
                continue;
        }
        break;
    }
}
(function SimpleMemoryIndependenceTest() {
    const _0x474d5f = _0xc9ccb0;
    const _0xeafc9 = {
        'zYGLi': _0x474d5f(0x139),
        'aTilf': 'load',
        'LohBZ': _0x474d5f(0x153),
        'jGYtW': function (_0x3a4cb4, _0x205767, _0x61839e) {
            return _0x3a4cb4(_0x205767, _0x61839e);
        },
        'ksBTI': function (_0x1bc65b, _0xfc0f04, _0x6fda30) {
            return _0x1bc65b(_0xfc0f04, _0x6fda30);
        },
        'JPPFg': function (_0x57d255, _0x2713c1, _0x1547b9) {
            return _0x57d255(_0x2713c1, _0x1547b9);
        },
        'arDeh': function (_0x365d81, _0x495e6a, _0x295007) {
            return _0x365d81(_0x495e6a, _0x295007);
        },
        'eKzwf': function (_0x323f45, _0x5295bd, _0x34ce55) {
            return _0x323f45(_0x5295bd, _0x34ce55);
        },
        'joUoy': function (_0x148bf7, _0x1b60dc, _0x33f4fc) {
            return _0x148bf7(_0x1b60dc, _0x33f4fc);
        },
        'ptHOB': function (_0x90282a, _0x5a495b, _0x20201b) {
            return _0x90282a(_0x5a495b, _0x20201b);
        }
    };

    print('SimpleMemoryIndependenceTest');
    const _0x5edb9e = 1;

    var _0x187d9f = new WasmModuleBuilder();

    _0x187d9f[_0x474d5f(0x13e)](_0x5edb9e, _0x5edb9e, true), _0x187d9f[_0x474d5f(0x13f)](_0xeafc9[_0x474d5f(0x154)], kSig_v_ii)[_0x474d5f(0x141)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0])[_0x474d5f(0x142)](), _0x187d9f[_0x474d5f(0x13f)](_0xeafc9[_0x474d5f(0x155)], kSig_i_i)[_0x474d5f(0x141)]([kExprLocalGet, 0, kExprI32LoadMem, 0, 0])[_0x474d5f(0x142)]();

    const _0x124091 = _0x187d9f[_0x474d5f(0x156)]();

    _0x187d9f = new WasmModuleBuilder(), _0x187d9f[_0x474d5f(0x13a)](_0xeafc9.LohBZ, _0xeafc9.zYGLi, kSig_v_ii), _0x187d9f.addMemory(_0x5edb9e, _0x5edb9e, true), _0x187d9f.addFunction(_0xeafc9[_0x474d5f(0x154)], kSig_v_ii)[_0x474d5f(0x141)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprCallFunction, 0])[_0x474d5f(0x142)](), _0x187d9f.addFunction(_0xeafc9[_0x474d5f(0x155)], kSig_i_i).addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0])[_0x474d5f(0x142)]();

    const _0x5595e9 = _0x187d9f[_0x474d5f(0x156)]({ 'mod': { 'store': _0x124091[_0x474d5f(0x157)].store } });

    _0xeafc9.jGYtW(assertEquals, 0, _0x124091[_0x474d5f(0x157)].load(0)), _0xeafc9[_0x474d5f(0x158)](assertEquals, 0, _0x5595e9[_0x474d5f(0x157)][_0x474d5f(0x138)](0)), _0xeafc9[_0x474d5f(0x159)](assertEquals, 0, _0x124091.exports.load(4)), _0xeafc9[_0x474d5f(0x15a)](assertEquals, 0, _0x5595e9[_0x474d5f(0x157)][_0x474d5f(0x138)](4)), _0x124091.exports[_0x474d5f(0x139)](0, 101), assertEquals(101, _0x124091[_0x474d5f(0x157)][_0x474d5f(0x138)](0)), _0xeafc9[_0x474d5f(0x15b)](assertEquals, 0, _0x5595e9.exports[_0x474d5f(0x138)](0)), _0xeafc9.eKzwf(assertEquals, 0, _0x124091.exports[_0x474d5f(0x138)](4)), _0xeafc9[_0x474d5f(0x15b)](assertEquals, 0, _0x5595e9.exports[_0x474d5f(0x138)](4)), _0x124091[_0x474d5f(0x157)][_0x474d5f(0x139)](4, 102), _0xeafc9.eKzwf(assertEquals, 101, _0x124091[_0x474d5f(0x157)][_0x474d5f(0x138)](0)), assertEquals(0, _0x5595e9[_0x474d5f(0x157)][_0x474d5f(0x138)](0)), assertEquals(102, _0x124091.exports[_0x474d5f(0x138)](4)), assertEquals(0, _0x5595e9[_0x474d5f(0x157)][_0x474d5f(0x138)](4)), _0x5595e9[_0x474d5f(0x157)].store(4, 107), _0xeafc9.joUoy(assertEquals, 101, _0x124091[_0x474d5f(0x157)].load(0)), assertEquals(0, _0x5595e9.exports[_0x474d5f(0x138)](0)), _0xeafc9[_0x474d5f(0x15c)](assertEquals, 107, _0x124091[_0x474d5f(0x157)].load(4)), _0xeafc9[_0x474d5f(0x15c)](assertEquals, 0, _0x5595e9[_0x474d5f(0x157)].load(4));
})(), function TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory() {
    const _0x1f94ce = _0xc9ccb0;
    const _0x44299e = {
        'NVFpl': function (_0x501316, _0x1c85b9) {
            return _0x501316(_0x1c85b9);
        },
        'APpMk': 'TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory',
        'kTtxj': 'plus_one',
        'haNdV': function (_0x21f87d, _0x473859, _0x3d4326) {
            return _0x21f87d(_0x473859, _0x3d4326);
        },
        'CsUmT': function (_0xdee25d, _0x22fa70) {
            return _0xdee25d - _0x22fa70;
        },
        'sYaeX': function (_0x3e72ff, _0x119c68, _0x452b3b) {
            return _0x3e72ff(_0x119c68, _0x452b3b);
        },
        'yVUrg': function (_0x291597, _0x19c347) {
            return _0x291597 + _0x19c347;
        }
    };

    _0x44299e[_0x1f94ce(0x15d)](print, _0x44299e.APpMk);

    const _0x131d41 = generateBuilder(add_memory = false, import_sig = kSig_i_i);

    _0x131d41.addFunction(_0x44299e[_0x1f94ce(0x15e)], kSig_i_i).addBody([kExprLocalGet, 0, kExprCallFunction, other_fn_idx, kExprI32Const, 1, kExprI32Add, kExprReturn])[_0x1f94ce(0x142)]();

    const _0x154119 = _0x44299e[_0x1f94ce(0x15f)](generateBuilder, add_memory = true, import_sig = undefined);

    const _0x4a634b = _0x44299e[_0x1f94ce(0x160)](kPageSize, 4);

    const _0x846321 = 2222;

    const _0x583478 = _0x154119[_0x1f94ce(0x156)]();

    const _0x79b0ab = _0x131d41[_0x1f94ce(0x156)]({ 'import_module': { 'other_module_fn': _0x583478[_0x1f94ce(0x157)][_0x1f94ce(0x138)] } });

    _0x583478[_0x1f94ce(0x157)][_0x1f94ce(0x139)](_0x4a634b, _0x846321), _0x44299e[_0x1f94ce(0x161)](assertEquals, _0x846321, _0x583478[_0x1f94ce(0x157)][_0x1f94ce(0x138)](_0x4a634b)), _0x44299e[_0x1f94ce(0x161)](assertEquals, _0x44299e[_0x1f94ce(0x162)](_0x846321, 1), _0x79b0ab[_0x1f94ce(0x157)].plus_one(_0x4a634b));
}(), function TestExternalCallBetweenTwoWasmModulesWithMemory() {
    const _0x555105 = _0xc9ccb0;
    const _0x3536fc = {
        'qDWUG': function (_0x25684a, _0x5caac1) {
            return _0x25684a(_0x5caac1);
        },
        'bnTic': function (_0x1852f9, _0x3427ea, _0x1e717b) {
            return _0x1852f9(_0x3427ea, _0x1e717b);
        },
        'kBkvJ': _0x555105(0x163),
        'MUGGd': function (_0x16d80e, _0x2b1b67, _0x3a1f2a) {
            return _0x16d80e(_0x2b1b67, _0x3a1f2a);
        },
        'mDICY': function (_0x5c5b3d, _0x795f5) {
            return _0x5c5b3d - _0x795f5;
        },
        'iPKua': function (_0x3e9374, _0x4caeed, _0x91bc51) {
            return _0x3e9374(_0x4caeed, _0x91bc51);
        },
        'WQaTJ': function (_0x3d61b4, _0x3830bc, _0x2f0c02) {
            return _0x3d61b4(_0x3830bc, _0x2f0c02);
        },
        'ZGfUG': function (_0x335c7a, _0x2b6191) {
            return _0x335c7a + _0x2b6191;
        }
    };

    _0x3536fc[_0x555105(0x164)](print, _0x555105(0x165));

    const _0x2cc700 = _0x3536fc[_0x555105(0x166)](generateBuilder, add_memory = true, import_sig = kSig_i_i);

    _0x2cc700[_0x555105(0x13f)](_0x3536fc[_0x555105(0x167)], kSig_i_i).addBody([kExprLocalGet, 0, kExprCallFunction, other_fn_idx, kExprI32Const, 1, kExprI32Add, kExprReturn]).exportFunc();

    const _0x3f8b64 = _0x3536fc[_0x555105(0x168)](generateBuilder, add_memory = true, import_sig = undefined);

    const _0x1cbe19 = _0x3536fc[_0x555105(0x169)](kPageSize, 4);

    const _0x209352 = 1111;
    const _0x6aad5c = 2222;

    const _0x449259 = _0x3f8b64[_0x555105(0x156)]();

    const _0x4c7da1 = _0x2cc700[_0x555105(0x156)]({ 'import_module': { 'other_module_fn': _0x449259[_0x555105(0x157)][_0x555105(0x138)] } });

    _0x4c7da1[_0x555105(0x157)][_0x555105(0x139)](_0x1cbe19, _0x209352), _0x449259[_0x555105(0x157)][_0x555105(0x139)](_0x1cbe19, _0x6aad5c), _0x3536fc[_0x555105(0x16a)](assertEquals, _0x209352, _0x4c7da1[_0x555105(0x157)][_0x555105(0x138)](_0x1cbe19)), _0x3536fc.iPKua(assertEquals, _0x6aad5c, _0x449259[_0x555105(0x157)].load(_0x1cbe19)), _0x3536fc[_0x555105(0x16b)](assertEquals, _0x3536fc[_0x555105(0x16c)](_0x6aad5c, 1), _0x4c7da1[_0x555105(0x157)][_0x555105(0x163)](_0x1cbe19));
}(), function TestCorrectMemoryAccessedAfterReturningFromExternalCall() {
    const _0x502f95 = _0xc9ccb0;
    const _0x17ee68 = {
        'rzXNn': _0x502f95(0x16d),
        'SojZF': function (_0x4edb5c, _0xa2ac63, _0x4a8e7a) {
            return _0x4edb5c(_0xa2ac63, _0x4a8e7a);
        },
        'MjQez': _0x502f95(0x16e)
    };

    print(_0x17ee68[_0x502f95(0x16f)]);

    const _0x1a01e4 = _0x17ee68[_0x502f95(0x170)](generateBuilder, add_memory = true, import_sig = kSig_i_ii);

    _0x1a01e4.addFunction(_0x17ee68[_0x502f95(0x171)], kSig_i_iii)[_0x502f95(0x141)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0, kExprLocalGet, 0, kExprLocalGet, 2, kExprCallFunction, other_fn_idx, kExprDrop, kExprLocalGet, 0, kExprI32LoadMem, 0, 0, kExprReturn])[_0x502f95(0x142)]();

    const _0x3673cf = generateBuilder(add_memory = true, import_sig = undefined);

    const _0x5bf993 = kPageSize - 4;

    const _0x2290d8 = 1111;
    const _0x53cf4c = 2222;

    const _0x4760ad = _0x3673cf.instantiate();

    const _0x2d070 = _0x1a01e4[_0x502f95(0x156)]({ 'import_module': { 'other_module_fn': _0x4760ad[_0x502f95(0x157)][_0x502f95(0x139)] } });

    _0x17ee68[_0x502f95(0x170)](assertEquals, _0x2290d8, _0x2d070[_0x502f95(0x157)][_0x502f95(0x16e)](_0x5bf993, _0x2290d8, _0x53cf4c)), _0x17ee68[_0x502f95(0x170)](assertEquals, _0x2290d8, _0x2d070[_0x502f95(0x157)][_0x502f95(0x138)](_0x5bf993)), _0x17ee68[_0x502f95(0x170)](assertEquals, _0x53cf4c, _0x4760ad[_0x502f95(0x157)].load(_0x5bf993));
}(), function CallThroughTableMemoryIndependenceTest() {
    const _0x21b262 = _0xc9ccb0;
    const _0x1296f9 = {
        'vTkGA': function (_0x80e315, _0x248a1e) {
            return _0x80e315(_0x248a1e);
        },
        'RfnyE': _0x21b262(0x172),
        'RfLQt': 'store',
        'EktYq': function (_0x45b945, _0x4e58c9, _0x574c53, _0x5afd05, _0x1a91b0) {
            return _0x45b945(_0x4e58c9, _0x574c53, _0x5afd05, _0x1a91b0);
        },
        'LcnzP': _0x21b262(0x173),
        'gszDg': function (_0x4183d1, _0x398c41, _0x478397, _0x39578c, _0x20e947) {
            return _0x4183d1(_0x398c41, _0x478397, _0x39578c, _0x20e947);
        }
    };

    _0x1296f9.vTkGA(print, _0x1296f9[_0x21b262(0x174)]);
    const _0x54b6c2 = 2;
    const _0x296e76 = 1;

    var _0x11a4f2 = new WasmModuleBuilder();

    _0x11a4f2.addMemory(_0x296e76, _0x296e76, true), _0x11a4f2[_0x21b262(0x13f)](_0x1296f9[_0x21b262(0x175)], kSig_v_ii)[_0x21b262(0x141)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0]).exportFunc(), _0x11a4f2[_0x21b262(0x13f)]('load', kSig_i_i)[_0x21b262(0x141)]([kExprLocalGet, 0, kExprI32LoadMem, 0, 0])[_0x21b262(0x142)]();
    {
        const _0x463df1 = _0x11a4f2[_0x21b262(0x176)]();

        const _0x4352b9 = new WebAssembly[_0x21b262(0x177)](_0x463df1);

        const _0x47ab92 = new WebAssembly[_0x21b262(0x177)](_0x463df1);

        _0x1296f9[_0x21b262(0x178)](assertMemoryIndependence, _0x4352b9[_0x21b262(0x157)].load, _0x4352b9[_0x21b262(0x157)][_0x21b262(0x139)], _0x47ab92[_0x21b262(0x157)].load, _0x47ab92[_0x21b262(0x157)][_0x21b262(0x139)]);
    }

    const _0x16da66 = new WebAssembly[_0x21b262(0x179)]({
        'element': _0x1296f9[_0x21b262(0x17a)],
        'initial': _0x54b6c2,
        'maximum': _0x54b6c2
    });

    _0x16da66.set(0, _0x4352b9[_0x21b262(0x157)].store), _0x16da66[_0x21b262(0x17b)](1, _0x47ab92[_0x21b262(0x157)][_0x21b262(0x139)]), _0x1296f9.gszDg(assertMemoryIndependence, _0x4352b9.exports.load, _0x16da66[_0x21b262(0x17c)](0), _0x47ab92[_0x21b262(0x157)].load, _0x16da66[_0x21b262(0x17c)](1)), _0x16da66[_0x21b262(0x17b)](1, _0x4352b9[_0x21b262(0x157)].store), _0x16da66.set(0, _0x47ab92[_0x21b262(0x157)][_0x21b262(0x139)]), assertMemoryIndependence(_0x4352b9.exports[_0x21b262(0x138)], _0x16da66[_0x21b262(0x17c)](1), _0x47ab92.exports[_0x21b262(0x138)], _0x16da66[_0x21b262(0x17c)](0)), _0x11a4f2 = new WasmModuleBuilder(), _0x11a4f2.addImportedTable('m', _0x21b262(0x17d), _0x54b6c2, _0x54b6c2);

    const _0x28e423 = _0x11a4f2[_0x21b262(0x17e)](kSig_v_ii);

    _0x11a4f2[_0x21b262(0x13f)](_0x1296f9.RfLQt, kSig_v_iii)[_0x21b262(0x141)]([kExprLocalGet, 1, kExprLocalGet, 2, kExprLocalGet, 0, kExprCallIndirect, _0x11a4f2[_0x21b262(0x17e)](kSig_v_ii), kTableZero])[_0x21b262(0x142)]();

    const _0xbbc0b = _0x11a4f2[_0x21b262(0x156)]({ 'm': { 'table': _0x16da66 } });

    var _0x2a5724 = 1;
    var _0x471a6b = 0;

    const _0x2e0169 = (_0x4b7e00, _0x17910d) => _0xbbc0b[_0x21b262(0x157)][_0x21b262(0x139)](_0x2a5724, _0x4b7e00, _0x17910d);

    const _0x5c48e6 = (_0x131500, _0x47bbd9) => _0xbbc0b[_0x21b262(0x157)][_0x21b262(0x139)](_0x471a6b, _0x131500, _0x47bbd9);

    _0x1296f9.gszDg(assertMemoryIndependence, _0x4352b9[_0x21b262(0x157)][_0x21b262(0x138)], _0x2e0169, _0x47ab92.exports[_0x21b262(0x138)], _0x5c48e6), _0x16da66[_0x21b262(0x17b)](0, _0x4352b9[_0x21b262(0x157)][_0x21b262(0x139)]), _0x16da66[_0x21b262(0x17b)](1, _0x47ab92[_0x21b262(0x157)].store), _0x2a5724 = 0, _0x471a6b = 1, _0x1296f9[_0x21b262(0x17f)](assertMemoryIndependence, _0x4352b9[_0x21b262(0x157)][_0x21b262(0x138)], _0x2e0169, _0x47ab92.exports[_0x21b262(0x138)], _0x5c48e6);
}();
