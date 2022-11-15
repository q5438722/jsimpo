load('test/mjsunit/wasm/wasm-module-builder.js');
function assertMemoryIsValid(_0xbd3290, _0x80b0b1) {
    const _0x9630c3 = {
            'DGPlx': '0|4|1|3|2',
            'XuPgl': function (_0x4c8add, _0xfa3d3b, _0x4d42de) {
                return _0x4c8add(_0xfa3d3b, _0x4d42de);
            },
            'upjrP': function (_0x8e23e4, _0x5de2ad) {
                return _0x8e23e4(_0x5de2ad);
            },
            'PwMtS': function (_0x45cfae, _0x486016) {
                return _0x45cfae instanceof _0x486016;
            },
            'sTqbh': function (_0x3ddfe7, _0x263191) {
                return _0x3ddfe7 instanceof _0x263191;
            },
            'NjDTi': function (_0x2a675b, _0x4c9943) {
                return _0x2a675b(_0x4c9943);
            },
            'nQAqc': function (_0x2743d9, _0x3b2507) {
                return _0x2743d9(_0x3b2507);
            }
        }, _0x22ef2e = _0x9630c3['DGPlx']['split']('|');
    let _0x448153 = 0x0;
    while (!![]) {
        switch (_0x22ef2e[_0x448153++]) {
        case '0':
            _0x9630c3['XuPgl'](assertSame, WebAssembly['Memory']['prototype'], _0xbd3290['__proto__']);
            continue;
        case '1':
            _0x9630c3['upjrP'](assertTrue, _0x9630c3['PwMtS'](_0xbd3290, Object));
            continue;
        case '2':
            _0x80b0b1 && (_0x9630c3['upjrP'](assertTrue, _0x9630c3['sTqbh'](_0xbd3290['buffer'], SharedArrayBuffer)), _0x9630c3['NjDTi'](assertTrue, Object['isFrozen'](_0xbd3290['buffer'])));
            continue;
        case '3':
            _0x9630c3['nQAqc'](assertTrue, _0x9630c3['sTqbh'](_0xbd3290, WebAssembly['Memory']));
            continue;
        case '4':
            _0x9630c3['XuPgl'](assertSame, WebAssembly['Memory'], _0xbd3290['constructor']);
            continue;
        }
        break;
    }
}
(function TestConstructorWithShared() {
    const _0x42b843 = {
        'KwCWh': function (_0x3130e0, _0x16e171) {
            return _0x3130e0(_0x16e171);
        },
        'XIXXt': 'TestConstructorWithShared',
        'uMnHY': function (_0x140cb8, _0x5d5597, _0x48f7b7) {
            return _0x140cb8(_0x5d5597, _0x48f7b7);
        }
    };
    _0x42b843['KwCWh'](print, _0x42b843['XIXXt']);
    let _0x184628 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': !![]
    });
    _0x42b843['uMnHY'](assertMemoryIsValid, _0x184628, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0x4c5125 = {
        'hoHuO': function (_0x45ce9d, _0x134079) {
            return _0x45ce9d(_0x134079);
        },
        'erjTF': 'TestConstructorWithUndefinedShared',
        'XSluQ': function (_0x45ae58, _0x5d2ef4) {
            return _0x45ae58(_0x5d2ef4);
        }
    };
    _0x4c5125['hoHuO'](print, _0x4c5125['erjTF']);
    let _0x404af5 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': undefined
    });
    _0x4c5125['XSluQ'](assertMemoryIsValid, _0x404af5);
}(), function TestConstructorWithNumericShared() {
    const _0x4115f8 = {
        'RyLFg': function (_0x50c104, _0x179084) {
            return _0x50c104(_0x179084);
        },
        'aJLUE': 'TestConstructorWithNumericShared',
        'KUfkR': function (_0x1542ef, _0x54a042, _0x5adc4e) {
            return _0x1542ef(_0x54a042, _0x5adc4e);
        }
    };
    _0x4115f8['RyLFg'](print, _0x4115f8['aJLUE']);
    let _0x1a8836 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': 0x2005e9
    });
    _0x4115f8['KUfkR'](assertMemoryIsValid, _0x1a8836, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0x4ecdbb = {
        'FDzwm': function (_0x2f1f0c, _0x3124aa) {
            return _0x2f1f0c(_0x3124aa);
        },
        'nuCPI': 'TestConstructorWithEmptyStringShared'
    };
    _0x4ecdbb['FDzwm'](print, _0x4ecdbb['nuCPI']);
    let _0x578fd6 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': ''
    });
    _0x4ecdbb['FDzwm'](assertMemoryIsValid, _0x578fd6);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0xb7b44 = {
        'qefyq': function (_0x15078e, _0x2650f1) {
            return _0x15078e(_0x2650f1);
        },
        'jxnsz': 'TestConstructorWithUndefinedMaxShared',
        'cDGmf': function (_0x45839a, _0x14268b, _0x65df37) {
            return _0x45839a(_0x14268b, _0x65df37);
        }
    };
    _0xb7b44['qefyq'](print, _0xb7b44['jxnsz']), _0xb7b44['cDGmf'](assertThrows, () => new WebAssembly['Memory']({
        'initial': 0x0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0x3fed02 = {
        'HvFCY': function (_0x43184b, _0x58d0b0) {
            return _0x43184b(_0x58d0b0);
        },
        'wDASl': 'TestCompileWithUndefinedShared',
        'rzDEb': 'imported_mem',
        'rSLQc': 'shared',
        'wzYUh': function (_0xce7199, _0x32bc82, _0x5b91e3) {
            return _0xce7199(_0x32bc82, _0x5b91e3);
        }
    };
    _0x3fed02['HvFCY'](print, _0x3fed02['wDASl']);
    let _0xc3b3b3 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x8ca78b = new WasmModuleBuilder();
    _0x8ca78b['addImportedMemory']('m', _0x3fed02['rzDEb'], 0x0, undefined, _0x3fed02['rSLQc']), _0x3fed02['wzYUh'](assertThrows, () => new WebAssembly['Module'](_0x8ca78b['toBuffer']()), WebAssembly['CompileError']);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0x50d755 = {
        'TyTqw': function (_0x35bfda, _0x524043) {
            return _0x35bfda(_0x524043);
        },
        'mOHRE': 'TestCompileAtomicOpUndefinedShared',
        'kccVd': 'main',
        'kjUpv': 'imported_mem',
        'SXpqg': function (_0x532f18, _0x2f7500, _0x4f2ab7) {
            return _0x532f18(_0x2f7500, _0x4f2ab7);
        }
    };
    _0x50d755['TyTqw'](print, _0x50d755['mOHRE']);
    let _0x329fb3 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x596e69 = new WasmModuleBuilder();
    _0x596e69['addFunction'](_0x50d755['kccVd'], kSig_i_ii)['addBody']([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x596e69['addImportedMemory']('m', _0x50d755['kjUpv']), _0x50d755['SXpqg'](assertThrows, () => new WebAssembly['Module'](_0x596e69['toBuffer']()), WebAssembly['CompileError']);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x516ebd = {
        'ESZmX': function (_0x4aecff, _0x193929) {
            return _0x4aecff(_0x193929);
        },
        'aSzCt': 'TestInstantiateWithUndefinedShared',
        'sjczx': 'imported_mem',
        'VfmVV': function (_0x9b15d7, _0x120747, _0x462f44) {
            return _0x9b15d7(_0x120747, _0x462f44);
        }
    };
    _0x516ebd['ESZmX'](print, _0x516ebd['aSzCt']);
    let _0x13a24b = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x2ab215 = new WasmModuleBuilder();
    _0x2ab215['addImportedMemory']('m', _0x516ebd['sjczx']);
    let _0xdf7df2 = new WebAssembly['Module'](_0x2ab215['toBuffer']());
    _0x516ebd['VfmVV'](assertThrows, () => new WebAssembly['Instance'](_0xdf7df2, { 'm': { 'imported_mem': _0x13a24b } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x324517 = {
        'gIpWV': function (_0x2c987b, _0x1172a3) {
            return _0x2c987b(_0x1172a3);
        },
        'fGDdl': 'TestInstantiateWithImportNotSharedDefined',
        'vXbHw': 'imported_mem',
        'YJoNW': 'shared',
        'IKVSO': function (_0x3311fd, _0x156502, _0x21784a) {
            return _0x3311fd(_0x156502, _0x21784a);
        }
    };
    _0x324517['gIpWV'](print, _0x324517['fGDdl']);
    let _0x274b17 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': ![]
        }), _0x5d854a = new WasmModuleBuilder();
    _0x5d854a['addImportedMemory']('m', _0x324517['vXbHw'], 0x0, 0xa, _0x324517['YJoNW']);
    let _0xc5a688 = new WebAssembly['Module'](_0x5d854a['toBuffer']());
    _0x324517['IKVSO'](assertThrows, () => new WebAssembly['Instance'](_0xc5a688, { 'm': { 'imported_mem': _0x274b17 } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithSharedDefined() {
    const _0x7e2e0f = {
        'mjMBt': function (_0x1d3e05, _0x249c32) {
            return _0x1d3e05(_0x249c32);
        },
        'WYERL': 'TestInstantiateWithSharedDefined',
        'KriVw': 'shared',
        'VILfw': function (_0xa19fe, _0x327777, _0x32bfea) {
            return _0xa19fe(_0x327777, _0x32bfea);
        }
    };
    _0x7e2e0f['mjMBt'](print, _0x7e2e0f['WYERL']);
    let _0x116b83 = new WasmModuleBuilder();
    _0x116b83['addMemory'](0x2, 0xa, !![], _0x7e2e0f['KriVw']);
    let _0xa1c627 = new WebAssembly['Module'](_0x116b83['toBuffer']()), _0x1cb8ef = new WebAssembly['Instance'](_0xa1c627);
    _0x7e2e0f['VILfw'](assertMemoryIsValid, _0x1cb8ef['exports']['memory'], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x406263 = {
        'MCAmb': function (_0x4f0b8b, _0x1a24d0) {
            return _0x4f0b8b(_0x1a24d0);
        },
        'WfdFm': 'TestAtomicOpWithSharedMemoryDefined',
        'jjwij': 'shared',
        'qoWpE': 'main',
        'PLTpL': function (_0x228531, _0xc1cc, _0x469742) {
            return _0x228531(_0xc1cc, _0x469742);
        },
        'BlzRn': function (_0x2e6c93, _0x28d945, _0x206faa) {
            return _0x2e6c93(_0x28d945, _0x206faa);
        }
    };
    _0x406263['MCAmb'](print, _0x406263['WfdFm']);
    let _0x1fb62a = new WasmModuleBuilder();
    _0x1fb62a['addMemory'](0x2, 0xa, ![], _0x406263['jjwij']), _0x1fb62a['addFunction'](_0x406263['qoWpE'], kSig_i_ii)['addBody']([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        0x2,
        0x0
    ])['exportFunc']();
    let _0x2d89da = new WebAssembly['Module'](_0x1fb62a['toBuffer']()), _0x570219 = new WebAssembly['Instance'](_0x2d89da);
    _0x406263['PLTpL'](assertEquals, 0x0, _0x570219['exports']['main'](0x0, 0x11111111)), _0x406263['BlzRn'](assertEquals, 0x11111111, _0x570219['exports']['main'](0x0, 0x11111111));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x21f33b = {
        'NtkKh': function (_0x74c792, _0x109f02) {
            return _0x74c792(_0x109f02);
        }
    };
    _0x21f33b['NtkKh'](print, arguments['callee']['name']);
    const _0x479871 = new Proxy({}, {
        'has'(_0x180dff, _0x428cd8) {
            throw new Error('Should\x20not\x20call\x20[[HasProperty]]\x20with\x20' + _0x428cd8);
        },
        'get'(_0x228d9d, _0x2f64e9) {
            return 0x0;
        }
    });
    new WebAssembly['Memory'](_0x479871);
}());
