const common = require(_0x55b03e(375)), fixtures = require(_0x55b03e(376));
if (!common['hasCrypto'])
    common[_0x55b03e(377)](_0x55b03e(378));
const h2 = require(_0x55b03e(379)), tls = require(_0x55b03e(380)), server = h2[_0x55b03e(381)]({
        'key': fixtures['readKey'](_0x55b03e(382)),
        'cert': fixtures[_0x55b03e(383)](_0x55b03e(384)),
        'unknownProtocolTimeout': 500,
        'allowHalfOpen': !![]
    });
server['on'](_0x55b03e(385), _0x3dfb6b => {
    const _0x50c435 = _0x55b03e, _0x12b070 = { 'ZSmHo': 'close' };
    _0x3dfb6b['on'](_0x12b070[_0x50c435(386)], common[_0x50c435(387)](() => {
        const _0x9aae13 = _0x50c435;
        server[_0x9aae13(388)]();
    }));
}), server['listen'](105 * -56 + 9 * -633 + 11577, function () {
    const _0x5a6a55 = _0x55b03e;
    tls[_0x5a6a55(389)]({
        'port': server[_0x5a6a55(390)]()[_0x5a6a55(391)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x5a6a55(392)]
    });
});