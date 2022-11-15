var generatePrime = require(_0x3bbb69(210)), primes = require('./lib/primes.json'), DH = require(_0x3bbb69(211));
function getDiffieHellman(_0x3b1835) {
    var _0x461e91 = _0x3bbb69, _0x1dc486 = new Buffer(primes[_0x3b1835][_0x461e91(212)], 'hex'), _0x5603a1 = new Buffer(primes[_0x3b1835][_0x461e91(213)], _0x461e91(214));
    return new DH(_0x1dc486, _0x5603a1);
}
var ENCODINGS = {
    'binary': !![],
    'hex': !![],
    'base64': !![]
};
function createDiffieHellman(_0x151a04, _0xa5f05d, _0x56721d, _0x27e62b) {
    var _0x2a74b8 = _0x3bbb69;
    if (Buffer[_0x2a74b8(215)](_0xa5f05d) || ENCODINGS[_0xa5f05d] === undefined)
        return createDiffieHellman(_0x151a04, _0x2a74b8(216), _0xa5f05d, _0x56721d);
    _0xa5f05d = _0xa5f05d || _0x2a74b8(216), _0x27e62b = _0x27e62b || _0x2a74b8(216), _0x56721d = _0x56721d || new Buffer([2]);
    !Buffer[_0x2a74b8(215)](_0x56721d) && (_0x56721d = new Buffer(_0x56721d, _0x27e62b));
    if (typeof _0x151a04 === _0x2a74b8(217))
        return new DH(generatePrime(_0x151a04, _0x56721d), _0x56721d, !![]);
    return !Buffer['isBuffer'](_0x151a04) && (_0x151a04 = new Buffer(_0x151a04, _0xa5f05d)), new DH(_0x151a04, _0x56721d, !![]);
}
exports[_0x3bbb69(218)] = exports['createDiffieHellmanGroup'] = exports['getDiffieHellman'] = getDiffieHellman, exports['createDiffieHellman'] = exports['DiffieHellman'] = createDiffieHellman;