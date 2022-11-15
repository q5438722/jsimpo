module[_0x41b49e(121)] = {
    'read': read,
    'readSSHPrivate': readSSHPrivate,
    'write': write
};
var assert = require(_0x41b49e(122)), asn1 = require('asn1'), Buffer = require(_0x41b49e(123))[_0x41b49e(124)], algs = require(_0x41b49e(125)), utils = require('../utils'), crypto = require(_0x41b49e(126)), Key = require(_0x41b49e(127)), PrivateKey = require(_0x41b49e(128)), pem = require(_0x41b49e(129)), rfc4253 = require(_0x41b49e(130)), SSHBuffer = require(_0x41b49e(131)), errors = require(_0x41b49e(132)), bcrypt;
function read(_0x3554af, _0x3e5a96) {
    var _0x2ee49f = _0x41b49e;
    return pem[_0x2ee49f(133)](_0x3554af, _0x3e5a96);
}
var MAGIC = _0x41b49e(134);
function _0x1dba(_0x157392, _0x516ca8) {
    return _0x1dba = function (_0x4fc93a, _0x1dba05) {
        _0x4fc93a = _0x4fc93a - 109;
        var _0x5d571d = _0x4fc9[_0x4fc93a];
        return _0x5d571d;
    }, _0x1dba(_0x157392, _0x516ca8);
}
function readSSHPrivate(_0x4b23b7, _0x30d9d1, _0x30d51) {
    var _0x1e3e86 = _0x41b49e;
    _0x30d9d1 = new SSHBuffer({ 'buffer': _0x30d9d1 });
    var _0x2eeee5 = _0x30d9d1[_0x1e3e86(135)]();
    assert[_0x1e3e86(136)](_0x2eeee5, MAGIC, _0x1e3e86(137));
    var _0x42f3a2 = _0x30d9d1[_0x1e3e86(138)](), _0x565279 = _0x30d9d1[_0x1e3e86(138)](), _0x26d723 = _0x30d9d1['readBuffer'](), _0x5aa9ba = _0x30d9d1[_0x1e3e86(139)]();
    if (_0x5aa9ba !== 1)
        throw new Error(_0x1e3e86(140) + _0x1e3e86(141));
    var _0x30a5bf = _0x30d9d1[_0x1e3e86(142)]();
    if (_0x4b23b7 === _0x1e3e86(143))
        return assert['ok'](_0x30d9d1[_0x1e3e86(144)](), _0x1e3e86(145)), rfc4253['read'](_0x30a5bf);
    var _0x11390d = _0x30d9d1[_0x1e3e86(142)]();
    assert['ok'](_0x30d9d1[_0x1e3e86(144)](), _0x1e3e86(145));
    var _0x431fdf = new SSHBuffer({ 'buffer': _0x26d723 });
    switch (_0x565279) {
    case _0x1e3e86(146):
        if (_0x42f3a2 !== _0x1e3e86(146))
            throw new Error('OpenSSH-format key uses KDF "none" ' + _0x1e3e86(147));
        break;
    case _0x1e3e86(148):
        var _0x263196 = _0x431fdf[_0x1e3e86(142)](), _0x4e048c = _0x431fdf['readInt'](), _0x2f3bea = utils[_0x1e3e86(149)](_0x42f3a2);
        bcrypt === undefined && (bcrypt = require(_0x1e3e86(150)));
        typeof _0x30d51[_0x1e3e86(151)] === 'string' && (_0x30d51[_0x1e3e86(151)] = Buffer[_0x1e3e86(152)](_0x30d51['passphrase'], _0x1e3e86(153)));
        if (!Buffer[_0x1e3e86(154)](_0x30d51[_0x1e3e86(151)]))
            throw new errors[(_0x1e3e86(155))](_0x30d51[_0x1e3e86(156)], _0x1e3e86(157));
        var _0x342240 = new Uint8Array(_0x30d51[_0x1e3e86(151)]), _0x52842a = new Uint8Array(_0x263196), _0x78791f = new Uint8Array(_0x2f3bea[_0x1e3e86(158)] + _0x2f3bea[_0x1e3e86(159)]), _0x5694ac = bcrypt[_0x1e3e86(160)](_0x342240, _0x342240[_0x1e3e86(161)], _0x52842a, _0x52842a[_0x1e3e86(161)], _0x78791f, _0x78791f['length'], _0x4e048c);
        if (_0x5694ac !== 0)
            throw new Error(_0x1e3e86(162) + _0x1e3e86(163));
        _0x78791f = Buffer['from'](_0x78791f);
        var _0x49a72c = _0x78791f[_0x1e3e86(164)](0, _0x2f3bea['keySize']), _0x5a9d07 = _0x78791f['slice'](_0x2f3bea['keySize'], _0x2f3bea[_0x1e3e86(158)] + _0x2f3bea['blockSize']), _0x2b2b74 = crypto[_0x1e3e86(165)](_0x2f3bea['opensslName'], _0x49a72c, _0x5a9d07);
        _0x2b2b74[_0x1e3e86(166)](![]);
        var _0xb4b9a2, _0x434b66 = [];
        _0x2b2b74['once'](_0x1e3e86(167), function (_0x15d842) {
            var _0x4a6f44 = _0x1e3e86;
            if (_0x15d842['toString']()['indexOf']('bad decrypt') !== -1)
                throw new Error(_0x4a6f44(168) + 'supplied, could not decrypt key');
            throw _0x15d842;
        }), _0x2b2b74[_0x1e3e86(169)](_0x11390d), _0x2b2b74[_0x1e3e86(170)]();
        while ((_0xb4b9a2 = _0x2b2b74['read']()) !== null)
            _0x434b66[_0x1e3e86(171)](_0xb4b9a2);
        _0x11390d = Buffer['concat'](_0x434b66);
        break;
    default:
        throw new Error('OpenSSH-format key uses unknown KDF "' + _0x565279 + '"');
    }
    _0x30d9d1 = new SSHBuffer({ 'buffer': _0x11390d });
    var _0x56dbdd = _0x30d9d1[_0x1e3e86(139)](), _0x58af8e = _0x30d9d1[_0x1e3e86(139)]();
    if (_0x56dbdd !== _0x58af8e)
        throw new Error(_0x1e3e86(172) + _0x1e3e86(173));
    var _0x6b0122 = {}, _0x3b5923 = rfc4253[_0x1e3e86(174)](_0x6b0122, 'private', _0x30d9d1['remainder']());
    _0x30d9d1[_0x1e3e86(175)](_0x6b0122[_0x1e3e86(176)]);
    var _0x33d77f = _0x30d9d1[_0x1e3e86(138)]();
    return _0x3b5923[_0x1e3e86(177)] = _0x33d77f, _0x3b5923;
}
function write(_0x4cadaf, _0x1ee1bc) {
    var _0xcb610c = _0x41b49e, _0x2998fd;
    if (PrivateKey['isPrivateKey'](_0x4cadaf))
        _0x2998fd = _0x4cadaf[_0xcb610c(178)]();
    else
        _0x2998fd = _0x4cadaf;
    var _0x2cc8d3 = 'none', _0x154c59 = _0xcb610c(146), _0x4014d6 = Buffer[_0xcb610c(179)](0), _0x91a10e = { 'blockSize': 8 }, _0x4bb954;
    if (_0x1ee1bc !== undefined) {
        _0x4bb954 = _0x1ee1bc['passphrase'];
        if (typeof _0x4bb954 === _0xcb610c(180))
            _0x4bb954 = Buffer[_0xcb610c(152)](_0x4bb954, _0xcb610c(153));
        if (_0x4bb954 !== undefined) {
            assert[_0xcb610c(181)](_0x4bb954, _0xcb610c(182)), assert[_0xcb610c(183)](_0x1ee1bc[_0xcb610c(184)], 'options.cipher'), _0x2cc8d3 = _0x1ee1bc[_0xcb610c(184)];
            if (_0x2cc8d3 === undefined)
                _0x2cc8d3 = 'aes128-ctr';
            _0x91a10e = utils['opensshCipherInfo'](_0x2cc8d3), _0x154c59 = _0xcb610c(148);
        }
    }
    var _0x1c879c;
    if (PrivateKey[_0xcb610c(185)](_0x4cadaf)) {
        _0x1c879c = new SSHBuffer({});
        var _0x37e31e = crypto['randomBytes'](4)[_0xcb610c(186)](0);
        _0x1c879c[_0xcb610c(187)](_0x37e31e), _0x1c879c[_0xcb610c(187)](_0x37e31e), _0x1c879c[_0xcb610c(169)](_0x4cadaf[_0xcb610c(188)](_0xcb610c(189))), _0x1c879c[_0xcb610c(190)](_0x4cadaf['comment'] || '');
        var _0x3870e3 = 1;
        while (_0x1c879c[_0xcb610c(191)] % _0x91a10e[_0xcb610c(159)] !== 0)
            _0x1c879c['writeChar'](_0x3870e3++);
        _0x1c879c = _0x1c879c['toBuffer']();
    }
    switch (_0x154c59) {
    case _0xcb610c(146):
        break;
    case _0xcb610c(148):
        var _0x2d1bc5 = crypto[_0xcb610c(192)](16), _0x35d4c7 = 16, _0x5cc36e = new SSHBuffer({});
        _0x5cc36e[_0xcb610c(193)](_0x2d1bc5), _0x5cc36e[_0xcb610c(187)](_0x35d4c7), _0x4014d6 = _0x5cc36e[_0xcb610c(188)]();
        bcrypt === undefined && (bcrypt = require(_0xcb610c(150)));
        var _0x1214b2 = new Uint8Array(_0x4bb954), _0x539d88 = new Uint8Array(_0x2d1bc5), _0x44aef9 = new Uint8Array(_0x91a10e['keySize'] + _0x91a10e[_0xcb610c(159)]), _0x22d3a4 = bcrypt[_0xcb610c(160)](_0x1214b2, _0x1214b2[_0xcb610c(161)], _0x539d88, _0x539d88[_0xcb610c(161)], _0x44aef9, _0x44aef9[_0xcb610c(161)], _0x35d4c7);
        if (_0x22d3a4 !== 0)
            throw new Error(_0xcb610c(162) + _0xcb610c(163));
        _0x44aef9 = Buffer[_0xcb610c(152)](_0x44aef9);
        var _0x57c11a = _0x44aef9[_0xcb610c(164)](0, _0x91a10e['keySize']), _0xbd01fb = _0x44aef9[_0xcb610c(164)](_0x91a10e[_0xcb610c(158)], _0x91a10e[_0xcb610c(158)] + _0x91a10e[_0xcb610c(159)]), _0x31eede = crypto[_0xcb610c(194)](_0x91a10e[_0xcb610c(195)], _0x57c11a, _0xbd01fb);
        _0x31eede[_0xcb610c(166)](![]);
        var _0xc8a13a, _0x527206 = [];
        _0x31eede[_0xcb610c(196)](_0xcb610c(167), function (_0x2c6624) {
            throw _0x2c6624;
        }), _0x31eede[_0xcb610c(169)](_0x1c879c), _0x31eede[_0xcb610c(170)]();
        while ((_0xc8a13a = _0x31eede['read']()) !== null)
            _0x527206[_0xcb610c(171)](_0xc8a13a);
        _0x1c879c = Buffer[_0xcb610c(197)](_0x527206);
        break;
    default:
        throw new Error(_0xcb610c(198) + _0x154c59);
    }
    var _0x574864 = new SSHBuffer({});
    _0x574864[_0xcb610c(199)](MAGIC), _0x574864[_0xcb610c(190)](_0x2cc8d3), _0x574864[_0xcb610c(190)](_0x154c59), _0x574864[_0xcb610c(193)](_0x4014d6), _0x574864[_0xcb610c(187)](1), _0x574864['writeBuffer'](_0x2998fd['toBuffer'](_0xcb610c(189)));
    if (_0x1c879c)
        _0x574864['writeBuffer'](_0x1c879c);
    _0x574864 = _0x574864[_0xcb610c(188)]();
    var _0x58382c;
    if (PrivateKey[_0xcb610c(185)](_0x4cadaf))
        _0x58382c = 'OPENSSH PRIVATE KEY';
    else
        _0x58382c = _0xcb610c(200);
    var _0xa98350 = _0x574864[_0xcb610c(201)](_0xcb610c(202)), _0x488e9f = _0xa98350[_0xcb610c(161)] + _0xa98350[_0xcb610c(161)] / 70 + 18 + 16 + _0x58382c['length'] * 2 + 10;
    _0x574864 = Buffer[_0xcb610c(179)](_0x488e9f);
    var _0xdca07f = 0;
    _0xdca07f += _0x574864['write'](_0xcb610c(203) + _0x58382c + _0xcb610c(204), _0xdca07f);
    for (var _0x1e602a = 0; _0x1e602a < _0xa98350[_0xcb610c(161)];) {
        var _0x1524a0 = _0x1e602a + 70;
        if (_0x1524a0 > _0xa98350[_0xcb610c(161)])
            _0x1524a0 = _0xa98350['length'];
        _0xdca07f += _0x574864[_0xcb610c(169)](_0xa98350[_0xcb610c(164)](_0x1e602a, _0x1524a0), _0xdca07f), _0x574864[_0xdca07f++] = 10, _0x1e602a = _0x1524a0;
    }
    return _0xdca07f += _0x574864[_0xcb610c(169)](_0xcb610c(205) + _0x58382c + _0xcb610c(204), _0xdca07f), _0x574864[_0xcb610c(164)](0, _0xdca07f);
}