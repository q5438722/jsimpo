module['exports'] = function () {
    console['log']('Page B');
    require['ensure']([], () => {
        const _0x13263f = require('./pageC');
        _0x13263f();
    });
};