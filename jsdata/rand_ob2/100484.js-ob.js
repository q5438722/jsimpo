const _0xa08a = [
    '122737PFevHW',
    '20885aVAkbx',
    '148898ecgNDs',
    '1zAZuAb',
    '73913jGyiJG',
    '3zXhNnm',
    '195818YxXOvg',
    '168138wUqqqt',
    '1pqbueV',
    '372538DvYvai',
    '_lang',
    '_ready',
    'getLanguage',
    'getDirection',
    'get',
    'translate'
];
const _0x5f03cb = _0x257c;
(function (_0x4557c8, _0x3ab158) {
    const _0x47592e = _0x257c;
    while (!![]) {
        try {
            const _0x1a11f8 = parseInt(_0x47592e(0x65)) + -parseInt(_0x47592e(0x66)) + parseInt(_0x47592e(0x67)) * parseInt(_0x47592e(0x68)) + parseInt(_0x47592e(0x69)) * parseInt(_0x47592e(0x6a)) + parseInt(_0x47592e(0x6b)) + -parseInt(_0x47592e(0x6c)) + -parseInt(_0x47592e(0x6d)) * parseInt(_0x47592e(0x6e));
            if (_0x1a11f8 === _0x3ab158)
                break;
            else
                _0x4557c8['push'](_0x4557c8['shift']());
        } catch (_0x1a5c60) {
            _0x4557c8['push'](_0x4557c8['shift']());
        }
    }
}(_0xa08a, 0x1f28f));
import '../external/webL10n/l10n.js';
import {
    fixupLangCode,
    getL10nFallback
} from './l10n_utils.js';
const webL10n = document['webL10n'];
function _0x257c(_0x103f18, _0x1a164f) {
    return _0x257c = function (_0xa08a11, _0x257c4b) {
        _0xa08a11 = _0xa08a11 - 0x65;
        let _0x26db2d = _0xa08a[_0xa08a11];
        return _0x26db2d;
    }, _0x257c(_0x103f18, _0x1a164f);
}
class GenericL10n {
    constructor(_0x25f426) {
        const _0x5d1d4b = _0x257c;
        this[_0x5d1d4b(0x6f)] = _0x25f426, this[_0x5d1d4b(0x70)] = new Promise((_0x14c7d1, _0x3f6a5c) => {
            webL10n['setLanguage'](fixupLangCode(_0x25f426), () => {
                _0x14c7d1(webL10n);
            });
        });
    }
    async [_0x5f03cb(0x71)]() {
        const _0x7002e2 = _0x5f03cb, _0x37ad6b = await this['_ready'];
        return _0x37ad6b[_0x7002e2(0x71)]();
    }
    async [_0x5f03cb(0x72)]() {
        const _0x532774 = _0x5f03cb, _0x3c535d = await this[_0x532774(0x70)];
        return _0x3c535d[_0x532774(0x72)]();
    }
    async [_0x5f03cb(0x73)](_0x55203f, _0xda534 = null, _0x16f94d = getL10nFallback(_0x55203f, _0xda534)) {
        const _0x4be184 = _0x5f03cb, _0x25c606 = await this[_0x4be184(0x70)];
        return _0x25c606[_0x4be184(0x73)](_0x55203f, _0xda534, _0x16f94d);
    }
    async [_0x5f03cb(0x74)](_0x49021c) {
        const _0x1ef2b0 = _0x5f03cb, _0x5ebe4b = await this[_0x1ef2b0(0x70)];
        return _0x5ebe4b[_0x1ef2b0(0x74)](_0x49021c);
    }
}
export {
    GenericL10n
};
