'use strict';
var _0x3b56 = [
    'parsingErrors',
    'forEach',
    'push',
    'line',
    'column',
    'replace',
    'ERROR',
    'type',
    'rules',
    'rule',
    'padding',
    'hyphenedToCamelCase',
    'string',
    'isArray',
    'log',
    'start',
    'selectors',
    'match',
    'slice',
    'keys',
    'ERROR:\x20Selector\x20`',
    '`\x20is\x20not\x20supported.\x20Weex\x20only\x20support\x20classname\x20selector',
    'concat',
    'font-face',
    'fontFamily',
    'indexOf',
    '@FONT-FACE',
    '@VERSION',
    'stringify',
    'number',
    'exports',
    '9iZwzIc',
    '16901aqeKMu',
    '253135tWEMzy',
    '1vjvyik',
    '4999WGmevY',
    '347GfsjPi',
    '893015LltDmr',
    '1XmsGaw',
    '947622RHnZdn',
    '1343557UbkuDJ',
    '3152mGtCfy',
    '41oMNCMH',
    './lib/util',
    'validate',
    './lib/shorthand-parser',
    'declarations',
    'property',
    'value',
    'splice',
    'declaration',
    '-left',
    'position',
    '-bottom',
    '-right',
    '-top',
    'env',
    'UNI_USING_NVUE_STYLE_COMPILER',
    'map',
    'filter',
    'join',
    'split',
    'length',
    'parse',
    'stylesheet'
];
var _0xd714a7 = _0x2ff4;
function _0x2ff4(_0x471868, _0x2e968f) {
    return _0x2ff4 = function (_0x3b569b, _0x2ff4bf) {
        _0x3b569b = _0x3b569b - 0x141;
        var _0x47689d = _0x3b56[_0x3b569b];
        return _0x47689d;
    }, _0x2ff4(_0x471868, _0x2e968f);
}
(function (_0x181d3e, _0x2f6269) {
    var _0x18c8e5 = _0x2ff4;
    while (!![]) {
        try {
            var _0x31d177 = parseInt(_0x18c8e5(0x141)) * -parseInt(_0x18c8e5(0x142)) + -parseInt(_0x18c8e5(0x143)) * parseInt(_0x18c8e5(0x144)) + parseInt(_0x18c8e5(0x145)) * parseInt(_0x18c8e5(0x146)) + -parseInt(_0x18c8e5(0x147)) + parseInt(_0x18c8e5(0x148)) * -parseInt(_0x18c8e5(0x149)) + parseInt(_0x18c8e5(0x14a)) + -parseInt(_0x18c8e5(0x14b)) * -parseInt(_0x18c8e5(0x14c));
            if (_0x31d177 === _0x2f6269)
                break;
            else
                _0x181d3e['push'](_0x181d3e['shift']());
        } catch (_0x16855f) {
            _0x181d3e['push'](_0x181d3e['shift']());
        }
    }
}(_0x3b56, 0xeac19));
var css = require('css'), util = require(_0xd714a7(0x14d)), validateItem = require('./lib/validator')[_0xd714a7(0x14e)], shorthandParser = require(_0xd714a7(0x14f));
function convertLengthShorthand(_0x9a8f3c, _0x1d17da) {
    var _0x2cee07 = _0xd714a7;
    for (var _0x13cf0f = 0x0; _0x13cf0f < _0x9a8f3c[_0x2cee07(0x150)]['length']; _0x13cf0f++) {
        var _0x24092d = _0x9a8f3c[_0x2cee07(0x150)][_0x13cf0f];
        if (_0x24092d[_0x2cee07(0x151)] === _0x1d17da) {
            var _0x3e6a49 = _0x24092d[_0x2cee07(0x152)]['split'](/\s+/);
            _0x3e6a49[0x1] = _0x3e6a49[0x1] || _0x3e6a49[0x0], _0x3e6a49[0x2] = _0x3e6a49[0x2] || _0x3e6a49[0x0], _0x3e6a49[0x3] = _0x3e6a49[0x3] || _0x3e6a49[0x1], _0x9a8f3c[_0x2cee07(0x150)][_0x2cee07(0x153)](_0x13cf0f, 0x1), _0x9a8f3c[_0x2cee07(0x150)][_0x2cee07(0x153)](_0x13cf0f, 0x0, {
                'type': _0x2cee07(0x154),
                'property': _0x1d17da + _0x2cee07(0x155),
                'value': _0x3e6a49[0x3],
                'position': _0x24092d[_0x2cee07(0x156)]
            }), _0x9a8f3c[_0x2cee07(0x150)]['splice'](_0x13cf0f, 0x0, {
                'type': _0x2cee07(0x154),
                'property': _0x1d17da + _0x2cee07(0x157),
                'value': _0x3e6a49[0x2],
                'position': _0x24092d[_0x2cee07(0x156)]
            }), _0x9a8f3c[_0x2cee07(0x150)][_0x2cee07(0x153)](_0x13cf0f, 0x0, {
                'type': _0x2cee07(0x154),
                'property': _0x1d17da + _0x2cee07(0x158),
                'value': _0x3e6a49[0x1],
                'position': _0x24092d[_0x2cee07(0x156)]
            }), _0x9a8f3c['declarations']['splice'](_0x13cf0f, 0x0, {
                'type': _0x2cee07(0x154),
                'property': _0x1d17da + _0x2cee07(0x159),
                'value': _0x3e6a49[0x0],
                'position': _0x24092d[_0x2cee07(0x156)]
            });
        }
    }
}
function mergeStyle(_0xae652a, _0x113276, _0xc2b65, _0xa084ba, _0x22c49a, _0x11f960) {
    var _0x45f9ec = _0xd714a7;
    if (!process[_0x45f9ec(0x15a)][_0x45f9ec(0x15b)]) {
        _0xae652a[_0x113276] = _0xae652a[_0x113276] || {}, _0xae652a[_0x113276][_0x22c49a] = _0xa084ba[_0x22c49a];
        return;
    }
    _0x113276 = _0x113276['split']('.')[_0x45f9ec(0x15c)](_0x55831a => '.' + _0x55831a)['slice'](0x1);
    var _0x4bcad7 = _0x113276['find'](_0x33be08 => _0x33be08 in _0xae652a) || _0x113276[0x0];
    _0xc2b65 += _0x113276[_0x45f9ec(0x15d)](_0x15fc12 => _0x15fc12 !== _0x4bcad7)['sort']()[_0x45f9ec(0x15e)]('');
    var _0x1f530a = _0xae652a[_0x4bcad7] = _0xae652a[_0x4bcad7] || {}, _0x48337c = _0x1f530a[_0xc2b65] = _0x1f530a[_0xc2b65] || {};
    _0x48337c[_0x22c49a] = [
        ..._0xa084ba[_0x22c49a],
        _0xc2b65[_0x45f9ec(0x15f)]('.')[_0x45f9ec(0x160)] - 0x1,
        _0x11f960
    ];
}
function parse(_0x4efe66, _0x30d01b) {
    var _0xaae059 = _0xd714a7, _0x103d22, _0x2dce1e, _0x5bcc05 = {}, _0x4d2871 = [];
    _0x103d22 = css[_0xaae059(0x161)](_0x4efe66, { 'silent': !![] }), _0x103d22[_0xaae059(0x162)]['parsingErrors'] && _0x103d22['stylesheet'][_0xaae059(0x163)][_0xaae059(0x160)] && (_0x2dce1e = _0x103d22[_0xaae059(0x162)][_0xaae059(0x163)], _0x2dce1e[_0xaae059(0x164)](function (_0x4d7a4c) {
        var _0x3dc5d1 = _0xaae059;
        _0x4d2871[_0x3dc5d1(0x165)]({
            'line': _0x4d7a4c[_0x3dc5d1(0x166)],
            'column': _0x4d7a4c[_0x3dc5d1(0x167)],
            'reason': _0x4d7a4c['toString']()[_0x3dc5d1(0x168)]('Error', _0x3dc5d1(0x169))
        });
    })), _0x103d22 && _0x103d22[_0xaae059(0x16a)] === _0xaae059(0x162) && _0x103d22['stylesheet'] && _0x103d22[_0xaae059(0x162)][_0xaae059(0x16b)] && _0x103d22[_0xaae059(0x162)][_0xaae059(0x16b)]['length'] && _0x103d22[_0xaae059(0x162)][_0xaae059(0x16b)][_0xaae059(0x164)](function (_0x48a945, _0xabb336) {
        var _0x3ed20b = _0xaae059, _0x53e23c = _0x48a945['type'], _0x5e8c5c = {}, _0x284b06 = [];
        if (_0x53e23c === _0x3ed20b(0x16c))
            _0x48a945[_0x3ed20b(0x150)] && _0x48a945['declarations']['length'] && (_0x48a945[_0x3ed20b(0x150)] = shorthandParser(_0x48a945[_0x3ed20b(0x150)]), convertLengthShorthand(_0x48a945, _0x3ed20b(0x16d)), convertLengthShorthand(_0x48a945, 'margin'), _0x48a945[_0x3ed20b(0x150)][_0x3ed20b(0x164)](function (_0x4a24ac) {
                var _0x58d3da = _0x3ed20b, _0x16de6f = _0x4a24ac[_0x58d3da(0x16a)], _0x39f2a1, _0x55c9d1, _0x501ad1, _0x247e8a, _0xd31464, _0x498476;
                if (_0x16de6f !== _0x58d3da(0x154))
                    return;
                _0x39f2a1 = _0x4a24ac[_0x58d3da(0x151)], _0x55c9d1 = _0x4a24ac[_0x58d3da(0x152)];
                var _0x58876c = _0x55c9d1[_0x58d3da(0x168)](/\s*!important/g, ''), _0x399733 = Number(_0x55c9d1 !== _0x58876c);
                _0x55c9d1 = _0x58876c, _0x498476 = util[_0x58d3da(0x16e)](_0x39f2a1), _0xd31464 = validateItem(_0x498476, _0x55c9d1);
                if (typeof _0xd31464[_0x58d3da(0x152)] === 'number' || typeof _0xd31464[_0x58d3da(0x152)] === _0x58d3da(0x16f)) {
                    if (process[_0x58d3da(0x15a)][_0x58d3da(0x15b)]) {
                        var _0x525535 = _0x5e8c5c[_0x498476];
                        _0x5e8c5c[_0x498476] = Array[_0x58d3da(0x170)](_0x525535) && _0x525535[0x1] > _0x399733 ? _0x525535 : [
                            _0xd31464[_0x58d3da(0x152)],
                            _0x399733
                        ];
                    } else
                        _0x5e8c5c[_0x498476] = _0xd31464[_0x58d3da(0x152)];
                }
                _0xd31464[_0x58d3da(0x171)] && (_0xd31464[_0x58d3da(0x171)]['line'] = _0x4a24ac[_0x58d3da(0x156)][_0x58d3da(0x172)][_0x58d3da(0x166)], _0xd31464[_0x58d3da(0x171)][_0x58d3da(0x167)] = _0x4a24ac[_0x58d3da(0x156)][_0x58d3da(0x172)][_0x58d3da(0x167)], _0x284b06[_0x58d3da(0x165)](_0xd31464[_0x58d3da(0x171)]));
            }), _0x48a945[_0x3ed20b(0x173)][_0x3ed20b(0x164)](function (_0x3e49e8) {
                var _0x242674 = _0x3ed20b;
                _0x3e49e8 = _0x3e49e8[_0x242674(0x168)](/\s*([\+\~\>])\s*/g, '$1')[_0x242674(0x168)](/\s+/, '\x20');
                const _0xae1614 = _0x3e49e8[_0x242674(0x174)](process[_0x242674(0x15a)]['UNI_USING_NVUE_STYLE_COMPILER'] ? /^((?:(?:\.[A-Za-z0-9_\-]+)+[\+\~\> ])*)((?:\.[A-Za-z0-9_\-\:]+)+)$/ : /^(\.)([A-Za-z0-9_\-:]+)$/);
                if (_0xae1614) {
                    var _0x83fd86 = _0xae1614[0x1], _0x105932 = _0xae1614[0x2], _0x2bbb1e = _0x105932['indexOf'](':');
                    if (_0x2bbb1e > -0x1) {
                        var _0x388a5b = _0x105932[_0x242674(0x175)](_0x2bbb1e);
                        _0x105932 = _0x105932[_0x242674(0x175)](0x0, _0x2bbb1e);
                        var _0x576033 = {};
                        Object[_0x242674(0x176)](_0x5e8c5c)[_0x242674(0x164)](function (_0x2159a1) {
                            _0x576033[_0x2159a1 + _0x388a5b] = _0x5e8c5c[_0x2159a1];
                        }), _0x5e8c5c = _0x576033;
                    }
                    Object[_0x242674(0x176)](_0x5e8c5c)[_0x242674(0x164)](function (_0x41df9e) {
                        mergeStyle(_0x5bcc05, _0x105932, _0x83fd86, _0x5e8c5c, _0x41df9e, _0xabb336);
                    });
                } else
                    _0x4d2871['push']({
                        'line': _0x48a945['position'][_0x242674(0x172)]['line'],
                        'column': _0x48a945[_0x242674(0x156)][_0x242674(0x172)][_0x242674(0x167)],
                        'reason': _0x242674(0x177) + _0x3e49e8 + _0x242674(0x178)
                    });
            }), _0x4d2871 = _0x4d2871[_0x3ed20b(0x179)](_0x284b06));
        else
            _0x53e23c === _0x3ed20b(0x17a) && (_0x48a945[_0x3ed20b(0x150)] && _0x48a945['declarations'][_0x3ed20b(0x160)] && (_0x48a945[_0x3ed20b(0x150)][_0x3ed20b(0x164)](function (_0x58e633) {
                var _0x4589ef = _0x3ed20b;
                if (_0x58e633[_0x4589ef(0x16a)] !== 'declaration')
                    return;
                var _0x134891 = util['hyphenedToCamelCase'](_0x58e633[_0x4589ef(0x151)]), _0x2dacfd = _0x58e633['value'];
                _0x134891 === _0x4589ef(0x17b) && '\x22\x27'[_0x4589ef(0x17c)](_0x2dacfd[0x0]) > -0x1 && (_0x2dacfd = _0x2dacfd[_0x4589ef(0x175)](0x1, _0x2dacfd[_0x4589ef(0x160)] - 0x1)), _0x5e8c5c[_0x134891] = _0x2dacfd;
            }), !_0x5bcc05['@FONT-FACE'] && (_0x5bcc05[_0x3ed20b(0x17d)] = []), _0x5bcc05[_0x3ed20b(0x17d)][_0x3ed20b(0x165)](_0x5e8c5c)));
    }), _0x5bcc05[_0xaae059(0x17e)] = 0x2, _0x30d01b(_0x2dce1e, {
        'jsonStyle': _0x5bcc05,
        'log': _0x4d2871
    });
}
function validate(_0x547d9a, _0xe65456) {
    var _0x5d86b7 = _0xd714a7, _0xf9fe14 = [], _0x275566;
    try {
        _0x547d9a = JSON['parse'](JSON[_0x5d86b7(0x17f)](_0x547d9a));
    } catch (_0x4126df) {
        _0x275566 = _0x4126df, _0x547d9a = {};
    }
    Object[_0x5d86b7(0x176)](_0x547d9a)[_0x5d86b7(0x164)](function (_0x3bd258) {
        var _0x23fd5c = _0x5d86b7, _0x437d64 = _0x547d9a[_0x3bd258];
        Object['keys'](_0x437d64)[_0x23fd5c(0x164)](function (_0x20ee7d) {
            var _0x2e912b = _0x23fd5c, _0x1c8bdb = _0x437d64[_0x20ee7d], _0x45f76a = validateItem(_0x20ee7d, _0x1c8bdb);
            typeof _0x45f76a['value'] === _0x2e912b(0x180) || typeof _0x45f76a[_0x2e912b(0x152)] === 'string' ? _0x437d64[_0x20ee7d] = _0x45f76a['value'] : delete _0x437d64[_0x20ee7d], _0x45f76a['log'] && _0xf9fe14[_0x2e912b(0x165)](_0x45f76a['log']);
        });
    }), _0xe65456(_0x275566, {
        'jsonStyle': _0x547d9a,
        'log': _0xf9fe14
    });
}
module[_0xd714a7(0x181)] = {
    'parse': parse,
    'validate': validate,
    'validateItem': validateItem,
    'util': util
};