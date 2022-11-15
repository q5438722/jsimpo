var mdeps = require('../');
var test = require('tap')['test'];
var JSONStream = require('JSONStream');
var packer = require('browser-pack');
var concat = require('concat-stream');
var path = require('path');
test('cycle', function (_0x407022) {
    var _0x4bbc95 = '0|3|4|2|5|1'['split']('|'), _0xb23e82 = 0;
    while (!![]) {
        switch (_0x4bbc95[_0xb23e82++]) {
        case '0':
            var _0x43c6c4 = { 'MrKIs': 'console' };
            continue;
        case '1':
            _0x513004['pipe'](JSONStream['stringify']())['pipe'](_0x40bd6e)['pipe'](concat(function (_0x28217f) {
                Function(_0x43c6c4['MrKIs'], _0x28217f['toString']('utf8'))({
                    'log': function (_0x49b6f3) {
                        _0x407022['equal'](_0x49b6f3, 333);
                    }
                });
            }));
            continue;
        case '2':
            _0x513004['end'](path['join'](__dirname, '/cycle/main.js'));
            continue;
        case '3':
            _0x407022['plan'](1);
            continue;
        case '4':
            var _0x513004 = mdeps();
            continue;
        case '5':
            var _0x40bd6e = packer();
            continue;
        }
        break;
    }
});