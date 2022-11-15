const crypto = require('crypto');
const {clipboard} = require('electron');
module['exports'] = class Clipboard {
    constructor() {
        this['reset']();
    }
    ['reset']() {
        this['metadata'] = null;
        this['signatureForMetadata'] = null;
    }
    ['md5'](_0x268ccc) {
        return crypto['createHash']('md5')['update'](_0x268ccc, 'utf8')['digest']('hex');
    }
    ['write'](_0x53ddcd, _0x5597e2) {
        this['signatureForMetadata'] = this['md5'](_0x53ddcd);
        this['metadata'] = _0x5597e2;
        clipboard['writeText'](_0x53ddcd);
    }
    ['read']() {
        return clipboard['readText']();
    }
    ['writeFindText'](_0x1a2c2c) {
        clipboard['writeFindText'](_0x1a2c2c);
    }
    ['readFindText']() {
        return clipboard['readFindText']();
    }
    ['readWithMetadata']() {
        const _0x1748c5 = this['read']();
        if (this['signatureForMetadata'] === this['md5'](_0x1748c5)) {
            return {
                'text': _0x1748c5,
                'metadata': this['metadata']
            };
        } else {
            return { 'text': _0x1748c5 };
        }
    }
};