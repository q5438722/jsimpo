const playwright = require('playwright'), path = require('path');
(async () => {
    const _0x534e82 = await playwright['_electron']['launch']({ 'args': [path['join'](__dirname, 'electron-app.js')] }), _0x3da8d5 = await _0x534e82['evaluate'](async ({app: _0x2db3a9}) => _0x2db3a9['getAppPath']());
    await _0x534e82['close']();
    if (_0x3da8d5 !== __dirname)
        throw new Error('Malformed\x20app\x20path:\x20got\x20\x22' + _0x3da8d5 + '\x22,\x20expected\x20\x22' + __dirname + '\x22');
    console['log']('playwright._electron\x20SUCCESS');
})()['catch'](_0x443e18 => {
    console['error'](_0x443e18), process['exit'](0x1 * -0x175 + -0x72f * 0x3 + 0x1703);
});
