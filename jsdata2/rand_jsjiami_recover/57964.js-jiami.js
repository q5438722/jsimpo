'use strict';
const {ObjectSetPrototypeOf, ReflectApply} = primordials;
const {Writable} = require('stream');
const {closeSync, writeSync} = require('fs');
function SyncWriteStream(_0x28ba37, _0x472942) {
    var _0x50c090 = '4|1|0|2|3'['split']('|'), _0x358b96 = 0;
    while (!![]) {
        switch (_0x50c090[_0x358b96++]) {
        case '0':
            this['fd'] = _0x28ba37;
            continue;
        case '1':
            _0x472942 = _0x472942 || {};
            continue;
        case '2':
            this['readable'] = ![];
            continue;
        case '3':
            this['autoClose'] = _0x472942['autoClose'] === undefined ? !![] : _0x472942['autoClose'];
            continue;
        case '4':
            ReflectApply(Writable, this, [{ 'autoDestroy': !![] }]);
            continue;
        }
        break;
    }
}
ObjectSetPrototypeOf(SyncWriteStream['prototype'], Writable['prototype']);
ObjectSetPrototypeOf(SyncWriteStream, Writable);
SyncWriteStream['prototype']['_write'] = function (_0x3e413b, _0x272e6c, _0x333366) {
    writeSync(this['fd'], _0x3e413b, 0, _0x3e413b['length']);
    _0x333366();
    return !![];
};
SyncWriteStream['prototype']['_destroy'] = function (_0x511e56, _0x5eb8c3) {
    if (this['fd'] === null)
        return _0x5eb8c3(_0x511e56);
    if (this['autoClose'])
        closeSync(this['fd']);
    this['fd'] = null;
    _0x5eb8c3(_0x511e56);
};
SyncWriteStream['prototype']['destroySoon'] = SyncWriteStream['prototype']['destroy'];
module['exports'] = SyncWriteStream;