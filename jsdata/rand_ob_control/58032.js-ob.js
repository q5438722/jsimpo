'use strict';
const {Array, ArrayIsArray, ArrayPrototypeForEach, Error, MathFloor, MathMin, MathTrunc, NumberIsNaN, NumberMAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER, ObjectCreate, ObjectDefineProperties, ObjectDefineProperty, ObjectSetPrototypeOf, StringPrototypeCharCodeAt, StringPrototypeReplace, StringPrototypeSlice, StringPrototypeToLowerCase, StringPrototypeTrim, SymbolSpecies, SymbolToPrimitive, TypedArrayPrototypeGetByteLength, TypedArrayPrototypeFill, TypedArrayPrototypeSet, Uint8Array, Uint8ArrayPrototype} = primordials, {
        byteLengthUtf8,
        compare: _compare,
        compareOffset,
        createFromString,
        fill: bindingFill,
        indexOfBuffer,
        indexOfNumber,
        indexOfString,
        swap16: _swap16,
        swap32: _swap32,
        swap64: _swap64,
        kMaxLength,
        kStringMaxLength
    } = internalBinding('buffer'), {
        getOwnNonIndexProperties,
        propertyFilter: {ALL_PROPERTIES, ONLY_ENUMERABLE}
    } = internalBinding('util'), {customInspectSymbol, isInsideNodeModules, lazyDOMException, normalizeEncoding, kIsEncodingSymbol} = require('internal/util'), {isAnyArrayBuffer, isArrayBufferView, isUint8Array} = require('internal/util/types'), {inspect: utilInspect} = require('internal/util/inspect'), {encodings} = internalBinding('string_decoder'), {
        codes: {ERR_BUFFER_OUT_OF_BOUNDS, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_INVALID_BUFFER_SIZE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_ENCODING},
        hideStackFrames
    } = require('internal/errors'), {validateArray, validateBuffer, validateNumber, validateInteger, validateString} = require('internal/validators'), validateOffset = (_0x285b31, _0x38d3fc, _0x21df6b = 0x0, _0x5e1748 = kMaxLength) => validateInteger(_0x285b31, _0x38d3fc, _0x21df6b, _0x5e1748), {FastBuffer, markAsUntransferable, addBufferPrototypeMethods, createUnsafeBuffer} = require('internal/buffer'), {Blob, resolveObjectURL} = require('internal/blob');
FastBuffer['prototype']['constructor'] = Buffer, Buffer['prototype'] = FastBuffer['prototype'], addBufferPrototypeMethods(Buffer['prototype']);
const constants = ObjectDefineProperties({}, {
    'MAX_LENGTH': {
        'value': kMaxLength,
        'writable': ![],
        'enumerable': !![]
    },
    'MAX_STRING_LENGTH': {
        'value': kStringMaxLength,
        'writable': ![],
        'enumerable': !![]
    }
});
Buffer['poolSize'] = 0x8 * 0x400;
let poolSize, poolOffset, allocPool;
const encodingsMap = ObjectCreate(null);
for (let i = 0x0; i < encodings['length']; ++i)
    encodingsMap[encodings[i]] = i;
