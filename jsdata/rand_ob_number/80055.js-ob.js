'use strict';
var css = require('css'), util = require('./lib/util'), validateItem = require('./lib/validator')['validate'], shorthandParser = require('./lib/shorthand-parser');
function convertLengthShorthand(_0x2eff4c, _0x897aab) {
    for (var _0x255f7e = 0x213d + 0xae4 + 0x8f * -0x4f; _0x255f7e < _0x2eff4c['declarations']['length']; _0x255f7e++) {
        var _0x1fd98b = _0x2eff4c['declarations'][_0x255f7e];
        if (_0x1fd98b['property'] === _0x897aab) {
            var _0x3138bb = _0x1fd98b['value']['split'](/\s+/);
            _0x3138bb[0x2 * -0x9f5 + -0x17fa + 0x2be5] = _0x3138bb[0x8d * -0x1 + 0x154e + -0x14c0] || _0x3138bb[0x751 + -0x2227 + -0x6 * -0x479], _0x3138bb[0x24a * 0x5 + 0x92d * 0x4 + -0x3024] = _0x3138bb[-0x291 * 0xe + 0x20 * 0x8b + -0xc6 * -0x18] || _0x3138bb[-0x2 * -0xa06 + 0x4c1 + 0x1 * -0x18cd], _0x3138bb[0x6df * -0x1 + -0x1b * 0x154 + 0x2abe] = _0x3138bb[0xa8d * -0x2 + -0x220d + 0x372a] || _0x3138bb[0x2fa + -0x10d * 0x1d + -0x50 * -0x58], _0x2eff4c['declarations']['splice'](_0x255f7e, 0x415 + -0xb99 + 0x785), _0x2eff4c['declarations']['splice'](_0x255f7e, -0x1744 * 0x1 + 0xd2a + -0x3 * -0x35e, {
                'type': 'declaration',
                'property': _0x897aab + '-left',
                'value': _0x3138bb[0x1 * -0x88d + -0x2231 + 0x88d * 0x5],
                'position': _0x1fd98b['position']
            }), _0x2eff4c['declarations']['splice'](_0x255f7e, 0x10a + 0x2164 + -0x6 * 0x5bd, {
                'type': 'declaration',
                'property': _0x897aab + '-bottom',
                'value': _0x3138bb[-0x2230 + -0x21e3 + 0x4415 * 0x1],
                'position': _0x1fd98b['position']
            }), _0x2eff4c['declarations']['splice'](_0x255f7e, 0x2c * -0x72 + 0xdb8 + 0x5e0, {
                'type': 'declaration',
                'property': _0x897aab + '-right',
                'value': _0x3138bb[0x2328 + 0x77 * -0x4f + 0x192],
                'position': _0x1fd98b['position']
            }), _0x2eff4c['declarations']['splice'](_0x255f7e, -0x1fd2 + 0xa6 * 0x7 + -0x369 * -0x8, {
                'type': 'declaration',
                'property': _0x897aab + '-top',
                'value': _0x3138bb[0x2d6 * -0xd + 0x1395 + 0x1149],
                'position': _0x1fd98b['position']
            });
        }
    }
}
function mergeStyle(_0x4a2743, _0x3bac27, _0x302e86, _0x5c7c1b, _0xe00e3, _0x111625) {
    if (!process['env']['UNI_USING_NVUE_STYLE_COMPILER']) {
        _0x4a2743[_0x3bac27] = _0x4a2743[_0x3bac27] || {}, _0x4a2743[_0x3bac27][_0xe00e3] = _0x5c7c1b[_0xe00e3];
        return;
    }
    _0x3bac27 = _0x3bac27['split']('.')['map'](_0x30923d => '.' + _0x30923d)['slice'](-0x26 * -0x56 + 0x2556 + -0x3219);
    var _0x1d4dc4 = _0x3bac27['find'](_0x4de767 => _0x4de767 in _0x4a2743) || _0x3bac27[0x16e * 0x1 + -0x1d3 * 0x13 + 0x213b];
    _0x302e86 += _0x3bac27['filter'](_0x1274ef => _0x1274ef !== _0x1d4dc4)['sort']()['join']('');
    var _0x3787d8 = _0x4a2743[_0x1d4dc4] = _0x4a2743[_0x1d4dc4] || {}, _0x5c9270 = _0x3787d8[_0x302e86] = _0x3787d8[_0x302e86] || {};
    _0x5c9270[_0xe00e3] = [
        ..._0x5c7c1b[_0xe00e3],
        _0x302e86['split']('.')['length'] - (0x26 * -0x83 + 0x1ca2 + -0x92f),
        _0x111625
    ];
}
function parse(_0x35138a, _0x3f5de0) {
    var _0x520b32, _0x593262, _0x486e41 = {}, _0x4229a2 = [];
    _0x520b32 = css['parse'](_0x35138a, { 'silent': !![] }), _0x520b32['stylesheet']['parsingErrors'] && _0x520b32['stylesheet']['parsingErrors']['length'] && (_0x593262 = _0x520b32['stylesheet']['parsingErrors'], _0x593262['forEach'](function (_0x19d5de) {
        _0x4229a2['push']({
            'line': _0x19d5de['line'],
            'column': _0x19d5de['column'],
            'reason': _0x19d5de['toString']()['replace']('Error', 'ERROR')
        });
    })), _0x520b32 && _0x520b32['type'] === 'stylesheet' && _0x520b32['stylesheet'] && _0x520b32['stylesheet']['rules'] && _0x520b32['stylesheet']['rules']['length'] && _0x520b32['stylesheet']['rules']['forEach'](function (_0x6eb887, _0x2c8af8) {
        var _0x56eb89 = _0x6eb887['type'], _0x257172 = {}, _0x3975ed = [];
        if (_0x56eb89 === 'rule')
            _0x6eb887['declarations'] && _0x6eb887['declarations']['length'] && (_0x6eb887['declarations'] = shorthandParser(_0x6eb887['declarations']), convertLengthShorthand(_0x6eb887, 'padding'), convertLengthShorthand(_0x6eb887, 'margin'), _0x6eb887['declarations']['forEach'](function (_0x3d8979) {
                var _0x30242a = _0x3d8979['type'], _0x65c6ed, _0x3073f1, _0x198dfa, _0x356617, _0x49e5bd, _0x56f7a3;
                if (_0x30242a !== 'declaration')
                    return;
                _0x65c6ed = _0x3d8979['property'], _0x3073f1 = _0x3d8979['value'];
                var _0x1f84d9 = _0x3073f1['replace'](/\s*!important/g, ''), _0x313f85 = Number(_0x3073f1 !== _0x1f84d9);
                _0x3073f1 = _0x1f84d9, _0x56f7a3 = util['hyphenedToCamelCase'](_0x65c6ed), _0x49e5bd = validateItem(_0x56f7a3, _0x3073f1);
                if (typeof _0x49e5bd['value'] === 'number' || typeof _0x49e5bd['value'] === 'string') {
                    if (process['env']['UNI_USING_NVUE_STYLE_COMPILER']) {
                        var _0x3126fb = _0x257172[_0x56f7a3];
                        _0x257172[_0x56f7a3] = Array['isArray'](_0x3126fb) && _0x3126fb[0x125 * 0x6 + -0x1304 + 0xc27] > _0x313f85 ? _0x3126fb : [
                            _0x49e5bd['value'],
                            _0x313f85
                        ];
                    } else
                        _0x257172[_0x56f7a3] = _0x49e5bd['value'];
                }
                _0x49e5bd['log'] && (_0x49e5bd['log']['line'] = _0x3d8979['position']['start']['line'], _0x49e5bd['log']['column'] = _0x3d8979['position']['start']['column'], _0x3975ed['push'](_0x49e5bd['log']));
            }), _0x6eb887['selectors']['forEach'](function (_0x1cb624) {
                _0x1cb624 = _0x1cb624['replace'](/\s*([\+\~\>])\s*/g, '$1')['replace'](/\s+/, '\x20');
                const _0x1b62e6 = _0x1cb624['match'](process['env']['UNI_USING_NVUE_STYLE_COMPILER'] ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+\~\> ])*)((?:\.[A-Za-z0-9_\-\:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
                if (_0x1b62e6) {
                    var _0x58c508 = _0x1b62e6[0x1059 + 0x45 * -0x16 + 0x1 * -0xa6a], _0x17c189 = _0x1b62e6[-0x1 * -0x1bfe + -0xe2 * 0x3 + -0x1956], _0x50aca9 = _0x17c189['indexOf'](':');
                    if (_0x50aca9 > -(-0x1 * 0x78b + -0x168e * -0x1 + -0xf02 * 0x1)) {
                        var _0x1f8893 = _0x17c189['slice'](_0x50aca9);
                        _0x17c189 = _0x17c189['slice'](-0xb96 + 0x523 + 0x673, _0x50aca9);
                        var _0x231b7d = {};
                        Object['keys'](_0x257172)['forEach'](function (_0x262224) {
                            _0x231b7d[_0x262224 + _0x1f8893] = _0x257172[_0x262224];
                        }), _0x257172 = _0x231b7d;
                    }
                    Object['keys'](_0x257172)['forEach'](function (_0x14a573) {
                        mergeStyle(_0x486e41, _0x17c189, _0x58c508, _0x257172, _0x14a573, _0x2c8af8);
                    });
                } else
                    _0x4229a2['push']({
                        'line': _0x6eb887['position']['start']['line'],
                        'column': _0x6eb887['position']['start']['column'],
                        'reason': 'ERROR:\x20Selector\x20`' + _0x1cb624 + '`\x20is\x20not\x20supported.\x20Weex\x20only\x20support\x20classname\x20selector'
                    });
            }), _0x4229a2 = _0x4229a2['concat'](_0x3975ed));
        else
            _0x56eb89 === 'font-face' && (_0x6eb887['declarations'] && _0x6eb887['declarations']['length'] && (_0x6eb887['declarations']['forEach'](function (_0x3e23e8) {
                if (_0x3e23e8['type'] !== 'declaration')
                    return;
                var _0x2a317d = util['hyphenedToCamelCase'](_0x3e23e8['property']), _0x4bfea2 = _0x3e23e8['value'];
                _0x2a317d === 'fontFamily' && '\x22\x27'['indexOf'](_0x4bfea2[-0x1 * -0x25b5 + 0x6a1 + -0x2c56]) > -(0x20db + -0x8cf + 0x180b * -0x1) && (_0x4bfea2 = _0x4bfea2['slice'](0x94 + -0x16b8 + 0x1625, _0x4bfea2['length'] - (-0x22 * -0xc5 + -0x1356 + -0x6d3))), _0x257172[_0x2a317d] = _0x4bfea2;
            }), !_0x486e41['@FONT-FACE'] && (_0x486e41['@FONT-FACE'] = []), _0x486e41['@FONT-FACE']['push'](_0x257172)));
    }), _0x486e41['@VERSION'] = -0x39 * -0x2f + -0xf83 + 0x50e, _0x3f5de0(_0x593262, {
        'jsonStyle': _0x486e41,
        'log': _0x4229a2
    });
}
function validate(_0x5e4ec4, _0x69ea76) {
    var _0x4cc8f3 = [], _0x599d10;
    try {
        _0x5e4ec4 = JSON['parse'](JSON['stringify'](_0x5e4ec4));
    } catch (_0x2d79b2) {
        _0x599d10 = _0x2d79b2, _0x5e4ec4 = {};
    }
    Object['keys'](_0x5e4ec4)['forEach'](function (_0x527255) {
        var _0x3b8d8c = _0x5e4ec4[_0x527255];
        Object['keys'](_0x3b8d8c)['forEach'](function (_0x36e44b) {
            var _0x4374e1 = _0x3b8d8c[_0x36e44b], _0x2f67c2 = validateItem(_0x36e44b, _0x4374e1);
            typeof _0x2f67c2['value'] === 'number' || typeof _0x2f67c2['value'] === 'string' ? _0x3b8d8c[_0x36e44b] = _0x2f67c2['value'] : delete _0x3b8d8c[_0x36e44b], _0x2f67c2['log'] && _0x4cc8f3['push'](_0x2f67c2['log']);
        });
    }), _0x69ea76(_0x599d10, {
        'jsonStyle': _0x5e4ec4,
        'log': _0x4cc8f3
    });
}
module['exports'] = {
    'parse': parse,
    'validate': validate,
    'validateItem': validateItem,
    'util': util
};
