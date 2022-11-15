const _ = require('lodash'), Debug = require('debug'), debug = Debug('cypress:server:lib:util:suppress_warnings');
let suppressed = ![];
const suppress = () => {
    const _0x5a29b2 = {
        'zRhXr': 'NODE_TLS_REJECT_UNAUTHORIZED',
        'sikUs': function (_0x3a7a43, _0x2c1ea0) {
            return _0x3a7a43 === _0x2c1ea0;
        },
        'kxXew': 'DEP0005',
        'HlIwO': 'production',
        'fnXNu': function (_0x5827e2, _0x277245, _0x5df748) {
            return _0x5827e2(_0x277245, _0x5df748);
        },
        'VrSks': 'suppressed\x20emitWarning\x20from\x20node:\x20%o'
    };
    if (suppressed)
        return;
    suppressed = !![];
    const _0x1c81f5 = process['emitWarning'];
    process['emitWarning'] = (_0xd7f384, _0x179767, _0x2345a0, ..._0x3471c3) => {
        if (_['isString'](_0xd7f384) && _['includes'](_0xd7f384, _0x5a29b2['zRhXr']))
            return;
        if (_0x5a29b2['sikUs'](_0x2345a0, _0x5a29b2['kxXew']))
            return;
        if (_0x5a29b2['sikUs'](process['env']['CYPRESS_INTERNAL_ENV'], _0x5a29b2['HlIwO'])) {
            _0x5a29b2['fnXNu'](debug, _0x5a29b2['VrSks'], {
                'process': process,
                'warning': _0xd7f384,
                'type': _0x179767,
                'code': _0x2345a0,
                'args': _0x3471c3
            });
            return;
        }
        return _0x1c81f5['call'](process, _0xd7f384, _0x179767, _0x2345a0, ..._0x3471c3);
    };
};
module['exports'] = { 'suppress': suppress };
