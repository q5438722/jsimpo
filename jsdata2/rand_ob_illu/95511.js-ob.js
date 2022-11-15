const _0x2850 = ['equal', 'KMIyv', '7KEzLoG', '15351tMzwdY', '13186eRPtKS', '715275QywsDD', '530327frEXsk', '161PgcVuG', '2891PiSZeR', '3ovqILl', '305917TBSQrS', '37003tsWqEg', '59uFIGBC', '../common.js', 'assert', 'Readable', '_readableState', '_read', 'readable', '  < %j (%d remain)', 'error', '>> readable', 'xeagN', 'read', 'length', 'JuOZS', '<< after read()', 'needReadable', 'end', 'Svzfq', '   push #%d', 'hEHoB', 'MSXoG', 'SOdEg', 'push', 'GjCOv', 'TJHoO'];
const _0x12e0a1 = _0x47e7;

(function (_0x216cc5, _0x16d9ed) {
    const _0x48c97d = _0x47e7;

    while (true) {
        try {
            const _0xbd4371 = -parseInt(_0x48c97d(0x188)) * parseInt(_0x48c97d(0x189)) + parseInt(_0x48c97d(0x18a)) + -parseInt(_0x48c97d(0x18b)) + parseInt(_0x48c97d(0x18c)) + parseInt(_0x48c97d(0x18d)) * -parseInt(_0x48c97d(0x18e)) + parseInt(_0x48c97d(0x18f)) * -parseInt(_0x48c97d(0x190)) + -parseInt(_0x48c97d(0x191)) * -parseInt(_0x48c97d(0x192));

            if (_0xbd4371 === _0x16d9ed) break;else _0x216cc5.push(_0x216cc5.shift());
        } catch (_0x37b0f6) {
            _0x216cc5.push(_0x216cc5.shift());
        }
    }
})(_0x2850, 520756);

const common = require(_0x12e0a1(0x193));

const assert = require(_0x12e0a1(0x194));

const READSIZE = 100;
const PUSHSIZE = 20;
const PUSHCOUNT = 1000;
const HWM = 50;

const Readable = require('../../readable')[_0x12e0a1(0x195)];

const r = new Readable({ 'highWaterMark': HWM });

const rs = r[_0x12e0a1(0x196)];

r[_0x12e0a1(0x197)] = push, r.on(_0x12e0a1(0x198), function () {
    const _0x2a4f9e = _0x12e0a1;
    const _0x452719 = {
        'xeagN': '  > read(%d)',
        'xOcep': _0x2a4f9e(0x199),
        'JuOZS': function (_0x16e05b, _0x46a6aa) {
            return _0x16e05b === _0x46a6aa;
        }
    };

    console[_0x2a4f9e(0x19a)](_0x2a4f9e(0x19b));
    do {
        console[_0x2a4f9e(0x19a)](_0x452719[_0x2a4f9e(0x19c)], READSIZE);

        const _0x527a3d = r[_0x2a4f9e(0x19d)](READSIZE);

        console[_0x2a4f9e(0x19a)](_0x452719.xOcep, _0x527a3d && _0x527a3d.length, rs[_0x2a4f9e(0x19e)]);
    } while (_0x527a3d && _0x452719[_0x2a4f9e(0x19f)](_0x527a3d[_0x2a4f9e(0x19e)], READSIZE));
    console[_0x2a4f9e(0x19a)](_0x2a4f9e(0x1a0), _0x527a3d && _0x527a3d[_0x2a4f9e(0x19e)], rs[_0x2a4f9e(0x1a1)], rs[_0x2a4f9e(0x19e)]);
});
var endEmitted = false;

function _0x47e7(_0xfa2ba9, _0x19feca) {
    return _0x47e7 = function (_0x4e8127, _0x11df5a) {
        _0x4e8127 = _0x4e8127 - 392;
        const _0x4d080 = _0x2850[_0x4e8127];

        return _0x4d080;
    }, _0x47e7(_0xfa2ba9, _0x19feca);
}
r.on(_0x12e0a1(0x1a2), function () {
    const _0x2555ef = _0x12e0a1;
    const _0x19b718 = { 'Svzfq': _0x2555ef(0x1a2) };

    endEmitted = true, console[_0x2555ef(0x19a)](_0x19b718[_0x2555ef(0x1a3)]);
});
var pushes = 0;

function push() {
    const _0x30db51 = _0x12e0a1;
    const _0x1cccdb = {
        'hEHoB': function (_0xcfce06, _0x22064a) {
            return _0xcfce06 > _0x22064a;
        },
        'MSXoG': function (_0x3e2ebe, _0x322bde) {
            return _0x3e2ebe === _0x322bde;
        },
        'SOdEg': '   push(EOF)',
        'GjCOv': _0x30db51(0x1a4),
        'TJHoO': function (_0x1f8e42, _0xb8b1b1) {
            return _0x1f8e42(_0xb8b1b1);
        }
    };

    if (_0x1cccdb[_0x30db51(0x1a5)](pushes, PUSHCOUNT)) return;
    if (_0x1cccdb[_0x30db51(0x1a6)](pushes++, PUSHCOUNT)) return console[_0x30db51(0x19a)](_0x1cccdb[_0x30db51(0x1a7)]), r[_0x30db51(0x1a8)](null);
    console[_0x30db51(0x19a)](_0x1cccdb[_0x30db51(0x1a9)], pushes);
    if (r[_0x30db51(0x1a8)](new Buffer(PUSHSIZE))) _0x1cccdb[_0x30db51(0x1aa)](setTimeout, push);
}

const ret = r[_0x12e0a1(0x19d)](0);

process.on('exit', function () {
    const _0x111e9e = _0x12e0a1;
    const _0xecf94f = {
        'KMIyv': function (_0x4d3f4c, _0x5296b5) {
            return _0x4d3f4c + _0x5296b5;
        }
    };

    assert[_0x111e9e(0x1ab)](pushes, _0xecf94f[_0x111e9e(0x1ac)](PUSHCOUNT, 1)), assert(endEmitted);
});
