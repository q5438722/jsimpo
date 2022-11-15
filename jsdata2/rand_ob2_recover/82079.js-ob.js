const Promise = require(_0x1f2209(280)), ObjectId = require(_0x1f2209(281)), _ = require('lodash'), logging = require(_0x1f2209(282));
function _0x50e7(_0x4d2178, _0x157666) {
    return _0x50e7 = function (_0xd276f0, _0x50e7ff) {
        _0xd276f0 = _0xd276f0 - 269;
        let _0x1d6370 = _0xd276[_0xd276f0];
        return _0x1d6370;
    }, _0x50e7(_0x4d2178, _0x157666);
}
module[_0x1f2209(283)][_0x1f2209(284)] = {
    'transaction': !![],
    'irreversible': !![]
}, module[_0x1f2209(283)]['up'] = _0xb9199b => {
    const _0x5d8ec7 = _0x1f2209, _0x372607 = _[_0x5d8ec7(285)]({
            'context': { 'internal': !![] },
            'migrating': !![]
        }, _0xb9199b), _0x1f9394 = [
            _0x5d8ec7(286),
            _0x5d8ec7(287),
            _0x5d8ec7(288),
            _0x5d8ec7(289),
            _0x5d8ec7(290),
            _0x5d8ec7(291)
        ];
    return _0x372607[_0x5d8ec7(292)](_0x5d8ec7(293))[_0x5d8ec7(294)]()[_0x5d8ec7(295)](_0x259d26 => {
        const _0x3b4ed9 = _0x5d8ec7;
        if (_0x259d26 && _0x259d26[_0x3b4ed9(296)] > 0) {
            logging[_0x3b4ed9(297)](_0x3b4ed9(298) + _0x259d26[_0x3b4ed9(296)] + ' entries to members');
            let _0x7c054b = _[_0x3b4ed9(299)](_0x259d26, _0x58f204 => {
                const _0x1adc9e = _0x3b4ed9;
                let _0x16a13c = _0x1f9394[_0x1adc9e(300)](function (_0x2e51c8, _0x36ca11) {
                    const _0x2fe9a3 = _0x1adc9e;
                    return Object[_0x2fe9a3(301)](_0x2e51c8, { [_0x36ca11]: _0x58f204[_0x36ca11] });
                }, {});
                return _0x16a13c['id'] = ObjectId()['toHexString'](), _0x16a13c;
            });
            return Promise['map'](_0x7c054b, _0x200422 => {
                const _0x417d00 = _0x3b4ed9;
                return _0x372607['transacting'](_0x417d00(302))[_0x417d00(303)](_0x200422);
            });
        } else
            return logging['info'](_0x3b4ed9(304)), Promise[_0x3b4ed9(305)]();
    });
}, module['exports'][_0x1f2209(306)] = () => {
    const _0x187ad5 = _0x1f2209;
    return Promise[_0x187ad5(307)]();
};