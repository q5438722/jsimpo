'use strict';
const common = require('../common');
const assert = require('assert');
if (process['argv'][2] !== 'child') {
    const spawn = require('child_process')['spawn'];
    const child = spawn(process['execPath'], [
        __filename,
        'child'
    ], { 'stdio': 'pipe' });
    const timer = setTimeout(function () {
        throw new Error('child is hung');
    }, common['platformTimeout'](3000));
    child['on']('exit', common['mustCall'](function (_0x3c8504) {
        assert['strictEqual'](_0x3c8504, 0);
        clearTimeout(timer);
    }));
} else {
    const domain = require('domain');
    const d = domain['create']();
    d['on']('error', function () {
        var _0x49f723 = '3|2|5|0|4|1'['split']('|'), _0x3fbde0 = 0;
        while (!![]) {
            switch (_0x49f723[_0x3fbde0++]) {
            case '0':
                console['log']('d');
                continue;
            case '1':
                f();
                continue;
            case '2':
                console['log']('b');
                continue;
            case '3':
                console['log']('a');
                continue;
            case '4':
                console['log']('e');
                continue;
            case '5':
                console['log']('c');
                continue;
            }
            break;
        }
    });
    function f() {
        process['nextTick'](function () {
            if ('SfhOV' === 'SfhOV') {
                d['run'](function () {
                    if ('CPgww' !== 'JVoxn') {
                        throw new Error('x');
                    } else {
                        process['nextTick'](function () {
                            d['run'](function () {
                                throw new Error('x');
                            });
                        });
                    }
                });
            } else {
                throw new Error('x');
            }
        });
    }
    f();
    setImmediate(function () {
        console['error']('broke in!');
        process['exit'](0);
    });
}