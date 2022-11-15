const _0x19ab = [
    '22546dAXYQE',
    '1rAntHi',
    '132qCQkhj',
    '200vojZRy',
    '961CkXInF',
    '83tBrths',
    '769899vkjgEG',
    '1796065nCnNRW',
    'crypto',
    'electron',
    'exports',
    'reset',
    'metadata',
    'md5',
    'utf8',
    'createHash',
    'sYaWl',
    'digest',
    'hex',
    'write',
    'writeText',
    'read',
    'readText',
    'writeFindText',
    'readFindText',
    'readWithMetadata',
    'signatureForMetadata',
    '978890HlAKKD',
    '465551eemUNn',
    '2pUkiZp'
];
function _0x2c8e(_0x4f2aca, _0xf9632) {
    return _0x2c8e = function (_0x29c5b6, _0xc7142) {
        _0x29c5b6 = _0x29c5b6 - (0x49f + 0xbbc + -0xef0);
        let _0x148c1d = _0x19ab[_0x29c5b6];
        return _0x148c1d;
    }, _0x2c8e(_0x4f2aca, _0xf9632);
}
const _0x2ad5e1 = _0x2c8e;
(function (_0x55e58e, _0x2942f7) {
    const _0x3bace6 = _0x2c8e;
    while (!![]) {
        try {
            const _0x262d38 = -parseInt(_0x3bace6(0x16b)) + -parseInt(_0x3bace6(0x16c)) * parseInt(_0x3bace6(0x16d)) + -parseInt(_0x3bace6(0x16e)) * parseInt(_0x3bace6(0x16f)) + -parseInt(_0x3bace6(0x170)) * parseInt(_0x3bace6(0x171)) + -parseInt(_0x3bace6(0x172)) * parseInt(_0x3bace6(0x173)) + parseInt(_0x3bace6(0x174)) + parseInt(_0x3bace6(0x175));
            if (_0x262d38 === _0x2942f7)
                break;
            else
                _0x55e58e['push'](_0x55e58e['shift']());
        } catch (_0x5e1418) {
            _0x55e58e['push'](_0x55e58e['shift']());
        }
    }
}(_0x19ab, 0x2 * 0x11d1 + 0x4 * -0x7935 + -0xe413 * -0xb));
const crypto = require(_0x2ad5e1(0x176)), {clipboard} = require(_0x2ad5e1(0x177));
module[_0x2ad5e1(0x178)] = class Clipboard {
    constructor() {
        this['reset']();
    }
    [_0x2ad5e1(0x179)]() {
        const _0x1f5405 = _0x2ad5e1;
        this[_0x1f5405(0x17a)] = null, this['signatureForMetadata'] = null;
    }
    [_0x2ad5e1(0x17b)](_0xf5efe7) {
        const _0x12218c = _0x2ad5e1, _0x34d965 = {
                'KFgTw': _0x12218c(0x17b),
                'sYaWl': _0x12218c(0x17c)
            };
        return crypto[_0x12218c(0x17d)](_0x34d965['KFgTw'])['update'](_0xf5efe7, _0x34d965[_0x12218c(0x17e)])[_0x12218c(0x17f)](_0x12218c(0x180));
    }
    [_0x2ad5e1(0x181)](_0x5e16b0, _0x1f6f2f) {
        const _0x1b3f61 = _0x2ad5e1;
        this['signatureForMetadata'] = this['md5'](_0x5e16b0), this['metadata'] = _0x1f6f2f, clipboard[_0x1b3f61(0x182)](_0x5e16b0);
    }
    [_0x2ad5e1(0x183)]() {
        const _0x70be1a = _0x2ad5e1;
        return clipboard[_0x70be1a(0x184)]();
    }
    [_0x2ad5e1(0x185)](_0xcf74b6) {
        const _0x116ff2 = _0x2ad5e1;
        clipboard[_0x116ff2(0x185)](_0xcf74b6);
    }
    [_0x2ad5e1(0x186)]() {
        const _0x49ae03 = _0x2ad5e1;
        return clipboard[_0x49ae03(0x186)]();
    }
    [_0x2ad5e1(0x187)]() {
        const _0x4f527a = _0x2ad5e1, _0x49bad0 = this[_0x4f527a(0x183)]();
        return this[_0x4f527a(0x188)] === this['md5'](_0x49bad0) ? {
            'text': _0x49bad0,
            'metadata': this[_0x4f527a(0x17a)]
        } : { 'text': _0x49bad0 };
    }
};
