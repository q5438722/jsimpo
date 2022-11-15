const _0x3a7f = ['8467mOnVIO', '23GhGNeK', 'test/mjsunit/wasm/wasm-module-builder.js', '3|1|2|4|0', 'QrApw', 'qFVDD', 'buffer', 'kJpiL', 'Memory', 'VCors', 'SdFQc', '__proto__', 'TestConstructorWithShared', 'ArKxS', 'EbKOR', 'cRJfb', 'RkMMZ', 'TestConstructorWithUndefinedMaxShared', 'oPNoH', 'TestCompileWithUndefinedShared', 'shared', 'ENxWN', 'addImportedMemory', 'ehrbt', 'Module', 'CompileError', 'TestCompileAtomicOpUndefinedShared', 'fqoeB', 'kIAuE', 'ocEtu', 'addBody', 'imported_mem', 'toBuffer', 'TestInstantiateWithUndefinedShared', 'oQnUc', 'UlupS', 'ffIMs', 'HDOMY', 'Instance', 'TestInstantiateWithImportNotSharedDefined', 'nJolV', 'gkMYm', 'znavl', 'TestInstantiateWithSharedDefined', 'GFXBw', 'hlWzj', 'addMemory', 'DugUK', 'cuVBb', 'exports', 'main', 'vxgeY', 'TestAtomicOpWithSharedMemoryDefined', 'MqtWv', 'HaFLj', 'exportFunc', 'xWbnu', 'vWqYC', 'callee', '75775ZjQWOb', '1OKdZqt', '62039gerylu', '1Sbyyve', '95649rPOvKc', '3zSqXjM', '45865XBhRYK', '828IyfSYm', '29raiXCk', '2162YWnBzi', '7YFkddO'];

function _0x4a95(_0x4d307c, _0x3f0030) {
    return _0x4a95 = function (_0x3f1a71, _0x225779) {
        _0x3f1a71 = _0x3f1a71 - 325;
        const _0x41855e = _0x3a7f[_0x3f1a71];

        return _0x41855e;
    }, _0x4a95(_0x4d307c, _0x3f0030);
}
const _0x253a54 = _0x4a95;

