const playwright = require('playwright'), path = require('path');
(async () => {
    const _0x3290e1 = {
            'JepSd': 'electron-app.js',
            'OKQIm': function (_0x3a6137, _0x577689) {
                return _0x3a6137 !== _0x577689;
            }
        }, _0x5ecaeb = await playwright['_electron']['launch']({ 'args': [path['join'](__dirname, _0x3290e1['JepSd'])] }), _0x44894c = await _0x5ecaeb['evaluate'](async ({app: _0x1b82ec}) => _0x1b82ec['getAppPath']());
    await _0x5ecaeb['close']();
    if (_0x3290e1['OKQIm'](_0x44894c, __dirname))
        throw new Error('Malformed\x20app\x20path:\x20got\x20\x22' + _0x44894c + '\x22,\x20expected\x20\x22' + __dirname + '\x22');
    console['log']('playwright._electron\x20SUCCESS');
})()['catch'](_0x30e793 => {
    console['error'](_0x30e793), process['exit'](0x1);
});
