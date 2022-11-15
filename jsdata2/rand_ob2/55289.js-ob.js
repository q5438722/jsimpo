'use strict';
const _0x26f2 = [
    'destroy',
    'aborted',
    'error',
    'expectsError',
    'ECONNRESET',
    'Server',
    'Part\x20of\x20my\x20res.',
    'get',
    '1016054SwNjRq',
    '418694JxOdfc',
    '3gLtAZx',
    '277946evOZcb',
    '208074bOfDxa',
    '129463oALepR',
    '1rJOsAa',
    '210124nJLWrk',
    '3191aeRxss',
    '711nINpyP',
    '../common',
    'http',
    'write',
    'listen',
    'mustCall',
    'address',
    'port',
    'keep-alive',
    'close'
];
const _0x5d55ef = _0x36cc;
function _0x36cc(_0x34a192, _0x614570) {
    return _0x36cc = function (_0x26f250, _0x36cc9a) {
        _0x26f250 = _0x26f250 - 0x6a;
        let _0x364719 = _0x26f2[_0x26f250];
        return _0x364719;
    }, _0x36cc(_0x34a192, _0x614570);
}
(function (_0x5bb81e, _0x1114f4) {
    const _0x130e72 = _0x36cc;
    while (!![]) {
        try {
            const _0x46c4fd = -parseInt(_0x130e72(0x6a)) + parseInt(_0x130e72(0x6b)) + -parseInt(_0x130e72(0x6c)) * parseInt(_0x130e72(0x6d)) + -parseInt(_0x130e72(0x6e)) + -parseInt(_0x130e72(0x6f)) * parseInt(_0x130e72(0x70)) + parseInt(_0x130e72(0x71)) + -parseInt(_0x130e72(0x72)) * -parseInt(_0x130e72(0x73));
            if (_0x46c4fd === _0x1114f4)
                break;
            else
                _0x5bb81e['push'](_0x5bb81e['shift']());
        } catch (_0x4251e7) {
            _0x5bb81e['push'](_0x5bb81e['shift']());
        }
    }
}(_0x26f2, 0xad62e));
const common = require(_0x5d55ef(0x74)), http = require(_0x5d55ef(0x75));
{
    let serverRes;
    const server = http['Server'](function (_0x5bcbf2, _0x12d457) {
        const _0x44dbc7 = _0x5d55ef;
        _0x12d457[_0x44dbc7(0x76)]('Part\x20of\x20my\x20res.'), serverRes = _0x12d457;
    });
    server[_0x5d55ef(0x77)](0x0, common[_0x5d55ef(0x78)](function () {
        const _0x1241a9 = _0x5d55ef;
        http['get']({
            'port': this[_0x1241a9(0x79)]()[_0x1241a9(0x7a)],
            'headers': { 'connection': _0x1241a9(0x7b) }
        }, common[_0x1241a9(0x78)](function (_0x12d569) {
            const _0x2daa40 = _0x1241a9;
            server[_0x2daa40(0x7c)](), serverRes[_0x2daa40(0x7d)](), _0x12d569['on'](_0x2daa40(0x7e), common['mustCall']()), _0x12d569['on'](_0x2daa40(0x7f), common[_0x2daa40(0x80)]({ 'code': _0x2daa40(0x81) }));
        }));
    }));
}
{
    let serverRes;
    const server = http[_0x5d55ef(0x82)](function (_0x103eb4, _0x3bc591) {
        const _0x4f869c = _0x5d55ef;
        _0x3bc591[_0x4f869c(0x76)](_0x4f869c(0x83)), serverRes = _0x3bc591;
    });
    server[_0x5d55ef(0x77)](0x0, common['mustCall'](function () {
        const _0x555d99 = _0x5d55ef;
        http[_0x555d99(0x84)]({
            'port': this[_0x555d99(0x79)]()[_0x555d99(0x7a)],
            'headers': { 'connection': _0x555d99(0x7b) }
        }, common[_0x555d99(0x78)](function (_0x1f7421) {
            const _0x1673d0 = _0x555d99;
            server[_0x1673d0(0x7c)](), serverRes['destroy'](), _0x1f7421['on']('aborted', common[_0x1673d0(0x78)]());
        }));
    }));
}
