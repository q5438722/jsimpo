const _0xf21a = ['length', 'IDrjT', 'needReadable', 'end', '   push(EOF)', '   push #%d', 'yMjPO', 'push', 'oFRnG', 'pzQXw', 'exit', 'equal', 'rCyoP', 'YdKOD', '564517iOJIvD', '10226nSuRwm', '5ZbJyuG', '389392reFYoO', '347541nFuaNV', '1uyYdpU', '213175lehdHj', '405938yJdDpi', '690994EyPvHW', '../common.js', 'assert', '../../readable', 'Readable', '_readableState', '_read', '>> readable', '  > read(%d)', 'error', 'GUocR', 'ntByw', 'read'];
const _0x57aa37 = _0x56db;

(function (_0x5262f0, _0x1c2258) {
    const _0x4fd2c8 = _0x56db;

    while (true) {
        try {
            const _0x58263a = parseInt(_0x4fd2c8(0x84)) + -parseInt(_0x4fd2c8(0x85)) * parseInt(_0x4fd2c8(0x86)) + -parseInt(_0x4fd2c8(0x87)) + parseInt(_0x4fd2c8(0x88)) + parseInt(_0x4fd2c8(0x89)) * parseInt(_0x4fd2c8(0x8a)) + parseInt(_0x4fd2c8(0x8b)) + -parseInt(_0x4fd2c8(0x8c));

            if (_0x58263a === _0x1c2258) break;else _0x5262f0.push(_0x5262f0.shift());
        } catch (_0x118048) {
            _0x5262f0.push(_0x5262f0.shift());
        }
    }
})(_0xf21a, 399655);

const common = require(_0x57aa37(0x8d));

const assert = require(_0x57aa37(0x8e));

const READSIZE = 100;
const PUSHSIZE = 20;
const PUSHCOUNT = 1000;
const HWM = 50;

const Readable = require(_0x57aa37(0x8f))[_0x57aa37(0x90)];

const r = new Readable({ 'highWaterMark': HWM });

const rs = r[_0x57aa37(0x91)];

r[_0x57aa37(0x92)] = push, r.on('readable', function () {
    const _0x355a2c = _0x57aa37;
    const _0x1508ed = {
        'GUocR': _0x355a2c(0x93),
        'ntByw': _0x355a2c(0x94),
        'IDrjT': '<< after read()'
    };

    console[_0x355a2c(0x95)](_0x1508ed[_0x355a2c(0x96)]);
    do {
        console[_0x355a2c(0x95)](_0x1508ed[_0x355a2c(0x97)], READSIZE);

        const _0xd29a = r[_0x355a2c(0x98)](READSIZE);

        console.error('  < %j (%d remain)', _0xd29a && _0xd29a[_0x355a2c(0x99)], rs[_0x355a2c(0x99)]);
    } while (_0xd29a && _0xd29a[_0x355a2c(0x99)] === READSIZE);
    console.error(_0x1508ed[_0x355a2c(0x9a)], _0xd29a && _0xd29a[_0x355a2c(0x99)], rs[_0x355a2c(0x9b)], rs[_0x355a2c(0x99)]);
});
var endEmitted = false;

r.on(_0x57aa37(0x9c), function () {
    const _0x39b2e6 = _0x57aa37;

    endEmitted = true, console[_0x39b2e6(0x95)](_0x39b2e6(0x9c));
});
var pushes = 0;

function push() {
    const _0xc3bdbb = _0x57aa37;
    const _0x2a1182 = {
        'yMjPO': _0xc3bdbb(0x9d),
        'oFRnG': _0xc3bdbb(0x9e),
        'pzQXw': function (_0x27f1ce, _0x1cdd8a) {
            return _0x27f1ce(_0x1cdd8a);
        }
    };

    if (pushes > PUSHCOUNT) return;
    if (pushes++ === PUSHCOUNT) return console[_0xc3bdbb(0x95)](_0x2a1182[_0xc3bdbb(0x9f)]), r[_0xc3bdbb(0xa0)](null);
    console[_0xc3bdbb(0x95)](_0x2a1182[_0xc3bdbb(0xa1)], pushes);
    if (r[_0xc3bdbb(0xa0)](new Buffer(PUSHSIZE))) _0x2a1182[_0xc3bdbb(0xa2)](setTimeout, push);
}
function _0x56db(_0x21c774, _0x212508) {
    return _0x56db = function (_0x1dba60, _0x2725ab) {
        _0x1dba60 = _0x1dba60 - 132;
        const _0x202ea9 = _0xf21a[_0x1dba60];

        return _0x202ea9;
    }, _0x56db(_0x21c774, _0x212508);
}

const ret = r[_0x57aa37(0x98)](0);

process.on(_0x57aa37(0xa3), function () {
    const _0x53373c = _0x57aa37;
    const _0x4c3a07 = {
        'rCyoP': function (_0x370529, _0x347f70) {
            return _0x370529 + _0x347f70;
        },
        'YdKOD': function (_0x4dcf56, _0x4e18f1) {
            return _0x4dcf56(_0x4e18f1);
        }
    };

    assert[_0x53373c(0xa4)](pushes, _0x4c3a07[_0x53373c(0xa5)](PUSHCOUNT, 1)), _0x4c3a07[_0x53373c(0xa6)](assert, endEmitted);
});
