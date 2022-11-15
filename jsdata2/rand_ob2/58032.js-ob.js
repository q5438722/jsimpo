'use strict';
const _0x3dca = [
    'charCodeAt',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    'exports',
    '2LJZviT',
    '129963rcjFGd',
    '9gFxeNn',
    '102109yNsauA',
    '1yrYzFo',
    '991879PLtjXO',
    '359530JEfFXL',
    '1tSUgpf',
    '823961eRcODE',
    '6CJjtZt',
    '57961hlcolm',
    '298391TvtteP',
    '4Oecjru',
    'buffer',
    'util',
    'internal/util/types',
    'internal/util/inspect',
    'string_decoder',
    'internal/errors',
    'internal/validators',
    'internal/buffer',
    'internal/blob',
    'prototype',
    'constructor',
    'poolSize',
    'length',
    'Buffer()\x20is\x20deprecated\x20due\x20to\x20security\x20and\x20usability\x20',
    'Buffer.allocUnsafe(),\x20or\x20Buffer.from()\x20methods\x20instead.',
    'internal/options',
    'getOptionValue',
    'emitWarning',
    'DeprecationWarning',
    'DEP0005',
    'source',
    'Buffer',
    'Uint8Array',
    'targetStart',
    '>=\x200',
    'sourceStart',
    'sourceEnd',
    '<=\x20',
    'byteOffset',
    'number',
    'string',
    'alloc',
    'from',
    'object',
    'valueOf',
    'function',
    'first\x20argument',
    'ArrayBuffer',
    'RangeError',
    'size',
    'allocUnsafe',
    'allocUnsafeSlow',
    'write',
    'utf8',
    'byteLength',
    'type',
    'data',
    'isBuffer',
    'buf1',
    'buf2',
    'isEncoding',
    'concat',
    'utf8Write',
    'ucs2',
    'ucs2Write',
    'ucs2Slice',
    'utf16le',
    'latin1',
    'latin1Write',
    'ascii',
    'asciiWrite',
    'asciiSlice',
    'base64',
    'base64Write',
    'base64Slice',
    'base64url',
    'base64urlSlice',
    'hex',
    'hexWrite',
    'hexSlice',
    'ucs-2',
    'utf-16le',
    'binary',
    'offset',
    'copy',
    'toString',
    'utf8Slice',
    'slice',
    'otherBuffer',
    '$1\x20',
    '\x20...\x20',
    '\x20more\x20byte',
    'inspect',
    'compare',
    'target',
    'targetEnd',
    'value',
    'indexOf',
    'lastIndexOf',
    'includes',
    'fill',
    'encoding',
    'end',
    'toJSON',
    '16-bits',
    'swap32',
    '32-bits',
    'swap64',
    '64-bits',
    'toLocaleString',
    'hasIntl',
    'icu',
    'Unable\x20to\x20transcode\x20Buffer\x20[',
    'code',
    'errno'
];
const _0x2311dd = _0x23ba;
(function (_0x2db93d, _0x45fc01) {
    const _0x3d5654 = _0x23ba;
    while (!![]) {
        try {
            const _0x8c4c23 = -parseInt(_0x3d5654(0x1eb)) * parseInt(_0x3d5654(0x1ec)) + -parseInt(_0x3d5654(0x1ed)) * parseInt(_0x3d5654(0x1ee)) + -parseInt(_0x3d5654(0x1ef)) * parseInt(_0x3d5654(0x1f0)) + parseInt(_0x3d5654(0x1f1)) + parseInt(_0x3d5654(0x1f2)) * parseInt(_0x3d5654(0x1f3)) + -parseInt(_0x3d5654(0x1f4)) * -parseInt(_0x3d5654(0x1f5)) + -parseInt(_0x3d5654(0x1f6)) * -parseInt(_0x3d5654(0x1f7));
            if (_0x8c4c23 === _0x45fc01)
                break;
            else
                _0x2db93d['push'](_0x2db93d['shift']());
        } catch (_0x3d3f7f) {
            _0x2db93d['push'](_0x2db93d['shift']());
        }
    }
}(_0x3dca, 0x87433));
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
    } = internalBinding(_0x2311dd(0x1f8)), {
        getOwnNonIndexProperties,
        propertyFilter: {ALL_PROPERTIES, ONLY_ENUMERABLE}
    } = internalBinding(_0x2311dd(0x1f9)), {customInspectSymbol, isInsideNodeModules, lazyDOMException, normalizeEncoding, kIsEncodingSymbol} = require('internal/util'), {isAnyArrayBuffer, isArrayBufferView, isUint8Array} = require(_0x2311dd(0x1fa)), {inspect: utilInspect} = require(_0x2311dd(0x1fb)), {encodings} = internalBinding(_0x2311dd(0x1fc)), {
        codes: {ERR_BUFFER_OUT_OF_BOUNDS, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_INVALID_BUFFER_SIZE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_ENCODING},
        hideStackFrames
    } = require(_0x2311dd(0x1fd)), {validateArray, validateBuffer, validateNumber, validateInteger, validateString} = require(_0x2311dd(0x1fe)), validateOffset = (_0x4c9be6, _0x1e3d68, _0x858964 = 0x0, _0x31c6b5 = kMaxLength) => validateInteger(_0x4c9be6, _0x1e3d68, _0x858964, _0x31c6b5), {FastBuffer, markAsUntransferable, addBufferPrototypeMethods, createUnsafeBuffer} = require(_0x2311dd(0x1ff)), {Blob, resolveObjectURL} = require(_0x2311dd(0x200));
FastBuffer[_0x2311dd(0x201)][_0x2311dd(0x202)] = Buffer, Buffer[_0x2311dd(0x201)] = FastBuffer[_0x2311dd(0x201)], addBufferPrototypeMethods(Buffer[_0x2311dd(0x201)]);
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
Buffer[_0x2311dd(0x203)] = 0x8 * 0x400;
let poolSize, poolOffset, allocPool;
const encodingsMap = ObjectCreate(null);
for (let i = 0x0; i < encodings[_0x2311dd(0x204)]; ++i)
    encodingsMap[encodings[i]] = i;
