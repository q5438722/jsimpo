var _0x2aae = [
    '185628tgMioU',
    '3609wTZFLx',
    '151WiINiI',
    '44276ipfzpj',
    '333222XccObl',
    '1MsVOqs',
    '573392odsLkh',
    '../common.js',
    'assert',
    '../../readable',
    '_readableState',
    '_read',
    'readable',
    'error',
    '>>\x20readable',
    '\x20\x20<\x20%j\x20(%d\x20remain)',
    'length',
    '<<\x20after\x20read()',
    'needReadable',
    'end',
    '\x20\x20\x20push(EOF)',
    'push',
    '\x20\x20\x20push\x20#%d',
    'read',
    'exit',
    'equal',
    '443821AhvDeY',
    '642649TFgNuX',
    '1GZzlnn'
];
var _0x25ff99 = _0x22bb;
(function (_0x3d41dd, _0x3ecd1b) {
    var _0x369934 = _0x22bb;
    while (!![]) {
        try {
            var _0x5765c6 = parseInt(_0x369934(0x1a2)) + -parseInt(_0x369934(0x1a3)) + -parseInt(_0x369934(0x1a4)) * -parseInt(_0x369934(0x1a5)) + -parseInt(_0x369934(0x1a6)) * -parseInt(_0x369934(0x1a7)) + parseInt(_0x369934(0x1a8)) + parseInt(_0x369934(0x1a9)) + -parseInt(_0x369934(0x1aa)) * parseInt(_0x369934(0x1ab));
            if (_0x5765c6 === _0x3ecd1b)
                break;
            else
                _0x3d41dd['push'](_0x3d41dd['shift']());
        } catch (_0x501245) {
            _0x3d41dd['push'](_0x3d41dd['shift']());
        }
    }
}(_0x2aae, 0x51ff9));
var common = require(_0x25ff99(0x1ac)), assert = require(_0x25ff99(0x1ad)), READSIZE = 0x64, PUSHSIZE = 0x14, PUSHCOUNT = 0x3e8, HWM = 0x32, Readable = require(_0x25ff99(0x1ae))['Readable'], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x25ff99(0x1af)];
r[_0x25ff99(0x1b0)] = push, r['on'](_0x25ff99(0x1b1), function () {
    var _0x17ec3f = _0x25ff99;
    console[_0x17ec3f(0x1b2)](_0x17ec3f(0x1b3));
    do {
        console[_0x17ec3f(0x1b2)]('\x20\x20>\x20read(%d)', READSIZE);
        var _0x19da95 = r['read'](READSIZE);
        console[_0x17ec3f(0x1b2)](_0x17ec3f(0x1b4), _0x19da95 && _0x19da95[_0x17ec3f(0x1b5)], rs[_0x17ec3f(0x1b5)]);
    } while (_0x19da95 && _0x19da95['length'] === READSIZE);
    console[_0x17ec3f(0x1b2)](_0x17ec3f(0x1b6), _0x19da95 && _0x19da95[_0x17ec3f(0x1b5)], rs[_0x17ec3f(0x1b7)], rs[_0x17ec3f(0x1b5)]);
});
var endEmitted = ![];
function _0x22bb(_0x330176, _0x4f7a0b) {
    return _0x22bb = function (_0x2aae0d, _0x22bb9f) {
        _0x2aae0d = _0x2aae0d - 0x1a2;
        var _0x13882d = _0x2aae[_0x2aae0d];
        return _0x13882d;
    }, _0x22bb(_0x330176, _0x4f7a0b);
}
r['on']('end', function () {
    var _0x5a89af = _0x25ff99;
    endEmitted = !![], console['error'](_0x5a89af(0x1b8));
});
var pushes = 0x0;
function push() {
    var _0x5e5d92 = _0x25ff99;
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console[_0x5e5d92(0x1b2)](_0x5e5d92(0x1b9)), r[_0x5e5d92(0x1ba)](null);
    console[_0x5e5d92(0x1b2)](_0x5e5d92(0x1bb), pushes);
    if (r[_0x5e5d92(0x1ba)](new Buffer(PUSHSIZE)))
        setTimeout(push);
}
var ret = r[_0x25ff99(0x1bc)](0x0);
process['on'](_0x25ff99(0x1bd), function () {
    var _0x2218e2 = _0x25ff99;
    assert[_0x2218e2(0x1be)](pushes, PUSHCOUNT + 0x1), assert(endEmitted);
});
