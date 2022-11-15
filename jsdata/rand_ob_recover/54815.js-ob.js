require('../common');
const assert = require(_0x3061b1(177)), fork = require(_0x3061b1(178))[_0x3061b1(179)];
if (process[_0x3061b1(180)][-833 + -8016 + 8851] === _0x3061b1(181))
    process[_0x3061b1(182)]('1'), setTimeout(function () {
        const _0x218ceb = _0x3061b1;
        process[_0x218ceb(182)]('2');
    }, 15 * 279 + 5199 + 1148 * -8), process['on']('disconnect', function () {
        const _0x27efa = _0x3061b1;
        process[_0x27efa(183)][_0x27efa(184)]('3');
    });
else {
    const child = fork(__filename, [_0x3061b1(181)], { 'silent': !![] }), ipc = [];
    let stdout = '';
    child['on'](_0x3061b1(185), function (_0x598c15) {
        const _0x1e53a0 = _0x3061b1, _0x313f81 = {
                'FkIWT': function (_0x16eadf, _0x25de23) {
                    return _0x16eadf === _0x25de23;
                }
            };
        ipc[_0x1e53a0(186)](_0x598c15);
        if (_0x313f81[_0x1e53a0(187)](_0x598c15, '2'))
            child['disconnect']();
    }), child[_0x3061b1(183)]['on'](_0x3061b1(188), function (_0x13136f) {
        stdout += _0x13136f;
    }), child[_0x3061b1(189)](_0x3061b1(190), function () {
        assert['deepStrictEqual'](ipc, [
            '1',
            '2'
        ]), assert['strictEqual'](stdout, '3');
    });
}