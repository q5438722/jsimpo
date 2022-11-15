var _0x7ae3 = [
    'hex',
    'isBuffer',
    'binary',
    'number',
    'DiffieHellmanGroup',
    '34iAglFW',
    '51002zTJQPI',
    '59XYoxsT',
    '22501vwWbhn',
    '10hCSxCm',
    '156334WuciLF',
    '124129PWeoqg',
    '5UvfIWj',
    '22153YQIhaa',
    '1CuNnNM',
    '467634JttkrU',
    '1004778dYrmGL',
    './lib/generatePrime',
    './lib/dh',
    'prime',
    'gen'
];
function _0x2a77(_0x50bdf1, _0x568a1e) {
    return _0x2a77 = function (_0x7ae36b, _0x2a779d) {
        _0x7ae36b = _0x7ae36b - 0xc6;
        var _0x31865b = _0x7ae3[_0x7ae36b];
        return _0x31865b;
    }, _0x2a77(_0x50bdf1, _0x568a1e);
}
var _0x3bbb69 = _0x2a77;
(function (_0x36d335, _0x1680cb) {
    var _0x1238b7 = _0x2a77;
    while (!![]) {
        try {
            var _0x570013 = parseInt(_0x1238b7(0xc6)) * parseInt(_0x1238b7(0xc7)) + parseInt(_0x1238b7(0xc8)) * -parseInt(_0x1238b7(0xc9)) + -parseInt(_0x1238b7(0xca)) * parseInt(_0x1238b7(0xcb)) + -parseInt(_0x1238b7(0xcc)) * -parseInt(_0x1238b7(0xcd)) + parseInt(_0x1238b7(0xce)) + parseInt(_0x1238b7(0xcf)) * parseInt(_0x1238b7(0xd0)) + parseInt(_0x1238b7(0xd1));
            if (_0x570013 === _0x1680cb)
                break;
            else
                _0x36d335['push'](_0x36d335['shift']());
        } catch (_0x4faa9a) {
            _0x36d335['push'](_0x36d335['shift']());
        }
    }
}(_0x7ae3, 0xe9fab));
var generatePrime = require(_0x3bbb69(0xd2)), primes = require('./lib/primes.json'), DH = require(_0x3bbb69(0xd3));
function getDiffieHellman(_0x3b1835) {
    var _0x461e91 = _0x3bbb69, _0x1dc486 = new Buffer(primes[_0x3b1835][_0x461e91(0xd4)], 'hex'), _0x5603a1 = new Buffer(primes[_0x3b1835][_0x461e91(0xd5)], _0x461e91(0xd6));
    return new DH(_0x1dc486, _0x5603a1);
}
var ENCODINGS = {
    'binary': !![],
    'hex': !![],
    'base64': !![]
};
function createDiffieHellman(_0x151a04, _0xa5f05d, _0x56721d, _0x27e62b) {
    var _0x2a74b8 = _0x3bbb69;
    if (Buffer[_0x2a74b8(0xd7)](_0xa5f05d) || ENCODINGS[_0xa5f05d] === undefined)
        return createDiffieHellman(_0x151a04, _0x2a74b8(0xd8), _0xa5f05d, _0x56721d);
    _0xa5f05d = _0xa5f05d || _0x2a74b8(0xd8), _0x27e62b = _0x27e62b || _0x2a74b8(0xd8), _0x56721d = _0x56721d || new Buffer([0x2]);
    !Buffer[_0x2a74b8(0xd7)](_0x56721d) && (_0x56721d = new Buffer(_0x56721d, _0x27e62b));
    if (typeof _0x151a04 === _0x2a74b8(0xd9))
        return new DH(generatePrime(_0x151a04, _0x56721d), _0x56721d, !![]);
    return !Buffer['isBuffer'](_0x151a04) && (_0x151a04 = new Buffer(_0x151a04, _0xa5f05d)), new DH(_0x151a04, _0x56721d, !![]);
}
exports[_0x3bbb69(0xda)] = exports['createDiffieHellmanGroup'] = exports['getDiffieHellman'] = getDiffieHellman, exports['createDiffieHellman'] = exports['DiffieHellman'] = createDiffieHellman;
