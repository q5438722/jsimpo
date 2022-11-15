var css = require('css'), util = require(_0xd714a7(333)), validateItem = require('./lib/validator')[_0xd714a7(334)], shorthandParser = require(_0xd714a7(335));
function convertLengthShorthand(_0x9a8f3c, _0x1d17da) {
    var _0x2cee07 = _0xd714a7;
    for (var _0x13cf0f = 0; _0x13cf0f < _0x9a8f3c[_0x2cee07(336)]['length']; _0x13cf0f++) {
        var _0x24092d = _0x9a8f3c[_0x2cee07(336)][_0x13cf0f];
        if (_0x24092d[_0x2cee07(337)] === _0x1d17da) {
            var _0x3e6a49 = _0x24092d[_0x2cee07(338)]['split'](/\s+/);
            _0x3e6a49[1] = _0x3e6a49[1] || _0x3e6a49[0], _0x3e6a49[2] = _0x3e6a49[2] || _0x3e6a49[0], _0x3e6a49[3] = _0x3e6a49[3] || _0x3e6a49[1], _0x9a8f3c[_0x2cee07(336)][_0x2cee07(339)](_0x13cf0f, 1), _0x9a8f3c[_0x2cee07(336)][_0x2cee07(339)](_0x13cf0f, 0, {
                'type': _0x2cee07(340),
                'property': _0x1d17da + _0x2cee07(341),
                'value': _0x3e6a49[3],
                'position': _0x24092d[_0x2cee07(342)]
            }), _0x9a8f3c[_0x2cee07(336)]['splice'](_0x13cf0f, 0, {
                'type': _0x2cee07(340),
                'property': _0x1d17da + _0x2cee07(343),
                'value': _0x3e6a49[2],
                'position': _0x24092d[_0x2cee07(342)]
            }), _0x9a8f3c[_0x2cee07(336)][_0x2cee07(339)](_0x13cf0f, 0, {
                'type': _0x2cee07(340),
                'property': _0x1d17da + _0x2cee07(344),
                'value': _0x3e6a49[1],
                'position': _0x24092d[_0x2cee07(342)]
            }), _0x9a8f3c['declarations']['splice'](_0x13cf0f, 0, {
                'type': _0x2cee07(340),
                'property': _0x1d17da + _0x2cee07(345),
                'value': _0x3e6a49[0],
                'position': _0x24092d[_0x2cee07(342)]
            });
        }
    }
}
function mergeStyle(_0xae652a, _0x113276, _0xc2b65, _0xa084ba, _0x22c49a, _0x11f960) {
    var _0x45f9ec = _0xd714a7;
    if (!process[_0x45f9ec(346)][_0x45f9ec(347)]) {
        _0xae652a[_0x113276] = _0xae652a[_0x113276] || {}, _0xae652a[_0x113276][_0x22c49a] = _0xa084ba[_0x22c49a];
        return;
    }
    _0x113276 = _0x113276['split']('.')[_0x45f9ec(348)](_0x55831a => '.' + _0x55831a)['slice'](1);
    var _0x4bcad7 = _0x113276['find'](_0x33be08 => _0x33be08 in _0xae652a) || _0x113276[0];
    _0xc2b65 += _0x113276[_0x45f9ec(349)](_0x15fc12 => _0x15fc12 !== _0x4bcad7)['sort']()[_0x45f9ec(350)]('');
    var _0x1f530a = _0xae652a[_0x4bcad7] = _0xae652a[_0x4bcad7] || {}, _0x48337c = _0x1f530a[_0xc2b65] = _0x1f530a[_0xc2b65] || {};
    _0x48337c[_0x22c49a] = [
        ..._0xa084ba[_0x22c49a],
        _0xc2b65[_0x45f9ec(351)]('.')[_0x45f9ec(352)] - 1,
        _0x11f960
    ];
}
function parse(_0x4efe66, _0x30d01b) {
    var _0xaae059 = _0xd714a7, _0x103d22, _0x2dce1e, _0x5bcc05 = {}, _0x4d2871 = [];
    _0x103d22 = css[_0xaae059(353)](_0x4efe66, { 'silent': !![] }), _0x103d22[_0xaae059(354)]['parsingErrors'] && _0x103d22['stylesheet'][_0xaae059(355)][_0xaae059(352)] && (_0x2dce1e = _0x103d22[_0xaae059(354)][_0xaae059(355)], _0x2dce1e[_0xaae059(356)](function (_0x4d7a4c) {
        var _0x3dc5d1 = _0xaae059;
        _0x4d2871[_0x3dc5d1(357)]({
            'line': _0x4d7a4c[_0x3dc5d1(358)],
            'column': _0x4d7a4c[_0x3dc5d1(359)],
            'reason': _0x4d7a4c['toString']()[_0x3dc5d1(360)]('Error', _0x3dc5d1(361))
        });
    })), _0x103d22 && _0x103d22[_0xaae059(362)] === _0xaae059(354) && _0x103d22['stylesheet'] && _0x103d22[_0xaae059(354)][_0xaae059(363)] && _0x103d22[_0xaae059(354)][_0xaae059(363)]['length'] && _0x103d22[_0xaae059(354)][_0xaae059(363)][_0xaae059(356)](function (_0x48a945, _0xabb336) {
        var _0x3ed20b = _0xaae059, _0x53e23c = _0x48a945['type'], _0x5e8c5c = {}, _0x284b06 = [];
        if (_0x53e23c === _0x3ed20b(364))
            _0x48a945[_0x3ed20b(336)] && _0x48a945['declarations']['length'] && (_0x48a945[_0x3ed20b(336)] = shorthandParser(_0x48a945[_0x3ed20b(336)]), convertLengthShorthand(_0x48a945, _0x3ed20b(365)), convertLengthShorthand(_0x48a945, 'margin'), _0x48a945[_0x3ed20b(336)][_0x3ed20b(356)](function (_0x4a24ac) {
                var _0x58d3da = _0x3ed20b, _0x16de6f = _0x4a24ac[_0x58d3da(362)], _0x39f2a1, _0x55c9d1, _0x501ad1, _0x247e8a, _0xd31464, _0x498476;
                if (_0x16de6f !== _0x58d3da(340))
                    return;
                _0x39f2a1 = _0x4a24ac[_0x58d3da(337)], _0x55c9d1 = _0x4a24ac[_0x58d3da(338)];
                var _0x58876c = _0x55c9d1[_0x58d3da(360)](/\s*!important/g, ''), _0x399733 = Number(_0x55c9d1 !== _0x58876c);
                _0x55c9d1 = _0x58876c, _0x498476 = util[_0x58d3da(366)](_0x39f2a1), _0xd31464 = validateItem(_0x498476, _0x55c9d1);
                if (typeof _0xd31464[_0x58d3da(338)] === 'number' || typeof _0xd31464[_0x58d3da(338)] === _0x58d3da(367)) {
                    if (process[_0x58d3da(346)][_0x58d3da(347)]) {
                        var _0x525535 = _0x5e8c5c[_0x498476];
                        _0x5e8c5c[_0x498476] = Array[_0x58d3da(368)](_0x525535) && _0x525535[1] > _0x399733 ? _0x525535 : [
                            _0xd31464[_0x58d3da(338)],
                            _0x399733
                        ];
                    } else
                        _0x5e8c5c[_0x498476] = _0xd31464[_0x58d3da(338)];
                }
                _0xd31464[_0x58d3da(369)] && (_0xd31464[_0x58d3da(369)]['line'] = _0x4a24ac[_0x58d3da(342)][_0x58d3da(370)][_0x58d3da(358)], _0xd31464[_0x58d3da(369)][_0x58d3da(359)] = _0x4a24ac[_0x58d3da(342)][_0x58d3da(370)][_0x58d3da(359)], _0x284b06[_0x58d3da(357)](_0xd31464[_0x58d3da(369)]));
            }), _0x48a945[_0x3ed20b(371)][_0x3ed20b(356)](function (_0x3e49e8) {
                var _0x242674 = _0x3ed20b;
                _0x3e49e8 = _0x3e49e8[_0x242674(360)](/\s*([\+\~\>])\s*/g, '$1')[_0x242674(360)](/\s+/, ' ');
                const _0xae1614 = _0x3e49e8[_0x242674(372)](process[_0x242674(346)]['UNI_USING_NVUE_STYLE_COMPILER'] ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+\~\> ])*)((?:\.[A-Za-z0-9_\-\:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
                if (_0xae1614) {
                    var _0x83fd86 = _0xae1614[1], _0x105932 = _0xae1614[2], _0x2bbb1e = _0x105932['indexOf'](':');
                    if (_0x2bbb1e > -1) {
                        var _0x388a5b = _0x105932[_0x242674(373)](_0x2bbb1e);
                        _0x105932 = _0x105932[_0x242674(373)](0, _0x2bbb1e);
                        var _0x576033 = {};
                        Object[_0x242674(374)](_0x5e8c5c)[_0x242674(356)](function (_0x2159a1) {
                            _0x576033[_0x2159a1 + _0x388a5b] = _0x5e8c5c[_0x2159a1];
                        }), _0x5e8c5c = _0x576033;
                    }
                    Object[_0x242674(374)](_0x5e8c5c)[_0x242674(356)](function (_0x41df9e) {
                        mergeStyle(_0x5bcc05, _0x105932, _0x83fd86, _0x5e8c5c, _0x41df9e, _0xabb336);
                    });
                } else
                    _0x4d2871['push']({
                        'line': _0x48a945['position'][_0x242674(370)]['line'],
                        'column': _0x48a945[_0x242674(342)][_0x242674(370)][_0x242674(359)],
                        'reason': _0x242674(375) + _0x3e49e8 + _0x242674(376)
                    });
            }), _0x4d2871 = _0x4d2871[_0x3ed20b(377)](_0x284b06));
        else
            _0x53e23c === _0x3ed20b(378) && (_0x48a945[_0x3ed20b(336)] && _0x48a945['declarations'][_0x3ed20b(352)] && (_0x48a945[_0x3ed20b(336)][_0x3ed20b(356)](function (_0x58e633) {
                var _0x4589ef = _0x3ed20b;
                if (_0x58e633[_0x4589ef(362)] !== 'declaration')
                    return;
                var _0x134891 = util['hyphenedToCamelCase'](_0x58e633[_0x4589ef(337)]), _0x2dacfd = _0x58e633['value'];
                _0x134891 === _0x4589ef(379) && '"\''[_0x4589ef(380)](_0x2dacfd[0]) > -1 && (_0x2dacfd = _0x2dacfd[_0x4589ef(373)](1, _0x2dacfd[_0x4589ef(352)] - 1)), _0x5e8c5c[_0x134891] = _0x2dacfd;
            }), !_0x5bcc05['@FONT-FACE'] && (_0x5bcc05[_0x3ed20b(381)] = []), _0x5bcc05[_0x3ed20b(381)][_0x3ed20b(357)](_0x5e8c5c)));
    }), _0x5bcc05[_0xaae059(382)] = 2, _0x30d01b(_0x2dce1e, {
        'jsonStyle': _0x5bcc05,
        'log': _0x4d2871
    });
}
function validate(_0x547d9a, _0xe65456) {
    var _0x5d86b7 = _0xd714a7, _0xf9fe14 = [], _0x275566;
    try {
        _0x547d9a = JSON['parse'](JSON[_0x5d86b7(383)](_0x547d9a));
    } catch (_0x4126df) {
        _0x275566 = _0x4126df, _0x547d9a = {};
    }
    Object[_0x5d86b7(374)](_0x547d9a)[_0x5d86b7(356)](function (_0x3bd258) {
        var _0x23fd5c = _0x5d86b7, _0x437d64 = _0x547d9a[_0x3bd258];
        Object['keys'](_0x437d64)[_0x23fd5c(356)](function (_0x20ee7d) {
            var _0x2e912b = _0x23fd5c, _0x1c8bdb = _0x437d64[_0x20ee7d], _0x45f76a = validateItem(_0x20ee7d, _0x1c8bdb);
            typeof _0x45f76a['value'] === _0x2e912b(384) || typeof _0x45f76a[_0x2e912b(338)] === 'string' ? _0x437d64[_0x20ee7d] = _0x45f76a['value'] : delete _0x437d64[_0x20ee7d], _0x45f76a['log'] && _0xf9fe14[_0x2e912b(357)](_0x45f76a['log']);
        });
    }), _0xe65456(_0x275566, {
        'jsonStyle': _0x547d9a,
        'log': _0xf9fe14
    });
}
module[_0xd714a7(385)] = {
    'parse': parse,
    'validate': validate,
    'validateItem': validateItem,
    'util': util
};