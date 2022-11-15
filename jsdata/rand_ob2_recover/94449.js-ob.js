function _0x4655(_0x169fe6, _0x520682) {
    return _0x4655 = function (_0x4a7cee, _0x465536) {
        _0x4a7cee = _0x4a7cee - 211;
        let _0x594e04 = _0x4a7c[_0x4a7cee];
        return _0x594e04;
    }, _0x4655(_0x169fe6, _0x520682);
}
const _ = require('lodash'), Debug = require(_0x93a82b(222)), debug = Debug(_0x93a82b(223));
let suppressed = ![];
const suppress = () => {
    const _0x18e430 = _0x93a82b;
    if (suppressed)
        return;
    suppressed = !![];
    const _0x5e5ee1 = process['emitWarning'];
    process[_0x18e430(224)] = (_0x3f4148, _0x437a78, _0x5cde7a, ..._0x2cf3b5) => {
        const _0x47df5a = _0x18e430;
        if (_[_0x47df5a(225)](_0x3f4148) && _[_0x47df5a(226)](_0x3f4148, 'NODE_TLS_REJECT_UNAUTHORIZED'))
            return;
        if (_0x5cde7a === 'DEP0005')
            return;
        if (process[_0x47df5a(227)][_0x47df5a(228)] === _0x47df5a(229)) {
            debug('suppressed emitWarning from node: %o', {
                'process': process,
                'warning': _0x3f4148,
                'type': _0x437a78,
                'code': _0x5cde7a,
                'args': _0x2cf3b5
            });
            return;
        }
        return _0x5e5ee1[_0x47df5a(230)](process, _0x3f4148, _0x437a78, _0x5cde7a, ..._0x2cf3b5);
    };
};
module['exports'] = { 'suppress': suppress };