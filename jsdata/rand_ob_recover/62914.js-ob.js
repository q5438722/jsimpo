load(_0x253a54(338));
function assertMemoryIsValid(_0x379699, _0x56e9) {
    const _0x2487f4 = _0x253a54, _0x2fad5b = {
            'QrApw': _0x2487f4(339),
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
        }, _0x117340 = _0x2fad5b[_0x2487f4(340)]['split']('|');
    let _0x791624 = 21 * 153 + 4938 + -8151;
    while (!![]) {
        switch (_0x117340[_0x791624++]) {
        case '0':
            _0x56e9 && (_0x2fad5b[_0x2487f4(341)](assertTrue, _0x379699['buffer'] instanceof SharedArrayBuffer), assertTrue(Object['isFrozen'](_0x379699[_0x2487f4(342)])));
            continue;
        case '1':
            _0x2fad5b[_0x2487f4(343)](assertSame, WebAssembly[_0x2487f4(344)], _0x379699['constructor']);
            continue;
        case '2':
            assertTrue(_0x2fad5b[_0x2487f4(345)](_0x379699, Object));
            continue;
        case '3':
            _0x2fad5b[_0x2487f4(346)](assertSame, WebAssembly[_0x2487f4(344)]['prototype'], _0x379699[_0x2487f4(347)]);
            continue;
        case '4':
            _0x2fad5b[_0x2487f4(341)](assertTrue, _0x379699 instanceof WebAssembly[_0x2487f4(344)]);
            continue;
        }
        break;
    }
}
(function TestConstructorWithShared() {
    const _0x4e0165 = _0x253a54, _0x1692e9 = { 'ArKxS': _0x4e0165(348) };
    print(_0x1692e9[_0x4e0165(349)]);
    let _0x518d85 = new WebAssembly[(_0x4e0165(344))]({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    assertMemoryIsValid(_0x518d85, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0x38455a = _0x253a54, _0x52d653 = {
            'EbKOR': function (_0x1b6a0c, _0x1fd1c4) {
                return _0x1b6a0c(_0x1fd1c4);
            },
            'cRJfb': 'TestConstructorWithUndefinedShared'
        };
    _0x52d653[_0x38455a(350)](print, _0x52d653[_0x38455a(351)]);
    let _0xdd68e6 = new WebAssembly[(_0x38455a(344))]({
        'initial': 0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0xdd68e6);
}(), function TestConstructorWithNumericShared() {
    const _0x1b43aa = _0x253a54, _0x39a743 = {
            'lmscS': function (_0xd5348, _0x4dea62) {
                return _0xd5348(_0x4dea62);
            },
            'pGxNV': function (_0x2a1748, _0x32c546, _0x3e8017) {
                return _0x2a1748(_0x32c546, _0x3e8017);
            }
        };
    _0x39a743['lmscS'](print, 'TestConstructorWithNumericShared');
    let _0xcffc92 = new WebAssembly[(_0x1b43aa(344))]({
        'initial': 0,
        'maximum': 10,
        'shared': 2098665
    });
    _0x39a743['pGxNV'](assertMemoryIsValid, _0xcffc92, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0xc1c663 = _0x253a54, _0x15e706 = {
            'RkMMZ': function (_0x5d2cab, _0x3c783d) {
                return _0x5d2cab(_0x3c783d);
            }
        };
    _0x15e706['RkMMZ'](print, 'TestConstructorWithEmptyStringShared');
    let _0x3014c5 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': undefined,
        'shared': ''
    });
    _0x15e706[_0xc1c663(352)](assertMemoryIsValid, _0x3014c5);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0x2b6bdf = _0x253a54, _0x5a4eb0 = {
            'aisYz': function (_0x1d1564, _0x910b03) {
                return _0x1d1564(_0x910b03);
            },
            'pDrbC': _0x2b6bdf(353),
            'oPNoH': function (_0x1246ba, _0xd9d63e, _0x419a43) {
                return _0x1246ba(_0xd9d63e, _0x419a43);
            }
        };
    _0x5a4eb0['aisYz'](print, _0x5a4eb0['pDrbC']), _0x5a4eb0[_0x2b6bdf(354)](assertThrows, () => new WebAssembly[(_0x2b6bdf(344))]({
        'initial': 0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0xc26835 = _0x253a54, _0x5c19bf = {
            'ZmCLL': function (_0x4d5975, _0x2c35d2) {
                return _0x4d5975(_0x2c35d2);
            },
            'ENxWN': _0xc26835(355),
            'RCzvy': 'imported_mem',
            'ehrbt': _0xc26835(356)
        };
    _0x5c19bf['ZmCLL'](print, _0x5c19bf[_0xc26835(357)]);
    let _0x275072 = new WebAssembly[(_0xc26835(344))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0xae8d5c = new WasmModuleBuilder();
    _0xae8d5c[_0xc26835(358)]('m', _0x5c19bf['RCzvy'], -7216 + 2485 + 57 * 83, undefined, _0x5c19bf[_0xc26835(359)]), assertThrows(() => new WebAssembly[(_0xc26835(360))](_0xae8d5c['toBuffer']()), WebAssembly[_0xc26835(361)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0xa2a69a = _0x253a54, _0x505198 = {
            'fqoeB': function (_0x2e819a, _0x4767eb) {
                return _0x2e819a(_0x4767eb);
            },
            'kIAuE': _0xa2a69a(362),
            'ocEtu': 'main'
        };
    _0x505198[_0xa2a69a(363)](print, _0x505198[_0xa2a69a(364)]);
    let _0x483371 = new WebAssembly[(_0xa2a69a(344))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x4d60e8 = new WasmModuleBuilder();
    _0x4d60e8['addFunction'](_0x505198[_0xa2a69a(365)], kSig_i_ii)[_0xa2a69a(366)]([
        kExprLocalGet,
        9 * 259 + -7138 + 1 * 4807,
        kExprLocalGet,
        2076 + -86 * -79 + -1 * 8869,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x4d60e8[_0xa2a69a(358)]('m', _0xa2a69a(367)), assertThrows(() => new WebAssembly[(_0xa2a69a(360))](_0x4d60e8[_0xa2a69a(368)]()), WebAssembly[_0xa2a69a(361)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x330a48 = _0x253a54, _0x50f7f6 = {
            'oQnUc': function (_0x3b8c96, _0x3e6e40) {
                return _0x3b8c96(_0x3e6e40);
            },
            'UlupS': _0x330a48(369),
            'ffIMs': 'imported_mem',
            'HDOMY': function (_0x332087, _0x2b9c11, _0x558d96) {
                return _0x332087(_0x2b9c11, _0x558d96);
            }
        };
    _0x50f7f6[_0x330a48(370)](print, _0x50f7f6[_0x330a48(371)]);
    let _0x2946bc = new WebAssembly[(_0x330a48(344))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x5a86d6 = new WasmModuleBuilder();
    _0x5a86d6['addImportedMemory']('m', _0x50f7f6[_0x330a48(372)]);
    let _0x467de5 = new WebAssembly[(_0x330a48(360))](_0x5a86d6[_0x330a48(368)]());
    _0x50f7f6[_0x330a48(373)](assertThrows, () => new WebAssembly[(_0x330a48(374))](_0x467de5, { 'm': { 'imported_mem': _0x2946bc } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x20b25f = _0x253a54, _0x4f3e6c = {
            'nJolV': function (_0x56745f, _0x1cc66e) {
                return _0x56745f(_0x1cc66e);
            },
            'gkMYm': _0x20b25f(375),
            'xCwgL': _0x20b25f(367),
            'znavl': function (_0x29491f, _0x13664f, _0x569e9e) {
                return _0x29491f(_0x13664f, _0x569e9e);
            }
        };
    _0x4f3e6c[_0x20b25f(376)](print, _0x4f3e6c[_0x20b25f(377)]);
    let _0x2633bc = new WebAssembly[(_0x20b25f(344))]({
            'initial': 0,
            'maximum': 10,
            'shared': ![]
        }), _0x54583c = new WasmModuleBuilder();
    _0x54583c[_0x20b25f(358)]('m', _0x4f3e6c['xCwgL'], 4315 + 3 * 1103 + 2 * -3812, 7652 * 1 + 5779 + -13421, _0x20b25f(356));
    let _0x32dce5 = new WebAssembly[(_0x20b25f(360))](_0x54583c[_0x20b25f(368)]());
    _0x4f3e6c[_0x20b25f(378)](assertThrows, () => new WebAssembly[(_0x20b25f(374))](_0x32dce5, { 'm': { 'imported_mem': _0x2633bc } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithSharedDefined() {
    const _0x28127e = _0x253a54, _0xf5848 = {
            'GFXBw': function (_0x3c11ee, _0x5eb429) {
                return _0x3c11ee(_0x5eb429);
            },
            'hlWzj': _0x28127e(379),
            'DugUK': _0x28127e(356),
            'cuVBb': function (_0x27040b, _0x376a93, _0x352e7f) {
                return _0x27040b(_0x376a93, _0x352e7f);
            }
        };
    _0xf5848[_0x28127e(380)](print, _0xf5848[_0x28127e(381)]);
    let _0xa5aeed = new WasmModuleBuilder();
    _0xa5aeed[_0x28127e(382)](1 * -6395 + 1753 + -774 * -6, -57 * -2 + -731 + 627, !![], _0xf5848[_0x28127e(383)]);
    let _0x5d76a8 = new WebAssembly[(_0x28127e(360))](_0xa5aeed[_0x28127e(368)]()), _0xdb5254 = new WebAssembly[(_0x28127e(374))](_0x5d76a8);
    _0xf5848[_0x28127e(384)](assertMemoryIsValid, _0xdb5254[_0x28127e(385)]['memory'], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x39143d = _0x253a54, _0x247460 = {
            'vxgeY': function (_0x677886, _0x38e776) {
                return _0x677886(_0x38e776);
            },
            'MqtWv': _0x39143d(356),
            'HaFLj': _0x39143d(386),
            'xWbnu': function (_0x1c5442, _0x37946c, _0x2ecfba) {
                return _0x1c5442(_0x37946c, _0x2ecfba);
            }
        };
    _0x247460[_0x39143d(387)](print, _0x39143d(388));
    let _0x5a3df3 = new WasmModuleBuilder();
    _0x5a3df3[_0x39143d(382)](5604 + 1 * 9745 + -15347, 2270 + 1361 * 6 + -10426, ![], _0x247460[_0x39143d(389)]), _0x5a3df3['addFunction'](_0x247460[_0x39143d(390)], kSig_i_ii)['addBody']([
        kExprLocalGet,
        931 + -3544 * -2 + 243 * -33,
        kExprLocalGet,
        4201 + -59 * 125 + 1 * 3175,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        -6793 + -9909 + 348 * 48,
        5360 + 164 * 2 + 474 * -12
    ])[_0x39143d(391)]();
    let _0x5b5220 = new WebAssembly[(_0x39143d(360))](_0x5a3df3[_0x39143d(368)]()), _0x1714d2 = new WebAssembly[(_0x39143d(374))](_0x5b5220);
    _0x247460[_0x39143d(392)](assertEquals, -7856 + 6553 * 1 + -1303 * -1, _0x1714d2['exports'][_0x39143d(386)](4141 * -1 + 4341 * 1 + -200, 1950831 + 2402 * -158646 + 11 * 60495274)), _0x247460[_0x39143d(392)](assertEquals, 508736940 + 564386284 + -786792071, _0x1714d2['exports'][_0x39143d(386)](149 * 55 + -61 * -141 + -494 * 34, -1254891 + -326332059 + 613918103));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x3d186c = _0x253a54, _0x456f71 = {
            'vWqYC': function (_0x514b30, _0x5d39ce) {
                return _0x514b30(_0x5d39ce);
            }
        };
    _0x456f71[_0x3d186c(393)](print, arguments[_0x3d186c(394)]['name']);
    const _0x108544 = new Proxy({}, {
        'has'(_0x51df09, _0x21bdb8) {
            throw new Error('Should not call [[HasProperty]] with ' + _0x21bdb8);
        },
        'get'(_0x2c5964, _0x4a3e55) {
            return -2732 + -739 * -6 + -23 * 74;
        }
    });
    new WebAssembly[(_0x3d186c(344))](_0x108544);
}());