var generatePrime = require('./lib/generatePrime');
var primes = require('./lib/primes.json');
var DH = require('./lib/dh');
function getDiffieHellman(_0x1596d4) {
    var _0x5bce28 = new Buffer(primes[_0x1596d4]['prime'], 'hex');
    var _0x28c199 = new Buffer(primes[_0x1596d4]['gen'], 'hex');
    return new DH(_0x5bce28, _0x28c199);
}
var ENCODINGS = {
    'binary': !![],
    'hex': !![],
    'base64': !![]
};
function createDiffieHellman(_0x456c4c, _0x5a8074, _0x2e5c7b, _0x317c7b) {
    if (Buffer['isBuffer'](_0x5a8074) || ENCODINGS[_0x5a8074] === undefined) {
        return createDiffieHellman(_0x456c4c, 'binary', _0x5a8074, _0x2e5c7b);
    }
    _0x5a8074 = _0x5a8074 || 'binary';
    _0x317c7b = _0x317c7b || 'binary';
    _0x2e5c7b = _0x2e5c7b || new Buffer([2]);
    if (!Buffer['isBuffer'](_0x2e5c7b)) {
        if ('lzwaI' === 'lzwaI') {
            _0x2e5c7b = new Buffer(_0x2e5c7b, _0x317c7b);
        } else {
            return new DH(generatePrime(_0x456c4c, _0x2e5c7b), _0x2e5c7b, !![]);
        }
    }
    if (typeof _0x456c4c === 'number') {
        if ('NCYco' === 'ccmcY') {
            _0x2e5c7b = new Buffer(_0x2e5c7b, _0x317c7b);
        } else {
            return new DH(generatePrime(_0x456c4c, _0x2e5c7b), _0x2e5c7b, !![]);
        }
    }
    if (!Buffer['isBuffer'](_0x456c4c)) {
        _0x456c4c = new Buffer(_0x456c4c, _0x5a8074);
    }
    return new DH(_0x456c4c, _0x2e5c7b, !![]);
}
exports['DiffieHellmanGroup'] = exports['createDiffieHellmanGroup'] = exports['getDiffieHellman'] = getDiffieHellman;
exports['createDiffieHellman'] = exports['DiffieHellman'] = createDiffieHellman;