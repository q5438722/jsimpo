const errors = require(_0x185f54(353)), tpl = require(_0x185f54(354)), messages = { 'missingContext': _0x185f54(355) };
function _0x374b(_0x111e2d, _0x39baf1) {
    return _0x374b = function (_0x373c05, _0x374b1b) {
        _0x373c05 = _0x373c05 - 342;
        let _0xf925d2 = _0x373c[_0x373c05];
        return _0xf925d2;
    }, _0x374b(_0x111e2d, _0x39baf1);
}
module[_0x185f54(356)] = function (_0x44aab1) {
    const _0x6ace16 = _0x185f54;
    _0x44aab1['Model'] = _0x44aab1[_0x6ace16(357)][_0x6ace16(358)]({
        'getActor'(_0x4d6c43 = { 'context': {} }) {
            const _0xbfa86c = _0x6ace16;
            if (_0x4d6c43['context'] && _0x4d6c43[_0xbfa86c(359)][_0xbfa86c(360)])
                return {
                    'id': _0x4d6c43[_0xbfa86c(359)][_0xbfa86c(360)]['id'],
                    'type': _0xbfa86c(360)
                };
            if (_0x4d6c43['context'] && _0x4d6c43[_0xbfa86c(359)][_0xbfa86c(361)])
                return {
                    'id': _0x4d6c43[_0xbfa86c(359)][_0xbfa86c(361)],
                    'type': 'user'
                };
            return null;
        },
        'contextUser': function _0x2e9cd1(_0x58efbf) {
            const _0x3966cf = _0x6ace16;
            _0x58efbf = _0x58efbf || {}, _0x58efbf[_0x3966cf(359)] = _0x58efbf[_0x3966cf(359)] || {};
            if (_0x58efbf[_0x3966cf(359)][_0x3966cf(361)] || _0x44aab1['Model'][_0x3966cf(362)](_0x58efbf['context']['user']))
                return _0x58efbf[_0x3966cf(359)][_0x3966cf(361)];
            else {
                if (_0x58efbf[_0x3966cf(359)][_0x3966cf(360)])
                    return _0x44aab1[_0x3966cf(357)][_0x3966cf(363)];
                else {
                    if (_0x58efbf['context'][_0x3966cf(364)])
                        return _0x44aab1[_0x3966cf(357)][_0x3966cf(363)];
                    else {
                        if (this[_0x3966cf(365)]('id'))
                            return this[_0x3966cf(365)]('id');
                        else {
                            if (_0x58efbf[_0x3966cf(359)][_0x3966cf(366)])
                                return _0x44aab1[_0x3966cf(357)][_0x3966cf(367)];
                            else
                                throw new errors[(_0x3966cf(368))]({
                                    'message': tpl(messages['missingContext']),
                                    'level': _0x3966cf(369)
                                });
                        }
                    }
                }
            }
        }
    }, {
        'internalUser': 1,
        'externalUser': 0,
        'isInternalUser': function _0x1a82e0(_0xee2da6) {
            const _0x18701e = _0x6ace16;
            return _0xee2da6 === _0x44aab1['Model'][_0x18701e(363)] || _0xee2da6 === _0x44aab1[_0x18701e(357)][_0x18701e(363)][_0x18701e(370)]();
        },
        'isExternalUser': function _0xf4b4ec(_0x47de13) {
            const _0x33e1da = _0x6ace16;
            return _0x47de13 === _0x44aab1[_0x33e1da(357)][_0x33e1da(367)] || _0x47de13 === _0x44aab1[_0x33e1da(357)][_0x33e1da(367)][_0x33e1da(370)]();
        }
    });
};