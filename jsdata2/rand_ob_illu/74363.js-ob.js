const _0x3341 = ['reduce', 'set ', 'JiSTJ', 'XLYHa', 'exports', '1891taDiJh', '93iCGdxq', '299InDAxo', '1398UtPBLu', '1099516wRcPTP', '833453cCuqTR', '1FZBegl', '157443TvGIfp', '364116IQdSQN', '420886hVLqTe', './../moment.js', '2013-05-25', 'set', 'second', 'minute', 'hour', 'date', 'isoWeek', 'week', 'month', 'quarter', 'year'];
const _0x490333 = _0x1090;

(function (_0x2916ad, _0x579445) {
    const _0x2f5020 = _0x1090;

    while (true) {
        try {
            const _0x165338 = parseInt(_0x2f5020(0x15e)) * -parseInt(_0x2f5020(0x15f)) + -parseInt(_0x2f5020(0x160)) * -parseInt(_0x2f5020(0x161)) + -parseInt(_0x2f5020(0x162)) + -parseInt(_0x2f5020(0x163)) * -parseInt(_0x2f5020(0x164)) + -parseInt(_0x2f5020(0x165)) + parseInt(_0x2f5020(0x166)) + parseInt(_0x2f5020(0x167));

            if (_0x165338 === _0x579445) break;else _0x2916ad.push(_0x2916ad.shift());
        } catch (_0x2c2b47) {
            _0x2916ad.push(_0x2916ad.shift());
        }
    }
})(_0x3341, 603635);
function _0x1090(_0x397504, _0x2cac04) {
    return _0x1090 = function (_0x3aa58e, _0xb4b43d) {
        _0x3aa58e = _0x3aa58e - 350;
        const _0x1e11d9 = _0x3341[_0x3aa58e];

        return _0x1e11d9;
    }, _0x1090(_0x397504, _0x2cac04);
}

const moment = require(_0x490333(0x168));

const base = moment(_0x490333(0x169));
const value = 2;

function createTest(_0xd9675e) {
    return {
        'fn': function () {
            const _0x4d537c = _0x1090;

            base[_0x4d537c(0x16a)](_0xd9675e, value);
        },
        'async': false
    };
}
const units = [_0x490333(0x16b), _0x490333(0x16c), _0x490333(0x16d), _0x490333(0x16e), 'day', _0x490333(0x16f), _0x490333(0x170), _0x490333(0x171), _0x490333(0x172), _0x490333(0x173)];

const tests = units[_0x490333(0x174)](function (_0x3c01a4, _0x357950) {
    const _0x16d518 = _0x490333;
    const _0x56d53a = {
        'SCLGz': function (_0x3dc3d5, _0x22d937) {
            return _0x3dc3d5 + _0x22d937;
        },
        'JiSTJ': _0x16d518(0x175),
        'XLYHa': function (_0x2a45b2, _0x208d64) {
            return _0x2a45b2(_0x208d64);
        }
    };

    return _0x3c01a4[_0x56d53a.SCLGz(_0x56d53a[_0x16d518(0x176)], _0x357950)] = _0x56d53a[_0x16d518(0x177)](createTest, _0x357950), _0x3c01a4;
}, {});

module[_0x490333(0x178)] = {
    'name': _0x490333(0x16a),
    'tests': tests
};
