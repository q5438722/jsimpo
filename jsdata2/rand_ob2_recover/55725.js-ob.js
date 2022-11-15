const common = require('../common'), assert = require(_0x4409ae(312)), cluster = require(_0x4409ae(313)), fork = require('child_process')[_0x4409ae(314)], net = require(_0x4409ae(315));
function _0x4a6c(_0x2bb513, _0x391ff1) {
    return _0x4a6c = function (_0xe5cdc2, _0x4a6ca1) {
        _0xe5cdc2 = _0xe5cdc2 - 301;
        let _0x52cfc2 = _0xe5cd[_0xe5cdc2];
        return _0x52cfc2;
    }, _0x4a6c(_0x2bb513, _0x391ff1);
}
if (cluster[_0x4409ae(316)] && process['argv'][_0x4409ae(317)] !== 3) {
    const tmpdir = require('../common/tmpdir');
    tmpdir[_0x4409ae(318)]();
    const PIPE_NAME = common['PIPE'], worker = cluster[_0x4409ae(314)]({ 'PIPE_NAME': PIPE_NAME });
    cluster['on'](_0x4409ae(314), common[_0x4409ae(319)]()), worker['on'](_0x4409ae(320), common[_0x4409ae(319)]()), worker['on'](_0x4409ae(321), common[_0x4409ae(319)](function (_0x503ebb) {
        const _0x4f42aa = _0x4409ae;
        worker[_0x4f42aa(322)](), assert['strictEqual'](_0x503ebb['code'], _0x4f42aa(323));
    }));
} else {
    if (process[_0x4409ae(324)][_0x4409ae(317)] !== 3) {
        const PIPE_NAME = process[_0x4409ae(325)][_0x4409ae(326)], cp = fork(__filename, [PIPE_NAME], { 'stdio': 'inherit' });
        cp['on'](_0x4409ae(321), common['mustCall'](function () {
            const _0x1baa9 = _0x4409ae, _0x370b4e = net[_0x1baa9(327)]()['listen'](PIPE_NAME, function () {
                    const _0x2d7f42 = _0x1baa9;
                    cp[_0x2d7f42(328)]('end'), process[_0x2d7f42(328)](_0x2d7f42(329));
                });
            _0x370b4e['on'](_0x1baa9(330), function (_0x21fdcb) {
                const _0x4bee80 = _0x1baa9;
                cp[_0x4bee80(328)](_0x4bee80(331)), process[_0x4bee80(328)](_0x21fdcb);
            });
        }));
    } else {
        if (process[_0x4409ae(324)][_0x4409ae(317)] === 3) {
            const PIPE_NAME = process[_0x4409ae(324)][2], server = net[_0x4409ae(327)]()[_0x4409ae(332)](PIPE_NAME, common[_0x4409ae(319)](() => {
                    const _0x4a5a2a = _0x4409ae;
                    process[_0x4a5a2a(328)](_0x4a5a2a(333));
                }));
            process[_0x4409ae(334)]('message', common[_0x4409ae(319)](() => server[_0x4409ae(335)]()));
        } else
            assert['fail'](_0x4409ae(336));
    }
}