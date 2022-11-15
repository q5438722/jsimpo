function _0x5854(_0x2b93a5, _0x3c5906) {
    return _0x5854 = function (_0x2778e3, _0x5854f6) {
        _0x2778e3 = _0x2778e3 - 159;
        let _0xa80b5 = _0x2778[_0x2778e3];
        return _0xa80b5;
    }, _0x5854(_0x2b93a5, _0x3c5906);
}
const _ = require(_0x4b0331(172)), utils = require(_0x4b0331(173)), mapper = require(_0x4b0331(174)), _private = {};
_private[_0x4b0331(175)] = (_0x2d49f6, _0x2b9fe6) => {
    const _0x33dd59 = _0x4b0331;
    let _0x1ed365 = _0x2b9fe6 ? _0x2b9fe6[_0x33dd59(176)](',') : ![];
    return _[_0x33dd59(177)](_0x2d49f6, _0x1fc4de => {
        const _0x59058f = _0x33dd59;
        if (_0x1ed365)
            return _[_0x59058f(178)](_0x1ed365, _0x1fc4de[_0x59058f(179)]);
        return !![];
    });
}, module[_0x4b0331(180)] = {
    'browse'(_0x5d6f93, _0xbfe4e2, _0x3e3088) {
        const _0x158057 = _0x4b0331;
        let _0x2db7c0;
        utils[_0x158057(181)](_0x3e3088) ? _0x2db7c0 = _0x5d6f93 : _0x2db7c0 = _['values'](_private['settingsFilter'](_0x5d6f93, _0x3e3088[_0x158057(182)]['group'])), _0x3e3088[_0x158057(183)] = {
            'settings': mapper[_0x158057(184)](_0x2db7c0, _0x3e3088),
            'meta': {}
        }, (_0x3e3088[_0x158057(182)][_0x158057(185)] || _0x3e3088['options'][_0x158057(179)]) && (_0x3e3088['response'][_0x158057(186)]['filters'] = {}, _0x3e3088['options']['type'] && (_0x3e3088[_0x158057(183)]['meta'][_0x158057(187)][_0x158057(185)] = _0x3e3088['options']['type']), _0x3e3088[_0x158057(182)]['group'] && (_0x3e3088[_0x158057(183)][_0x158057(186)]['filters'][_0x158057(179)] = _0x3e3088[_0x158057(182)][_0x158057(179)]));
    },
    'read'() {
        const _0x594549 = _0x4b0331;
        this[_0x594549(188)](...arguments);
    },
    'edit'(_0x25c58a, _0x4ed4dd, _0x35f6bf) {
        const _0x478b47 = _0x4b0331, _0x4da72b = _['keyBy'](_['invokeMap'](_0x25c58a, _0x478b47(189)), _0x478b47(190));
        this[_0x478b47(188)](_0x4da72b, _0x4ed4dd, _0x35f6bf);
    },
    'download'(_0x593583, _0xa15e03, _0x5bb43d) {
        const _0x1435ea = _0x4b0331;
        _0x5bb43d[_0x1435ea(183)] = _0x593583;
    }
};