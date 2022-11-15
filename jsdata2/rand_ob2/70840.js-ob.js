'use strict';
var _0x515f = [
    'should\x20not\x20be\x20executed',
    'should\x20have\x20this\x20=\x20undefined\x20on\x20imported\x20non-strict\x20functions',
    'toBeTypeOf',
    'object',
    'keys',
    'should\x20be\x20possible\x20to\x20use\x20new\x20correctly',
    'toEqual',
    '30106nOAPwU',
    '893WhFUul',
    '683awzYrN',
    '2huAbbF',
    '702541oCOZsr',
    '866007bmZPdD',
    '1FiykSn',
    '1427399YqzXQD',
    '1046917yVZIwU',
    '1hWnyqe',
    '6084286zEFFqo',
    'toBe',
    'undefined',
    'that',
    'returnThisArrow',
    'toThrowError',
    'should\x20not\x20break\x20classes\x20and\x20functions',
    'bar',
    'prop',
    'foo',
    'call',
    'getX'
];
var _0x56555a = _0x570b;
(function (_0x31aa4b, _0x1bd53c) {
    var _0x1ebba3 = _0x570b;
    while (!![]) {
        try {
            var _0x7cd324 = parseInt(_0x1ebba3(0x107)) + -parseInt(_0x1ebba3(0x108)) * parseInt(_0x1ebba3(0x109)) + parseInt(_0x1ebba3(0x10a)) * -parseInt(_0x1ebba3(0x10b)) + -parseInt(_0x1ebba3(0x10c)) + parseInt(_0x1ebba3(0x10d)) * -parseInt(_0x1ebba3(0x10e)) + parseInt(_0x1ebba3(0x10f)) * -parseInt(_0x1ebba3(0x110)) + parseInt(_0x1ebba3(0x111));
            if (_0x7cd324 === _0x1bd53c)
                break;
            else
                _0x31aa4b['push'](_0x31aa4b['shift']());
        } catch (_0x5c87cf) {
            _0x31aa4b['push'](_0x31aa4b['shift']());
        }
    }
}(_0x515f, 0xb951c));
import {
    extendThisClass,
    returnThisArrow,
    returnThisMember,
    that
} from './abc';
import _0x52ff8d, {
    a,
    b as _0x5074db,
    C as _0xfb2d3,
    D as _0x4abd25,
    E,
    F,
    f1,
    f2,
    f3,
    G
} from './abc';
import {
    bindThis,
    callThis,
    applyThis
} from './issue-7213';
import * as _0xf8e752 from './abc';
function _0x570b(_0x3fe21e, _0x8a64c8) {
    return _0x570b = function (_0x515f74, _0x570bdc) {
        _0x515f74 = _0x515f74 - 0x107;
        var _0x134d1f = _0x515f[_0x515f74];
        return _0x134d1f;
    }, _0x570b(_0x3fe21e, _0x8a64c8);
}
it('should\x20have\x20this\x20=\x20undefined\x20on\x20harmony\x20modules', () => {
    var _0x3567a7 = _0x570b;
    expect(typeof that)[_0x3567a7(0x112)](_0x3567a7(0x113)), expect(typeof _0xf8e752[_0x3567a7(0x114)])[_0x3567a7(0x112)](_0x3567a7(0x113)), expect(typeof returnThisArrow())[_0x3567a7(0x112)](_0x3567a7(0x113)), expect(typeof _0xf8e752[_0x3567a7(0x115)]())[_0x3567a7(0x112)](_0x3567a7(0x113)), expect(function () {
        returnThisMember();
    })[_0x3567a7(0x116)](), expect(function () {
        _0xf8e752['returnThisMember']();
    })[_0x3567a7(0x116)](), expect(function () {
        extendThisClass();
    })['toThrowError']();
}), it(_0x56555a(0x117), () => {
    var _0x21f026 = _0x56555a;
    expect(new _0xfb2d3()['foo']())[_0x21f026(0x112)](_0x21f026(0x118)), expect(new _0xfb2d3()[_0x21f026(0x118)]())[_0x21f026(0x112)](_0x21f026(0x118)), expect(new _0x4abd25()[_0x21f026(0x119)]())[_0x21f026(0x112)]('ok'), expect(E[_0x21f026(0x11a)]())[_0x21f026(0x112)]('bar'), expect(F)[_0x21f026(0x112)]('ok'), expect(f1[_0x21f026(0x11b)]({ 'x': 'f1' }))[_0x21f026(0x112)]('f1'), expect(f2['call']({ 'x': 'f2' }))[_0x21f026(0x112)]('f2'), expect(f3[_0x21f026(0x11b)]('f3'))[_0x21f026(0x112)](undefined), expect(f3())[_0x21f026(0x112)](undefined), expect(new G('ok')[_0x21f026(0x11c)]())[_0x21f026(0x112)]('ok');
});
function x() {
    var _0x271866 = _0x56555a;
    throw new Error(_0x271866(0x11d));
}
it(_0x56555a(0x11e), () => {
    var _0x3a64d4 = _0x56555a;
    x, _0x52ff8d, x, _0x52ff8d(), expect(_0x52ff8d())[_0x3a64d4(0x112)](_0x3a64d4(0x113)), x, a, x, a(), expect(a())[_0x3a64d4(0x112)](_0x3a64d4(0x113)), x, _0x5074db, x, _0x5074db(), expect(_0x5074db())[_0x3a64d4(0x112)](_0x3a64d4(0x113)), x, _0xf8e752['a'], x, _0xf8e752['a'](), expect(_0xf8e752['a']())[_0x3a64d4(0x11f)](_0x3a64d4(0x120));
    var _0x41866d = _0xf8e752['a']();
    expect(Object[_0x3a64d4(0x121)](_0x41866d))['toEqual'](Object['keys'](_0xf8e752));
});
import _0x5daaf0, { C } from './new';
import * as _0x46a2e9 from './new';
it(_0x56555a(0x122), () => {
    var _0xe0c4d7 = _0x56555a;
    expect(new C())['toEqual']({ 'ok': !![] }), expect(new _0x5daaf0())[_0xe0c4d7(0x123)]({ 'ok': !![] }), expect(new _0x46a2e9['C']())['toEqual']({ 'ok': !![] });
}), it('should\x20not\x20break\x20Babel\x20arrow\x20function\x20transform', () => {
    var _0x1c8f8e = _0x56555a;
    expect(bindThis())[_0x1c8f8e(0x112)](undefined), expect(callThis)[_0x1c8f8e(0x112)](undefined), expect(applyThis)[_0x1c8f8e(0x112)](undefined);
});
