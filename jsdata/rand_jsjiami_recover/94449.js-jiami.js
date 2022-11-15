const _ = require('lodash');
const Debug = require('debug');
const debug = Debug('cypress:server:lib:util:suppress_warnings');
let suppressed = ![];
const suppress = () => {
    if (suppressed) {
        return;
    }
    suppressed = !![];
    const _0x453a13 = process['emitWarning'];
    process['emitWarning'] = (_0x41d172, _0x3284fb, _0x592685, ..._0x3966cd) => {
        var _0x8bafe8 = { 'ROInf': 'suppressed emitWarning from node: %o' };
        if (_['isString'](_0x41d172) && _['includes'](_0x41d172, 'NODE_TLS_REJECT_UNAUTHORIZED')) {
            return;
        }
        if (_0x592685 === 'DEP0005') {
            if ('GQmbH' !== 'QkUez') {
                return;
            } else {
                debug(_0x8bafe8['ROInf'], {
                    'process': process,
                    'warning': _0x41d172,
                    'type': _0x3284fb,
                    'code': _0x592685,
                    'args': _0x3966cd
                });
                return;
            }
        }
        if (process['env']['CYPRESS_INTERNAL_ENV'] === 'production') {
            debug('suppressed emitWarning from node: %o', {
                'process': process,
                'warning': _0x41d172,
                'type': _0x3284fb,
                'code': _0x592685,
                'args': _0x3966cd
            });
            return;
        }
        return _0x453a13['call'](process, _0x41d172, _0x3284fb, _0x592685, ..._0x3966cd);
    };
};
module['exports'] = { 'suppress': suppress };