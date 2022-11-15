test(function () {
    var _0x2db5a7 = '7|5|0|6|2|4|3|1'['split']('|'), _0x5e4b25 = 0;
    while (!![]) {
        switch (_0x2db5a7[_0x5e4b25++]) {
        case '0':
            assert_equals(_0x3c375f + '', 'a=B&c=d');
            continue;
        case '1':
            assert_equals(_0x3c375f + '', 'a=B&c=d&e=f');
            continue;
        case '2':
            _0x3c375f['set']('a', 'B');
            continue;
        case '3':
            _0x3c375f['set']('e', 'f');
            continue;
        case '4':
            assert_equals(_0x3c375f + '', 'a=B&c=d');
            continue;
        case '5':
            _0x3c375f['set']('a', 'B');
            continue;
        case '6':
            _0x3c375f = new URLSearchParams('a=b&c=d&a=e');
            continue;
        case '7':
            var _0x3c375f = new URLSearchParams('a=b&c=d');
            continue;
        }
        break;
    }
}, 'Set basics');
test(function () {
    var _0x3cdca3 = '4|6|5|2|0|3|7|8|1'['split']('|'), _0x31add3 = 0;
    while (!![]) {
        switch (_0x3cdca3[_0x31add3++]) {
        case '0':
            assert_true(_0x12cf30['has']('a'), 'Search params object has name "a"');
            continue;
        case '1':
            assert_equals(_0x12cf30['get']('a'), '4', 'Search params object has name "a" with value "4"');
            continue;
        case '2':
            _0x12cf30['set']('first', 4);
            continue;
        case '3':
            assert_equals(_0x12cf30['get']('a'), '1', 'Search params object has name "a" with value "1"');
            continue;
        case '4':
            var _0x12cf30 = new URLSearchParams('a=1&a=2&a=3');
            continue;
        case '5':
            assert_equals(_0x12cf30['get']('a'), '1', 'Search params object has name "a" with value "1"');
            continue;
        case '6':
            assert_true(_0x12cf30['has']('a'), 'Search params object has name "a"');
            continue;
        case '7':
            _0x12cf30['set']('a', 4);
            continue;
        case '8':
            assert_true(_0x12cf30['has']('a'), 'Search params object has name "a"');
            continue;
        }
        break;
    }
}, 'URLSearchParams.set');