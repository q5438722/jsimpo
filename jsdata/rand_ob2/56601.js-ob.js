'use strict';
const _0x2719 = [
    '196235vTZqeA',
    '843345elzdqS',
    '60813NLfooZ',
    '13dcPERD',
    '517589PfbIKe',
    '210861fTrqJi',
    '1gzdGcJ',
    '73629uCabNu',
    '../common',
    'assert',
    'async_hooks',
    'disable',
    'nextTick',
    'createHook',
    'mustNotCall',
    'mustCall',
    'length',
    'shift',
    'enable',
    '101oBiOqW',
    '371tjToaN'
];
const _0x56bbe2 = _0x1cbc;
(function (_0x14bae5, _0x2ada90) {
    const _0x3c6837 = _0x1cbc;
    while (!![]) {
        try {
            const _0xb3987d = parseInt(_0x3c6837(0x156)) * -parseInt(_0x3c6837(0x157)) + parseInt(_0x3c6837(0x158)) + parseInt(_0x3c6837(0x159)) + -parseInt(_0x3c6837(0x15a)) * parseInt(_0x3c6837(0x15b)) + parseInt(_0x3c6837(0x15c)) + -parseInt(_0x3c6837(0x15d)) + parseInt(_0x3c6837(0x15e)) * -parseInt(_0x3c6837(0x15f));
            if (_0xb3987d === _0x2ada90)
                break;
            else
                _0x14bae5['push'](_0x14bae5['shift']());
        } catch (_0x40bf9a) {
            _0x14bae5['push'](_0x14bae5['shift']());
        }
    }
}(_0x2719, 0x6c8df));
function _0x1cbc(_0x20530b, _0x2c0fba) {
    return _0x1cbc = function (_0x271910, _0x1cbc02) {
        _0x271910 = _0x271910 - 0x156;
        let _0x1d815e = _0x2719[_0x271910];
        return _0x1d815e;
    }, _0x1cbc(_0x20530b, _0x2c0fba);
}
const common = require(_0x56bbe2(0x160)), assert = require(_0x56bbe2(0x161)), async_hooks = require(_0x56bbe2(0x162)), fnsToTest = [
        setTimeout,
        _0x125745 => {
            setImmediate(() => {
                _0x125745(), setImmediate(() => {
                    const _0x5be2b8 = _0x1cbc;
                    hook[_0x5be2b8(0x163)]();
                });
            });
        },
        _0xf33a77 => {
            setImmediate(() => {
                const _0x5d4905 = _0x1cbc;
                process[_0x5d4905(0x164)](() => {
                    _0xf33a77(), setImmediate(() => {
                        const _0x1111e9 = _0x1cbc;
                        hook[_0x1111e9(0x163)](), assert['strictEqual'](fnsToTest['length'], 0x0);
                    });
                });
            });
        }
    ], hook = async_hooks[_0x56bbe2(0x165)]({
        'before': common[_0x56bbe2(0x166)](),
        'after': common[_0x56bbe2(0x167)](() => {
        }, 0x3),
        'destroy': common[_0x56bbe2(0x167)](() => {
            const _0x5f3bbb = _0x56bbe2;
            hook[_0x5f3bbb(0x163)](), nextTest();
        }, 0x3)
    });
nextTest();
function nextTest() {
    const _0x200bbb = _0x56bbe2;
    fnsToTest[_0x200bbb(0x168)] > 0x0 && fnsToTest[_0x200bbb(0x169)]()(common[_0x200bbb(0x167)](() => {
        const _0x1ab9da = _0x200bbb;
        hook[_0x1ab9da(0x16a)]();
    }));
}
