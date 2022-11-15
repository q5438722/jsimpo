var common = require(_0x12e0a1(403)), assert = require(_0x12e0a1(404)), READSIZE = 128 * 25 + -9612 * 1 + 6512, PUSHSIZE = -2630 * 2 + -9 * 607 + 10743, PUSHCOUNT = -2143 * 1 + -4757 + 100 * 79, HWM = -2967 + 53 * 111 + -2866, Readable = require('../../readable')[_0x12e0a1(405)], r = new Readable({ 'highWaterMark': HWM }), rs = r[_0x12e0a1(406)];
r[_0x12e0a1(407)] = push, r['on'](_0x12e0a1(408), function () {
    var _0x2a4f9e = _0x12e0a1, _0x452719 = {
            'xeagN': '  > read(%d)',
            'xOcep': _0x2a4f9e(409),
            'JuOZS': function (_0x16e05b, _0x46a6aa) {
                return _0x16e05b === _0x46a6aa;
            }
        };
    console[_0x2a4f9e(410)](_0x2a4f9e(411));
    do {
        console[_0x2a4f9e(410)](_0x452719[_0x2a4f9e(412)], READSIZE);
        var _0x527a3d = r[_0x2a4f9e(413)](READSIZE);
        console[_0x2a4f9e(410)](_0x452719['xOcep'], _0x527a3d && _0x527a3d['length'], rs[_0x2a4f9e(414)]);
    } while (_0x527a3d && _0x452719[_0x2a4f9e(415)](_0x527a3d[_0x2a4f9e(414)], READSIZE));
    console[_0x2a4f9e(410)](_0x2a4f9e(416), _0x527a3d && _0x527a3d[_0x2a4f9e(414)], rs[_0x2a4f9e(417)], rs[_0x2a4f9e(414)]);
});
var endEmitted = ![];
function _0x47e7(_0xfa2ba9, _0x19feca) {
    return _0x47e7 = function (_0x4e8127, _0x11df5a) {
        _0x4e8127 = _0x4e8127 - (-190 + 3290 * 2 + -5998);
        var _0x4d080 = _0x2850[_0x4e8127];
        return _0x4d080;
    }, _0x47e7(_0xfa2ba9, _0x19feca);
}
r['on'](_0x12e0a1(418), function () {
    var _0x2555ef = _0x12e0a1, _0x19b718 = { 'Svzfq': _0x2555ef(418) };
    endEmitted = !![], console[_0x2555ef(410)](_0x19b718[_0x2555ef(419)]);
});
var pushes = 15 * 341 + 1852 + -6967;
function push() {
    var _0x30db51 = _0x12e0a1, _0x1cccdb = {
            'hEHoB': function (_0xcfce06, _0x22064a) {
                return _0xcfce06 > _0x22064a;
            },
            'MSXoG': function (_0x3e2ebe, _0x322bde) {
                return _0x3e2ebe === _0x322bde;
            },
            'SOdEg': '   push(EOF)',
            'GjCOv': _0x30db51(420),
            'TJHoO': function (_0x1f8e42, _0xb8b1b1) {
                return _0x1f8e42(_0xb8b1b1);
            }
        };
    if (_0x1cccdb[_0x30db51(421)](pushes, PUSHCOUNT))
        return;
    if (_0x1cccdb[_0x30db51(422)](pushes++, PUSHCOUNT))
        return console[_0x30db51(410)](_0x1cccdb[_0x30db51(423)]), r[_0x30db51(424)](null);
    console[_0x30db51(410)](_0x1cccdb[_0x30db51(425)], pushes);
    if (r[_0x30db51(424)](new Buffer(PUSHSIZE)))
        _0x1cccdb[_0x30db51(426)](setTimeout, push);
}
var ret = r[_0x12e0a1(413)](-2009 * -4 + -8 * -802 + 4 * -3613);
process['on']('exit', function () {
    var _0x111e9e = _0x12e0a1, _0xecf94f = {
            'KMIyv': function (_0x4d3f4c, _0x5296b5) {
                return _0x4d3f4c + _0x5296b5;
            }
        };
    assert[_0x111e9e(427)](pushes, _0xecf94f[_0x111e9e(428)](PUSHCOUNT, -1 * -1259 + -1 * 5791 + -3 * -1511)), assert(endEmitted);
});