function createPool() {
    poolSize = Buffer['poolSize'], allocPool = createUnsafeBuffer(poolSize)['buffer'], markAsUntransferable(allocPool), poolOffset = 0x0;
}
createPool();
function alignPool() {
    poolOffset & 0x7 && (poolOffset |= 0x7, poolOffset++);
}
let bufferWarningAlreadyEmitted = ![], nodeModulesCheckCounter = 0x0;
const bufferWarning = _0x2311dd(0x205) + 'issues.\x20Please\x20use\x20the\x20Buffer.alloc(),\x20' + _0x2311dd(0x206);
function showFlaggedDeprecation() {
    const _0x3a3308 = _0x2311dd;
    if (bufferWarningAlreadyEmitted || ++nodeModulesCheckCounter > 0x2710 || !require(_0x3a3308(0x207))[_0x3a3308(0x208)]('--pending-deprecation') && isInsideNodeModules())
        return;
    process[_0x3a3308(0x209)](bufferWarning, _0x3a3308(0x20a), _0x3a3308(0x20b)), bufferWarningAlreadyEmitted = !![];
}
function toInteger(_0xf89729, _0x3428de) {
    _0xf89729 = +_0xf89729;
    if (!NumberIsNaN(_0xf89729) && _0xf89729 >= NumberMIN_SAFE_INTEGER && _0xf89729 <= NumberMAX_SAFE_INTEGER)
        return _0xf89729 % 0x1 === 0x0 ? _0xf89729 : MathFloor(_0xf89729);
    return _0x3428de;
}
function _copy(_0x16e034, _0x25aa90, _0x41f353, _0x4b2d7b, _0x18b241) {
    const _0x53a530 = _0x2311dd;
    if (!isUint8Array(_0x16e034))
        throw new ERR_INVALID_ARG_TYPE(_0x53a530(0x20c), [
            _0x53a530(0x20d),
            'Uint8Array'
        ], _0x16e034);
    if (!isUint8Array(_0x25aa90))
        throw new ERR_INVALID_ARG_TYPE('target', [
            _0x53a530(0x20d),
            _0x53a530(0x20e)
        ], _0x25aa90);
    if (_0x41f353 === undefined)
        _0x41f353 = 0x0;
    else {
        _0x41f353 = toInteger(_0x41f353, 0x0);
        if (_0x41f353 < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x53a530(0x20f), _0x53a530(0x210), _0x41f353);
    }
    if (_0x4b2d7b === undefined)
        _0x4b2d7b = 0x0;
    else {
        _0x4b2d7b = toInteger(_0x4b2d7b, 0x0);
        if (_0x4b2d7b < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x53a530(0x211), '>=\x200', _0x4b2d7b);
    }
    if (_0x18b241 === undefined)
        _0x18b241 = _0x16e034[_0x53a530(0x204)];
    else {
        _0x18b241 = toInteger(_0x18b241, 0x0);
        if (_0x18b241 < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x53a530(0x212), '>=\x200', _0x18b241);
    }
    if (_0x41f353 >= _0x25aa90[_0x53a530(0x204)] || _0x4b2d7b >= _0x18b241)
        return 0x0;
    if (_0x4b2d7b > _0x16e034['length'])
        throw new ERR_OUT_OF_RANGE(_0x53a530(0x211), _0x53a530(0x213) + _0x16e034[_0x53a530(0x204)], _0x4b2d7b);
    return _copyActual(_0x16e034, _0x25aa90, _0x41f353, _0x4b2d7b, _0x18b241);
}
function _copyActual(_0x427fa0, _0xa475bd, _0x1003b3, _0x4a7933, _0x3630f1) {
    const _0x5f5c3d = _0x2311dd;
    if (_0x3630f1 - _0x4a7933 > _0xa475bd['length'] - _0x1003b3)
        _0x3630f1 = _0x4a7933 + _0xa475bd[_0x5f5c3d(0x204)] - _0x1003b3;
    let _0x47fa01 = _0x3630f1 - _0x4a7933;
    const _0x4b92c5 = _0x427fa0[_0x5f5c3d(0x204)] - _0x4a7933;
    if (_0x47fa01 > _0x4b92c5)
        _0x47fa01 = _0x4b92c5;
    if (_0x4a7933 !== 0x0 || _0x3630f1 < _0x427fa0[_0x5f5c3d(0x204)])
        _0x427fa0 = new Uint8Array(_0x427fa0[_0x5f5c3d(0x1f8)], _0x427fa0[_0x5f5c3d(0x214)] + _0x4a7933, _0x47fa01);
    return TypedArrayPrototypeSet(_0xa475bd, _0x427fa0, _0x1003b3), _0x47fa01;
}
function Buffer(_0x54590f, _0x143bbd, _0x5c5f4) {
    const _0x34da4f = _0x2311dd;
    showFlaggedDeprecation();
    if (typeof _0x54590f === _0x34da4f(0x215)) {
        if (typeof _0x143bbd === _0x34da4f(0x216))
            throw new ERR_INVALID_ARG_TYPE(_0x34da4f(0x216), _0x34da4f(0x216), _0x54590f);
        return Buffer[_0x34da4f(0x217)](_0x54590f);
    }
    return Buffer[_0x34da4f(0x218)](_0x54590f, _0x143bbd, _0x5c5f4);
}
ObjectDefineProperty(Buffer, SymbolSpecies, {
    'enumerable': ![],
    'configurable': !![],
    'get'() {
        return FastBuffer;
    }
}), Buffer[_0x2311dd(0x218)] = function from(_0x2ab4de, _0x6fb63b, _0x1572cc) {
    const _0x5ac48d = _0x2311dd;
    if (typeof _0x2ab4de === 'string')
        return fromString(_0x2ab4de, _0x6fb63b);
    if (typeof _0x2ab4de === _0x5ac48d(0x219) && _0x2ab4de !== null) {
        if (isAnyArrayBuffer(_0x2ab4de))
            return fromArrayBuffer(_0x2ab4de, _0x6fb63b, _0x1572cc);
        const _0x3f9fe7 = _0x2ab4de[_0x5ac48d(0x21a)] && _0x2ab4de[_0x5ac48d(0x21a)]();
        if (_0x3f9fe7 != null && _0x3f9fe7 !== _0x2ab4de && (typeof _0x3f9fe7 === 'string' || typeof _0x3f9fe7 === _0x5ac48d(0x219)))
            return from(_0x3f9fe7, _0x6fb63b, _0x1572cc);
        const _0x5147fc = fromObject(_0x2ab4de);
        if (_0x5147fc)
            return _0x5147fc;
        if (typeof _0x2ab4de[SymbolToPrimitive] === _0x5ac48d(0x21b)) {
            const _0x25d823 = _0x2ab4de[SymbolToPrimitive](_0x5ac48d(0x216));
            if (typeof _0x25d823 === _0x5ac48d(0x216))
                return fromString(_0x25d823, _0x6fb63b);
        }
    }
    throw new ERR_INVALID_ARG_TYPE(_0x5ac48d(0x21c), [
        'string',
        'Buffer',
        _0x5ac48d(0x21d),
        'Array',
        'Array-like\x20Object'
    ], _0x2ab4de);
};
const of = (..._0x46bc48) => {
    const _0x5c9f33 = _0x2311dd, _0x5d7d35 = createUnsafeBuffer(_0x46bc48[_0x5c9f33(0x204)]);
    for (let _0x514038 = 0x0; _0x514038 < _0x46bc48[_0x5c9f33(0x204)]; _0x514038++)
        _0x5d7d35[_0x514038] = _0x46bc48[_0x514038];
    return _0x5d7d35;
};
Buffer['of'] = of, ObjectSetPrototypeOf(Buffer, Uint8Array);
const assertSize = hideStackFrames(_0x1f0f06 => {
    const _0x143e2f = _0x2311dd;
    validateNumber(_0x1f0f06, 'size');
    if (!(_0x1f0f06 >= 0x0 && _0x1f0f06 <= kMaxLength))
        throw new ERR_INVALID_ARG_VALUE[(_0x143e2f(0x21e))](_0x143e2f(0x21f), _0x1f0f06);
});
Buffer[_0x2311dd(0x217)] = function alloc(_0x1fc659, _0x275627, _0x5c40c9) {
    assertSize(_0x1fc659);
    if (_0x275627 !== undefined && _0x275627 !== 0x0 && _0x1fc659 > 0x0) {
        const _0x1c7ba8 = createUnsafeBuffer(_0x1fc659);
        return _fill(_0x1c7ba8, _0x275627, 0x0, _0x1c7ba8['length'], _0x5c40c9);
    }
    return new FastBuffer(_0x1fc659);
}, Buffer[_0x2311dd(0x220)] = function allocUnsafe(_0x3dcba6) {
    return assertSize(_0x3dcba6), allocate(_0x3dcba6);
}, Buffer[_0x2311dd(0x221)] = function allocUnsafeSlow(_0x2cd225) {
    return assertSize(_0x2cd225), createUnsafeBuffer(_0x2cd225);
};
function SlowBuffer(_0x7b50b1) {
    return assertSize(_0x7b50b1), createUnsafeBuffer(_0x7b50b1);
}
ObjectSetPrototypeOf(SlowBuffer[_0x2311dd(0x201)], Uint8ArrayPrototype), ObjectSetPrototypeOf(SlowBuffer, Uint8Array);
function allocate(_0x1d9fb8) {
    const _0x2be8a4 = _0x2311dd;
    if (_0x1d9fb8 <= 0x0)
        return new FastBuffer();
    if (_0x1d9fb8 < Buffer[_0x2be8a4(0x203)] >>> 0x1) {
        if (_0x1d9fb8 > poolSize - poolOffset)
            createPool();
        const _0x2bde47 = new FastBuffer(allocPool, poolOffset, _0x1d9fb8);
        return poolOffset += _0x1d9fb8, alignPool(), _0x2bde47;
    }
    return createUnsafeBuffer(_0x1d9fb8);
}
function fromStringFast(_0x426c6a, _0xa2b1c1) {
    const _0x5dc8fb = _0x2311dd, _0x37de1f = _0xa2b1c1['byteLength'](_0x426c6a);
    if (_0x37de1f >= Buffer[_0x5dc8fb(0x203)] >>> 0x1)
        return createFromString(_0x426c6a, _0xa2b1c1['encodingVal']);
    if (_0x37de1f > poolSize - poolOffset)
        createPool();
    let _0x4d0779 = new FastBuffer(allocPool, poolOffset, _0x37de1f);
    const _0x2801f3 = _0xa2b1c1[_0x5dc8fb(0x222)](_0x4d0779, _0x426c6a, 0x0, _0x37de1f);
    return _0x2801f3 !== _0x37de1f && (_0x4d0779 = new FastBuffer(allocPool, poolOffset, _0x2801f3)), poolOffset += _0x2801f3, alignPool(), _0x4d0779;
}
function fromString(_0x1bc858, _0x122594) {
    const _0x296c9b = _0x2311dd;
    let _0x184f44;
    if (typeof _0x122594 !== _0x296c9b(0x216) || _0x122594[_0x296c9b(0x204)] === 0x0) {
        if (_0x1bc858[_0x296c9b(0x204)] === 0x0)
            return new FastBuffer();
        _0x184f44 = encodingOps[_0x296c9b(0x223)], _0x122594 = undefined;
    } else {
        _0x184f44 = getEncodingOps(_0x122594);
        if (_0x184f44 === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x122594);
        if (_0x1bc858[_0x296c9b(0x204)] === 0x0)
            return new FastBuffer();
    }
    return fromStringFast(_0x1bc858, _0x184f44);
}
function fromArrayBuffer(_0xc9773a, _0x30c1a7, _0x2de15d) {
    const _0x32a8b1 = _0x2311dd;
    if (_0x30c1a7 === undefined)
        _0x30c1a7 = 0x0;
    else {
        _0x30c1a7 = +_0x30c1a7;
        if (NumberIsNaN(_0x30c1a7))
            _0x30c1a7 = 0x0;
    }
    const _0x483a44 = _0xc9773a[_0x32a8b1(0x224)] - _0x30c1a7;
    if (_0x483a44 < 0x0)
        throw new ERR_BUFFER_OUT_OF_BOUNDS('offset');
    if (_0x2de15d === undefined)
        _0x2de15d = _0x483a44;
    else {
        _0x2de15d = +_0x2de15d;
        if (_0x2de15d > 0x0) {
            if (_0x2de15d > _0x483a44)
                throw new ERR_BUFFER_OUT_OF_BOUNDS(_0x32a8b1(0x204));
        } else
            _0x2de15d = 0x0;
    }
    return new FastBuffer(_0xc9773a, _0x30c1a7, _0x2de15d);
}
function fromArrayLike(_0x339ff8) {
    const _0x355af0 = _0x2311dd;
    if (_0x339ff8[_0x355af0(0x204)] <= 0x0)
        return new FastBuffer();
    if (_0x339ff8['length'] < Buffer['poolSize'] >>> 0x1) {
        if (_0x339ff8[_0x355af0(0x204)] > poolSize - poolOffset)
            createPool();
        const _0x2720e1 = new FastBuffer(allocPool, poolOffset, _0x339ff8[_0x355af0(0x204)]);
        return TypedArrayPrototypeSet(_0x2720e1, _0x339ff8, 0x0), poolOffset += _0x339ff8[_0x355af0(0x204)], alignPool(), _0x2720e1;
    }
    return new FastBuffer(_0x339ff8);
}
function fromObject(_0x5e2dbc) {
    const _0x2148cd = _0x2311dd;
    if (_0x5e2dbc['length'] !== undefined || isAnyArrayBuffer(_0x5e2dbc[_0x2148cd(0x1f8)])) {
        if (typeof _0x5e2dbc[_0x2148cd(0x204)] !== _0x2148cd(0x215))
            return new FastBuffer();
        return fromArrayLike(_0x5e2dbc);
    }
    if (_0x5e2dbc[_0x2148cd(0x225)] === _0x2148cd(0x20d) && ArrayIsArray(_0x5e2dbc['data']))
        return fromArrayLike(_0x5e2dbc[_0x2148cd(0x226)]);
}
Buffer[_0x2311dd(0x227)] = function isBuffer(_0x23c0a0) {
    return _0x23c0a0 instanceof Buffer;
}, Buffer['compare'] = function compare(_0x1f3a8a, _0xf8b394) {
    const _0x1bc0aa = _0x2311dd;
    if (!isUint8Array(_0x1f3a8a))
        throw new ERR_INVALID_ARG_TYPE(_0x1bc0aa(0x228), [
            _0x1bc0aa(0x20d),
            _0x1bc0aa(0x20e)
        ], _0x1f3a8a);
    if (!isUint8Array(_0xf8b394))
        throw new ERR_INVALID_ARG_TYPE(_0x1bc0aa(0x229), [
            'Buffer',
            _0x1bc0aa(0x20e)
        ], _0xf8b394);
    if (_0x1f3a8a === _0xf8b394)
        return 0x0;
    return _compare(_0x1f3a8a, _0xf8b394);
}, Buffer[_0x2311dd(0x22a)] = function isEncoding(_0x3076fe) {
    const _0x4dd084 = _0x2311dd;
    return typeof _0x3076fe === 'string' && _0x3076fe[_0x4dd084(0x204)] !== 0x0 && normalizeEncoding(_0x3076fe) !== undefined;
}, Buffer[kIsEncodingSymbol] = Buffer[_0x2311dd(0x22a)], Buffer[_0x2311dd(0x22b)] = function concat(_0x1d7326, _0x42c6de) {
    const _0x2ce8aa = _0x2311dd;
    validateArray(_0x1d7326, 'list');
    if (_0x1d7326[_0x2ce8aa(0x204)] === 0x0)
        return new FastBuffer();
    if (_0x42c6de === undefined) {
        _0x42c6de = 0x0;
        for (let _0x20c42f = 0x0; _0x20c42f < _0x1d7326['length']; _0x20c42f++) {
            _0x1d7326[_0x20c42f][_0x2ce8aa(0x204)] && (_0x42c6de += _0x1d7326[_0x20c42f][_0x2ce8aa(0x204)]);
        }
    } else
        validateOffset(_0x42c6de, 'length');
    const _0xbd1636 = Buffer[_0x2ce8aa(0x220)](_0x42c6de);
    let _0x181033 = 0x0;
    for (let _0xa084f8 = 0x0; _0xa084f8 < _0x1d7326['length']; _0xa084f8++) {
        const _0x54ac0e = _0x1d7326[_0xa084f8];
        if (!isUint8Array(_0x54ac0e))
            throw new ERR_INVALID_ARG_TYPE('list[' + _0xa084f8 + ']', [
                _0x2ce8aa(0x20d),
                _0x2ce8aa(0x20e)
            ], _0x1d7326[_0xa084f8]);
        _0x181033 += _copyActual(_0x54ac0e, _0xbd1636, _0x181033, 0x0, _0x54ac0e[_0x2ce8aa(0x204)]);
    }
    return _0x181033 < _0x42c6de && TypedArrayPrototypeFill(_0xbd1636, 0x0, _0x181033, _0x42c6de), _0xbd1636;
};
function base64ByteLength(_0x3b61a6, _0x502599) {
    if (StringPrototypeCharCodeAt(_0x3b61a6, _0x502599 - 0x1) === 0x3d)
        _0x502599--;
    if (_0x502599 > 0x1 && StringPrototypeCharCodeAt(_0x3b61a6, _0x502599 - 0x1) === 0x3d)
        _0x502599--;
    return _0x502599 * 0x3 >>> 0x2;
}
const encodingOps = {
    'utf8': {
        'encoding': _0x2311dd(0x223),
        'encodingVal': encodingsMap['utf8'],
        'byteLength': byteLengthUtf8,
        'write': (_0x43f928, _0x21733a, _0x3307d6, _0x220a2e) => _0x43f928[_0x2311dd(0x22c)](_0x21733a, _0x3307d6, _0x220a2e),
        'slice': (_0x31a27a, _0x49e884, _0x5f4c7e) => _0x31a27a['utf8Slice'](_0x49e884, _0x5f4c7e),
        'indexOf': (_0x4d83f4, _0x516589, _0x2e29b6, _0xd8c53d) => indexOfString(_0x4d83f4, _0x516589, _0x2e29b6, encodingsMap[_0x2311dd(0x223)], _0xd8c53d)
    },
    'ucs2': {
        'encoding': _0x2311dd(0x22d),
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x1581a7 => _0x1581a7[_0x2311dd(0x204)] * 0x2,
        'write': (_0x53bddc, _0x1d5cba, _0x56df44, _0xf42f78) => _0x53bddc[_0x2311dd(0x22e)](_0x1d5cba, _0x56df44, _0xf42f78),
        'slice': (_0x2fa46b, _0x4afe97, _0x318d30) => _0x2fa46b[_0x2311dd(0x22f)](_0x4afe97, _0x318d30),
        'indexOf': (_0x246ec7, _0x4f09dd, _0xd31ae8, _0x4f89a3) => indexOfString(_0x246ec7, _0x4f09dd, _0xd31ae8, encodingsMap['utf16le'], _0x4f89a3)
    },
    'utf16le': {
        'encoding': 'utf16le',
        'encodingVal': encodingsMap[_0x2311dd(0x230)],
        'byteLength': _0x4d6e82 => _0x4d6e82[_0x2311dd(0x204)] * 0x2,
        'write': (_0x241343, _0x20b804, _0x1101cf, _0x20d27d) => _0x241343[_0x2311dd(0x22e)](_0x20b804, _0x1101cf, _0x20d27d),
        'slice': (_0x543ce1, _0x20f076, _0x418999) => _0x543ce1[_0x2311dd(0x22f)](_0x20f076, _0x418999),
        'indexOf': (_0xbdbcab, _0x76bd15, _0x2c61a9, _0x3186eb) => indexOfString(_0xbdbcab, _0x76bd15, _0x2c61a9, encodingsMap[_0x2311dd(0x230)], _0x3186eb)
    },
    'latin1': {
        'encoding': _0x2311dd(0x231),
        'encodingVal': encodingsMap[_0x2311dd(0x231)],
        'byteLength': _0x303318 => _0x303318[_0x2311dd(0x204)],
        'write': (_0x578084, _0x32d7bd, _0x50f1a3, _0x3c2c19) => _0x578084[_0x2311dd(0x232)](_0x32d7bd, _0x50f1a3, _0x3c2c19),
        'slice': (_0x5e0ee6, _0x2e0a8c, _0x15fecf) => _0x5e0ee6['latin1Slice'](_0x2e0a8c, _0x15fecf),
        'indexOf': (_0x4b6b36, _0x207781, _0x40f205, _0x2f7e15) => indexOfString(_0x4b6b36, _0x207781, _0x40f205, encodingsMap[_0x2311dd(0x231)], _0x2f7e15)
    },
    'ascii': {
        'encoding': _0x2311dd(0x233),
        'encodingVal': encodingsMap['ascii'],
        'byteLength': _0x256988 => _0x256988['length'],
        'write': (_0x5e86b1, _0x3adab4, _0x1ddc2f, _0x1a98e5) => _0x5e86b1[_0x2311dd(0x234)](_0x3adab4, _0x1ddc2f, _0x1a98e5),
        'slice': (_0x54a308, _0x544f5e, _0x30c529) => _0x54a308[_0x2311dd(0x235)](_0x544f5e, _0x30c529),
        'indexOf': (_0xb89f3f, _0x138126, _0x1a833c, _0x409972) => indexOfBuffer(_0xb89f3f, fromStringFast(_0x138126, encodingOps[_0x2311dd(0x233)]), _0x1a833c, encodingsMap[_0x2311dd(0x233)], _0x409972)
    },
    'base64': {
        'encoding': 'base64',
        'encodingVal': encodingsMap[_0x2311dd(0x236)],
        'byteLength': _0x30e25a => base64ByteLength(_0x30e25a, _0x30e25a[_0x2311dd(0x204)]),
        'write': (_0x34db2b, _0xa4dd2c, _0x4d7889, _0x577ce5) => _0x34db2b[_0x2311dd(0x237)](_0xa4dd2c, _0x4d7889, _0x577ce5),
        'slice': (_0x4e7079, _0x418ea2, _0x3b8e5c) => _0x4e7079[_0x2311dd(0x238)](_0x418ea2, _0x3b8e5c),
        'indexOf': (_0x2b0e8a, _0x16afef, _0xa834c3, _0x327cad) => indexOfBuffer(_0x2b0e8a, fromStringFast(_0x16afef, encodingOps[_0x2311dd(0x236)]), _0xa834c3, encodingsMap[_0x2311dd(0x236)], _0x327cad)
    },
    'base64url': {
        'encoding': _0x2311dd(0x239),
        'encodingVal': encodingsMap[_0x2311dd(0x239)],
        'byteLength': _0x2dcea8 => base64ByteLength(_0x2dcea8, _0x2dcea8[_0x2311dd(0x204)]),
        'write': (_0x1c6cba, _0x1702dc, _0x5bdb72, _0x4486a7) => _0x1c6cba['base64urlWrite'](_0x1702dc, _0x5bdb72, _0x4486a7),
        'slice': (_0x1cb951, _0x68c3ac, _0xc01d3d) => _0x1cb951[_0x2311dd(0x23a)](_0x68c3ac, _0xc01d3d),
        'indexOf': (_0x3f4326, _0x1336eb, _0x366354, _0x19d37c) => indexOfBuffer(_0x3f4326, fromStringFast(_0x1336eb, encodingOps[_0x2311dd(0x239)]), _0x366354, encodingsMap['base64url'], _0x19d37c)
    },
    'hex': {
        'encoding': _0x2311dd(0x23b),
        'encodingVal': encodingsMap['hex'],
        'byteLength': _0x109ea1 => _0x109ea1['length'] >>> 0x1,
        'write': (_0xe189a3, _0x7dbc26, _0x1b7a95, _0x31b792) => _0xe189a3[_0x2311dd(0x23c)](_0x7dbc26, _0x1b7a95, _0x31b792),
        'slice': (_0x3c6148, _0x245945, _0x149228) => _0x3c6148[_0x2311dd(0x23d)](_0x245945, _0x149228),
        'indexOf': (_0x4d38b4, _0x207d24, _0x13ac69, _0x3e6982) => indexOfBuffer(_0x4d38b4, fromStringFast(_0x207d24, encodingOps['hex']), _0x13ac69, encodingsMap[_0x2311dd(0x23b)], _0x3e6982)
    }
};
function getEncodingOps(_0x1f78ba) {
    const _0x21c377 = _0x2311dd;
    _0x1f78ba += '';
    switch (_0x1f78ba['length']) {
    case 0x4:
        if (_0x1f78ba === _0x21c377(0x223))
            return encodingOps['utf8'];
        if (_0x1f78ba === _0x21c377(0x22d))
            return encodingOps['ucs2'];
        _0x1f78ba = StringPrototypeToLowerCase(_0x1f78ba);
        if (_0x1f78ba === _0x21c377(0x223))
            return encodingOps['utf8'];
        if (_0x1f78ba === _0x21c377(0x22d))
            return encodingOps['ucs2'];
        break;
    case 0x5:
        if (_0x1f78ba === 'utf-8')
            return encodingOps[_0x21c377(0x223)];
        if (_0x1f78ba === _0x21c377(0x233))
            return encodingOps['ascii'];
        if (_0x1f78ba === 'ucs-2')
            return encodingOps['ucs2'];
        _0x1f78ba = StringPrototypeToLowerCase(_0x1f78ba);
        if (_0x1f78ba === 'utf-8')
            return encodingOps[_0x21c377(0x223)];
        if (_0x1f78ba === _0x21c377(0x233))
            return encodingOps[_0x21c377(0x233)];
        if (_0x1f78ba === _0x21c377(0x23e))
            return encodingOps['ucs2'];
        break;
    case 0x7:
        if (_0x1f78ba === _0x21c377(0x230) || StringPrototypeToLowerCase(_0x1f78ba) === 'utf16le')
            return encodingOps[_0x21c377(0x230)];
        break;
    case 0x8:
        if (_0x1f78ba === 'utf-16le' || StringPrototypeToLowerCase(_0x1f78ba) === _0x21c377(0x23f))
            return encodingOps[_0x21c377(0x230)];
        break;
    case 0x6:
        if (_0x1f78ba === _0x21c377(0x231) || _0x1f78ba === _0x21c377(0x240))
            return encodingOps[_0x21c377(0x231)];
        if (_0x1f78ba === _0x21c377(0x236))
            return encodingOps[_0x21c377(0x236)];
        _0x1f78ba = StringPrototypeToLowerCase(_0x1f78ba);
        if (_0x1f78ba === 'latin1' || _0x1f78ba === _0x21c377(0x240))
            return encodingOps['latin1'];
        if (_0x1f78ba === _0x21c377(0x236))
            return encodingOps[_0x21c377(0x236)];
        break;
    case 0x3:
        if (_0x1f78ba === 'hex' || StringPrototypeToLowerCase(_0x1f78ba) === 'hex')
            return encodingOps['hex'];
        break;
    case 0x9:
        if (_0x1f78ba === _0x21c377(0x239) || StringPrototypeToLowerCase(_0x1f78ba) === _0x21c377(0x239))
            return encodingOps['base64url'];
        break;
    }
}
function _0x23ba(_0x9dc7d3, _0x1f38a9) {
    return _0x23ba = function (_0x3dcaa1, _0x23ba3c) {
        _0x3dcaa1 = _0x3dcaa1 - 0x1eb;
        let _0x5f2945 = _0x3dca[_0x3dcaa1];
        return _0x5f2945;
    }, _0x23ba(_0x9dc7d3, _0x1f38a9);
}
function byteLength(_0x25b5f3, _0x5a4ed7) {
    const _0x3e5264 = _0x2311dd;
    if (typeof _0x25b5f3 !== _0x3e5264(0x216)) {
        if (isArrayBufferView(_0x25b5f3) || isAnyArrayBuffer(_0x25b5f3))
            return _0x25b5f3['byteLength'];
        throw new ERR_INVALID_ARG_TYPE(_0x3e5264(0x216), [
            'string',
            'Buffer',
            _0x3e5264(0x21d)
        ], _0x25b5f3);
    }
    const _0x18063f = _0x25b5f3['length'], _0x2c1ea0 = arguments[_0x3e5264(0x204)] > 0x2 && arguments[0x2] === !![];
    if (!_0x2c1ea0 && _0x18063f === 0x0)
        return 0x0;
    if (!_0x5a4ed7)
        return _0x2c1ea0 ? -0x1 : byteLengthUtf8(_0x25b5f3);
    const _0x4a8e03 = getEncodingOps(_0x5a4ed7);
    if (_0x4a8e03 === undefined)
        return _0x2c1ea0 ? -0x1 : byteLengthUtf8(_0x25b5f3);
    return _0x4a8e03[_0x3e5264(0x224)](_0x25b5f3);
}
Buffer[_0x2311dd(0x224)] = byteLength, ObjectDefineProperty(Buffer[_0x2311dd(0x201)], 'parent', {
    'enumerable': !![],
    'get'() {
        const _0x53cc5f = _0x2311dd;
        if (!(this instanceof Buffer))
            return undefined;
        return this[_0x53cc5f(0x1f8)];
    }
}), ObjectDefineProperty(Buffer[_0x2311dd(0x201)], _0x2311dd(0x241), {
    'enumerable': !![],
    'get'() {
        const _0x1551ae = _0x2311dd;
        if (!(this instanceof Buffer))
            return undefined;
        return this[_0x1551ae(0x214)];
    }
}), Buffer[_0x2311dd(0x201)][_0x2311dd(0x242)] = function copy(_0x1b8162, _0x55c7c4, _0x3ab1cf, _0x2694c5) {
    return _copy(this, _0x1b8162, _0x55c7c4, _0x3ab1cf, _0x2694c5);
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x243)] = function toString(_0x49636a, _0x61e9a2, _0x3d5d15) {
    const _0x83da12 = _0x2311dd;
    if (arguments[_0x83da12(0x204)] === 0x0)
        return this[_0x83da12(0x244)](0x0, this['length']);
    const _0x25df54 = this['length'];
    if (_0x61e9a2 <= 0x0)
        _0x61e9a2 = 0x0;
    else {
        if (_0x61e9a2 >= _0x25df54)
            return '';
        else
            _0x61e9a2 |= 0x0;
    }
    if (_0x3d5d15 === undefined || _0x3d5d15 > _0x25df54)
        _0x3d5d15 = _0x25df54;
    else
        _0x3d5d15 |= 0x0;
    if (_0x3d5d15 <= _0x61e9a2)
        return '';
    if (_0x49636a === undefined)
        return this['utf8Slice'](_0x61e9a2, _0x3d5d15);
    const _0x19248b = getEncodingOps(_0x49636a);
    if (_0x19248b === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x49636a);
    return _0x19248b[_0x83da12(0x245)](this, _0x61e9a2, _0x3d5d15);
}, Buffer[_0x2311dd(0x201)]['equals'] = function equals(_0x4a469c) {
    const _0x3507df = _0x2311dd;
    if (!isUint8Array(_0x4a469c))
        throw new ERR_INVALID_ARG_TYPE(_0x3507df(0x246), [
            _0x3507df(0x20d),
            _0x3507df(0x20e)
        ], _0x4a469c);
    if (this === _0x4a469c)
        return !![];
    if (this[_0x3507df(0x224)] !== _0x4a469c[_0x3507df(0x224)])
        return ![];
    return this[_0x3507df(0x224)] === 0x0 || _compare(this, _0x4a469c) === 0x0;
};
let INSPECT_MAX_BYTES = 0x32;
Buffer[_0x2311dd(0x201)][customInspectSymbol] = function inspect(_0x2b4bab, _0x22cd8f) {
    const _0x51a341 = _0x2311dd, _0x414ff4 = INSPECT_MAX_BYTES, _0x2c876c = MathMin(_0x414ff4, this[_0x51a341(0x204)]), _0x5777ea = this['length'] - _0x414ff4;
    let _0x45d5be = StringPrototypeTrim(StringPrototypeReplace(this[_0x51a341(0x23d)](0x0, _0x2c876c), /(.{2})/g, _0x51a341(0x247)));
    if (_0x5777ea > 0x0)
        _0x45d5be += _0x51a341(0x248) + _0x5777ea + _0x51a341(0x249) + (_0x5777ea > 0x1 ? 's' : '');
    if (_0x22cd8f) {
        let _0x2170b8 = ![];
        const _0x1dd95b = _0x22cd8f['showHidden'] ? ALL_PROPERTIES : ONLY_ENUMERABLE, _0x6b00e = ObjectCreate(null);
        ArrayPrototypeForEach(getOwnNonIndexProperties(this, _0x1dd95b), _0x184b52 => {
            _0x2170b8 = !![], _0x6b00e[_0x184b52] = this[_0x184b52];
        });
        if (_0x2170b8) {
            if (this[_0x51a341(0x204)] !== 0x0)
                _0x45d5be += ',\x20';
            _0x45d5be += StringPrototypeSlice(utilInspect(_0x6b00e, {
                ..._0x22cd8f,
                'breakLength': Infinity,
                'compact': !![]
            }), 0x1b, -0x2);
        }
    }
    return '<' + this[_0x51a341(0x202)]['name'] + '\x20' + _0x45d5be + '>';
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x24a)] = Buffer[_0x2311dd(0x201)][customInspectSymbol], Buffer['prototype'][_0x2311dd(0x24b)] = function compare(_0x2390a2, _0x463717, _0x3376dd, _0x198ab3, _0x33126e) {
    const _0x573b1c = _0x2311dd;
    if (!isUint8Array(_0x2390a2))
        throw new ERR_INVALID_ARG_TYPE(_0x573b1c(0x24c), [
            _0x573b1c(0x20d),
            _0x573b1c(0x20e)
        ], _0x2390a2);
    if (arguments[_0x573b1c(0x204)] === 0x1)
        return _compare(this, _0x2390a2);
    if (_0x463717 === undefined)
        _0x463717 = 0x0;
    else
        validateOffset(_0x463717, _0x573b1c(0x20f));
    if (_0x3376dd === undefined)
        _0x3376dd = _0x2390a2[_0x573b1c(0x204)];
    else
        validateOffset(_0x3376dd, _0x573b1c(0x24d), 0x0, _0x2390a2['length']);
    if (_0x198ab3 === undefined)
        _0x198ab3 = 0x0;
    else
        validateOffset(_0x198ab3, _0x573b1c(0x211));
    if (_0x33126e === undefined)
        _0x33126e = this['length'];
    else
        validateOffset(_0x33126e, _0x573b1c(0x212), 0x0, this['length']);
    if (_0x198ab3 >= _0x33126e)
        return _0x463717 >= _0x3376dd ? 0x0 : -0x1;
    if (_0x463717 >= _0x3376dd)
        return 0x1;
    return compareOffset(this, _0x2390a2, _0x463717, _0x198ab3, _0x3376dd, _0x33126e);
};
function bidirectionalIndexOf(_0x2da2f7, _0x3685f5, _0x13d06f, _0x5759d2, _0x3f6809) {
    const _0x39d11f = _0x2311dd;
    validateBuffer(_0x2da2f7);
    if (typeof _0x13d06f === 'string')
        _0x5759d2 = _0x13d06f, _0x13d06f = undefined;
    else {
        if (_0x13d06f > 0x7fffffff)
            _0x13d06f = 0x7fffffff;
        else
            _0x13d06f < -0x80000000 && (_0x13d06f = -0x80000000);
    }
    _0x13d06f = +_0x13d06f;
    NumberIsNaN(_0x13d06f) && (_0x13d06f = _0x3f6809 ? 0x0 : _0x2da2f7['length'] || _0x2da2f7['byteLength']);
    _0x3f6809 = !!_0x3f6809;
    if (typeof _0x3685f5 === _0x39d11f(0x215))
        return indexOfNumber(_0x2da2f7, _0x3685f5 >>> 0x0, _0x13d06f, _0x3f6809);
    let _0x4bbd56;
    if (_0x5759d2 === undefined)
        _0x4bbd56 = encodingOps[_0x39d11f(0x223)];
    else
        _0x4bbd56 = getEncodingOps(_0x5759d2);
    if (typeof _0x3685f5 === _0x39d11f(0x216)) {
        if (_0x4bbd56 === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x5759d2);
        return _0x4bbd56['indexOf'](_0x2da2f7, _0x3685f5, _0x13d06f, _0x3f6809);
    }
    if (isUint8Array(_0x3685f5)) {
        const _0x1a66a0 = _0x4bbd56 === undefined ? encodingsMap[_0x39d11f(0x223)] : _0x4bbd56['encodingVal'];
        return indexOfBuffer(_0x2da2f7, _0x3685f5, _0x13d06f, _0x1a66a0, _0x3f6809);
    }
    throw new ERR_INVALID_ARG_TYPE(_0x39d11f(0x24e), [
        _0x39d11f(0x215),
        'string',
        _0x39d11f(0x20d),
        _0x39d11f(0x20e)
    ], _0x3685f5);
}
Buffer['prototype'][_0x2311dd(0x24f)] = function indexOf(_0x438248, _0x526a00, _0x45f7e2) {
    return bidirectionalIndexOf(this, _0x438248, _0x526a00, _0x45f7e2, !![]);
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x250)] = function lastIndexOf(_0x209b34, _0x5a00cc, _0x56a16d) {
    return bidirectionalIndexOf(this, _0x209b34, _0x5a00cc, _0x56a16d, ![]);
}, Buffer['prototype'][_0x2311dd(0x251)] = function includes(_0x874fdf, _0x52e2b4, _0x243ed4) {
    const _0x38e189 = _0x2311dd;
    return this[_0x38e189(0x24f)](_0x874fdf, _0x52e2b4, _0x243ed4) !== -0x1;
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x252)] = function fill(_0xf66709, _0x3f9e98, _0x32951a, _0x2f317f) {
    return _fill(this, _0xf66709, _0x3f9e98, _0x32951a, _0x2f317f);
};
function _fill(_0x2c0bb6, _0x3a8383, _0x48fb00, _0x558494, _0x32cfee) {
    const _0x233a3a = _0x2311dd;
    if (typeof _0x3a8383 === 'string') {
        if (_0x48fb00 === undefined || typeof _0x48fb00 === _0x233a3a(0x216))
            _0x32cfee = _0x48fb00, _0x48fb00 = 0x0, _0x558494 = _0x2c0bb6[_0x233a3a(0x204)];
        else
            typeof _0x558494 === _0x233a3a(0x216) && (_0x32cfee = _0x558494, _0x558494 = _0x2c0bb6[_0x233a3a(0x204)]);
        const _0x353551 = normalizeEncoding(_0x32cfee);
        if (_0x353551 === undefined) {
            validateString(_0x32cfee, _0x233a3a(0x253));
            throw new ERR_UNKNOWN_ENCODING(_0x32cfee);
        }
        if (_0x3a8383[_0x233a3a(0x204)] === 0x0)
            _0x3a8383 = 0x0;
        else {
            if (_0x3a8383[_0x233a3a(0x204)] === 0x1) {
                if (_0x353551 === _0x233a3a(0x223)) {
                    const _0x244849 = StringPrototypeCharCodeAt(_0x3a8383, 0x0);
                    _0x244849 < 0x80 && (_0x3a8383 = _0x244849);
                } else
                    _0x353551 === _0x233a3a(0x231) && (_0x3a8383 = StringPrototypeCharCodeAt(_0x3a8383, 0x0));
            }
        }
    } else
        _0x32cfee = undefined;
    if (_0x48fb00 === undefined)
        _0x48fb00 = 0x0, _0x558494 = _0x2c0bb6['length'];
    else {
        validateOffset(_0x48fb00, 'offset');
        _0x558494 === undefined ? _0x558494 = _0x2c0bb6[_0x233a3a(0x204)] : validateOffset(_0x558494, _0x233a3a(0x254), 0x0, _0x2c0bb6[_0x233a3a(0x204)]);
        if (_0x48fb00 >= _0x558494)
            return _0x2c0bb6;
    }
    if (typeof _0x3a8383 === _0x233a3a(0x215)) {
        const _0x318881 = TypedArrayPrototypeGetByteLength(_0x2c0bb6), _0x54d1a8 = _0x558494 - _0x48fb00;
        if (_0x48fb00 > _0x558494 || _0x54d1a8 + _0x48fb00 > _0x318881)
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        TypedArrayPrototypeFill(_0x2c0bb6, _0x3a8383, _0x48fb00, _0x558494);
    } else {
        const _0x15698c = bindingFill(_0x2c0bb6, _0x3a8383, _0x48fb00, _0x558494, _0x32cfee);
        if (_0x15698c < 0x0) {
            if (_0x15698c === -0x1)
                throw new ERR_INVALID_ARG_VALUE('value', _0x3a8383);
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        }
    }
    return _0x2c0bb6;
}
Buffer[_0x2311dd(0x201)]['write'] = function write(_0x3450e4, _0x5746e5, _0x220851, _0x3bd91e) {
    const _0x3e6cfb = _0x2311dd;
    if (_0x5746e5 === undefined)
        return this[_0x3e6cfb(0x22c)](_0x3450e4, 0x0, this[_0x3e6cfb(0x204)]);
    if (_0x220851 === undefined && typeof _0x5746e5 === _0x3e6cfb(0x216))
        _0x3bd91e = _0x5746e5, _0x220851 = this[_0x3e6cfb(0x204)], _0x5746e5 = 0x0;
    else {
        validateOffset(_0x5746e5, _0x3e6cfb(0x241), 0x0, this['length']);
        const _0x411be4 = this['length'] - _0x5746e5;
        if (_0x220851 === undefined)
            _0x220851 = _0x411be4;
        else {
            if (typeof _0x220851 === _0x3e6cfb(0x216))
                _0x3bd91e = _0x220851, _0x220851 = _0x411be4;
            else {
                validateOffset(_0x220851, _0x3e6cfb(0x204), 0x0, this[_0x3e6cfb(0x204)]);
                if (_0x220851 > _0x411be4)
                    _0x220851 = _0x411be4;
            }
        }
    }
    if (!_0x3bd91e)
        return this['utf8Write'](_0x3450e4, _0x5746e5, _0x220851);
    const _0x110516 = getEncodingOps(_0x3bd91e);
    if (_0x110516 === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x3bd91e);
    return _0x110516['write'](this, _0x3450e4, _0x5746e5, _0x220851);
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x255)] = function toJSON() {
    const _0x4c6ce4 = _0x2311dd;
    if (this[_0x4c6ce4(0x204)] > 0x0) {
        const _0x100c1c = new Array(this[_0x4c6ce4(0x204)]);
        for (let _0x695ae3 = 0x0; _0x695ae3 < this[_0x4c6ce4(0x204)]; ++_0x695ae3)
            _0x100c1c[_0x695ae3] = this[_0x695ae3];
        return {
            'type': _0x4c6ce4(0x20d),
            'data': _0x100c1c
        };
    }
    return {
        'type': _0x4c6ce4(0x20d),
        'data': []
    };
};
function adjustOffset(_0x3225c6, _0x582bd5) {
    _0x3225c6 = MathTrunc(_0x3225c6);
    if (_0x3225c6 === 0x0)
        return 0x0;
    if (_0x3225c6 < 0x0)
        return _0x3225c6 += _0x582bd5, _0x3225c6 > 0x0 ? _0x3225c6 : 0x0;
    if (_0x3225c6 < _0x582bd5)
        return _0x3225c6;
    return NumberIsNaN(_0x3225c6) ? 0x0 : _0x582bd5;
}
Buffer['prototype']['slice'] = function slice(_0x45b3ac, _0x4eb3a6) {
    const _0x463a05 = _0x2311dd, _0x55c1c4 = this[_0x463a05(0x204)];
    _0x45b3ac = adjustOffset(_0x45b3ac, _0x55c1c4), _0x4eb3a6 = _0x4eb3a6 !== undefined ? adjustOffset(_0x4eb3a6, _0x55c1c4) : _0x55c1c4;
    const _0x3ee2b1 = _0x4eb3a6 > _0x45b3ac ? _0x4eb3a6 - _0x45b3ac : 0x0;
    return new FastBuffer(this[_0x463a05(0x1f8)], this[_0x463a05(0x214)] + _0x45b3ac, _0x3ee2b1);
};
function swap(_0x25d1b8, _0x3ad0a8, _0x5c49f3) {
    const _0x5a7298 = _0x25d1b8[_0x3ad0a8];
    _0x25d1b8[_0x3ad0a8] = _0x25d1b8[_0x5c49f3], _0x25d1b8[_0x5c49f3] = _0x5a7298;
}
Buffer['prototype']['swap16'] = function swap16() {
    const _0x28cd66 = _0x2311dd, _0x58b4ce = this[_0x28cd66(0x204)];
    if (_0x58b4ce % 0x2 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE(_0x28cd66(0x256));
    if (_0x58b4ce < 0x80) {
        for (let _0x5a5bbc = 0x0; _0x5a5bbc < _0x58b4ce; _0x5a5bbc += 0x2)
            swap(this, _0x5a5bbc, _0x5a5bbc + 0x1);
        return this;
    }
    return _swap16(this);
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x257)] = function swap32() {
    const _0x47ff45 = _0x2311dd, _0xb57af1 = this['length'];
    if (_0xb57af1 % 0x4 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE(_0x47ff45(0x258));
    if (_0xb57af1 < 0xc0) {
        for (let _0x405708 = 0x0; _0x405708 < _0xb57af1; _0x405708 += 0x4) {
            swap(this, _0x405708, _0x405708 + 0x3), swap(this, _0x405708 + 0x1, _0x405708 + 0x2);
        }
        return this;
    }
    return _swap32(this);
}, Buffer['prototype'][_0x2311dd(0x259)] = function swap64() {
    const _0x45e757 = _0x2311dd, _0x402cdb = this[_0x45e757(0x204)];
    if (_0x402cdb % 0x8 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE(_0x45e757(0x25a));
    if (_0x402cdb < 0xc0) {
        for (let _0x5e8269 = 0x0; _0x5e8269 < _0x402cdb; _0x5e8269 += 0x8) {
            swap(this, _0x5e8269, _0x5e8269 + 0x7), swap(this, _0x5e8269 + 0x1, _0x5e8269 + 0x6), swap(this, _0x5e8269 + 0x2, _0x5e8269 + 0x5), swap(this, _0x5e8269 + 0x3, _0x5e8269 + 0x4);
        }
        return this;
    }
    return _swap64(this);
}, Buffer[_0x2311dd(0x201)][_0x2311dd(0x25b)] = Buffer[_0x2311dd(0x201)][_0x2311dd(0x243)];
let transcode;
if (internalBinding('config')[_0x2311dd(0x25c)]) {
    const {
        icuErrName,
        transcode: _transcode
    } = internalBinding(_0x2311dd(0x25d));
    transcode = function transcode(_0x19cce1, _0x8738e1, _0x510c68) {
        const _0x5aeff0 = _0x2311dd;
        if (!isUint8Array(_0x19cce1))
            throw new ERR_INVALID_ARG_TYPE(_0x5aeff0(0x20c), [
                'Buffer',
                _0x5aeff0(0x20e)
            ], _0x19cce1);
        if (_0x19cce1['length'] === 0x0)
            return Buffer[_0x5aeff0(0x217)](0x0);
        _0x8738e1 = normalizeEncoding(_0x8738e1) || _0x8738e1, _0x510c68 = normalizeEncoding(_0x510c68) || _0x510c68;
        const _0x5dbb5d = _transcode(_0x19cce1, _0x8738e1, _0x510c68);
        if (typeof _0x5dbb5d !== _0x5aeff0(0x215))
            return _0x5dbb5d;
        const _0x503a0f = icuErrName(_0x5dbb5d), _0x18b3a5 = new Error(_0x5aeff0(0x25e) + _0x503a0f + ']');
        _0x18b3a5[_0x5aeff0(0x25f)] = _0x503a0f, _0x18b3a5[_0x5aeff0(0x260)] = _0x5dbb5d;
        throw _0x18b3a5;
    };
}
function btoa(_0x35f260) {
    const _0x329f20 = _0x2311dd;
    _0x35f260 = '' + _0x35f260;
    for (let _0x59f1c7 = 0x0; _0x59f1c7 < _0x35f260[_0x329f20(0x204)]; _0x59f1c7++) {
        if (_0x35f260[_0x59f1c7][_0x329f20(0x261)](0x0) > 0xff)
            throw lazyDOMException('Invalid\x20character', 'InvalidCharacterError');
    }
    const _0x522565 = Buffer[_0x329f20(0x218)](_0x35f260, _0x329f20(0x231));
    return _0x522565[_0x329f20(0x243)](_0x329f20(0x236));
}
const kBase64Digits = _0x2311dd(0x262);
function atob(_0x421414) {
    const _0x404217 = _0x2311dd;
    _0x421414 = '' + _0x421414;
    for (let _0x42371f = 0x0; _0x42371f < _0x421414['length']; _0x42371f++) {
        if (!kBase64Digits[_0x404217(0x251)](_0x421414[_0x42371f]))
            throw lazyDOMException('Invalid\x20character', 'InvalidCharacterError');
    }
    return Buffer[_0x404217(0x218)](_0x421414, 'base64')[_0x404217(0x243)]('latin1');
}
module[_0x2311dd(0x263)] = {
    'Blob': Blob,
    'resolveObjectURL': resolveObjectURL,
    'Buffer': Buffer,
    'SlowBuffer': SlowBuffer,
    'transcode': transcode,
    'kMaxLength': kMaxLength,
    'kStringMaxLength': kStringMaxLength,
    'btoa': btoa,
    'atob': atob
}, ObjectDefineProperties(module[_0x2311dd(0x263)], {
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
        'set'(_0x10bf48) {
            INSPECT_MAX_BYTES = _0x10bf48;
        }
    }
});
