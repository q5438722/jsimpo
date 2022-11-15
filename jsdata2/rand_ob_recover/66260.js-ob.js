module[_0x5b0987(225)] = {
    'read': read,
    'readSSHPrivate': readSSHPrivate,
    'write': write
};
var assert = require('assert-plus'), asn1 = require('asn1'), Buffer = require(_0x5b0987(226))[_0x5b0987(227)], algs = require(_0x5b0987(228)), utils = require('../utils'), crypto = require(_0x5b0987(229)), Key = require('../key'), PrivateKey = require(_0x5b0987(230)), pem = require('./pem'), rfc4253 = require(_0x5b0987(231)), SSHBuffer = require(_0x5b0987(232)), errors = require('../errors'), bcrypt;
function read(_0x1f1023, _0x1beeb6) {
    var _0x17f235 = _0x5b0987;
    return pem[_0x17f235(233)](_0x1f1023, _0x1beeb6);
}
var MAGIC = _0x5b0987(234);
function readSSHPrivate(_0x297b27, _0x2b7820, _0x57ece7) {
    var _0xc518a4 = _0x5b0987, _0x4a927c = {
            'DLIgO': function (_0x5cbfce, _0x495187) {
                return _0x5cbfce !== _0x495187;
            },
            'xdDDc': _0xc518a4(235),
            'FfVzX': function (_0x2243a7, _0x8b1612) {
                return _0x2243a7 + _0x8b1612;
            },
            'ueLtm': _0xc518a4(236),
            'DRNbb': _0xc518a4(237),
            'mwkCt': _0xc518a4(238),
            'DIrWZ': function (_0x2c1a26, _0x258fbf) {
                return _0x2c1a26 !== _0x258fbf;
            },
            'SzgAW': _0xc518a4(239),
            'vrnDz': _0xc518a4(240),
            'HPkdT': function (_0x4deabf, _0x461904) {
                return _0x4deabf === _0x461904;
            },
            'fjefM': _0xc518a4(241),
            'RYVEe': 'excess bytes left after key',
            'Ydvcl': _0xc518a4(242),
            'IQYbA': function (_0x4f877b, _0x15076b) {
                return _0x4f877b !== _0x15076b;
            },
            'rYGNh': _0xc518a4(243),
            'SBOGH': function (_0x83fda1, _0x2f39a2) {
                return _0x83fda1 === _0x2f39a2;
            },
            'LLvaD': 'bcrypt-pbkdf',
            'UryNZ': function (_0x1c6188, _0x5cdd1e) {
                return _0x1c6188 === _0x5cdd1e;
            },
            'VurdC': _0xc518a4(244),
            'GAeEI': _0xc518a4(245),
            'YHBIj': function (_0x233a95, _0x2bf76e) {
                return _0x233a95 + _0x2bf76e;
            },
            'znqSm': _0xc518a4(246),
            'GJwjU': _0xc518a4(247),
            'ZlkEg': _0xc518a4(248),
            'WGNbv': function (_0x1ad517, _0x57ee06) {
                return _0x1ad517 + _0x57ee06;
            },
            'AFgfi': _0xc518a4(249),
            'LXOrX': function (_0x58bae1, _0x2739f7) {
                return _0x58bae1 !== _0x2739f7;
            }
        };
    _0x2b7820 = new SSHBuffer({ 'buffer': _0x2b7820 });
    var _0x2eeb64 = _0x2b7820[_0xc518a4(250)]();
    assert['strictEqual'](_0x2eeb64, MAGIC, _0x4a927c[_0xc518a4(251)]);
    var _0x21f168 = _0x2b7820[_0xc518a4(252)](), _0x20b734 = _0x2b7820['readString'](), _0x32f7e0 = _0x2b7820[_0xc518a4(253)](), _0x249db9 = _0x2b7820[_0xc518a4(254)]();
    if (_0x4a927c[_0xc518a4(255)](_0x249db9, -29 * 2 + 101 * 83 + -8324))
        throw new Error(_0x4a927c[_0xc518a4(256)](_0x4a927c[_0xc518a4(257)], _0x4a927c[_0xc518a4(258)]));
    var _0x5d1a49 = _0x2b7820[_0xc518a4(253)]();
    if (_0x4a927c[_0xc518a4(259)](_0x297b27, _0x4a927c[_0xc518a4(260)]))
        return assert['ok'](_0x2b7820[_0xc518a4(261)](), _0x4a927c[_0xc518a4(262)]), rfc4253[_0xc518a4(233)](_0x5d1a49);
    var _0x4c252f = _0x2b7820[_0xc518a4(253)]();
    assert['ok'](_0x2b7820[_0xc518a4(261)](), _0x4a927c[_0xc518a4(262)]);
    var _0x5fadae = new SSHBuffer({ 'buffer': _0x32f7e0 });
    switch (_0x20b734) {
    case _0x4a927c[_0xc518a4(263)]:
        if (_0x4a927c[_0xc518a4(264)](_0x21f168, _0x4a927c[_0xc518a4(263)]))
            throw new Error(_0x4a927c[_0xc518a4(256)](_0xc518a4(265), _0xc518a4(266)));
        break;
    case _0x4a927c['rYGNh']:
        var _0x48d0ce = _0x5fadae[_0xc518a4(253)](), _0xbea7a0 = _0x5fadae[_0xc518a4(254)](), _0xd7f1c = utils[_0xc518a4(267)](_0x21f168);
        _0x4a927c[_0xc518a4(268)](bcrypt, undefined) && (bcrypt = require(_0x4a927c[_0xc518a4(269)]));
        _0x4a927c[_0xc518a4(270)](typeof _0x57ece7[_0xc518a4(271)], _0x4a927c[_0xc518a4(272)]) && (_0x57ece7[_0xc518a4(271)] = Buffer[_0xc518a4(273)](_0x57ece7[_0xc518a4(271)], _0x4a927c[_0xc518a4(274)]));
        if (!Buffer[_0xc518a4(275)](_0x57ece7['passphrase']))
            throw new errors['KeyEncryptedError'](_0x57ece7['filename'], _0xc518a4(276));
        var _0x5e54ac = new Uint8Array(_0x57ece7['passphrase']), _0x5c65fd = new Uint8Array(_0x48d0ce), _0x2ce682 = new Uint8Array(_0x4a927c['FfVzX'](_0xd7f1c['keySize'], _0xd7f1c['blockSize'])), _0x2366d4 = bcrypt[_0xc518a4(277)](_0x5e54ac, _0x5e54ac[_0xc518a4(278)], _0x5c65fd, _0x5c65fd['length'], _0x2ce682, _0x2ce682[_0xc518a4(278)], _0xbea7a0);
        if (_0x4a927c['IQYbA'](_0x2366d4, -8267 + 62 * -56 + 11739))
            throw new Error(_0x4a927c[_0xc518a4(279)](_0x4a927c[_0xc518a4(280)], _0x4a927c[_0xc518a4(281)]));
        _0x2ce682 = Buffer['from'](_0x2ce682);
        var _0x3fd4d0 = _0x2ce682[_0xc518a4(282)](-1455 + 1 * 7075 + -5620, _0xd7f1c['keySize']), _0x180bcb = _0x2ce682[_0xc518a4(282)](_0xd7f1c['keySize'], _0x4a927c[_0xc518a4(279)](_0xd7f1c['keySize'], _0xd7f1c[_0xc518a4(283)])), _0x25b441 = crypto[_0xc518a4(284)](_0xd7f1c['opensslName'], _0x3fd4d0, _0x180bcb);
        _0x25b441[_0xc518a4(285)](![]);
        var _0x2ae1ef, _0x3196b0 = [];
        _0x25b441[_0xc518a4(286)](_0x4a927c[_0xc518a4(287)], function (_0x18b66e) {
            var _0x162a2d = _0xc518a4;
            if (_0x4a927c['DLIgO'](_0x18b66e[_0x162a2d(288)]()[_0x162a2d(289)](_0x4a927c[_0x162a2d(290)]), -(9584 + 8245 + -17828)))
                throw new Error(_0x4a927c['FfVzX'](_0x4a927c['ueLtm'], _0x4a927c[_0x162a2d(291)]));
            throw _0x18b66e;
        }), _0x25b441[_0xc518a4(292)](_0x4c252f), _0x25b441[_0xc518a4(293)]();
        while (_0x4a927c[_0xc518a4(264)](_0x2ae1ef = _0x25b441[_0xc518a4(233)](), null))
            _0x3196b0[_0xc518a4(294)](_0x2ae1ef);
        _0x4c252f = Buffer[_0xc518a4(295)](_0x3196b0);
        break;
    default:
        throw new Error(_0x4a927c[_0xc518a4(279)](_0x4a927c[_0xc518a4(296)](_0x4a927c[_0xc518a4(297)], _0x20b734), '"'));
    }
    _0x2b7820 = new SSHBuffer({ 'buffer': _0x4c252f });
    var _0x328460 = _0x2b7820[_0xc518a4(254)](), _0x40f12c = _0x2b7820[_0xc518a4(254)]();
    if (_0x4a927c[_0xc518a4(298)](_0x328460, _0x40f12c))
        throw new Error(_0xc518a4(299) + _0xc518a4(300));
    var _0x39e0c5 = {}, _0x306ed5 = rfc4253[_0xc518a4(301)](_0x39e0c5, _0xc518a4(302), _0x2b7820[_0xc518a4(303)]());
    _0x2b7820[_0xc518a4(304)](_0x39e0c5[_0xc518a4(305)]);
    var _0xb0d03c = _0x2b7820['readString']();
    return _0x306ed5[_0xc518a4(306)] = _0xb0d03c, _0x306ed5;
}
function _0x2c6f(_0x264e56, _0xb8db19) {
    return _0x2c6f = function (_0x55b93f, _0x5cf369) {
        _0x55b93f = _0x55b93f - (9905 + 5991 + 7841 * -2);
        var _0x1e26c8 = _0x17cd[_0x55b93f];
        return _0x1e26c8;
    }, _0x2c6f(_0x264e56, _0xb8db19);
}
function write(_0x473823, _0x39d403) {
    var _0x4a3cd1 = _0x5b0987, _0x51b6e1 = {
            'BKVrj': _0x4a3cd1(242),
            'uqckB': function (_0xa6d971, _0x333e4d) {
                return _0xa6d971 !== _0x333e4d;
            },
            'IGAMr': function (_0x47b855, _0x3cc983) {
                return _0x47b855 === _0x3cc983;
            },
            'lQCUa': _0x4a3cd1(245),
            'NTygo': _0x4a3cd1(307),
            'HMXmz': function (_0x190e8a, _0x13b69a) {
                return _0x190e8a === _0x13b69a;
            },
            'nhERm': _0x4a3cd1(308),
            'EcqXc': 'bcrypt',
            'ItATF': _0x4a3cd1(309),
            'PlNFH': function (_0x3fe166, _0x2f6185) {
                return _0x3fe166 % _0x2f6185;
            },
            'sKOij': function (_0x3d52ae, _0x576a60) {
                return _0x3d52ae === _0x576a60;
            },
            'FyEhr': function (_0x4bb31a, _0x3e814e) {
                return _0x4bb31a(_0x3e814e);
            },
            'KGBmN': _0x4a3cd1(310),
            'ZPEDV': function (_0xb8bfd8, _0x52249a) {
                return _0xb8bfd8 + _0x52249a;
            },
            'qXVIc': function (_0x27e395, _0x67899b) {
                return _0x27e395 + _0x67899b;
            },
            'ldrYD': _0x4a3cd1(247),
            'otnLZ': function (_0x419ab6, _0x36a00a) {
                return _0x419ab6 + _0x36a00a;
            },
            'NSyBC': function (_0x2b6dc6, _0x238391) {
                return _0x2b6dc6 !== _0x238391;
            },
            'rSEdU': 'Unsupported kdf ',
            'QHNoc': _0x4a3cd1(311),
            'SZJAy': _0x4a3cd1(312),
            'eJzBX': function (_0x46ba49, _0x348de9) {
                return _0x46ba49 + _0x348de9;
            },
            'XgVKQ': function (_0x393780, _0x4f08b4) {
                return _0x393780 + _0x4f08b4;
            },
            'eGYSU': function (_0x583b9a, _0x3e8316) {
                return _0x583b9a + _0x3e8316;
            },
            'qxvVW': function (_0x583d13, _0x483f9d) {
                return _0x583d13 / _0x483f9d;
            },
            'VTtrj': function (_0x179c0d, _0x1673be) {
                return _0x179c0d * _0x1673be;
            },
            'OzepD': function (_0x37d487, _0x490876) {
                return _0x37d487 + _0x490876;
            },
            'tKWEH': _0x4a3cd1(313),
            'tAsMR': _0x4a3cd1(314),
            'jreYc': function (_0x35b945, _0x533dbf) {
                return _0x35b945 < _0x533dbf;
            },
            'qkBUH': function (_0x340602, _0x3acb48) {
                return _0x340602 + _0x3acb48;
            },
            'FQZkR': function (_0x4e8c12, _0x1fac47) {
                return _0x4e8c12 + _0x1fac47;
            },
            'ivoNQ': _0x4a3cd1(315)
        }, _0x86ea8d;
    if (PrivateKey[_0x4a3cd1(316)](_0x473823))
        _0x86ea8d = _0x473823[_0x4a3cd1(317)]();
    else
        _0x86ea8d = _0x473823;
    var _0xe754d6 = _0x51b6e1[_0x4a3cd1(318)], _0x2253c2 = _0x51b6e1[_0x4a3cd1(318)], _0x34dbed = Buffer[_0x4a3cd1(319)](7762 + 2 * 2065 + 5946 * -2), _0x3735ee = { 'blockSize': 8 }, _0x8a4669;
    if (_0x51b6e1['uqckB'](_0x39d403, undefined)) {
        _0x8a4669 = _0x39d403[_0x4a3cd1(271)];
        if (_0x51b6e1['IGAMr'](typeof _0x8a4669, _0x4a3cd1(244)))
            _0x8a4669 = Buffer['from'](_0x8a4669, _0x51b6e1[_0x4a3cd1(320)]);
        if (_0x8a4669 !== undefined) {
            assert[_0x4a3cd1(321)](_0x8a4669, _0x51b6e1['NTygo']), assert[_0x4a3cd1(322)](_0x39d403[_0x4a3cd1(323)], 'options.cipher'), _0xe754d6 = _0x39d403[_0x4a3cd1(323)];
            if (_0x51b6e1[_0x4a3cd1(324)](_0xe754d6, undefined))
                _0xe754d6 = _0x51b6e1[_0x4a3cd1(325)];
            _0x3735ee = utils[_0x4a3cd1(267)](_0xe754d6), _0x2253c2 = _0x51b6e1[_0x4a3cd1(326)];
        }
    }
    var _0x4cd157;
    if (PrivateKey[_0x4a3cd1(316)](_0x473823)) {
        _0x4cd157 = new SSHBuffer({});
        var _0x49862b = crypto['randomBytes'](-51 * 6 + -1466 * -2 + -2622)['readUInt32BE'](1031 * -2 + -149 + -3 * -737);
        _0x4cd157[_0x4a3cd1(327)](_0x49862b), _0x4cd157[_0x4a3cd1(327)](_0x49862b), _0x4cd157[_0x4a3cd1(292)](_0x473823['toBuffer'](_0x51b6e1[_0x4a3cd1(328)])), _0x4cd157['writeString'](_0x473823[_0x4a3cd1(306)] || '');
        var _0x183bfc = 1293 * -5 + 9 * -639 + 12217;
        while (_0x51b6e1['uqckB'](_0x51b6e1[_0x4a3cd1(329)](_0x4cd157[_0x4a3cd1(330)], _0x3735ee[_0x4a3cd1(283)]), -2767 * -3 + -449 * -19 + -16832))
            _0x4cd157[_0x4a3cd1(331)](_0x183bfc++);
        _0x4cd157 = _0x4cd157[_0x4a3cd1(332)]();
    }
    switch (_0x2253c2) {
    case _0x51b6e1[_0x4a3cd1(318)]:
        break;
    case _0x51b6e1[_0x4a3cd1(326)]:
        var _0x175e82 = crypto['randomBytes'](713 + 95 * -61 + 5098), _0x1d9c5a = 8792 + -1684 + -7092, _0x186227 = new SSHBuffer({});
        _0x186227['writeBuffer'](_0x175e82), _0x186227['writeInt'](_0x1d9c5a), _0x34dbed = _0x186227['toBuffer']();
        _0x51b6e1[_0x4a3cd1(333)](bcrypt, undefined) && (bcrypt = _0x51b6e1['FyEhr'](require, _0x51b6e1[_0x4a3cd1(334)]));
        var _0x1d7c50 = new Uint8Array(_0x8a4669), _0x3287a3 = new Uint8Array(_0x175e82), _0x348c22 = new Uint8Array(_0x51b6e1[_0x4a3cd1(335)](_0x3735ee[_0x4a3cd1(336)], _0x3735ee[_0x4a3cd1(283)])), _0x2d23db = bcrypt[_0x4a3cd1(277)](_0x1d7c50, _0x1d7c50['length'], _0x3287a3, _0x3287a3[_0x4a3cd1(278)], _0x348c22, _0x348c22[_0x4a3cd1(278)], _0x1d9c5a);
        if (_0x51b6e1['uqckB'](_0x2d23db, -74 * -37 + 2 * 4597 + -11932))
            throw new Error(_0x51b6e1[_0x4a3cd1(337)](_0x4a3cd1(246), _0x51b6e1[_0x4a3cd1(338)]));
        _0x348c22 = Buffer[_0x4a3cd1(273)](_0x348c22);
        var _0x2dae36 = _0x348c22[_0x4a3cd1(282)](-845 * -9 + -7108 + -497, _0x3735ee[_0x4a3cd1(336)]), _0x5a42b8 = _0x348c22[_0x4a3cd1(282)](_0x3735ee['keySize'], _0x51b6e1[_0x4a3cd1(339)](_0x3735ee[_0x4a3cd1(336)], _0x3735ee[_0x4a3cd1(283)])), _0x3a7001 = crypto[_0x4a3cd1(340)](_0x3735ee[_0x4a3cd1(341)], _0x2dae36, _0x5a42b8);
        _0x3a7001['setAutoPadding'](![]);
        var _0x40a206, _0x56848b = [];
        _0x3a7001[_0x4a3cd1(286)](_0x4a3cd1(248), function (_0x32e12e) {
            throw _0x32e12e;
        }), _0x3a7001[_0x4a3cd1(292)](_0x4cd157), _0x3a7001['end']();
        while (_0x51b6e1[_0x4a3cd1(342)](_0x40a206 = _0x3a7001[_0x4a3cd1(233)](), null))
            _0x56848b[_0x4a3cd1(294)](_0x40a206);
        _0x4cd157 = Buffer[_0x4a3cd1(295)](_0x56848b);
        break;
    default:
        throw new Error(_0x51b6e1[_0x4a3cd1(339)](_0x51b6e1[_0x4a3cd1(343)], _0x2253c2));
    }
    var _0x319b03 = new SSHBuffer({});
    _0x319b03[_0x4a3cd1(344)](MAGIC), _0x319b03[_0x4a3cd1(345)](_0xe754d6), _0x319b03[_0x4a3cd1(345)](_0x2253c2), _0x319b03[_0x4a3cd1(346)](_0x34dbed), _0x319b03[_0x4a3cd1(327)](-13 * -679 + -7409 + -13 * 109), _0x319b03['writeBuffer'](_0x86ea8d[_0x4a3cd1(332)](_0x51b6e1[_0x4a3cd1(328)]));
    if (_0x4cd157)
        _0x319b03[_0x4a3cd1(346)](_0x4cd157);
    _0x319b03 = _0x319b03[_0x4a3cd1(332)]();
    var _0x373c76;
    if (PrivateKey[_0x4a3cd1(316)](_0x473823))
        _0x373c76 = _0x51b6e1[_0x4a3cd1(347)];
    else
        _0x373c76 = 'OPENSSH PUBLIC KEY';
    var _0x564019 = _0x319b03[_0x4a3cd1(288)](_0x51b6e1[_0x4a3cd1(348)]), _0x2b2b1b = _0x51b6e1[_0x4a3cd1(349)](_0x51b6e1[_0x4a3cd1(350)](_0x51b6e1['eGYSU'](_0x564019[_0x4a3cd1(278)], _0x51b6e1[_0x4a3cd1(351)](_0x564019['length'], 445 * -4 + 3052 + -1202)) + (1 * -258 + 3 * 3122 + -3030 * 3), -1007 * 1 + -29 * 323 + 1039 * 10) + _0x51b6e1[_0x4a3cd1(352)](_0x373c76[_0x4a3cd1(278)], -7641 + -219 * 1 + 7862), 7765 * 1 + -758 * -7 + 353 * -37);
    _0x319b03 = Buffer['alloc'](_0x2b2b1b);
    var _0x5e69c1 = -1377 * 7 + -9896 + 19535;
    _0x5e69c1 += _0x319b03[_0x4a3cd1(292)](_0x51b6e1[_0x4a3cd1(353)](_0x51b6e1[_0x4a3cd1(353)](_0x51b6e1[_0x4a3cd1(354)], _0x373c76), _0x51b6e1['tAsMR']), _0x5e69c1);
    for (var _0x43cb3a = -2979 + 181 + -1399 * -2; _0x51b6e1[_0x4a3cd1(355)](_0x43cb3a, _0x564019[_0x4a3cd1(278)]);) {
        var _0x51d53f = '0|2|4|1|3'[_0x4a3cd1(356)]('|'), _0x15e1f5 = -7795 + -4145 * 1 + -1 * -11940;
        while (!![]) {
            switch (_0x51d53f[_0x15e1f5++]) {
            case '0':
                var _0x21630d = _0x51b6e1[_0x4a3cd1(353)](_0x43cb3a, 4070 + -8717 * -1 + -1 * 12717);
                continue;
            case '1':
                _0x319b03[_0x5e69c1++] = 4 * 341 + -540 * 15 + 6746;
                continue;
            case '2':
                if (_0x21630d > _0x564019[_0x4a3cd1(278)])
                    _0x21630d = _0x564019[_0x4a3cd1(278)];
                continue;
            case '3':
                _0x43cb3a = _0x21630d;
                continue;
            case '4':
                _0x5e69c1 += _0x319b03['write'](_0x564019[_0x4a3cd1(282)](_0x43cb3a, _0x21630d), _0x5e69c1);
                continue;
            }
            break;
        }
    }
    return _0x5e69c1 += _0x319b03[_0x4a3cd1(292)](_0x51b6e1[_0x4a3cd1(357)](_0x51b6e1[_0x4a3cd1(358)](_0x51b6e1[_0x4a3cd1(359)], _0x373c76), _0x4a3cd1(314)), _0x5e69c1), _0x319b03[_0x4a3cd1(282)](-8 * 891 + 3898 + 3230, _0x5e69c1);
}