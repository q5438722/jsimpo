const Promise = require(_0x556333(419)), ObjectId = require(_0x556333(420)), _ = require(_0x556333(421)), logging = require('@tryghost/logging');
module[_0x556333(422)][_0x556333(423)] = {
    'transaction': !![],
    'irreversible': !![]
}, module['exports']['up'] = _0x3bdcec => {
    const _0xb707d6 = _0x556333, _0x3dd2cf = {
            'vXwRu': _0xb707d6(424),
            'HkizN': _0xb707d6(425),
            'OJTvl': 'created_at',
            'aBoFr': _0xb707d6(426),
            'Jxfzc': _0xb707d6(427),
            'DJVLJ': _0xb707d6(428)
        }, _0x229c88 = _[_0xb707d6(429)]({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0x3bdcec), _0x331d17 = [
            _0xb707d6(430),
            _0xb707d6(431),
            _0x3dd2cf[_0xb707d6(432)],
            _0xb707d6(433),
            _0x3dd2cf['aBoFr'],
            _0x3dd2cf[_0xb707d6(434)]
        ];
    return _0x229c88[_0xb707d6(435)](_0x3dd2cf[_0xb707d6(436)])[_0xb707d6(437)]()[_0xb707d6(438)](_0x3c1b4d => {
        const _0x544340 = _0xb707d6, _0x64c352 = { 'YEFXn': _0x3dd2cf[_0x544340(439)] };
        if (_0x3c1b4d && _0x3c1b4d[_0x544340(440)] > 2007 + 41 * 146 + -7993) {
            logging[_0x544340(441)](_0x544340(442) + _0x3c1b4d[_0x544340(440)] + _0x544340(443));
            let _0x384997 = _[_0x544340(444)](_0x3c1b4d, _0x443bfb => {
                const _0x5da6ca = _0x544340;
                let _0x21f447 = _0x331d17[_0x5da6ca(445)](function (_0xe51cee, _0x4eede0) {
                    const _0x3d9d9d = _0x5da6ca;
                    return Object[_0x3d9d9d(446)](_0xe51cee, { [_0x4eede0]: _0x443bfb[_0x4eede0] });
                }, {});
                return _0x21f447['id'] = ObjectId()[_0x5da6ca(447)](), _0x21f447;
            });
            return Promise['map'](_0x384997, _0xee82a4 => {
                const _0xad76e8 = _0x544340;
                return _0x229c88['transacting'](_0x64c352[_0xad76e8(448)])[_0xad76e8(449)](_0xee82a4);
            });
        } else
            return logging[_0x544340(441)](_0x3dd2cf[_0x544340(450)]), Promise[_0x544340(451)]();
    });
}, module[_0x556333(422)][_0x556333(452)] = () => {
    const _0x3afb0a = _0x556333;
    return Promise[_0x3afb0a(453)]();
};