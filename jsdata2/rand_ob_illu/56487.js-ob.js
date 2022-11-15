'use strict';

const _0x1541 = ['gmwup', 'RunCallbackWithRecv', '14OBkBQH', '24247sAJVTm', '525ygGAye', '18345fHaxQU', '3FZaXrV', '162314EpbXNL', '103701NJbbCO', '211081trejdm', '1pszGId', '420353jMYHVE', '1SWywtJ', '../../common', './build/', 'buildType', '/3_callbacks', 'hello world', 'strictEqual'];
const _0x4b2839 = _0x3315;

(function (_0x52062b, _0x33d4b2) {
    const _0x223b79 = _0x3315;

    while (true) {
        try {
            const _0x4db495 = parseInt(_0x223b79(0x170)) * -parseInt(_0x223b79(0x171)) + parseInt(_0x223b79(0x172)) + parseInt(_0x223b79(0x173)) * parseInt(_0x223b79(0x174)) + -parseInt(_0x223b79(0x175)) + parseInt(_0x223b79(0x176)) + parseInt(_0x223b79(0x177)) * parseInt(_0x223b79(0x178)) + parseInt(_0x223b79(0x179)) * parseInt(_0x223b79(0x17a));

            if (_0x4db495 === _0x33d4b2) break;else _0x52062b.push(_0x52062b.shift());
        } catch (_0x1e589a) {
            _0x52062b.push(_0x52062b.shift());
        }
    }
})(_0x1541, 288923);

const common = require(_0x4b2839(0x17b));

const assert = require('assert');

const addon = require(_0x4b2839(0x17c) + common[_0x4b2839(0x17d)] + _0x4b2839(0x17e));

function _0x3315(_0x10232d, _0xe36cf0) {
    return _0x3315 = function (_0x4c20e4, _0x17bde0) {
        _0x4c20e4 = _0x4c20e4 - 368;
        const _0x26cb99 = _0x1541[_0x4c20e4];

        return _0x26cb99;
    }, _0x3315(_0x10232d, _0xe36cf0);
}
addon.RunCallback(function (_0x71c43b) {
    const _0x453bb2 = _0x4b2839;
    const _0x969cd7 = { 'gmwup': _0x453bb2(0x17f) };

    assert[_0x453bb2(0x180)](_0x71c43b, _0x969cd7[_0x453bb2(0x181)]);
});
function testRecv(_0x19ab54) {
    const _0x3c8f8b = _0x4b2839;

    addon[_0x3c8f8b(0x182)](function () {
        const _0x58fd73 = _0x3c8f8b;

        assert[_0x58fd73(0x180)](this, _0x19ab54);
    }, _0x19ab54);
}
testRecv(undefined), testRecv(null), testRecv(5), testRecv(true), testRecv('Hello'), testRecv([]), testRecv({});
