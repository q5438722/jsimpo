const _0x1eaf = [
    'complete',
    'warn',
    '\x27\x20method\x20of\x20platform\x20\x27__PLATFORM_TITLE__\x27\x20does\x20not\x20support\x20option\x20\x27',
    'name',
    'value',
    'indexOf',
    'returnValue',
    'error',
    'Platform\x20\x27__PLATFORM_TITLE__\x27\x20does\x20not\x20support\x20\x27',
    'args',
    'push',
    'apply',
    '1ZtGtCy',
    '269678VpfTma',
    '719870WmzZxx',
    '132726pgPjOu',
    '1083400ODyuCo',
    '370940NMkOPS',
    '217WRfZaG',
    '991CnVczE',
    '686886PPSJym',
    'success',
    'fail',
    'cancel'
];
const _0x2c08d9 = _0x40b6;
(function (_0x43612e, _0x49f0e2) {
    const _0x367440 = _0x40b6;
    while (!![]) {
        try {
            const _0x3fe684 = -parseInt(_0x367440(0x136)) * -parseInt(_0x367440(0x137)) + -parseInt(_0x367440(0x138)) + parseInt(_0x367440(0x139)) + parseInt(_0x367440(0x13a)) + parseInt(_0x367440(0x13b)) + -parseInt(_0x367440(0x13c)) * -parseInt(_0x367440(0x13d)) + -parseInt(_0x367440(0x13e));
            if (_0x3fe684 === _0x49f0e2)
                break;
            else
                _0x43612e['push'](_0x43612e['shift']());
        } catch (_0xf4e62f) {
            _0x43612e['push'](_0x43612e['shift']());
        }
    }
}(_0x1eaf, 0xa25cb));
import {
    isFn,
    isStr,
    hasOwn,
    isPlainObject
} from 'uni-shared';
function _0x40b6(_0x1ecae6, _0x202ae5) {
    return _0x40b6 = function (_0x1eaf86, _0x40b6d2) {
        _0x1eaf86 = _0x1eaf86 - 0x136;
        let _0x20d67f = _0x1eaf[_0x1eaf86];
        return _0x20d67f;
    }, _0x40b6(_0x1ecae6, _0x202ae5);
}
import {
    isSyncApi,
    isContextApi
} from '../helpers/promise';
import { protocols } from 'uni-platform/runtime/api/protocols';
const CALLBACKS = [
    _0x2c08d9(0x13f),
    _0x2c08d9(0x140),
    _0x2c08d9(0x141),
    _0x2c08d9(0x142)
];
function processCallback(_0x205b5e, _0x22d4f4, _0x81e39b) {
    return function (_0x35f5ba) {
        return _0x22d4f4(processReturnValue(_0x205b5e, _0x35f5ba, _0x81e39b));
    };
}
function processArgs(_0x45ea1a, _0x27874d, _0x5f5741 = {}, _0x5e2440 = {}, _0x103df1 = ![]) {
    const _0x38340f = _0x2c08d9;
    if (isPlainObject(_0x27874d)) {
        const _0xc162e8 = _0x103df1 === !![] ? _0x27874d : {};
        isFn(_0x5f5741) && (_0x5f5741 = _0x5f5741(_0x27874d, _0xc162e8) || {});
        for (const _0x123b0b in _0x27874d) {
            if (hasOwn(_0x5f5741, _0x123b0b)) {
                let _0x93fea3 = _0x5f5741[_0x123b0b];
                isFn(_0x93fea3) && (_0x93fea3 = _0x93fea3(_0x27874d[_0x123b0b], _0x27874d, _0xc162e8));
                if (!_0x93fea3)
                    console[_0x38340f(0x143)]('The\x20\x27' + _0x45ea1a + _0x38340f(0x144) + _0x123b0b + '\x27');
                else {
                    if (isStr(_0x93fea3))
                        _0xc162e8[_0x93fea3] = _0x27874d[_0x123b0b];
                    else
                        isPlainObject(_0x93fea3) && (_0xc162e8[_0x93fea3[_0x38340f(0x145)] ? _0x93fea3['name'] : _0x123b0b] = _0x93fea3[_0x38340f(0x146)]);
                }
            } else
                CALLBACKS[_0x38340f(0x147)](_0x123b0b) !== -0x1 ? isFn(_0x27874d[_0x123b0b]) && (_0xc162e8[_0x123b0b] = processCallback(_0x45ea1a, _0x27874d[_0x123b0b], _0x5e2440)) : !_0x103df1 && (_0xc162e8[_0x123b0b] = _0x27874d[_0x123b0b]);
        }
        return _0xc162e8;
    } else
        isFn(_0x27874d) && (_0x27874d = processCallback(_0x45ea1a, _0x27874d, _0x5e2440));
    return _0x27874d;
}
function processReturnValue(_0xb26e46, _0x104dfe, _0x1110a3, _0x50447b = ![]) {
    const _0x2031ba = _0x2c08d9;
    return isFn(protocols[_0x2031ba(0x148)]) && (_0x104dfe = protocols[_0x2031ba(0x148)](_0xb26e46, _0x104dfe)), processArgs(_0xb26e46, _0x104dfe, _0x1110a3, {}, _0x50447b);
}
export default function wrapper(_0x10c7c7, _0x1dd769) {
    if (hasOwn(protocols, _0x10c7c7)) {
        const _0x1697b = protocols[_0x10c7c7];
        if (!_0x1697b)
            return function () {
                const _0x106253 = _0x40b6;
                console[_0x106253(0x149)](_0x106253(0x14a) + _0x10c7c7 + '\x27.');
            };
        return function (_0x4f7c44, _0x279b37) {
            const _0x1632e2 = _0x40b6;
            let _0x5e5980 = _0x1697b;
            isFn(_0x1697b) && (_0x5e5980 = _0x1697b(_0x4f7c44));
            _0x4f7c44 = processArgs(_0x10c7c7, _0x4f7c44, _0x5e5980[_0x1632e2(0x14b)], _0x5e5980[_0x1632e2(0x148)]);
            const _0x3160c2 = [_0x4f7c44];
            typeof _0x279b37 !== 'undefined' && _0x3160c2[_0x1632e2(0x14c)](_0x279b37);
            if (isFn(_0x5e5980[_0x1632e2(0x145)]))
                _0x10c7c7 = _0x5e5980[_0x1632e2(0x145)](_0x4f7c44);
            else
                isStr(_0x5e5980[_0x1632e2(0x145)]) && (_0x10c7c7 = _0x5e5980['name']);
            const _0x59c248 = __GLOBAL__[_0x10c7c7][_0x1632e2(0x14d)](__GLOBAL__, _0x3160c2);
            if (isSyncApi(_0x10c7c7))
                return processReturnValue(_0x10c7c7, _0x59c248, _0x5e5980[_0x1632e2(0x148)], isContextApi(_0x10c7c7));
            return _0x59c248;
        };
    }
    return _0x1dd769;
}
