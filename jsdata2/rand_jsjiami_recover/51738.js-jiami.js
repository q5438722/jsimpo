const {browsers} = require('./browsers');
function unpackRegion(_0x2e7fec) {
    return Object['keys'](_0x2e7fec)['reduce']((_0xecac1f, _0x2723b3) => {
        let _0x275996 = _0x2e7fec[_0x2723b3];
        _0xecac1f[browsers[_0x2723b3]] = Object['keys'](_0x275996)['reduce']((_0x3be186, _0x55320b) => {
            let _0x247b3a = _0x275996[_0x55320b];
            if (_0x55320b === '_') {
                _0x247b3a['split'](' ')['forEach'](_0xb43456 => _0x3be186[_0xb43456] = null);
            } else {
                _0x3be186[_0x55320b] = _0x247b3a;
            }
            return _0x3be186;
        }, {});
        return _0xecac1f;
    }, {});
}
module['exports'] = unpackRegion;
module['exports']['default'] = unpackRegion;