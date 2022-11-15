const {SafeMap} = primordials, {internalModuleReadJSON} = internalBinding('fs'), {pathToFileURL} = require(_0x171fc8(127)), {toNamespacedPath} = require(_0x171fc8(128)), cache = new SafeMap();
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
            'dyRFa': _0x5a71a0(129),
            'lLMFr': _0x5a71a0(130),
            'Jcojq': function (_0x31ba57, _0x3e7b19) {
                return _0x31ba57 !== _0x3e7b19;
            },
            'VdzeH': function (_0xfce035, _0x35f5e6) {
                return _0xfce035(_0x35f5e6);
            }
        };
    if (cache[_0x5a71a0(131)](_0x591d24))
        return cache['get'](_0x591d24);
    const {
            0: _0x3e10bf,
            1: _0x5b0f20
        } = _0x9240ca['QxbSs'](internalModuleReadJSON, _0x9240ca[_0x5a71a0(132)](toNamespacedPath, _0x591d24)), _0x4ae482 = {
            'string': _0x3e10bf,
            'containsKeys': _0x5b0f20
        }, {getOptionValue: _0x45e36c} = require(_0x9240ca[_0x5a71a0(133)]);
    if (_0x3e10bf !== undefined) {
        _0x9240ca[_0x5a71a0(134)](manifest, undefined) && (manifest = _0x9240ca['fRkxp'](_0x45e36c, _0x9240ca['dyRFa']) ? _0x9240ca[_0x5a71a0(135)](require, _0x9240ca[_0x5a71a0(136)])[_0x5a71a0(137)] : null);
        if (_0x9240ca[_0x5a71a0(138)](manifest, null)) {
            const _0x4801cb = _0x9240ca[_0x5a71a0(139)](pathToFileURL, _0x591d24);
            manifest['assertIntegrity'](_0x4801cb, _0x3e10bf);
        }
    }
    return cache['set'](_0x591d24, _0x4ae482), _0x4ae482;
}
module[_0x171fc8(140)] = { 'read': read };