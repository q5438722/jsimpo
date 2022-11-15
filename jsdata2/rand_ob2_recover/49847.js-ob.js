exports['__esModule'] = !![], exports[_0x23da78(129)] = ![], exports[_0x23da78(130)] = undefined;
let initializedWebpack5 = ![], initializedWebpack4 = ![], initFns = [];
exports['init'] = function (_0xf3fafe) {
    const _0x49cbc5 = _0x23da78;
    if (_0xf3fafe) {
        Object[_0x49cbc5(131)](exports, require(_0x49cbc5(132))()), exports['isWebpack5'] = !![];
        if (!initializedWebpack5) {
            for (const _0x4a3097 of initFns)
                _0x4a3097();
        }
        initializedWebpack5 = !![];
    } else {
        Object['assign'](exports, require(_0x49cbc5(133))()), exports['isWebpack5'] = ![];
        if (!initializedWebpack4) {
            for (const _0x2b564e of initFns)
                _0x2b564e();
        }
        initializedWebpack4 = !![];
    }
}, exports[_0x23da78(134)] = function (_0x3a6414) {
    const _0x207795 = _0x23da78;
    if (initializedWebpack5 || initializedWebpack4)
        _0x3a6414();
    else
        initFns[_0x207795(135)](_0x3a6414);
};