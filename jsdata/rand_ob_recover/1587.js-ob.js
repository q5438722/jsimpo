const crypto = require(_0x2ad5e1(374)), {clipboard} = require(_0x2ad5e1(375));
module[_0x2ad5e1(376)] = class Clipboard {
    constructor() {
        this['reset']();
    }
    [_0x2ad5e1(377)]() {
        const _0x1f5405 = _0x2ad5e1;
        this[_0x1f5405(378)] = null, this['signatureForMetadata'] = null;
    }
    [_0x2ad5e1(379)](_0xf5efe7) {
        const _0x12218c = _0x2ad5e1, _0x34d965 = {
                'KFgTw': _0x12218c(379),
                'sYaWl': _0x12218c(380)
            };
        return crypto[_0x12218c(381)](_0x34d965['KFgTw'])['update'](_0xf5efe7, _0x34d965[_0x12218c(382)])[_0x12218c(383)](_0x12218c(384));
    }
    [_0x2ad5e1(385)](_0x5e16b0, _0x1f6f2f) {
        const _0x1b3f61 = _0x2ad5e1;
        this['signatureForMetadata'] = this['md5'](_0x5e16b0), this['metadata'] = _0x1f6f2f, clipboard[_0x1b3f61(386)](_0x5e16b0);
    }
    [_0x2ad5e1(387)]() {
        const _0x70be1a = _0x2ad5e1;
        return clipboard[_0x70be1a(388)]();
    }
    [_0x2ad5e1(389)](_0xcf74b6) {
        const _0x116ff2 = _0x2ad5e1;
        clipboard[_0x116ff2(389)](_0xcf74b6);
    }
    [_0x2ad5e1(390)]() {
        const _0x49ae03 = _0x2ad5e1;
        return clipboard[_0x49ae03(390)]();
    }
    [_0x2ad5e1(391)]() {
        const _0x4f527a = _0x2ad5e1, _0x49bad0 = this[_0x4f527a(387)]();
        return this[_0x4f527a(392)] === this['md5'](_0x49bad0) ? {
            'text': _0x49bad0,
            'metadata': this[_0x4f527a(378)]
        } : { 'text': _0x49bad0 };
    }
};