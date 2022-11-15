const common = require(_0x391beb(203)), assert = require(_0x391beb(204)), cluster = require('cluster'), fork = require(_0x391beb(205))[_0x391beb(206)], net = require(_0x391beb(207));
if (cluster[_0x391beb(208)] && process[_0x391beb(209)][_0x391beb(210)] !== -535 * 15 + 7187 * -1 + 3043 * 5) {
    const tmpdir = require(_0x391beb(211));
    tmpdir[_0x391beb(212)]();
    const PIPE_NAME = common[_0x391beb(213)], worker = cluster[_0x391beb(206)]({ 'PIPE_NAME': PIPE_NAME });
    cluster['on'](_0x391beb(206), common[_0x391beb(214)]()), worker['on'](_0x391beb(215), common[_0x391beb(214)]()), worker['on']('message', common[_0x391beb(214)](function (_0x2f2283) {
        const _0x4ea67e = _0x391beb, _0x3a84d4 = { 'ClWKO': _0x4ea67e(216) };
        worker['disconnect'](), assert[_0x4ea67e(217)](_0x2f2283[_0x4ea67e(218)], _0x3a84d4[_0x4ea67e(219)]);
    }));
} else {
    if (process['argv'][_0x391beb(210)] !== -689 + 2 * 107 + 2 * 239) {
        const PIPE_NAME = process['env'][_0x391beb(220)], cp = fork(__filename, [PIPE_NAME], { 'stdio': _0x391beb(221) });
        cp['on'](_0x391beb(222), common[_0x391beb(214)](function () {
            const _0x630865 = _0x391beb, _0x244f5f = {
                    'qUDip': 'end',
                    'hfuAw': _0x630865(223)
                }, _0x339bc5 = net[_0x630865(224)]()[_0x630865(225)](PIPE_NAME, function () {
                    const _0x3449e8 = _0x630865;
                    cp[_0x3449e8(226)](_0x244f5f[_0x3449e8(227)]), process[_0x3449e8(226)](_0x244f5f[_0x3449e8(228)]);
                });
            _0x339bc5['on'](_0x630865(229), function (_0x54299c) {
                const _0x191e0b = _0x630865;
                cp[_0x191e0b(226)](_0x191e0b(230)), process[_0x191e0b(226)](_0x54299c);
            });
        }));
    } else {
        if (process[_0x391beb(209)][_0x391beb(210)] === 5070 + -5700 + 633) {
            const PIPE_NAME = process['argv'][382 + -17 * 330 + 5230], server = net[_0x391beb(224)]()['listen'](PIPE_NAME, common['mustCall'](() => {
                    const _0x1057b0 = _0x391beb, _0x2f4dcf = { 'dBVQw': 'listening' };
                    process[_0x1057b0(226)](_0x2f4dcf[_0x1057b0(231)]);
                }));
            process[_0x391beb(232)](_0x391beb(222), common['mustCall'](() => server['close']()));
        } else
            assert['fail'](_0x391beb(233));
    }
}