var generatePrime = require(_0x12020e(243)), primes = require(_0x12020e(244)), DH = require(_0x12020e(245));
function _0x5261(_0x2f2ba8, _0x45bb07) {
    return _0x5261 = function (_0x39a276, _0x6ff90) {
        _0x39a276 = _0x39a276 - (296 * 31 + 96 * 90 + -17584);
        var _0x231158 = _0x466b[_0x39a276];
        return _0x231158;
    }, _0x5261(_0x2f2ba8, _0x45bb07);
}
function getDiffieHellman(_0x2895c2) {
    var _0xe8875a = _0x12020e, _0x270ca2 = { 'SdpKe': 'hex' }, _0x1aa03a = new Buffer(primes[_0x2895c2][_0xe8875a(246)], _0x270ca2[_0xe8875a(247)]), _0x766395 = new Buffer(primes[_0x2895c2][_0xe8875a(248)], _0x270ca2['SdpKe']);
    return new DH(_0x1aa03a, _0x766395);
}
var ENCODINGS = {
    'binary': !![],
    'hex': !![],
    'base64': !![]
};
function createDiffieHellman(_0x31432e, _0x47e63f, _0x328ea6, _0x32552d) {
    var _0x163d5c = _0x12020e, _0x92b306 = {
            'wYyAC': _0x163d5c(249),
            'pByvS': _0x163d5c(250),
            'BQqmZ': function (_0x31ec5a, _0x4741dd) {
                return _0x31ec5a || _0x4741dd;
            },
            'ZGcUf': function (_0x46e512, _0x18c1a7) {
                return _0x46e512 === _0x18c1a7;
            },
            'jXsMF': function (_0x5733d8, _0x486ba7, _0x2be454, _0x1242f4, _0x5f3bf3) {
                return _0x5733d8(_0x486ba7, _0x2be454, _0x1242f4, _0x5f3bf3);
            },
            'ilDWK': function (_0x272fe6, _0x2c9626) {
                return _0x272fe6 === _0x2c9626;
            },
            'FXmgH': _0x163d5c(251),
            'numou': function (_0x3cf178, _0x10fefb, _0x13bdb4) {
                return _0x3cf178(_0x10fefb, _0x13bdb4);
            }
        }, _0x393917 = _0x92b306[_0x163d5c(252)][_0x163d5c(253)]('|'), _0x5efc98 = -5976 + 974 * 4 + 16 * 130;
    while (!![]) {
        switch (_0x393917[_0x5efc98++]) {
        case '0':
            _0x32552d = _0x32552d || _0x92b306[_0x163d5c(254)];
            continue;
        case '1':
            _0x47e63f = _0x92b306[_0x163d5c(255)](_0x47e63f, _0x92b306[_0x163d5c(254)]);
            continue;
        case '2':
            if (Buffer[_0x163d5c(256)](_0x47e63f) || _0x92b306[_0x163d5c(257)](ENCODINGS[_0x47e63f], undefined))
                return _0x92b306[_0x163d5c(258)](createDiffieHellman, _0x31432e, _0x92b306[_0x163d5c(254)], _0x47e63f, _0x328ea6);
            continue;
        case '3':
            if (_0x92b306['ilDWK'](typeof _0x31432e, _0x92b306[_0x163d5c(259)]))
                return new DH(_0x92b306[_0x163d5c(260)](generatePrime, _0x31432e, _0x328ea6), _0x328ea6, !![]);
            continue;
        case '4':
            return new DH(_0x31432e, _0x328ea6, !![]);
        case '5':
            !Buffer[_0x163d5c(256)](_0x328ea6) && (_0x328ea6 = new Buffer(_0x328ea6, _0x32552d));
            continue;
        case '6':
            _0x328ea6 = _0x328ea6 || new Buffer([-5219 * -1 + 3403 * -2 + -227 * -7]);
            continue;
        case '7':
            !Buffer[_0x163d5c(256)](_0x31432e) && (_0x31432e = new Buffer(_0x31432e, _0x47e63f));
            continue;
        }
        break;
    }
}
exports['DiffieHellmanGroup'] = exports[_0x12020e(261)] = exports['getDiffieHellman'] = getDiffieHellman, exports[_0x12020e(262)] = exports['DiffieHellman'] = createDiffieHellman;