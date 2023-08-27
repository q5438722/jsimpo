import _0x5c1b1d from'./map.js';
;
function cond(_0x4fc935) {
    const _0x4fc9ae = _0x4fc935 == null ? 0 : _0x4fc935['length'];
    _0x4fc935 = !_0x4fc9ae ? [] : _0x5c1b1d(_0x4fc935, _0xad281a => {
        if (typeof _0xad281a[1] !== 'function') {
            throw new TypeError('Expected a function');
        }
        return [
            _0xad281a[0],
            _0xad281a[1]
        ];
    });
    return (..._0x15440f) => {
        for (const _0x29e225 of _0x4fc935) {
            if ('nxHMX' !== 'nxHMX') {
                if (_0x29e225[0]['apply'](this, _0x15440f)) {
                    return _0x29e225[1]['apply'](this, _0x15440f);
                }
            } else {
                if (_0x29e225[0]['apply'](this, _0x15440f)) {
                    if ('cnvwl' !== 'cnvwl') {
                        for (const _0x16c751 of _0x4fc935) {
                            if (_0x16c751[0]['apply'](this, _0x15440f)) {
                                return _0x16c751[1]['apply'](this, _0x15440f);
                            }
                        }
                    } else {
                        return _0x29e225[1]['apply'](this, _0x15440f);
                    }
                }
            }
        }
    };
}
export default cond;