const common = require(_0x33041f(337)), fixtures = require('../common/fixtures');
if (!common[_0x33041f(338)])
    common[_0x33041f(339)](_0x33041f(340));
process[_0x33041f(341)][_0x33041f(342)] = '0', common[_0x33041f(343)](_0x33041f(344), _0x33041f(345) + 'makes TLS connections and HTTPS requests insecure by disabling ' + _0x33041f(346));
function _0x4b47(_0x2f34a0, _0x56ce59) {
    return _0x4b47 = function (_0x823ed8, _0x4f6e8f) {
        _0x823ed8 = _0x823ed8 - (-3488 + 730 * 4 + 894);
        let _0x1d7e92 = _0x13f5[_0x823ed8];
        return _0x1d7e92;
    }, _0x4b47(_0x2f34a0, _0x56ce59);
}
const assert = require(_0x33041f(347)), https = require(_0x33041f(348));
function read(_0x348dd4) {
    const _0x254ebe = _0x33041f;
    return fixtures[_0x254ebe(349)](_0x348dd4);
}
const key1 = read(_0x33041f(350)), cert1 = read(_0x33041f(351)), key2 = read(_0x33041f(352)), cert2 = read(_0x33041f(353)), key3 = read(_0x33041f(354)), cert3 = read(_0x33041f(355)), ca1 = read(_0x33041f(356)), ca2 = read(_0x33041f(357)), agent0 = new https[(_0x33041f(358))](), agent1 = new https[(_0x33041f(358))]({ 'ca': [ca1] }), agent2 = new https[(_0x33041f(358))]({ 'ca': [ca2] }), agent3 = new https['Agent']({
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
let listenWait = -27 * -255 + -15 * 659 + -15 * -200;
server1[_0x33041f(359)](104 + 811 * -8 + 6384, listening()), server2[_0x33041f(359)](-9813 * 1 + 990 * -1 + -10803 * -1, listening()), server3['listen'](249 * -37 + -5511 + 2 * 7362, listening());
const responseErrors = {};
let pending = 1951 + 2425 + -4376;
function server(_0x40a48a) {
    const _0x4cbbd4 = _0x33041f, _0x49aff3 = https['createServer'](_0x40a48a, handler);
    return _0x49aff3[_0x4cbbd4(360)] = [], _0x49aff3[_0x4cbbd4(361)] = -8573 * -1 + 1 * -5419 + -3154, _0x49aff3;
}
function handler(_0x595ccb, _0xbb1ea2) {
    const _0x57ec08 = _0x33041f, _0x50cd59 = { 'gVcKP': _0x57ec08(362) };
    this[_0x57ec08(360)][_0x57ec08(363)](_0x595ccb['url']), _0xbb1ea2[_0x57ec08(364)] = -6672 + -507 + 157 * 47, _0xbb1ea2[_0x57ec08(365)](_0x50cd59['gVcKP'], _0x57ec08(366)), _0xbb1ea2[_0x57ec08(367)](_0x57ec08(368));
}
function listening() {
    const _0x4fcdf9 = {
        'vQkUP': function (_0x4e6845, _0x117057) {
            return _0x4e6845 === _0x117057;
        },
        'iZElY': function (_0x2993ae) {
            return _0x2993ae();
        }
    };
    return listenWait++, () => {
        const _0x5307b7 = _0x4b47;
        listenWait--, _0x4fcdf9[_0x5307b7(369)](listenWait, 3037 * 1 + -6277 + 3240) && _0x4fcdf9[_0x5307b7(370)](allListening);
    };
}
function makeReq(_0x36119a, _0x29a4ef, _0x2a3bd7, _0x474e21, _0x4cdd57) {
    const _0x47e6fe = _0x33041f, _0x19f3db = {
            'vbRhj': _0x47e6fe(371),
            'ovHxv': function (_0x4fabae, _0x48f65b) {
                return _0x4fabae === _0x48f65b;
            },
            'THkek': _0x47e6fe(372)
        };
    pending++;
    const _0x1415d1 = {
        'port': _0x29a4ef,
        'path': _0x36119a,
        'ca': _0x4cdd57
    };
    if (!_0x4cdd57)
        _0x1415d1['agent'] = agent0;
    else {
        if (!Array[_0x47e6fe(373)](_0x4cdd57))
            _0x4cdd57 = [_0x4cdd57];
        if (_0x4cdd57[_0x47e6fe(374)](ca1) && _0x4cdd57['includes'](ca2))
            _0x1415d1['agent'] = agent3;
        else {
            if (_0x4cdd57[_0x47e6fe(374)](ca1))
                _0x1415d1[_0x47e6fe(375)] = agent1;
            else
                _0x4cdd57['includes'](ca2) ? _0x1415d1[_0x47e6fe(375)] = agent2 : _0x1415d1[_0x47e6fe(375)] = agent0;
        }
    }
    _0x474e21 && (_0x1415d1['headers'] = { 'host': _0x474e21 });
    const _0x4019b7 = https[_0x47e6fe(376)](_0x1415d1), _0x243b9c = _0x29a4ef === server1[_0x47e6fe(377)]()[_0x47e6fe(378)] ? server1 : _0x19f3db['ovHxv'](_0x29a4ef, server2[_0x47e6fe(377)]()[_0x47e6fe(378)]) ? server2 : _0x19f3db['ovHxv'](_0x29a4ef, server3[_0x47e6fe(377)]()['port']) ? server3 : null;
    if (!_0x243b9c)
        throw new Error(_0x47e6fe(379) + _0x29a4ef);
    _0x243b9c[_0x47e6fe(361)]++, _0x4019b7['on'](_0x19f3db[_0x47e6fe(380)], common[_0x47e6fe(381)](_0x4580dd => {
        const _0x31cc89 = _0x47e6fe, _0x40e233 = _0x19f3db['vbRhj'][_0x31cc89(382)]('|');
        let _0xfd3701 = 7740 + -6198 + -3 * 514;
        while (!![]) {
            switch (_0x40e233[_0xfd3701++]) {
            case '0':
                pending === 7528 + 8738 + -16266 && (server1[_0x31cc89(383)](), server2[_0x31cc89(383)](), server3[_0x31cc89(383)]());
                continue;
            case '1':
                _0x4580dd[_0x31cc89(384)]();
                continue;
            case '2':
                pending--;
                continue;
            case '3':
                responseErrors[_0x36119a] = _0x4580dd[_0x31cc89(385)][_0x31cc89(386)];
                continue;
            case '4':
                assert[_0x31cc89(387)](_0x4580dd[_0x31cc89(385)]['authorizationError'], _0x2a3bd7);
                continue;
            }
            break;
        }
    }));
}
function allListening() {
    const _0x1c04de = _0x33041f, _0x4b45fc = {
            'EHuPt': '/inv1',
            'ZZLlx': function (_0x141450, _0x2b99f9, _0x17dfcd, _0x314bc4, _0x584fa6, _0x525d91) {
                return _0x141450(_0x2b99f9, _0x17dfcd, _0x314bc4, _0x584fa6, _0x525d91);
            },
            'wFtiO': _0x1c04de(388),
            'VCkbo': 'ERR_TLS_CERT_ALTNAME_INVALID',
            'ceXHT': function (_0x250f63, _0x16474a, _0x268c18, _0x2a6d86, _0x10a7b6, _0xd872d3) {
                return _0x250f63(_0x16474a, _0x268c18, _0x2a6d86, _0x10a7b6, _0xd872d3);
            },
            'Aspbr': '/inv1-ca1ca2',
            'GQZkz': function (_0x33dad5, _0x34f2e1, _0x2338a9, _0x121d08, _0x1233e3, _0x44f4bf) {
                return _0x33dad5(_0x34f2e1, _0x2338a9, _0x121d08, _0x1233e3, _0x44f4bf);
            },
            'iAXjg': '/val1-ca1',
            'cgswr': _0x1c04de(389),
            'ZSYXl': '/val1-ca1ca2',
            'WOvBY': '/inv1-ca2',
            'bJfJv': '/inv2',
            'tSnVm': _0x1c04de(390),
            'mxJNy': function (_0xf329fd, _0x5dd85f, _0x4938c5, _0x3a944d, _0xb75ba3, _0x303a95) {
                return _0xf329fd(_0x5dd85f, _0x4938c5, _0x3a944d, _0xb75ba3, _0x303a95);
            },
            'zYUZt': _0x1c04de(391),
            'uUvSV': _0x1c04de(392),
            'wzPxM': _0x1c04de(393),
            'WPstZ': function (_0x4f3c58, _0x404a81, _0xfe44da, _0x374c08) {
                return _0x4f3c58(_0x404a81, _0xfe44da, _0x374c08);
            },
            'qZoDD': _0x1c04de(394),
            'qWpYF': _0x1c04de(395),
            'cziJB': function (_0x3c460b, _0x466fe5, _0x20a477, _0x4954a8, _0x39bc71, _0x6ebcc6) {
                return _0x3c460b(_0x466fe5, _0x20a477, _0x4954a8, _0x39bc71, _0x6ebcc6);
            },
            'GRtaA': _0x1c04de(396),
            'liCVA': '/inv3-ca1ca2',
            'ZZeIM': function (_0x45be51, _0xa739b9, _0x28e830, _0x2eebef, _0x5d9a6a, _0x535501) {
                return _0x45be51(_0xa739b9, _0x28e830, _0x2eebef, _0x5d9a6a, _0x535501);
            },
            'NKaxP': _0x1c04de(397),
            'OrGrT': _0x1c04de(398),
            'IKoUS': _0x1c04de(399),
            'dXPEm': _0x1c04de(400)
        }, _0x4dba26 = server1[_0x1c04de(377)]()['port'], _0x26c2d7 = server2[_0x1c04de(377)]()['port'], _0x5d3c8a = server3[_0x1c04de(377)]()['port'];
    makeReq(_0x4b45fc[_0x1c04de(401)], _0x4dba26, _0x1c04de(395)), _0x4b45fc['ZZLlx'](makeReq, _0x4b45fc[_0x1c04de(402)], _0x4dba26, _0x4b45fc[_0x1c04de(403)], null, ca1), _0x4b45fc['ceXHT'](makeReq, _0x4b45fc[_0x1c04de(404)], _0x4dba26, _0x4b45fc['VCkbo'], null, [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(405)](makeReq, _0x4b45fc[_0x1c04de(406)], _0x4dba26, null, _0x4b45fc[_0x1c04de(407)], ca1), _0x4b45fc['GQZkz'](makeReq, _0x4b45fc['ZSYXl'], _0x4dba26, null, _0x4b45fc[_0x1c04de(407)], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(405)](makeReq, _0x4b45fc[_0x1c04de(408)], _0x4dba26, _0x1c04de(395), 'agent1', ca2), makeReq(_0x4b45fc[_0x1c04de(409)], _0x26c2d7, _0x4b45fc['tSnVm']), _0x4b45fc[_0x1c04de(410)](makeReq, _0x4b45fc[_0x1c04de(411)], _0x26c2d7, _0x4b45fc[_0x1c04de(412)], _0x4b45fc[_0x1c04de(413)], ca1), _0x4b45fc[_0x1c04de(410)](makeReq, _0x4b45fc[_0x1c04de(414)], _0x26c2d7, _0x1c04de(390), _0x4b45fc[_0x1c04de(413)], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(415)](makeReq, _0x4b45fc['qZoDD'], _0x5d3c8a, _0x4b45fc[_0x1c04de(416)]), _0x4b45fc[_0x1c04de(417)](makeReq, _0x4b45fc[_0x1c04de(418)], _0x5d3c8a, _0x4b45fc[_0x1c04de(403)], null, ca2), makeReq(_0x4b45fc['liCVA'], _0x5d3c8a, _0x4b45fc[_0x1c04de(403)], null, [
        ca1,
        ca2
    ]), _0x4b45fc['ZZeIM'](makeReq, _0x4b45fc['NKaxP'], _0x5d3c8a, null, _0x4b45fc[_0x1c04de(419)], ca2), _0x4b45fc[_0x1c04de(420)](makeReq, _0x4b45fc[_0x1c04de(421)], _0x5d3c8a, null, _0x4b45fc['OrGrT'], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(420)](makeReq, _0x4b45fc[_0x1c04de(422)], _0x5d3c8a, _0x1c04de(395), _0x4b45fc[_0x1c04de(407)], ca1);
}
process['on'](_0x33041f(423), () => {
    const _0x117db7 = _0x33041f;
    assert[_0x117db7(387)](server1['requests'][_0x117db7(424)], server1[_0x117db7(361)]), assert[_0x117db7(387)](server2[_0x117db7(360)][_0x117db7(424)], server2[_0x117db7(361)]), assert[_0x117db7(387)](server3['requests'][_0x117db7(424)], server3[_0x117db7(361)]);
});