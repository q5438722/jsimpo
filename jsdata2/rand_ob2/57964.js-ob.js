'use strict';
const _0x3584 = [
    'prototype',
    '_write',
    'length',
    '_destroy',
    'destroySoon',
    'exports',
    '1248266EtpVJx',
    '2719ZWYaUG',
    '523qQOeSk',
    '1731791dEtlxZ',
    '500024kaLGlc',
    '1332157aKCPQi',
    '178747iFOooF',
    '1247065ZbcmCh',
    'stream',
    'readable',
    'autoClose'
];
const _0x4d429f = _0x2ec2;
function _0x2ec2(_0x8aa7b4, _0x2024a4) {
    return _0x2ec2 = function (_0x358454, _0x2ec2e9) {
        _0x358454 = _0x358454 - 0x16e;
        let _0x30e345 = _0x3584[_0x358454];
        return _0x30e345;
    }, _0x2ec2(_0x8aa7b4, _0x2024a4);
}
(function (_0x579cb1, _0x59a49d) {
    const _0x1a0bac = _0x2ec2;
    while (!![]) {
        try {
            const _0x2e60bb = -parseInt(_0x1a0bac(0x16e)) + -parseInt(_0x1a0bac(0x16f)) * parseInt(_0x1a0bac(0x170)) + parseInt(_0x1a0bac(0x171)) + -parseInt(_0x1a0bac(0x172)) + parseInt(_0x1a0bac(0x173)) + -parseInt(_0x1a0bac(0x174)) + parseInt(_0x1a0bac(0x175));
            if (_0x2e60bb === _0x59a49d)
                break;
            else
                _0x579cb1['push'](_0x579cb1['shift']());
        } catch (_0x5289c5) {
            _0x579cb1['push'](_0x579cb1['shift']());
        }
    }
}(_0x3584, 0xead93));
const {ObjectSetPrototypeOf, ReflectApply} = primordials, {Writable} = require(_0x4d429f(0x176)), {closeSync, writeSync} = require('fs');
function SyncWriteStream(_0x530b2c, _0x1ecb1e) {
    const _0x43a52e = _0x4d429f;
    ReflectApply(Writable, this, [{ 'autoDestroy': !![] }]), _0x1ecb1e = _0x1ecb1e || {}, this['fd'] = _0x530b2c, this[_0x43a52e(0x177)] = ![], this['autoClose'] = _0x1ecb1e[_0x43a52e(0x178)] === undefined ? !![] : _0x1ecb1e[_0x43a52e(0x178)];
}
ObjectSetPrototypeOf(SyncWriteStream[_0x4d429f(0x179)], Writable[_0x4d429f(0x179)]), ObjectSetPrototypeOf(SyncWriteStream, Writable), SyncWriteStream[_0x4d429f(0x179)][_0x4d429f(0x17a)] = function (_0x4334e6, _0x23ab15, _0x4ba755) {
    const _0x372e04 = _0x4d429f;
    return writeSync(this['fd'], _0x4334e6, 0x0, _0x4334e6[_0x372e04(0x17b)]), _0x4ba755(), !![];
}, SyncWriteStream[_0x4d429f(0x179)][_0x4d429f(0x17c)] = function (_0x386792, _0x42783) {
    const _0x5de09e = _0x4d429f;
    if (this['fd'] === null)
        return _0x42783(_0x386792);
    if (this[_0x5de09e(0x178)])
        closeSync(this['fd']);
    this['fd'] = null, _0x42783(_0x386792);
}, SyncWriteStream[_0x4d429f(0x179)][_0x4d429f(0x17d)] = SyncWriteStream['prototype']['destroy'], module[_0x4d429f(0x17e)] = SyncWriteStream;
