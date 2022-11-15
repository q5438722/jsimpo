const _ = require('lodash'), Debug = require('debug'), debug = Debug('cypress:server:lib:util:suppress_warnings');
let suppressed = ![];
const suppress = () => {
    if (suppressed)
        return;
    suppressed = !![];
    const _0x2fa7ee = process['emitWarning'];
    process['emitWarning'] = (_0x4262db, _0x4e8c5f, _0x1c09a0, ..._0x22e7ca) => {
        if (_['isString'](_0x4262db) && _['includes'](_0x4262db, 'NODE_TLS_REJECT_UNAUTHORIZED'))
            return;
        if (_0x1c09a0 === 'DEP0005')
            return;
        if (process['env']['CYPRESS_INTERNAL_ENV'] === 'production') {
            debug('suppressed\x20emitWarning\x20from\x20node:\x20%o', {
                'process': process,
                'warning': _0x4262db,
                'type': _0x4e8c5f,
                'code': _0x1c09a0,
                'args': _0x22e7ca
            });
            return;
        }
        return _0x2fa7ee['call'](process, _0x4262db, _0x4e8c5f, _0x1c09a0, ..._0x22e7ca);
    };
};
module['exports'] = { 'suppress': suppress };
