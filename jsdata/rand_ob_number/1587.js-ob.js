const crypto = require('crypto'), {clipboard} = require('electron');
module['exports'] = class Clipboard {
    constructor() {
        this['reset']();
    }
    ['reset']() {
        this['metadata'] = null, this['signatureForMetadata'] = null;
    }
    ['md5'](_0x5b4e06) {
        return crypto['createHash']('md5')['update'](_0x5b4e06, 'utf8')['digest']('hex');
    }
    ['write'](_0x118402, _0x335a3b) {
        this['signatureForMetadata'] = this['md5'](_0x118402), this['metadata'] = _0x335a3b, clipboard['writeText'](_0x118402);
    }
    ['read']() {
        return clipboard['readText']();
    }
    ['writeFindText'](_0x3a2c8f) {
        clipboard['writeFindText'](_0x3a2c8f);
    }
    ['readFindText']() {
        return clipboard['readFindText']();
    }
    ['readWithMetadata']() {
        const _0x24b259 = this['read']();
        return this['signatureForMetadata'] === this['md5'](_0x24b259) ? {
            'text': _0x24b259,
            'metadata': this['metadata']
        } : { 'text': _0x24b259 };
    }
};
