'use strict';
const _0x4b9f = [
    '6682AgUvXV',
    '96RAacvn',
    '1830308KLgWGC',
    '1238444UrEMIJ',
    '1309859uAdIWK',
    '1xZsAhR',
    '1815900ZDwWKj',
    '1YTLtwy',
    '239807KFcGFQ',
    '148439NdfWWz',
    '21jNUVZh',
    'url',
    'path',
    'has',
    'get',
    'internal/options',
    '--experimental-policy',
    'manifest',
    'set'
];
const _0x3f315b = _0x4dff;
(function (_0x57cc55, _0x2c8c30) {
    const _0x35ac04 = _0x4dff;
    while (!![]) {
        try {
            const _0x52d0e4 = parseInt(_0x35ac04(0x17a)) * parseInt(_0x35ac04(0x17b)) + parseInt(_0x35ac04(0x17c)) + -parseInt(_0x35ac04(0x17d)) + -parseInt(_0x35ac04(0x17e)) * parseInt(_0x35ac04(0x17f)) + -parseInt(_0x35ac04(0x180)) + -parseInt(_0x35ac04(0x181)) * parseInt(_0x35ac04(0x182)) + -parseInt(_0x35ac04(0x183)) * -parseInt(_0x35ac04(0x184));
            if (_0x52d0e4 === _0x2c8c30)
                break;
            else
                _0x57cc55['push'](_0x57cc55['shift']());
        } catch (_0x1efe7f) {
            _0x57cc55['push'](_0x57cc55['shift']());
        }
    }
}(_0x4b9f, 0xf079d));
const {SafeMap} = primordials, {internalModuleReadJSON} = internalBinding('fs'), {pathToFileURL} = require(_0x3f315b(0x185)), {toNamespacedPath} = require(_0x3f315b(0x186)), cache = new SafeMap();
function _0x4dff(_0x147aac, _0x33ba28) {
    return _0x4dff = function (_0x4b9fc6, _0x4dff9e) {
        _0x4b9fc6 = _0x4b9fc6 - 0x17a;
        let _0xbbb368 = _0x4b9f[_0x4b9fc6];
        return _0xbbb368;
    }, _0x4dff(_0x147aac, _0x33ba28);
}
let manifest;
function read(_0x1f810f) {
    const _0x2384e8 = _0x3f315b;
    if (cache[_0x2384e8(0x187)](_0x1f810f))
        return cache[_0x2384e8(0x188)](_0x1f810f);
    const {
            0x0: _0x2e6270,
            0x1: _0x17a7d8
        } = internalModuleReadJSON(toNamespacedPath(_0x1f810f)), _0x298e8f = {
            'string': _0x2e6270,
            'containsKeys': _0x17a7d8
        }, {getOptionValue: _0x1a254f} = require(_0x2384e8(0x189));
    if (_0x2e6270 !== undefined) {
        manifest === undefined && (manifest = _0x1a254f(_0x2384e8(0x18a)) ? require('internal/process/policy')[_0x2384e8(0x18b)] : null);
        if (manifest !== null) {
            const _0x2368ca = pathToFileURL(_0x1f810f);
            manifest['assertIntegrity'](_0x2368ca, _0x2e6270);
        }
    }
    return cache[_0x2384e8(0x18c)](_0x1f810f, _0x298e8f), _0x298e8f;
}
module['exports'] = { 'read': read };
