const crypto = require('crypto'), {clipboard} = require('electron');
module['exports'] = class Clipboard {
    constructor() {
        this['reset']();
    }
    ['reset']() {
        this['metadata'] = null, this['signatureForMetadata'] = null;
    }
    ['md5'](_0x18561a) {
        const _0x206a1b = {
            'rADIh': 'md5',
            'StFFK': 'utf8',
            'vcJKR': 'hex'
        };
        return crypto['createHash'](_0x206a1b['rADIh'])['update'](_0x18561a, _0x206a1b['StFFK'])['digest'](_0x206a1b['vcJKR']);
    }
    ['write'](_0x2a249f, _0x832d40) {
        this['signatureForMetadata'] = this['md5'](_0x2a249f), this['metadata'] = _0x832d40, clipboard['writeText'](_0x2a249f);
    }
    ['read']() {
        return clipboard['readText']();
    }
    ['writeFindText'](_0x1238f5) {
        clipboard['writeFindText'](_0x1238f5);
    }
    ['readFindText']() {
        return clipboard['readFindText']();
    }
    ['readWithMetadata']() {
        const _0x42d2fb = {
                'JVBMZ': function (_0x36cf88, _0x234ca1) {
                    return _0x36cf88 === _0x234ca1;
                }
            }, _0x35534c = this['read']();
        return _0x42d2fb['JVBMZ'](this['signatureForMetadata'], this['md5'](_0x35534c)) ? {
            'text': _0x35534c,
            'metadata': this['metadata']
        } : { 'text': _0x35534c };
    }
};
