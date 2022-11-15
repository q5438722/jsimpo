var _0x2d46 = [
    'three',
    'length',
    'should\x20only\x20add\x20values\x20to\x20own,\x20not\x20inherited,\x20properties',
    'hasOwnProperty',
    'constructor',
    'should\x20work\x20with\x20a\x20number\x20for\x20`iteratee`',
    'should\x20work\x20in\x20a\x20lazy\x20sequence',
    'range',
    'concat',
    'filter',
    'take',
    'value',
    '846440lQEcbd',
    '311511NUMJZn',
    '1719HvIcos',
    '227884ZrDRAf',
    '206541ujroLl',
    '482205oEgQXw',
    '1454973tvVKUt',
    'countBy',
    'should\x20transform\x20keys\x20by\x20`iteratee`',
    'floor',
    'should\x20use\x20`_.identity`\x20when\x20`iteratee`\x20is\x20nullish',
    'map',
    'constant',
    'deepStrictEqual',
    'should\x20work\x20with\x20`_.property`\x20shorthands',
    'one',
    'two'
];
var _0x464f46 = _0x53d3;
(function (_0x17748e, _0x50fd3c) {
    var _0x572192 = _0x53d3;
    while (!![]) {
        try {
            var _0x5023fd = -parseInt(_0x572192(0x12a)) + parseInt(_0x572192(0x12b)) + -parseInt(_0x572192(0x12c)) + parseInt(_0x572192(0x12d)) + -parseInt(_0x572192(0x12e)) + -parseInt(_0x572192(0x12f)) + parseInt(_0x572192(0x130));
            if (_0x5023fd === _0x50fd3c)
                break;
            else
                _0x17748e['push'](_0x17748e['shift']());
        } catch (_0x3b007d) {
            _0x17748e['push'](_0x17748e['shift']());
        }
    }
}(_0x2d46, 0x6faf7));
import _0x45b699 from 'assert';
function _0x53d3(_0x4113d0, _0x4887cd) {
    return _0x53d3 = function (_0x2d461b, _0x53d3d6) {
        _0x2d461b = _0x2d461b - 0x12a;
        var _0x315e87 = _0x2d46[_0x2d461b];
        return _0x315e87;
    }, _0x53d3(_0x4113d0, _0x4887cd);
}
import _0x143806 from 'lodash';
import { LARGE_ARRAY_SIZE } from './utils.js';
import _0x448178 from '../countBy.js';
describe(_0x464f46(0x131), function () {
    var _0x22984b = _0x464f46, _0x4d65e4 = [
            6.1,
            4.2,
            6.3
        ];
    it(_0x22984b(0x132), function () {
        var _0x3d6921 = _0x22984b, _0x383f18 = _0x448178(_0x4d65e4, Math[_0x3d6921(0x133)]);
        _0x45b699['deepStrictEqual'](_0x383f18, {
            '4': 0x1,
            '6': 0x2
        });
    }), it(_0x22984b(0x134), function () {
        var _0x52bb01 = _0x22984b, _0x237e5c = [
                0x4,
                0x6,
                0x6
            ], _0x59bd77 = [
                ,
                null,
                undefined
            ], _0x518a08 = _0x143806[_0x52bb01(0x135)](_0x59bd77, _0x143806[_0x52bb01(0x136)]({
                '4': 0x1,
                '6': 0x2
            })), _0x4842ac = _0x143806[_0x52bb01(0x135)](_0x59bd77, function (_0x22699b, _0xc47cc3) {
                return _0xc47cc3 ? _0x448178(_0x237e5c, _0x22699b) : _0x448178(_0x237e5c);
            });
        _0x45b699[_0x52bb01(0x137)](_0x4842ac, _0x518a08);
    }), it(_0x22984b(0x138), function () {
        var _0x4c7ae1 = _0x22984b, _0x265492 = _0x448178([
                _0x4c7ae1(0x139),
                _0x4c7ae1(0x13a),
                _0x4c7ae1(0x13b)
            ], _0x4c7ae1(0x13c));
        _0x45b699['deepStrictEqual'](_0x265492, {
            '3': 0x2,
            '5': 0x1
        });
    }), it(_0x22984b(0x13d), function () {
        var _0x17d5e5 = _0x22984b, _0x3ea7b1 = _0x448178(_0x4d65e4, function (_0xd768c6) {
                var _0x3e9316 = _0x53d3;
                return Math[_0x3e9316(0x133)](_0xd768c6) > 0x4 ? _0x3e9316(0x13e) : 'constructor';
            });
        _0x45b699[_0x17d5e5(0x137)](_0x3ea7b1[_0x17d5e5(0x13f)], 0x1), _0x45b699['deepStrictEqual'](_0x3ea7b1['hasOwnProperty'], 0x2);
    }), it(_0x22984b(0x140), function () {
        var _0x29757c = _0x22984b, _0x4a8b92 = [
                [
                    0x1,
                    'a'
                ],
                [
                    0x2,
                    'a'
                ],
                [
                    0x2,
                    'b'
                ]
            ];
        _0x45b699['deepStrictEqual'](_0x448178(_0x4a8b92, 0x0), {
            '1': 0x1,
            '2': 0x2
        }), _0x45b699[_0x29757c(0x137)](_0x448178(_0x4a8b92, 0x1), {
            'a': 0x2,
            'b': 0x1
        });
    }), it('should\x20work\x20with\x20an\x20object\x20for\x20`collection`', function () {
        var _0x27fba9 = _0x22984b, _0x11f95e = _0x448178({
                'a': 6.1,
                'b': 4.2,
                'c': 6.3
            }, Math[_0x27fba9(0x133)]);
        _0x45b699[_0x27fba9(0x137)](_0x11f95e, {
            '4': 0x1,
            '6': 0x2
        });
    }), it(_0x22984b(0x141), function () {
        var _0x20790a = _0x22984b, _0x5ab8cd = _0x143806[_0x20790a(0x142)](LARGE_ARRAY_SIZE)[_0x20790a(0x143)](_0x143806[_0x20790a(0x142)](Math['floor'](LARGE_ARRAY_SIZE / 0x2), LARGE_ARRAY_SIZE), _0x143806['range'](Math[_0x20790a(0x133)](LARGE_ARRAY_SIZE / 1.5), LARGE_ARRAY_SIZE)), _0xae2fc4 = _(_0x5ab8cd)[_0x20790a(0x131)]()[_0x20790a(0x135)](square)[_0x20790a(0x144)](isEven)[_0x20790a(0x145)]()[_0x20790a(0x146)]();
        _0x45b699['deepEqual'](_0xae2fc4, _[_0x20790a(0x145)](_['filter'](_['map'](_0x448178(_0x5ab8cd), square), isEven)));
    });
});
