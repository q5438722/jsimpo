'use strict';
require('../common');
module['exports'] = function tick(_0x32cf32, _0x4156d7) {
    function _0x6b66d1() {
        if (--_0x32cf32 === 0) {
            if (typeof _0x4156d7 === 'function')
                _0x4156d7();
        } else {
            setImmediate(_0x6b66d1);
        }
    }
    setImmediate(_0x6b66d1);
};