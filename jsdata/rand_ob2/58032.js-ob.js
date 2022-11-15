'use strict';
const _0x2b27 = [
    'hexWrite',
    'utf-8',
    'ucs-2',
    'utf-16le',
    'binary',
    'ArrayBuffer',
    'copy',
    'toString',
    'slice',
    'equals',
    'hexSlice',
    '$1\x20',
    '\x20...\x20',
    '\x20more\x20byte',
    'showHidden',
    'constructor',
    'inspect',
    'compare',
    'targetEnd',
    'indexOf',
    'value',
    'lastIndexOf',
    'encoding',
    'end',
    'utf8Write',
    'toJSON',
    'swap16',
    '16-bits',
    'swap32',
    'swap64',
    '64-bits',
    'config',
    'icu',
    'Unable\x20to\x20transcode\x20Buffer\x20[',
    'code',
    'errno',
    'charCodeAt',
    'Invalid\x20character',
    'InvalidCharacterError',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    'includes',
    'exports',
    '314946ksbTKM',
    '3001lQGYHh',
    '5DAMgnn',
    '25hhASFH',
    '6602gYCCZs',
    '484jNboYZ',
    '493Htutiv',
    '521yxRfwq',
    '2179aeuuwu',
    '105octnNB',
    '1146585HvSDUb',
    '1OAZFhn',
    'buffer',
    'util',
    'internal/util',
    'internal/util/types',
    'internal/util/inspect',
    'internal/validators',
    'internal/buffer',
    'internal/blob',
    'prototype',
    'poolSize',
    'issues.\x20Please\x20use\x20the\x20Buffer.alloc(),\x20',
    'Buffer.allocUnsafe(),\x20or\x20Buffer.from()\x20methods\x20instead.',
    'internal/options',
    'getOptionValue',
    '--pending-deprecation',
    'emitWarning',
    'DeprecationWarning',
    'DEP0005',
    'source',
    'Buffer',
    'target',
    'Uint8Array',
    'targetStart',
    'sourceStart',
    '>=\x200',
    'length',
    'sourceEnd',
    'byteOffset',
    'number',
    'string',
    'alloc',
    'from',
    'object',
    'valueOf',
    'function',
    'Array',
    'size',
    'RangeError',
    'allocUnsafe',
    'allocUnsafeSlow',
    'byteLength',
    'encodingVal',
    'write',
    'offset',
    'type',
    'data',
    'isBuffer',
    'buf1',
    'buf2',
    'isEncoding',
    'concat',
    'list',
    'list[',
    'utf8',
    'utf8Slice',
    'ucs2',
    'ucs2Slice',
    'utf16le',
    'ucs2Write',
    'latin1',
    'ascii',
    'asciiSlice',
    'base64',
    'base64url',
    'base64urlWrite',
    'hex'
];
const _0x1ceb44 = _0x2053;
(function (_0x888b25, _0x130c13) {
    const _0x519ed0 = _0x2053;
    while (!![]) {
        try {
            const _0x143862 = -parseInt(_0x519ed0(0xaf)) + -parseInt(_0x519ed0(0xb0)) * parseInt(_0x519ed0(0xb1)) + parseInt(_0x519ed0(0xb2)) * -parseInt(_0x519ed0(0xb3)) + -parseInt(_0x519ed0(0xb4)) + -parseInt(_0x519ed0(0xb5)) * parseInt(_0x519ed0(0xb6)) + -parseInt(_0x519ed0(0xb7)) * parseInt(_0x519ed0(0xb8)) + -parseInt(_0x519ed0(0xb9)) * -parseInt(_0x519ed0(0xba));
            if (_0x143862 === _0x130c13)
                break;
            else
                _0x888b25['push'](_0x888b25['shift']());
        } catch (_0xad6fea) {
            _0x888b25['push'](_0x888b25['shift']());
        }
    }
}(_0x2b27, 0x2864c));
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
    } = internalBinding(_0x1ceb44(0xbb)), {
        getOwnNonIndexProperties,
        propertyFilter: {ALL_PROPERTIES, ONLY_ENUMERABLE}
    } = internalBinding(_0x1ceb44(0xbc)), {customInspectSymbol, isInsideNodeModules, lazyDOMException, normalizeEncoding, kIsEncodingSymbol} = require(_0x1ceb44(0xbd)), {isAnyArrayBuffer, isArrayBufferView, isUint8Array} = require(_0x1ceb44(0xbe)), {inspect: utilInspect} = require(_0x1ceb44(0xbf)), {encodings} = internalBinding('string_decoder'), {
        codes: {ERR_BUFFER_OUT_OF_BOUNDS, ERR_INVALID_ARG_TYPE, ERR_INVALID_ARG_VALUE, ERR_INVALID_BUFFER_SIZE, ERR_OUT_OF_RANGE, ERR_UNKNOWN_ENCODING},
        hideStackFrames
    } = require('internal/errors'), {validateArray, validateBuffer, validateNumber, validateInteger, validateString} = require(_0x1ceb44(0xc0)), validateOffset = (_0x543d5c, _0x55301f, _0x452cd7 = 0x0, _0x3b062a = kMaxLength) => validateInteger(_0x543d5c, _0x55301f, _0x452cd7, _0x3b062a), {FastBuffer, markAsUntransferable, addBufferPrototypeMethods, createUnsafeBuffer} = require(_0x1ceb44(0xc1)), {Blob, resolveObjectURL} = require(_0x1ceb44(0xc2));
