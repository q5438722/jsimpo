const {SafeMap} = primordials, {internalModuleReadJSON} = internalBinding('fs'), {pathToFileURL} = require(_0x3f315b(389)), {toNamespacedPath} = require(_0x3f315b(390)), cache = new SafeMap();
function _0x4dff(_0x147aac, _0x33ba28) {
    return _0x4dff = function (_0x4b9fc6, _0x4dff9e) {
        _0x4b9fc6 = _0x4b9fc6 - 378;
        let _0xbbb368 = _0x4b9f[_0x4b9fc6];
        return _0xbbb368;
    }, _0x4dff(_0x147aac, _0x33ba28);
}
let manifest;
function read(_0x1f810f) {
    const _0x2384e8 = _0x3f315b;
    if (cache[_0x2384e8(391)](_0x1f810f))
        return cache[_0x2384e8(392)](_0x1f810f);
    const {
            0: _0x2e6270,
            1: _0x17a7d8
        } = internalModuleReadJSON(toNamespacedPath(_0x1f810f)), _0x298e8f = {
            'string': _0x2e6270,
            'containsKeys': _0x17a7d8
        }, {getOptionValue: _0x1a254f} = require(_0x2384e8(393));
    if (_0x2e6270 !== undefined) {
        manifest === undefined && (manifest = _0x1a254f(_0x2384e8(394)) ? require('internal/process/policy')[_0x2384e8(395)] : null);
        if (manifest !== null) {
            const _0x2368ca = pathToFileURL(_0x1f810f);
            manifest['assertIntegrity'](_0x2368ca, _0x2e6270);
        }
    }
    return cache[_0x2384e8(396)](_0x1f810f, _0x298e8f), _0x298e8f;
}
module['exports'] = { 'read': read };