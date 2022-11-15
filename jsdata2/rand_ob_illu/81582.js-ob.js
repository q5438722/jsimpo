const _0x38cf = ['externalUser', 'NotFoundError', 'missingContext', 'critical', 'vEIkh', 'toString', 'fNkRM', '4lNDAmO', '183988SpryPU', '1149686njwILm', '541DEXmYL', '1241fkaNgr', '1Vlfrqe', '1193137Fznjux', '1176734ifisUI', '1097038gFJxCk', '1456zeDOMu', '104ngDKkn', '@tryghost/errors', '@tryghost/tpl', 'missing context', 'integration', 'user', 'Model', 'extend', 'context', 'QiudK', 'pxVML', 'isExternalUser', 'internal', 'internalUser', 'get', 'external'];
const _0x5a9f89 = _0x23cb;

(function (_0x481ef1, _0x1e5b20) {
    const _0x43d3bc = _0x23cb;

    while (true) {
        try {
            const _0x53e0af = parseInt(_0x43d3bc(0xa5)) * -parseInt(_0x43d3bc(0xa6)) + parseInt(_0x43d3bc(0xa7)) + -parseInt(_0x43d3bc(0xa8)) * parseInt(_0x43d3bc(0xa9)) + parseInt(_0x43d3bc(0xaa)) * parseInt(_0x43d3bc(0xab)) + -parseInt(_0x43d3bc(0xac)) + parseInt(_0x43d3bc(0xad)) + parseInt(_0x43d3bc(0xae)) * -parseInt(_0x43d3bc(0xaf));

            if (_0x53e0af === _0x1e5b20) break;else _0x481ef1.push(_0x481ef1.shift());
        } catch (_0x23683e) {
            _0x481ef1.push(_0x481ef1.shift());
        }
    }
})(_0x38cf, 704370);

const errors = require(_0x5a9f89(0xb0));

const tpl = require(_0x5a9f89(0xb1));

const messages = { 'missingContext': _0x5a9f89(0xb2) };

function _0x23cb(_0x44e676, _0x480b41) {
    return _0x23cb = function (_0x1582f1, _0x227bee) {
        _0x1582f1 = _0x1582f1 - 165;
        const _0x30e08f = _0x38cf[_0x1582f1];

        return _0x30e08f;
    }, _0x23cb(_0x44e676, _0x480b41);
}
module['exports'] = function (_0x295b18) {
    const _0x2e7a93 = _0x5a9f89;
    const _0xbfac26 = {
        'QiudK': _0x2e7a93(0xb3),
        'pxVML': _0x2e7a93(0xb4),
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

    _0x295b18[_0x2e7a93(0xb5)] = _0x295b18.Model[_0x2e7a93(0xb6)]({
        'getActor'(_0x1fa01e = { 'context': {} }) {
            const _0x1672a5 = _0x2e7a93;

            if (_0x1fa01e.context && _0x1fa01e[_0x1672a5(0xb7)][_0x1672a5(0xb3)]) return {
                'id': _0x1fa01e[_0x1672a5(0xb7)].integration.id,
                'type': _0xbfac26[_0x1672a5(0xb8)]
            };
            if (_0x1fa01e.context && _0x1fa01e[_0x1672a5(0xb7)][_0x1672a5(0xb4)]) return {
                'id': _0x1fa01e[_0x1672a5(0xb7)][_0x1672a5(0xb4)],
                'type': _0xbfac26[_0x1672a5(0xb9)]
            };
            return null;
        },
        'contextUser': function _0x5b31e9(_0x67e1a1) {
            const _0x589b6d = _0x2e7a93;

            _0x67e1a1 = _0xbfac26.Fuves(_0x67e1a1, {}), _0x67e1a1[_0x589b6d(0xb7)] = _0x67e1a1[_0x589b6d(0xb7)] || {};
            if (_0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xb4)] || _0x295b18.Model[_0x589b6d(0xba)](_0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xb4)])) return _0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xb4)];else {
                if (_0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xb3)]) return _0x295b18[_0x589b6d(0xb5)].internalUser;else {
                    if (_0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xbb)]) return _0x295b18[_0x589b6d(0xb5)][_0x589b6d(0xbc)];else {
                        if (this[_0x589b6d(0xbd)]('id')) return this[_0x589b6d(0xbd)]('id');else {
                            if (_0x67e1a1[_0x589b6d(0xb7)][_0x589b6d(0xbe)]) return _0x295b18[_0x589b6d(0xb5)][_0x589b6d(0xbf)];else throw new errors[_0x589b6d(0xc0)]({
                                'message': _0xbfac26.VodPO(tpl, messages[_0x589b6d(0xc1)]),
                                'level': _0x589b6d(0xc2)
                            });
                        }
                    }
                }
            }
        }
    }, {
        'internalUser': 0x1,
        'externalUser': 0x0,
        'isInternalUser': function _0x3d1921(_0x504b3b) {
            const _0x159dc7 = _0x2e7a93;

            return _0xbfac26[_0x159dc7(0xc3)](_0x504b3b, _0x295b18[_0x159dc7(0xb5)][_0x159dc7(0xbc)]) || _0xbfac26.oBUWZ(_0x504b3b, _0x295b18[_0x159dc7(0xb5)][_0x159dc7(0xbc)][_0x159dc7(0xc4)]());
        },
        'isExternalUser': function _0x594960(_0x39efbc) {
            const _0x285bbc = _0x2e7a93;

            return _0xbfac26[_0x285bbc(0xc5)](_0x39efbc, _0x295b18[_0x285bbc(0xb5)][_0x285bbc(0xbf)]) || _0xbfac26[_0x285bbc(0xc5)](_0x39efbc, _0x295b18[_0x285bbc(0xb5)][_0x285bbc(0xbf)].toString());
        }
    });
};
