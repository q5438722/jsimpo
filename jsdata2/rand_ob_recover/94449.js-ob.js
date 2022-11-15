function _0x60a9(_0x27890d, _0x39a3f8) {
    return _0x60a9 = function (_0x116f4d, _0x33ec25) {
        _0x116f4d = _0x116f4d - (-8552 + 291 + -1 * -8395);
        let _0x1e3b93 = _0x2455[_0x116f4d];
        return _0x1e3b93;
    }, _0x60a9(_0x27890d, _0x39a3f8);
}
const _ = require('lodash'), Debug = require(_0x9d2895(145)), debug = Debug(_0x9d2895(146));
let suppressed = ![];
const suppress = () => {
    const _0xa56e2b = _0x9d2895, _0x5c7774 = {
            'nJmSp': _0xa56e2b(147),
            'ipgzF': function (_0x1c0543, _0x52c28a) {
                return _0x1c0543 === _0x52c28a;
            },
            'eckAw': 'DEP0005',
            'Ecdzl': _0xa56e2b(148),
            'OQFrq': function (_0x6e55ec, _0x376cb1, _0x3d0bf7) {
                return _0x6e55ec(_0x376cb1, _0x3d0bf7);
            },
            'mrKdZ': 'suppressed emitWarning from node: %o'
        };
    if (suppressed)
        return;
    suppressed = !![];
    const _0x471c9f = process[_0xa56e2b(149)];
    process[_0xa56e2b(149)] = (_0x5d0257, _0x21fb63, _0x21ea8a, ..._0x34056d) => {
        const _0x39afb7 = _0xa56e2b;
        if (_[_0x39afb7(150)](_0x5d0257) && _[_0x39afb7(151)](_0x5d0257, _0x5c7774[_0x39afb7(152)]))
            return;
        if (_0x5c7774[_0x39afb7(153)](_0x21ea8a, _0x5c7774[_0x39afb7(154)]))
            return;
        if (process[_0x39afb7(155)][_0x39afb7(156)] === _0x5c7774[_0x39afb7(157)]) {
            _0x5c7774[_0x39afb7(158)](debug, _0x5c7774[_0x39afb7(159)], {
                'process': process,
                'warning': _0x5d0257,
                'type': _0x21fb63,
                'code': _0x21ea8a,
                'args': _0x34056d
            });
            return;
        }
        return _0x471c9f[_0x39afb7(160)](process, _0x5d0257, _0x21fb63, _0x21ea8a, ..._0x34056d);
    };
};
module[_0x9d2895(161)] = { 'suppress': suppress };