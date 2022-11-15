var parse = require('../');
var test = require('tape');
test('nums', function (_0x4f5e8a) {
    var _0x229792 = '0|1|8|2|7|6|5|4|3'['split']('|'), _0x14fd2c = 0;
    while (!![]) {
        switch (_0x229792[_0x14fd2c++]) {
        case '0':
            var _0x4ddacd = parse([
                '-x',
                '1234',
                '-y',
                '5.67',
                '-z',
                '1e7',
                '-w',
                '10f',
                '--hex',
                '0xdeadbeef',
                '789'
            ]);
            continue;
        case '1':
            _0x4f5e8a['deepEqual'](_0x4ddacd, {
                'x': 1234,
                'y': 5.67,
                'z': 10000000,
                'w': '10f',
                'hex': 3735928559,
                '_': [789]
            });
            continue;
        case '2':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['y'], 'number');
            continue;
        case '3':
            _0x4f5e8a['end']();
            continue;
        case '4':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['_'][0], 'number');
            continue;
        case '5':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['hex'], 'number');
            continue;
        case '6':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['w'], 'string');
            continue;
        case '7':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['z'], 'number');
            continue;
        case '8':
            _0x4f5e8a['deepEqual'](typeof _0x4ddacd['x'], 'number');
            continue;
        }
        break;
    }
});
test('already a number', function (_0x5107a2) {
    var _0xbde928 = parse([
        '-x',
        1234,
        789
    ]);
    _0x5107a2['deepEqual'](_0xbde928, {
        'x': 1234,
        '_': [789]
    });
    _0x5107a2['deepEqual'](typeof _0xbde928['x'], 'number');
    _0x5107a2['deepEqual'](typeof _0xbde928['_'][0], 'number');
    _0x5107a2['end']();
});