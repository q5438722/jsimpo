const errors = require(_0x5a9f89(176)), tpl = require(_0x5a9f89(177)), messages = { 'missingContext': _0x5a9f89(178) };
function _0x23cb(_0x44e676, _0x480b41) {
    return _0x23cb = function (_0x1582f1, _0x227bee) {
        _0x1582f1 = _0x1582f1 - (-10 * 790 + 5131 + 2934);
        let _0x30e08f = _0x38cf[_0x1582f1];
        return _0x30e08f;
    }, _0x23cb(_0x44e676, _0x480b41);
}
module['exports'] = function (_0x295b18) {
    const _0x2e7a93 = _0x5a9f89, _0xbfac26 = {
            'QiudK': _0x2e7a93(179),
            'pxVML': _0x2e7a93(180),
            'Fuves': function (_0x42a70a, _0x416e4e) {
                return _0x42a70a || _0x416e4e;
            },
            'VodPO': function (_0x2c0158, _0x50b229) {
                return _0x2c0158(_0x50b229);
            },
            'vEIkh': function (_0xce7a10, _0x5b7d1d) {
                return _0xce7a10 === _0x5b7d1d;
            },
            'oBUWZ': function (_0x236f1c, _0x5c34da) {
                return _0x236f1c === _0x5c34da;
            },
            'fNkRM': function (_0x17e1b3, _0xae04ab) {
                return _0x17e1b3 === _0xae04ab;
            }
        };
    _0x295b18[_0x2e7a93(181)] = _0x295b18['Model'][_0x2e7a93(182)]({
        'getActor'(_0x1fa01e = { 'context': {} }) {
            const _0x1672a5 = _0x2e7a93;
            if (_0x1fa01e['context'] && _0x1fa01e[_0x1672a5(183)][_0x1672a5(179)])
                return {
                    'id': _0x1fa01e[_0x1672a5(183)]['integration']['id'],
                    'type': _0xbfac26[_0x1672a5(184)]
                };
            if (_0x1fa01e['context'] && _0x1fa01e[_0x1672a5(183)][_0x1672a5(180)])
                return {
                    'id': _0x1fa01e[_0x1672a5(183)][_0x1672a5(180)],
                    'type': _0xbfac26[_0x1672a5(185)]
                };
            return null;
        },
        'contextUser': function _0x5b31e9(_0x67e1a1) {
            const _0x589b6d = _0x2e7a93;
            _0x67e1a1 = _0xbfac26['Fuves'](_0x67e1a1, {}), _0x67e1a1[_0x589b6d(183)] = _0x67e1a1[_0x589b6d(183)] || {};
            if (_0x67e1a1[_0x589b6d(183)][_0x589b6d(180)] || _0x295b18['Model'][_0x589b6d(186)](_0x67e1a1[_0x589b6d(183)][_0x589b6d(180)]))
                return _0x67e1a1[_0x589b6d(183)][_0x589b6d(180)];
            else {
                if (_0x67e1a1[_0x589b6d(183)][_0x589b6d(179)])
                    return _0x295b18[_0x589b6d(181)]['internalUser'];
                else {
                    if (_0x67e1a1[_0x589b6d(183)][_0x589b6d(187)])
                        return _0x295b18[_0x589b6d(181)][_0x589b6d(188)];
                    else {
                        if (this[_0x589b6d(189)]('id'))
                            return this[_0x589b6d(189)]('id');
                        else {
                            if (_0x67e1a1[_0x589b6d(183)][_0x589b6d(190)])
                                return _0x295b18[_0x589b6d(181)][_0x589b6d(191)];
                            else
                                throw new errors[(_0x589b6d(192))]({
                                    'message': _0xbfac26['VodPO'](tpl, messages[_0x589b6d(193)]),
                                    'level': _0x589b6d(194)
                                });
                        }
                    }
                }
            }
        }
    }, {
        'internalUser': 1,
        'externalUser': 0,
        'isInternalUser': function _0x3d1921(_0x504b3b) {
            const _0x159dc7 = _0x2e7a93;
            return _0xbfac26[_0x159dc7(195)](_0x504b3b, _0x295b18[_0x159dc7(181)][_0x159dc7(188)]) || _0xbfac26['oBUWZ'](_0x504b3b, _0x295b18[_0x159dc7(181)][_0x159dc7(188)][_0x159dc7(196)]());
        },
        'isExternalUser': function _0x594960(_0x39efbc) {
            const _0x285bbc = _0x2e7a93;
            return _0xbfac26[_0x285bbc(197)](_0x39efbc, _0x295b18[_0x285bbc(181)][_0x285bbc(191)]) || _0xbfac26[_0x285bbc(197)](_0x39efbc, _0x295b18[_0x285bbc(181)][_0x285bbc(191)]['toString']());
        }
    });
};