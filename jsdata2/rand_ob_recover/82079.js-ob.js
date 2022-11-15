const Promise = require('bluebird'), ObjectId = require(_0x579c49(109)), _ = require('lodash'), logging = require(_0x579c49(110));
module[_0x579c49(111)]['config'] = {
    'transaction': !![],
    'irreversible': !![]
}, module[_0x579c49(111)]['up'] = _0x3cd8ee => {
    const _0x173c27 = _0x579c49, _0x41005c = {
            'TtpNH': 'members',
            'DJhOC': function (_0xf177d5) {
                return _0xf177d5();
            },
            'SkDRW': function (_0x311a2c, _0xc2356e) {
                return _0x311a2c > _0xc2356e;
            },
            'YumdK': 'Skipping populating members table: found 0 subscribers',
            'ttvMq': _0x173c27(112),
            'wrIDu': _0x173c27(113),
            'ZkDFG': _0x173c27(114),
            'WTqLU': _0x173c27(115),
            'ejExq': _0x173c27(116),
            'wHmud': _0x173c27(117)
        }, _0x586d8b = _['merge']({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x3cd8ee), _0xb5d65d = [
            _0x41005c[_0x173c27(118)],
            _0x41005c['wrIDu'],
            _0x173c27(119),
            _0x41005c[_0x173c27(120)],
            _0x41005c[_0x173c27(121)],
            _0x41005c[_0x173c27(122)]
        ];
    return _0x586d8b[_0x173c27(123)](_0x41005c[_0x173c27(124)])[_0x173c27(125)]()[_0x173c27(126)](_0x43f7ba => {
        const _0x3d58a0 = _0x173c27, _0x4f92d1 = {
                'gkODT': function (_0x27248d) {
                    const _0x169b90 = _0x17e3;
                    return _0x41005c[_0x169b90(127)](_0x27248d);
                }
            };
        if (_0x43f7ba && _0x41005c[_0x3d58a0(128)](_0x43f7ba[_0x3d58a0(129)], -158 * 55 + -3634 * 2 + 79 * 202)) {
            logging[_0x3d58a0(130)](_0x3d58a0(131) + _0x43f7ba[_0x3d58a0(129)] + _0x3d58a0(132));
            let _0x29ab13 = _[_0x3d58a0(133)](_0x43f7ba, _0x11d068 => {
                let _0x3b5a55 = _0xb5d65d['reduce'](function (_0x7e4a3e, _0x22573c) {
                    return Object['assign'](_0x7e4a3e, { [_0x22573c]: _0x11d068[_0x22573c] });
                }, {});
                return _0x3b5a55['id'] = _0x4f92d1['gkODT'](ObjectId)['toHexString'](), _0x3b5a55;
            });
            return Promise[_0x3d58a0(133)](_0x29ab13, _0x5502be => {
                const _0x41695d = _0x3d58a0;
                return _0x586d8b[_0x41695d(123)](_0x41005c['TtpNH'])['insert'](_0x5502be);
            });
        } else
            return logging[_0x3d58a0(130)](_0x41005c[_0x3d58a0(134)]), Promise['resolve']();
    });
}, module[_0x579c49(111)][_0x579c49(135)] = () => {
    const _0x369b73 = _0x579c49;
    return Promise[_0x369b73(136)]();
};