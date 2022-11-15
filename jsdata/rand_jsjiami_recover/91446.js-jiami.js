const path = require('path');
const child = require('child_process');
it('Builds cache-dir with minimal config', _0x227f94 => {
    const _0x5c61d0 = [
        require['resolve']('@babel/cli/bin/babel.js'),
        path['join'](__dirname, '..'),
        '--config-file',
        path['join'](__dirname, '.babelrc'),
        '--ignore',
        '**/__tests__'
    ];
    const _0x2c8580 = child['spawn'](process['execPath'], _0x5c61d0);
    let _0x4369e2 = '';
    let _0x17b4db = '';
    _0x2c8580['stderr']['on']('data', function (_0xa56a28) {
        _0x4369e2 += _0xa56a28;
    });
    _0x2c8580['stdout']['on']('data', function (_0x5d82cf) {
        _0x17b4db += _0x5d82cf;
    });
    _0x2c8580['on']('close', function () {
        expect(_0x4369e2)['toEqual']('');
        expect(_0x17b4db)['not']['toEqual']('');
        _0x227f94();
    });
}, 30000);