function createPool() {
    const _0x860a7a = {
        'RmbBX': function (_0x26e4fc, _0x6569fa) {
            return _0x26e4fc(_0x6569fa);
        }
    };
    poolSize = Buffer['poolSize'], allocPool = _0x860a7a['RmbBX'](createUnsafeBuffer, poolSize)['buffer'], _0x860a7a['RmbBX'](markAsUntransferable, allocPool), poolOffset = 0x0;
}
createPool();
function alignPool() {
    const _0x14a5bd = {
        'VwJYF': function (_0x2700a1, _0x29b8af) {
            return _0x2700a1 & _0x29b8af;
        }
    };
    _0x14a5bd['VwJYF'](poolOffset, 0x7) && (poolOffset |= 0x7, poolOffset++);
}
let bufferWarningAlreadyEmitted = ![], nodeModulesCheckCounter = 0x0;
const bufferWarning = 'Buffer()\x20is\x20deprecated\x20due\x20to\x20security\x20and\x20usability\x20' + 'issues.\x20Please\x20use\x20the\x20Buffer.alloc(),\x20' + 'Buffer.allocUnsafe(),\x20or\x20Buffer.from()\x20methods\x20instead.';
function showFlaggedDeprecation() {
    const _0x328cf9 = {
        'ZfEQt': function (_0x1abf7f, _0x2482fa) {
            return _0x1abf7f > _0x2482fa;
        },
        'znhpg': function (_0x1d7c81, _0x3440e0) {
            return _0x1d7c81(_0x3440e0);
        },
        'foiHO': 'internal/options',
        'AsOpo': '--pending-deprecation',
        'vRWDf': function (_0x1d65f3) {
            return _0x1d65f3();
        },
        'FgluN': 'DeprecationWarning',
        'OkdQD': 'DEP0005'
    };
    if (bufferWarningAlreadyEmitted || _0x328cf9['ZfEQt'](++nodeModulesCheckCounter, 0x2710) || !_0x328cf9['znhpg'](require, _0x328cf9['foiHO'])['getOptionValue'](_0x328cf9['AsOpo']) && _0x328cf9['vRWDf'](isInsideNodeModules))
        return;
    process['emitWarning'](bufferWarning, _0x328cf9['FgluN'], _0x328cf9['OkdQD']), bufferWarningAlreadyEmitted = !![];
}
function toInteger(_0xd18064, _0x123db2) {
    const _0x4d7e12 = {
        'oeGFM': function (_0x50341f, _0x212d68) {
            return _0x50341f(_0x212d68);
        },
        'eCapa': function (_0x127965, _0x1d1f1b) {
            return _0x127965 >= _0x1d1f1b;
        },
        'OZZSy': function (_0x5953c4, _0x525b60) {
            return _0x5953c4 <= _0x525b60;
        },
        'RkBsy': function (_0x1528f0, _0x17ceda) {
            return _0x1528f0 === _0x17ceda;
        },
        'aYzmc': function (_0x2f28b4, _0x434d73) {
            return _0x2f28b4 % _0x434d73;
        }
    };
    _0xd18064 = +_0xd18064;
    if (!_0x4d7e12['oeGFM'](NumberIsNaN, _0xd18064) && _0x4d7e12['eCapa'](_0xd18064, NumberMIN_SAFE_INTEGER) && _0x4d7e12['OZZSy'](_0xd18064, NumberMAX_SAFE_INTEGER))
        return _0x4d7e12['RkBsy'](_0x4d7e12['aYzmc'](_0xd18064, 0x1), 0x0) ? _0xd18064 : _0x4d7e12['oeGFM'](MathFloor, _0xd18064);
    return _0x123db2;
}
function _copy(_0x514af9, _0x5547e8, _0x5158fd, _0x4d499e, _0x4c97b8) {
    const _0x450306 = {
            'LQrwF': '6|4|2|0|5|3|1|7',
            'msCps': function (_0x5df78a, _0x275f45) {
                return _0x5df78a === _0x275f45;
            },
            'Colfa': function (_0x5dfec8, _0x2b65a8, _0x46c9ad) {
                return _0x5dfec8(_0x2b65a8, _0x46c9ad);
            },
            'SVBVi': function (_0x6ecd0c, _0x93081a) {
                return _0x6ecd0c < _0x93081a;
            },
            'wxAKN': 'sourceStart',
            'laqNr': '>=\x200',
            'eEmVw': function (_0x18c644, _0x369976) {
                return _0x18c644 > _0x369976;
            },
            'XnScG': function (_0x3041ef, _0x303389) {
                return _0x3041ef < _0x303389;
            },
            'lmTpP': 'targetStart',
            'tRMZs': function (_0x5881b3, _0x51e83b) {
                return _0x5881b3 >= _0x51e83b;
            },
            'yRJoZ': function (_0x182293, _0x3a58b4) {
                return _0x182293 >= _0x3a58b4;
            },
            'UFDuI': function (_0x53af4e, _0x13e6fe) {
                return _0x53af4e(_0x13e6fe);
            },
            'NekQF': 'target',
            'joafO': 'Buffer',
            'dDfxO': 'Uint8Array',
            'MDOdn': function (_0x390826, _0x1a448d, _0xbdcd4e) {
                return _0x390826(_0x1a448d, _0xbdcd4e);
            },
            'ARFxl': function (_0x450e16, _0x20acbf) {
                return _0x450e16 < _0x20acbf;
            },
            'DsKfc': 'sourceEnd',
            'iTiNj': function (_0x47e7c4, _0x2ece2a) {
                return _0x47e7c4(_0x2ece2a);
            },
            'nKXbd': 'source',
            'FRwYY': function (_0x164b7d, _0x201ee4, _0x4594c6, _0x2693a8, _0x17a296, _0x21c504) {
                return _0x164b7d(_0x201ee4, _0x4594c6, _0x2693a8, _0x17a296, _0x21c504);
            }
        }, _0x4df396 = _0x450306['LQrwF']['split']('|');
    let _0x4f7e72 = 0x0;
    while (!![]) {
        switch (_0x4df396[_0x4f7e72++]) {
        case '0':
            if (_0x450306['msCps'](_0x4d499e, undefined))
                _0x4d499e = 0x0;
            else {
                _0x4d499e = _0x450306['Colfa'](toInteger, _0x4d499e, 0x0);
                if (_0x450306['SVBVi'](_0x4d499e, 0x0))
                    throw new ERR_OUT_OF_RANGE(_0x450306['wxAKN'], _0x450306['laqNr'], _0x4d499e);
            }
            continue;
        case '1':
            if (_0x450306['eEmVw'](_0x4d499e, _0x514af9['length']))
                throw new ERR_OUT_OF_RANGE(_0x450306['wxAKN'], '<=\x20' + _0x514af9['length'], _0x4d499e);
            continue;
        case '2':
            if (_0x450306['msCps'](_0x5158fd, undefined))
                _0x5158fd = 0x0;
            else {
                _0x5158fd = _0x450306['Colfa'](toInteger, _0x5158fd, 0x0);
                if (_0x450306['XnScG'](_0x5158fd, 0x0))
                    throw new ERR_OUT_OF_RANGE(_0x450306['lmTpP'], _0x450306['laqNr'], _0x5158fd);
            }
            continue;
        case '3':
            if (_0x450306['tRMZs'](_0x5158fd, _0x5547e8['length']) || _0x450306['yRJoZ'](_0x4d499e, _0x4c97b8))
                return 0x0;
            continue;
        case '4':
            if (!_0x450306['UFDuI'](isUint8Array, _0x5547e8))
                throw new ERR_INVALID_ARG_TYPE(_0x450306['NekQF'], [
                    _0x450306['joafO'],
                    _0x450306['dDfxO']
                ], _0x5547e8);
            continue;
        case '5':
            if (_0x450306['msCps'](_0x4c97b8, undefined))
                _0x4c97b8 = _0x514af9['length'];
            else {
                _0x4c97b8 = _0x450306['MDOdn'](toInteger, _0x4c97b8, 0x0);
                if (_0x450306['ARFxl'](_0x4c97b8, 0x0))
                    throw new ERR_OUT_OF_RANGE(_0x450306['DsKfc'], _0x450306['laqNr'], _0x4c97b8);
            }
            continue;
        case '6':
            if (!_0x450306['iTiNj'](isUint8Array, _0x514af9))
                throw new ERR_INVALID_ARG_TYPE(_0x450306['nKXbd'], [
                    _0x450306['joafO'],
                    _0x450306['dDfxO']
                ], _0x514af9);
            continue;
        case '7':
            return _0x450306['FRwYY'](_copyActual, _0x514af9, _0x5547e8, _0x5158fd, _0x4d499e, _0x4c97b8);
        }
        break;
    }
}
function _copyActual(_0x9b20ea, _0x36caca, _0x130b86, _0x3af8b4, _0x4f0dd6) {
    const _0x45e3b3 = {
        'EdKlA': function (_0x5daace, _0x156499) {
            return _0x5daace > _0x156499;
        },
        'nvjWV': function (_0x2f217a, _0x43c38c) {
            return _0x2f217a - _0x43c38c;
        },
        'lnoKp': function (_0x2ec1c4, _0x9cff28) {
            return _0x2ec1c4 + _0x9cff28;
        },
        'fOqYA': function (_0x35ad23, _0x697ec3) {
            return _0x35ad23 - _0x697ec3;
        },
        'mBZnF': function (_0x489f2b, _0x4b6a78) {
            return _0x489f2b !== _0x4b6a78;
        },
        'YSyBZ': function (_0x1c0e02, _0x14d1ef) {
            return _0x1c0e02 < _0x14d1ef;
        },
        'VxqwU': function (_0xad6381, _0x50334e) {
            return _0xad6381 + _0x50334e;
        },
        'ErEGZ': function (_0x14c268, _0x3c717c, _0xc9b24, _0x4ea1e8) {
            return _0x14c268(_0x3c717c, _0xc9b24, _0x4ea1e8);
        }
    };
    if (_0x45e3b3['EdKlA'](_0x45e3b3['nvjWV'](_0x4f0dd6, _0x3af8b4), _0x45e3b3['nvjWV'](_0x36caca['length'], _0x130b86)))
        _0x4f0dd6 = _0x45e3b3['nvjWV'](_0x45e3b3['lnoKp'](_0x3af8b4, _0x36caca['length']), _0x130b86);
    let _0x5830d6 = _0x45e3b3['fOqYA'](_0x4f0dd6, _0x3af8b4);
    const _0x28be36 = _0x45e3b3['fOqYA'](_0x9b20ea['length'], _0x3af8b4);
    if (_0x45e3b3['EdKlA'](_0x5830d6, _0x28be36))
        _0x5830d6 = _0x28be36;
    if (_0x45e3b3['mBZnF'](_0x3af8b4, 0x0) || _0x45e3b3['YSyBZ'](_0x4f0dd6, _0x9b20ea['length']))
        _0x9b20ea = new Uint8Array(_0x9b20ea['buffer'], _0x45e3b3['VxqwU'](_0x9b20ea['byteOffset'], _0x3af8b4), _0x5830d6);
    return _0x45e3b3['ErEGZ'](TypedArrayPrototypeSet, _0x36caca, _0x9b20ea, _0x130b86), _0x5830d6;
}
function Buffer(_0x1c0d31, _0x576ceb, _0x328aec) {
    const _0x3a83a5 = {
        'ZOlnW': function (_0x3febec) {
            return _0x3febec();
        },
        'hbmAj': function (_0x12c5c5, _0x352871) {
            return _0x12c5c5 === _0x352871;
        },
        'BPoYv': 'number',
        'zRUuj': 'string'
    };
    _0x3a83a5['ZOlnW'](showFlaggedDeprecation);
    if (_0x3a83a5['hbmAj'](typeof _0x1c0d31, _0x3a83a5['BPoYv'])) {
        if (_0x3a83a5['hbmAj'](typeof _0x576ceb, _0x3a83a5['zRUuj']))
            throw new ERR_INVALID_ARG_TYPE(_0x3a83a5['zRUuj'], _0x3a83a5['zRUuj'], _0x1c0d31);
        return Buffer['alloc'](_0x1c0d31);
    }
    return Buffer['from'](_0x1c0d31, _0x576ceb, _0x328aec);
}
ObjectDefineProperty(Buffer, SymbolSpecies, {
    'enumerable': ![],
    'configurable': !![],
    'get'() {
        return FastBuffer;
    }
}), Buffer['from'] = function from(_0x1a7783, _0x17cfda, _0x5cd88d) {
    const _0x4348d4 = {
        'mozWK': function (_0x57c4b7, _0x25f68e) {
            return _0x57c4b7 === _0x25f68e;
        },
        'oqCaZ': 'string',
        'iOffj': function (_0x44f14d, _0x476f4d, _0x49dcd0) {
            return _0x44f14d(_0x476f4d, _0x49dcd0);
        },
        'eAdeR': 'object',
        'iGJVI': function (_0x3d3957, _0x2e710d) {
            return _0x3d3957 !== _0x2e710d;
        },
        'GgHyx': function (_0x23258d, _0x516453) {
            return _0x23258d(_0x516453);
        },
        'bBPFD': function (_0x564ac7, _0x5f134b, _0x4df3cf, _0x56e1e4) {
            return _0x564ac7(_0x5f134b, _0x4df3cf, _0x56e1e4);
        },
        'MyHOy': function (_0x241ab5, _0x2f65c9) {
            return _0x241ab5 != _0x2f65c9;
        },
        'tpMCZ': function (_0x897f18, _0x448423) {
            return _0x897f18 === _0x448423;
        },
        'yIdqU': function (_0x5b51c5, _0x37c8a2, _0x80f768, _0xec47c) {
            return _0x5b51c5(_0x37c8a2, _0x80f768, _0xec47c);
        },
        'lvUjr': 'function',
        'XgABI': function (_0x1c716f, _0x4c4ce2) {
            return _0x1c716f === _0x4c4ce2;
        },
        'YxtWt': function (_0x231658, _0x57b346, _0x90e4) {
            return _0x231658(_0x57b346, _0x90e4);
        },
        'EkjYv': 'first\x20argument',
        'FWapI': 'Buffer',
        'VSHIO': 'ArrayBuffer',
        'bfois': 'Array',
        'lzsmn': 'Array-like\x20Object'
    };
    if (_0x4348d4['mozWK'](typeof _0x1a7783, _0x4348d4['oqCaZ']))
        return _0x4348d4['iOffj'](fromString, _0x1a7783, _0x17cfda);
    if (_0x4348d4['mozWK'](typeof _0x1a7783, _0x4348d4['eAdeR']) && _0x4348d4['iGJVI'](_0x1a7783, null)) {
        if (_0x4348d4['GgHyx'](isAnyArrayBuffer, _0x1a7783))
            return _0x4348d4['bBPFD'](fromArrayBuffer, _0x1a7783, _0x17cfda, _0x5cd88d);
        const _0x227862 = _0x1a7783['valueOf'] && _0x1a7783['valueOf']();
        if (_0x4348d4['MyHOy'](_0x227862, null) && _0x4348d4['iGJVI'](_0x227862, _0x1a7783) && (_0x4348d4['tpMCZ'](typeof _0x227862, _0x4348d4['oqCaZ']) || _0x4348d4['tpMCZ'](typeof _0x227862, _0x4348d4['eAdeR'])))
            return _0x4348d4['yIdqU'](from, _0x227862, _0x17cfda, _0x5cd88d);
        const _0x3990b2 = _0x4348d4['GgHyx'](fromObject, _0x1a7783);
        if (_0x3990b2)
            return _0x3990b2;
        if (_0x4348d4['tpMCZ'](typeof _0x1a7783[SymbolToPrimitive], _0x4348d4['lvUjr'])) {
            const _0x206a27 = _0x1a7783[SymbolToPrimitive](_0x4348d4['oqCaZ']);
            if (_0x4348d4['XgABI'](typeof _0x206a27, _0x4348d4['oqCaZ']))
                return _0x4348d4['YxtWt'](fromString, _0x206a27, _0x17cfda);
        }
    }
    throw new ERR_INVALID_ARG_TYPE(_0x4348d4['EkjYv'], [
        _0x4348d4['oqCaZ'],
        _0x4348d4['FWapI'],
        _0x4348d4['VSHIO'],
        _0x4348d4['bfois'],
        _0x4348d4['lzsmn']
    ], _0x1a7783);
};
const of = (..._0xc3cb1) => {
    const _0x2644a6 = {
            'DDArV': function (_0x2ae1af, _0x5512a6) {
                return _0x2ae1af(_0x5512a6);
            },
            'AdnTA': function (_0x3a04ee, _0x55e86e) {
                return _0x3a04ee < _0x55e86e;
            }
        }, _0x6951e3 = _0x2644a6['DDArV'](createUnsafeBuffer, _0xc3cb1['length']);
    for (let _0x875acb = 0x0; _0x2644a6['AdnTA'](_0x875acb, _0xc3cb1['length']); _0x875acb++)
        _0x6951e3[_0x875acb] = _0xc3cb1[_0x875acb];
    return _0x6951e3;
};
Buffer['of'] = of, ObjectSetPrototypeOf(Buffer, Uint8Array);
const assertSize = hideStackFrames(_0x10724c => {
    const _0x286da6 = {
        'vrYcC': function (_0x2e71a6, _0x5f1ff2, _0x4e3356) {
            return _0x2e71a6(_0x5f1ff2, _0x4e3356);
        },
        'BJaGF': 'size',
        'OYBGA': function (_0x59cf18, _0x333fd8) {
            return _0x59cf18 >= _0x333fd8;
        },
        'yiXgU': function (_0x207766, _0x3bdcd0) {
            return _0x207766 <= _0x3bdcd0;
        }
    };
    _0x286da6['vrYcC'](validateNumber, _0x10724c, _0x286da6['BJaGF']);
    if (!(_0x286da6['OYBGA'](_0x10724c, 0x0) && _0x286da6['yiXgU'](_0x10724c, kMaxLength)))
        throw new ERR_INVALID_ARG_VALUE['RangeError'](_0x286da6['BJaGF'], _0x10724c);
});
Buffer['alloc'] = function alloc(_0x474c5f, _0x26b38c, _0x1aea8f) {
    const _0x306918 = {
        'AxLxg': function (_0x1bec58, _0x2d731b) {
            return _0x1bec58(_0x2d731b);
        },
        'yCgYi': function (_0x37cef8, _0x2c8e44) {
            return _0x37cef8 !== _0x2c8e44;
        },
        'KbgZV': function (_0x3a9e15, _0x9b7b5) {
            return _0x3a9e15 !== _0x9b7b5;
        },
        'pCRrb': function (_0x35decc, _0x2266e3) {
            return _0x35decc > _0x2266e3;
        },
        'XDZcg': function (_0xb6b082, _0x52fbd2) {
            return _0xb6b082(_0x52fbd2);
        },
        'FNAqo': function (_0x518b6e, _0x33a17e, _0x43262b, _0x2d7a61, _0x5009e6, _0x5ecc84) {
            return _0x518b6e(_0x33a17e, _0x43262b, _0x2d7a61, _0x5009e6, _0x5ecc84);
        }
    };
    _0x306918['AxLxg'](assertSize, _0x474c5f);
    if (_0x306918['yCgYi'](_0x26b38c, undefined) && _0x306918['KbgZV'](_0x26b38c, 0x0) && _0x306918['pCRrb'](_0x474c5f, 0x0)) {
        const _0x9b6401 = _0x306918['XDZcg'](createUnsafeBuffer, _0x474c5f);
        return _0x306918['FNAqo'](_fill, _0x9b6401, _0x26b38c, 0x0, _0x9b6401['length'], _0x1aea8f);
    }
    return new FastBuffer(_0x474c5f);
}, Buffer['allocUnsafe'] = function allocUnsafe(_0x55e544) {
    const _0x1c7c03 = {
        'wuWkn': function (_0x59f93d, _0xdf4b89) {
            return _0x59f93d(_0xdf4b89);
        },
        'nwhwt': function (_0x430bde, _0x555a1a) {
            return _0x430bde(_0x555a1a);
        }
    };
    return _0x1c7c03['wuWkn'](assertSize, _0x55e544), _0x1c7c03['nwhwt'](allocate, _0x55e544);
}, Buffer['allocUnsafeSlow'] = function allocUnsafeSlow(_0x566630) {
    const _0x198715 = {
        'CtrMY': function (_0x2f5b1e, _0x4c7d46) {
            return _0x2f5b1e(_0x4c7d46);
        },
        'mHGsJ': function (_0x1720b2, _0x4fc854) {
            return _0x1720b2(_0x4fc854);
        }
    };
    return _0x198715['CtrMY'](assertSize, _0x566630), _0x198715['mHGsJ'](createUnsafeBuffer, _0x566630);
};
function SlowBuffer(_0x45cf93) {
    const _0x4452c1 = {
        'nIPHk': function (_0xebd851, _0x2bc41d) {
            return _0xebd851(_0x2bc41d);
        },
        'AJuhy': function (_0x51c522, _0x519e89) {
            return _0x51c522(_0x519e89);
        }
    };
    return _0x4452c1['nIPHk'](assertSize, _0x45cf93), _0x4452c1['AJuhy'](createUnsafeBuffer, _0x45cf93);
}
ObjectSetPrototypeOf(SlowBuffer['prototype'], Uint8ArrayPrototype), ObjectSetPrototypeOf(SlowBuffer, Uint8Array);
function allocate(_0x29ccd6) {
    const _0x2d789c = {
        'BqLIS': function (_0x32b892, _0x1bf9f7) {
            return _0x32b892 <= _0x1bf9f7;
        },
        'AFbbR': function (_0x33fc96, _0x5b36d1) {
            return _0x33fc96 < _0x5b36d1;
        },
        'yKmAy': function (_0x2cabf9, _0x470b71) {
            return _0x2cabf9 >>> _0x470b71;
        },
        'XQWOp': function (_0x288058, _0x31366d) {
            return _0x288058 > _0x31366d;
        },
        'tsVqa': function (_0x17b62a, _0x223eff) {
            return _0x17b62a - _0x223eff;
        },
        'egfTV': function (_0x5dab65) {
            return _0x5dab65();
        },
        'KrhMt': function (_0x205ef5, _0xed3489) {
            return _0x205ef5(_0xed3489);
        }
    };
    if (_0x2d789c['BqLIS'](_0x29ccd6, 0x0))
        return new FastBuffer();
    if (_0x2d789c['AFbbR'](_0x29ccd6, _0x2d789c['yKmAy'](Buffer['poolSize'], 0x1))) {
        if (_0x2d789c['XQWOp'](_0x29ccd6, _0x2d789c['tsVqa'](poolSize, poolOffset)))
            _0x2d789c['egfTV'](createPool);
        const _0x261d41 = new FastBuffer(allocPool, poolOffset, _0x29ccd6);
        return poolOffset += _0x29ccd6, _0x2d789c['egfTV'](alignPool), _0x261d41;
    }
    return _0x2d789c['KrhMt'](createUnsafeBuffer, _0x29ccd6);
}
function fromStringFast(_0xd90a9c, _0x1e06b9) {
    const _0x23c5a1 = {
            'RsyJT': function (_0x1e1e6e, _0x51b1d5) {
                return _0x1e1e6e >= _0x51b1d5;
            },
            'sNmBx': function (_0x1fbd07, _0x4c2fb7) {
                return _0x1fbd07 >>> _0x4c2fb7;
            },
            'jDKWg': function (_0x219964, _0xbcdce7, _0x23aba0) {
                return _0x219964(_0xbcdce7, _0x23aba0);
            },
            'ZUyxA': function (_0x325276, _0x3e0328) {
                return _0x325276 > _0x3e0328;
            },
            'oulDN': function (_0x23deb5, _0x447c52) {
                return _0x23deb5 - _0x447c52;
            },
            'qughz': function (_0x340a8a) {
                return _0x340a8a();
            },
            'TscJz': function (_0x413cbc, _0x552fc1) {
                return _0x413cbc !== _0x552fc1;
            }
        }, _0x2115cf = _0x1e06b9['byteLength'](_0xd90a9c);
    if (_0x23c5a1['RsyJT'](_0x2115cf, _0x23c5a1['sNmBx'](Buffer['poolSize'], 0x1)))
        return _0x23c5a1['jDKWg'](createFromString, _0xd90a9c, _0x1e06b9['encodingVal']);
    if (_0x23c5a1['ZUyxA'](_0x2115cf, _0x23c5a1['oulDN'](poolSize, poolOffset)))
        _0x23c5a1['qughz'](createPool);
    let _0x5359ef = new FastBuffer(allocPool, poolOffset, _0x2115cf);
    const _0x5732c2 = _0x1e06b9['write'](_0x5359ef, _0xd90a9c, 0x0, _0x2115cf);
    return _0x23c5a1['TscJz'](_0x5732c2, _0x2115cf) && (_0x5359ef = new FastBuffer(allocPool, poolOffset, _0x5732c2)), poolOffset += _0x5732c2, _0x23c5a1['qughz'](alignPool), _0x5359ef;
}
function fromString(_0x388e0a, _0x448e74) {
    const _0x1548ff = {
        'zQypi': function (_0x35a952, _0xf685f0) {
            return _0x35a952 !== _0xf685f0;
        },
        'ydIIy': 'string',
        'IXCNI': function (_0x33ec7b, _0x12d983) {
            return _0x33ec7b === _0x12d983;
        },
        'lKkBm': function (_0x3b847a, _0x568c19) {
            return _0x3b847a === _0x568c19;
        },
        'pVzKZ': function (_0x38105f, _0x9041cc) {
            return _0x38105f(_0x9041cc);
        },
        'vZvzH': function (_0x3180c2, _0x34e1ff) {
            return _0x3180c2 === _0x34e1ff;
        },
        'YlLvx': function (_0x49f14a, _0x23b1e7, _0x59d6f9) {
            return _0x49f14a(_0x23b1e7, _0x59d6f9);
        }
    };
    let _0x309051;
    if (_0x1548ff['zQypi'](typeof _0x448e74, _0x1548ff['ydIIy']) || _0x1548ff['IXCNI'](_0x448e74['length'], 0x0)) {
        if (_0x1548ff['lKkBm'](_0x388e0a['length'], 0x0))
            return new FastBuffer();
        _0x309051 = encodingOps['utf8'], _0x448e74 = undefined;
    } else {
        _0x309051 = _0x1548ff['pVzKZ'](getEncodingOps, _0x448e74);
        if (_0x1548ff['lKkBm'](_0x309051, undefined))
            throw new ERR_UNKNOWN_ENCODING(_0x448e74);
        if (_0x1548ff['vZvzH'](_0x388e0a['length'], 0x0))
            return new FastBuffer();
    }
    return _0x1548ff['YlLvx'](fromStringFast, _0x388e0a, _0x309051);
}
function fromArrayBuffer(_0x388537, _0x2f3d54, _0x255f6c) {
    const _0x97249c = {
        'EjyTL': function (_0x3b2346, _0x293a1d) {
            return _0x3b2346 === _0x293a1d;
        },
        'ORToE': function (_0x1097bd, _0x48b50d) {
            return _0x1097bd(_0x48b50d);
        },
        'fddrn': function (_0x5edbf8, _0xe2ecc5) {
            return _0x5edbf8 - _0xe2ecc5;
        },
        'olsfF': function (_0x2e3dd2, _0x450078) {
            return _0x2e3dd2 < _0x450078;
        },
        'NjOHd': 'offset',
        'lItQC': function (_0x57425e, _0x16bcfc) {
            return _0x57425e > _0x16bcfc;
        },
        'wobLP': function (_0x435d17, _0x6a4c8c) {
            return _0x435d17 > _0x6a4c8c;
        },
        'laXzu': 'length'
    };
    if (_0x97249c['EjyTL'](_0x2f3d54, undefined))
        _0x2f3d54 = 0x0;
    else {
        _0x2f3d54 = +_0x2f3d54;
        if (_0x97249c['ORToE'](NumberIsNaN, _0x2f3d54))
            _0x2f3d54 = 0x0;
    }
    const _0x184b14 = _0x97249c['fddrn'](_0x388537['byteLength'], _0x2f3d54);
    if (_0x97249c['olsfF'](_0x184b14, 0x0))
        throw new ERR_BUFFER_OUT_OF_BOUNDS(_0x97249c['NjOHd']);
    if (_0x97249c['EjyTL'](_0x255f6c, undefined))
        _0x255f6c = _0x184b14;
    else {
        _0x255f6c = +_0x255f6c;
        if (_0x97249c['lItQC'](_0x255f6c, 0x0)) {
            if (_0x97249c['wobLP'](_0x255f6c, _0x184b14))
                throw new ERR_BUFFER_OUT_OF_BOUNDS(_0x97249c['laXzu']);
        } else
            _0x255f6c = 0x0;
    }
    return new FastBuffer(_0x388537, _0x2f3d54, _0x255f6c);
}
function fromArrayLike(_0x526316) {
    const _0x4567f8 = {
        'IQMUu': function (_0x19c74e, _0x262c19) {
            return _0x19c74e <= _0x262c19;
        },
        'cHacH': function (_0x48cd2d, _0xeedde9) {
            return _0x48cd2d < _0xeedde9;
        },
        'WASFo': function (_0x6e859f, _0x101637) {
            return _0x6e859f >>> _0x101637;
        },
        'nUcSb': function (_0x43a4a0, _0x41b2b5) {
            return _0x43a4a0 > _0x41b2b5;
        },
        'ozJxE': function (_0x4c2f8f, _0xca0aef) {
            return _0x4c2f8f - _0xca0aef;
        },
        'gPoId': function (_0x74f062) {
            return _0x74f062();
        },
        'HPIns': function (_0x597ecf, _0x401987, _0x535164, _0x155b01) {
            return _0x597ecf(_0x401987, _0x535164, _0x155b01);
        }
    };
    if (_0x4567f8['IQMUu'](_0x526316['length'], 0x0))
        return new FastBuffer();
    if (_0x4567f8['cHacH'](_0x526316['length'], _0x4567f8['WASFo'](Buffer['poolSize'], 0x1))) {
        if (_0x4567f8['nUcSb'](_0x526316['length'], _0x4567f8['ozJxE'](poolSize, poolOffset)))
            _0x4567f8['gPoId'](createPool);
        const _0x1c0560 = new FastBuffer(allocPool, poolOffset, _0x526316['length']);
        return _0x4567f8['HPIns'](TypedArrayPrototypeSet, _0x1c0560, _0x526316, 0x0), poolOffset += _0x526316['length'], _0x4567f8['gPoId'](alignPool), _0x1c0560;
    }
    return new FastBuffer(_0x526316);
}
function fromObject(_0x1765d6) {
    const _0x39d361 = {
        'gfeei': function (_0x3af546, _0x161a73) {
            return _0x3af546 !== _0x161a73;
        },
        'stGDy': function (_0x8d6e78, _0xa4112b) {
            return _0x8d6e78(_0xa4112b);
        },
        'STkQs': 'number',
        'VxRfn': function (_0x5024f5, _0x44121a) {
            return _0x5024f5 === _0x44121a;
        },
        'iCyLn': 'Buffer',
        'PwcwD': function (_0x1c25e8, _0x5b01cc) {
            return _0x1c25e8(_0x5b01cc);
        }
    };
    if (_0x39d361['gfeei'](_0x1765d6['length'], undefined) || _0x39d361['stGDy'](isAnyArrayBuffer, _0x1765d6['buffer'])) {
        if (_0x39d361['gfeei'](typeof _0x1765d6['length'], _0x39d361['STkQs']))
            return new FastBuffer();
        return _0x39d361['stGDy'](fromArrayLike, _0x1765d6);
    }
    if (_0x39d361['VxRfn'](_0x1765d6['type'], _0x39d361['iCyLn']) && _0x39d361['PwcwD'](ArrayIsArray, _0x1765d6['data']))
        return _0x39d361['PwcwD'](fromArrayLike, _0x1765d6['data']);
}
Buffer['isBuffer'] = function isBuffer(_0x30069d) {
    const _0x99e2ca = {
        'YpbCQ': function (_0x19f154, _0x55ca96) {
            return _0x19f154 instanceof _0x55ca96;
        }
    };
    return _0x99e2ca['YpbCQ'](_0x30069d, Buffer);
}, Buffer['compare'] = function compare(_0x475cc2, _0x2b837a) {
    const _0x115cc1 = {
        'fpnhg': function (_0x5b9b05, _0x338449) {
            return _0x5b9b05(_0x338449);
        },
        'UyHuZ': 'buf1',
        'EIXdi': 'Buffer',
        'nSPiz': 'Uint8Array',
        'mZXvb': function (_0x500a1d, _0x3d7227) {
            return _0x500a1d(_0x3d7227);
        },
        'rbujB': 'buf2',
        'AiOJQ': function (_0x411fe0, _0x2ca633) {
            return _0x411fe0 === _0x2ca633;
        },
        'ZTvEz': function (_0xa49b1e, _0x15b157, _0x25d428) {
            return _0xa49b1e(_0x15b157, _0x25d428);
        }
    };
    if (!_0x115cc1['fpnhg'](isUint8Array, _0x475cc2))
        throw new ERR_INVALID_ARG_TYPE(_0x115cc1['UyHuZ'], [
            _0x115cc1['EIXdi'],
            _0x115cc1['nSPiz']
        ], _0x475cc2);
    if (!_0x115cc1['mZXvb'](isUint8Array, _0x2b837a))
        throw new ERR_INVALID_ARG_TYPE(_0x115cc1['rbujB'], [
            _0x115cc1['EIXdi'],
            _0x115cc1['nSPiz']
        ], _0x2b837a);
    if (_0x115cc1['AiOJQ'](_0x475cc2, _0x2b837a))
        return 0x0;
    return _0x115cc1['ZTvEz'](_compare, _0x475cc2, _0x2b837a);
}, Buffer['isEncoding'] = function isEncoding(_0x2a53b0) {
    const _0x440ddc = {
        'YXmcn': function (_0x56f884, _0x12cd30) {
            return _0x56f884 === _0x12cd30;
        },
        'KisPn': 'string',
        'iMUPz': function (_0x14b005, _0x8be7aa) {
            return _0x14b005 !== _0x8be7aa;
        },
        'AjaGb': function (_0x51be07, _0x1676fb) {
            return _0x51be07(_0x1676fb);
        }
    };
    return _0x440ddc['YXmcn'](typeof _0x2a53b0, _0x440ddc['KisPn']) && _0x440ddc['iMUPz'](_0x2a53b0['length'], 0x0) && _0x440ddc['iMUPz'](_0x440ddc['AjaGb'](normalizeEncoding, _0x2a53b0), undefined);
}, Buffer[kIsEncodingSymbol] = Buffer['isEncoding'], Buffer['concat'] = function concat(_0x44395a, _0x49e8ee) {
    const _0x207bc0 = {
        'sfgUC': function (_0x5e629c, _0x1cb78b, _0x1fec71) {
            return _0x5e629c(_0x1cb78b, _0x1fec71);
        },
        'zxFNM': 'list',
        'JunNw': function (_0x4bcbf4, _0x3446b6) {
            return _0x4bcbf4 === _0x3446b6;
        },
        'MhlVc': function (_0x4503d3, _0xcd2431) {
            return _0x4503d3 < _0xcd2431;
        },
        'XccoY': 'length',
        'qWQPd': function (_0x15d2aa, _0x5b7a5c) {
            return _0x15d2aa < _0x5b7a5c;
        },
        'TmhDd': function (_0x135807, _0x5b5bce) {
            return _0x135807(_0x5b5bce);
        },
        'geWvs': 'Buffer',
        'RFKrC': 'Uint8Array',
        'nmjHV': function (_0x46b9e4, _0x10feff, _0x525907, _0x152fb1, _0x599553, _0x32a051) {
            return _0x46b9e4(_0x10feff, _0x525907, _0x152fb1, _0x599553, _0x32a051);
        },
        'ykySL': function (_0x2e5fb7, _0x503f60, _0x533b65, _0xd2b65b, _0x57333e) {
            return _0x2e5fb7(_0x503f60, _0x533b65, _0xd2b65b, _0x57333e);
        }
    };
    _0x207bc0['sfgUC'](validateArray, _0x44395a, _0x207bc0['zxFNM']);
    if (_0x207bc0['JunNw'](_0x44395a['length'], 0x0))
        return new FastBuffer();
    if (_0x207bc0['JunNw'](_0x49e8ee, undefined)) {
        _0x49e8ee = 0x0;
        for (let _0x2c50ca = 0x0; _0x207bc0['MhlVc'](_0x2c50ca, _0x44395a['length']); _0x2c50ca++) {
            _0x44395a[_0x2c50ca]['length'] && (_0x49e8ee += _0x44395a[_0x2c50ca]['length']);
        }
    } else
        _0x207bc0['sfgUC'](validateOffset, _0x49e8ee, _0x207bc0['XccoY']);
    const _0x380c96 = Buffer['allocUnsafe'](_0x49e8ee);
    let _0x16c4e8 = 0x0;
    for (let _0x3b0cd4 = 0x0; _0x207bc0['qWQPd'](_0x3b0cd4, _0x44395a['length']); _0x3b0cd4++) {
        const _0x22de6e = _0x44395a[_0x3b0cd4];
        if (!_0x207bc0['TmhDd'](isUint8Array, _0x22de6e))
            throw new ERR_INVALID_ARG_TYPE('list[' + _0x3b0cd4 + ']', [
                _0x207bc0['geWvs'],
                _0x207bc0['RFKrC']
            ], _0x44395a[_0x3b0cd4]);
        _0x16c4e8 += _0x207bc0['nmjHV'](_copyActual, _0x22de6e, _0x380c96, _0x16c4e8, 0x0, _0x22de6e['length']);
    }
    return _0x207bc0['qWQPd'](_0x16c4e8, _0x49e8ee) && _0x207bc0['ykySL'](TypedArrayPrototypeFill, _0x380c96, 0x0, _0x16c4e8, _0x49e8ee), _0x380c96;
};
function base64ByteLength(_0x59071c, _0x16da9e) {
    const _0x538645 = {
        'THZYx': function (_0x42bebc, _0x3e6de2) {
            return _0x42bebc === _0x3e6de2;
        },
        'XQnkx': function (_0x325b81, _0x188c40, _0x459809) {
            return _0x325b81(_0x188c40, _0x459809);
        },
        'EqfhQ': function (_0x49046d, _0x3a1f6d) {
            return _0x49046d - _0x3a1f6d;
        },
        'cmAOT': function (_0xf6be0b, _0x412adc) {
            return _0xf6be0b > _0x412adc;
        },
        'XDXhx': function (_0x221f2a, _0x1380e0, _0x267853) {
            return _0x221f2a(_0x1380e0, _0x267853);
        },
        'TWsHx': function (_0x2740c2, _0x3afd2e) {
            return _0x2740c2 - _0x3afd2e;
        },
        'QiidY': function (_0x1a3bf5, _0x39c58d) {
            return _0x1a3bf5 >>> _0x39c58d;
        },
        'abYxD': function (_0x3fa470, _0x5b69b7) {
            return _0x3fa470 * _0x5b69b7;
        }
    };
    if (_0x538645['THZYx'](_0x538645['XQnkx'](StringPrototypeCharCodeAt, _0x59071c, _0x538645['EqfhQ'](_0x16da9e, 0x1)), 0x3d))
        _0x16da9e--;
    if (_0x538645['cmAOT'](_0x16da9e, 0x1) && _0x538645['THZYx'](_0x538645['XDXhx'](StringPrototypeCharCodeAt, _0x59071c, _0x538645['TWsHx'](_0x16da9e, 0x1)), 0x3d))
        _0x16da9e--;
    return _0x538645['QiidY'](_0x538645['abYxD'](_0x16da9e, 0x3), 0x2);
}
const encodingOps = {
    'utf8': {
        'encoding': 'utf8',
        'encodingVal': encodingsMap['utf8'],
        'byteLength': byteLengthUtf8,
        'write': (_0x46719a, _0x6ee952, _0x1d2201, _0x318f8d) => _0x46719a['utf8Write'](_0x6ee952, _0x1d2201, _0x318f8d),
        'slice': (_0x149026, _0x9429e3, _0x1cf7c1) => _0x149026['utf8Slice'](_0x9429e3, _0x1cf7c1),
        'indexOf': (_0x31f5b7, _0x2a4392, _0x3d84de, _0x3788b6) => indexOfString(_0x31f5b7, _0x2a4392, _0x3d84de, encodingsMap['utf8'], _0x3788b6)
    },
    'ucs2': {
        'encoding': 'ucs2',
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x1d97de => _0x1d97de['length'] * 0x2,
        'write': (_0x437202, _0x62a1e7, _0x50b6ed, _0x1feec3) => _0x437202['ucs2Write'](_0x62a1e7, _0x50b6ed, _0x1feec3),
        'slice': (_0x57bdc9, _0x5ff511, _0x4ace5a) => _0x57bdc9['ucs2Slice'](_0x5ff511, _0x4ace5a),
        'indexOf': (_0x42b35b, _0x358de5, _0x4c15b1, _0x2ad535) => indexOfString(_0x42b35b, _0x358de5, _0x4c15b1, encodingsMap['utf16le'], _0x2ad535)
    },
    'utf16le': {
        'encoding': 'utf16le',
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x4cac32 => _0x4cac32['length'] * 0x2,
        'write': (_0x5db666, _0x28f822, _0x1b1f3d, _0x2c2795) => _0x5db666['ucs2Write'](_0x28f822, _0x1b1f3d, _0x2c2795),
        'slice': (_0x1727b4, _0x195b82, _0x4c549f) => _0x1727b4['ucs2Slice'](_0x195b82, _0x4c549f),
        'indexOf': (_0x3f4e70, _0xc0e05b, _0x550838, _0xbabd86) => indexOfString(_0x3f4e70, _0xc0e05b, _0x550838, encodingsMap['utf16le'], _0xbabd86)
    },
    'latin1': {
        'encoding': 'latin1',
        'encodingVal': encodingsMap['latin1'],
        'byteLength': _0x20d499 => _0x20d499['length'],
        'write': (_0x1a7939, _0x2b69d6, _0x28fc47, _0x1420a9) => _0x1a7939['latin1Write'](_0x2b69d6, _0x28fc47, _0x1420a9),
        'slice': (_0xc98241, _0x43f5df, _0x154a31) => _0xc98241['latin1Slice'](_0x43f5df, _0x154a31),
        'indexOf': (_0x11ed4e, _0xf4bd5d, _0x379dc6, _0x3fe625) => indexOfString(_0x11ed4e, _0xf4bd5d, _0x379dc6, encodingsMap['latin1'], _0x3fe625)
    },
    'ascii': {
        'encoding': 'ascii',
        'encodingVal': encodingsMap['ascii'],
        'byteLength': _0x543eae => _0x543eae['length'],
        'write': (_0x3f9d0f, _0x52c2b5, _0x576853, _0x2ebc5b) => _0x3f9d0f['asciiWrite'](_0x52c2b5, _0x576853, _0x2ebc5b),
        'slice': (_0x226fac, _0x4d8a44, _0x4c45d6) => _0x226fac['asciiSlice'](_0x4d8a44, _0x4c45d6),
        'indexOf': (_0x696974, _0x26198f, _0x3b0d2b, _0x146064) => indexOfBuffer(_0x696974, fromStringFast(_0x26198f, encodingOps['ascii']), _0x3b0d2b, encodingsMap['ascii'], _0x146064)
    },
    'base64': {
        'encoding': 'base64',
        'encodingVal': encodingsMap['base64'],
        'byteLength': _0x4b181b => base64ByteLength(_0x4b181b, _0x4b181b['length']),
        'write': (_0x3e626c, _0x554cd2, _0x2c6b10, _0x39f7a6) => _0x3e626c['base64Write'](_0x554cd2, _0x2c6b10, _0x39f7a6),
        'slice': (_0x38c664, _0xca4841, _0x25225a) => _0x38c664['base64Slice'](_0xca4841, _0x25225a),
        'indexOf': (_0x29db00, _0x41eb5c, _0x25cbab, _0x4f321c) => indexOfBuffer(_0x29db00, fromStringFast(_0x41eb5c, encodingOps['base64']), _0x25cbab, encodingsMap['base64'], _0x4f321c)
    },
    'base64url': {
        'encoding': 'base64url',
        'encodingVal': encodingsMap['base64url'],
        'byteLength': _0xd85fba => base64ByteLength(_0xd85fba, _0xd85fba['length']),
        'write': (_0x15468e, _0x2ec7b1, _0x8be0be, _0x1d1779) => _0x15468e['base64urlWrite'](_0x2ec7b1, _0x8be0be, _0x1d1779),
        'slice': (_0x114876, _0x1e83bf, _0x220d3c) => _0x114876['base64urlSlice'](_0x1e83bf, _0x220d3c),
        'indexOf': (_0x39a8c7, _0x18007a, _0x3a5da4, _0x2fb584) => indexOfBuffer(_0x39a8c7, fromStringFast(_0x18007a, encodingOps['base64url']), _0x3a5da4, encodingsMap['base64url'], _0x2fb584)
    },
    'hex': {
        'encoding': 'hex',
        'encodingVal': encodingsMap['hex'],
        'byteLength': _0x370603 => _0x370603['length'] >>> 0x1,
        'write': (_0x5184b1, _0x4b2b62, _0x548313, _0x21394a) => _0x5184b1['hexWrite'](_0x4b2b62, _0x548313, _0x21394a),
        'slice': (_0x401015, _0x5bb4f8, _0x8a0c5e) => _0x401015['hexSlice'](_0x5bb4f8, _0x8a0c5e),
        'indexOf': (_0x5d0606, _0x3b183e, _0x4d9254, _0x260756) => indexOfBuffer(_0x5d0606, fromStringFast(_0x3b183e, encodingOps['hex']), _0x4d9254, encodingsMap['hex'], _0x260756)
    }
};
function getEncodingOps(_0x281a35) {
    const _0xec5a6f = {
        'kFFiE': function (_0x136f7f, _0xafc126) {
            return _0x136f7f === _0xafc126;
        },
        'qbXXu': 'utf8',
        'oTkop': 'ucs2',
        'eJGiz': function (_0x4129b9, _0x296411) {
            return _0x4129b9(_0x296411);
        },
        'kVXEf': function (_0xf1c6c5, _0x163f9f) {
            return _0xf1c6c5 === _0x163f9f;
        },
        'lYCpU': function (_0x1eae48, _0x481acd) {
            return _0x1eae48 === _0x481acd;
        },
        'wfQic': 'utf-8',
        'lchNU': function (_0x2a2115, _0x4e803d) {
            return _0x2a2115 === _0x4e803d;
        },
        'ItuTV': 'ascii',
        'TiBZK': 'ucs-2',
        'XRDOu': function (_0x539850, _0x51bc21) {
            return _0x539850 === _0x51bc21;
        },
        'ysCBL': function (_0x4619bb, _0x404cb8) {
            return _0x4619bb === _0x404cb8;
        },
        'zPzQS': 'utf16le',
        'qKxOJ': function (_0x4a7436, _0x49897c) {
            return _0x4a7436 === _0x49897c;
        },
        'yvKdP': function (_0x570a51, _0x3ea090) {
            return _0x570a51(_0x3ea090);
        },
        'kYIgR': function (_0x3fbcf2, _0xe96b89) {
            return _0x3fbcf2 === _0xe96b89;
        },
        'wCoXD': 'utf-16le',
        'KPWJW': function (_0x4822e8, _0x406077) {
            return _0x4822e8(_0x406077);
        },
        'iqjpL': 'latin1',
        'cSyrw': function (_0x2d3932, _0x42da7d) {
            return _0x2d3932 === _0x42da7d;
        },
        'myeaA': 'binary',
        'ENQjd': 'base64',
        'IWQjM': function (_0x3a28cb, _0x1ff106) {
            return _0x3a28cb === _0x1ff106;
        },
        'VSsSw': function (_0x2156aa, _0x40b050) {
            return _0x2156aa === _0x40b050;
        },
        'lAkpd': function (_0x3ea7fd, _0x359acc) {
            return _0x3ea7fd === _0x359acc;
        },
        'umjhl': 'hex',
        'xAmKT': function (_0x7f3649, _0x4e959c) {
            return _0x7f3649 === _0x4e959c;
        },
        'cxtvl': 'base64url',
        'RPAtX': function (_0x407527, _0x580514) {
            return _0x407527 === _0x580514;
        },
        'OdCCo': function (_0x3e1b8d, _0x2b8f53) {
            return _0x3e1b8d(_0x2b8f53);
        }
    };
    _0x281a35 += '';
    switch (_0x281a35['length']) {
    case 0x4:
        if (_0xec5a6f['kFFiE'](_0x281a35, _0xec5a6f['qbXXu']))
            return encodingOps['utf8'];
        if (_0xec5a6f['kFFiE'](_0x281a35, _0xec5a6f['oTkop']))
            return encodingOps['ucs2'];
        _0x281a35 = _0xec5a6f['eJGiz'](StringPrototypeToLowerCase, _0x281a35);
        if (_0xec5a6f['kVXEf'](_0x281a35, _0xec5a6f['qbXXu']))
            return encodingOps['utf8'];
        if (_0xec5a6f['kVXEf'](_0x281a35, _0xec5a6f['oTkop']))
            return encodingOps['ucs2'];
        break;
    case 0x5:
        if (_0xec5a6f['lYCpU'](_0x281a35, _0xec5a6f['wfQic']))
            return encodingOps['utf8'];
        if (_0xec5a6f['lchNU'](_0x281a35, _0xec5a6f['ItuTV']))
            return encodingOps['ascii'];
        if (_0xec5a6f['lchNU'](_0x281a35, _0xec5a6f['TiBZK']))
            return encodingOps['ucs2'];
        _0x281a35 = _0xec5a6f['eJGiz'](StringPrototypeToLowerCase, _0x281a35);
        if (_0xec5a6f['XRDOu'](_0x281a35, _0xec5a6f['wfQic']))
            return encodingOps['utf8'];
        if (_0xec5a6f['XRDOu'](_0x281a35, _0xec5a6f['ItuTV']))
            return encodingOps['ascii'];
        if (_0xec5a6f['ysCBL'](_0x281a35, _0xec5a6f['TiBZK']))
            return encodingOps['ucs2'];
        break;
    case 0x7:
        if (_0xec5a6f['ysCBL'](_0x281a35, _0xec5a6f['zPzQS']) || _0xec5a6f['qKxOJ'](_0xec5a6f['yvKdP'](StringPrototypeToLowerCase, _0x281a35), _0xec5a6f['zPzQS']))
            return encodingOps['utf16le'];
        break;
    case 0x8:
        if (_0xec5a6f['kYIgR'](_0x281a35, _0xec5a6f['wCoXD']) || _0xec5a6f['kYIgR'](_0xec5a6f['KPWJW'](StringPrototypeToLowerCase, _0x281a35), _0xec5a6f['wCoXD']))
            return encodingOps['utf16le'];
        break;
    case 0x6:
        if (_0xec5a6f['kYIgR'](_0x281a35, _0xec5a6f['iqjpL']) || _0xec5a6f['cSyrw'](_0x281a35, _0xec5a6f['myeaA']))
            return encodingOps['latin1'];
        if (_0xec5a6f['cSyrw'](_0x281a35, _0xec5a6f['ENQjd']))
            return encodingOps['base64'];
        _0x281a35 = _0xec5a6f['KPWJW'](StringPrototypeToLowerCase, _0x281a35);
        if (_0xec5a6f['IWQjM'](_0x281a35, _0xec5a6f['iqjpL']) || _0xec5a6f['VSsSw'](_0x281a35, _0xec5a6f['myeaA']))
            return encodingOps['latin1'];
        if (_0xec5a6f['VSsSw'](_0x281a35, _0xec5a6f['ENQjd']))
            return encodingOps['base64'];
        break;
    case 0x3:
        if (_0xec5a6f['lAkpd'](_0x281a35, _0xec5a6f['umjhl']) || _0xec5a6f['xAmKT'](_0xec5a6f['KPWJW'](StringPrototypeToLowerCase, _0x281a35), _0xec5a6f['umjhl']))
            return encodingOps['hex'];
        break;
    case 0x9:
        if (_0xec5a6f['xAmKT'](_0x281a35, _0xec5a6f['cxtvl']) || _0xec5a6f['RPAtX'](_0xec5a6f['OdCCo'](StringPrototypeToLowerCase, _0x281a35), _0xec5a6f['cxtvl']))
            return encodingOps['base64url'];
        break;
    }
}
function byteLength(_0x4e4cd6, _0x5e7d0f) {
    const _0x38347b = {
        'XnfXy': function (_0x37cd1e, _0x20325f) {
            return _0x37cd1e !== _0x20325f;
        },
        'kxAtn': 'string',
        'QujGx': function (_0x324a89, _0x4bc8e8) {
            return _0x324a89(_0x4bc8e8);
        },
        'nuRlK': 'Buffer',
        'lCnLC': 'ArrayBuffer',
        'EzKGD': function (_0x1175f6, _0x44048b) {
            return _0x1175f6 > _0x44048b;
        },
        'GcwCb': function (_0x44bf18, _0x3723ef) {
            return _0x44bf18 === _0x3723ef;
        },
        'VBgkw': function (_0x3585c4, _0x4ef2f3) {
            return _0x3585c4 === _0x4ef2f3;
        },
        'KeWqm': function (_0xe45844, _0x461b42) {
            return _0xe45844(_0x461b42);
        }
    };
    if (_0x38347b['XnfXy'](typeof _0x4e4cd6, _0x38347b['kxAtn'])) {
        if (_0x38347b['QujGx'](isArrayBufferView, _0x4e4cd6) || _0x38347b['QujGx'](isAnyArrayBuffer, _0x4e4cd6))
            return _0x4e4cd6['byteLength'];
        throw new ERR_INVALID_ARG_TYPE(_0x38347b['kxAtn'], [
            _0x38347b['kxAtn'],
            _0x38347b['nuRlK'],
            _0x38347b['lCnLC']
        ], _0x4e4cd6);
    }
    const _0x4c474e = _0x4e4cd6['length'], _0x5f239a = _0x38347b['EzKGD'](arguments['length'], 0x2) && _0x38347b['GcwCb'](arguments[0x2], !![]);
    if (!_0x5f239a && _0x38347b['VBgkw'](_0x4c474e, 0x0))
        return 0x0;
    if (!_0x5e7d0f)
        return _0x5f239a ? -0x1 : _0x38347b['KeWqm'](byteLengthUtf8, _0x4e4cd6);
    const _0x4dba5c = _0x38347b['KeWqm'](getEncodingOps, _0x5e7d0f);
    if (_0x38347b['VBgkw'](_0x4dba5c, undefined))
        return _0x5f239a ? -0x1 : _0x38347b['KeWqm'](byteLengthUtf8, _0x4e4cd6);
    return _0x4dba5c['byteLength'](_0x4e4cd6);
}
Buffer['byteLength'] = byteLength, ObjectDefineProperty(Buffer['prototype'], 'parent', {
    'enumerable': !![],
    'get'() {
        const _0x454924 = {
            'KTopG': function (_0x1da325, _0x1ddf62) {
                return _0x1da325 instanceof _0x1ddf62;
            }
        };
        if (!_0x454924['KTopG'](this, Buffer))
            return undefined;
        return this['buffer'];
    }
}), ObjectDefineProperty(Buffer['prototype'], 'offset', {
    'enumerable': !![],
    'get'() {
        const _0xd0ae14 = {
            'QXFWl': function (_0x489593, _0x23c05b) {
                return _0x489593 instanceof _0x23c05b;
            }
        };
        if (!_0xd0ae14['QXFWl'](this, Buffer))
            return undefined;
        return this['byteOffset'];
    }
}), Buffer['prototype']['copy'] = function copy(_0x3b2a92, _0x33ecf9, _0x47a3ac, _0x475d95) {
    const _0x385e3a = {
        'TECSi': function (_0x5a6bed, _0x37b6ea, _0x512b6c, _0x258038, _0x4511c8, _0x30b79c) {
            return _0x5a6bed(_0x37b6ea, _0x512b6c, _0x258038, _0x4511c8, _0x30b79c);
        }
    };
    return _0x385e3a['TECSi'](_copy, this, _0x3b2a92, _0x33ecf9, _0x47a3ac, _0x475d95);
}, Buffer['prototype']['toString'] = function toString(_0x438d1d, _0x7ffc97, _0x210b58) {
    const _0x2c6e0b = {
        'qFtcf': function (_0x562da5, _0x3f57c5) {
            return _0x562da5 === _0x3f57c5;
        },
        'sNbiH': function (_0x513f4a, _0x232f2c) {
            return _0x513f4a <= _0x232f2c;
        },
        'IKjJL': function (_0x43d619, _0xc0f8de) {
            return _0x43d619 >= _0xc0f8de;
        },
        'YrYuf': function (_0x5babe7, _0x4179e1) {
            return _0x5babe7 > _0x4179e1;
        },
        'UkWFY': function (_0x10f9d0, _0x3c3952) {
            return _0x10f9d0(_0x3c3952);
        }
    };
    if (_0x2c6e0b['qFtcf'](arguments['length'], 0x0))
        return this['utf8Slice'](0x0, this['length']);
    const _0x45a9c9 = this['length'];
    if (_0x2c6e0b['sNbiH'](_0x7ffc97, 0x0))
        _0x7ffc97 = 0x0;
    else {
        if (_0x2c6e0b['IKjJL'](_0x7ffc97, _0x45a9c9))
            return '';
        else
            _0x7ffc97 |= 0x0;
    }
    if (_0x2c6e0b['qFtcf'](_0x210b58, undefined) || _0x2c6e0b['YrYuf'](_0x210b58, _0x45a9c9))
        _0x210b58 = _0x45a9c9;
    else
        _0x210b58 |= 0x0;
    if (_0x2c6e0b['sNbiH'](_0x210b58, _0x7ffc97))
        return '';
    if (_0x2c6e0b['qFtcf'](_0x438d1d, undefined))
        return this['utf8Slice'](_0x7ffc97, _0x210b58);
    const _0x48bc96 = _0x2c6e0b['UkWFY'](getEncodingOps, _0x438d1d);
    if (_0x2c6e0b['qFtcf'](_0x48bc96, undefined))
        throw new ERR_UNKNOWN_ENCODING(_0x438d1d);
    return _0x48bc96['slice'](this, _0x7ffc97, _0x210b58);
}, Buffer['prototype']['equals'] = function equals(_0x2f0b59) {
    const _0x3147f7 = {
        'cHqth': function (_0x509194, _0xbb1ad1) {
            return _0x509194(_0xbb1ad1);
        },
        'AICIc': 'otherBuffer',
        'SWMAr': 'Buffer',
        'tqZVy': 'Uint8Array',
        'MFDmO': function (_0x2a9d91, _0x417289) {
            return _0x2a9d91 === _0x417289;
        },
        'stZDp': function (_0x503d1a, _0x1a2457) {
            return _0x503d1a !== _0x1a2457;
        },
        'eMfAJ': function (_0x18ad3b, _0x23d5e5) {
            return _0x18ad3b === _0x23d5e5;
        },
        'oEDYx': function (_0x45718c, _0x517edb, _0x4946f8) {
            return _0x45718c(_0x517edb, _0x4946f8);
        }
    };
    if (!_0x3147f7['cHqth'](isUint8Array, _0x2f0b59))
        throw new ERR_INVALID_ARG_TYPE(_0x3147f7['AICIc'], [
            _0x3147f7['SWMAr'],
            _0x3147f7['tqZVy']
        ], _0x2f0b59);
    if (_0x3147f7['MFDmO'](this, _0x2f0b59))
        return !![];
    if (_0x3147f7['stZDp'](this['byteLength'], _0x2f0b59['byteLength']))
        return ![];
    return _0x3147f7['MFDmO'](this['byteLength'], 0x0) || _0x3147f7['eMfAJ'](_0x3147f7['oEDYx'](_compare, this, _0x2f0b59), 0x0);
};
let INSPECT_MAX_BYTES = 0x32;
Buffer['prototype'][customInspectSymbol] = function inspect(_0x4b59fb, _0x253ae3) {
    const _0x2af2f5 = {
            'hpWaj': function (_0x2e12ba, _0x25cef6, _0x170099) {
                return _0x2e12ba(_0x25cef6, _0x170099);
            },
            'mlnCZ': function (_0x5cd70c, _0x503ab4) {
                return _0x5cd70c - _0x503ab4;
            },
            'MUSkS': function (_0x965702, _0x3a7dfb) {
                return _0x965702(_0x3a7dfb);
            },
            'AvrVj': function (_0x25f3ae, _0x376755, _0x1c93ac, _0x2ffc0d) {
                return _0x25f3ae(_0x376755, _0x1c93ac, _0x2ffc0d);
            },
            'ebSbE': '$1\x20',
            'OfcCn': function (_0x5a680b, _0x134010) {
                return _0x5a680b > _0x134010;
            },
            'AuLSh': function (_0x12c29c, _0x3e059b) {
                return _0x12c29c > _0x3e059b;
            },
            'DHyLM': function (_0x59d9bc, _0x2ac1cd, _0x333b1e) {
                return _0x59d9bc(_0x2ac1cd, _0x333b1e);
            },
            'QcxzF': function (_0x11ce37, _0x41998c) {
                return _0x11ce37 !== _0x41998c;
            }
        }, _0x29a283 = INSPECT_MAX_BYTES, _0x5a2840 = _0x2af2f5['hpWaj'](MathMin, _0x29a283, this['length']), _0x596cfe = _0x2af2f5['mlnCZ'](this['length'], _0x29a283);
    let _0x3a31b1 = _0x2af2f5['MUSkS'](StringPrototypeTrim, _0x2af2f5['AvrVj'](StringPrototypeReplace, this['hexSlice'](0x0, _0x5a2840), /(.{2})/g, _0x2af2f5['ebSbE']));
    if (_0x2af2f5['OfcCn'](_0x596cfe, 0x0))
        _0x3a31b1 += '\x20...\x20' + _0x596cfe + '\x20more\x20byte' + (_0x2af2f5['AuLSh'](_0x596cfe, 0x1) ? 's' : '');
    if (_0x253ae3) {
        let _0x44f503 = ![];
        const _0x21ee6f = _0x253ae3['showHidden'] ? ALL_PROPERTIES : ONLY_ENUMERABLE, _0x5e5406 = _0x2af2f5['MUSkS'](ObjectCreate, null);
        _0x2af2f5['hpWaj'](ArrayPrototypeForEach, _0x2af2f5['DHyLM'](getOwnNonIndexProperties, this, _0x21ee6f), _0x30b97d => {
            _0x44f503 = !![], _0x5e5406[_0x30b97d] = this[_0x30b97d];
        });
        if (_0x44f503) {
            if (_0x2af2f5['QcxzF'](this['length'], 0x0))
                _0x3a31b1 += ',\x20';
            _0x3a31b1 += _0x2af2f5['AvrVj'](StringPrototypeSlice, _0x2af2f5['DHyLM'](utilInspect, _0x5e5406, {
                ..._0x253ae3,
                'breakLength': Infinity,
                'compact': !![]
            }), 0x1b, -0x2);
        }
    }
    return '<' + this['constructor']['name'] + '\x20' + _0x3a31b1 + '>';
}, Buffer['prototype']['inspect'] = Buffer['prototype'][customInspectSymbol], Buffer['prototype']['compare'] = function compare(_0x551b4e, _0x4f66f, _0x476b35, _0x2ec4c6, _0x310b78) {
    const _0x8f0b75 = {
            'tiMGa': '0|7|6|3|1|2|8|5|4',
            'yccKq': function (_0x5e20b0, _0x471825) {
                return _0x5e20b0(_0x471825);
            },
            'HbbuN': 'target',
            'lScEv': 'Buffer',
            'LYdIr': 'Uint8Array',
            'wbjJh': function (_0x4717bd, _0x1ba4b1) {
                return _0x4717bd === _0x1ba4b1;
            },
            'UNkEH': function (_0x32e0c4, _0x5a52ae, _0x312b55) {
                return _0x32e0c4(_0x5a52ae, _0x312b55);
            },
            'KJPbT': 'sourceStart',
            'GwTGp': function (_0xacf59c, _0x3c2aae, _0x5f5b1e, _0x546cc0, _0x15043a) {
                return _0xacf59c(_0x3c2aae, _0x5f5b1e, _0x546cc0, _0x15043a);
            },
            'fvmnH': 'sourceEnd',
            'wUIxc': function (_0x40e3aa, _0x4a3c5c, _0x1c455e, _0x57109d, _0x57ab5f) {
                return _0x40e3aa(_0x4a3c5c, _0x1c455e, _0x57109d, _0x57ab5f);
            },
            'zNPbo': 'targetEnd',
            'qKJce': function (_0x5a4d19, _0x5f10ec, _0x5c9f83, _0x45a73a, _0x449285, _0x5b43da, _0x551d90) {
                return _0x5a4d19(_0x5f10ec, _0x5c9f83, _0x45a73a, _0x449285, _0x5b43da, _0x551d90);
            },
            'tvXMQ': function (_0x1049e8, _0x5cf564) {
                return _0x1049e8 >= _0x5cf564;
            },
            'XYRWp': 'targetStart',
            'PrvTd': function (_0x5690fe, _0x3e625f) {
                return _0x5690fe >= _0x3e625f;
            },
            'YIpqI': function (_0x434d36, _0x55fc95) {
                return _0x434d36 >= _0x55fc95;
            }
        }, _0x9b5a8c = _0x8f0b75['tiMGa']['split']('|');
    let _0x45eb2f = 0x0;
    while (!![]) {
        switch (_0x9b5a8c[_0x45eb2f++]) {
        case '0':
            if (!_0x8f0b75['yccKq'](isUint8Array, _0x551b4e))
                throw new ERR_INVALID_ARG_TYPE(_0x8f0b75['HbbuN'], [
                    _0x8f0b75['lScEv'],
                    _0x8f0b75['LYdIr']
                ], _0x551b4e);
            continue;
        case '1':
            if (_0x8f0b75['wbjJh'](_0x2ec4c6, undefined))
                _0x2ec4c6 = 0x0;
            else
                _0x8f0b75['UNkEH'](validateOffset, _0x2ec4c6, _0x8f0b75['KJPbT']);
            continue;
        case '2':
            if (_0x8f0b75['wbjJh'](_0x310b78, undefined))
                _0x310b78 = this['length'];
            else
                _0x8f0b75['GwTGp'](validateOffset, _0x310b78, _0x8f0b75['fvmnH'], 0x0, this['length']);
            continue;
        case '3':
            if (_0x8f0b75['wbjJh'](_0x476b35, undefined))
                _0x476b35 = _0x551b4e['length'];
            else
                _0x8f0b75['wUIxc'](validateOffset, _0x476b35, _0x8f0b75['zNPbo'], 0x0, _0x551b4e['length']);
            continue;
        case '4':
            return _0x8f0b75['qKJce'](compareOffset, this, _0x551b4e, _0x4f66f, _0x2ec4c6, _0x476b35, _0x310b78);
        case '5':
            if (_0x8f0b75['tvXMQ'](_0x4f66f, _0x476b35))
                return 0x1;
            continue;
        case '6':
            if (_0x8f0b75['wbjJh'](_0x4f66f, undefined))
                _0x4f66f = 0x0;
            else
                _0x8f0b75['UNkEH'](validateOffset, _0x4f66f, _0x8f0b75['XYRWp']);
            continue;
        case '7':
            if (_0x8f0b75['wbjJh'](arguments['length'], 0x1))
                return _0x8f0b75['UNkEH'](_compare, this, _0x551b4e);
            continue;
        case '8':
            if (_0x8f0b75['PrvTd'](_0x2ec4c6, _0x310b78))
                return _0x8f0b75['YIpqI'](_0x4f66f, _0x476b35) ? 0x0 : -0x1;
            continue;
        }
        break;
    }
};
function bidirectionalIndexOf(_0x4f352a, _0x2f9cde, _0x23aedd, _0x50b725, _0x4be510) {
    const _0xe8715f = {
        'tqlQX': function (_0x4eff37, _0x5143d9) {
            return _0x4eff37(_0x5143d9);
        },
        'NihKa': function (_0x281e2f, _0x293983) {
            return _0x281e2f === _0x293983;
        },
        'baRve': 'string',
        'dZsoY': function (_0x5c0450, _0x3bb206) {
            return _0x5c0450 > _0x3bb206;
        },
        'vIDcY': function (_0x1d7cda, _0x108fd7) {
            return _0x1d7cda < _0x108fd7;
        },
        'wIGDI': 'number',
        'bBodm': function (_0x439f1d, _0x3ce249, _0xaf4171, _0x1a38a3, _0x101f43) {
            return _0x439f1d(_0x3ce249, _0xaf4171, _0x1a38a3, _0x101f43);
        },
        'odFYD': function (_0x5403db, _0x3f01ce) {
            return _0x5403db >>> _0x3f01ce;
        },
        'PHdWa': function (_0x55e71c, _0x17ed79) {
            return _0x55e71c === _0x17ed79;
        },
        'ftVKw': function (_0x268155, _0x6ebea5) {
            return _0x268155 === _0x6ebea5;
        },
        'vehbh': function (_0x23f408, _0x531d4e) {
            return _0x23f408(_0x531d4e);
        },
        'ngpbA': function (_0x55349a, _0x2ac123) {
            return _0x55349a === _0x2ac123;
        },
        'dbiSa': function (_0xf67b19, _0x14dee2, _0x174eff, _0xd4e7fc, _0x5699d3, _0x19d24a) {
            return _0xf67b19(_0x14dee2, _0x174eff, _0xd4e7fc, _0x5699d3, _0x19d24a);
        },
        'lLsMe': 'value',
        'NxCxs': 'Buffer',
        'WKrMr': 'Uint8Array'
    };
    _0xe8715f['tqlQX'](validateBuffer, _0x4f352a);
    if (_0xe8715f['NihKa'](typeof _0x23aedd, _0xe8715f['baRve']))
        _0x50b725 = _0x23aedd, _0x23aedd = undefined;
    else {
        if (_0xe8715f['dZsoY'](_0x23aedd, 0x7fffffff))
            _0x23aedd = 0x7fffffff;
        else
            _0xe8715f['vIDcY'](_0x23aedd, -0x80000000) && (_0x23aedd = -0x80000000);
    }
    _0x23aedd = +_0x23aedd;
    _0xe8715f['tqlQX'](NumberIsNaN, _0x23aedd) && (_0x23aedd = _0x4be510 ? 0x0 : _0x4f352a['length'] || _0x4f352a['byteLength']);
    _0x4be510 = !!_0x4be510;
    if (_0xe8715f['NihKa'](typeof _0x2f9cde, _0xe8715f['wIGDI']))
        return _0xe8715f['bBodm'](indexOfNumber, _0x4f352a, _0xe8715f['odFYD'](_0x2f9cde, 0x0), _0x23aedd, _0x4be510);
    let _0x482637;
    if (_0xe8715f['PHdWa'](_0x50b725, undefined))
        _0x482637 = encodingOps['utf8'];
    else
        _0x482637 = _0xe8715f['tqlQX'](getEncodingOps, _0x50b725);
    if (_0xe8715f['ftVKw'](typeof _0x2f9cde, _0xe8715f['baRve'])) {
        if (_0xe8715f['ftVKw'](_0x482637, undefined))
            throw new ERR_UNKNOWN_ENCODING(_0x50b725);
        return _0x482637['indexOf'](_0x4f352a, _0x2f9cde, _0x23aedd, _0x4be510);
    }
    if (_0xe8715f['vehbh'](isUint8Array, _0x2f9cde)) {
        const _0x23daf3 = _0xe8715f['ngpbA'](_0x482637, undefined) ? encodingsMap['utf8'] : _0x482637['encodingVal'];
        return _0xe8715f['dbiSa'](indexOfBuffer, _0x4f352a, _0x2f9cde, _0x23aedd, _0x23daf3, _0x4be510);
    }
    throw new ERR_INVALID_ARG_TYPE(_0xe8715f['lLsMe'], [
        _0xe8715f['wIGDI'],
        _0xe8715f['baRve'],
        _0xe8715f['NxCxs'],
        _0xe8715f['WKrMr']
    ], _0x2f9cde);
}
Buffer['prototype']['indexOf'] = function indexOf(_0x2c9174, _0x38bb5f, _0x14bc33) {
    const _0x26ec40 = {
        'wxNvW': function (_0x5ea71a, _0x58794f, _0xe5a010, _0x1fd653, _0x63541e, _0x4bb09f) {
            return _0x5ea71a(_0x58794f, _0xe5a010, _0x1fd653, _0x63541e, _0x4bb09f);
        }
    };
    return _0x26ec40['wxNvW'](bidirectionalIndexOf, this, _0x2c9174, _0x38bb5f, _0x14bc33, !![]);
}, Buffer['prototype']['lastIndexOf'] = function lastIndexOf(_0xf7be0d, _0x484505, _0x55b986) {
    const _0x1d3053 = {
        'ZCmDk': function (_0x1398eb, _0x27d32f, _0x490703, _0x2d33bb, _0x5e156f, _0xe5f20b) {
            return _0x1398eb(_0x27d32f, _0x490703, _0x2d33bb, _0x5e156f, _0xe5f20b);
        }
    };
    return _0x1d3053['ZCmDk'](bidirectionalIndexOf, this, _0xf7be0d, _0x484505, _0x55b986, ![]);
}, Buffer['prototype']['includes'] = function includes(_0x78663f, _0x4ba580, _0x34dc91) {
    const _0x510613 = {
        'MMhjn': function (_0x1c448c, _0x4bf30e) {
            return _0x1c448c !== _0x4bf30e;
        }
    };
    return _0x510613['MMhjn'](this['indexOf'](_0x78663f, _0x4ba580, _0x34dc91), -0x1);
}, Buffer['prototype']['fill'] = function fill(_0x4f3c0a, _0xa1a196, _0xf7bcae, _0x4d8b92) {
    const _0x4769a3 = {
        'owtTe': function (_0xcf1b67, _0x478a6b, _0x2100af, _0x2dd1f1, _0x18850d, _0x22418d) {
            return _0xcf1b67(_0x478a6b, _0x2100af, _0x2dd1f1, _0x18850d, _0x22418d);
        }
    };
    return _0x4769a3['owtTe'](_fill, this, _0x4f3c0a, _0xa1a196, _0xf7bcae, _0x4d8b92);
};
function _fill(_0x1c00f6, _0x241a70, _0x4795ba, _0x328985, _0x53ddda) {
    const _0x4e4247 = {
        'vQpbY': function (_0x235ffb, _0x5c4f0e) {
            return _0x235ffb === _0x5c4f0e;
        },
        'DJPSO': 'string',
        'exRAx': function (_0x1502b7, _0x94232f) {
            return _0x1502b7 === _0x94232f;
        },
        'Krjdd': function (_0x198e87, _0x3f3de9) {
            return _0x198e87 === _0x3f3de9;
        },
        'PILGe': function (_0x4d3704, _0x5b2ba0) {
            return _0x4d3704 === _0x5b2ba0;
        },
        'DsMIf': function (_0x308fed, _0x12c735) {
            return _0x308fed(_0x12c735);
        },
        'uBQJD': function (_0x47e28a, _0x5ea42b, _0x14d2f8) {
            return _0x47e28a(_0x5ea42b, _0x14d2f8);
        },
        'vGWZW': 'encoding',
        'fTyCC': function (_0x12ec5f, _0x5da447) {
            return _0x12ec5f === _0x5da447;
        },
        'SpgbU': function (_0x4ff528, _0x2195fc) {
            return _0x4ff528 === _0x2195fc;
        },
        'saXgi': 'utf8',
        'MkICc': function (_0x1b2f23, _0xeaec73, _0x297f9d) {
            return _0x1b2f23(_0xeaec73, _0x297f9d);
        },
        'EJCqK': function (_0x29dffb, _0x3e80b8) {
            return _0x29dffb < _0x3e80b8;
        },
        'GUJKk': 'latin1',
        'LvBef': function (_0x54646f, _0x3dbfbe, _0x435112) {
            return _0x54646f(_0x3dbfbe, _0x435112);
        },
        'HjNXr': 'offset',
        'yrBVn': function (_0x35f375, _0x4978cd, _0x514393, _0xbcd50a, _0x45cdc6) {
            return _0x35f375(_0x4978cd, _0x514393, _0xbcd50a, _0x45cdc6);
        },
        'xvegx': 'end',
        'kUmWG': function (_0x141854, _0x26b195) {
            return _0x141854 >= _0x26b195;
        },
        'OPKeW': 'number',
        'PNtHu': function (_0x5c732e, _0x49daf0) {
            return _0x5c732e - _0x49daf0;
        },
        'jEeIp': function (_0x94e3bd, _0x44ac97) {
            return _0x94e3bd > _0x44ac97;
        },
        'HRekn': function (_0x115530, _0x437dde) {
            return _0x115530 > _0x437dde;
        },
        'mvqXV': function (_0x9f4eb3, _0x1a7f07) {
            return _0x9f4eb3 + _0x1a7f07;
        },
        'IWjPP': function (_0x5dc6af, _0xe582f0, _0x19a241, _0x75b0d9, _0x496d82) {
            return _0x5dc6af(_0xe582f0, _0x19a241, _0x75b0d9, _0x496d82);
        },
        'drSfF': function (_0x14dfe0, _0x2575a8, _0xe3b2ac, _0x3d1aeb, _0x3bfc2e, _0x5ec656) {
            return _0x14dfe0(_0x2575a8, _0xe3b2ac, _0x3d1aeb, _0x3bfc2e, _0x5ec656);
        },
        'YKkWT': 'value'
    };
    if (_0x4e4247['vQpbY'](typeof _0x241a70, _0x4e4247['DJPSO'])) {
        if (_0x4e4247['exRAx'](_0x4795ba, undefined) || _0x4e4247['Krjdd'](typeof _0x4795ba, _0x4e4247['DJPSO']))
            _0x53ddda = _0x4795ba, _0x4795ba = 0x0, _0x328985 = _0x1c00f6['length'];
        else
            _0x4e4247['PILGe'](typeof _0x328985, _0x4e4247['DJPSO']) && (_0x53ddda = _0x328985, _0x328985 = _0x1c00f6['length']);
        const _0x42838f = _0x4e4247['DsMIf'](normalizeEncoding, _0x53ddda);
        if (_0x4e4247['PILGe'](_0x42838f, undefined)) {
            _0x4e4247['uBQJD'](validateString, _0x53ddda, _0x4e4247['vGWZW']);
            throw new ERR_UNKNOWN_ENCODING(_0x53ddda);
        }
        if (_0x4e4247['PILGe'](_0x241a70['length'], 0x0))
            _0x241a70 = 0x0;
        else {
            if (_0x4e4247['fTyCC'](_0x241a70['length'], 0x1)) {
                if (_0x4e4247['SpgbU'](_0x42838f, _0x4e4247['saXgi'])) {
                    const _0x57a499 = _0x4e4247['MkICc'](StringPrototypeCharCodeAt, _0x241a70, 0x0);
                    _0x4e4247['EJCqK'](_0x57a499, 0x80) && (_0x241a70 = _0x57a499);
                } else
                    _0x4e4247['SpgbU'](_0x42838f, _0x4e4247['GUJKk']) && (_0x241a70 = _0x4e4247['LvBef'](StringPrototypeCharCodeAt, _0x241a70, 0x0));
            }
        }
    } else
        _0x53ddda = undefined;
    if (_0x4e4247['SpgbU'](_0x4795ba, undefined))
        _0x4795ba = 0x0, _0x328985 = _0x1c00f6['length'];
    else {
        _0x4e4247['LvBef'](validateOffset, _0x4795ba, _0x4e4247['HjNXr']);
        _0x4e4247['SpgbU'](_0x328985, undefined) ? _0x328985 = _0x1c00f6['length'] : _0x4e4247['yrBVn'](validateOffset, _0x328985, _0x4e4247['xvegx'], 0x0, _0x1c00f6['length']);
        if (_0x4e4247['kUmWG'](_0x4795ba, _0x328985))
            return _0x1c00f6;
    }
    if (_0x4e4247['SpgbU'](typeof _0x241a70, _0x4e4247['OPKeW'])) {
        const _0x2a22d3 = _0x4e4247['DsMIf'](TypedArrayPrototypeGetByteLength, _0x1c00f6), _0x1c434d = _0x4e4247['PNtHu'](_0x328985, _0x4795ba);
        if (_0x4e4247['jEeIp'](_0x4795ba, _0x328985) || _0x4e4247['HRekn'](_0x4e4247['mvqXV'](_0x1c434d, _0x4795ba), _0x2a22d3))
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        _0x4e4247['IWjPP'](TypedArrayPrototypeFill, _0x1c00f6, _0x241a70, _0x4795ba, _0x328985);
    } else {
        const _0x1e421f = _0x4e4247['drSfF'](bindingFill, _0x1c00f6, _0x241a70, _0x4795ba, _0x328985, _0x53ddda);
        if (_0x4e4247['EJCqK'](_0x1e421f, 0x0)) {
            if (_0x4e4247['SpgbU'](_0x1e421f, -0x1))
                throw new ERR_INVALID_ARG_VALUE(_0x4e4247['YKkWT'], _0x241a70);
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        }
    }
    return _0x1c00f6;
}
Buffer['prototype']['write'] = function write(_0x444db5, _0x7b40e, _0x185bd4, _0x3edf39) {
    const _0x373b42 = {
        'jAIHF': function (_0x6c14, _0x1b5514) {
            return _0x6c14 === _0x1b5514;
        },
        'PxlrT': function (_0x358638, _0x293ced) {
            return _0x358638 === _0x293ced;
        },
        'LDosx': 'string',
        'UAqeB': function (_0xf9c843, _0x5d89fa, _0x667e0c, _0x23e878, _0x24a975) {
            return _0xf9c843(_0x5d89fa, _0x667e0c, _0x23e878, _0x24a975);
        },
        'sNfcC': 'offset',
        'LjAUx': function (_0x27d85d, _0x276336) {
            return _0x27d85d - _0x276336;
        },
        'iFgkC': function (_0x410e26, _0x54c4e5) {
            return _0x410e26 === _0x54c4e5;
        },
        'zAlNp': function (_0x251e4a, _0x3ca42f) {
            return _0x251e4a === _0x3ca42f;
        },
        'qnUuv': 'length',
        'GIXJd': function (_0x4f3dd4, _0x10baa9) {
            return _0x4f3dd4 > _0x10baa9;
        },
        'ejugV': function (_0x56b0f2, _0x5cf171) {
            return _0x56b0f2(_0x5cf171);
        },
        'iZjGk': function (_0x13244b, _0x554d08) {
            return _0x13244b === _0x554d08;
        }
    };
    if (_0x373b42['jAIHF'](_0x7b40e, undefined))
        return this['utf8Write'](_0x444db5, 0x0, this['length']);
    if (_0x373b42['PxlrT'](_0x185bd4, undefined) && _0x373b42['PxlrT'](typeof _0x7b40e, _0x373b42['LDosx']))
        _0x3edf39 = _0x7b40e, _0x185bd4 = this['length'], _0x7b40e = 0x0;
    else {
        _0x373b42['UAqeB'](validateOffset, _0x7b40e, _0x373b42['sNfcC'], 0x0, this['length']);
        const _0x5e5671 = _0x373b42['LjAUx'](this['length'], _0x7b40e);
        if (_0x373b42['iFgkC'](_0x185bd4, undefined))
            _0x185bd4 = _0x5e5671;
        else {
            if (_0x373b42['zAlNp'](typeof _0x185bd4, _0x373b42['LDosx']))
                _0x3edf39 = _0x185bd4, _0x185bd4 = _0x5e5671;
            else {
                _0x373b42['UAqeB'](validateOffset, _0x185bd4, _0x373b42['qnUuv'], 0x0, this['length']);
                if (_0x373b42['GIXJd'](_0x185bd4, _0x5e5671))
                    _0x185bd4 = _0x5e5671;
            }
        }
    }
    if (!_0x3edf39)
        return this['utf8Write'](_0x444db5, _0x7b40e, _0x185bd4);
    const _0x4f89fe = _0x373b42['ejugV'](getEncodingOps, _0x3edf39);
    if (_0x373b42['iZjGk'](_0x4f89fe, undefined))
        throw new ERR_UNKNOWN_ENCODING(_0x3edf39);
    return _0x4f89fe['write'](this, _0x444db5, _0x7b40e, _0x185bd4);
}, Buffer['prototype']['toJSON'] = function toJSON() {
    const _0x559d8c = {
        'IrRVa': function (_0x5e5c5a, _0x48accc) {
            return _0x5e5c5a > _0x48accc;
        },
        'TIcKA': function (_0x1c8506, _0x57a6dd) {
            return _0x1c8506 < _0x57a6dd;
        },
        'bHuWL': 'Buffer'
    };
    if (_0x559d8c['IrRVa'](this['length'], 0x0)) {
        const _0x3333bc = new Array(this['length']);
        for (let _0x398fcf = 0x0; _0x559d8c['TIcKA'](_0x398fcf, this['length']); ++_0x398fcf)
            _0x3333bc[_0x398fcf] = this[_0x398fcf];
        return {
            'type': _0x559d8c['bHuWL'],
            'data': _0x3333bc
        };
    }
    return {
        'type': _0x559d8c['bHuWL'],
        'data': []
    };
};
function adjustOffset(_0xf40809, _0x4b49d8) {
    const _0xd2a2ce = {
            'niUsY': '3|2|0|4|1',
            'moeTs': function (_0x481ce9, _0x2f4c49) {
                return _0x481ce9 < _0x2f4c49;
            },
            'GzpGA': function (_0x57e77e, _0x3caefe) {
                return _0x57e77e > _0x3caefe;
            },
            'pOimq': function (_0x20283f, _0x4a56a0) {
                return _0x20283f(_0x4a56a0);
            },
            'entJn': function (_0x4480d5, _0x49054c) {
                return _0x4480d5 === _0x49054c;
            },
            'gOaQL': function (_0x2b80c9, _0xbc76bb) {
                return _0x2b80c9(_0xbc76bb);
            },
            'frWeB': function (_0x14fc63, _0x3f1566) {
                return _0x14fc63 < _0x3f1566;
            }
        }, _0x5ad4f9 = _0xd2a2ce['niUsY']['split']('|');
    let _0x5d12b6 = 0x0;
    while (!![]) {
        switch (_0x5ad4f9[_0x5d12b6++]) {
        case '0':
            if (_0xd2a2ce['moeTs'](_0xf40809, 0x0))
                return _0xf40809 += _0x4b49d8, _0xd2a2ce['GzpGA'](_0xf40809, 0x0) ? _0xf40809 : 0x0;
            continue;
        case '1':
            return _0xd2a2ce['pOimq'](NumberIsNaN, _0xf40809) ? 0x0 : _0x4b49d8;
        case '2':
            if (_0xd2a2ce['entJn'](_0xf40809, 0x0))
                return 0x0;
            continue;
        case '3':
            _0xf40809 = _0xd2a2ce['gOaQL'](MathTrunc, _0xf40809);
            continue;
        case '4':
            if (_0xd2a2ce['frWeB'](_0xf40809, _0x4b49d8))
                return _0xf40809;
            continue;
        }
        break;
    }
}
Buffer['prototype']['slice'] = function slice(_0xa455c7, _0x5528af) {
    const _0x14e255 = {
            'XbHya': function (_0x1769ea, _0x15c111, _0x2faa66) {
                return _0x1769ea(_0x15c111, _0x2faa66);
            },
            'KFIhM': function (_0xdde643, _0x493779) {
                return _0xdde643 !== _0x493779;
            },
            'MFkZA': function (_0x104e49, _0x315b9e) {
                return _0x104e49 > _0x315b9e;
            },
            'sNHAX': function (_0x2ea163, _0x18f987) {
                return _0x2ea163 - _0x18f987;
            },
            'XhpUq': function (_0x2ce4b0, _0x45d13c) {
                return _0x2ce4b0 + _0x45d13c;
            }
        }, _0x2435ad = this['length'];
    _0xa455c7 = _0x14e255['XbHya'](adjustOffset, _0xa455c7, _0x2435ad), _0x5528af = _0x14e255['KFIhM'](_0x5528af, undefined) ? _0x14e255['XbHya'](adjustOffset, _0x5528af, _0x2435ad) : _0x2435ad;
    const _0x4442ab = _0x14e255['MFkZA'](_0x5528af, _0xa455c7) ? _0x14e255['sNHAX'](_0x5528af, _0xa455c7) : 0x0;
    return new FastBuffer(this['buffer'], _0x14e255['XhpUq'](this['byteOffset'], _0xa455c7), _0x4442ab);
};
function swap(_0x2e47ce, _0x1bb6b5, _0xd8b877) {
    const _0x16fabc = _0x2e47ce[_0x1bb6b5];
    _0x2e47ce[_0x1bb6b5] = _0x2e47ce[_0xd8b877], _0x2e47ce[_0xd8b877] = _0x16fabc;
}
Buffer['prototype']['swap16'] = function swap16() {
    const _0x3cd9e4 = {
            'iymSN': function (_0x10d60f, _0x15d287) {
                return _0x10d60f !== _0x15d287;
            },
            'LHUSR': function (_0x3865f4, _0x2b708a) {
                return _0x3865f4 % _0x2b708a;
            },
            'QArOJ': '16-bits',
            'RdJLB': function (_0x203fa8, _0x258b94) {
                return _0x203fa8 < _0x258b94;
            },
            'nKBXh': function (_0x5a0b15, _0x12ba0b, _0x5284c8, _0x55f93d) {
                return _0x5a0b15(_0x12ba0b, _0x5284c8, _0x55f93d);
            },
            'ErDgq': function (_0x29d634, _0x2cb704) {
                return _0x29d634 + _0x2cb704;
            },
            'rrehc': function (_0xd1102e, _0x603531) {
                return _0xd1102e(_0x603531);
            }
        }, _0x400aef = this['length'];
    if (_0x3cd9e4['iymSN'](_0x3cd9e4['LHUSR'](_0x400aef, 0x2), 0x0))
        throw new ERR_INVALID_BUFFER_SIZE(_0x3cd9e4['QArOJ']);
    if (_0x3cd9e4['RdJLB'](_0x400aef, 0x80)) {
        for (let _0x1e75bb = 0x0; _0x3cd9e4['RdJLB'](_0x1e75bb, _0x400aef); _0x1e75bb += 0x2)
            _0x3cd9e4['nKBXh'](swap, this, _0x1e75bb, _0x3cd9e4['ErDgq'](_0x1e75bb, 0x1));
        return this;
    }
    return _0x3cd9e4['rrehc'](_swap16, this);
}, Buffer['prototype']['swap32'] = function swap32() {
    const _0x339802 = {
            'spTjZ': function (_0x367bbe, _0x176863) {
                return _0x367bbe !== _0x176863;
            },
            'PgHgO': function (_0x3dbe0b, _0x4e36d9) {
                return _0x3dbe0b % _0x4e36d9;
            },
            'HTYVr': '32-bits',
            'nLAjk': function (_0x54ce06, _0xfde955) {
                return _0x54ce06 < _0xfde955;
            },
            'odsUn': function (_0x561a49, _0x3f2dab, _0xe21993, _0x463b0c) {
                return _0x561a49(_0x3f2dab, _0xe21993, _0x463b0c);
            },
            'aiiTr': function (_0x1a23a8, _0x2c9f4e) {
                return _0x1a23a8 + _0x2c9f4e;
            },
            'lXvJJ': function (_0x3f4ab3, _0x16a24a, _0x30a2db, _0x4b0c92) {
                return _0x3f4ab3(_0x16a24a, _0x30a2db, _0x4b0c92);
            },
            'ZnUoQ': function (_0x1d9068, _0x3e6e05) {
                return _0x1d9068 + _0x3e6e05;
            },
            'lKcGm': function (_0xfdd179, _0x5dadff) {
                return _0xfdd179 + _0x5dadff;
            },
            'ZHKym': function (_0x4341e9, _0x4ec7ba) {
                return _0x4341e9(_0x4ec7ba);
            }
        }, _0x135c11 = this['length'];
    if (_0x339802['spTjZ'](_0x339802['PgHgO'](_0x135c11, 0x4), 0x0))
        throw new ERR_INVALID_BUFFER_SIZE(_0x339802['HTYVr']);
    if (_0x339802['nLAjk'](_0x135c11, 0xc0)) {
        for (let _0xcae7db = 0x0; _0x339802['nLAjk'](_0xcae7db, _0x135c11); _0xcae7db += 0x4) {
            _0x339802['odsUn'](swap, this, _0xcae7db, _0x339802['aiiTr'](_0xcae7db, 0x3)), _0x339802['lXvJJ'](swap, this, _0x339802['ZnUoQ'](_0xcae7db, 0x1), _0x339802['lKcGm'](_0xcae7db, 0x2));
        }
        return this;
    }
    return _0x339802['ZHKym'](_swap32, this);
}, Buffer['prototype']['swap64'] = function swap64() {
    const _0x1e5240 = {
            'AitUV': function (_0x299b19, _0x5b18c8) {
                return _0x299b19 !== _0x5b18c8;
            },
            'PLFOm': function (_0x20fe6d, _0x3f30e2) {
                return _0x20fe6d % _0x3f30e2;
            },
            'zMrUM': '64-bits',
            'CCPET': function (_0x49c5ca, _0xec6fbf) {
                return _0x49c5ca < _0xec6fbf;
            },
            'NTKvl': function (_0x4af8b4, _0x35258e) {
                return _0x4af8b4 < _0x35258e;
            },
            'jqAZx': function (_0x49aafb, _0x533842, _0x1366f6, _0xf92648) {
                return _0x49aafb(_0x533842, _0x1366f6, _0xf92648);
            },
            'AZjxD': function (_0x2ebf3e, _0x3b0f65) {
                return _0x2ebf3e + _0x3b0f65;
            },
            'htucT': function (_0x4f9e3c, _0x2ee792, _0x94ad97, _0x5d6487) {
                return _0x4f9e3c(_0x2ee792, _0x94ad97, _0x5d6487);
            },
            'KbTDm': function (_0x5a7bf0, _0x4cd4f4) {
                return _0x5a7bf0 + _0x4cd4f4;
            },
            'lzZTe': function (_0x2ff758, _0x40df8e) {
                return _0x2ff758 + _0x40df8e;
            },
            'klAdG': function (_0x3a7bd1, _0xe4714c) {
                return _0x3a7bd1(_0xe4714c);
            }
        }, _0x16c632 = this['length'];
    if (_0x1e5240['AitUV'](_0x1e5240['PLFOm'](_0x16c632, 0x8), 0x0))
        throw new ERR_INVALID_BUFFER_SIZE(_0x1e5240['zMrUM']);
    if (_0x1e5240['CCPET'](_0x16c632, 0xc0)) {
        for (let _0x48aadc = 0x0; _0x1e5240['NTKvl'](_0x48aadc, _0x16c632); _0x48aadc += 0x8) {
            _0x1e5240['jqAZx'](swap, this, _0x48aadc, _0x1e5240['AZjxD'](_0x48aadc, 0x7)), _0x1e5240['htucT'](swap, this, _0x1e5240['AZjxD'](_0x48aadc, 0x1), _0x1e5240['KbTDm'](_0x48aadc, 0x6)), _0x1e5240['htucT'](swap, this, _0x1e5240['lzZTe'](_0x48aadc, 0x2), _0x1e5240['lzZTe'](_0x48aadc, 0x5)), _0x1e5240['htucT'](swap, this, _0x1e5240['lzZTe'](_0x48aadc, 0x3), _0x1e5240['lzZTe'](_0x48aadc, 0x4));
        }
        return this;
    }
    return _0x1e5240['klAdG'](_swap64, this);
}, Buffer['prototype']['toLocaleString'] = Buffer['prototype']['toString'];
let transcode;
if (internalBinding('config')['hasIntl']) {
    const {
        icuErrName,
        transcode: _transcode
    } = internalBinding('icu');
    transcode = function transcode(_0x813c58, _0x5809f9, _0x24dd32) {
        const _0x3ea506 = {
            'EJGhg': function (_0x3aea72, _0x2673d7) {
                return _0x3aea72(_0x2673d7);
            },
            'uTJaC': 'source',
            'qZFJb': 'Buffer',
            'aqGVJ': 'Uint8Array',
            'nOjIK': function (_0x5f042c, _0x3067f2) {
                return _0x5f042c === _0x3067f2;
            },
            'HCNeM': function (_0x53cc2a, _0x4cf5dc) {
                return _0x53cc2a(_0x4cf5dc);
            },
            'AMWMG': function (_0x1ec0f2, _0x516595, _0x28c681, _0x35852a) {
                return _0x1ec0f2(_0x516595, _0x28c681, _0x35852a);
            },
            'uydMS': function (_0x5f4883, _0x2d6555) {
                return _0x5f4883 !== _0x2d6555;
            },
            'MKIuc': 'number',
            'ufAZl': function (_0x320813, _0x1b81f5) {
                return _0x320813(_0x1b81f5);
            }
        };
        if (!_0x3ea506['EJGhg'](isUint8Array, _0x813c58))
            throw new ERR_INVALID_ARG_TYPE(_0x3ea506['uTJaC'], [
                _0x3ea506['qZFJb'],
                _0x3ea506['aqGVJ']
            ], _0x813c58);
        if (_0x3ea506['nOjIK'](_0x813c58['length'], 0x0))
            return Buffer['alloc'](0x0);
        _0x5809f9 = _0x3ea506['HCNeM'](normalizeEncoding, _0x5809f9) || _0x5809f9, _0x24dd32 = _0x3ea506['HCNeM'](normalizeEncoding, _0x24dd32) || _0x24dd32;
        const _0x5002a9 = _0x3ea506['AMWMG'](_transcode, _0x813c58, _0x5809f9, _0x24dd32);
        if (_0x3ea506['uydMS'](typeof _0x5002a9, _0x3ea506['MKIuc']))
            return _0x5002a9;
        const _0x301d8c = _0x3ea506['ufAZl'](icuErrName, _0x5002a9), _0x1998d6 = new Error('Unable\x20to\x20transcode\x20Buffer\x20[' + _0x301d8c + ']');
        _0x1998d6['code'] = _0x301d8c, _0x1998d6['errno'] = _0x5002a9;
        throw _0x1998d6;
    };
}
function btoa(_0xe4871d) {
    const _0x498c12 = {
        'sCcvS': function (_0x361d4e, _0x24e32d) {
            return _0x361d4e < _0x24e32d;
        },
        'cezFn': function (_0x218bc0, _0x5eb414) {
            return _0x218bc0 > _0x5eb414;
        },
        'vSBfh': function (_0x5821d8, _0x328840, _0x1322f9) {
            return _0x5821d8(_0x328840, _0x1322f9);
        },
        'aiFBH': 'Invalid\x20character',
        'AbAyt': 'InvalidCharacterError',
        'Mnkfm': 'latin1',
        'tWPZv': 'base64'
    };
    _0xe4871d = '' + _0xe4871d;
    for (let _0x40b109 = 0x0; _0x498c12['sCcvS'](_0x40b109, _0xe4871d['length']); _0x40b109++) {
        if (_0x498c12['cezFn'](_0xe4871d[_0x40b109]['charCodeAt'](0x0), 0xff))
            throw _0x498c12['vSBfh'](lazyDOMException, _0x498c12['aiFBH'], _0x498c12['AbAyt']);
    }
    const _0x1272c2 = Buffer['from'](_0xe4871d, _0x498c12['Mnkfm']);
    return _0x1272c2['toString'](_0x498c12['tWPZv']);
}
const kBase64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function atob(_0x982301) {
    const _0x4073c2 = {
        'HjalP': function (_0x5750aa, _0x19ffe9) {
            return _0x5750aa < _0x19ffe9;
        },
        'jqTwt': function (_0x1d11de, _0x18027a, _0x599a39) {
            return _0x1d11de(_0x18027a, _0x599a39);
        },
        'fEVjF': 'Invalid\x20character',
        'PledK': 'InvalidCharacterError',
        'OpsLK': 'base64',
        'EDwoP': 'latin1'
    };
    _0x982301 = '' + _0x982301;
    for (let _0x520847 = 0x0; _0x4073c2['HjalP'](_0x520847, _0x982301['length']); _0x520847++) {
        if (!kBase64Digits['includes'](_0x982301[_0x520847]))
            throw _0x4073c2['jqTwt'](lazyDOMException, _0x4073c2['fEVjF'], _0x4073c2['PledK']);
    }
    return Buffer['from'](_0x982301, _0x4073c2['OpsLK'])['toString'](_0x4073c2['EDwoP']);
}
module['exports'] = {
    'Blob': Blob,
    'resolveObjectURL': resolveObjectURL,
    'Buffer': Buffer,
    'SlowBuffer': SlowBuffer,
    'transcode': transcode,
    'kMaxLength': kMaxLength,
    'kStringMaxLength': kStringMaxLength,
    'btoa': btoa,
    'atob': atob
}, ObjectDefineProperties(module['exports'], {
    'constants': {
        'configurable': ![],
        'enumerable': !![],
        'value': constants
    },
    'INSPECT_MAX_BYTES': {
        'configurable': !![],
        'enumerable': !![],
        'get'() {
            return INSPECT_MAX_BYTES;
        },
        'set'(_0x446d93) {
            INSPECT_MAX_BYTES = _0x446d93;
        }
    }
});
