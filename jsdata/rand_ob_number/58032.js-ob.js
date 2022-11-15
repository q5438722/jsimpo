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
    } = require('internal/errors'), {validateArray, validateBuffer, validateNumber, validateInteger, validateString} = require('internal/validators'), validateOffset = (_0x193c2a, _0x46f9ef, _0x4e40b6 = 0xd7f + -0x54 + -0xd2b, _0x2fd17d = kMaxLength) => validateInteger(_0x193c2a, _0x46f9ef, _0x4e40b6, _0x2fd17d), {FastBuffer, markAsUntransferable, addBufferPrototypeMethods, createUnsafeBuffer} = require('internal/buffer'), {Blob, resolveObjectURL} = require('internal/blob');
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
Buffer['poolSize'] = (0x1e80 + -0x13a4 + -0xad4) * (0x3de + 0x2051 * -0x1 + 0x27 * 0xd5);
let poolSize, poolOffset, allocPool;
const encodingsMap = ObjectCreate(null);
for (let i = -0xe67 * -0x2 + -0x1 * -0x581 + 0x224f * -0x1; i < encodings['length']; ++i)
    encodingsMap[encodings[i]] = i;
function createPool() {
    poolSize = Buffer['poolSize'], allocPool = createUnsafeBuffer(poolSize)['buffer'], markAsUntransferable(allocPool), poolOffset = -0x1 * -0x2627 + 0x1770 + -0x3d97;
}
createPool();
function alignPool() {
    poolOffset & 0x668 + -0x1d1 + -0x4 * 0x124 && (poolOffset |= 0x2054 + 0x1051 * -0x1 + -0xffc, poolOffset++);
}
let bufferWarningAlreadyEmitted = ![], nodeModulesCheckCounter = -0x3 * -0x70a + -0x1f85 + 0x1 * 0xa67;
const bufferWarning = 'Buffer()\x20is\x20deprecated\x20due\x20to\x20security\x20and\x20usability\x20' + 'issues.\x20Please\x20use\x20the\x20Buffer.alloc(),\x20' + 'Buffer.allocUnsafe(),\x20or\x20Buffer.from()\x20methods\x20instead.';
function showFlaggedDeprecation() {
    if (bufferWarningAlreadyEmitted || ++nodeModulesCheckCounter > -0x144d * 0x3 + 0x377a + -0x65b * -0x7 || !require('internal/options')['getOptionValue']('--pending-deprecation') && isInsideNodeModules())
        return;
    process['emitWarning'](bufferWarning, 'DeprecationWarning', 'DEP0005'), bufferWarningAlreadyEmitted = !![];
}
function toInteger(_0xd7986, _0x2af08c) {
    _0xd7986 = +_0xd7986;
    if (!NumberIsNaN(_0xd7986) && _0xd7986 >= NumberMIN_SAFE_INTEGER && _0xd7986 <= NumberMAX_SAFE_INTEGER)
        return _0xd7986 % (-0x1 * -0xc3e + 0x134b + 0x4 * -0x7e2) === 0x21c1 + 0x1288 * -0x2 + 0x34f ? _0xd7986 : MathFloor(_0xd7986);
    return _0x2af08c;
}
function _copy(_0x114932, _0x47eab3, _0x346479, _0x25c1a0, _0x45bca1) {
    if (!isUint8Array(_0x114932))
        throw new ERR_INVALID_ARG_TYPE('source', [
            'Buffer',
            'Uint8Array'
        ], _0x114932);
    if (!isUint8Array(_0x47eab3))
        throw new ERR_INVALID_ARG_TYPE('target', [
            'Buffer',
            'Uint8Array'
        ], _0x47eab3);
    if (_0x346479 === undefined)
        _0x346479 = -0x1 * -0x135a + -0x1d17 + -0x33f * -0x3;
    else {
        _0x346479 = toInteger(_0x346479, 0x1af5 + -0x26ce + -0x151 * -0x9);
        if (_0x346479 < 0x24d0 + 0x1721 + -0x5d * 0xa5)
            throw new ERR_OUT_OF_RANGE('targetStart', '>=\x200', _0x346479);
    }
    if (_0x25c1a0 === undefined)
        _0x25c1a0 = -0x3a9 * 0x9 + 0x466 + 0x1c8b;
    else {
        _0x25c1a0 = toInteger(_0x25c1a0, 0x1 * -0x1e25 + -0x84b + 0x2670);
        if (_0x25c1a0 < -0x1258 + 0xa26 + -0x2 * -0x419)
            throw new ERR_OUT_OF_RANGE('sourceStart', '>=\x200', _0x25c1a0);
    }
    if (_0x45bca1 === undefined)
        _0x45bca1 = _0x114932['length'];
    else {
        _0x45bca1 = toInteger(_0x45bca1, -0x142c + 0x135d + 0x1 * 0xcf);
        if (_0x45bca1 < 0x244a + -0x119 * 0x3 + -0x20ff * 0x1)
            throw new ERR_OUT_OF_RANGE('sourceEnd', '>=\x200', _0x45bca1);
    }
    if (_0x346479 >= _0x47eab3['length'] || _0x25c1a0 >= _0x45bca1)
        return -0x148a + 0x6 * 0x2ad + 0x47c * 0x1;
    if (_0x25c1a0 > _0x114932['length'])
        throw new ERR_OUT_OF_RANGE('sourceStart', '<=\x20' + _0x114932['length'], _0x25c1a0);
    return _copyActual(_0x114932, _0x47eab3, _0x346479, _0x25c1a0, _0x45bca1);
}
function _copyActual(_0x27792d, _0x5204db, _0x207aa8, _0x7f224f, _0x2a4e6a) {
    if (_0x2a4e6a - _0x7f224f > _0x5204db['length'] - _0x207aa8)
        _0x2a4e6a = _0x7f224f + _0x5204db['length'] - _0x207aa8;
    let _0x3fb682 = _0x2a4e6a - _0x7f224f;
    const _0x15377f = _0x27792d['length'] - _0x7f224f;
    if (_0x3fb682 > _0x15377f)
        _0x3fb682 = _0x15377f;
    if (_0x7f224f !== 0x1087 * -0x2 + 0x3 * -0x567 + 0x3143 || _0x2a4e6a < _0x27792d['length'])
        _0x27792d = new Uint8Array(_0x27792d['buffer'], _0x27792d['byteOffset'] + _0x7f224f, _0x3fb682);
    return TypedArrayPrototypeSet(_0x5204db, _0x27792d, _0x207aa8), _0x3fb682;
}
function Buffer(_0x22e965, _0x4282b2, _0x20b5ac) {
    showFlaggedDeprecation();
    if (typeof _0x22e965 === 'number') {
        if (typeof _0x4282b2 === 'string')
            throw new ERR_INVALID_ARG_TYPE('string', 'string', _0x22e965);
        return Buffer['alloc'](_0x22e965);
    }
    return Buffer['from'](_0x22e965, _0x4282b2, _0x20b5ac);
}
ObjectDefineProperty(Buffer, SymbolSpecies, {
    'enumerable': ![],
    'configurable': !![],
    'get'() {
        return FastBuffer;
    }
}), Buffer['from'] = function from(_0x10eefe, _0x46b2ea, _0x30f249) {
    if (typeof _0x10eefe === 'string')
        return fromString(_0x10eefe, _0x46b2ea);
    if (typeof _0x10eefe === 'object' && _0x10eefe !== null) {
        if (isAnyArrayBuffer(_0x10eefe))
            return fromArrayBuffer(_0x10eefe, _0x46b2ea, _0x30f249);
        const _0x1aef79 = _0x10eefe['valueOf'] && _0x10eefe['valueOf']();
        if (_0x1aef79 != null && _0x1aef79 !== _0x10eefe && (typeof _0x1aef79 === 'string' || typeof _0x1aef79 === 'object'))
            return from(_0x1aef79, _0x46b2ea, _0x30f249);
        const _0x30d0ed = fromObject(_0x10eefe);
        if (_0x30d0ed)
            return _0x30d0ed;
        if (typeof _0x10eefe[SymbolToPrimitive] === 'function') {
            const _0x899e1a = _0x10eefe[SymbolToPrimitive]('string');
            if (typeof _0x899e1a === 'string')
                return fromString(_0x899e1a, _0x46b2ea);
        }
    }
    throw new ERR_INVALID_ARG_TYPE('first\x20argument', [
        'string',
        'Buffer',
        'ArrayBuffer',
        'Array',
        'Array-like\x20Object'
    ], _0x10eefe);
};
const of = (..._0x39c898) => {
    const _0x4b9378 = createUnsafeBuffer(_0x39c898['length']);
    for (let _0x13ca42 = 0x115d + 0x791 + -0x18ee; _0x13ca42 < _0x39c898['length']; _0x13ca42++)
        _0x4b9378[_0x13ca42] = _0x39c898[_0x13ca42];
    return _0x4b9378;
};
Buffer['of'] = of, ObjectSetPrototypeOf(Buffer, Uint8Array);
const assertSize = hideStackFrames(_0x4a4234 => {
    validateNumber(_0x4a4234, 'size');
    if (!(_0x4a4234 >= -0x782 + 0x2591 + -0x1e0f && _0x4a4234 <= kMaxLength))
        throw new ERR_INVALID_ARG_VALUE['RangeError']('size', _0x4a4234);
});
Buffer['alloc'] = function alloc(_0x1d3168, _0x1b4815, _0x4b3b2d) {
    assertSize(_0x1d3168);
    if (_0x1b4815 !== undefined && _0x1b4815 !== -0x4f * -0x59 + 0x584 * 0x1 + -0x20fb && _0x1d3168 > 0xc61 + 0x3a * 0x52 + -0x13d * 0x19) {
        const _0x5d8296 = createUnsafeBuffer(_0x1d3168);
        return _fill(_0x5d8296, _0x1b4815, -0x15b1 + -0x329 * -0x1 + 0x1288, _0x5d8296['length'], _0x4b3b2d);
    }
    return new FastBuffer(_0x1d3168);
}, Buffer['allocUnsafe'] = function allocUnsafe(_0x4f0da0) {
    return assertSize(_0x4f0da0), allocate(_0x4f0da0);
}, Buffer['allocUnsafeSlow'] = function allocUnsafeSlow(_0x24beb4) {
    return assertSize(_0x24beb4), createUnsafeBuffer(_0x24beb4);
};
function SlowBuffer(_0x87986) {
    return assertSize(_0x87986), createUnsafeBuffer(_0x87986);
}
ObjectSetPrototypeOf(SlowBuffer['prototype'], Uint8ArrayPrototype), ObjectSetPrototypeOf(SlowBuffer, Uint8Array);
function allocate(_0x22dfdd) {
    if (_0x22dfdd <= -0xf29 * -0x1 + 0x1 * -0xffa + -0x1 * -0xd1)
        return new FastBuffer();
    if (_0x22dfdd < Buffer['poolSize'] >>> 0x1873 + -0xa2 * 0x18 + -0x1e * 0x4f) {
        if (_0x22dfdd > poolSize - poolOffset)
            createPool();
        const _0x285268 = new FastBuffer(allocPool, poolOffset, _0x22dfdd);
        return poolOffset += _0x22dfdd, alignPool(), _0x285268;
    }
    return createUnsafeBuffer(_0x22dfdd);
}
function fromStringFast(_0x1a894a, _0x3dce73) {
    const _0x1c16c3 = _0x3dce73['byteLength'](_0x1a894a);
    if (_0x1c16c3 >= Buffer['poolSize'] >>> -0x1424 + -0x1 * 0x1264 + -0x2689 * -0x1)
        return createFromString(_0x1a894a, _0x3dce73['encodingVal']);
    if (_0x1c16c3 > poolSize - poolOffset)
        createPool();
    let _0x54102b = new FastBuffer(allocPool, poolOffset, _0x1c16c3);
    const _0x3672ad = _0x3dce73['write'](_0x54102b, _0x1a894a, 0x2282 + -0x416 * 0x2 + -0x1a56, _0x1c16c3);
    return _0x3672ad !== _0x1c16c3 && (_0x54102b = new FastBuffer(allocPool, poolOffset, _0x3672ad)), poolOffset += _0x3672ad, alignPool(), _0x54102b;
}
function fromString(_0xe29f3a, _0x2231a3) {
    let _0x24c277;
    if (typeof _0x2231a3 !== 'string' || _0x2231a3['length'] === 0x34 * 0x89 + 0x1 * 0xf6b + -0x2b3f) {
        if (_0xe29f3a['length'] === -0x4 * -0x6f2 + -0x1eff + 0x337 * 0x1)
            return new FastBuffer();
        _0x24c277 = encodingOps['utf8'], _0x2231a3 = undefined;
    } else {
        _0x24c277 = getEncodingOps(_0x2231a3);
        if (_0x24c277 === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x2231a3);
        if (_0xe29f3a['length'] === -0x22de + -0x1 * 0x176a + 0x3a48)
            return new FastBuffer();
    }
    return fromStringFast(_0xe29f3a, _0x24c277);
}
function fromArrayBuffer(_0x2bb5a9, _0x13f02e, _0x52640c) {
    if (_0x13f02e === undefined)
        _0x13f02e = 0x149 * 0x3 + -0x1 * 0xd5a + -0xb * -0xdd;
    else {
        _0x13f02e = +_0x13f02e;
        if (NumberIsNaN(_0x13f02e))
            _0x13f02e = 0x53 * -0x35 + -0xaa4 * 0x2 + 0x2677;
    }
    const _0x27c367 = _0x2bb5a9['byteLength'] - _0x13f02e;
    if (_0x27c367 < 0xf1b + -0x731 + -0x7ea * 0x1)
        throw new ERR_BUFFER_OUT_OF_BOUNDS('offset');
    if (_0x52640c === undefined)
        _0x52640c = _0x27c367;
    else {
        _0x52640c = +_0x52640c;
        if (_0x52640c > 0x1 * -0x16af + -0xe3 + 0x1792) {
            if (_0x52640c > _0x27c367)
                throw new ERR_BUFFER_OUT_OF_BOUNDS('length');
        } else
            _0x52640c = -0xf33 * 0x1 + -0x1 * 0x3cc + 0x12ff;
    }
    return new FastBuffer(_0x2bb5a9, _0x13f02e, _0x52640c);
}
function fromArrayLike(_0x23cdd6) {
    if (_0x23cdd6['length'] <= -0x11 * -0xee + -0x364 * -0x7 + -0x278a)
        return new FastBuffer();
    if (_0x23cdd6['length'] < Buffer['poolSize'] >>> 0x264d + 0x1c * -0x76 + 0x14 * -0x145) {
        if (_0x23cdd6['length'] > poolSize - poolOffset)
            createPool();
        const _0x147ff9 = new FastBuffer(allocPool, poolOffset, _0x23cdd6['length']);
        return TypedArrayPrototypeSet(_0x147ff9, _0x23cdd6, 0x3 * -0x355 + 0x987 * 0x1 + 0x78), poolOffset += _0x23cdd6['length'], alignPool(), _0x147ff9;
    }
    return new FastBuffer(_0x23cdd6);
}
function fromObject(_0x16dd46) {
    if (_0x16dd46['length'] !== undefined || isAnyArrayBuffer(_0x16dd46['buffer'])) {
        if (typeof _0x16dd46['length'] !== 'number')
            return new FastBuffer();
        return fromArrayLike(_0x16dd46);
    }
    if (_0x16dd46['type'] === 'Buffer' && ArrayIsArray(_0x16dd46['data']))
        return fromArrayLike(_0x16dd46['data']);
}
Buffer['isBuffer'] = function isBuffer(_0x3ad8f7) {
    return _0x3ad8f7 instanceof Buffer;
}, Buffer['compare'] = function compare(_0x28820d, _0x37f945) {
    if (!isUint8Array(_0x28820d))
        throw new ERR_INVALID_ARG_TYPE('buf1', [
            'Buffer',
            'Uint8Array'
        ], _0x28820d);
    if (!isUint8Array(_0x37f945))
        throw new ERR_INVALID_ARG_TYPE('buf2', [
            'Buffer',
            'Uint8Array'
        ], _0x37f945);
    if (_0x28820d === _0x37f945)
        return -0x26e * 0xf + -0x1c45 + -0x40b7 * -0x1;
    return _compare(_0x28820d, _0x37f945);
}, Buffer['isEncoding'] = function isEncoding(_0x1ad9c6) {
    return typeof _0x1ad9c6 === 'string' && _0x1ad9c6['length'] !== 0x701 * 0x1 + -0x6 * 0x3c3 + -0x1 * -0xf91 && normalizeEncoding(_0x1ad9c6) !== undefined;
}, Buffer[kIsEncodingSymbol] = Buffer['isEncoding'], Buffer['concat'] = function concat(_0x5a0b56, _0x4c5251) {
    validateArray(_0x5a0b56, 'list');
    if (_0x5a0b56['length'] === 0x2575 + -0x4b2 + -0x20c3)
        return new FastBuffer();
    if (_0x4c5251 === undefined) {
        _0x4c5251 = 0x3 * 0x92 + -0x2b * 0x1f + 0xb3 * 0x5;
        for (let _0x55154d = -0x12d * 0x21 + 0x1135 + 0x1598; _0x55154d < _0x5a0b56['length']; _0x55154d++) {
            _0x5a0b56[_0x55154d]['length'] && (_0x4c5251 += _0x5a0b56[_0x55154d]['length']);
        }
    } else
        validateOffset(_0x4c5251, 'length');
    const _0x2ab985 = Buffer['allocUnsafe'](_0x4c5251);
    let _0x2297bd = -0x2255 + -0x249c + 0x1 * 0x46f1;
    for (let _0x3b4d34 = 0x5d * -0x25 + -0xf9a + 0x1 * 0x1d0b; _0x3b4d34 < _0x5a0b56['length']; _0x3b4d34++) {
        const _0x54f262 = _0x5a0b56[_0x3b4d34];
        if (!isUint8Array(_0x54f262))
            throw new ERR_INVALID_ARG_TYPE('list[' + _0x3b4d34 + ']', [
                'Buffer',
                'Uint8Array'
            ], _0x5a0b56[_0x3b4d34]);
        _0x2297bd += _copyActual(_0x54f262, _0x2ab985, _0x2297bd, 0x263c + 0x4f9 + -0x4cd * 0x9, _0x54f262['length']);
    }
    return _0x2297bd < _0x4c5251 && TypedArrayPrototypeFill(_0x2ab985, 0x1799 + -0x6c0 + -0x10d9, _0x2297bd, _0x4c5251), _0x2ab985;
};
function base64ByteLength(_0x40e7f5, _0x50f205) {
    if (StringPrototypeCharCodeAt(_0x40e7f5, _0x50f205 - (-0x1d * 0x35 + -0x3f8 + -0x4fd * -0x2)) === -0x250 * 0x8 + 0x23 * 0x67 + 0x4a8)
        _0x50f205--;
    if (_0x50f205 > 0xb5f * 0x3 + 0x1af9 + -0x1 * 0x3d15 && StringPrototypeCharCodeAt(_0x40e7f5, _0x50f205 - (-0x1b25 + 0x77f * -0x5 + 0x40a1)) === -0x1 * 0xd5a + -0x1a * 0x29 + 0x5eb * 0x3)
        _0x50f205--;
    return _0x50f205 * (-0x17 * -0x63 + -0x1464 + -0x3 * -0x3d6) >>> -0x1de * -0x3 + 0x2312 + -0x15b * 0x1e;
}
const encodingOps = {
    'utf8': {
        'encoding': 'utf8',
        'encodingVal': encodingsMap['utf8'],
        'byteLength': byteLengthUtf8,
        'write': (_0x2c8987, _0x3007fd, _0x3b5e1a, _0x1f628a) => _0x2c8987['utf8Write'](_0x3007fd, _0x3b5e1a, _0x1f628a),
        'slice': (_0x497fd7, _0x52dc5d, _0x3a94b9) => _0x497fd7['utf8Slice'](_0x52dc5d, _0x3a94b9),
        'indexOf': (_0x24806b, _0x4bfc7b, _0x19e7a7, _0x4d0bd3) => indexOfString(_0x24806b, _0x4bfc7b, _0x19e7a7, encodingsMap['utf8'], _0x4d0bd3)
    },
    'ucs2': {
        'encoding': 'ucs2',
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x313b79 => _0x313b79['length'] * (-0xd * -0x1d3 + 0x1383 + -0x6 * 0x734),
        'write': (_0x41c73f, _0x436fe2, _0x45105d, _0x21c25a) => _0x41c73f['ucs2Write'](_0x436fe2, _0x45105d, _0x21c25a),
        'slice': (_0x2f6784, _0x2cecc0, _0x24873d) => _0x2f6784['ucs2Slice'](_0x2cecc0, _0x24873d),
        'indexOf': (_0x12c01b, _0x44d4c3, _0x39c6ea, _0x50b451) => indexOfString(_0x12c01b, _0x44d4c3, _0x39c6ea, encodingsMap['utf16le'], _0x50b451)
    },
    'utf16le': {
        'encoding': 'utf16le',
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x307446 => _0x307446['length'] * (-0xc81 + -0x9 * -0x89 + -0x3d9 * -0x2),
        'write': (_0x1a34a4, _0x5c975c, _0x4f4892, _0x19e3b7) => _0x1a34a4['ucs2Write'](_0x5c975c, _0x4f4892, _0x19e3b7),
        'slice': (_0x4e1b86, _0x57f90a, _0x5e25c6) => _0x4e1b86['ucs2Slice'](_0x57f90a, _0x5e25c6),
        'indexOf': (_0xd176dd, _0x39e90f, _0x2c3bc6, _0x566c55) => indexOfString(_0xd176dd, _0x39e90f, _0x2c3bc6, encodingsMap['utf16le'], _0x566c55)
    },
    'latin1': {
        'encoding': 'latin1',
        'encodingVal': encodingsMap['latin1'],
        'byteLength': _0x4fc0fe => _0x4fc0fe['length'],
        'write': (_0xfc19ee, _0x440aef, _0x4427f7, _0x57478e) => _0xfc19ee['latin1Write'](_0x440aef, _0x4427f7, _0x57478e),
        'slice': (_0x442cfe, _0x39672f, _0x1278e7) => _0x442cfe['latin1Slice'](_0x39672f, _0x1278e7),
        'indexOf': (_0x38b35f, _0x558671, _0x20aefd, _0x2f6cff) => indexOfString(_0x38b35f, _0x558671, _0x20aefd, encodingsMap['latin1'], _0x2f6cff)
    },
    'ascii': {
        'encoding': 'ascii',
        'encodingVal': encodingsMap['ascii'],
        'byteLength': _0xaf32cd => _0xaf32cd['length'],
        'write': (_0x221227, _0x56e9db, _0x127437, _0x241377) => _0x221227['asciiWrite'](_0x56e9db, _0x127437, _0x241377),
        'slice': (_0x24864e, _0x30f1e2, _0x1a6ebc) => _0x24864e['asciiSlice'](_0x30f1e2, _0x1a6ebc),
        'indexOf': (_0x24fb1f, _0x18bd36, _0x492626, _0x1f7f66) => indexOfBuffer(_0x24fb1f, fromStringFast(_0x18bd36, encodingOps['ascii']), _0x492626, encodingsMap['ascii'], _0x1f7f66)
    },
    'base64': {
        'encoding': 'base64',
        'encodingVal': encodingsMap['base64'],
        'byteLength': _0x363a4b => base64ByteLength(_0x363a4b, _0x363a4b['length']),
        'write': (_0x2b4b9f, _0x274fe6, _0x3880b4, _0x24f4ee) => _0x2b4b9f['base64Write'](_0x274fe6, _0x3880b4, _0x24f4ee),
        'slice': (_0x5c40d7, _0x49077f, _0x39b18e) => _0x5c40d7['base64Slice'](_0x49077f, _0x39b18e),
        'indexOf': (_0x355d8b, _0x32ff2d, _0x3f7f81, _0x9a8d67) => indexOfBuffer(_0x355d8b, fromStringFast(_0x32ff2d, encodingOps['base64']), _0x3f7f81, encodingsMap['base64'], _0x9a8d67)
    },
    'base64url': {
        'encoding': 'base64url',
        'encodingVal': encodingsMap['base64url'],
        'byteLength': _0x42c1b9 => base64ByteLength(_0x42c1b9, _0x42c1b9['length']),
        'write': (_0x1d8ab1, _0x1c7847, _0x2addb7, _0x2558de) => _0x1d8ab1['base64urlWrite'](_0x1c7847, _0x2addb7, _0x2558de),
        'slice': (_0x15ce9e, _0x417874, _0x4c2816) => _0x15ce9e['base64urlSlice'](_0x417874, _0x4c2816),
        'indexOf': (_0x4a3cb9, _0x379ca5, _0x4d8cd6, _0x3e84b2) => indexOfBuffer(_0x4a3cb9, fromStringFast(_0x379ca5, encodingOps['base64url']), _0x4d8cd6, encodingsMap['base64url'], _0x3e84b2)
    },
    'hex': {
        'encoding': 'hex',
        'encodingVal': encodingsMap['hex'],
        'byteLength': _0x3635d0 => _0x3635d0['length'] >>> -0xca * 0x26 + 0x959 + 0xa52 * 0x2,
        'write': (_0x34098e, _0x38a6ef, _0x355622, _0x188d4f) => _0x34098e['hexWrite'](_0x38a6ef, _0x355622, _0x188d4f),
        'slice': (_0x1a47ea, _0x2388d6, _0x45390b) => _0x1a47ea['hexSlice'](_0x2388d6, _0x45390b),
        'indexOf': (_0x289338, _0x5d48a4, _0x374aac, _0xec9552) => indexOfBuffer(_0x289338, fromStringFast(_0x5d48a4, encodingOps['hex']), _0x374aac, encodingsMap['hex'], _0xec9552)
    }
};
function getEncodingOps(_0xcdb7f0) {
    _0xcdb7f0 += '';
    switch (_0xcdb7f0['length']) {
    case 0xae9 + -0x2474 * -0x1 + -0x2f59:
        if (_0xcdb7f0 === 'utf8')
            return encodingOps['utf8'];
        if (_0xcdb7f0 === 'ucs2')
            return encodingOps['ucs2'];
        _0xcdb7f0 = StringPrototypeToLowerCase(_0xcdb7f0);
        if (_0xcdb7f0 === 'utf8')
            return encodingOps['utf8'];
        if (_0xcdb7f0 === 'ucs2')
            return encodingOps['ucs2'];
        break;
    case -0xac * -0x4 + -0x15 * 0x51 + 0x3fa:
        if (_0xcdb7f0 === 'utf-8')
            return encodingOps['utf8'];
        if (_0xcdb7f0 === 'ascii')
            return encodingOps['ascii'];
        if (_0xcdb7f0 === 'ucs-2')
            return encodingOps['ucs2'];
        _0xcdb7f0 = StringPrototypeToLowerCase(_0xcdb7f0);
        if (_0xcdb7f0 === 'utf-8')
            return encodingOps['utf8'];
        if (_0xcdb7f0 === 'ascii')
            return encodingOps['ascii'];
        if (_0xcdb7f0 === 'ucs-2')
            return encodingOps['ucs2'];
        break;
    case 0xacc + 0x19de + 0x1 * -0x24a3:
        if (_0xcdb7f0 === 'utf16le' || StringPrototypeToLowerCase(_0xcdb7f0) === 'utf16le')
            return encodingOps['utf16le'];
        break;
    case 0x5 * 0x157 + -0x1113 + 0xa68:
        if (_0xcdb7f0 === 'utf-16le' || StringPrototypeToLowerCase(_0xcdb7f0) === 'utf-16le')
            return encodingOps['utf16le'];
        break;
    case -0x1e48 + -0x1bb8 + -0x7 * -0x84a:
        if (_0xcdb7f0 === 'latin1' || _0xcdb7f0 === 'binary')
            return encodingOps['latin1'];
        if (_0xcdb7f0 === 'base64')
            return encodingOps['base64'];
        _0xcdb7f0 = StringPrototypeToLowerCase(_0xcdb7f0);
        if (_0xcdb7f0 === 'latin1' || _0xcdb7f0 === 'binary')
            return encodingOps['latin1'];
        if (_0xcdb7f0 === 'base64')
            return encodingOps['base64'];
        break;
    case 0x5d8 + 0x1 * -0x1fb2 + 0x19dd:
        if (_0xcdb7f0 === 'hex' || StringPrototypeToLowerCase(_0xcdb7f0) === 'hex')
            return encodingOps['hex'];
        break;
    case -0x1802 + -0x7a * -0x11 + 0xff1:
        if (_0xcdb7f0 === 'base64url' || StringPrototypeToLowerCase(_0xcdb7f0) === 'base64url')
            return encodingOps['base64url'];
        break;
    }
}
function byteLength(_0x3593ca, _0x267046) {
    if (typeof _0x3593ca !== 'string') {
        if (isArrayBufferView(_0x3593ca) || isAnyArrayBuffer(_0x3593ca))
            return _0x3593ca['byteLength'];
        throw new ERR_INVALID_ARG_TYPE('string', [
            'string',
            'Buffer',
            'ArrayBuffer'
        ], _0x3593ca);
    }
    const _0x204511 = _0x3593ca['length'], _0x362d78 = arguments['length'] > -0xd1c + -0x60 + -0x16 * -0x9d && arguments[0x241f + -0x1eca + -0x2f * 0x1d] === !![];
    if (!_0x362d78 && _0x204511 === 0x1189 + 0x1cd7 + 0x1730 * -0x2)
        return -0x73c * -0x1 + 0x230c * -0x1 + -0x5 * -0x590;
    if (!_0x267046)
        return _0x362d78 ? -(-0x646 * -0x3 + 0x11 * -0x1be + -0x1 * -0xacd) : byteLengthUtf8(_0x3593ca);
    const _0x49622e = getEncodingOps(_0x267046);
    if (_0x49622e === undefined)
        return _0x362d78 ? -(-0x301 + 0xc7f + -0x97d) : byteLengthUtf8(_0x3593ca);
    return _0x49622e['byteLength'](_0x3593ca);
}
Buffer['byteLength'] = byteLength, ObjectDefineProperty(Buffer['prototype'], 'parent', {
    'enumerable': !![],
    'get'() {
        if (!(this instanceof Buffer))
            return undefined;
        return this['buffer'];
    }
}), ObjectDefineProperty(Buffer['prototype'], 'offset', {
    'enumerable': !![],
    'get'() {
        if (!(this instanceof Buffer))
            return undefined;
        return this['byteOffset'];
    }
}), Buffer['prototype']['copy'] = function copy(_0x3942c0, _0x5475e2, _0x18914c, _0x160b2a) {
    return _copy(this, _0x3942c0, _0x5475e2, _0x18914c, _0x160b2a);
}, Buffer['prototype']['toString'] = function toString(_0x4a0155, _0x105362, _0x56a0e1) {
    if (arguments['length'] === -0xdf3 + 0x10 * 0xa2 + 0x3d3)
        return this['utf8Slice'](0x1 * 0xe51 + -0x2fe * -0xc + 0xd * -0x3dd, this['length']);
    const _0x3f4948 = this['length'];
    if (_0x105362 <= 0xd * -0x135 + -0x22ad + 0x325e)
        _0x105362 = -0x1c1d * -0x1 + 0x7 * -0x3e1 + -0x6 * 0x29;
    else {
        if (_0x105362 >= _0x3f4948)
            return '';
        else
            _0x105362 |= -0x1067 + -0x143 + 0x22 * 0x85;
    }
    if (_0x56a0e1 === undefined || _0x56a0e1 > _0x3f4948)
        _0x56a0e1 = _0x3f4948;
    else
        _0x56a0e1 |= 0x15 * -0x5f + -0x2651 + 0x2e1c;
    if (_0x56a0e1 <= _0x105362)
        return '';
    if (_0x4a0155 === undefined)
        return this['utf8Slice'](_0x105362, _0x56a0e1);
    const _0x3c4da6 = getEncodingOps(_0x4a0155);
    if (_0x3c4da6 === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x4a0155);
    return _0x3c4da6['slice'](this, _0x105362, _0x56a0e1);
}, Buffer['prototype']['equals'] = function equals(_0x437c1e) {
    if (!isUint8Array(_0x437c1e))
        throw new ERR_INVALID_ARG_TYPE('otherBuffer', [
            'Buffer',
            'Uint8Array'
        ], _0x437c1e);
    if (this === _0x437c1e)
        return !![];
    if (this['byteLength'] !== _0x437c1e['byteLength'])
        return ![];
    return this['byteLength'] === 0x1e9 * 0x4 + 0x1b14 + -0x22b8 || _compare(this, _0x437c1e) === -0x228d + 0x720 + 0x1b6d;
};
let INSPECT_MAX_BYTES = -0x2137 + 0x1 * -0x43 + 0x21ac;
Buffer['prototype'][customInspectSymbol] = function inspect(_0x2e5d97, _0x36e52e) {
    const _0x1c0404 = INSPECT_MAX_BYTES, _0x1f6484 = MathMin(_0x1c0404, this['length']), _0x10e7fe = this['length'] - _0x1c0404;
    let _0x28bd99 = StringPrototypeTrim(StringPrototypeReplace(this['hexSlice'](-0x2617 + 0x17ef + -0x18 * -0x97, _0x1f6484), /(.{2})/g, '$1\x20'));
    if (_0x10e7fe > 0x10d7 * 0x1 + 0xd72 + 0x1e49 * -0x1)
        _0x28bd99 += '\x20...\x20' + _0x10e7fe + '\x20more\x20byte' + (_0x10e7fe > 0x21 * -0x3d + 0xda5 + -0x5c7 ? 's' : '');
    if (_0x36e52e) {
        let _0x32fdfc = ![];
        const _0x32594a = _0x36e52e['showHidden'] ? ALL_PROPERTIES : ONLY_ENUMERABLE, _0xcbb2a7 = ObjectCreate(null);
        ArrayPrototypeForEach(getOwnNonIndexProperties(this, _0x32594a), _0x5daf97 => {
            _0x32fdfc = !![], _0xcbb2a7[_0x5daf97] = this[_0x5daf97];
        });
        if (_0x32fdfc) {
            if (this['length'] !== -0x211e + -0x2021 + 0x413f)
                _0x28bd99 += ',\x20';
            _0x28bd99 += StringPrototypeSlice(utilInspect(_0xcbb2a7, {
                ..._0x36e52e,
                'breakLength': Infinity,
                'compact': !![]
            }), -0xfb * -0x1b + -0x1e64 + 0xce * 0x5, -(0x2005 + 0x16cf + -0x36d2));
        }
    }
    return '<' + this['constructor']['name'] + '\x20' + _0x28bd99 + '>';
}, Buffer['prototype']['inspect'] = Buffer['prototype'][customInspectSymbol], Buffer['prototype']['compare'] = function compare(_0xb99c4a, _0x4a2050, _0x1a0287, _0x5e321b, _0x32c473) {
    if (!isUint8Array(_0xb99c4a))
        throw new ERR_INVALID_ARG_TYPE('target', [
            'Buffer',
            'Uint8Array'
        ], _0xb99c4a);
    if (arguments['length'] === -0x11b0 * -0x2 + -0x18c6 + 0x1 * -0xa99)
        return _compare(this, _0xb99c4a);
    if (_0x4a2050 === undefined)
        _0x4a2050 = 0x1d1d * 0x1 + 0x1 * -0x19fb + -0x322;
    else
        validateOffset(_0x4a2050, 'targetStart');
    if (_0x1a0287 === undefined)
        _0x1a0287 = _0xb99c4a['length'];
    else
        validateOffset(_0x1a0287, 'targetEnd', -0x19f6 * -0x1 + 0x619 * -0x1 + -0x13dd * 0x1, _0xb99c4a['length']);
    if (_0x5e321b === undefined)
        _0x5e321b = 0x12a7 * -0x1 + -0xf * -0xfe + -0x5 * -0xc1;
    else
        validateOffset(_0x5e321b, 'sourceStart');
    if (_0x32c473 === undefined)
        _0x32c473 = this['length'];
    else
        validateOffset(_0x32c473, 'sourceEnd', -0x663 + 0x149c + -0xe39, this['length']);
    if (_0x5e321b >= _0x32c473)
        return _0x4a2050 >= _0x1a0287 ? 0x2e * 0x6b + -0x152b + 0x1 * 0x1f1 : -(0xc * -0x9e + 0x49c + 0x2cd * 0x1);
    if (_0x4a2050 >= _0x1a0287)
        return 0x2005 + 0xbb6 + -0x2bba;
    return compareOffset(this, _0xb99c4a, _0x4a2050, _0x5e321b, _0x1a0287, _0x32c473);
};
function bidirectionalIndexOf(_0x481e4c, _0x3eb46c, _0x176a97, _0x48bf8e, _0x5b3145) {
    validateBuffer(_0x481e4c);
    if (typeof _0x176a97 === 'string')
        _0x48bf8e = _0x176a97, _0x176a97 = undefined;
    else {
        if (_0x176a97 > -0x3 * 0x36cca943 + 0x59f0b16 * -0x5 + -0x140813336 * -0x1)
            _0x176a97 = 0x17 * 0x13300e6 + 0x3be14a66 + 0x2889a0ef;
        else
            _0x176a97 < -(-0x6ef36d92 + -0xacd6c008 + -0x231db1 * -0xbba) && (_0x176a97 = -(0x2 * -0x2a2200b5 + -0x2416ca6 * 0x30 + -0x1e * -0xaaf366b));
    }
    _0x176a97 = +_0x176a97;
    NumberIsNaN(_0x176a97) && (_0x176a97 = _0x5b3145 ? 0x1 * 0x20e + -0x1b30 + 0x1922 : _0x481e4c['length'] || _0x481e4c['byteLength']);
    _0x5b3145 = !!_0x5b3145;
    if (typeof _0x3eb46c === 'number')
        return indexOfNumber(_0x481e4c, _0x3eb46c >>> 0xb64 + -0x229a + -0x2 * -0xb9b, _0x176a97, _0x5b3145);
    let _0x22928a;
    if (_0x48bf8e === undefined)
        _0x22928a = encodingOps['utf8'];
    else
        _0x22928a = getEncodingOps(_0x48bf8e);
    if (typeof _0x3eb46c === 'string') {
        if (_0x22928a === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x48bf8e);
        return _0x22928a['indexOf'](_0x481e4c, _0x3eb46c, _0x176a97, _0x5b3145);
    }
    if (isUint8Array(_0x3eb46c)) {
        const _0x3152b6 = _0x22928a === undefined ? encodingsMap['utf8'] : _0x22928a['encodingVal'];
        return indexOfBuffer(_0x481e4c, _0x3eb46c, _0x176a97, _0x3152b6, _0x5b3145);
    }
    throw new ERR_INVALID_ARG_TYPE('value', [
        'number',
        'string',
        'Buffer',
        'Uint8Array'
    ], _0x3eb46c);
}
Buffer['prototype']['indexOf'] = function indexOf(_0x253103, _0x2c5059, _0x2e5c20) {
    return bidirectionalIndexOf(this, _0x253103, _0x2c5059, _0x2e5c20, !![]);
}, Buffer['prototype']['lastIndexOf'] = function lastIndexOf(_0xbd148b, _0x1d4629, _0x1dd487) {
    return bidirectionalIndexOf(this, _0xbd148b, _0x1d4629, _0x1dd487, ![]);
}, Buffer['prototype']['includes'] = function includes(_0x2357e7, _0x5274fc, _0x58ce8d) {
    return this['indexOf'](_0x2357e7, _0x5274fc, _0x58ce8d) !== -(-0x101f + 0x9da + 0x16 * 0x49);
}, Buffer['prototype']['fill'] = function fill(_0x3b8800, _0x330cb9, _0x1cc9c0, _0x569a84) {
    return _fill(this, _0x3b8800, _0x330cb9, _0x1cc9c0, _0x569a84);
};
function _fill(_0x107a11, _0x1d7f2e, _0x4e5a57, _0x596180, _0x5048c1) {
    if (typeof _0x1d7f2e === 'string') {
        if (_0x4e5a57 === undefined || typeof _0x4e5a57 === 'string')
            _0x5048c1 = _0x4e5a57, _0x4e5a57 = 0x80e + 0x2349 + -0x2b57, _0x596180 = _0x107a11['length'];
        else
            typeof _0x596180 === 'string' && (_0x5048c1 = _0x596180, _0x596180 = _0x107a11['length']);
        const _0x33b878 = normalizeEncoding(_0x5048c1);
        if (_0x33b878 === undefined) {
            validateString(_0x5048c1, 'encoding');
            throw new ERR_UNKNOWN_ENCODING(_0x5048c1);
        }
        if (_0x1d7f2e['length'] === -0x12 * -0xdf + 0x54a * 0x1 + -0x53e * 0x4)
            _0x1d7f2e = 0x1c * -0x38 + 0x2242 + -0x1c22;
        else {
            if (_0x1d7f2e['length'] === 0x2102 + -0x26ee + 0x25 * 0x29) {
                if (_0x33b878 === 'utf8') {
                    const _0x385770 = StringPrototypeCharCodeAt(_0x1d7f2e, -0x1 * -0x1eef + 0x13e3 + 0x32d2 * -0x1);
                    _0x385770 < 0x12 * 0x1f3 + -0x1 * -0xf32 + 0xb1 * -0x48 && (_0x1d7f2e = _0x385770);
                } else
                    _0x33b878 === 'latin1' && (_0x1d7f2e = StringPrototypeCharCodeAt(_0x1d7f2e, -0x1e08 + -0x2b * -0xbc + -0x18c));
            }
        }
    } else
        _0x5048c1 = undefined;
    if (_0x4e5a57 === undefined)
        _0x4e5a57 = 0x1eb7 * -0x1 + 0x27a + 0x1 * 0x1c3d, _0x596180 = _0x107a11['length'];
    else {
        validateOffset(_0x4e5a57, 'offset');
        _0x596180 === undefined ? _0x596180 = _0x107a11['length'] : validateOffset(_0x596180, 'end', 0x1 * -0x92f + -0x7 * -0x3d3 + -0x8cb * 0x2, _0x107a11['length']);
        if (_0x4e5a57 >= _0x596180)
            return _0x107a11;
    }
    if (typeof _0x1d7f2e === 'number') {
        const _0x3ade98 = TypedArrayPrototypeGetByteLength(_0x107a11), _0x22a6f3 = _0x596180 - _0x4e5a57;
        if (_0x4e5a57 > _0x596180 || _0x22a6f3 + _0x4e5a57 > _0x3ade98)
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        TypedArrayPrototypeFill(_0x107a11, _0x1d7f2e, _0x4e5a57, _0x596180);
    } else {
        const _0x1a08f9 = bindingFill(_0x107a11, _0x1d7f2e, _0x4e5a57, _0x596180, _0x5048c1);
        if (_0x1a08f9 < -0x23f5 + 0x1f * 0xcd + 0x4b * 0x26) {
            if (_0x1a08f9 === -(-0x17b * 0x1 + 0x1b * -0x16b + 0x27c5))
                throw new ERR_INVALID_ARG_VALUE('value', _0x1d7f2e);
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        }
    }
    return _0x107a11;
}
Buffer['prototype']['write'] = function write(_0x470ec4, _0x1c2440, _0x3be4eb, _0x1fb96e) {
    if (_0x1c2440 === undefined)
        return this['utf8Write'](_0x470ec4, -0x2 * 0xd81 + 0x10c4 + 0xa3e, this['length']);
    if (_0x3be4eb === undefined && typeof _0x1c2440 === 'string')
        _0x1fb96e = _0x1c2440, _0x3be4eb = this['length'], _0x1c2440 = -0x3 * 0x9a1 + -0x119 * 0x1 + 0x1dfc * 0x1;
    else {
        validateOffset(_0x1c2440, 'offset', 0x2151 * -0x1 + -0x1ba9 + 0x3cfa, this['length']);
        const _0x3ec0ff = this['length'] - _0x1c2440;
        if (_0x3be4eb === undefined)
            _0x3be4eb = _0x3ec0ff;
        else {
            if (typeof _0x3be4eb === 'string')
                _0x1fb96e = _0x3be4eb, _0x3be4eb = _0x3ec0ff;
            else {
                validateOffset(_0x3be4eb, 'length', 0x6ab * 0x3 + 0x2 * -0x548 + -0x1 * 0x971, this['length']);
                if (_0x3be4eb > _0x3ec0ff)
                    _0x3be4eb = _0x3ec0ff;
            }
        }
    }
    if (!_0x1fb96e)
        return this['utf8Write'](_0x470ec4, _0x1c2440, _0x3be4eb);
    const _0x5a9c6a = getEncodingOps(_0x1fb96e);
    if (_0x5a9c6a === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x1fb96e);
    return _0x5a9c6a['write'](this, _0x470ec4, _0x1c2440, _0x3be4eb);
}, Buffer['prototype']['toJSON'] = function toJSON() {
    if (this['length'] > -0x3a * -0x43 + 0xa95 + -0x19c3) {
        const _0x3d43ad = new Array(this['length']);
        for (let _0x310135 = 0x10e9 * 0x2 + -0x1d76 + -0x45c; _0x310135 < this['length']; ++_0x310135)
            _0x3d43ad[_0x310135] = this[_0x310135];
        return {
            'type': 'Buffer',
            'data': _0x3d43ad
        };
    }
    return {
        'type': 'Buffer',
        'data': []
    };
};
function adjustOffset(_0x10952c, _0x185ad7) {
    _0x10952c = MathTrunc(_0x10952c);
    if (_0x10952c === 0x4 * -0x24d + -0x91d + 0x3 * 0x61b)
        return -0x26d2 * 0x1 + -0x21d7 * 0x1 + -0x69b * -0xb;
    if (_0x10952c < -0x1 * -0x415 + 0x13d5 * 0x1 + -0x17ea * 0x1)
        return _0x10952c += _0x185ad7, _0x10952c > 0x9e8 + 0x1783 + -0x216b ? _0x10952c : -0x2b * -0x67 + -0xb0b * 0x1 + 0x12 * -0x59;
    if (_0x10952c < _0x185ad7)
        return _0x10952c;
    return NumberIsNaN(_0x10952c) ? 0xee7 * 0x1 + -0x304 + -0xbe3 : _0x185ad7;
}
Buffer['prototype']['slice'] = function slice(_0x3e4c56, _0x3a0ca5) {
    const _0xf0011e = this['length'];
    _0x3e4c56 = adjustOffset(_0x3e4c56, _0xf0011e), _0x3a0ca5 = _0x3a0ca5 !== undefined ? adjustOffset(_0x3a0ca5, _0xf0011e) : _0xf0011e;
    const _0x5de5be = _0x3a0ca5 > _0x3e4c56 ? _0x3a0ca5 - _0x3e4c56 : -0x1466 + 0xd3a * -0x2 + -0x3 * -0xf9e;
    return new FastBuffer(this['buffer'], this['byteOffset'] + _0x3e4c56, _0x5de5be);
};
function swap(_0xd2298f, _0x2842e7, _0x189977) {
    const _0x233f79 = _0xd2298f[_0x2842e7];
    _0xd2298f[_0x2842e7] = _0xd2298f[_0x189977], _0xd2298f[_0x189977] = _0x233f79;
}
Buffer['prototype']['swap16'] = function swap16() {
    const _0x1d61b7 = this['length'];
    if (_0x1d61b7 % (0xf1 * -0xb + 0xad * -0x3 + 0x2 * 0x632) !== -0x10ac + 0x193b + -0x88f * 0x1)
        throw new ERR_INVALID_BUFFER_SIZE('16-bits');
    if (_0x1d61b7 < 0xa4 * 0x3a + -0x7 * -0x32e + -0x2 * 0x1d75) {
        for (let _0x2fe073 = 0x1add + -0x285 * 0x9 + -0x43 * 0x10; _0x2fe073 < _0x1d61b7; _0x2fe073 += -0xceb + 0x23c5 + -0x4 * 0x5b6)
            swap(this, _0x2fe073, _0x2fe073 + (0x905 * 0x1 + 0x1 * 0x19f + -0xaa3 * 0x1));
        return this;
    }
    return _swap16(this);
}, Buffer['prototype']['swap32'] = function swap32() {
    const _0x2761ee = this['length'];
    if (_0x2761ee % (0x5d + 0x236c + 0x23c5 * -0x1) !== 0x136b + -0xbe * -0x27 + -0x3 * 0x101f)
        throw new ERR_INVALID_BUFFER_SIZE('32-bits');
    if (_0x2761ee < 0x1 * 0x701 + 0x2ce * 0x2 + -0xbdd) {
        for (let _0x31bd23 = -0x3 * -0x955 + -0x130f + -0x8f0; _0x31bd23 < _0x2761ee; _0x31bd23 += 0x1eeb + 0x1d5f + 0x2 * -0x1e23) {
            swap(this, _0x31bd23, _0x31bd23 + (-0x9bb + -0x14f + -0x3 * -0x3af)), swap(this, _0x31bd23 + (0xe27 + -0x19f9 + 0xbd3), _0x31bd23 + (0x55 * -0x20 + 0x2 * 0xac5 + 0x15d * -0x8));
        }
        return this;
    }
    return _swap32(this);
}, Buffer['prototype']['swap64'] = function swap64() {
    const _0x3b8122 = this['length'];
    if (_0x3b8122 % (0x11f0 + -0x173d + 0x555) !== 0x55 * -0x5a + -0x992 + 0x2774)
        throw new ERR_INVALID_BUFFER_SIZE('64-bits');
    if (_0x3b8122 < -0x230e + 0x18c8 + 0x11 * 0xa6) {
        for (let _0xb787d6 = -0x1 * -0xf05 + 0xc8c + -0x1b91; _0xb787d6 < _0x3b8122; _0xb787d6 += -0x35d * -0x3 + -0xe4f + 0x44 * 0x10) {
            swap(this, _0xb787d6, _0xb787d6 + (0x14b1 + -0x20e6 * -0x1 + -0x3590)), swap(this, _0xb787d6 + (0x25bf * 0x1 + 0x1403 + 0x1 * -0x39c1), _0xb787d6 + (0x79 * 0x21 + 0x1df3 + -0x1 * 0x2d86)), swap(this, _0xb787d6 + (-0x1d * -0x5e + -0x15 + -0xa8f), _0xb787d6 + (0x19d + -0xbb * -0x1d + -0x16c7)), swap(this, _0xb787d6 + (0x198f + -0x1853 * -0x1 + -0x31df), _0xb787d6 + (0x262 * 0x5 + 0x396 * -0x7 + -0xd * -0x104));
        }
        return this;
    }
    return _swap64(this);
}, Buffer['prototype']['toLocaleString'] = Buffer['prototype']['toString'];
let transcode;
if (internalBinding('config')['hasIntl']) {
    const {
        icuErrName,
        transcode: _transcode
    } = internalBinding('icu');
    transcode = function transcode(_0x114e2c, _0x265641, _0x4b1a89) {
        if (!isUint8Array(_0x114e2c))
            throw new ERR_INVALID_ARG_TYPE('source', [
                'Buffer',
                'Uint8Array'
            ], _0x114e2c);
        if (_0x114e2c['length'] === 0x766 * -0x3 + 0x1 * -0x245f + 0x3a91)
            return Buffer['alloc'](0x8d + 0x1 * -0xec1 + 0x12f * 0xc);
        _0x265641 = normalizeEncoding(_0x265641) || _0x265641, _0x4b1a89 = normalizeEncoding(_0x4b1a89) || _0x4b1a89;
        const _0x13c52a = _transcode(_0x114e2c, _0x265641, _0x4b1a89);
        if (typeof _0x13c52a !== 'number')
            return _0x13c52a;
        const _0x3587fd = icuErrName(_0x13c52a), _0x5be0fb = new Error('Unable\x20to\x20transcode\x20Buffer\x20[' + _0x3587fd + ']');
        _0x5be0fb['code'] = _0x3587fd, _0x5be0fb['errno'] = _0x13c52a;
        throw _0x5be0fb;
    };
}
function btoa(_0x1ae7aa) {
    _0x1ae7aa = '' + _0x1ae7aa;
    for (let _0x550114 = 0x1f09 + 0x13 * -0x3f + 0x2 * -0xd2e; _0x550114 < _0x1ae7aa['length']; _0x550114++) {
        if (_0x1ae7aa[_0x550114]['charCodeAt'](0xc5 * 0x19 + -0x1a04 + 0x1 * 0x6c7) > 0xf35 + -0x1b11 + 0xcdb)
            throw lazyDOMException('Invalid\x20character', 'InvalidCharacterError');
    }
    const _0x299d58 = Buffer['from'](_0x1ae7aa, 'latin1');
    return _0x299d58['toString']('base64');
}
const kBase64Digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function atob(_0x48e2e5) {
    _0x48e2e5 = '' + _0x48e2e5;
    for (let _0x331f95 = -0x1bd9 + -0x118b + 0x46 * 0xa6; _0x331f95 < _0x48e2e5['length']; _0x331f95++) {
        if (!kBase64Digits['includes'](_0x48e2e5[_0x331f95]))
            throw lazyDOMException('Invalid\x20character', 'InvalidCharacterError');
    }
    return Buffer['from'](_0x48e2e5, 'base64')['toString']('latin1');
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
        'set'(_0x4fcba6) {
            INSPECT_MAX_BYTES = _0x4fcba6;
        }
    }
});
