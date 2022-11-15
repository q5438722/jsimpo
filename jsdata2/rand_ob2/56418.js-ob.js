'use strict';
const _0x2039 = [
    'log',
    'connect\x20unauthorized',
    'connect',
    'port',
    'localhost',
    'authorized',
    'data',
    'mustCall',
    'data\x20failed\x20to\x20echo!',
    'session',
    'mustNotCall',
    'end',
    'reject\x20unauthorized',
    'address',
    'error',
    'reject\x20unauthorized\x20undefined',
    'connect\x20authorized',
    '...\x20authorized',
    'strictEqual',
    'toString',
    'close',
    '916736NuayLS',
    '340615ZjdACv',
    '657061ldWWJO',
    '6718yCLzGw',
    '93GtWwwp',
    '685723ewqOgb',
    '8301MJarch',
    '12YBalmh',
    '2625015GlVjJC',
    '1DQbCpw',
    'hasCrypto',
    'skip',
    'assert',
    'readKey',
    'rsa_private.pem',
    'createServer',
    'pipe',
    'listen'
];
function _0xbd1b(_0x20ed7b, _0xef2e97) {
    return _0xbd1b = function (_0x203916, _0xbd1bab) {
        _0x203916 = _0x203916 - 0xed;
        let _0x57775b = _0x2039[_0x203916];
        return _0x57775b;
    }, _0xbd1b(_0x20ed7b, _0xef2e97);
}
const _0x2276d3 = _0xbd1b;
(function (_0x525a6c, _0x27cee5) {
    const _0x208ca4 = _0xbd1b;
    while (!![]) {
        try {
            const _0x3e869a = -parseInt(_0x208ca4(0xed)) + -parseInt(_0x208ca4(0xee)) + -parseInt(_0x208ca4(0xef)) + -parseInt(_0x208ca4(0xf0)) * -parseInt(_0x208ca4(0xf1)) + -parseInt(_0x208ca4(0xf2)) + -parseInt(_0x208ca4(0xf3)) * parseInt(_0x208ca4(0xf4)) + -parseInt(_0x208ca4(0xf5)) * -parseInt(_0x208ca4(0xf6));
            if (_0x3e869a === _0x27cee5)
                break;
            else
                _0x525a6c['push'](_0x525a6c['shift']());
        } catch (_0x36e4d0) {
            _0x525a6c['push'](_0x525a6c['shift']());
        }
    }
}(_0x2039, 0x8649a));
const common = require('../common');
if (!common[_0x2276d3(0xf7)])
    common[_0x2276d3(0xf8)]('missing\x20crypto');
const assert = require(_0x2276d3(0xf9)), tls = require('tls'), fixtures = require('../common/fixtures'), options = {
        'key': fixtures[_0x2276d3(0xfa)](_0x2276d3(0xfb)),
        'cert': fixtures[_0x2276d3(0xfa)]('rsa_cert.crt')
    }, server = tls[_0x2276d3(0xfc)](options, function (_0x2f8916) {
        const _0x1b77bb = _0x2276d3;
        _0x2f8916[_0x1b77bb(0xfd)](_0x2f8916), _0x2f8916['on']('end', () => _0x2f8916['end']());
    })[_0x2276d3(0xfe)](0x0, common['mustCall'](function () {
        unauthorized();
    }));
function unauthorized() {
    const _0x98a747 = _0x2276d3;
    console[_0x98a747(0xff)](_0x98a747(0x100));
    const _0x359ed2 = tls[_0x98a747(0x101)]({
        'port': server['address']()[_0x98a747(0x102)],
        'servername': _0x98a747(0x103),
        'rejectUnauthorized': ![]
    }, common['mustCall'](function () {
        const _0x1ba122 = _0x98a747;
        let _0x5575df;
        assert(!_0x359ed2[_0x1ba122(0x104)]), _0x359ed2['on'](_0x1ba122(0x105), common[_0x1ba122(0x106)](_0x5ed7ae => {
            assert['strictEqual'](_0x5ed7ae['toString'](), 'ok'), _0x5575df = _0x5ed7ae;
        })), _0x359ed2['on']('end', common[_0x1ba122(0x106)](() => {
            const _0x314591 = _0x1ba122;
            assert(_0x5575df, _0x314591(0x107));
        })), _0x359ed2['on']('end', () => rejectUnauthorized());
    }));
    _0x359ed2['once'](_0x98a747(0x108), common[_0x98a747(0x106)](() => {
    })), _0x359ed2['on']('error', common[_0x98a747(0x109)]()), _0x359ed2[_0x98a747(0x10a)]('ok');
}
function rejectUnauthorized() {
    const _0x27fb75 = _0x2276d3;
    console[_0x27fb75(0xff)](_0x27fb75(0x10b));
    const _0x51e552 = tls[_0x27fb75(0x101)](server[_0x27fb75(0x10c)]()[_0x27fb75(0x102)], { 'servername': _0x27fb75(0x103) }, common[_0x27fb75(0x109)]());
    _0x51e552['on'](_0x27fb75(0x105), common[_0x27fb75(0x109)]()), _0x51e552['on'](_0x27fb75(0x10d), common['mustCall'](function (_0xf99eaf) {
        rejectUnauthorizedUndefined();
    })), _0x51e552[_0x27fb75(0x10a)]('ng');
}
function rejectUnauthorizedUndefined() {
    const _0x587f57 = _0x2276d3;
    console[_0x587f57(0xff)](_0x587f57(0x10e));
    const _0xc33ed9 = tls['connect'](server[_0x587f57(0x10c)]()['port'], {
        'servername': _0x587f57(0x103),
        'rejectUnauthorized': undefined
    }, common['mustNotCall']());
    _0xc33ed9['on'](_0x587f57(0x105), common['mustNotCall']()), _0xc33ed9['on'](_0x587f57(0x10d), common[_0x587f57(0x106)](function (_0x3b7c28) {
        authorized();
    })), _0xc33ed9[_0x587f57(0x10a)]('ng');
}
function authorized() {
    const _0x261bd1 = _0x2276d3;
    console[_0x261bd1(0xff)](_0x261bd1(0x10f));
    const _0x36dfa9 = tls[_0x261bd1(0x101)](server['address']()['port'], {
        'ca': [fixtures[_0x261bd1(0xfa)]('rsa_cert.crt')],
        'servername': 'localhost'
    }, common['mustCall'](function () {
        const _0x31df4e = _0x261bd1;
        console[_0x31df4e(0xff)](_0x31df4e(0x110)), assert(_0x36dfa9[_0x31df4e(0x104)]), _0x36dfa9['on']('data', common[_0x31df4e(0x106)](_0x5194a7 => {
            const _0x58a1ed = _0x31df4e;
            assert[_0x58a1ed(0x111)](_0x5194a7[_0x58a1ed(0x112)](), 'ok');
        })), _0x36dfa9['on'](_0x31df4e(0x10a), () => server[_0x31df4e(0x113)]());
    }));
    _0x36dfa9['on'](_0x261bd1(0x10d), common[_0x261bd1(0x109)]()), _0x36dfa9['end']('ok');
}
