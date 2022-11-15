var css = require(_0xedcf09(471)), util = require(_0xedcf09(472)), validateItem = require(_0xedcf09(473))[_0xedcf09(474)], shorthandParser = require(_0xedcf09(475));
function convertLengthShorthand(_0x3964f2, _0x1931ac) {
    var _0x2e52b9 = _0xedcf09;
    for (var _0x253a84 = 0; _0x253a84 < _0x3964f2['declarations'][_0x2e52b9(476)]; _0x253a84++) {
        var _0x40ed98 = _0x3964f2['declarations'][_0x253a84];
        if (_0x40ed98['property'] === _0x1931ac) {
            var _0x5cff76 = _0x40ed98[_0x2e52b9(477)][_0x2e52b9(478)](/\s+/);
            _0x5cff76[1] = _0x5cff76[1] || _0x5cff76[0], _0x5cff76[2] = _0x5cff76[2] || _0x5cff76[0], _0x5cff76[3] = _0x5cff76[3] || _0x5cff76[1], _0x3964f2['declarations']['splice'](_0x253a84, 1), _0x3964f2[_0x2e52b9(479)][_0x2e52b9(480)](_0x253a84, 0, {
                'type': _0x2e52b9(481),
                'property': _0x1931ac + _0x2e52b9(482),
                'value': _0x5cff76[3],
                'position': _0x40ed98[_0x2e52b9(483)]
            }), _0x3964f2[_0x2e52b9(479)][_0x2e52b9(480)](_0x253a84, 0, {
                'type': 'declaration',
                'property': _0x1931ac + _0x2e52b9(484),
                'value': _0x5cff76[2],
                'position': _0x40ed98[_0x2e52b9(483)]
            }), _0x3964f2[_0x2e52b9(479)][_0x2e52b9(480)](_0x253a84, 0, {
                'type': _0x2e52b9(481),
                'property': _0x1931ac + _0x2e52b9(485),
                'value': _0x5cff76[1],
                'position': _0x40ed98['position']
            }), _0x3964f2['declarations'][_0x2e52b9(480)](_0x253a84, 0, {
                'type': _0x2e52b9(481),
                'property': _0x1931ac + _0x2e52b9(486),
                'value': _0x5cff76[0],
                'position': _0x40ed98[_0x2e52b9(483)]
            });
        }
    }
}
function mergeStyle(_0x404ad5, _0x2f0cc2, _0x6b75ce, _0x4d8313, _0x253d55, _0xbed3fd) {
    var _0x520e81 = _0xedcf09;
    if (!process[_0x520e81(487)][_0x520e81(488)]) {
        _0x404ad5[_0x2f0cc2] = _0x404ad5[_0x2f0cc2] || {}, _0x404ad5[_0x2f0cc2][_0x253d55] = _0x4d8313[_0x253d55];
        return;
    }
    _0x2f0cc2 = _0x2f0cc2[_0x520e81(478)]('.')[_0x520e81(489)](_0x2fac66 => '.' + _0x2fac66)[_0x520e81(490)](1);
    var _0x2ae9d9 = _0x2f0cc2[_0x520e81(491)](_0xc58cb8 => _0xc58cb8 in _0x404ad5) || _0x2f0cc2[0];
    _0x6b75ce += _0x2f0cc2[_0x520e81(492)](_0x4e21e6 => _0x4e21e6 !== _0x2ae9d9)[_0x520e81(493)]()['join']('');
    var _0x3e446a = _0x404ad5[_0x2ae9d9] = _0x404ad5[_0x2ae9d9] || {}, _0x5c8130 = _0x3e446a[_0x6b75ce] = _0x3e446a[_0x6b75ce] || {};
    _0x5c8130[_0x253d55] = [
        ..._0x4d8313[_0x253d55],
        _0x6b75ce[_0x520e81(478)]('.')[_0x520e81(476)] - 1,
        _0xbed3fd
    ];
}
function parse(_0x559cb6, _0xb82943) {
    var _0x2e0f61 = _0xedcf09, _0x2323d7, _0x469a20, _0x3167b7 = {}, _0x234685 = [];
    _0x2323d7 = css[_0x2e0f61(494)](_0x559cb6, { 'silent': !![] }), _0x2323d7['stylesheet'][_0x2e0f61(495)] && _0x2323d7[_0x2e0f61(496)]['parsingErrors'][_0x2e0f61(476)] && (_0x469a20 = _0x2323d7[_0x2e0f61(496)]['parsingErrors'], _0x469a20[_0x2e0f61(497)](function (_0x47a184) {
        var _0x35ced2 = _0x2e0f61;
        _0x234685[_0x35ced2(498)]({
            'line': _0x47a184[_0x35ced2(499)],
            'column': _0x47a184[_0x35ced2(500)],
            'reason': _0x47a184[_0x35ced2(501)]()[_0x35ced2(502)](_0x35ced2(503), _0x35ced2(504))
        });
    })), _0x2323d7 && _0x2323d7['type'] === 'stylesheet' && _0x2323d7['stylesheet'] && _0x2323d7[_0x2e0f61(496)][_0x2e0f61(505)] && _0x2323d7['stylesheet'][_0x2e0f61(505)][_0x2e0f61(476)] && _0x2323d7[_0x2e0f61(496)][_0x2e0f61(505)][_0x2e0f61(497)](function (_0x314584, _0x1c8bda) {
        var _0x1a3c33 = _0x2e0f61, _0x25e0c7 = _0x314584['type'], _0x274547 = {}, _0x5c1a73 = [];
        if (_0x25e0c7 === 'rule')
            _0x314584[_0x1a3c33(479)] && _0x314584[_0x1a3c33(479)][_0x1a3c33(476)] && (_0x314584[_0x1a3c33(479)] = shorthandParser(_0x314584[_0x1a3c33(479)]), convertLengthShorthand(_0x314584, _0x1a3c33(506)), convertLengthShorthand(_0x314584, _0x1a3c33(507)), _0x314584['declarations']['forEach'](function (_0x2d0af2) {
                var _0x411721 = _0x1a3c33, _0x205b46 = _0x2d0af2[_0x411721(508)], _0x5bf4c0, _0x135c14, _0xaa814b, _0x40bfbb, _0x35d5a4, _0x402c47;
                if (_0x205b46 !== _0x411721(481))
                    return;
                _0x5bf4c0 = _0x2d0af2['property'], _0x135c14 = _0x2d0af2[_0x411721(477)];
                var _0x843b86 = _0x135c14['replace'](/\s*!important/g, ''), _0x3bf3db = Number(_0x135c14 !== _0x843b86);
                _0x135c14 = _0x843b86, _0x402c47 = util['hyphenedToCamelCase'](_0x5bf4c0), _0x35d5a4 = validateItem(_0x402c47, _0x135c14);
                if (typeof _0x35d5a4[_0x411721(477)] === 'number' || typeof _0x35d5a4[_0x411721(477)] === _0x411721(509)) {
                    if (process['env'][_0x411721(488)]) {
                        var _0x35b118 = _0x274547[_0x402c47];
                        _0x274547[_0x402c47] = Array['isArray'](_0x35b118) && _0x35b118[1] > _0x3bf3db ? _0x35b118 : [
                            _0x35d5a4[_0x411721(477)],
                            _0x3bf3db
                        ];
                    } else
                        _0x274547[_0x402c47] = _0x35d5a4[_0x411721(477)];
                }
                _0x35d5a4[_0x411721(510)] && (_0x35d5a4['log'][_0x411721(499)] = _0x2d0af2[_0x411721(483)]['start'][_0x411721(499)], _0x35d5a4[_0x411721(510)]['column'] = _0x2d0af2[_0x411721(483)][_0x411721(511)][_0x411721(500)], _0x5c1a73[_0x411721(498)](_0x35d5a4[_0x411721(510)]));
            }), _0x314584['selectors'][_0x1a3c33(497)](function (_0x1d7e04) {
                var _0xe8a543 = _0x1a3c33;
                _0x1d7e04 = _0x1d7e04[_0xe8a543(502)](/\s*([\+\~\>])\s*/g, '$1')[_0xe8a543(502)](/\s+/, ' ');
                const _0x5dd0ff = _0x1d7e04[_0xe8a543(512)](process['env'][_0xe8a543(488)] ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+\~\> ])*)((?:\.[A-Za-z0-9_\-\:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
                if (_0x5dd0ff) {
                    var _0x56aca7 = _0x5dd0ff[1], _0x413921 = _0x5dd0ff[2], _0x265f84 = _0x413921['indexOf'](':');
                    if (_0x265f84 > -1) {
                        var _0x274921 = _0x413921[_0xe8a543(490)](_0x265f84);
                        _0x413921 = _0x413921[_0xe8a543(490)](0, _0x265f84);
                        var _0x2437ef = {};
                        Object['keys'](_0x274547)['forEach'](function (_0x4a43d1) {
                            _0x2437ef[_0x4a43d1 + _0x274921] = _0x274547[_0x4a43d1];
                        }), _0x274547 = _0x2437ef;
                    }
                    Object[_0xe8a543(513)](_0x274547)[_0xe8a543(497)](function (_0x1774d0) {
                        mergeStyle(_0x3167b7, _0x413921, _0x56aca7, _0x274547, _0x1774d0, _0x1c8bda);
                    });
                } else
                    _0x234685['push']({
                        'line': _0x314584[_0xe8a543(483)]['start'][_0xe8a543(499)],
                        'column': _0x314584[_0xe8a543(483)][_0xe8a543(511)][_0xe8a543(500)],
                        'reason': _0xe8a543(514) + _0x1d7e04 + _0xe8a543(515)
                    });
            }), _0x234685 = _0x234685[_0x1a3c33(516)](_0x5c1a73));
        else
            _0x25e0c7 === _0x1a3c33(517) && (_0x314584[_0x1a3c33(479)] && _0x314584[_0x1a3c33(479)]['length'] && (_0x314584[_0x1a3c33(479)][_0x1a3c33(497)](function (_0x4de162) {
                var _0x7b7e22 = _0x1a3c33;
                if (_0x4de162['type'] !== 'declaration')
                    return;
                var _0x37c9d8 = util['hyphenedToCamelCase'](_0x4de162[_0x7b7e22(518)]), _0x412c10 = _0x4de162[_0x7b7e22(477)];
                _0x37c9d8 === 'fontFamily' && '"\''[_0x7b7e22(519)](_0x412c10[0]) > -1 && (_0x412c10 = _0x412c10[_0x7b7e22(490)](1, _0x412c10[_0x7b7e22(476)] - 1)), _0x274547[_0x37c9d8] = _0x412c10;
            }), !_0x3167b7['@FONT-FACE'] && (_0x3167b7[_0x1a3c33(520)] = []), _0x3167b7[_0x1a3c33(520)][_0x1a3c33(498)](_0x274547)));
    }), _0x3167b7[_0x2e0f61(521)] = 2, _0xb82943(_0x469a20, {
        'jsonStyle': _0x3167b7,
        'log': _0x234685
    });
}
function validate(_0x6c3406, _0x2b892b) {
    var _0x2b3642 = _0xedcf09, _0x42028b = [], _0xa04c3e;
    try {
        _0x6c3406 = JSON[_0x2b3642(494)](JSON[_0x2b3642(522)](_0x6c3406));
    } catch (_0x2b1eee) {
        _0xa04c3e = _0x2b1eee, _0x6c3406 = {};
    }
    Object[_0x2b3642(513)](_0x6c3406)['forEach'](function (_0x8a0ca8) {
        var _0x5a4e9c = _0x2b3642, _0x1da51d = _0x6c3406[_0x8a0ca8];
        Object[_0x5a4e9c(513)](_0x1da51d)[_0x5a4e9c(497)](function (_0x5ee205) {
            var _0x369410 = _0x5a4e9c, _0x885b97 = _0x1da51d[_0x5ee205], _0x37d04f = validateItem(_0x5ee205, _0x885b97);
            typeof _0x37d04f[_0x369410(477)] === _0x369410(523) || typeof _0x37d04f['value'] === _0x369410(509) ? _0x1da51d[_0x5ee205] = _0x37d04f['value'] : delete _0x1da51d[_0x5ee205], _0x37d04f[_0x369410(510)] && _0x42028b[_0x369410(498)](_0x37d04f[_0x369410(510)]);
        });
    }), _0x2b892b(_0xa04c3e, {
        'jsonStyle': _0x6c3406,
        'log': _0x42028b
    });
}
module[_0xedcf09(524)] = {
    'parse': parse,
    'validate': validate,
    'validateItem': validateItem,
    'util': util
};