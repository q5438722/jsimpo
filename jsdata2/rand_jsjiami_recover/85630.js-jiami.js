var FindByIndex = function (_0x8da994, _0x8f1154, _0x31712c, _0x46c106) {
    if (_0x8f1154 === undefined) {
        if ('nwfBZ' === 'PCRXc') {
            _0x614907 += 1;
        } else {
            _0x8f1154 = 0;
        }
    }
    if (_0x31712c === undefined) {
        _0x31712c = ![];
    }
    var _0x614907 = 0;
    var _0x551c24;
    var _0x101b3e;
    var _0x504bb3;
    if (_0x31712c) {
        for (_0x101b3e = _0x46c106['height'] - 1; _0x101b3e >= 0; _0x101b3e--) {
            for (_0x551c24 = _0x46c106['width'] - 1; _0x551c24 >= 0; _0x551c24--) {
                if ('HXbXS' !== 'cdHIM') {
                    _0x504bb3 = _0x46c106['data'][_0x101b3e][_0x551c24];
                    if (_0x504bb3 && _0x504bb3['index'] === _0x8da994) {
                        if (_0x614907 === _0x8f1154) {
                            return _0x504bb3;
                        } else {
                            _0x614907 += 1;
                        }
                    }
                } else {
                    _0x31712c = ![];
                }
            }
        }
    } else {
        for (_0x101b3e = 0; _0x101b3e < _0x46c106['height']; _0x101b3e++) {
            for (_0x551c24 = 0; _0x551c24 < _0x46c106['width']; _0x551c24++) {
                _0x504bb3 = _0x46c106['data'][_0x101b3e][_0x551c24];
                if (_0x504bb3 && _0x504bb3['index'] === _0x8da994) {
                    if (_0x614907 === _0x8f1154) {
                        return _0x504bb3;
                    } else {
                        _0x614907 += 1;
                    }
                }
            }
        }
    }
    return null;
};
module['exports'] = FindByIndex;