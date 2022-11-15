exports['__esModule'] = !![];
exports['isWebpack5'] = ![];
exports['default'] = undefined;
let initializedWebpack5 = ![];
let initializedWebpack4 = ![];
let initFns = [];
exports['init'] = function (_0x2a0f0c) {
    if (_0x2a0f0c) {
        Object['assign'](exports, require('./bundle5')());
        exports['isWebpack5'] = !![];
        if (!initializedWebpack5)
            for (const _0x5163fe of initFns)
                _0x5163fe();
        initializedWebpack5 = !![];
    } else {
        Object['assign'](exports, require('./bundle4')());
        exports['isWebpack5'] = ![];
        if (!initializedWebpack4)
            for (const _0x40117a of initFns)
                _0x40117a();
        initializedWebpack4 = !![];
    }
};
exports['onWebpackInit'] = function (_0x234fce) {
    if (initializedWebpack5 || initializedWebpack4)
        _0x234fce();
    else
        initFns['push'](_0x234fce);
};