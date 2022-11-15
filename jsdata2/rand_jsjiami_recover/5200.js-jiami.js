var assert = require('assert');
var util = require('../../');
suite('inspect');
test('util.inspect - test for sparse array', function () {
    var _0x4f5db7 = '0|4|5|2|3|1'['split']('|'), _0x55ef64 = 0;
    while (!![]) {
        switch (_0x4f5db7[_0x55ef64++]) {
        case '0':
            var _0x50ea44 = [
                'foo',
                'bar',
                'baz'
            ];
            continue;
        case '1':
            assert['equal'](util['inspect'](new Array(5)), '[ , , , ,  ]');
            continue;
        case '2':
            assert['equal'](util['inspect'](_0x50ea44), '[ \'foo\', , \'baz\' ]');
            continue;
        case '3':
            assert['equal'](util['inspect'](_0x50ea44, !![]), '[ \'foo\', , \'baz\', [length]: 3 ]');
            continue;
        case '4':
            assert['equal'](util['inspect'](_0x50ea44), '[ \'foo\', \'bar\', \'baz\' ]');
            continue;
        case '5':
            delete _0x50ea44[1];
            continue;
        }
        break;
    }
});
test('util.inspect -  exceptions should print the error message, not \'{}\'', function () {
    assert['equal'](util['inspect'](new Error()), '[Error]');
    assert['equal'](util['inspect'](new Error('FAIL')), '[Error: FAIL]');
    assert['equal'](util['inspect'](new TypeError('FAIL')), '[TypeError: FAIL]');
    assert['equal'](util['inspect'](new SyntaxError('FAIL')), '[SyntaxError: FAIL]');
});