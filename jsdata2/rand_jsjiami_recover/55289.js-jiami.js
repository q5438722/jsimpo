'use strict';
const common = require('../common');
const http = require('http');
{
    let serverRes;
    const server = http['Server'](function (_0x36d65e, _0x11da60) {
        _0x11da60['write']('Part of my res.');
        serverRes = _0x11da60;
    });
    server['listen'](0, common['mustCall'](function () {
        http['get']({
            'port': this['address']()['port'],
            'headers': { 'connection': 'keep-alive' }
        }, common['mustCall'](function (_0x27fe68) {
            server['close']();
            serverRes['destroy']();
            _0x27fe68['on']('aborted', common['mustCall']());
            _0x27fe68['on']('error', common['expectsError']({ 'code': 'ECONNRESET' }));
        }));
    }));
}
{
    let serverRes;
    const server = http['Server'](function (_0x2de6cd, _0x3e9274) {
        _0x3e9274['write']('Part of my res.');
        serverRes = _0x3e9274;
    });
    server['listen'](0, common['mustCall'](function () {
        http['get']({
            'port': this['address']()['port'],
            'headers': { 'connection': 'keep-alive' }
        }, common['mustCall'](function (_0x5a0cc3) {
            var _0x26046e = { 'ZGBsa': 'aborted' };
            if ('kcnZi' !== 'ypfjm') {
                server['close']();
                serverRes['destroy']();
                _0x5a0cc3['on']('aborted', common['mustCall']());
            } else {
                server['close']();
                serverRes['destroy']();
                _0x5a0cc3['on'](_0x26046e['ZGBsa'], common['mustCall']());
            }
        }));
    }));
}