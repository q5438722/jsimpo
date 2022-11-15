function _0x12d0(_0x44047b, _0x473cf1) {
    return _0x12d0 = function (_0x3f7edb, _0x416bd7) {
        _0x3f7edb = _0x3f7edb - (-5494 + -5053 + 10858);
        let _0x538775 = _0x2e67[_0x3f7edb];
        return _0x538775;
    }, _0x12d0(_0x44047b, _0x473cf1);
}
const _ = require(_0x43bf39(321)), utils = require('../../index'), mapper = require(_0x43bf39(322)), _private = {};
_private['settingsFilter'] = (_0x38471c, _0x53ccb4) => {
    const _0x5a6159 = _0x43bf39;
    let _0x1fe28c = _0x53ccb4 ? _0x53ccb4['split'](',') : ![];
    return _[_0x5a6159(323)](_0x38471c, _0x3a05d9 => {
        if (_0x1fe28c)
            return _['includes'](_0x1fe28c, _0x3a05d9['group']);
        return !![];
    });
}, module[_0x43bf39(324)] = {
    'browse'(_0x5ad84d, _0x4aa230, _0x458386) {
        const _0x4de746 = _0x43bf39;
        let _0x1fd823;
        utils['isContentAPI'](_0x458386) ? _0x1fd823 = _0x5ad84d : _0x1fd823 = _['values'](_private[_0x4de746(325)](_0x5ad84d, _0x458386[_0x4de746(326)][_0x4de746(327)])), _0x458386[_0x4de746(328)] = {
            'settings': mapper['mapSettings'](_0x1fd823, _0x458386),
            'meta': {}
        }, (_0x458386['options'][_0x4de746(329)] || _0x458386[_0x4de746(326)][_0x4de746(327)]) && (_0x458386[_0x4de746(328)][_0x4de746(330)][_0x4de746(331)] = {}, _0x458386['options'][_0x4de746(329)] && (_0x458386[_0x4de746(328)]['meta'][_0x4de746(331)][_0x4de746(329)] = _0x458386[_0x4de746(326)][_0x4de746(329)]), _0x458386[_0x4de746(326)][_0x4de746(327)] && (_0x458386[_0x4de746(328)][_0x4de746(330)]['filters']['group'] = _0x458386[_0x4de746(326)][_0x4de746(327)]));
    },
    'read'() {
        this['browse'](...arguments);
    },
    'edit'(_0x121ee1, _0x38a5a2, _0x122f3d) {
        const _0x3077a1 = _0x43bf39, _0x1b5a3d = {
                'qwgCI': _0x3077a1(332),
                'SQHim': _0x3077a1(333)
            }, _0x31bf29 = _['keyBy'](_[_0x3077a1(334)](_0x121ee1, _0x1b5a3d[_0x3077a1(335)]), _0x1b5a3d[_0x3077a1(336)]);
        this[_0x3077a1(337)](_0x31bf29, _0x38a5a2, _0x122f3d);
    },
    'download'(_0xaf8655, _0x1c10d2, _0x484db2) {
        _0x484db2['response'] = _0xaf8655;
    }
};