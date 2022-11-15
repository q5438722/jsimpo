const playwright = require('playwright');
const path = require('path');
(async () => {
    const _0x411818 = await playwright['_electron']['launch']({ 'args': [path['join'](__dirname, 'electron-app.js')] });
    const _0x3fc917 = await _0x411818['evaluate'](async ({app}) => app['getAppPath']());
    await _0x411818['close']();
    if (_0x3fc917 !== __dirname)
        throw new Error('Malformed app path: got "' + _0x3fc917 + '", expected "' + __dirname + '"');
    console['log']('playwright._electron SUCCESS');
})()['catch'](_0x539436 => {
    console['error'](_0x539436);
    process['exit'](1);
});