'use strict';
const _0x502e = [
    'prototype',
    'next',
    'iterator',
    'mustNotCall',
    'set',
    'moduleB',
    'moduleC',
    'goodbye',
    'moduleA',
    'goodnight',
    'hello',
    'discard',
    'delete',
    'get',
    'has',
    '11973OWqUDu',
    '82mYHuyP',
    '3hlXbLX',
    '13877loJqhn',
    '8PCSFtX',
    '80422VzWLmP',
    '1161400PPhZKV',
    '1147173GnwoRP',
    '986433rbXwYj',
    '1BxnWsn',
    '3911142wNWnkz',
    '../common',
    'assert',
    'internal/util/iterable_weak_map',
    'getPrototypeOf'
];
const _0x181c26 = _0x2d3d;
function _0x2d3d(_0x44f019, _0xdae31d) {
    return _0x2d3d = function (_0x502ecf, _0x2d3db8) {
        _0x502ecf = _0x502ecf - 0x198;
        let _0x3d4932 = _0x502e[_0x502ecf];
        return _0x3d4932;
    }, _0x2d3d(_0x44f019, _0xdae31d);
}
(function (_0x530495, _0x37a8a2) {
    const _0x4d7e65 = _0x2d3d;
    while (!![]) {
        try {
            const _0x5522b6 = -parseInt(_0x4d7e65(0x198)) * -parseInt(_0x4d7e65(0x199)) + parseInt(_0x4d7e65(0x19a)) * -parseInt(_0x4d7e65(0x19b)) + parseInt(_0x4d7e65(0x19c)) * parseInt(_0x4d7e65(0x19d)) + parseInt(_0x4d7e65(0x19e)) + parseInt(_0x4d7e65(0x19f)) + parseInt(_0x4d7e65(0x1a0)) * parseInt(_0x4d7e65(0x1a1)) + -parseInt(_0x4d7e65(0x1a2));
            if (_0x5522b6 === _0x37a8a2)
                break;
            else
                _0x530495['push'](_0x530495['shift']());
        } catch (_0x5b1c86) {
            _0x530495['push'](_0x530495['shift']());
        }
    }
}(_0x502e, 0xec2e3));
const common = require(_0x181c26(0x1a3)), {deepStrictEqual, strictEqual} = require(_0x181c26(0x1a4)), {IterableWeakMap} = require(_0x181c26(0x1a5));
Reflect[_0x181c26(0x1a6)](function* () {
})[_0x181c26(0x1a7)][_0x181c26(0x1a8)] = common['mustNotCall'](), Reflect[_0x181c26(0x1a6)](new Set()[Symbol[_0x181c26(0x1a9)]]())[_0x181c26(0x1a8)] = common[_0x181c26(0x1aa)]();
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(0x1ab)](_cache['moduleA'], 'hello'), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ac)], 'discard'), wm['set'](_cache[_0x181c26(0x1ad)], _0x181c26(0x1ae)), delete _cache[_0x181c26(0x1ac)], setImmediate(() => {
        _cache, globalThis['gc']();
        const _0x83a1c3 = [...wm];
        deepStrictEqual(_0x83a1c3, [
            'hello',
            'goodbye'
        ]);
    });
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {}
        };
    wm['set'](_cache[_0x181c26(0x1af)], 'hello'), wm[_0x181c26(0x1ab)](_cache['moduleB'], _0x181c26(0x1ae)), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ac)], _0x181c26(0x1b0));
    const values = [...wm];
    deepStrictEqual(values, [
        _0x181c26(0x1b1),
        _0x181c26(0x1b0)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(0x1ab)](_cache['moduleA'], _0x181c26(0x1b1)), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ac)], _0x181c26(0x1b2)), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ad)], _0x181c26(0x1ae)), wm[_0x181c26(0x1b3)](_cache['moduleB']);
    const values = [...wm];
    deepStrictEqual(values, [
        'hello',
        _0x181c26(0x1ae)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1af)], _0x181c26(0x1b1)), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ad)], 'goodbye'), wm[_0x181c26(0x1b3)](_cache[_0x181c26(0x1ac)]);
    const values = [...wm];
    deepStrictEqual(values, [
        'hello',
        _0x181c26(0x1ae)
    ]);
}
{
    const wm = new IterableWeakMap(), _cache = {
            'moduleA': {},
            'moduleB': {},
            'moduleC': {}
        };
    wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1af)], _0x181c26(0x1b1)), wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1ac)], _0x181c26(0x1b2)), wm['set'](_cache['moduleC'], _0x181c26(0x1ae)), strictEqual(wm[_0x181c26(0x1b4)](_cache['moduleB']), _0x181c26(0x1b2));
}
{
    const wm = new IterableWeakMap(), _cache = { 'moduleA': {} };
    wm[_0x181c26(0x1ab)](_cache[_0x181c26(0x1af)], _0x181c26(0x1b1)), strictEqual(wm[_0x181c26(0x1b5)](_cache[_0x181c26(0x1af)]), !![]);
}
