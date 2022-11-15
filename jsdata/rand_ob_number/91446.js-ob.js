const path = require('path'), child = require('child_process');
it('Builds\x20cache-dir\x20with\x20minimal\x20config', _0x3c2d34 => {
    const _0x4c5518 = [
            require['resolve']('@babel/cli/bin/babel.js'),
            path['join'](__dirname, '..'),
            '--config-file',
            path['join'](__dirname, '.babelrc'),
            '--ignore',
            '**/__tests__'
        ], _0x1f2037 = child['spawn'](process['execPath'], _0x4c5518);
    let _0x5e93c4 = '', _0x206a0a = '';
    _0x1f2037['stderr']['on']('data', function (_0x9c34ef) {
        _0x5e93c4 += _0x9c34ef;
    }), _0x1f2037['stdout']['on']('data', function (_0x5392d1) {
        _0x206a0a += _0x5392d1;
    }), _0x1f2037['on']('close', function () {
        expect(_0x5e93c4)['toEqual'](''), expect(_0x206a0a)['not']['toEqual'](''), _0x3c2d34();
    });
}, 0x2289 + -0xeb1 * -0x8 + 0x22e1 * -0x1);
