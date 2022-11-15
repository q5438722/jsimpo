const _0xf50c = [
    'reset',
    'metadata',
    'signatureForMetadata',
    'md5',
    'utf8',
    'digest',
    'hex',
    'write',
    'writeText',
    'read',
    'writeFindText',
    'readFindText',
    'readWithMetadata',
    '2MpCvBv',
    '589037dNggKT',
    '1107102Oywtku',
    '1slOXAX',
    '1088256KDnNIA',
    '628721ZQPBTi',
    '887950MUTlfi',
    '1pBcmoZ',
    '541039wlnFXP',
    '149aaZJej',
    '16529vvPhsG',
    'crypto',
    'electron',
    'exports'
];
const _0x3b2797 = _0x1d75;
(function (_0x5276ab, _0xb6d34) {
    const _0x28a8a = _0x1d75;
    while (!![]) {
        try {
            const _0x1ffd70 = parseInt(_0x28a8a(0x138)) * parseInt(_0x28a8a(0x139)) + parseInt(_0x28a8a(0x13a)) * -parseInt(_0x28a8a(0x13b)) + -parseInt(_0x28a8a(0x13c)) + parseInt(_0x28a8a(0x13d)) + -parseInt(_0x28a8a(0x13e)) + -parseInt(_0x28a8a(0x13f)) * parseInt(_0x28a8a(0x140)) + parseInt(_0x28a8a(0x141)) * parseInt(_0x28a8a(0x142));
            if (_0x1ffd70 === _0xb6d34)
                break;
            else
                _0x5276ab['push'](_0x5276ab['shift']());
        } catch (_0x342817) {
            _0x5276ab['push'](_0x5276ab['shift']());
        }
    }
}(_0xf50c, 0x9d895));
const crypto = require(_0x3b2797(0x143)), {clipboard} = require(_0x3b2797(0x144));
function _0x1d75(_0x1ef9ff, _0x3f5dcd) {
    return _0x1d75 = function (_0xf50c69, _0x1d750f) {
        _0xf50c69 = _0xf50c69 - 0x138;
        let _0x133e91 = _0xf50c[_0xf50c69];
        return _0x133e91;
    }, _0x1d75(_0x1ef9ff, _0x3f5dcd);
}
module[_0x3b2797(0x145)] = class Clipboard {
    constructor() {
        const _0x8cbfa4 = _0x3b2797;
        this[_0x8cbfa4(0x146)]();
    }
    [_0x3b2797(0x146)]() {
        const _0x46298a = _0x3b2797;
        this[_0x46298a(0x147)] = null, this[_0x46298a(0x148)] = null;
    }
    [_0x3b2797(0x149)](_0xc836a8) {
        const _0x3c654b = _0x3b2797;
        return crypto['createHash'](_0x3c654b(0x149))['update'](_0xc836a8, _0x3c654b(0x14a))[_0x3c654b(0x14b)](_0x3c654b(0x14c));
    }
    [_0x3b2797(0x14d)](_0x43c829, _0x4c9731) {
        const _0x3c6b13 = _0x3b2797;
        this[_0x3c6b13(0x148)] = this[_0x3c6b13(0x149)](_0x43c829), this[_0x3c6b13(0x147)] = _0x4c9731, clipboard[_0x3c6b13(0x14e)](_0x43c829);
    }
    [_0x3b2797(0x14f)]() {
        return clipboard['readText']();
    }
    [_0x3b2797(0x150)](_0x35c4ec) {
        clipboard['writeFindText'](_0x35c4ec);
    }
    [_0x3b2797(0x151)]() {
        const _0x4bc74d = _0x3b2797;
        return clipboard[_0x4bc74d(0x151)]();
    }
    [_0x3b2797(0x152)]() {
        const _0x431322 = _0x3b2797, _0x13d361 = this[_0x431322(0x14f)]();
        return this[_0x431322(0x148)] === this[_0x431322(0x149)](_0x13d361) ? {
            'text': _0x13d361,
            'metadata': this[_0x431322(0x147)]
        } : { 'text': _0x13d361 };
    }
};
