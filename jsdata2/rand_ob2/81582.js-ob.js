const _0x373c = [
    'exports',
    'Model',
    'extend',
    'context',
    'integration',
    'user',
    'isExternalUser',
    'internalUser',
    'internal',
    'get',
    'external',
    'externalUser',
    'NotFoundError',
    'critical',
    'toString',
    '7ZrbIEK',
    '29881JcqGpU',
    '180584bANZvJ',
    '30462SpFbzB',
    '7vvwqxb',
    '120451rYZMVg',
    '26997pCkbfq',
    '1sNJWtL',
    '72795lUYMKN',
    '197741nIcywZ',
    '1BaEfdw',
    '@tryghost/errors',
    '@tryghost/tpl',
    'missing\x20context'
];
const _0x185f54 = _0x374b;
(function (_0x28a540, _0x5ac337) {
    const _0x5ad8cb = _0x374b;
    while (!![]) {
        try {
            const _0xcb70e3 = -parseInt(_0x5ad8cb(0x156)) * parseInt(_0x5ad8cb(0x157)) + parseInt(_0x5ad8cb(0x158)) + parseInt(_0x5ad8cb(0x159)) * -parseInt(_0x5ad8cb(0x15a)) + parseInt(_0x5ad8cb(0x15b)) + parseInt(_0x5ad8cb(0x15c)) + -parseInt(_0x5ad8cb(0x15d)) * -parseInt(_0x5ad8cb(0x15e)) + -parseInt(_0x5ad8cb(0x15f)) * -parseInt(_0x5ad8cb(0x160));
            if (_0xcb70e3 === _0x5ac337)
                break;
            else
                _0x28a540['push'](_0x28a540['shift']());
        } catch (_0x2d3f45) {
            _0x28a540['push'](_0x28a540['shift']());
        }
    }
}(_0x373c, 0x2b027));
const errors = require(_0x185f54(0x161)), tpl = require(_0x185f54(0x162)), messages = { 'missingContext': _0x185f54(0x163) };
function _0x374b(_0x111e2d, _0x39baf1) {
    return _0x374b = function (_0x373c05, _0x374b1b) {
        _0x373c05 = _0x373c05 - 0x156;
        let _0xf925d2 = _0x373c[_0x373c05];
        return _0xf925d2;
    }, _0x374b(_0x111e2d, _0x39baf1);
}
module[_0x185f54(0x164)] = function (_0x44aab1) {
    const _0x6ace16 = _0x185f54;
    _0x44aab1['Model'] = _0x44aab1[_0x6ace16(0x165)][_0x6ace16(0x166)]({
        'getActor'(_0x4d6c43 = { 'context': {} }) {
            const _0xbfa86c = _0x6ace16;
            if (_0x4d6c43['context'] && _0x4d6c43[_0xbfa86c(0x167)][_0xbfa86c(0x168)])
                return {
                    'id': _0x4d6c43[_0xbfa86c(0x167)][_0xbfa86c(0x168)]['id'],
                    'type': _0xbfa86c(0x168)
                };
            if (_0x4d6c43['context'] && _0x4d6c43[_0xbfa86c(0x167)][_0xbfa86c(0x169)])
                return {
                    'id': _0x4d6c43[_0xbfa86c(0x167)][_0xbfa86c(0x169)],
                    'type': 'user'
                };
            return null;
        },
        'contextUser': function _0x2e9cd1(_0x58efbf) {
            const _0x3966cf = _0x6ace16;
            _0x58efbf = _0x58efbf || {}, _0x58efbf[_0x3966cf(0x167)] = _0x58efbf[_0x3966cf(0x167)] || {};
            if (_0x58efbf[_0x3966cf(0x167)][_0x3966cf(0x169)] || _0x44aab1['Model'][_0x3966cf(0x16a)](_0x58efbf['context']['user']))
                return _0x58efbf[_0x3966cf(0x167)][_0x3966cf(0x169)];
            else {
                if (_0x58efbf[_0x3966cf(0x167)][_0x3966cf(0x168)])
                    return _0x44aab1[_0x3966cf(0x165)][_0x3966cf(0x16b)];
                else {
                    if (_0x58efbf['context'][_0x3966cf(0x16c)])
                        return _0x44aab1[_0x3966cf(0x165)][_0x3966cf(0x16b)];
                    else {
                        if (this[_0x3966cf(0x16d)]('id'))
                            return this[_0x3966cf(0x16d)]('id');
                        else {
                            if (_0x58efbf[_0x3966cf(0x167)][_0x3966cf(0x16e)])
                                return _0x44aab1[_0x3966cf(0x165)][_0x3966cf(0x16f)];
                            else
                                throw new errors[(_0x3966cf(0x170))]({
                                    'message': tpl(messages['missingContext']),
                                    'level': _0x3966cf(0x171)
                                });
                        }
                    }
                }
            }
        }
    }, {
        'internalUser': 0x1,
        'externalUser': 0x0,
        'isInternalUser': function _0x1a82e0(_0xee2da6) {
            const _0x18701e = _0x6ace16;
            return _0xee2da6 === _0x44aab1['Model'][_0x18701e(0x16b)] || _0xee2da6 === _0x44aab1[_0x18701e(0x165)][_0x18701e(0x16b)][_0x18701e(0x172)]();
        },
        'isExternalUser': function _0xf4b4ec(_0x47de13) {
            const _0x33e1da = _0x6ace16;
            return _0x47de13 === _0x44aab1[_0x33e1da(0x165)][_0x33e1da(0x16f)] || _0x47de13 === _0x44aab1[_0x33e1da(0x165)][_0x33e1da(0x16f)][_0x33e1da(0x172)]();
        }
    });
};
