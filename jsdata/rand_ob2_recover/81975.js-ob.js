const logging = require(_0x2b3b7e(362));
function _0x6ff2(_0x480030, _0x256c64) {
    return _0x6ff2 = function (_0xb0b98, _0x6ff229) {
        _0xb0b98 = _0xb0b98 - 351;
        let _0x1773b2 = _0xb0b9[_0xb0b98];
        return _0x1773b2;
    }, _0x6ff2(_0x480030, _0x256c64);
}
module[_0x2b3b7e(363)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x100535}) {
        const _0x5b496f = _0x2b3b7e;
        if (_0x100535['client']['config'][_0x5b496f(364)] !== 'mysql') {
            logging[_0x5b496f(365)](_0x5b496f(366));
            return;
        }
        const _0x1b9cc7 = await _0x100535(_0x5b496f(367))['select'](_0x5b496f(368))[_0x5b496f(369)](_0x5b496f(370))[_0x5b496f(371)](_0x5b496f(368))[_0x5b496f(372)](_0x5b496f(369), '>', 1);
        if (!_0x1b9cc7[_0x5b496f(373)]) {
            logging[_0x5b496f(374)](_0x5b496f(375));
            return;
        }
        logging['info']('Found ' + _0x1b9cc7['length'] + _0x5b496f(376));
        for (const _0x461b79 of _0x1b9cc7) {
            const _0x2b8fd7 = await _0x100535(_0x5b496f(367))[_0x5b496f(377)]()['where'](_0x5b496f(368), _0x461b79[_0x5b496f(368)]), _0x66c5cb = _0x2b8fd7[_0x5b496f(378)]((_0x550690, _0x245948) => {
                    const _0x3e2982 = _0x5b496f;
                    return _0x245948[_0x3e2982(379)] - _0x550690[_0x3e2982(379)];
                }), [_0x4ed7f, ..._0x4642c4] = _0x66c5cb;
            logging[_0x5b496f(374)](_0x5b496f(380) + _0x4ed7f['id'] + _0x5b496f(381) + _0x4ed7f[_0x5b496f(368)] + _0x5b496f(382) + _0x4ed7f['updated_at']);
            for (const _0x458e5f of _0x4642c4) {
                logging[_0x5b496f(374)](_0x5b496f(383) + _0x458e5f['id'] + _0x5b496f(381) + _0x458e5f[_0x5b496f(368)] + _0x5b496f(382) + _0x458e5f['updated_at']), await _0x100535(_0x5b496f(367))[_0x5b496f(384)]({ 'id': _0x458e5f['id'] })['del']();
            }
        }
    },
    async 'down'() {
    }
};