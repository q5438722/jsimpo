const common = require('../common');
if (!common[_0x2276d3(247)])
    common[_0x2276d3(248)]('missing crypto');
const assert = require(_0x2276d3(249)), tls = require('tls'), fixtures = require('../common/fixtures'), options = {
        'key': fixtures[_0x2276d3(250)](_0x2276d3(251)),
        'cert': fixtures[_0x2276d3(250)]('rsa_cert.crt')
    }, server = tls[_0x2276d3(252)](options, function (_0x2f8916) {
        const _0x1b77bb = _0x2276d3;
        _0x2f8916[_0x1b77bb(253)](_0x2f8916), _0x2f8916['on']('end', () => _0x2f8916['end']());
    })[_0x2276d3(254)](0, common['mustCall'](function () {
        unauthorized();
    }));
function unauthorized() {
    const _0x98a747 = _0x2276d3;
    console[_0x98a747(255)](_0x98a747(256));
    const _0x359ed2 = tls[_0x98a747(257)]({
        'port': server['address']()[_0x98a747(258)],
        'servername': _0x98a747(259),
        'rejectUnauthorized': ![]
    }, common['mustCall'](function () {
        const _0x1ba122 = _0x98a747;
        let _0x5575df;
        assert(!_0x359ed2[_0x1ba122(260)]), _0x359ed2['on'](_0x1ba122(261), common[_0x1ba122(262)](_0x5ed7ae => {
            assert['strictEqual'](_0x5ed7ae['toString'](), 'ok'), _0x5575df = _0x5ed7ae;
        })), _0x359ed2['on']('end', common[_0x1ba122(262)](() => {
            const _0x314591 = _0x1ba122;
            assert(_0x5575df, _0x314591(263));
        })), _0x359ed2['on']('end', () => rejectUnauthorized());
    }));
    _0x359ed2['once'](_0x98a747(264), common[_0x98a747(262)](() => {
    })), _0x359ed2['on']('error', common[_0x98a747(265)]()), _0x359ed2[_0x98a747(266)]('ok');
}
function rejectUnauthorized() {
    const _0x27fb75 = _0x2276d3;
    console[_0x27fb75(255)](_0x27fb75(267));
    const _0x51e552 = tls[_0x27fb75(257)](server[_0x27fb75(268)]()[_0x27fb75(258)], { 'servername': _0x27fb75(259) }, common[_0x27fb75(265)]());
    _0x51e552['on'](_0x27fb75(261), common[_0x27fb75(265)]()), _0x51e552['on'](_0x27fb75(269), common['mustCall'](function (_0xf99eaf) {
        rejectUnauthorizedUndefined();
    })), _0x51e552[_0x27fb75(266)]('ng');
}
function rejectUnauthorizedUndefined() {
    const _0x587f57 = _0x2276d3;
    console[_0x587f57(255)](_0x587f57(270));
    const _0xc33ed9 = tls['connect'](server[_0x587f57(268)]()['port'], {
        'servername': _0x587f57(259),
        'rejectUnauthorized': undefined
    }, common['mustNotCall']());
    _0xc33ed9['on'](_0x587f57(261), common['mustNotCall']()), _0xc33ed9['on'](_0x587f57(269), common[_0x587f57(262)](function (_0x3b7c28) {
        authorized();
    })), _0xc33ed9[_0x587f57(266)]('ng');
}
function authorized() {
    const _0x261bd1 = _0x2276d3;
    console[_0x261bd1(255)](_0x261bd1(271));
    const _0x36dfa9 = tls[_0x261bd1(257)](server['address']()['port'], {
        'ca': [fixtures[_0x261bd1(250)]('rsa_cert.crt')],
        'servername': 'localhost'
    }, common['mustCall'](function () {
        const _0x31df4e = _0x261bd1;
        console[_0x31df4e(255)](_0x31df4e(272)), assert(_0x36dfa9[_0x31df4e(260)]), _0x36dfa9['on']('data', common[_0x31df4e(262)](_0x5194a7 => {
            const _0x58a1ed = _0x31df4e;
            assert[_0x58a1ed(273)](_0x5194a7[_0x58a1ed(274)](), 'ok');
        })), _0x36dfa9['on'](_0x31df4e(266), () => server[_0x31df4e(275)]());
    }));
    _0x36dfa9['on'](_0x261bd1(269), common[_0x261bd1(265)]()), _0x36dfa9['end']('ok');
}