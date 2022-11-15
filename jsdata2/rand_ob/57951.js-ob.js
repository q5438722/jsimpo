'use strict';
const _0x4c1b = [
    '277881umeWDq',
    'url',
    'path',
    '--experimental-policy',
    'internal/process/policy',
    'has',
    'QxbSs',
    'udtQR',
    'yCkJN',
    'fRkxp',
    'lLMFr',
    'manifest',
    'Jcojq',
    'VdzeH',
    'exports',
    '480411TNySDR',
    '7173LZYlQp',
    '72yKhIzp',
    '331993iHzjSt',
    '3192xknYMF',
    '8MlsEqi',
    '279359xpBwsN',
    '1mVwfOq',
    '1yzUMPa',
    '490487yYXXqB'
];
function _0x3c03(_0x33fbc1, _0x312d55) {
    return _0x3c03 = function (_0x2df435, _0x2b40fe) {
        _0x2df435 = _0x2df435 - (0x11 * 0x21a + 0x30f + -0x2655);
        let _0x5bed3a = _0x4c1b[_0x2df435];
        return _0x5bed3a;
    }, _0x3c03(_0x33fbc1, _0x312d55);
}
const _0x171fc8 = _0x3c03;
(function (_0x2c1d0d, _0x213f35) {
    const _0x25acd4 = _0x3c03;
    while (!![]) {
        try {
            const _0x590115 = parseInt(_0x25acd4(0x74)) + parseInt(_0x25acd4(0x75)) * parseInt(_0x25acd4(0x76)) + -parseInt(_0x25acd4(0x77)) + -parseInt(_0x25acd4(0x78)) * parseInt(_0x25acd4(0x79)) + -parseInt(_0x25acd4(0x7a)) * -parseInt(_0x25acd4(0x7b)) + parseInt(_0x25acd4(0x7c)) * -parseInt(_0x25acd4(0x7d)) + parseInt(_0x25acd4(0x7e));
            if (_0x590115 === _0x213f35)
                break;
            else
                _0x2c1d0d['push'](_0x2c1d0d['shift']());
        } catch (_0x4689b7) {
            _0x2c1d0d['push'](_0x2c1d0d['shift']());
        }
    }
}(_0x4c1b, -0x21baa + -0x72acd * -0x3 + -0x2 * 0x44f49));
const {SafeMap} = primordials, {internalModuleReadJSON} = internalBinding('fs'), {pathToFileURL} = require(_0x171fc8(0x7f)), {toNamespacedPath} = require(_0x171fc8(0x80)), cache = new SafeMap();
let manifest;
function read(_0x591d24) {
    const _0x5a71a0 = _0x171fc8, _0x9240ca = {
            'QxbSs': function (_0x458559, _0x2320ef) {
                return _0x458559(_0x2320ef);
            },
            'udtQR': 'internal/options',
            'yCkJN': function (_0xb38d6f, _0x192659) {
                return _0xb38d6f === _0x192659;
            },
            'fRkxp': function (_0x3afc1b, _0x2e2158) {
                return _0x3afc1b(_0x2e2158);
            },
            'dyRFa': _0x5a71a0(0x81),
            'lLMFr': _0x5a71a0(0x82),
            'Jcojq': function (_0x31ba57, _0x3e7b19) {
                return _0x31ba57 !== _0x3e7b19;
            },
            'VdzeH': function (_0xfce035, _0x35f5e6) {
                return _0xfce035(_0x35f5e6);
            }
        };
    if (cache[_0x5a71a0(0x83)](_0x591d24))
        return cache['get'](_0x591d24);
    const {
            0x0: _0x3e10bf,
            0x1: _0x5b0f20
        } = _0x9240ca['QxbSs'](internalModuleReadJSON, _0x9240ca[_0x5a71a0(0x84)](toNamespacedPath, _0x591d24)), _0x4ae482 = {
            'string': _0x3e10bf,
            'containsKeys': _0x5b0f20
        }, {getOptionValue: _0x45e36c} = require(_0x9240ca[_0x5a71a0(0x85)]);
    if (_0x3e10bf !== undefined) {
        _0x9240ca[_0x5a71a0(0x86)](manifest, undefined) && (manifest = _0x9240ca['fRkxp'](_0x45e36c, _0x9240ca['dyRFa']) ? _0x9240ca[_0x5a71a0(0x87)](require, _0x9240ca[_0x5a71a0(0x88)])[_0x5a71a0(0x89)] : null);
        if (_0x9240ca[_0x5a71a0(0x8a)](manifest, null)) {
            const _0x4801cb = _0x9240ca[_0x5a71a0(0x8b)](pathToFileURL, _0x591d24);
            manifest['assertIntegrity'](_0x4801cb, _0x3e10bf);
        }
    }
    return cache['set'](_0x591d24, _0x4ae482), _0x4ae482;
}
module[_0x171fc8(0x8c)] = { 'read': read };