FastBuffer[_0x1ceb44(0xc3)]['constructor'] = Buffer, Buffer[_0x1ceb44(0xc3)] = FastBuffer[_0x1ceb44(0xc3)], addBufferPrototypeMethods(Buffer[_0x1ceb44(0xc3)]);
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
    const _0x28884f = _0x1ceb44;
    poolSize = Buffer[_0x28884f(0xc4)], allocPool = createUnsafeBuffer(poolSize)[_0x28884f(0xbb)], markAsUntransferable(allocPool), poolOffset = 0x0;
}
createPool();
function alignPool() {
    poolOffset & 0x7 && (poolOffset |= 0x7, poolOffset++);
}
let bufferWarningAlreadyEmitted = ![], nodeModulesCheckCounter = 0x0;
const bufferWarning = 'Buffer()\x20is\x20deprecated\x20due\x20to\x20security\x20and\x20usability\x20' + _0x1ceb44(0xc5) + _0x1ceb44(0xc6);
function showFlaggedDeprecation() {
    const _0x11f28f = _0x1ceb44;
    if (bufferWarningAlreadyEmitted || ++nodeModulesCheckCounter > 0x2710 || !require(_0x11f28f(0xc7))[_0x11f28f(0xc8)](_0x11f28f(0xc9)) && isInsideNodeModules())
        return;
    process[_0x11f28f(0xca)](bufferWarning, _0x11f28f(0xcb), _0x11f28f(0xcc)), bufferWarningAlreadyEmitted = !![];
}
function toInteger(_0x3f76b8, _0x249cbd) {
    _0x3f76b8 = +_0x3f76b8;
    if (!NumberIsNaN(_0x3f76b8) && _0x3f76b8 >= NumberMIN_SAFE_INTEGER && _0x3f76b8 <= NumberMAX_SAFE_INTEGER)
        return _0x3f76b8 % 0x1 === 0x0 ? _0x3f76b8 : MathFloor(_0x3f76b8);
    return _0x249cbd;
}
function _copy(_0x2105db, _0x140592, _0x4a1e8f, _0x22c94a, _0x387559) {
    const _0x5358ee = _0x1ceb44;
    if (!isUint8Array(_0x2105db))
        throw new ERR_INVALID_ARG_TYPE(_0x5358ee(0xcd), [
            _0x5358ee(0xce),
            'Uint8Array'
        ], _0x2105db);
    if (!isUint8Array(_0x140592))
        throw new ERR_INVALID_ARG_TYPE(_0x5358ee(0xcf), [
            _0x5358ee(0xce),
            _0x5358ee(0xd0)
        ], _0x140592);
    if (_0x4a1e8f === undefined)
        _0x4a1e8f = 0x0;
    else {
        _0x4a1e8f = toInteger(_0x4a1e8f, 0x0);
        if (_0x4a1e8f < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x5358ee(0xd1), '>=\x200', _0x4a1e8f);
    }
    if (_0x22c94a === undefined)
        _0x22c94a = 0x0;
    else {
        _0x22c94a = toInteger(_0x22c94a, 0x0);
        if (_0x22c94a < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x5358ee(0xd2), _0x5358ee(0xd3), _0x22c94a);
    }
    if (_0x387559 === undefined)
        _0x387559 = _0x2105db[_0x5358ee(0xd4)];
    else {
        _0x387559 = toInteger(_0x387559, 0x0);
        if (_0x387559 < 0x0)
            throw new ERR_OUT_OF_RANGE(_0x5358ee(0xd5), _0x5358ee(0xd3), _0x387559);
    }
    if (_0x4a1e8f >= _0x140592[_0x5358ee(0xd4)] || _0x22c94a >= _0x387559)
        return 0x0;
    if (_0x22c94a > _0x2105db['length'])
        throw new ERR_OUT_OF_RANGE(_0x5358ee(0xd2), '<=\x20' + _0x2105db[_0x5358ee(0xd4)], _0x22c94a);
    return _copyActual(_0x2105db, _0x140592, _0x4a1e8f, _0x22c94a, _0x387559);
}
function _copyActual(_0x4f3645, _0x3948dd, _0x348384, _0x172b05, _0x27e4b9) {
    const _0x26b0de = _0x1ceb44;
    if (_0x27e4b9 - _0x172b05 > _0x3948dd['length'] - _0x348384)
        _0x27e4b9 = _0x172b05 + _0x3948dd[_0x26b0de(0xd4)] - _0x348384;
    let _0x271107 = _0x27e4b9 - _0x172b05;
    const _0x1ab702 = _0x4f3645['length'] - _0x172b05;
    if (_0x271107 > _0x1ab702)
        _0x271107 = _0x1ab702;
    if (_0x172b05 !== 0x0 || _0x27e4b9 < _0x4f3645['length'])
        _0x4f3645 = new Uint8Array(_0x4f3645['buffer'], _0x4f3645[_0x26b0de(0xd6)] + _0x172b05, _0x271107);
    return TypedArrayPrototypeSet(_0x3948dd, _0x4f3645, _0x348384), _0x271107;
}
function Buffer(_0x51ed74, _0x3f10c0, _0x28d8dc) {
    const _0x25edea = _0x1ceb44;
    showFlaggedDeprecation();
    if (typeof _0x51ed74 === _0x25edea(0xd7)) {
        if (typeof _0x3f10c0 === _0x25edea(0xd8))
            throw new ERR_INVALID_ARG_TYPE(_0x25edea(0xd8), _0x25edea(0xd8), _0x51ed74);
        return Buffer[_0x25edea(0xd9)](_0x51ed74);
    }
    return Buffer[_0x25edea(0xda)](_0x51ed74, _0x3f10c0, _0x28d8dc);
}
ObjectDefineProperty(Buffer, SymbolSpecies, {
    'enumerable': ![],
    'configurable': !![],
    'get'() {
        return FastBuffer;
    }
}), Buffer[_0x1ceb44(0xda)] = function from(_0x1e3c38, _0x32c053, _0x410709) {
    const _0x58851c = _0x1ceb44;
    if (typeof _0x1e3c38 === 'string')
        return fromString(_0x1e3c38, _0x32c053);
    if (typeof _0x1e3c38 === _0x58851c(0xdb) && _0x1e3c38 !== null) {
        if (isAnyArrayBuffer(_0x1e3c38))
            return fromArrayBuffer(_0x1e3c38, _0x32c053, _0x410709);
        const _0x104d0e = _0x1e3c38[_0x58851c(0xdc)] && _0x1e3c38['valueOf']();
        if (_0x104d0e != null && _0x104d0e !== _0x1e3c38 && (typeof _0x104d0e === 'string' || typeof _0x104d0e === _0x58851c(0xdb)))
            return from(_0x104d0e, _0x32c053, _0x410709);
        const _0x29ba57 = fromObject(_0x1e3c38);
        if (_0x29ba57)
            return _0x29ba57;
        if (typeof _0x1e3c38[SymbolToPrimitive] === _0x58851c(0xdd)) {
            const _0x4bf90f = _0x1e3c38[SymbolToPrimitive](_0x58851c(0xd8));
            if (typeof _0x4bf90f === _0x58851c(0xd8))
                return fromString(_0x4bf90f, _0x32c053);
        }
    }
    throw new ERR_INVALID_ARG_TYPE('first\x20argument', [
        _0x58851c(0xd8),
        _0x58851c(0xce),
        'ArrayBuffer',
        _0x58851c(0xde),
        'Array-like\x20Object'
    ], _0x1e3c38);
};
const of = (..._0x4349c1) => {
    const _0x5c1f12 = _0x1ceb44, _0x174cd3 = createUnsafeBuffer(_0x4349c1[_0x5c1f12(0xd4)]);
    for (let _0x28cf69 = 0x0; _0x28cf69 < _0x4349c1[_0x5c1f12(0xd4)]; _0x28cf69++)
        _0x174cd3[_0x28cf69] = _0x4349c1[_0x28cf69];
    return _0x174cd3;
};
Buffer['of'] = of, ObjectSetPrototypeOf(Buffer, Uint8Array);
const assertSize = hideStackFrames(_0x52752a => {
    const _0x4120fc = _0x1ceb44;
    validateNumber(_0x52752a, _0x4120fc(0xdf));
    if (!(_0x52752a >= 0x0 && _0x52752a <= kMaxLength))
        throw new ERR_INVALID_ARG_VALUE[(_0x4120fc(0xe0))](_0x4120fc(0xdf), _0x52752a);
});
Buffer[_0x1ceb44(0xd9)] = function alloc(_0x7c66c5, _0x4b0f60, _0xe808a3) {
    const _0x5e03d5 = _0x1ceb44;
    assertSize(_0x7c66c5);
    if (_0x4b0f60 !== undefined && _0x4b0f60 !== 0x0 && _0x7c66c5 > 0x0) {
        const _0x12be01 = createUnsafeBuffer(_0x7c66c5);
        return _fill(_0x12be01, _0x4b0f60, 0x0, _0x12be01[_0x5e03d5(0xd4)], _0xe808a3);
    }
    return new FastBuffer(_0x7c66c5);
}, Buffer[_0x1ceb44(0xe1)] = function allocUnsafe(_0x3b597d) {
    return assertSize(_0x3b597d), allocate(_0x3b597d);
}, Buffer[_0x1ceb44(0xe2)] = function allocUnsafeSlow(_0x3992e5) {
    return assertSize(_0x3992e5), createUnsafeBuffer(_0x3992e5);
};
function SlowBuffer(_0x57f5f4) {
    return assertSize(_0x57f5f4), createUnsafeBuffer(_0x57f5f4);
}
ObjectSetPrototypeOf(SlowBuffer[_0x1ceb44(0xc3)], Uint8ArrayPrototype), ObjectSetPrototypeOf(SlowBuffer, Uint8Array);
function allocate(_0x15fdbd) {
    const _0x1b8ddf = _0x1ceb44;
    if (_0x15fdbd <= 0x0)
        return new FastBuffer();
    if (_0x15fdbd < Buffer[_0x1b8ddf(0xc4)] >>> 0x1) {
        if (_0x15fdbd > poolSize - poolOffset)
            createPool();
        const _0x1a0261 = new FastBuffer(allocPool, poolOffset, _0x15fdbd);
        return poolOffset += _0x15fdbd, alignPool(), _0x1a0261;
    }
    return createUnsafeBuffer(_0x15fdbd);
}
function fromStringFast(_0x2b86be, _0x451b8f) {
    const _0x2c6fba = _0x1ceb44, _0x375e66 = _0x451b8f[_0x2c6fba(0xe3)](_0x2b86be);
    if (_0x375e66 >= Buffer[_0x2c6fba(0xc4)] >>> 0x1)
        return createFromString(_0x2b86be, _0x451b8f[_0x2c6fba(0xe4)]);
    if (_0x375e66 > poolSize - poolOffset)
        createPool();
    let _0x243ad2 = new FastBuffer(allocPool, poolOffset, _0x375e66);
    const _0x13a6a1 = _0x451b8f[_0x2c6fba(0xe5)](_0x243ad2, _0x2b86be, 0x0, _0x375e66);
    return _0x13a6a1 !== _0x375e66 && (_0x243ad2 = new FastBuffer(allocPool, poolOffset, _0x13a6a1)), poolOffset += _0x13a6a1, alignPool(), _0x243ad2;
}
function fromString(_0x56f1b8, _0x4de10d) {
    const _0x235437 = _0x1ceb44;
    let _0x2fde64;
    if (typeof _0x4de10d !== 'string' || _0x4de10d[_0x235437(0xd4)] === 0x0) {
        if (_0x56f1b8[_0x235437(0xd4)] === 0x0)
            return new FastBuffer();
        _0x2fde64 = encodingOps['utf8'], _0x4de10d = undefined;
    } else {
        _0x2fde64 = getEncodingOps(_0x4de10d);
        if (_0x2fde64 === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x4de10d);
        if (_0x56f1b8['length'] === 0x0)
            return new FastBuffer();
    }
    return fromStringFast(_0x56f1b8, _0x2fde64);
}
function fromArrayBuffer(_0x269751, _0x4e57b5, _0x4079d5) {
    const _0xec9244 = _0x1ceb44;
    if (_0x4e57b5 === undefined)
        _0x4e57b5 = 0x0;
    else {
        _0x4e57b5 = +_0x4e57b5;
        if (NumberIsNaN(_0x4e57b5))
            _0x4e57b5 = 0x0;
    }
    const _0x1403f9 = _0x269751[_0xec9244(0xe3)] - _0x4e57b5;
    if (_0x1403f9 < 0x0)
        throw new ERR_BUFFER_OUT_OF_BOUNDS(_0xec9244(0xe6));
    if (_0x4079d5 === undefined)
        _0x4079d5 = _0x1403f9;
    else {
        _0x4079d5 = +_0x4079d5;
        if (_0x4079d5 > 0x0) {
            if (_0x4079d5 > _0x1403f9)
                throw new ERR_BUFFER_OUT_OF_BOUNDS(_0xec9244(0xd4));
        } else
            _0x4079d5 = 0x0;
    }
    return new FastBuffer(_0x269751, _0x4e57b5, _0x4079d5);
}
function fromArrayLike(_0x7b3923) {
    const _0x24bfc1 = _0x1ceb44;
    if (_0x7b3923['length'] <= 0x0)
        return new FastBuffer();
    if (_0x7b3923[_0x24bfc1(0xd4)] < Buffer[_0x24bfc1(0xc4)] >>> 0x1) {
        if (_0x7b3923[_0x24bfc1(0xd4)] > poolSize - poolOffset)
            createPool();
        const _0x16aa66 = new FastBuffer(allocPool, poolOffset, _0x7b3923[_0x24bfc1(0xd4)]);
        return TypedArrayPrototypeSet(_0x16aa66, _0x7b3923, 0x0), poolOffset += _0x7b3923[_0x24bfc1(0xd4)], alignPool(), _0x16aa66;
    }
    return new FastBuffer(_0x7b3923);
}
function fromObject(_0x522733) {
    const _0x12cca0 = _0x1ceb44;
    if (_0x522733[_0x12cca0(0xd4)] !== undefined || isAnyArrayBuffer(_0x522733[_0x12cca0(0xbb)])) {
        if (typeof _0x522733['length'] !== _0x12cca0(0xd7))
            return new FastBuffer();
        return fromArrayLike(_0x522733);
    }
    if (_0x522733[_0x12cca0(0xe7)] === _0x12cca0(0xce) && ArrayIsArray(_0x522733[_0x12cca0(0xe8)]))
        return fromArrayLike(_0x522733[_0x12cca0(0xe8)]);
}
Buffer[_0x1ceb44(0xe9)] = function isBuffer(_0xb711d) {
    return _0xb711d instanceof Buffer;
}, Buffer['compare'] = function compare(_0x2b60b3, _0x41610d) {
    const _0x4561af = _0x1ceb44;
    if (!isUint8Array(_0x2b60b3))
        throw new ERR_INVALID_ARG_TYPE(_0x4561af(0xea), [
            _0x4561af(0xce),
            _0x4561af(0xd0)
        ], _0x2b60b3);
    if (!isUint8Array(_0x41610d))
        throw new ERR_INVALID_ARG_TYPE(_0x4561af(0xeb), [
            'Buffer',
            _0x4561af(0xd0)
        ], _0x41610d);
    if (_0x2b60b3 === _0x41610d)
        return 0x0;
    return _compare(_0x2b60b3, _0x41610d);
}, Buffer[_0x1ceb44(0xec)] = function isEncoding(_0x33e793) {
    const _0x5bbdb4 = _0x1ceb44;
    return typeof _0x33e793 === _0x5bbdb4(0xd8) && _0x33e793[_0x5bbdb4(0xd4)] !== 0x0 && normalizeEncoding(_0x33e793) !== undefined;
}, Buffer[kIsEncodingSymbol] = Buffer[_0x1ceb44(0xec)], Buffer[_0x1ceb44(0xed)] = function concat(_0xda0fd5, _0x29a4fd) {
    const _0xf70747 = _0x1ceb44;
    validateArray(_0xda0fd5, _0xf70747(0xee));
    if (_0xda0fd5[_0xf70747(0xd4)] === 0x0)
        return new FastBuffer();
    if (_0x29a4fd === undefined) {
        _0x29a4fd = 0x0;
        for (let _0x3c4f93 = 0x0; _0x3c4f93 < _0xda0fd5[_0xf70747(0xd4)]; _0x3c4f93++) {
            _0xda0fd5[_0x3c4f93][_0xf70747(0xd4)] && (_0x29a4fd += _0xda0fd5[_0x3c4f93]['length']);
        }
    } else
        validateOffset(_0x29a4fd, 'length');
    const _0x575826 = Buffer[_0xf70747(0xe1)](_0x29a4fd);
    let _0x42c578 = 0x0;
    for (let _0x1fce68 = 0x0; _0x1fce68 < _0xda0fd5[_0xf70747(0xd4)]; _0x1fce68++) {
        const _0x1720c8 = _0xda0fd5[_0x1fce68];
        if (!isUint8Array(_0x1720c8))
            throw new ERR_INVALID_ARG_TYPE(_0xf70747(0xef) + _0x1fce68 + ']', [
                'Buffer',
                _0xf70747(0xd0)
            ], _0xda0fd5[_0x1fce68]);
        _0x42c578 += _copyActual(_0x1720c8, _0x575826, _0x42c578, 0x0, _0x1720c8[_0xf70747(0xd4)]);
    }
    return _0x42c578 < _0x29a4fd && TypedArrayPrototypeFill(_0x575826, 0x0, _0x42c578, _0x29a4fd), _0x575826;
};
function base64ByteLength(_0x3b0ce3, _0x14d638) {
    if (StringPrototypeCharCodeAt(_0x3b0ce3, _0x14d638 - 0x1) === 0x3d)
        _0x14d638--;
    if (_0x14d638 > 0x1 && StringPrototypeCharCodeAt(_0x3b0ce3, _0x14d638 - 0x1) === 0x3d)
        _0x14d638--;
    return _0x14d638 * 0x3 >>> 0x2;
}
const encodingOps = {
    'utf8': {
        'encoding': _0x1ceb44(0xf0),
        'encodingVal': encodingsMap[_0x1ceb44(0xf0)],
        'byteLength': byteLengthUtf8,
        'write': (_0x41e4bb, _0xfe25b7, _0x270771, _0x1ccc21) => _0x41e4bb['utf8Write'](_0xfe25b7, _0x270771, _0x1ccc21),
        'slice': (_0x513e27, _0x531581, _0x228bc1) => _0x513e27[_0x1ceb44(0xf1)](_0x531581, _0x228bc1),
        'indexOf': (_0x49a4c3, _0x3c04ab, _0x5b68ae, _0x5d0296) => indexOfString(_0x49a4c3, _0x3c04ab, _0x5b68ae, encodingsMap[_0x1ceb44(0xf0)], _0x5d0296)
    },
    'ucs2': {
        'encoding': _0x1ceb44(0xf2),
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x3a938c => _0x3a938c[_0x1ceb44(0xd4)] * 0x2,
        'write': (_0x12ce9e, _0x245e70, _0x54dad2, _0x585286) => _0x12ce9e['ucs2Write'](_0x245e70, _0x54dad2, _0x585286),
        'slice': (_0x433635, _0x2d98e9, _0x4213d6) => _0x433635[_0x1ceb44(0xf3)](_0x2d98e9, _0x4213d6),
        'indexOf': (_0x1391e4, _0x478719, _0x4c68dc, _0x58e9d6) => indexOfString(_0x1391e4, _0x478719, _0x4c68dc, encodingsMap[_0x1ceb44(0xf4)], _0x58e9d6)
    },
    'utf16le': {
        'encoding': 'utf16le',
        'encodingVal': encodingsMap['utf16le'],
        'byteLength': _0x2df4b6 => _0x2df4b6['length'] * 0x2,
        'write': (_0x17214c, _0x2c1096, _0x192b74, _0xde43ec) => _0x17214c[_0x1ceb44(0xf5)](_0x2c1096, _0x192b74, _0xde43ec),
        'slice': (_0x3ac1ab, _0x5c5089, _0x3347b5) => _0x3ac1ab[_0x1ceb44(0xf3)](_0x5c5089, _0x3347b5),
        'indexOf': (_0x5c8a90, _0x3e4fff, _0x2e7459, _0x29ba0a) => indexOfString(_0x5c8a90, _0x3e4fff, _0x2e7459, encodingsMap['utf16le'], _0x29ba0a)
    },
    'latin1': {
        'encoding': _0x1ceb44(0xf6),
        'encodingVal': encodingsMap['latin1'],
        'byteLength': _0x28b07e => _0x28b07e[_0x1ceb44(0xd4)],
        'write': (_0x443c7d, _0x19e132, _0x4f5788, _0x331f42) => _0x443c7d['latin1Write'](_0x19e132, _0x4f5788, _0x331f42),
        'slice': (_0x5e4305, _0x424022, _0x5c4ec7) => _0x5e4305['latin1Slice'](_0x424022, _0x5c4ec7),
        'indexOf': (_0x2676bc, _0x327349, _0x3f9346, _0x1b5ebf) => indexOfString(_0x2676bc, _0x327349, _0x3f9346, encodingsMap[_0x1ceb44(0xf6)], _0x1b5ebf)
    },
    'ascii': {
        'encoding': _0x1ceb44(0xf7),
        'encodingVal': encodingsMap['ascii'],
        'byteLength': _0x3b97f1 => _0x3b97f1['length'],
        'write': (_0xc3ba38, _0x4d3e07, _0x74c49, _0x1e9d90) => _0xc3ba38['asciiWrite'](_0x4d3e07, _0x74c49, _0x1e9d90),
        'slice': (_0x375e39, _0x2b09f3, _0x21e358) => _0x375e39[_0x1ceb44(0xf8)](_0x2b09f3, _0x21e358),
        'indexOf': (_0x136e63, _0x2b49bd, _0x199ef0, _0x3c845c) => indexOfBuffer(_0x136e63, fromStringFast(_0x2b49bd, encodingOps[_0x1ceb44(0xf7)]), _0x199ef0, encodingsMap[_0x1ceb44(0xf7)], _0x3c845c)
    },
    'base64': {
        'encoding': 'base64',
        'encodingVal': encodingsMap[_0x1ceb44(0xf9)],
        'byteLength': _0x38e536 => base64ByteLength(_0x38e536, _0x38e536[_0x1ceb44(0xd4)]),
        'write': (_0x2e9296, _0x1c921e, _0x515489, _0x1aacbc) => _0x2e9296['base64Write'](_0x1c921e, _0x515489, _0x1aacbc),
        'slice': (_0x10d9ad, _0x1b0c61, _0xc59f00) => _0x10d9ad['base64Slice'](_0x1b0c61, _0xc59f00),
        'indexOf': (_0x1c56ef, _0x2002f5, _0x45165c, _0x26acc2) => indexOfBuffer(_0x1c56ef, fromStringFast(_0x2002f5, encodingOps[_0x1ceb44(0xf9)]), _0x45165c, encodingsMap[_0x1ceb44(0xf9)], _0x26acc2)
    },
    'base64url': {
        'encoding': _0x1ceb44(0xfa),
        'encodingVal': encodingsMap[_0x1ceb44(0xfa)],
        'byteLength': _0x23b1e2 => base64ByteLength(_0x23b1e2, _0x23b1e2[_0x1ceb44(0xd4)]),
        'write': (_0x199ff5, _0x2e5a52, _0x1f85b4, _0x528d8a) => _0x199ff5[_0x1ceb44(0xfb)](_0x2e5a52, _0x1f85b4, _0x528d8a),
        'slice': (_0x419637, _0x571876, _0x183340) => _0x419637['base64urlSlice'](_0x571876, _0x183340),
        'indexOf': (_0x55607d, _0x168edf, _0x37255e, _0xa5687e) => indexOfBuffer(_0x55607d, fromStringFast(_0x168edf, encodingOps['base64url']), _0x37255e, encodingsMap[_0x1ceb44(0xfa)], _0xa5687e)
    },
    'hex': {
        'encoding': _0x1ceb44(0xfc),
        'encodingVal': encodingsMap['hex'],
        'byteLength': _0x4f4316 => _0x4f4316[_0x1ceb44(0xd4)] >>> 0x1,
        'write': (_0xe76ee3, _0x23bc9e, _0x38ef99, _0x2faf94) => _0xe76ee3[_0x1ceb44(0xfd)](_0x23bc9e, _0x38ef99, _0x2faf94),
        'slice': (_0xa8dca2, _0x5f4491, _0x5c7046) => _0xa8dca2['hexSlice'](_0x5f4491, _0x5c7046),
        'indexOf': (_0x145775, _0x5d1aa7, _0x3a86c8, _0x3a66d8) => indexOfBuffer(_0x145775, fromStringFast(_0x5d1aa7, encodingOps[_0x1ceb44(0xfc)]), _0x3a86c8, encodingsMap[_0x1ceb44(0xfc)], _0x3a66d8)
    }
};
function getEncodingOps(_0x3d07d6) {
    const _0x543e5d = _0x1ceb44;
    _0x3d07d6 += '';
    switch (_0x3d07d6[_0x543e5d(0xd4)]) {
    case 0x4:
        if (_0x3d07d6 === _0x543e5d(0xf0))
            return encodingOps[_0x543e5d(0xf0)];
        if (_0x3d07d6 === _0x543e5d(0xf2))
            return encodingOps[_0x543e5d(0xf2)];
        _0x3d07d6 = StringPrototypeToLowerCase(_0x3d07d6);
        if (_0x3d07d6 === 'utf8')
            return encodingOps[_0x543e5d(0xf0)];
        if (_0x3d07d6 === _0x543e5d(0xf2))
            return encodingOps[_0x543e5d(0xf2)];
        break;
    case 0x5:
        if (_0x3d07d6 === _0x543e5d(0xfe))
            return encodingOps[_0x543e5d(0xf0)];
        if (_0x3d07d6 === _0x543e5d(0xf7))
            return encodingOps[_0x543e5d(0xf7)];
        if (_0x3d07d6 === _0x543e5d(0xff))
            return encodingOps[_0x543e5d(0xf2)];
        _0x3d07d6 = StringPrototypeToLowerCase(_0x3d07d6);
        if (_0x3d07d6 === _0x543e5d(0xfe))
            return encodingOps['utf8'];
        if (_0x3d07d6 === _0x543e5d(0xf7))
            return encodingOps[_0x543e5d(0xf7)];
        if (_0x3d07d6 === _0x543e5d(0xff))
            return encodingOps['ucs2'];
        break;
    case 0x7:
        if (_0x3d07d6 === 'utf16le' || StringPrototypeToLowerCase(_0x3d07d6) === _0x543e5d(0xf4))
            return encodingOps[_0x543e5d(0xf4)];
        break;
    case 0x8:
        if (_0x3d07d6 === _0x543e5d(0x100) || StringPrototypeToLowerCase(_0x3d07d6) === _0x543e5d(0x100))
            return encodingOps[_0x543e5d(0xf4)];
        break;
    case 0x6:
        if (_0x3d07d6 === _0x543e5d(0xf6) || _0x3d07d6 === _0x543e5d(0x101))
            return encodingOps[_0x543e5d(0xf6)];
        if (_0x3d07d6 === _0x543e5d(0xf9))
            return encodingOps['base64'];
        _0x3d07d6 = StringPrototypeToLowerCase(_0x3d07d6);
        if (_0x3d07d6 === _0x543e5d(0xf6) || _0x3d07d6 === 'binary')
            return encodingOps['latin1'];
        if (_0x3d07d6 === _0x543e5d(0xf9))
            return encodingOps[_0x543e5d(0xf9)];
        break;
    case 0x3:
        if (_0x3d07d6 === _0x543e5d(0xfc) || StringPrototypeToLowerCase(_0x3d07d6) === 'hex')
            return encodingOps['hex'];
        break;
    case 0x9:
        if (_0x3d07d6 === _0x543e5d(0xfa) || StringPrototypeToLowerCase(_0x3d07d6) === _0x543e5d(0xfa))
            return encodingOps[_0x543e5d(0xfa)];
        break;
    }
}
function byteLength(_0x52edec, _0x5f1179) {
    const _0x24f0e0 = _0x1ceb44;
    if (typeof _0x52edec !== 'string') {
        if (isArrayBufferView(_0x52edec) || isAnyArrayBuffer(_0x52edec))
            return _0x52edec['byteLength'];
        throw new ERR_INVALID_ARG_TYPE('string', [
            _0x24f0e0(0xd8),
            _0x24f0e0(0xce),
            _0x24f0e0(0x102)
        ], _0x52edec);
    }
    const _0x361073 = _0x52edec[_0x24f0e0(0xd4)], _0x34171b = arguments[_0x24f0e0(0xd4)] > 0x2 && arguments[0x2] === !![];
    if (!_0x34171b && _0x361073 === 0x0)
        return 0x0;
    if (!_0x5f1179)
        return _0x34171b ? -0x1 : byteLengthUtf8(_0x52edec);
    const _0x36e759 = getEncodingOps(_0x5f1179);
    if (_0x36e759 === undefined)
        return _0x34171b ? -0x1 : byteLengthUtf8(_0x52edec);
    return _0x36e759[_0x24f0e0(0xe3)](_0x52edec);
}
Buffer['byteLength'] = byteLength, ObjectDefineProperty(Buffer[_0x1ceb44(0xc3)], 'parent', {
    'enumerable': !![],
    'get'() {
        const _0x23338f = _0x1ceb44;
        if (!(this instanceof Buffer))
            return undefined;
        return this[_0x23338f(0xbb)];
    }
}), ObjectDefineProperty(Buffer[_0x1ceb44(0xc3)], _0x1ceb44(0xe6), {
    'enumerable': !![],
    'get'() {
        if (!(this instanceof Buffer))
            return undefined;
        return this['byteOffset'];
    }
}), Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x103)] = function copy(_0x35cf26, _0x5ed550, _0x5a69c9, _0x3db65e) {
    return _copy(this, _0x35cf26, _0x5ed550, _0x5a69c9, _0x3db65e);
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x104)] = function toString(_0x518848, _0x385dc4, _0x37b3c1) {
    const _0x317eca = _0x1ceb44;
    if (arguments[_0x317eca(0xd4)] === 0x0)
        return this[_0x317eca(0xf1)](0x0, this[_0x317eca(0xd4)]);
    const _0x2672be = this[_0x317eca(0xd4)];
    if (_0x385dc4 <= 0x0)
        _0x385dc4 = 0x0;
    else {
        if (_0x385dc4 >= _0x2672be)
            return '';
        else
            _0x385dc4 |= 0x0;
    }
    if (_0x37b3c1 === undefined || _0x37b3c1 > _0x2672be)
        _0x37b3c1 = _0x2672be;
    else
        _0x37b3c1 |= 0x0;
    if (_0x37b3c1 <= _0x385dc4)
        return '';
    if (_0x518848 === undefined)
        return this['utf8Slice'](_0x385dc4, _0x37b3c1);
    const _0x41541f = getEncodingOps(_0x518848);
    if (_0x41541f === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x518848);
    return _0x41541f[_0x317eca(0x105)](this, _0x385dc4, _0x37b3c1);
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x106)] = function equals(_0x219d62) {
    const _0x4de19a = _0x1ceb44;
    if (!isUint8Array(_0x219d62))
        throw new ERR_INVALID_ARG_TYPE('otherBuffer', [
            _0x4de19a(0xce),
            _0x4de19a(0xd0)
        ], _0x219d62);
    if (this === _0x219d62)
        return !![];
    if (this[_0x4de19a(0xe3)] !== _0x219d62['byteLength'])
        return ![];
    return this[_0x4de19a(0xe3)] === 0x0 || _compare(this, _0x219d62) === 0x0;
};
let INSPECT_MAX_BYTES = 0x32;
Buffer['prototype'][customInspectSymbol] = function inspect(_0x288003, _0x33e44d) {
    const _0x1e131c = _0x1ceb44, _0x5af701 = INSPECT_MAX_BYTES, _0x1111c2 = MathMin(_0x5af701, this[_0x1e131c(0xd4)]), _0x4f0c64 = this[_0x1e131c(0xd4)] - _0x5af701;
    let _0x1fb9aa = StringPrototypeTrim(StringPrototypeReplace(this[_0x1e131c(0x107)](0x0, _0x1111c2), /(.{2})/g, _0x1e131c(0x108)));
    if (_0x4f0c64 > 0x0)
        _0x1fb9aa += _0x1e131c(0x109) + _0x4f0c64 + _0x1e131c(0x10a) + (_0x4f0c64 > 0x1 ? 's' : '');
    if (_0x33e44d) {
        let _0x5c5dfc = ![];
        const _0x149075 = _0x33e44d[_0x1e131c(0x10b)] ? ALL_PROPERTIES : ONLY_ENUMERABLE, _0x2d2c73 = ObjectCreate(null);
        ArrayPrototypeForEach(getOwnNonIndexProperties(this, _0x149075), _0x534b2e => {
            _0x5c5dfc = !![], _0x2d2c73[_0x534b2e] = this[_0x534b2e];
        });
        if (_0x5c5dfc) {
            if (this[_0x1e131c(0xd4)] !== 0x0)
                _0x1fb9aa += ',\x20';
            _0x1fb9aa += StringPrototypeSlice(utilInspect(_0x2d2c73, {
                ..._0x33e44d,
                'breakLength': Infinity,
                'compact': !![]
            }), 0x1b, -0x2);
        }
    }
    return '<' + this[_0x1e131c(0x10c)]['name'] + '\x20' + _0x1fb9aa + '>';
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x10d)] = Buffer[_0x1ceb44(0xc3)][customInspectSymbol], Buffer['prototype'][_0x1ceb44(0x10e)] = function compare(_0x2eb482, _0x36d850, _0x3927d6, _0xde9168, _0x2a77e3) {
    const _0x2f8c62 = _0x1ceb44;
    if (!isUint8Array(_0x2eb482))
        throw new ERR_INVALID_ARG_TYPE(_0x2f8c62(0xcf), [
            _0x2f8c62(0xce),
            _0x2f8c62(0xd0)
        ], _0x2eb482);
    if (arguments[_0x2f8c62(0xd4)] === 0x1)
        return _compare(this, _0x2eb482);
    if (_0x36d850 === undefined)
        _0x36d850 = 0x0;
    else
        validateOffset(_0x36d850, _0x2f8c62(0xd1));
    if (_0x3927d6 === undefined)
        _0x3927d6 = _0x2eb482['length'];
    else
        validateOffset(_0x3927d6, _0x2f8c62(0x10f), 0x0, _0x2eb482[_0x2f8c62(0xd4)]);
    if (_0xde9168 === undefined)
        _0xde9168 = 0x0;
    else
        validateOffset(_0xde9168, 'sourceStart');
    if (_0x2a77e3 === undefined)
        _0x2a77e3 = this[_0x2f8c62(0xd4)];
    else
        validateOffset(_0x2a77e3, _0x2f8c62(0xd5), 0x0, this[_0x2f8c62(0xd4)]);
    if (_0xde9168 >= _0x2a77e3)
        return _0x36d850 >= _0x3927d6 ? 0x0 : -0x1;
    if (_0x36d850 >= _0x3927d6)
        return 0x1;
    return compareOffset(this, _0x2eb482, _0x36d850, _0xde9168, _0x3927d6, _0x2a77e3);
};
function bidirectionalIndexOf(_0x582cd5, _0x185140, _0x24781d, _0x3712cf, _0x1f8f6f) {
    const _0x5f08d7 = _0x1ceb44;
    validateBuffer(_0x582cd5);
    if (typeof _0x24781d === _0x5f08d7(0xd8))
        _0x3712cf = _0x24781d, _0x24781d = undefined;
    else {
        if (_0x24781d > 0x7fffffff)
            _0x24781d = 0x7fffffff;
        else
            _0x24781d < -0x80000000 && (_0x24781d = -0x80000000);
    }
    _0x24781d = +_0x24781d;
    NumberIsNaN(_0x24781d) && (_0x24781d = _0x1f8f6f ? 0x0 : _0x582cd5[_0x5f08d7(0xd4)] || _0x582cd5['byteLength']);
    _0x1f8f6f = !!_0x1f8f6f;
    if (typeof _0x185140 === _0x5f08d7(0xd7))
        return indexOfNumber(_0x582cd5, _0x185140 >>> 0x0, _0x24781d, _0x1f8f6f);
    let _0xe06498;
    if (_0x3712cf === undefined)
        _0xe06498 = encodingOps[_0x5f08d7(0xf0)];
    else
        _0xe06498 = getEncodingOps(_0x3712cf);
    if (typeof _0x185140 === 'string') {
        if (_0xe06498 === undefined)
            throw new ERR_UNKNOWN_ENCODING(_0x3712cf);
        return _0xe06498[_0x5f08d7(0x110)](_0x582cd5, _0x185140, _0x24781d, _0x1f8f6f);
    }
    if (isUint8Array(_0x185140)) {
        const _0x24faa6 = _0xe06498 === undefined ? encodingsMap[_0x5f08d7(0xf0)] : _0xe06498[_0x5f08d7(0xe4)];
        return indexOfBuffer(_0x582cd5, _0x185140, _0x24781d, _0x24faa6, _0x1f8f6f);
    }
    throw new ERR_INVALID_ARG_TYPE(_0x5f08d7(0x111), [
        _0x5f08d7(0xd7),
        _0x5f08d7(0xd8),
        _0x5f08d7(0xce),
        _0x5f08d7(0xd0)
    ], _0x185140);
}
Buffer['prototype'][_0x1ceb44(0x110)] = function indexOf(_0x5d29eb, _0x4b33db, _0x221fd5) {
    return bidirectionalIndexOf(this, _0x5d29eb, _0x4b33db, _0x221fd5, !![]);
}, Buffer['prototype'][_0x1ceb44(0x112)] = function lastIndexOf(_0x48b662, _0x4d0eb5, _0x30bfcc) {
    return bidirectionalIndexOf(this, _0x48b662, _0x4d0eb5, _0x30bfcc, ![]);
}, Buffer[_0x1ceb44(0xc3)]['includes'] = function includes(_0x531037, _0x47f92f, _0x4a8e2d) {
    const _0x1eaea1 = _0x1ceb44;
    return this[_0x1eaea1(0x110)](_0x531037, _0x47f92f, _0x4a8e2d) !== -0x1;
}, Buffer[_0x1ceb44(0xc3)]['fill'] = function fill(_0x582c2e, _0x51e6c6, _0x3009a3, _0x5df14a) {
    return _fill(this, _0x582c2e, _0x51e6c6, _0x3009a3, _0x5df14a);
};
function _fill(_0x1c028f, _0x47149b, _0x324ea3, _0x57e100, _0x160faf) {
    const _0xfbb8eb = _0x1ceb44;
    if (typeof _0x47149b === _0xfbb8eb(0xd8)) {
        if (_0x324ea3 === undefined || typeof _0x324ea3 === _0xfbb8eb(0xd8))
            _0x160faf = _0x324ea3, _0x324ea3 = 0x0, _0x57e100 = _0x1c028f['length'];
        else
            typeof _0x57e100 === 'string' && (_0x160faf = _0x57e100, _0x57e100 = _0x1c028f[_0xfbb8eb(0xd4)]);
        const _0x331a69 = normalizeEncoding(_0x160faf);
        if (_0x331a69 === undefined) {
            validateString(_0x160faf, _0xfbb8eb(0x113));
            throw new ERR_UNKNOWN_ENCODING(_0x160faf);
        }
        if (_0x47149b['length'] === 0x0)
            _0x47149b = 0x0;
        else {
            if (_0x47149b[_0xfbb8eb(0xd4)] === 0x1) {
                if (_0x331a69 === _0xfbb8eb(0xf0)) {
                    const _0x51b134 = StringPrototypeCharCodeAt(_0x47149b, 0x0);
                    _0x51b134 < 0x80 && (_0x47149b = _0x51b134);
                } else
                    _0x331a69 === 'latin1' && (_0x47149b = StringPrototypeCharCodeAt(_0x47149b, 0x0));
            }
        }
    } else
        _0x160faf = undefined;
    if (_0x324ea3 === undefined)
        _0x324ea3 = 0x0, _0x57e100 = _0x1c028f['length'];
    else {
        validateOffset(_0x324ea3, _0xfbb8eb(0xe6));
        _0x57e100 === undefined ? _0x57e100 = _0x1c028f['length'] : validateOffset(_0x57e100, _0xfbb8eb(0x114), 0x0, _0x1c028f[_0xfbb8eb(0xd4)]);
        if (_0x324ea3 >= _0x57e100)
            return _0x1c028f;
    }
    if (typeof _0x47149b === _0xfbb8eb(0xd7)) {
        const _0x111e52 = TypedArrayPrototypeGetByteLength(_0x1c028f), _0xf60728 = _0x57e100 - _0x324ea3;
        if (_0x324ea3 > _0x57e100 || _0xf60728 + _0x324ea3 > _0x111e52)
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        TypedArrayPrototypeFill(_0x1c028f, _0x47149b, _0x324ea3, _0x57e100);
    } else {
        const _0x5759a0 = bindingFill(_0x1c028f, _0x47149b, _0x324ea3, _0x57e100, _0x160faf);
        if (_0x5759a0 < 0x0) {
            if (_0x5759a0 === -0x1)
                throw new ERR_INVALID_ARG_VALUE('value', _0x47149b);
            throw new ERR_BUFFER_OUT_OF_BOUNDS();
        }
    }
    return _0x1c028f;
}
Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0xe5)] = function write(_0x333a57, _0x1445ed, _0x1d93ee, _0x66c09e) {
    const _0x493c0b = _0x1ceb44;
    if (_0x1445ed === undefined)
        return this[_0x493c0b(0x115)](_0x333a57, 0x0, this['length']);
    if (_0x1d93ee === undefined && typeof _0x1445ed === _0x493c0b(0xd8))
        _0x66c09e = _0x1445ed, _0x1d93ee = this['length'], _0x1445ed = 0x0;
    else {
        validateOffset(_0x1445ed, _0x493c0b(0xe6), 0x0, this[_0x493c0b(0xd4)]);
        const _0x13c9a8 = this[_0x493c0b(0xd4)] - _0x1445ed;
        if (_0x1d93ee === undefined)
            _0x1d93ee = _0x13c9a8;
        else {
            if (typeof _0x1d93ee === _0x493c0b(0xd8))
                _0x66c09e = _0x1d93ee, _0x1d93ee = _0x13c9a8;
            else {
                validateOffset(_0x1d93ee, 'length', 0x0, this['length']);
                if (_0x1d93ee > _0x13c9a8)
                    _0x1d93ee = _0x13c9a8;
            }
        }
    }
    if (!_0x66c09e)
        return this['utf8Write'](_0x333a57, _0x1445ed, _0x1d93ee);
    const _0x503575 = getEncodingOps(_0x66c09e);
    if (_0x503575 === undefined)
        throw new ERR_UNKNOWN_ENCODING(_0x66c09e);
    return _0x503575[_0x493c0b(0xe5)](this, _0x333a57, _0x1445ed, _0x1d93ee);
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x116)] = function toJSON() {
    const _0xd857fb = _0x1ceb44;
    if (this[_0xd857fb(0xd4)] > 0x0) {
        const _0xd97f2d = new Array(this[_0xd857fb(0xd4)]);
        for (let _0x340f61 = 0x0; _0x340f61 < this[_0xd857fb(0xd4)]; ++_0x340f61)
            _0xd97f2d[_0x340f61] = this[_0x340f61];
        return {
            'type': 'Buffer',
            'data': _0xd97f2d
        };
    }
    return {
        'type': _0xd857fb(0xce),
        'data': []
    };
};
function adjustOffset(_0x3a3ba9, _0x1d0a1a) {
    _0x3a3ba9 = MathTrunc(_0x3a3ba9);
    if (_0x3a3ba9 === 0x0)
        return 0x0;
    if (_0x3a3ba9 < 0x0)
        return _0x3a3ba9 += _0x1d0a1a, _0x3a3ba9 > 0x0 ? _0x3a3ba9 : 0x0;
    if (_0x3a3ba9 < _0x1d0a1a)
        return _0x3a3ba9;
    return NumberIsNaN(_0x3a3ba9) ? 0x0 : _0x1d0a1a;
}
Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x105)] = function slice(_0x3c3e99, _0x1c0ee1) {
    const _0x76733e = _0x1ceb44, _0x55b730 = this[_0x76733e(0xd4)];
    _0x3c3e99 = adjustOffset(_0x3c3e99, _0x55b730), _0x1c0ee1 = _0x1c0ee1 !== undefined ? adjustOffset(_0x1c0ee1, _0x55b730) : _0x55b730;
    const _0x5d789f = _0x1c0ee1 > _0x3c3e99 ? _0x1c0ee1 - _0x3c3e99 : 0x0;
    return new FastBuffer(this[_0x76733e(0xbb)], this['byteOffset'] + _0x3c3e99, _0x5d789f);
};
function swap(_0x269b83, _0x33b30c, _0x24bad6) {
    const _0x14b510 = _0x269b83[_0x33b30c];
    _0x269b83[_0x33b30c] = _0x269b83[_0x24bad6], _0x269b83[_0x24bad6] = _0x14b510;
}
function _0x2053(_0x9bc796, _0x3d7f04) {
    return _0x2053 = function (_0x2b27d, _0x2053e6) {
        _0x2b27d = _0x2b27d - 0xaf;
        let _0x2554df = _0x2b27[_0x2b27d];
        return _0x2554df;
    }, _0x2053(_0x9bc796, _0x3d7f04);
}
Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x117)] = function swap16() {
    const _0x170e89 = _0x1ceb44, _0xbc75d3 = this[_0x170e89(0xd4)];
    if (_0xbc75d3 % 0x2 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE(_0x170e89(0x118));
    if (_0xbc75d3 < 0x80) {
        for (let _0x3dcae5 = 0x0; _0x3dcae5 < _0xbc75d3; _0x3dcae5 += 0x2)
            swap(this, _0x3dcae5, _0x3dcae5 + 0x1);
        return this;
    }
    return _swap16(this);
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x119)] = function swap32() {
    const _0x34dd48 = _0x1ceb44, _0xdb520d = this[_0x34dd48(0xd4)];
    if (_0xdb520d % 0x4 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE('32-bits');
    if (_0xdb520d < 0xc0) {
        for (let _0x35b323 = 0x0; _0x35b323 < _0xdb520d; _0x35b323 += 0x4) {
            swap(this, _0x35b323, _0x35b323 + 0x3), swap(this, _0x35b323 + 0x1, _0x35b323 + 0x2);
        }
        return this;
    }
    return _swap32(this);
}, Buffer[_0x1ceb44(0xc3)][_0x1ceb44(0x11a)] = function swap64() {
    const _0x2ce1e7 = _0x1ceb44, _0xd46c50 = this[_0x2ce1e7(0xd4)];
    if (_0xd46c50 % 0x8 !== 0x0)
        throw new ERR_INVALID_BUFFER_SIZE(_0x2ce1e7(0x11b));
    if (_0xd46c50 < 0xc0) {
        for (let _0x111d9b = 0x0; _0x111d9b < _0xd46c50; _0x111d9b += 0x8) {
            swap(this, _0x111d9b, _0x111d9b + 0x7), swap(this, _0x111d9b + 0x1, _0x111d9b + 0x6), swap(this, _0x111d9b + 0x2, _0x111d9b + 0x5), swap(this, _0x111d9b + 0x3, _0x111d9b + 0x4);
        }
        return this;
    }
    return _swap64(this);
}, Buffer[_0x1ceb44(0xc3)]['toLocaleString'] = Buffer['prototype'][_0x1ceb44(0x104)];
let transcode;
if (internalBinding(_0x1ceb44(0x11c))['hasIntl']) {
    const {
        icuErrName,
        transcode: _transcode
    } = internalBinding(_0x1ceb44(0x11d));
    transcode = function transcode(_0x4c25ba, _0x5a2a17, _0x810fcc) {
        const _0x46a140 = _0x1ceb44;
        if (!isUint8Array(_0x4c25ba))
            throw new ERR_INVALID_ARG_TYPE('source', [
                _0x46a140(0xce),
                'Uint8Array'
            ], _0x4c25ba);
        if (_0x4c25ba[_0x46a140(0xd4)] === 0x0)
            return Buffer[_0x46a140(0xd9)](0x0);
        _0x5a2a17 = normalizeEncoding(_0x5a2a17) || _0x5a2a17, _0x810fcc = normalizeEncoding(_0x810fcc) || _0x810fcc;
        const _0x4e68f9 = _transcode(_0x4c25ba, _0x5a2a17, _0x810fcc);
        if (typeof _0x4e68f9 !== _0x46a140(0xd7))
            return _0x4e68f9;
        const _0x22a825 = icuErrName(_0x4e68f9), _0x262010 = new Error(_0x46a140(0x11e) + _0x22a825 + ']');
        _0x262010[_0x46a140(0x11f)] = _0x22a825, _0x262010[_0x46a140(0x120)] = _0x4e68f9;
        throw _0x262010;
    };
}
function btoa(_0x3cdd84) {
    const _0x47a9b6 = _0x1ceb44;
    _0x3cdd84 = '' + _0x3cdd84;
    for (let _0x42abb1 = 0x0; _0x42abb1 < _0x3cdd84[_0x47a9b6(0xd4)]; _0x42abb1++) {
        if (_0x3cdd84[_0x42abb1][_0x47a9b6(0x121)](0x0) > 0xff)
            throw lazyDOMException(_0x47a9b6(0x122), _0x47a9b6(0x123));
    }
    const _0x575e72 = Buffer[_0x47a9b6(0xda)](_0x3cdd84, _0x47a9b6(0xf6));
    return _0x575e72[_0x47a9b6(0x104)](_0x47a9b6(0xf9));
}
const kBase64Digits = _0x1ceb44(0x124);
function atob(_0x5c23d8) {
    const _0x31c2c3 = _0x1ceb44;
    _0x5c23d8 = '' + _0x5c23d8;
    for (let _0x1a317c = 0x0; _0x1a317c < _0x5c23d8['length']; _0x1a317c++) {
        if (!kBase64Digits[_0x31c2c3(0x125)](_0x5c23d8[_0x1a317c]))
            throw lazyDOMException(_0x31c2c3(0x122), _0x31c2c3(0x123));
    }
    return Buffer[_0x31c2c3(0xda)](_0x5c23d8, _0x31c2c3(0xf9))['toString'](_0x31c2c3(0xf6));
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
}, ObjectDefineProperties(module[_0x1ceb44(0x126)], {
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
        'set'(_0x514de2) {
            INSPECT_MAX_BYTES = _0x514de2;
        }
    }
});
