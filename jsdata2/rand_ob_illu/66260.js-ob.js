const _0x17cd = ['OpenSSH-format key uses unknown KDF "', 'readCString', 'mwkCt', 'readString', 'readBuffer', 'readInt', 'DIrWZ', 'FfVzX', 'SzgAW', 'vrnDz', 'HPkdT', 'fjefM', 'atEnd', 'RYVEe', 'Ydvcl', 'IQYbA', 'OpenSSH-format key uses KDF "none" ', 'but specifies a cipher other than "none"', 'opensshCipherInfo', 'SBOGH', 'LLvaD', 'UryNZ', 'passphrase', 'VurdC', 'from', 'GAeEI', 'isBuffer', 'OpenSSH', 'pbkdf', 'length', 'YHBIj', 'znqSm', 'GJwjU', 'slice', 'blockSize', 'createDecipheriv', 'setAutoPadding', 'once', 'ZlkEg', 'toString', 'indexOf', 'xdDDc', 'DRNbb', 'write', 'end', 'push', 'concat', 'WGNbv', 'AFgfi', 'LXOrX', 'Incorrect passphrase supplied, could not ', 'decrypt key', 'readInternal', 'private', 'remainder', 'skip', 'consumed', 'comment', 'options.passphrase', 'aes128-ctr', 'rfc4253', 'bcrypt-pbkdf', 'OPENSSH PRIVATE KEY', 'base64', '-----BEGIN ', '-----\n', '-----END ', 'isPrivateKey', 'toPublic', 'BKVrj', 'alloc', 'lQCUa', 'buffer', 'optionalString', 'cipher', 'HMXmz', 'nhERm', 'EcqXc', 'writeInt', 'ItATF', 'PlNFH', '_offset', 'writeChar', 'toBuffer', 'sKOij', 'KGBmN', 'ZPEDV', 'keySize', 'qXVIc', 'ldrYD', 'otnLZ', 'createCipheriv', 'opensslName', 'NSyBC', 'rSEdU', 'writeCString', 'writeString', 'writeBuffer', 'QHNoc', 'SZJAy', 'eJzBX', 'XgVKQ', 'qxvVW', 'VTtrj', 'OzepD', 'tKWEH', 'jreYc', 'split', 'qkBUH', 'FQZkR', 'ivoNQ', '268580ADtejO', '166396MYLmKk', '20399MFDstw', '2bocpcu', '42440dErMWO', '7xSEBIN', '298467gjAQLc', '22249fQFpjg', '2kNzuFM', '402376YfAAUK', '1gzzVeL', 'exports', 'safer-buffer', 'Buffer', '../algs', 'crypto', '../private-key', './rfc4253', '../ssh-buffer', 'read', 'openssh-key-v1', 'bad decrypt', 'Incorrect passphrase ', 'supplied, could not decrypt key', 'bad magic string', 'OpenSSH-format key file contains ', 'multiple keys: this is unsupported.', 'public', 'none', 'bcrypt', 'string', 'utf-8', 'bcrypt_pbkdf function returned ', 'failure, parameters invalid', 'error'];
const _0x5b0987 = _0x2c6f;

(function (_0x5618e8, _0x21c2b8) {
    const _0x28135f = _0x2c6f;

    while (true) {
        try {
            const _0xddca68 = -parseInt(_0x28135f(0xd6)) + parseInt(_0x28135f(0xd7)) + parseInt(_0x28135f(0xd8)) * parseInt(_0x28135f(0xd9)) + -parseInt(_0x28135f(0xda)) * -parseInt(_0x28135f(0xdb)) + parseInt(_0x28135f(0xdc)) + -parseInt(_0x28135f(0xdd)) * -parseInt(_0x28135f(0xde)) + parseInt(_0x28135f(0xdf)) * -parseInt(_0x28135f(0xe0));

            if (_0xddca68 === _0x21c2b8) break;else _0x5618e8.push(_0x5618e8.shift());
        } catch (_0x3f3e44) {
            _0x5618e8.push(_0x5618e8.shift());
        }
    }
})(_0x17cd, 176283), module[_0x5b0987(0xe1)] = {
    'read': read,
    'readSSHPrivate': readSSHPrivate,
    'write': write
};

