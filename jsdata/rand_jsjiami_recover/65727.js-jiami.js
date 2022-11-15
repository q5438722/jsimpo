'use strict';
const peq = new Uint32Array(65536);
const myers_32 = (_0x7f42fe, _0x322fe8) => {
    const _0x2dfbd5 = _0x7f42fe['length'];
    const _0x5b4509 = _0x322fe8['length'];
    const _0x453651 = 1 << _0x2dfbd5 - 1;
    let _0x1b76de = -1;
    let _0x48dcfa = 0;
    let _0x593cb8 = _0x2dfbd5;
    let _0x3220a8 = _0x2dfbd5;
    while (_0x3220a8--) {
        if ('vTQJi' === 'vTQJi') {
            peq[_0x7f42fe['charCodeAt'](_0x3220a8)] |= 1 << _0x3220a8;
        } else {
            const _0x5cf903 = distance(str, arr[_0x3220a8]);
            if (_0x5cf903 < min_distance) {
                min_distance = _0x5cf903;
                min_index = _0x3220a8;
            }
        }
    }
    for (_0x3220a8 = 0; _0x3220a8 < _0x5b4509; _0x3220a8++) {
        let _0x2aff93 = peq[_0x322fe8['charCodeAt'](_0x3220a8)];
        const _0x5d8fae = _0x2aff93 | _0x48dcfa;
        _0x2aff93 |= (_0x2aff93 & _0x1b76de) + _0x1b76de ^ _0x1b76de;
        _0x48dcfa |= ~(_0x2aff93 | _0x1b76de);
        _0x1b76de &= _0x2aff93;
        if (_0x48dcfa & _0x453651) {
            _0x593cb8++;
        }
        if (_0x1b76de & _0x453651) {
            if ('ftyWo' === 'oYByT') {
                if (_0x7f42fe['length'] > _0x322fe8['length']) {
                    const _0x561aaf = _0x322fe8;
                    _0x322fe8 = _0x7f42fe;
                    _0x7f42fe = _0x561aaf;
                }
                if (_0x7f42fe['length'] === 0) {
                    return _0x322fe8['length'];
                }
                if (_0x7f42fe['length'] <= 32) {
                    return myers_32(_0x7f42fe, _0x322fe8);
                }
                return myers_x(_0x7f42fe, _0x322fe8);
            } else {
                _0x593cb8--;
            }
        }
        _0x48dcfa = _0x48dcfa << 1 | 1;
        _0x1b76de = _0x1b76de << 1 | ~(_0x5d8fae | _0x48dcfa);
        _0x48dcfa &= _0x5d8fae;
    }
    _0x3220a8 = _0x2dfbd5;
    while (_0x3220a8--) {
        if ('tYXkB' === 'tYXkB') {
            peq[_0x7f42fe['charCodeAt'](_0x3220a8)] = 0;
        } else {
            mhc[_0x3220a8 / 32 | 0] ^= 1 << _0x3220a8;
        }
    }
    return _0x593cb8;
};
const myers_x = (_0x55ad3d, _0x485cf6) => {
    const _0x1e9114 = _0x55ad3d['length'];
    const _0x7a989 = _0x485cf6['length'];
    const _0x2fa2c2 = [];
    const _0x531f9c = [];
    const _0x2c5727 = Math['ceil'](_0x1e9114 / 32);
    const _0x1fce7e = Math['ceil'](_0x7a989 / 32);
    let _0x978a2b = _0x7a989;
    for (let _0x4b44d0 = 0; _0x4b44d0 < _0x2c5727; _0x4b44d0++) {
        if ('WefXw' !== 'WefXw') {
            _0x531f9c[_0x4b44d0 / 32 | 0] ^= 1 << _0x4b44d0;
        } else {
            _0x531f9c[_0x4b44d0] = -1;
            _0x2fa2c2[_0x4b44d0] = 0;
        }
    }
    let _0x185900 = 0;
    for (; _0x185900 < _0x1fce7e - 1; _0x185900++) {
        let _0x117da7 = 0;
        let _0x291dbf = -1;
        const _0x5ec6e5 = _0x185900 * 32;
        const _0x546ddd = Math['min'](32, _0x7a989) + _0x5ec6e5;
        for (let _0xbcce58 = _0x5ec6e5; _0xbcce58 < _0x546ddd; _0xbcce58++) {
            peq[_0x485cf6['charCodeAt'](_0xbcce58)] |= 1 << _0xbcce58;
        }
        _0x978a2b = _0x7a989;
        for (let _0x4b44d0 = 0; _0x4b44d0 < _0x1e9114; _0x4b44d0++) {
            const _0x506458 = peq[_0x55ad3d['charCodeAt'](_0x4b44d0)];
            const _0x2cdd24 = _0x531f9c[_0x4b44d0 / 32 | 0] >>> _0x4b44d0 & 1;
            const _0x443d92 = _0x2fa2c2[_0x4b44d0 / 32 | 0] >>> _0x4b44d0 & 1;
            const _0x29a704 = _0x506458 | _0x117da7;
            const _0x10e7f6 = ((_0x506458 | _0x443d92) & _0x291dbf) + _0x291dbf ^ _0x291dbf | _0x506458 | _0x443d92;
            let _0x105ea5 = _0x117da7 | ~(_0x10e7f6 | _0x291dbf);
            let _0x1bb514 = _0x291dbf & _0x10e7f6;
            if (_0x105ea5 >>> 31 ^ _0x2cdd24) {
                _0x531f9c[_0x4b44d0 / 32 | 0] ^= 1 << _0x4b44d0;
            }
            if (_0x1bb514 >>> 31 ^ _0x443d92) {
                _0x2fa2c2[_0x4b44d0 / 32 | 0] ^= 1 << _0x4b44d0;
            }
            _0x105ea5 = _0x105ea5 << 1 | _0x2cdd24;
            _0x1bb514 = _0x1bb514 << 1 | _0x443d92;
            _0x291dbf = _0x1bb514 | ~(_0x29a704 | _0x105ea5);
            _0x117da7 = _0x105ea5 & _0x29a704;
        }
        for (let _0x48a5fa = _0x5ec6e5; _0x48a5fa < _0x546ddd; _0x48a5fa++) {
            peq[_0x485cf6['charCodeAt'](_0x48a5fa)] = 0;
        }
    }
    let _0x481f78 = 0;
    let _0x3a944c = -1;
    const _0x9959d2 = _0x185900 * 32;
    const _0x163533 = Math['min'](32, _0x7a989 - _0x9959d2) + _0x9959d2;
    for (let _0x19a69a = _0x9959d2; _0x19a69a < _0x163533; _0x19a69a++) {
        peq[_0x485cf6['charCodeAt'](_0x19a69a)] |= 1 << _0x19a69a;
    }
    _0x978a2b = _0x7a989;
    for (let _0x24dd5d = 0; _0x24dd5d < _0x1e9114; _0x24dd5d++) {
        const _0x506458 = peq[_0x55ad3d['charCodeAt'](_0x24dd5d)];
        const _0x2cdd24 = _0x531f9c[_0x24dd5d / 32 | 0] >>> _0x24dd5d & 1;
        const _0x443d92 = _0x2fa2c2[_0x24dd5d / 32 | 0] >>> _0x24dd5d & 1;
        const _0x29a704 = _0x506458 | _0x481f78;
        const _0x10e7f6 = ((_0x506458 | _0x443d92) & _0x3a944c) + _0x3a944c ^ _0x3a944c | _0x506458 | _0x443d92;
        let _0x105ea5 = _0x481f78 | ~(_0x10e7f6 | _0x3a944c);
        let _0x1bb514 = _0x3a944c & _0x10e7f6;
        _0x978a2b += _0x105ea5 >>> _0x7a989 - 1 & 1;
        _0x978a2b -= _0x1bb514 >>> _0x7a989 - 1 & 1;
        if (_0x105ea5 >>> 31 ^ _0x2cdd24) {
            if ('YRlVc' !== 'XzJhD') {
                _0x531f9c[_0x24dd5d / 32 | 0] ^= 1 << _0x24dd5d;
            } else {
                return _0x485cf6['length'];
            }
        }
        if (_0x1bb514 >>> 31 ^ _0x443d92) {
            if ('dENwF' === 'KHvRF') {
                peq[_0x485cf6['charCodeAt'](_0x19a69a)] |= 1 << _0x19a69a;
            } else {
                _0x2fa2c2[_0x24dd5d / 32 | 0] ^= 1 << _0x24dd5d;
            }
        }
        _0x105ea5 = _0x105ea5 << 1 | _0x2cdd24;
        _0x1bb514 = _0x1bb514 << 1 | _0x443d92;
        _0x3a944c = _0x1bb514 | ~(_0x29a704 | _0x105ea5);
        _0x481f78 = _0x105ea5 & _0x29a704;
    }
    for (let _0x154803 = _0x9959d2; _0x154803 < _0x163533; _0x154803++) {
        peq[_0x485cf6['charCodeAt'](_0x154803)] = 0;
    }
    return _0x978a2b;
};
const distance = (_0x1afb09, _0x4fb370) => {
    if (_0x1afb09['length'] > _0x4fb370['length']) {
        const _0x5b605b = _0x4fb370;
        _0x4fb370 = _0x1afb09;
        _0x1afb09 = _0x5b605b;
    }
    if (_0x1afb09['length'] === 0) {
        if ('BJeWU' !== 'RDywg') {
            return _0x4fb370['length'];
        } else {
            sc--;
        }
    }
    if (_0x1afb09['length'] <= 32) {
        if ('ERMDp' !== 'ERMDp') {
            peq[_0x4fb370['charCodeAt'](k)] |= 1 << k;
        } else {
            return myers_32(_0x1afb09, _0x4fb370);
        }
    }
    return myers_x(_0x1afb09, _0x4fb370);
};
const closest = (_0x3d75ef, _0x435e2f) => {
    let _0x109df3 = Infinity;
    let _0x56d82e = 0;
    for (let _0x5820be = 0; _0x5820be < _0x435e2f['length']; _0x5820be++) {
        const _0x3ef3a3 = distance(_0x3d75ef, _0x435e2f[_0x5820be]);
        if (_0x3ef3a3 < _0x109df3) {
            if ('MuWQb' === 'MuWQb') {
                _0x109df3 = _0x3ef3a3;
                _0x56d82e = _0x5820be;
            } else {
                sc++;
            }
        }
    }
    return _0x435e2f[_0x56d82e];
};
module['exports'] = {
    'closest': closest,
    'distance': distance
};