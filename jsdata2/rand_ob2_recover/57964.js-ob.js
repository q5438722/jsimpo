const {ObjectSetPrototypeOf, ReflectApply} = primordials, {Writable} = require(_0x4d429f(374)), {closeSync, writeSync} = require('fs');
function SyncWriteStream(_0x530b2c, _0x1ecb1e) {
    const _0x43a52e = _0x4d429f;
    ReflectApply(Writable, this, [{ 'autoDestroy': !![] }]), _0x1ecb1e = _0x1ecb1e || {}, this['fd'] = _0x530b2c, this[_0x43a52e(375)] = ![], this['autoClose'] = _0x1ecb1e[_0x43a52e(376)] === undefined ? !![] : _0x1ecb1e[_0x43a52e(376)];
}
ObjectSetPrototypeOf(SyncWriteStream[_0x4d429f(377)], Writable[_0x4d429f(377)]), ObjectSetPrototypeOf(SyncWriteStream, Writable), SyncWriteStream[_0x4d429f(377)][_0x4d429f(378)] = function (_0x4334e6, _0x23ab15, _0x4ba755) {
    const _0x372e04 = _0x4d429f;
    return writeSync(this['fd'], _0x4334e6, 0, _0x4334e6[_0x372e04(379)]), _0x4ba755(), !![];
}, SyncWriteStream[_0x4d429f(377)][_0x4d429f(380)] = function (_0x386792, _0x42783) {
    const _0x5de09e = _0x4d429f;
    if (this['fd'] === null)
        return _0x42783(_0x386792);
    if (this[_0x5de09e(376)])
        closeSync(this['fd']);
    this['fd'] = null, _0x42783(_0x386792);
}, SyncWriteStream[_0x4d429f(377)][_0x4d429f(381)] = SyncWriteStream['prototype']['destroy'], module[_0x4d429f(382)] = SyncWriteStream;