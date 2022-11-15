const _0x466b = ['./lib/generatePrime', './lib/primes.json', './lib/dh', 'prime', 'SdpKe', 'gen', '2|1|0|6|5|3|7|4', 'binary', 'number', 'wYyAC', 'split', 'pByvS', 'BQqmZ', 'isBuffer', 'ZGcUf', 'jXsMF', 'FXmgH', 'numou', 'createDiffieHellmanGroup', 'createDiffieHellman', '208111OyROrz', '263993JAuPrD', '84961xYKBey', '3oMkUhN', '68899wFHDxE', '5UkSclv', '2909ZQMrPl', '65uLbdAY', '66723yYFGVD', '1CfXwIm', '988867aSYwGV'];
const _0x12020e = _0x5261;

(function (_0x6665de, _0x47f066) {
    const _0x2df6f9 = _0x5261;

    while (true) {
        try {
            const _0x1792ed = -parseInt(_0x2df6f9(0xe8)) + parseInt(_0x2df6f9(0xe9)) + parseInt(_0x2df6f9(0xea)) * -parseInt(_0x2df6f9(0xeb)) + parseInt(_0x2df6f9(0xec)) * -parseInt(_0x2df6f9(0xed)) + parseInt(_0x2df6f9(0xee)) * -parseInt(_0x2df6f9(0xef)) + -parseInt(_0x2df6f9(0xf0)) + parseInt(_0x2df6f9(0xf1)) * parseInt(_0x2df6f9(0xf2));

            if (_0x1792ed === _0x47f066) break;else _0x6665de.push(_0x6665de.shift());
        } catch (_0xfc87fd) {
            _0x6665de.push(_0x6665de.shift());
        }
    }
})(_0x466b, 189563);

const generatePrime = require(_0x12020e(0xf3));

const primes = require(_0x12020e(0xf4));

const DH = require(_0x12020e(0xf5));

function _0x5261(_0x2f2ba8, _0x45bb07) {
    return _0x5261 = function (_0x39a276, _0x6ff90) {
        _0x39a276 = _0x39a276 - 232;
        const _0x231158 = _0x466b[_0x39a276];

        return _0x231158;
    }, _0x5261(_0x2f2ba8, _0x45bb07);
}
function getDiffieHellman(_0x2895c2) {
    const _0xe8875a = _0x12020e;
    const _0x270ca2 = { 'SdpKe': 'hex' };

    const _0x1aa03a = new Buffer(primes[_0x2895c2][_0xe8875a(0xf6)], _0x270ca2[_0xe8875a(0xf7)]);

    const _0x766395 = new Buffer(primes[_0x2895c2][_0xe8875a(0xf8)], _0x270ca2.SdpKe);

    return new DH(_0x1aa03a, _0x766395);
}
const ENCODINGS = {
    'binary': true,
    'hex': true,
    'base64': true
};

function createDiffieHellman(_0x31432e, _0x47e63f, _0x328ea6, _0x32552d) {
    const _0x163d5c = _0x12020e;
    const _0x92b306 = {
        'wYyAC': _0x163d5c(0xf9),
        'pByvS': _0x163d5c(0xfa),
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
        'FXmgH': _0x163d5c(0xfb),
        'numou': function (_0x3cf178, _0x10fefb, _0x13bdb4) {
            return _0x3cf178(_0x10fefb, _0x13bdb4);
        }
    };

    const _0x393917 = _0x92b306[_0x163d5c(0xfc)][_0x163d5c(0xfd)]('|');

    var _0x5efc98 = 0;

    while (true) {
        switch (_0x393917[_0x5efc98++]) {
            case '0':
                _0x32552d = _0x32552d || _0x92b306[_0x163d5c(0xfe)];
                continue;
            case '1':
                _0x47e63f = _0x92b306[_0x163d5c(0xff)](_0x47e63f, _0x92b306[_0x163d5c(0xfe)]);
                continue;
            case '2':
                if (Buffer[_0x163d5c(0x100)](_0x47e63f) || _0x92b306[_0x163d5c(0x101)](ENCODINGS[_0x47e63f], undefined)) return _0x92b306[_0x163d5c(0x102)](createDiffieHellman, _0x31432e, _0x92b306[_0x163d5c(0xfe)], _0x47e63f, _0x328ea6);
                continue;
            case '3':
                if (_0x92b306.ilDWK(typeof _0x31432e, _0x92b306[_0x163d5c(0x103)])) return new DH(_0x92b306[_0x163d5c(0x104)](generatePrime, _0x31432e, _0x328ea6), _0x328ea6, true);
                continue;
            case '4':
                return new DH(_0x31432e, _0x328ea6, true);
            case '5':
                !Buffer[_0x163d5c(0x100)](_0x328ea6) && (_0x328ea6 = new Buffer(_0x328ea6, _0x32552d));
                continue;
            case '6':
                _0x328ea6 = _0x328ea6 || new Buffer([2]);
                continue;
            case '7':
                !Buffer[_0x163d5c(0x100)](_0x31432e) && (_0x31432e = new Buffer(_0x31432e, _0x47e63f));
                continue;
        }
        break;
    }
}
exports['DiffieHellmanGroup'] = exports[_0x12020e(0x105)] = exports['getDiffieHellman'] = getDiffieHellman, exports[_0x12020e(0x106)] = exports['DiffieHellman'] = createDiffieHellman;