const assert = require('assert-plus');

const asn1 = require('asn1');

const Buffer = require(_0x5b0987(0xe2))[_0x5b0987(0xe3)];

const algs = require(_0x5b0987(0xe4));

const utils = require('../utils');

const crypto = require(_0x5b0987(0xe5));

const Key = require('../key');

const PrivateKey = require(_0x5b0987(0xe6));

const pem = require('./pem');

const rfc4253 = require(_0x5b0987(0xe7));

const SSHBuffer = require(_0x5b0987(0xe8));

const errors = require('../errors');

var bcrypt;

function read(_0x1f1023, _0x1beeb6) {
    const _0x17f235 = _0x5b0987;

    return pem[_0x17f235(0xe9)](_0x1f1023, _0x1beeb6);
}

const MAGIC = _0x5b0987(0xea);

function readSSHPrivate(_0x297b27, _0x2b7820, _0x57ece7) {
    const _0xc518a4 = _0x5b0987;
    const _0x4a927c = {
        'DLIgO': function (_0x5cbfce, _0x495187) {
            return _0x5cbfce !== _0x495187;
        },
        'xdDDc': _0xc518a4(0xeb),
        'FfVzX': function (_0x2243a7, _0x8b1612) {
            return _0x2243a7 + _0x8b1612;
        },
        'ueLtm': _0xc518a4(0xec),
        'DRNbb': _0xc518a4(0xed),
        'mwkCt': _0xc518a4(0xee),
        'DIrWZ': function (_0x2c1a26, _0x258fbf) {
            return _0x2c1a26 !== _0x258fbf;
        },
        'SzgAW': _0xc518a4(0xef),
        'vrnDz': _0xc518a4(0xf0),
        'HPkdT': function (_0x4deabf, _0x461904) {
            return _0x4deabf === _0x461904;
        },
        'fjefM': _0xc518a4(0xf1),
        'RYVEe': 'excess bytes left after key',
        'Ydvcl': _0xc518a4(0xf2),
        'IQYbA': function (_0x4f877b, _0x15076b) {
            return _0x4f877b !== _0x15076b;
        },
        'rYGNh': _0xc518a4(0xf3),
        'SBOGH': function (_0x83fda1, _0x2f39a2) {
            return _0x83fda1 === _0x2f39a2;
        },
        'LLvaD': 'bcrypt-pbkdf',
        'UryNZ': function (_0x1c6188, _0x5cdd1e) {
            return _0x1c6188 === _0x5cdd1e;
        },
        'VurdC': _0xc518a4(0xf4),
        'GAeEI': _0xc518a4(0xf5),
        'YHBIj': function (_0x233a95, _0x2bf76e) {
            return _0x233a95 + _0x2bf76e;
        },
        'znqSm': _0xc518a4(0xf6),
        'GJwjU': _0xc518a4(0xf7),
        'ZlkEg': _0xc518a4(0xf8),
        'WGNbv': function (_0x1ad517, _0x57ee06) {
            return _0x1ad517 + _0x57ee06;
        },
        'AFgfi': _0xc518a4(0xf9),
        'LXOrX': function (_0x58bae1, _0x2739f7) {
            return _0x58bae1 !== _0x2739f7;
        }
    };

    _0x2b7820 = new SSHBuffer({ 'buffer': _0x2b7820 });

    const _0x2eeb64 = _0x2b7820[_0xc518a4(0xfa)]();

    assert.strictEqual(_0x2eeb64, MAGIC, _0x4a927c[_0xc518a4(0xfb)]);

    const _0x21f168 = _0x2b7820[_0xc518a4(0xfc)]();

    const _0x20b734 = _0x2b7820.readString();

    const _0x32f7e0 = _0x2b7820[_0xc518a4(0xfd)]();

    const _0x249db9 = _0x2b7820[_0xc518a4(0xfe)]();

    if (_0x4a927c[_0xc518a4(0xff)](_0x249db9, 1)) throw new Error(_0x4a927c[_0xc518a4(0x100)](_0x4a927c[_0xc518a4(0x101)], _0x4a927c[_0xc518a4(0x102)]));

    const _0x5d1a49 = _0x2b7820[_0xc518a4(0xfd)]();

    if (_0x4a927c[_0xc518a4(0x103)](_0x297b27, _0x4a927c[_0xc518a4(0x104)])) return assert.ok(_0x2b7820[_0xc518a4(0x105)](), _0x4a927c[_0xc518a4(0x106)]), rfc4253[_0xc518a4(0xe9)](_0x5d1a49);

    var _0x4c252f = _0x2b7820[_0xc518a4(0xfd)]();

    assert.ok(_0x2b7820[_0xc518a4(0x105)](), _0x4a927c[_0xc518a4(0x106)]);

    const _0x5fadae = new SSHBuffer({ 'buffer': _0x32f7e0 });

    switch (_0x20b734) {
        case _0x4a927c[_0xc518a4(0x107)]:
            if (_0x4a927c[_0xc518a4(0x108)](_0x21f168, _0x4a927c[_0xc518a4(0x107)])) throw new Error(_0x4a927c[_0xc518a4(0x100)](_0xc518a4(0x109), _0xc518a4(0x10a)));
            break;
        case _0x4a927c.rYGNh:
            const _0x48d0ce = _0x5fadae[_0xc518a4(0xfd)]();

            const _0xbea7a0 = _0x5fadae[_0xc518a4(0xfe)]();

            const _0xd7f1c = utils[_0xc518a4(0x10b)](_0x21f168);

            _0x4a927c[_0xc518a4(0x10c)](bcrypt, undefined) && (bcrypt = require(_0x4a927c[_0xc518a4(0x10d)]));
            _0x4a927c[_0xc518a4(0x10e)](typeof _0x57ece7[_0xc518a4(0x10f)], _0x4a927c[_0xc518a4(0x110)]) && (_0x57ece7[_0xc518a4(0x10f)] = Buffer[_0xc518a4(0x111)](_0x57ece7[_0xc518a4(0x10f)], _0x4a927c[_0xc518a4(0x112)]));
            if (!Buffer[_0xc518a4(0x113)](_0x57ece7.passphrase)) throw new errors.KeyEncryptedError(_0x57ece7.filename, _0xc518a4(0x114));

            const _0x5e54ac = new Uint8Array(_0x57ece7.passphrase);

            const _0x5c65fd = new Uint8Array(_0x48d0ce);

            var _0x2ce682 = new Uint8Array(_0x4a927c.FfVzX(_0xd7f1c.keySize, _0xd7f1c.blockSize));

            const _0x2366d4 = bcrypt[_0xc518a4(0x115)](_0x5e54ac, _0x5e54ac[_0xc518a4(0x116)], _0x5c65fd, _0x5c65fd.length, _0x2ce682, _0x2ce682[_0xc518a4(0x116)], _0xbea7a0);

            if (_0x4a927c.IQYbA(_0x2366d4, 0)) throw new Error(_0x4a927c[_0xc518a4(0x117)](_0x4a927c[_0xc518a4(0x118)], _0x4a927c[_0xc518a4(0x119)]));
            _0x2ce682 = Buffer.from(_0x2ce682);

            const _0x3fd4d0 = _0x2ce682[_0xc518a4(0x11a)](0, _0xd7f1c.keySize);

            const _0x180bcb = _0x2ce682[_0xc518a4(0x11a)](_0xd7f1c.keySize, _0x4a927c[_0xc518a4(0x117)](_0xd7f1c.keySize, _0xd7f1c[_0xc518a4(0x11b)]));

            const _0x25b441 = crypto[_0xc518a4(0x11c)](_0xd7f1c.opensslName, _0x3fd4d0, _0x180bcb);

            _0x25b441[_0xc518a4(0x11d)](false);

            var _0x2ae1ef;

            const _0x3196b0 = [];

            _0x25b441[_0xc518a4(0x11e)](_0x4a927c[_0xc518a4(0x11f)], function (_0x18b66e) {
                const _0x162a2d = _0xc518a4;

                if (_0x4a927c.DLIgO(_0x18b66e[_0x162a2d(0x120)]()[_0x162a2d(0x121)](_0x4a927c[_0x162a2d(0x122)]), -1)) throw new Error(_0x4a927c.FfVzX(_0x4a927c.ueLtm, _0x4a927c[_0x162a2d(0x123)]));
                throw _0x18b66e;
            }), _0x25b441[_0xc518a4(0x124)](_0x4c252f), _0x25b441[_0xc518a4(0x125)]();
            while (_0x4a927c[_0xc518a4(0x108)](_0x2ae1ef = _0x25b441[_0xc518a4(0xe9)](), null)) _0x3196b0[_0xc518a4(0x126)](_0x2ae1ef);
            _0x4c252f = Buffer[_0xc518a4(0x127)](_0x3196b0);
            break;
        default:
            throw new Error(_0x4a927c[_0xc518a4(0x117)](_0x4a927c[_0xc518a4(0x128)](_0x4a927c[_0xc518a4(0x129)], _0x20b734), '"'));
    }
    _0x2b7820 = new SSHBuffer({ 'buffer': _0x4c252f });

    const _0x328460 = _0x2b7820[_0xc518a4(0xfe)]();

    const _0x40f12c = _0x2b7820[_0xc518a4(0xfe)]();

    if (_0x4a927c[_0xc518a4(0x12a)](_0x328460, _0x40f12c)) throw new Error(_0xc518a4(0x12b) + _0xc518a4(0x12c));
    const _0x39e0c5 = {};

    const _0x306ed5 = rfc4253[_0xc518a4(0x12d)](_0x39e0c5, _0xc518a4(0x12e), _0x2b7820[_0xc518a4(0x12f)]());

    _0x2b7820[_0xc518a4(0x130)](_0x39e0c5[_0xc518a4(0x131)]);

    const _0xb0d03c = _0x2b7820.readString();

    return _0x306ed5[_0xc518a4(0x132)] = _0xb0d03c, _0x306ed5;
}
function _0x2c6f(_0x264e56, _0xb8db19) {
    return _0x2c6f = function (_0x55b93f, _0x5cf369) {
        _0x55b93f = _0x55b93f - 214;
        const _0x1e26c8 = _0x17cd[_0x55b93f];

        return _0x1e26c8;
    }, _0x2c6f(_0x264e56, _0xb8db19);
}
function write(_0x473823, _0x39d403) {
    const _0x4a3cd1 = _0x5b0987;
    const _0x51b6e1 = {
        'BKVrj': _0x4a3cd1(0xf2),
        'uqckB': function (_0xa6d971, _0x333e4d) {
            return _0xa6d971 !== _0x333e4d;
        },
        'IGAMr': function (_0x47b855, _0x3cc983) {
            return _0x47b855 === _0x3cc983;
        },
        'lQCUa': _0x4a3cd1(0xf5),
        'NTygo': _0x4a3cd1(0x133),
        'HMXmz': function (_0x190e8a, _0x13b69a) {
            return _0x190e8a === _0x13b69a;
        },
        'nhERm': _0x4a3cd1(0x134),
        'EcqXc': 'bcrypt',
        'ItATF': _0x4a3cd1(0x135),
        'PlNFH': function (_0x3fe166, _0x2f6185) {
            return _0x3fe166 % _0x2f6185;
        },
        'sKOij': function (_0x3d52ae, _0x576a60) {
            return _0x3d52ae === _0x576a60;
        },
        'FyEhr': function (_0x4bb31a, _0x3e814e) {
            return _0x4bb31a(_0x3e814e);
        },
        'KGBmN': _0x4a3cd1(0x136),
        'ZPEDV': function (_0xb8bfd8, _0x52249a) {
            return _0xb8bfd8 + _0x52249a;
        },
        'qXVIc': function (_0x27e395, _0x67899b) {
            return _0x27e395 + _0x67899b;
        },
        'ldrYD': _0x4a3cd1(0xf7),
        'otnLZ': function (_0x419ab6, _0x36a00a) {
            return _0x419ab6 + _0x36a00a;
        },
        'NSyBC': function (_0x2b6dc6, _0x238391) {
            return _0x2b6dc6 !== _0x238391;
        },
        'rSEdU': 'Unsupported kdf ',
        'QHNoc': _0x4a3cd1(0x137),
        'SZJAy': _0x4a3cd1(0x138),
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
        'tKWEH': _0x4a3cd1(0x139),
        'tAsMR': _0x4a3cd1(0x13a),
        'jreYc': function (_0x35b945, _0x533dbf) {
            return _0x35b945 < _0x533dbf;
        },
        'qkBUH': function (_0x340602, _0x3acb48) {
            return _0x340602 + _0x3acb48;
        },
        'FQZkR': function (_0x4e8c12, _0x1fac47) {
            return _0x4e8c12 + _0x1fac47;
        },
        'ivoNQ': _0x4a3cd1(0x13b)
    };

    var _0x86ea8d;

    if (PrivateKey[_0x4a3cd1(0x13c)](_0x473823)) _0x86ea8d = _0x473823[_0x4a3cd1(0x13d)]();else _0x86ea8d = _0x473823;

    var _0xe754d6 = _0x51b6e1[_0x4a3cd1(0x13e)];

    var _0x2253c2 = _0x51b6e1[_0x4a3cd1(0x13e)];

    var _0x34dbed = Buffer[_0x4a3cd1(0x13f)](0);

    var _0x3735ee = { 'blockSize': 0x8 };

    var _0x8a4669;

    if (_0x51b6e1.uqckB(_0x39d403, undefined)) {
        _0x8a4669 = _0x39d403[_0x4a3cd1(0x10f)];
        if (_0x51b6e1.IGAMr(typeof _0x8a4669, _0x4a3cd1(0xf4))) _0x8a4669 = Buffer.from(_0x8a4669, _0x51b6e1[_0x4a3cd1(0x140)]);
        if (_0x8a4669 !== undefined) {
            assert[_0x4a3cd1(0x141)](_0x8a4669, _0x51b6e1.NTygo), assert[_0x4a3cd1(0x142)](_0x39d403[_0x4a3cd1(0x143)], 'options.cipher'), _0xe754d6 = _0x39d403[_0x4a3cd1(0x143)];
            if (_0x51b6e1[_0x4a3cd1(0x144)](_0xe754d6, undefined)) _0xe754d6 = _0x51b6e1[_0x4a3cd1(0x145)];
            _0x3735ee = utils[_0x4a3cd1(0x10b)](_0xe754d6), _0x2253c2 = _0x51b6e1[_0x4a3cd1(0x146)];
        }
    }

    var _0x4cd157;

    if (PrivateKey[_0x4a3cd1(0x13c)](_0x473823)) {
        _0x4cd157 = new SSHBuffer({});

        const _0x49862b = crypto.randomBytes(4).readUInt32BE(0);

        _0x4cd157[_0x4a3cd1(0x147)](_0x49862b), _0x4cd157[_0x4a3cd1(0x147)](_0x49862b), _0x4cd157[_0x4a3cd1(0x124)](_0x473823.toBuffer(_0x51b6e1[_0x4a3cd1(0x148)])), _0x4cd157.writeString(_0x473823[_0x4a3cd1(0x132)] || '');
        var _0x183bfc = 1;

        while (_0x51b6e1.uqckB(_0x51b6e1[_0x4a3cd1(0x149)](_0x4cd157[_0x4a3cd1(0x14a)], _0x3735ee[_0x4a3cd1(0x11b)]), 0)) _0x4cd157[_0x4a3cd1(0x14b)](_0x183bfc++);
        _0x4cd157 = _0x4cd157[_0x4a3cd1(0x14c)]();
    }
    switch (_0x2253c2) {
        case _0x51b6e1[_0x4a3cd1(0x13e)]:
            break;
        case _0x51b6e1[_0x4a3cd1(0x146)]:
            const _0x175e82 = crypto.randomBytes(16);

            const _0x1d9c5a = 16;

            const _0x186227 = new SSHBuffer({});

            _0x186227.writeBuffer(_0x175e82), _0x186227.writeInt(_0x1d9c5a), _0x34dbed = _0x186227.toBuffer();
            _0x51b6e1[_0x4a3cd1(0x14d)](bcrypt, undefined) && (bcrypt = _0x51b6e1.FyEhr(require, _0x51b6e1[_0x4a3cd1(0x14e)]));

            const _0x1d7c50 = new Uint8Array(_0x8a4669);

            const _0x3287a3 = new Uint8Array(_0x175e82);

            var _0x348c22 = new Uint8Array(_0x51b6e1[_0x4a3cd1(0x14f)](_0x3735ee[_0x4a3cd1(0x150)], _0x3735ee[_0x4a3cd1(0x11b)]));

            const _0x2d23db = bcrypt[_0x4a3cd1(0x115)](_0x1d7c50, _0x1d7c50.length, _0x3287a3, _0x3287a3[_0x4a3cd1(0x116)], _0x348c22, _0x348c22[_0x4a3cd1(0x116)], _0x1d9c5a);

            if (_0x51b6e1.uqckB(_0x2d23db, 0)) throw new Error(_0x51b6e1[_0x4a3cd1(0x151)](_0x4a3cd1(0xf6), _0x51b6e1[_0x4a3cd1(0x152)]));
            _0x348c22 = Buffer[_0x4a3cd1(0x111)](_0x348c22);

            const _0x2dae36 = _0x348c22[_0x4a3cd1(0x11a)](0, _0x3735ee[_0x4a3cd1(0x150)]);

            const _0x5a42b8 = _0x348c22[_0x4a3cd1(0x11a)](_0x3735ee.keySize, _0x51b6e1[_0x4a3cd1(0x153)](_0x3735ee[_0x4a3cd1(0x150)], _0x3735ee[_0x4a3cd1(0x11b)]));

            const _0x3a7001 = crypto[_0x4a3cd1(0x154)](_0x3735ee[_0x4a3cd1(0x155)], _0x2dae36, _0x5a42b8);

            _0x3a7001.setAutoPadding(false);

            var _0x40a206;

            const _0x56848b = [];

            _0x3a7001[_0x4a3cd1(0x11e)](_0x4a3cd1(0xf8), function (_0x32e12e) {
                throw _0x32e12e;
            }), _0x3a7001[_0x4a3cd1(0x124)](_0x4cd157), _0x3a7001.end();
            while (_0x51b6e1[_0x4a3cd1(0x156)](_0x40a206 = _0x3a7001[_0x4a3cd1(0xe9)](), null)) _0x56848b[_0x4a3cd1(0x126)](_0x40a206);
            _0x4cd157 = Buffer[_0x4a3cd1(0x127)](_0x56848b);
            break;
        default:
            throw new Error(_0x51b6e1[_0x4a3cd1(0x153)](_0x51b6e1[_0x4a3cd1(0x157)], _0x2253c2));
    }

    var _0x319b03 = new SSHBuffer({});

    _0x319b03[_0x4a3cd1(0x158)](MAGIC), _0x319b03[_0x4a3cd1(0x159)](_0xe754d6), _0x319b03[_0x4a3cd1(0x159)](_0x2253c2), _0x319b03[_0x4a3cd1(0x15a)](_0x34dbed), _0x319b03[_0x4a3cd1(0x147)](1), _0x319b03.writeBuffer(_0x86ea8d[_0x4a3cd1(0x14c)](_0x51b6e1[_0x4a3cd1(0x148)]));
    if (_0x4cd157) _0x319b03[_0x4a3cd1(0x15a)](_0x4cd157);
    _0x319b03 = _0x319b03[_0x4a3cd1(0x14c)]();

    var _0x373c76;

    if (PrivateKey[_0x4a3cd1(0x13c)](_0x473823)) _0x373c76 = _0x51b6e1[_0x4a3cd1(0x15b)];else _0x373c76 = 'OPENSSH PUBLIC KEY';

    const _0x564019 = _0x319b03[_0x4a3cd1(0x120)](_0x51b6e1[_0x4a3cd1(0x15c)]);

    const _0x2b2b1b = _0x51b6e1[_0x4a3cd1(0x15d)](_0x51b6e1[_0x4a3cd1(0x15e)](_0x51b6e1.eGYSU(_0x564019[_0x4a3cd1(0x116)], _0x51b6e1[_0x4a3cd1(0x15f)](_0x564019.length, 70)) + 18, 16) + _0x51b6e1[_0x4a3cd1(0x160)](_0x373c76[_0x4a3cd1(0x116)], 2), 10);

    _0x319b03 = Buffer.alloc(_0x2b2b1b);
    var _0x5e69c1 = 0;

    _0x5e69c1 += _0x319b03[_0x4a3cd1(0x124)](_0x51b6e1[_0x4a3cd1(0x161)](_0x51b6e1[_0x4a3cd1(0x161)](_0x51b6e1[_0x4a3cd1(0x162)], _0x373c76), _0x51b6e1.tAsMR), _0x5e69c1);
    for (var _0x43cb3a = 0; _0x51b6e1[_0x4a3cd1(0x163)](_0x43cb3a, _0x564019[_0x4a3cd1(0x116)]);) {
        const _0x51d53f = '0|2|4|1|3'[_0x4a3cd1(0x164)]('|');

        var _0x15e1f5 = 0;

        while (true) {
            switch (_0x51d53f[_0x15e1f5++]) {
                case '0':
                    var _0x21630d = _0x51b6e1[_0x4a3cd1(0x161)](_0x43cb3a, 70);

                    continue;
                case '1':
                    _0x319b03[_0x5e69c1++] = 10;
                    continue;
                case '2':
                    if (_0x21630d > _0x564019[_0x4a3cd1(0x116)]) _0x21630d = _0x564019[_0x4a3cd1(0x116)];
                    continue;
                case '3':
                    _0x43cb3a = _0x21630d;
                    continue;
                case '4':
                    _0x5e69c1 += _0x319b03.write(_0x564019[_0x4a3cd1(0x11a)](_0x43cb3a, _0x21630d), _0x5e69c1);
                    continue;
            }
            break;
        }
    }
    return _0x5e69c1 += _0x319b03[_0x4a3cd1(0x124)](_0x51b6e1[_0x4a3cd1(0x165)](_0x51b6e1[_0x4a3cd1(0x166)](_0x51b6e1[_0x4a3cd1(0x167)], _0x373c76), _0x4a3cd1(0x13a)), _0x5e69c1), _0x319b03[_0x4a3cd1(0x11a)](0, _0x5e69c1);
}