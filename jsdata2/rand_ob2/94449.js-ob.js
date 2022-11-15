const _0x4a7c = [
    'call',
    '443261dkWNqA',
    '1dVacgq',
    '1xKpfsL',
    '157349lpjXaM',
    '312959WWmDgz',
    '196537YnzaRX',
    '3puIAIR',
    '299EkqUkk',
    '1822eYLSmp',
    '241791MRINUM',
    '494715BTJopj',
    'debug',
    'cypress:server:lib:util:suppress_warnings',
    'emitWarning',
    'isString',
    'includes',
    'env',
    'CYPRESS_INTERNAL_ENV',
    'production'
];
const _0x93a82b = _0x4655;
(function (_0x2652bb, _0x18a095) {
    const _0x1f3f1a = _0x4655;
    while (!![]) {
        try {
            const _0x54feb9 = -parseInt(_0x1f3f1a(0xd3)) * -parseInt(_0x1f3f1a(0xd4)) + -parseInt(_0x1f3f1a(0xd5)) * -parseInt(_0x1f3f1a(0xd6)) + -parseInt(_0x1f3f1a(0xd7)) + -parseInt(_0x1f3f1a(0xd8)) * parseInt(_0x1f3f1a(0xd9)) + -parseInt(_0x1f3f1a(0xda)) * -parseInt(_0x1f3f1a(0xdb)) + -parseInt(_0x1f3f1a(0xdc)) + parseInt(_0x1f3f1a(0xdd));
            if (_0x54feb9 === _0x18a095)
                break;
            else
                _0x2652bb['push'](_0x2652bb['shift']());
        } catch (_0x30a27f) {
            _0x2652bb['push'](_0x2652bb['shift']());
        }
    }
}(_0x4a7c, 0x7907e));
function _0x4655(_0x169fe6, _0x520682) {
    return _0x4655 = function (_0x4a7cee, _0x465536) {
        _0x4a7cee = _0x4a7cee - 0xd3;
        let _0x594e04 = _0x4a7c[_0x4a7cee];
        return _0x594e04;
    }, _0x4655(_0x169fe6, _0x520682);
}
const _ = require('lodash'), Debug = require(_0x93a82b(0xde)), debug = Debug(_0x93a82b(0xdf));
let suppressed = ![];
const suppress = () => {
    const _0x18e430 = _0x93a82b;
    if (suppressed)
        return;
    suppressed = !![];
    const _0x5e5ee1 = process['emitWarning'];
    process[_0x18e430(0xe0)] = (_0x3f4148, _0x437a78, _0x5cde7a, ..._0x2cf3b5) => {
        const _0x47df5a = _0x18e430;
        if (_[_0x47df5a(0xe1)](_0x3f4148) && _[_0x47df5a(0xe2)](_0x3f4148, 'NODE_TLS_REJECT_UNAUTHORIZED'))
            return;
        if (_0x5cde7a === 'DEP0005')
            return;
        if (process[_0x47df5a(0xe3)][_0x47df5a(0xe4)] === _0x47df5a(0xe5)) {
            debug('suppressed\x20emitWarning\x20from\x20node:\x20%o', {
                'process': process,
                'warning': _0x3f4148,
                'type': _0x437a78,
                'code': _0x5cde7a,
                'args': _0x2cf3b5
            });
            return;
        }
        return _0x5e5ee1[_0x47df5a(0xe6)](process, _0x3f4148, _0x437a78, _0x5cde7a, ..._0x2cf3b5);
    };
};
module['exports'] = { 'suppress': suppress };
