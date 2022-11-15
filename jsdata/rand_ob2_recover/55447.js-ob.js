const common = require(_0x51544a(246)), fixtures = require(_0x51544a(247));
if (!common[_0x51544a(248)])
    common[_0x51544a(249)]('missing crypto');
process['env'][_0x51544a(250)] = '0', common[_0x51544a(251)]('Warning', 'Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to \'0\' ' + _0x51544a(252) + _0x51544a(253));
const assert = require(_0x51544a(254)), https = require(_0x51544a(255));
function read(_0x4688d0) {
    return fixtures['readKey'](_0x4688d0);
}
const key1 = read('agent1-key.pem'), cert1 = read('agent1-cert.pem'), key2 = read(_0x51544a(256)), cert2 = read(_0x51544a(257)), key3 = read(_0x51544a(258)), cert3 = read('agent3-cert.pem'), ca1 = read(_0x51544a(259)), ca2 = read(_0x51544a(260)), agent0 = new https[(_0x51544a(261))](), agent1 = new https[(_0x51544a(261))]({ 'ca': [ca1] }), agent2 = new https[(_0x51544a(261))]({ 'ca': [ca2] }), agent3 = new https[(_0x51544a(261))]({
        'ca': [
            ca1,
            ca2
        ]
    }), options1 = {
        'key': key1,
        'cert': cert1
    }, options2 = {
        'key': key2,
        'cert': cert2
    }, options3 = {
        'key': key3,
        'cert': cert3
    }, server1 = server(options1), server2 = server(options2), server3 = server(options3);
let listenWait = 0;
server1[_0x51544a(262)](0, listening()), server2[_0x51544a(262)](0, listening()), server3['listen'](0, listening());
const responseErrors = {};
let pending = 0;
function server(_0x46b904) {
    const _0x352ca2 = _0x51544a, _0x117d23 = https[_0x352ca2(263)](_0x46b904, handler);
    return _0x117d23['requests'] = [], _0x117d23[_0x352ca2(264)] = 0, _0x117d23;
}
function handler(_0x5f7b4e, _0x1a51c4) {
    const _0x57617e = _0x51544a;
    this[_0x57617e(265)][_0x57617e(266)](_0x5f7b4e[_0x57617e(267)]), _0x1a51c4[_0x57617e(268)] = 200, _0x1a51c4[_0x57617e(269)](_0x57617e(270), _0x57617e(271)), _0x1a51c4[_0x57617e(272)](_0x57617e(273));
}
function listening() {
    return listenWait++, () => {
        listenWait--, listenWait === 0 && allListening();
    };
}
function makeReq(_0x2def3d, _0x1dbda2, _0x3e0b2e, _0x4c3874, _0x7f8bd) {
    const _0x48e962 = _0x51544a;
    pending++;
    const _0x5a41f4 = {
        'port': _0x1dbda2,
        'path': _0x2def3d,
        'ca': _0x7f8bd
    };
    if (!_0x7f8bd)
        _0x5a41f4['agent'] = agent0;
    else {
        if (!Array[_0x48e962(274)](_0x7f8bd))
            _0x7f8bd = [_0x7f8bd];
        if (_0x7f8bd['includes'](ca1) && _0x7f8bd['includes'](ca2))
            _0x5a41f4['agent'] = agent3;
        else {
            if (_0x7f8bd[_0x48e962(275)](ca1))
                _0x5a41f4[_0x48e962(276)] = agent1;
            else
                _0x7f8bd[_0x48e962(275)](ca2) ? _0x5a41f4[_0x48e962(276)] = agent2 : _0x5a41f4[_0x48e962(276)] = agent0;
        }
    }
    _0x4c3874 && (_0x5a41f4['headers'] = { 'host': _0x4c3874 });
    const _0x3c6e8c = https[_0x48e962(277)](_0x5a41f4), _0x1518d4 = _0x1dbda2 === server1['address']()['port'] ? server1 : _0x1dbda2 === server2[_0x48e962(278)]()[_0x48e962(279)] ? server2 : _0x1dbda2 === server3[_0x48e962(278)]()[_0x48e962(279)] ? server3 : null;
    if (!_0x1518d4)
        throw new Error(_0x48e962(280) + _0x1dbda2);
    _0x1518d4['expectCount']++, _0x3c6e8c['on'](_0x48e962(281), common[_0x48e962(282)](_0x4ce869 => {
        const _0x1cf5f0 = _0x48e962;
        assert[_0x1cf5f0(283)](_0x4ce869[_0x1cf5f0(284)][_0x1cf5f0(285)], _0x3e0b2e), responseErrors[_0x2def3d] = _0x4ce869['connection'][_0x1cf5f0(285)], pending--, pending === 0 && (server1[_0x1cf5f0(286)](), server2[_0x1cf5f0(286)](), server3[_0x1cf5f0(286)]()), _0x4ce869[_0x1cf5f0(287)]();
    }));
}
function allListening() {
    const _0x4fe47f = _0x51544a, _0xfb02b = server1[_0x4fe47f(278)]()[_0x4fe47f(279)], _0x4e06fc = server2[_0x4fe47f(278)]()[_0x4fe47f(279)], _0x3af076 = server3[_0x4fe47f(278)]()['port'];
    makeReq(_0x4fe47f(288), _0xfb02b, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq(_0x4fe47f(289), _0xfb02b, _0x4fe47f(290), null, ca1), makeReq(_0x4fe47f(291), _0xfb02b, _0x4fe47f(290), null, [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(292), _0xfb02b, null, _0x4fe47f(293), ca1), makeReq(_0x4fe47f(294), _0xfb02b, null, _0x4fe47f(293), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(295), _0xfb02b, _0x4fe47f(296), _0x4fe47f(293), ca2), makeReq(_0x4fe47f(297), _0x4e06fc, 'DEPTH_ZERO_SELF_SIGNED_CERT'), makeReq(_0x4fe47f(298), _0x4e06fc, 'DEPTH_ZERO_SELF_SIGNED_CERT', _0x4fe47f(299), ca1), makeReq(_0x4fe47f(300), _0x4e06fc, _0x4fe47f(301), _0x4fe47f(299), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(302), _0x3af076, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE'), makeReq('/inv3-ca2', _0x3af076, _0x4fe47f(290), null, ca2), makeReq(_0x4fe47f(303), _0x3af076, _0x4fe47f(290), null, [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(304), _0x3af076, null, _0x4fe47f(305), ca2), makeReq('/val3-ca1ca2', _0x3af076, null, _0x4fe47f(305), [
        ca1,
        ca2
    ]), makeReq(_0x4fe47f(306), _0x3af076, 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', _0x4fe47f(293), ca1);
}
process['on']('exit', () => {
    const _0x27f2fa = _0x51544a;
    assert['strictEqual'](server1[_0x27f2fa(265)]['length'], server1[_0x27f2fa(264)]), assert[_0x27f2fa(283)](server2[_0x27f2fa(265)]['length'], server2[_0x27f2fa(264)]), assert[_0x27f2fa(283)](server3[_0x27f2fa(265)][_0x27f2fa(307)], server3[_0x27f2fa(264)]);
});