exports[_0x56d993(318)] = !![], exports[_0x56d993(319)] = ![], exports[_0x56d993(320)] = undefined;
let initializedWebpack5 = ![], initializedWebpack4 = ![], initFns = [];
exports['init'] = function (_0x4830fb) {
    const _0x419725 = _0x56d993, _0x1bf692 = {
            'RKvLn': function (_0x22f927) {
                return _0x22f927();
            }
        };
    if (_0x4830fb) {
        Object[_0x419725(321)](exports, require(_0x419725(322))()), exports['isWebpack5'] = !![];
        if (!initializedWebpack5) {
            for (const _0x2ae3e0 of initFns)
                _0x1bf692[_0x419725(323)](_0x2ae3e0);
        }
        initializedWebpack5 = !![];
    } else {
        Object['assign'](exports, require('./bundle4')()), exports[_0x419725(319)] = ![];
        if (!initializedWebpack4) {
            for (const _0x46edca of initFns)
                _0x1bf692[_0x419725(323)](_0x46edca);
        }
        initializedWebpack4 = !![];
    }
}, exports[_0x56d993(324)] = function (_0x5ea442) {
    const _0x323b81 = _0x56d993, _0x108c44 = {
            'gSOjd': function (_0x2eb023, _0x25c732) {
                return _0x2eb023 || _0x25c732;
            },
            'UjuCZ': function (_0x5b54c2) {
                return _0x5b54c2();
            }
        };
    if (_0x108c44['gSOjd'](initializedWebpack5, initializedWebpack4))
        _0x108c44[_0x323b81(325)](_0x5ea442);
    else
        initFns['push'](_0x5ea442);
};