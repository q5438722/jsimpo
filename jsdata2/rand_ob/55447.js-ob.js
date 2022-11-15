'use strict';
const _0x13f5 = [
    'resume',
    'connection',
    'authorizationError',
    'strictEqual',
    '/inv1-ca1',
    'agent1',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    '/inv2-ca1',
    'agent2',
    '/inv2-ca1ca2',
    '/inv3',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
    '/inv3-ca2',
    '/val3-ca2',
    'agent3',
    '/val3-ca1ca2',
    '/inv3-ca1',
    'EHuPt',
    'wFtiO',
    'VCkbo',
    'Aspbr',
    'GQZkz',
    'iAXjg',
    'cgswr',
    'WOvBY',
    'bJfJv',
    'mxJNy',
    'zYUZt',
    'tSnVm',
    'uUvSV',
    'wzPxM',
    'WPstZ',
    'qWpYF',
    'cziJB',
    'GRtaA',
    'OrGrT',
    'ZZeIM',
    'IKoUS',
    'dXPEm',
    'exit',
    'length',
    '1212800SdilEJ',
    '1OcRofT',
    '959132fXRRhD',
    '512858ezkyHh',
    '20159ncMpfR',
    '34OtTTlx',
    '593577deuIhN',
    '1Vnrwvv',
    '42401FkZKHi',
    '1wBDacP',
    '1966907fdpPSL',
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'env',
    'NODE_TLS_REJECT_UNAUTHORIZED',
    'expectWarning',
    'Warning',
    'Setting\x20the\x20NODE_TLS_REJECT_UNAUTHORIZED\x20environment\x20variable\x20to\x20\x270\x27\x20',
    'certificate\x20verification.',
    'assert',
    'https',
    'readKey',
    'agent1-key.pem',
    'agent1-cert.pem',
    'agent2-key.pem',
    'agent2-cert.pem',
    'agent3-key.pem',
    'agent3-cert.pem',
    'ca1-cert.pem',
    'ca2-cert.pem',
    'Agent',
    'listen',
    'requests',
    'expectCount',
    'foo',
    'push',
    'statusCode',
    'setHeader',
    'bar',
    'end',
    'hello,\x20world\x0a',
    'vQkUP',
    'iZElY',
    '4|3|2|0|1',
    'response',
    'isArray',
    'includes',
    'agent',
    'get',
    'address',
    'port',
    'invalid\x20port:\x20',
    'THkek',
    'mustCall',
    'split',
    'close'
];
const _0x33041f = _0x4b47;
(function (_0x5d49bf, _0x1fca8d) {
    const _0x55e8fd = _0x4b47;
    while (!![]) {
        try {
            const _0x3a94f8 = parseInt(_0x55e8fd(0x146)) + -parseInt(_0x55e8fd(0x147)) * -parseInt(_0x55e8fd(0x148)) + parseInt(_0x55e8fd(0x149)) + -parseInt(_0x55e8fd(0x14a)) * parseInt(_0x55e8fd(0x14b)) + -parseInt(_0x55e8fd(0x14c)) * -parseInt(_0x55e8fd(0x14d)) + parseInt(_0x55e8fd(0x14e)) + -parseInt(_0x55e8fd(0x14f)) * parseInt(_0x55e8fd(0x150));
            if (_0x3a94f8 === _0x1fca8d)
                break;
            else
                _0x5d49bf['push'](_0x5d49bf['shift']());
        } catch (_0x721609) {
            _0x5d49bf['push'](_0x5d49bf['shift']());
        }
    }
}(_0x13f5, 0x10602e + -0x13d66b + -0xc * -0x12373));
const common = require(_0x33041f(0x151)), fixtures = require('../common/fixtures');
if (!common[_0x33041f(0x152)])
    common[_0x33041f(0x153)](_0x33041f(0x154));
