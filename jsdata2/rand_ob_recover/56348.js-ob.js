const common = require(_0x5ef875(384)), assert = require('assert'), stream = require(_0x5ef875(385));
{
    const writable = new stream['Writable']();
    writable[_0x5ef875(386)] = (_0x23b917, _0x5b3da2, _0x48d084) => {
        const _0x7548b7 = _0x5ef875, _0x543940 = {
                'qkFTw': function (_0x3dda75, _0xb4668) {
                    return _0x3dda75(_0xb4668);
                },
                'MGelc': 'write test error'
            };
        _0x543940[_0x7548b7(387)](_0x48d084, new Error(_0x543940['MGelc']));
    }, writable['on'](_0x5ef875(388), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(390), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(391), common['mustCall'](_0x17ec0 => {
        const _0x1b7f8c = _0x5ef875, _0x1fc0dc = { 'bTOyk': 'write test error' };
        assert[_0x1b7f8c(392)](_0x17ec0['message'], _0x1fc0dc[_0x1b7f8c(393)]);
    })), writable['end'](_0x5ef875(394));
}
{
    const writable = new stream[(_0x5ef875(395))]();
    writable[_0x5ef875(386)] = (_0x4d31c7, _0x1fb643, _0x2a06c6) => {
        const _0x13833b = _0x5ef875, _0x226b05 = { 'tsfgx': 'write test error' };
        setImmediate(_0x2a06c6, new Error(_0x226b05[_0x13833b(396)]));
    }, writable['on'](_0x5ef875(388), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(390), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(391), common[_0x5ef875(397)](_0x46ffdd => {
        const _0x1b557f = _0x5ef875;
        assert[_0x1b557f(392)](_0x46ffdd[_0x1b557f(398)], _0x1b557f(399));
    })), writable[_0x5ef875(400)](_0x5ef875(394));
}
{
    const writable = new stream['Writable']();
    writable[_0x5ef875(386)] = (_0x1b95bd, _0x5c8811, _0x3322cc) => {
        const _0x496ffb = _0x5ef875, _0x4df7df = { 'iDOUm': _0x496ffb(399) };
        _0x3322cc(new Error(_0x4df7df[_0x496ffb(401)]));
    }, writable['_writev'] = (_0x147a3e, _0x4923f3) => {
        const _0x3b9bd8 = _0x5ef875, _0x4c35c5 = {
                'SrYxl': function (_0x91ac2b, _0x1eb747) {
                    return _0x91ac2b(_0x1eb747);
                },
                'vzNUT': _0x3b9bd8(402)
            };
        _0x4c35c5[_0x3b9bd8(403)](_0x4923f3, new Error(_0x4c35c5[_0x3b9bd8(404)]));
    }, writable['on'](_0x5ef875(388), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(390), common['mustNotCall']()), writable['on'](_0x5ef875(391), common[_0x5ef875(397)](_0x365eb1 => {
        const _0x504e61 = _0x5ef875, _0x537a48 = { 'plgfv': 'writev test error' };
        assert[_0x504e61(392)](_0x365eb1[_0x504e61(398)], _0x537a48[_0x504e61(405)]);
    })), writable[_0x5ef875(406)](), writable['write']('test'), setImmediate(function () {
        const _0x2e6679 = _0x5ef875, _0x5834e1 = { 'wroCx': _0x2e6679(394) };
        writable[_0x2e6679(400)](_0x5834e1[_0x2e6679(407)]);
    });
}
{
    const writable = new stream[(_0x5ef875(395))]();
    writable[_0x5ef875(386)] = (_0x5d47ca, _0x4a7dcc, _0x119ff4) => {
        const _0x42c165 = _0x5ef875, _0x2a8d8b = {
                'izUsT': function (_0x463904, _0x2b1ed8, _0x460bfc) {
                    return _0x463904(_0x2b1ed8, _0x460bfc);
                },
                'AWRBc': _0x42c165(399)
            };
        _0x2a8d8b['izUsT'](setImmediate, _0x119ff4, new Error(_0x2a8d8b[_0x42c165(408)]));
    }, writable[_0x5ef875(409)] = (_0x3a2ebe, _0xfb1a1b) => {
        const _0x53d77d = _0x5ef875, _0x51d81d = {
                'aWrzM': function (_0x6dc6e6, _0x466002, _0x3e855a) {
                    return _0x6dc6e6(_0x466002, _0x3e855a);
                },
                'RkIlc': _0x53d77d(402)
            };
        _0x51d81d['aWrzM'](setImmediate, _0xfb1a1b, new Error(_0x51d81d[_0x53d77d(410)]));
    }, writable['on'](_0x5ef875(388), common['mustNotCall']()), writable['on'](_0x5ef875(390), common[_0x5ef875(389)]()), writable['on'](_0x5ef875(391), common[_0x5ef875(397)](_0x5f59dd => {
        const _0x54478c = _0x5ef875, _0x28b07f = { 'lUOTm': _0x54478c(402) };
        assert[_0x54478c(392)](_0x5f59dd[_0x54478c(398)], _0x28b07f[_0x54478c(411)]);
    })), writable[_0x5ef875(406)](), writable[_0x5ef875(412)]('test'), setImmediate(function () {
        const _0x1ac874 = _0x5ef875, _0x5110e6 = { 'NAwdP': 'test' };
        writable[_0x1ac874(400)](_0x5110e6[_0x1ac874(413)]);
    });
}
{
    const rs = new stream[(_0x5ef875(414))]();
    rs[_0x5ef875(415)]('ok'), rs['push'](null), rs[_0x5ef875(416)] = () => {
    };
    const ws = new stream[(_0x5ef875(395))]();
    ws['on'](_0x5ef875(388), common[_0x5ef875(389)]()), ws['on'](_0x5ef875(391), common[_0x5ef875(397)]()), ws[_0x5ef875(386)] = (_0x147423, _0x536a9a, _0x4d3300) => {
        const _0xfb815b = _0x5ef875, _0x1aba8e = {
                'dRloJ': function (_0x41e376, _0x51ddb3, _0x13e384) {
                    return _0x41e376(_0x51ddb3, _0x13e384);
                }
            };
        _0x1aba8e[_0xfb815b(417)](setImmediate, _0x4d3300, new Error());
    }, rs[_0x5ef875(418)](ws);
}
{
    const rs = new stream[(_0x5ef875(414))]();
    rs[_0x5ef875(415)]('ok'), rs[_0x5ef875(415)](null), rs[_0x5ef875(416)] = () => {
    };
    const ws = new stream[(_0x5ef875(395))]();
    ws['on']('finish', common[_0x5ef875(389)]()), ws['on'](_0x5ef875(391), common[_0x5ef875(397)]()), ws['_write'] = (_0x333cda, _0x3d8fde, _0x377b18) => {
        const _0x394bb5 = _0x5ef875, _0x258b65 = {
                'oIYiE': function (_0x1eedcd, _0x1f5f4d) {
                    return _0x1eedcd(_0x1f5f4d);
                }
            };
        _0x258b65[_0x394bb5(419)](_0x377b18, new Error());
    }, rs[_0x5ef875(418)](ws);
}
{
    const w = new stream[(_0x5ef875(395))]();
    w[_0x5ef875(386)] = (_0x301423, _0x3258b4, _0x13f071) => {
        const _0xa21833 = _0x5ef875;
        process[_0xa21833(420)](_0x13f071);
    }, w['on'](_0x5ef875(391), common[_0x5ef875(397)]()), w['on'](_0x5ef875(388), common[_0x5ef875(389)]()), w['on'](_0x5ef875(390), () => {
        const _0x3003b4 = _0x5ef875, _0x5a8395 = { 'RVXMw': _0x3003b4(421) };
        w[_0x3003b4(412)](_0x5a8395['RVXMw']);
    }), w[_0x5ef875(400)]();
}
function _0x3778(_0x39617c, _0xaced0d) {
    return _0x3778 = function (_0x3b66cf, _0x327f40) {
        _0x3b66cf = _0x3b66cf - (8710 + 487 * -3 + -6875);
        let _0x445ac9 = _0xd2b4[_0x3b66cf];
        return _0x445ac9;
    }, _0x3778(_0x39617c, _0xaced0d);
}
{
    const w = new stream[(_0x5ef875(395))]();
    w[_0x5ef875(386)] = (_0x3b2007, _0x250b77, _0x5198c8) => {
        const _0x38ad51 = _0x5ef875;
        process[_0x38ad51(420)](_0x5198c8);
    }, w['on'](_0x5ef875(391), common['mustCall']()), w['on'](_0x5ef875(388), () => {
        const _0x58449d = _0x5ef875, _0x587e50 = { 'sdkYK': _0x58449d(422) };
        w[_0x58449d(412)](_0x587e50[_0x58449d(423)]);
    }), w['end']();
}