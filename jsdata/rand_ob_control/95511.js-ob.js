var common = require('../common.js'), assert = require('assert'), READSIZE = 0x64, PUSHSIZE = 0x14, PUSHCOUNT = 0x3e8, HWM = 0x32, Readable = require('../../readable')['Readable'], r = new Readable({ 'highWaterMark': HWM }), rs = r['_readableState'];
r['_read'] = push, r['on']('readable', function () {
    var _0x580c7b = {
        'mRwlT': '>>\x20readable',
        'NUZoK': '\x20\x20>\x20read(%d)',
        'oDLWm': '\x20\x20<\x20%j\x20(%d\x20remain)',
        'UNRKu': function (_0xbee23c, _0x331197) {
            return _0xbee23c === _0x331197;
        },
        'UbSnf': '<<\x20after\x20read()'
    };
    console['error'](_0x580c7b['mRwlT']);
    do {
        console['error'](_0x580c7b['NUZoK'], READSIZE);
        var _0x129d79 = r['read'](READSIZE);
        console['error'](_0x580c7b['oDLWm'], _0x129d79 && _0x129d79['length'], rs['length']);
    } while (_0x129d79 && _0x580c7b['UNRKu'](_0x129d79['length'], READSIZE));
    console['error'](_0x580c7b['UbSnf'], _0x129d79 && _0x129d79['length'], rs['needReadable'], rs['length']);
});
var endEmitted = ![];
r['on']('end', function () {
    var _0x157029 = { 'MOvuu': 'end' };
    endEmitted = !![], console['error'](_0x157029['MOvuu']);
});
var pushes = 0x0;
function push() {
    var _0xc63252 = {
        'AIRmw': function (_0x2e9cc1, _0x4d3439) {
            return _0x2e9cc1 > _0x4d3439;
        },
        'CQOcw': function (_0x3f9c06, _0x33ba79) {
            return _0x3f9c06 === _0x33ba79;
        },
        'NgNWF': '\x20\x20\x20push(EOF)',
        'huCHs': '\x20\x20\x20push\x20#%d',
        'tgTsE': function (_0x13c9e3, _0x2d22c9) {
            return _0x13c9e3(_0x2d22c9);
        }
    };
    if (_0xc63252['AIRmw'](pushes, PUSHCOUNT))
        return;
    if (_0xc63252['CQOcw'](pushes++, PUSHCOUNT))
        return console['error'](_0xc63252['NgNWF']), r['push'](null);
    console['error'](_0xc63252['huCHs'], pushes);
    if (r['push'](new Buffer(PUSHSIZE)))
        _0xc63252['tgTsE'](setTimeout, push);
}
var ret = r['read'](0x0);
process['on']('exit', function () {
    var _0x2615df = {
        'yPLJv': function (_0x41d0ff, _0x20c8b7) {
            return _0x41d0ff + _0x20c8b7;
        },
        'nExYE': function (_0x2d8ac9, _0x5d2f3b) {
            return _0x2d8ac9(_0x5d2f3b);
        }
    };
    assert['equal'](pushes, _0x2615df['yPLJv'](PUSHCOUNT, 0x1)), _0x2615df['nExYE'](assert, endEmitted);
});