process[_0x33041f(0x155)][_0x33041f(0x156)] = '0', common[_0x33041f(0x157)](_0x33041f(0x158), _0x33041f(0x159) + 'makes\x20TLS\x20connections\x20and\x20HTTPS\x20requests\x20insecure\x20by\x20disabling\x20' + _0x33041f(0x15a));
function _0x4b47(_0x2f34a0, _0x56ce59) {
    return _0x4b47 = function (_0x823ed8, _0x4f6e8f) {
        _0x823ed8 = _0x823ed8 - (-0xda0 + 0x2da * 0x4 + 0x37e);
        let _0x1d7e92 = _0x13f5[_0x823ed8];
        return _0x1d7e92;
    }, _0x4b47(_0x2f34a0, _0x56ce59);
}
const assert = require(_0x33041f(0x15b)), https = require(_0x33041f(0x15c));
function read(_0x348dd4) {
    const _0x254ebe = _0x33041f;
    return fixtures[_0x254ebe(0x15d)](_0x348dd4);
}
const key1 = read(_0x33041f(0x15e)), cert1 = read(_0x33041f(0x15f)), key2 = read(_0x33041f(0x160)), cert2 = read(_0x33041f(0x161)), key3 = read(_0x33041f(0x162)), cert3 = read(_0x33041f(0x163)), ca1 = read(_0x33041f(0x164)), ca2 = read(_0x33041f(0x165)), agent0 = new https[(_0x33041f(0x166))](), agent1 = new https[(_0x33041f(0x166))]({ 'ca': [ca1] }), agent2 = new https[(_0x33041f(0x166))]({ 'ca': [ca2] }), agent3 = new https['Agent']({
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
let listenWait = -0x1b * -0xff + -0xf * 0x293 + -0xf * -0xc8;
server1[_0x33041f(0x167)](0x68 + 0x32b * -0x8 + 0x18f0, listening()), server2[_0x33041f(0x167)](-0x2655 * 0x1 + 0x3de * -0x1 + -0x2a33 * -0x1, listening()), server3['listen'](0xf9 * -0x25 + -0x1587 + 0x2 * 0x1cc2, listening());
const responseErrors = {};
let pending = 0x79f + 0x979 + -0x1118;
function server(_0x40a48a) {
    const _0x4cbbd4 = _0x33041f, _0x49aff3 = https['createServer'](_0x40a48a, handler);
    return _0x49aff3[_0x4cbbd4(0x168)] = [], _0x49aff3[_0x4cbbd4(0x169)] = -0x217d * -0x1 + 0x1 * -0x152b + -0xc52, _0x49aff3;
}
function handler(_0x595ccb, _0xbb1ea2) {
    const _0x57ec08 = _0x33041f, _0x50cd59 = { 'gVcKP': _0x57ec08(0x16a) };
    this[_0x57ec08(0x168)][_0x57ec08(0x16b)](_0x595ccb['url']), _0xbb1ea2[_0x57ec08(0x16c)] = -0x1a10 + -0x1fb + 0x9d * 0x2f, _0xbb1ea2[_0x57ec08(0x16d)](_0x50cd59['gVcKP'], _0x57ec08(0x16e)), _0xbb1ea2[_0x57ec08(0x16f)](_0x57ec08(0x170));
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
        listenWait--, _0x4fcdf9[_0x5307b7(0x171)](listenWait, 0xbdd * 0x1 + -0x1885 + 0xca8) && _0x4fcdf9[_0x5307b7(0x172)](allListening);
    };
}
function makeReq(_0x36119a, _0x29a4ef, _0x2a3bd7, _0x474e21, _0x4cdd57) {
    const _0x47e6fe = _0x33041f, _0x19f3db = {
            'vbRhj': _0x47e6fe(0x173),
            'ovHxv': function (_0x4fabae, _0x48f65b) {
                return _0x4fabae === _0x48f65b;
            },
            'THkek': _0x47e6fe(0x174)
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
        if (!Array[_0x47e6fe(0x175)](_0x4cdd57))
            _0x4cdd57 = [_0x4cdd57];
        if (_0x4cdd57[_0x47e6fe(0x176)](ca1) && _0x4cdd57['includes'](ca2))
            _0x1415d1['agent'] = agent3;
        else {
            if (_0x4cdd57[_0x47e6fe(0x176)](ca1))
                _0x1415d1[_0x47e6fe(0x177)] = agent1;
            else
                _0x4cdd57['includes'](ca2) ? _0x1415d1[_0x47e6fe(0x177)] = agent2 : _0x1415d1[_0x47e6fe(0x177)] = agent0;
        }
    }
    _0x474e21 && (_0x1415d1['headers'] = { 'host': _0x474e21 });
    const _0x4019b7 = https[_0x47e6fe(0x178)](_0x1415d1), _0x243b9c = _0x29a4ef === server1[_0x47e6fe(0x179)]()[_0x47e6fe(0x17a)] ? server1 : _0x19f3db['ovHxv'](_0x29a4ef, server2[_0x47e6fe(0x179)]()[_0x47e6fe(0x17a)]) ? server2 : _0x19f3db['ovHxv'](_0x29a4ef, server3[_0x47e6fe(0x179)]()['port']) ? server3 : null;
    if (!_0x243b9c)
        throw new Error(_0x47e6fe(0x17b) + _0x29a4ef);
    _0x243b9c[_0x47e6fe(0x169)]++, _0x4019b7['on'](_0x19f3db[_0x47e6fe(0x17c)], common[_0x47e6fe(0x17d)](_0x4580dd => {
        const _0x31cc89 = _0x47e6fe, _0x40e233 = _0x19f3db['vbRhj'][_0x31cc89(0x17e)]('|');
        let _0xfd3701 = 0x1e3c + -0x1836 + -0x3 * 0x202;
        while (!![]) {
            switch (_0x40e233[_0xfd3701++]) {
            case '0':
                pending === 0x1d68 + 0x2222 + -0x3f8a && (server1[_0x31cc89(0x17f)](), server2[_0x31cc89(0x17f)](), server3[_0x31cc89(0x17f)]());
                continue;
            case '1':
                _0x4580dd[_0x31cc89(0x180)]();
                continue;
            case '2':
                pending--;
                continue;
            case '3':
                responseErrors[_0x36119a] = _0x4580dd[_0x31cc89(0x181)][_0x31cc89(0x182)];
                continue;
            case '4':
                assert[_0x31cc89(0x183)](_0x4580dd[_0x31cc89(0x181)]['authorizationError'], _0x2a3bd7);
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
            'wFtiO': _0x1c04de(0x184),
            'VCkbo': 'ERR_TLS_CERT_ALTNAME_INVALID',
            'ceXHT': function (_0x250f63, _0x16474a, _0x268c18, _0x2a6d86, _0x10a7b6, _0xd872d3) {
                return _0x250f63(_0x16474a, _0x268c18, _0x2a6d86, _0x10a7b6, _0xd872d3);
            },
            'Aspbr': '/inv1-ca1ca2',
            'GQZkz': function (_0x33dad5, _0x34f2e1, _0x2338a9, _0x121d08, _0x1233e3, _0x44f4bf) {
                return _0x33dad5(_0x34f2e1, _0x2338a9, _0x121d08, _0x1233e3, _0x44f4bf);
            },
            'iAXjg': '/val1-ca1',
            'cgswr': _0x1c04de(0x185),
            'ZSYXl': '/val1-ca1ca2',
            'WOvBY': '/inv1-ca2',
            'bJfJv': '/inv2',
            'tSnVm': _0x1c04de(0x186),
            'mxJNy': function (_0xf329fd, _0x5dd85f, _0x4938c5, _0x3a944d, _0xb75ba3, _0x303a95) {
                return _0xf329fd(_0x5dd85f, _0x4938c5, _0x3a944d, _0xb75ba3, _0x303a95);
            },
            'zYUZt': _0x1c04de(0x187),
            'uUvSV': _0x1c04de(0x188),
            'wzPxM': _0x1c04de(0x189),
            'WPstZ': function (_0x4f3c58, _0x404a81, _0xfe44da, _0x374c08) {
                return _0x4f3c58(_0x404a81, _0xfe44da, _0x374c08);
            },
            'qZoDD': _0x1c04de(0x18a),
            'qWpYF': _0x1c04de(0x18b),
            'cziJB': function (_0x3c460b, _0x466fe5, _0x20a477, _0x4954a8, _0x39bc71, _0x6ebcc6) {
                return _0x3c460b(_0x466fe5, _0x20a477, _0x4954a8, _0x39bc71, _0x6ebcc6);
            },
            'GRtaA': _0x1c04de(0x18c),
            'liCVA': '/inv3-ca1ca2',
            'ZZeIM': function (_0x45be51, _0xa739b9, _0x28e830, _0x2eebef, _0x5d9a6a, _0x535501) {
                return _0x45be51(_0xa739b9, _0x28e830, _0x2eebef, _0x5d9a6a, _0x535501);
            },
            'NKaxP': _0x1c04de(0x18d),
            'OrGrT': _0x1c04de(0x18e),
            'IKoUS': _0x1c04de(0x18f),
            'dXPEm': _0x1c04de(0x190)
        }, _0x4dba26 = server1[_0x1c04de(0x179)]()['port'], _0x26c2d7 = server2[_0x1c04de(0x179)]()['port'], _0x5d3c8a = server3[_0x1c04de(0x179)]()['port'];
    makeReq(_0x4b45fc[_0x1c04de(0x191)], _0x4dba26, _0x1c04de(0x18b)), _0x4b45fc['ZZLlx'](makeReq, _0x4b45fc[_0x1c04de(0x192)], _0x4dba26, _0x4b45fc[_0x1c04de(0x193)], null, ca1), _0x4b45fc['ceXHT'](makeReq, _0x4b45fc[_0x1c04de(0x194)], _0x4dba26, _0x4b45fc['VCkbo'], null, [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(0x195)](makeReq, _0x4b45fc[_0x1c04de(0x196)], _0x4dba26, null, _0x4b45fc[_0x1c04de(0x197)], ca1), _0x4b45fc['GQZkz'](makeReq, _0x4b45fc['ZSYXl'], _0x4dba26, null, _0x4b45fc[_0x1c04de(0x197)], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(0x195)](makeReq, _0x4b45fc[_0x1c04de(0x198)], _0x4dba26, _0x1c04de(0x18b), 'agent1', ca2), makeReq(_0x4b45fc[_0x1c04de(0x199)], _0x26c2d7, _0x4b45fc['tSnVm']), _0x4b45fc[_0x1c04de(0x19a)](makeReq, _0x4b45fc[_0x1c04de(0x19b)], _0x26c2d7, _0x4b45fc[_0x1c04de(0x19c)], _0x4b45fc[_0x1c04de(0x19d)], ca1), _0x4b45fc[_0x1c04de(0x19a)](makeReq, _0x4b45fc[_0x1c04de(0x19e)], _0x26c2d7, _0x1c04de(0x186), _0x4b45fc[_0x1c04de(0x19d)], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(0x19f)](makeReq, _0x4b45fc['qZoDD'], _0x5d3c8a, _0x4b45fc[_0x1c04de(0x1a0)]), _0x4b45fc[_0x1c04de(0x1a1)](makeReq, _0x4b45fc[_0x1c04de(0x1a2)], _0x5d3c8a, _0x4b45fc[_0x1c04de(0x193)], null, ca2), makeReq(_0x4b45fc['liCVA'], _0x5d3c8a, _0x4b45fc[_0x1c04de(0x193)], null, [
        ca1,
        ca2
    ]), _0x4b45fc['ZZeIM'](makeReq, _0x4b45fc['NKaxP'], _0x5d3c8a, null, _0x4b45fc[_0x1c04de(0x1a3)], ca2), _0x4b45fc[_0x1c04de(0x1a4)](makeReq, _0x4b45fc[_0x1c04de(0x1a5)], _0x5d3c8a, null, _0x4b45fc['OrGrT'], [
        ca1,
        ca2
    ]), _0x4b45fc[_0x1c04de(0x1a4)](makeReq, _0x4b45fc[_0x1c04de(0x1a6)], _0x5d3c8a, _0x1c04de(0x18b), _0x4b45fc[_0x1c04de(0x197)], ca1);
}
process['on'](_0x33041f(0x1a7), () => {
    const _0x117db7 = _0x33041f;
    assert[_0x117db7(0x183)](server1['requests'][_0x117db7(0x1a8)], server1[_0x117db7(0x169)]), assert[_0x117db7(0x183)](server2[_0x117db7(0x168)][_0x117db7(0x1a8)], server2[_0x117db7(0x169)]), assert[_0x117db7(0x183)](server3['requests'][_0x117db7(0x1a8)], server3[_0x117db7(0x169)]);
});
