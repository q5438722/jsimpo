var common = require(_0x57aa37(141)), assert = require(_0x57aa37(142)), READSIZE = 4945 + 182 * -52 + 4619 * 1, PUSHSIZE = 1674 + -531 + -1 * 1123, PUSHCOUNT = 5 * -1335 + 5393 + 7 * 326, HWM = -977 * -4 + 6814 + -46 * 232, Readable = require(_0x57aa37(143))[_0x57aa37(144)], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x57aa37(145)];
r[_0x57aa37(146)] = push, r['on']('readable', function () {
    var _0x355a2c = _0x57aa37, _0x1508ed = {
            'GUocR': _0x355a2c(147),
            'ntByw': _0x355a2c(148),
            'IDrjT': '<< after read()'
        };
    console[_0x355a2c(149)](_0x1508ed[_0x355a2c(150)]);
    do {
        console[_0x355a2c(149)](_0x1508ed[_0x355a2c(151)], READSIZE);
        var _0xd29a = r[_0x355a2c(152)](READSIZE);
        console['error']('  < %j (%d remain)', _0xd29a && _0xd29a[_0x355a2c(153)], rs[_0x355a2c(153)]);
    } while (_0xd29a && _0xd29a[_0x355a2c(153)] === READSIZE);
    console['error'](_0x1508ed[_0x355a2c(154)], _0xd29a && _0xd29a[_0x355a2c(153)], rs[_0x355a2c(155)], rs[_0x355a2c(153)]);
});
var endEmitted = ![];
r['on'](_0x57aa37(156), function () {
    var _0x39b2e6 = _0x57aa37;
    endEmitted = !![], console[_0x39b2e6(149)](_0x39b2e6(156));
});
var pushes = -59 * -7 + -5169 + 29 * 164;
function push() {
    var _0xc3bdbb = _0x57aa37, _0x2a1182 = {
            'yMjPO': _0xc3bdbb(157),
            'oFRnG': _0xc3bdbb(158),
            'pzQXw': function (_0x27f1ce, _0x1cdd8a) {
                return _0x27f1ce(_0x1cdd8a);
            }
        };
    if (pushes > PUSHCOUNT)
        return;
    if (pushes++ === PUSHCOUNT)
        return console[_0xc3bdbb(149)](_0x2a1182[_0xc3bdbb(159)]), r[_0xc3bdbb(160)](null);
    console[_0xc3bdbb(149)](_0x2a1182[_0xc3bdbb(161)], pushes);
    if (r[_0xc3bdbb(160)](new Buffer(PUSHSIZE)))
        _0x2a1182[_0xc3bdbb(162)](setTimeout, push);
}
function _0x56db(_0x21c774, _0x212508) {
    return _0x56db = function (_0x1dba60, _0x2725ab) {
        _0x1dba60 = _0x1dba60 - (-2665 + 4695 * -1 + 7492);
        var _0x202ea9 = _0xf21a[_0x1dba60];
        return _0x202ea9;
    }, _0x56db(_0x21c774, _0x212508);
}
var ret = r[_0x57aa37(152)](2309 + -2265 + 22 * -2);
process['on'](_0x57aa37(163), function () {
    var _0x53373c = _0x57aa37, _0x4c3a07 = {
            'rCyoP': function (_0x370529, _0x347f70) {
                return _0x370529 + _0x347f70;
            },
            'YdKOD': function (_0x4dcf56, _0x4e18f1) {
                return _0x4dcf56(_0x4e18f1);
            }
        };
    assert[_0x53373c(164)](pushes, _0x4c3a07[_0x53373c(165)](PUSHCOUNT, 9111 + -1 * -2423 + -11533 * 1)), _0x4c3a07[_0x53373c(166)](assert, endEmitted);
});