const common = require(_0x114994(420));
if (!common['hasCrypto'])
    common[_0x114994(421)](_0x114994(422));
const assert = require(_0x114994(423)), tls = require(_0x114994(424)), fixtures = require(_0x114994(425)), options = {
        'key': fixtures['readKey'](_0x114994(426)),
        'cert': fixtures[_0x114994(427)](_0x114994(428))
    }, messageUtf8 = _0x114994(429), messageAscii = _0x114994(430), server = tls[_0x114994(431)](options, common[_0x114994(432)](function (_0x4cc49e) {
        const _0x2a4415 = _0x114994;
        console[_0x2a4415(433)](_0x2a4415(434), _0x4cc49e[_0x2a4415(435)]()), _0x4cc49e[_0x2a4415(436)](messageUtf8);
    }));
server['listen'](0, function () {
    const _0x12cbe9 = _0x114994, _0x122eca = tls[_0x12cbe9(437)]({
            'port': this['address']()[_0x12cbe9(438)],
            'rejectUnauthorized': ![]
        });
    let _0x3bbca7 = '';
    _0x122eca[_0x12cbe9(439)](_0x12cbe9(440)), _0x122eca['on'](_0x12cbe9(441), function (_0x16a95a) {
        const _0x208883 = _0x12cbe9;
        console['log'](_0x208883(442), _0x16a95a), assert['ok'](typeof _0x16a95a === _0x208883(443)), _0x3bbca7 += _0x16a95a;
    }), _0x122eca['on'](_0x12cbe9(444), common['mustCall'](() => {
        const _0x541957 = _0x12cbe9;
        console[_0x541957(433)](_0x541957(445));
    })), _0x122eca['on'](_0x12cbe9(446), common[_0x12cbe9(432)](function () {
        const _0x474c74 = _0x12cbe9;
        console['log'](_0x474c74(447)), assert[_0x474c74(448)](_0x122eca[_0x474c74(449)], 'closed'), assert[_0x474c74(450)](messageUtf8, _0x3bbca7), assert['strictEqual'](messageAscii, _0x3bbca7), server[_0x474c74(446)]();
    }));
});