(function (_0x1b168c, _0x9e9878) {
    const _0x188598 = _0x4a95;

    while (true) {
        try {
            const _0x5bc950 = -parseInt(_0x188598(0x145)) + parseInt(_0x188598(0x146)) * -parseInt(_0x188598(0x147)) + -parseInt(_0x188598(0x148)) * parseInt(_0x188598(0x149)) + parseInt(_0x188598(0x14a)) * parseInt(_0x188598(0x14b)) + parseInt(_0x188598(0x14c)) * parseInt(_0x188598(0x14d)) + parseInt(_0x188598(0x14e)) * -parseInt(_0x188598(0x14f)) + -parseInt(_0x188598(0x150)) * -parseInt(_0x188598(0x151));

            if (_0x5bc950 === _0x9e9878) break;else _0x1b168c.push(_0x1b168c.shift());
        } catch (_0x3c20ce) {
            _0x1b168c.push(_0x1b168c.shift());
        }
    }
})(_0x3a7f, 107751), load(_0x253a54(0x152));
function assertMemoryIsValid(_0x379699, _0x56e9) {
    const _0x2487f4 = _0x253a54;
    const _0x2fad5b = {
        'QrApw': _0x2487f4(0x153),
        'qFVDD': function (_0x359845, _0x1f4346) {
            return _0x359845(_0x1f4346);
        },
        'kJpiL': function (_0x1cfcf4, _0x9486a2, _0x5e95b1) {
            return _0x1cfcf4(_0x9486a2, _0x5e95b1);
        },
        'VCors': function (_0x2e4760, _0x5b1166) {
            return _0x2e4760 instanceof _0x5b1166;
        },
        'SdFQc': function (_0x111916, _0x38d897, _0x43c69b) {
            return _0x111916(_0x38d897, _0x43c69b);
        }
    };

    const _0x117340 = _0x2fad5b[_0x2487f4(0x154)].split('|');

    var _0x791624 = 0;

    while (true) {
        switch (_0x117340[_0x791624++]) {
            case '0':
                _0x56e9 && (_0x2fad5b[_0x2487f4(0x155)](assertTrue, _0x379699.buffer instanceof SharedArrayBuffer), assertTrue(Object.isFrozen(_0x379699[_0x2487f4(0x156)])));
                continue;
            case '1':
                _0x2fad5b[_0x2487f4(0x157)](assertSame, WebAssembly[_0x2487f4(0x158)], _0x379699.constructor);
                continue;
            case '2':
                assertTrue(_0x2fad5b[_0x2487f4(0x159)](_0x379699, Object));
                continue;
            case '3':
                _0x2fad5b[_0x2487f4(0x15a)](assertSame, WebAssembly[_0x2487f4(0x158)].prototype, _0x379699[_0x2487f4(0x15b)]);
                continue;
            case '4':
                _0x2fad5b[_0x2487f4(0x155)](assertTrue, _0x379699 instanceof WebAssembly[_0x2487f4(0x158)]);
                continue;
        }
        break;
    }
}
(function TestConstructorWithShared() {
    const _0x4e0165 = _0x253a54;
    const _0x1692e9 = { 'ArKxS': _0x4e0165(0x15c) };

    print(_0x1692e9[_0x4e0165(0x15d)]);

    const _0x518d85 = new WebAssembly[_0x4e0165(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': true
    });

    var _0x2487f4 = _0x253a54;
    var _0x2fad5b = { 'QrApw': _0x2487f4(0x153), 'qFVDD': function (_0x359845, _0x1f4346) {
            return _0x359845(_0x1f4346);
        }, 'kJpiL': function (_0x1cfcf4, _0x9486a2, _0x5e95b1) {
            return _0x1cfcf4(_0x9486a2, _0x5e95b1);
        }, 'VCors': function (_0x2e4760, _0x5b1166) {
            return _0x2e4760 instanceof _0x5b1166;
        },
        'SdFQc': function (_0x111916, _0x38d897, _0x43c69b) {
            return _0x111916(_0x38d897, _0x43c69b);
        } };

    var _0x117340 = _0x2fad5b[_0x2487f4(0x154)].split('|');

    var _0x791624 = 0;
    while (true) {
        switch (_0x117340[_0x791624++]) {case '0':
                true && (_0x2fad5b[_0x2487f4(0x155)](assertTrue, _0x518d85.buffer instanceof SharedArrayBuffer), assertTrue(Object.isFrozen(_0x518d85[_0x2487f4(0x156)])));continue;case '1':
                _0x2fad5b[_0x2487f4(0x157)](assertSame, WebAssembly[_0x2487f4(0x158)], _0x518d85.constructor);continue;
            case '2':
                assertTrue(_0x2fad5b[_0x2487f4(0x159)](_0x518d85, Object));continue;case '3':
                _0x2fad5b[_0x2487f4(0x15a)](assertSame, WebAssembly[_0x2487f4(0x158)].prototype, _0x518d85[_0x2487f4(0x15b)]);continue;case '4':
                _0x2fad5b[_0x2487f4(0x155)](assertTrue, _0x518d85 instanceof WebAssembly[_0x2487f4(0x158)]);continue;}break;
    }
})(), function TestConstructorWithUndefinedShared() {
    const _0x38455a = _0x253a54;
    const _0x52d653 = {
        'EbKOR': function (_0x1b6a0c, _0x1fd1c4) {
            return _0x1b6a0c(_0x1fd1c4);
        },
        'cRJfb': 'TestConstructorWithUndefinedShared'
    };

    _0x52d653[_0x38455a(0x15e)](print, _0x52d653[_0x38455a(0x15f)]);

    const _0xdd68e6 = new WebAssembly[_0x38455a(0x158)]({
        'initial': 0x0,
        'maximum': undefined,
        'shared': undefined
    });

    var _0x2487f4 = _0x253a54;
    var _0x2fad5b = { 'QrApw': _0x2487f4(0x153), 'qFVDD': function (_0x359845, _0x1f4346) {
            return _0x359845(_0x1f4346);
        }, 'kJpiL': function (_0x1cfcf4, _0x9486a2, _0x5e95b1) {
            return _0x1cfcf4(_0x9486a2, _0x5e95b1);
        }, 'VCors': function (_0x2e4760, _0x5b1166) {
            return _0x2e4760 instanceof _0x5b1166;
        }, 'SdFQc': function (_0x111916, _0x38d897, _0x43c69b) {
            return _0x111916(_0x38d897, _0x43c69b);
        } };

    var _0x117340 = _0x2fad5b[_0x2487f4(0x154)].split('|');

    var _0x791624 = 0;
    while (true) {
        switch (_0x117340[_0x791624++]) {case '0':
                undefined && (_0x2fad5b[_0x2487f4(0x155)](assertTrue, _0xdd68e6.buffer instanceof SharedArrayBuffer), assertTrue(Object.isFrozen(_0xdd68e6[_0x2487f4(0x156)])));continue;case '1':
                _0x2fad5b[_0x2487f4(0x157)](assertSame, WebAssembly[_0x2487f4(0x158)], _0xdd68e6.constructor);continue;case '2':
                assertTrue(_0x2fad5b[_0x2487f4(0x159)](_0xdd68e6, Object));continue;case '3':
                _0x2fad5b[_0x2487f4(0x15a)](assertSame, WebAssembly[_0x2487f4(0x158)].prototype, _0xdd68e6[_0x2487f4(0x15b)]);continue;case '4':
                _0x2fad5b[_0x2487f4(0x155)](assertTrue, _0xdd68e6 instanceof WebAssembly[_0x2487f4(0x158)]);continue;}break;
    }
}(), function TestConstructorWithNumericShared() {
    const _0x1b43aa = _0x253a54;
    const _0x39a743 = {
        'lmscS': function (_0xd5348, _0x4dea62) {
            return _0xd5348(_0x4dea62);
        },
        'pGxNV': function (_0x2a1748, _0x32c546, _0x3e8017) {
            return _0x2a1748(_0x32c546, _0x3e8017);
        }
    };

    _0x39a743.lmscS(print, 'TestConstructorWithNumericShared');

    const _0xcffc92 = new WebAssembly[_0x1b43aa(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': 0x2005e9
    });

    _0x39a743.pGxNV(assertMemoryIsValid, _0xcffc92, true);
}(), function TestConstructorWithEmptyStringShared() {
    const _0xc1c663 = _0x253a54;
    const _0x15e706 = {
        'RkMMZ': function (_0x5d2cab, _0x3c783d) {
            return _0x5d2cab(_0x3c783d);
        }
    };

    _0x15e706.RkMMZ(print, 'TestConstructorWithEmptyStringShared');

    const _0x3014c5 = new WebAssembly.Memory({
        'initial': 0x0,
        'maximum': undefined,
        'shared': ''
    });

    _0x15e706[_0xc1c663(0x160)](assertMemoryIsValid, _0x3014c5);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0x2b6bdf = _0x253a54;
    const _0x5a4eb0 = {
        'aisYz': function (_0x1d1564, _0x910b03) {
            return _0x1d1564(_0x910b03);
        },
        'pDrbC': _0x2b6bdf(0x161),
        'oPNoH': function (_0x1246ba, _0xd9d63e, _0x419a43) {
            return _0x1246ba(_0xd9d63e, _0x419a43);
        }
    };

    _0x5a4eb0.aisYz(print, _0x5a4eb0.pDrbC), _0x5a4eb0[_0x2b6bdf(0x162)](assertThrows, () => new WebAssembly[_0x2b6bdf(0x158)]({
        'initial': 0x0,
        'shared': true
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0xc26835 = _0x253a54;
    const _0x5c19bf = {
        'ZmCLL': function (_0x4d5975, _0x2c35d2) {
            return _0x4d5975(_0x2c35d2);
        },
        'ENxWN': _0xc26835(0x163),
        'RCzvy': 'imported_mem',
        'ehrbt': _0xc26835(0x164)
    };

    _0x5c19bf.ZmCLL(print, _0x5c19bf[_0xc26835(0x165)]);

    const _0x275072 = new WebAssembly[_0xc26835(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': true
    });

    const _0xae8d5c = new WasmModuleBuilder();

    _0xae8d5c[_0xc26835(0x166)]('m', _0x5c19bf.RCzvy, 0, undefined, _0x5c19bf[_0xc26835(0x167)]), assertThrows(() => new WebAssembly[_0xc26835(0x168)](_0xae8d5c.toBuffer()), WebAssembly[_0xc26835(0x169)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0xa2a69a = _0x253a54;
    const _0x505198 = {
        'fqoeB': function (_0x2e819a, _0x4767eb) {
            return _0x2e819a(_0x4767eb);
        },
        'kIAuE': _0xa2a69a(0x16a),
        'ocEtu': 'main'
    };

    _0x505198[_0xa2a69a(0x16b)](print, _0x505198[_0xa2a69a(0x16c)]);

    const _0x483371 = new WebAssembly[_0xa2a69a(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': true
    });

    const _0x4d60e8 = new WasmModuleBuilder();

    _0x4d60e8.addFunction(_0x505198[_0xa2a69a(0x16d)], kSig_i_ii)[_0xa2a69a(0x16e)]([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd]), _0x4d60e8[_0xa2a69a(0x166)]('m', _0xa2a69a(0x16f)), assertThrows(() => new WebAssembly[_0xa2a69a(0x168)](_0x4d60e8[_0xa2a69a(0x170)]()), WebAssembly[_0xa2a69a(0x169)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x330a48 = _0x253a54;
    const _0x50f7f6 = {
        'oQnUc': function (_0x3b8c96, _0x3e6e40) {
            return _0x3b8c96(_0x3e6e40);
        },
        'UlupS': _0x330a48(0x171),
        'ffIMs': 'imported_mem',
        'HDOMY': function (_0x332087, _0x2b9c11, _0x558d96) {
            return _0x332087(_0x2b9c11, _0x558d96);
        }
    };

    _0x50f7f6[_0x330a48(0x172)](print, _0x50f7f6[_0x330a48(0x173)]);

    const _0x2946bc = new WebAssembly[_0x330a48(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': true
    });

    const _0x5a86d6 = new WasmModuleBuilder();

    _0x5a86d6.addImportedMemory('m', _0x50f7f6[_0x330a48(0x174)]);

    const _0x467de5 = new WebAssembly[_0x330a48(0x168)](_0x5a86d6[_0x330a48(0x170)]());

    _0x50f7f6[_0x330a48(0x175)](assertThrows, () => new WebAssembly[_0x330a48(0x176)](_0x467de5, { 'm': { 'imported_mem': _0x2946bc } }), WebAssembly.LinkError);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x20b25f = _0x253a54;
    const _0x4f3e6c = {
        'nJolV': function (_0x56745f, _0x1cc66e) {
            return _0x56745f(_0x1cc66e);
        },
        'gkMYm': _0x20b25f(0x177),
        'xCwgL': _0x20b25f(0x16f),
        'znavl': function (_0x29491f, _0x13664f, _0x569e9e) {
            return _0x29491f(_0x13664f, _0x569e9e);
        }
    };

    _0x4f3e6c[_0x20b25f(0x178)](print, _0x4f3e6c[_0x20b25f(0x179)]);

    const _0x2633bc = new WebAssembly[_0x20b25f(0x158)]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': false
    });

    const _0x54583c = new WasmModuleBuilder();

    _0x54583c[_0x20b25f(0x166)]('m', _0x4f3e6c.xCwgL, 0, 10, _0x20b25f(0x164));

    const _0x32dce5 = new WebAssembly[_0x20b25f(0x168)](_0x54583c[_0x20b25f(0x170)]());

    _0x4f3e6c[_0x20b25f(0x17a)](assertThrows, () => new WebAssembly[_0x20b25f(0x176)](_0x32dce5, { 'm': { 'imported_mem': _0x2633bc } }), WebAssembly.LinkError);
}(), function TestInstantiateWithSharedDefined() {
    const _0x28127e = _0x253a54;
    const _0xf5848 = {
        'GFXBw': function (_0x3c11ee, _0x5eb429) {
            return _0x3c11ee(_0x5eb429);
        },
        'hlWzj': _0x28127e(0x17b),
        'DugUK': _0x28127e(0x164),
        'cuVBb': function (_0x27040b, _0x376a93, _0x352e7f) {
            return _0x27040b(_0x376a93, _0x352e7f);
        }
    };

    _0xf5848[_0x28127e(0x17c)](print, _0xf5848[_0x28127e(0x17d)]);

    const _0xa5aeed = new WasmModuleBuilder();

    _0xa5aeed[_0x28127e(0x17e)](2, 10, true, _0xf5848[_0x28127e(0x17f)]);

    const _0x5d76a8 = new WebAssembly[_0x28127e(0x168)](_0xa5aeed[_0x28127e(0x170)]());

    const _0xdb5254 = new WebAssembly[_0x28127e(0x176)](_0x5d76a8);

    _0xf5848[_0x28127e(0x180)](assertMemoryIsValid, _0xdb5254[_0x28127e(0x181)].memory, true);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x39143d = _0x253a54;
    const _0x247460 = {
        'vxgeY': function (_0x677886, _0x38e776) {
            return _0x677886(_0x38e776);
        },
        'MqtWv': _0x39143d(0x164),
        'HaFLj': _0x39143d(0x182),
        'xWbnu': function (_0x1c5442, _0x37946c, _0x2ecfba) {
            return _0x1c5442(_0x37946c, _0x2ecfba);
        }
    };

    _0x247460[_0x39143d(0x183)](print, _0x39143d(0x184));

    const _0x5a3df3 = new WasmModuleBuilder();

    _0x5a3df3[_0x39143d(0x17e)](2, 10, false, _0x247460[_0x39143d(0x185)]), _0x5a3df3.addFunction(_0x247460[_0x39143d(0x186)], kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd, 2, 0])[_0x39143d(0x187)]();

    const _0x5b5220 = new WebAssembly[_0x39143d(0x168)](_0x5a3df3[_0x39143d(0x170)]());

    const _0x1714d2 = new WebAssembly[_0x39143d(0x176)](_0x5b5220);

    _0x247460[_0x39143d(0x188)](assertEquals, 0, _0x1714d2.exports[_0x39143d(0x182)](0, 286331153)), _0x247460[_0x39143d(0x188)](assertEquals, 286331153, _0x1714d2.exports[_0x39143d(0x182)](0, 286331153));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x3d186c = _0x253a54;
    const _0x456f71 = {
        'vWqYC': function (_0x514b30, _0x5d39ce) {
            return _0x514b30(_0x5d39ce);
        }
    };

    _0x456f71[_0x3d186c(0x189)](print, arguments[_0x3d186c(0x18a)].name);

    const _0x108544 = new Proxy({}, {
        'has'(_0x51df09, _0x21bdb8) {
            throw new Error('Should not call [[HasProperty]] with ' + _0x21bdb8);
        },
        'get'(_0x2c5964, _0x4a3e55) {
            return 0;
        }
    });

    new WebAssembly[_0x3d186c(0x158)](_0x108544);
}();
