const common = require('../common'), fixtures = require(_0x57953a(475));
if (!common[_0x57953a(476)])
    common[_0x57953a(477)](_0x57953a(478));
process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0', common[_0x57953a(479)]('Warning', _0x57953a(480) + _0x57953a(481) + _0x57953a(482));
const assert = require('assert'), https = require(_0x57953a(483));
function read(_0x131213) {
    const _0xc037b4 = _0x57953a;
    return fixtures[_0xc037b4(484)](_0x131213);
}
const key1 = read(_0x57953a(485)), cert1 = read('agent1-cert.pem'), key2 = read(_0x57953a(486)), cert2 = read(_0x57953a(487)), key3 = read(_0x57953a(488)), cert3 = read(_0x57953a(489)), ca1 = read(_0x57953a(490)), ca2 = read(_0x57953a(491)), agent0 = new https[(_0x57953a(492))](), agent1 = new https[(_0x57953a(492))]({ 'ca': [ca1] }), agent2 = new https[(_0x57953a(492))]({ 'ca': [ca2] }), agent3 = new https[(_0x57953a(492))]({
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
server1['listen'](0, listening()), server2[_0x57953a(493)](0, listening()), server3['listen'](0, listening());
const responseErrors = {};
let pending = 0;
function server(_0xa1c9fc) {
    const _0x302698 = _0x57953a, _0xf7b1a3 = https['createServer'](_0xa1c9fc, handler);
    return _0xf7b1a3[_0x302698(494)] = [], _0xf7b1a3[_0x302698(495)] = 0, _0xf7b1a3;
}
function _0x213e(_0x17be56, _0x36c2f1) {
    return _0x213e = function (_0xd29b34, _0x213eba) {
        _0xd29b34 = _0xd29b34 - 464;
        let _0x2eb71d = _0xd29b[_0xd29b34];
        return _0x2eb71d;
    }, _0x213e(_0x17be56, _0x36c2f1);
}
function handler(_0x30723f, _0x28e403) {
    const _0x394d97 = _0x57953a;
    this[_0x394d97(494)][_0x394d97(496)](_0x30723f[_0x394d97(497)]), _0x28e403[_0x394d97(498)] = 200, _0x28e403[_0x394d97(499)]('foo', 'bar'), _0x28e403['end']('hello, world\n');
}
function listening() {
    return listenWait++, () => {
        listenWait--, listenWait === 0 && allListening();
    };
}
function makeReq(_0xe46289, _0x18e68a, _0x42b3a8, _0x595704, _0x56234b) {
    const _0x595645 = _0x57953a;
    pending++;
    const _0xf472bb = {
        'port': _0x18e68a,
        'path': _0xe46289,
        'ca': _0x56234b
    };
    if (!_0x56234b)
        _0xf472bb[_0x595645(500)] = agent0;
    else {
        if (!Array[_0x595645(501)](_0x56234b))
            _0x56234b = [_0x56234b];
        if (_0x56234b[_0x595645(502)](ca1) && _0x56234b[_0x595645(502)](ca2))
            _0xf472bb[_0x595645(500)] = agent3;
        else {
            if (_0x56234b[_0x595645(502)](ca1))
                _0xf472bb['agent'] = agent1;
            else
                _0x56234b[_0x595645(502)](ca2) ? _0xf472bb[_0x595645(500)] = agent2 : _0xf472bb[_0x595645(500)] = agent0;
        }
    }
    _0x595704 && (_0xf472bb[_0x595645(503)] = { 'host': _0x595704 });
    const _0x203721 = https[_0x595645(504)](_0xf472bb), _0x4d80dc = _0x18e68a === server1[_0x595645(505)]()[_0x595645(506)] ? server1 : _0x18e68a === server2['address']()[_0x595645(506)] ? server2 : _0x18e68a === server3[_0x595645(505)]()[_0x595645(506)] ? server3 : null;
    if (!_0x4d80dc)
        throw new Error(_0x595645(507) + _0x18e68a);
    _0x4d80dc[_0x595645(495)]++, _0x203721['on'](_0x595645(508), common[_0x595645(509)](_0xa6bbc1 => {
        const _0x4da1ad = _0x595645;
        assert[_0x4da1ad(510)](_0xa6bbc1['connection']['authorizationError'], _0x42b3a8), responseErrors[_0xe46289] = _0xa6bbc1[_0x4da1ad(511)][_0x4da1ad(512)], pending--, pending === 0 && (server1['close'](), server2[_0x4da1ad(513)](), server3[_0x4da1ad(513)]()), _0xa6bbc1[_0x4da1ad(514)]();
    }));
}
function allListening() {
    const _0xfaeb71 = _0x57953a, _0x359fab = server1[_0xfaeb71(505)]()[_0xfaeb71(506)], _0x2ca2a8 = server2[_0xfaeb71(505)]()['port'], _0x5024e9 = server3['address']()[_0xfaeb71(506)];
    makeReq(_0xfaeb71(515), _0x359fab, _0xfaeb71(516)), makeReq(_0xfaeb71(517), _0x359fab, _0xfaeb71(518), null, ca1), makeReq(_0xfaeb71(519), _0x359fab, _0xfaeb71(518), null, [
        ca1,
        ca2
    ]), makeReq('/val1-ca1', _0x359fab, null, _0xfaeb71(520), ca1), makeReq('/val1-ca1ca2', _0x359fab, null, _0xfaeb71(520), [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(521), _0x359fab, _0xfaeb71(516), 'agent1', ca2), makeReq('/inv2', _0x2ca2a8, _0xfaeb71(522)), makeReq(_0xfaeb71(523), _0x2ca2a8, _0xfaeb71(522), _0xfaeb71(524), ca1), makeReq(_0xfaeb71(525), _0x2ca2a8, 'DEPTH_ZERO_SELF_SIGNED_CERT', _0xfaeb71(524), [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(526), _0x5024e9, _0xfaeb71(516)), makeReq('/inv3-ca2', _0x5024e9, _0xfaeb71(518), null, ca2), makeReq('/inv3-ca1ca2', _0x5024e9, 'ERR_TLS_CERT_ALTNAME_INVALID', null, [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(527), _0x5024e9, null, _0xfaeb71(528), ca2), makeReq('/val3-ca1ca2', _0x5024e9, null, 'agent3', [
        ca1,
        ca2
    ]), makeReq(_0xfaeb71(529), _0x5024e9, _0xfaeb71(516), _0xfaeb71(520), ca1);
}
process['on'](_0x57953a(530), () => {
    const _0x1f6af3 = _0x57953a;
    assert[_0x1f6af3(510)](server1[_0x1f6af3(494)]['length'], server1[_0x1f6af3(495)]), assert[_0x1f6af3(510)](server2[_0x1f6af3(494)]['length'], server2[_0x1f6af3(495)]), assert[_0x1f6af3(510)](server3[_0x1f6af3(494)][_0x1f6af3(531)], server3[_0x1f6af3(495)]);
});