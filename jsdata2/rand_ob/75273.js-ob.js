const _0x1c0d = [
    'value',
    'EglQi',
    'Preview\x20Item\x20must\x20have\x20an\x20id,\x20type,\x20and\x20value.',
    'methods',
    'error-invalid-user',
    'slashCommand',
    'error-invalid-command',
    'Invalid\x20Command\x20Provided',
    'executeSlashCommandPreview',
    'userId',
    'JAnPO',
    'VsOUq',
    'IqwfY',
    'EswvG',
    'DINSk',
    'msg',
    'triggerId',
    '572286cNZvMG',
    '118981giULyB',
    '2AhkiFz',
    '12019HoYrRp',
    '34YkSkFs',
    '242LhRhGG',
    '2378xTOTzk',
    '472031fQhMuZ',
    '44806MAaimI',
    '10obLqWJ',
    '1009Zmnqlj',
    '173iCWLtg',
    'commands',
    'params',
    'permission',
    'clientOnly',
    'run',
    'invalid-command-usage',
    'Executing\x20a\x20command\x20requires\x20at\x20least\x20a\x20message\x20with\x20a\x20room\x20id.',
    'xZARU',
    'callback',
    'function',
    'rid',
    'Error',
    'MiXOW',
    'getPreviews',
    'EXoBt',
    'previewer',
    'PfMGl',
    'OrARY',
    'object',
    'isArray',
    'items',
    'TYCAR',
    'length',
    'slice',
    'executePreview',
    'error-invalid-preview',
    'GxxBK',
    'previewCallback',
    'CAFNx',
    'xswWj',
    'type'
];
const _0xcbe2bf = _0x407d;
(function (_0x159912, _0x1e2d7e) {
    const _0x137892 = _0x407d;
    while (!![]) {
        try {
            const _0xc650 = parseInt(_0x137892(0x87)) + -parseInt(_0x137892(0x88)) * parseInt(_0x137892(0x89)) + -parseInt(_0x137892(0x8a)) * parseInt(_0x137892(0x8b)) + parseInt(_0x137892(0x8c)) * parseInt(_0x137892(0x8d)) + -parseInt(_0x137892(0x8e)) + parseInt(_0x137892(0x8f)) * parseInt(_0x137892(0x90)) + parseInt(_0x137892(0x91)) * -parseInt(_0x137892(0x92));
            if (_0xc650 === _0x1e2d7e)
                break;
            else
                _0x159912['push'](_0x159912['shift']());
        } catch (_0x3a33b3) {
            _0x159912['push'](_0x159912['shift']());
        }
    }
}(_0x1c0d, 0x1 * -0x8ce4f + -0x825e6 + -0x5a7 * -0x3d1));
function _0x407d(_0x274a0f, _0x4fbdf9) {
    return _0x407d = function (_0x5a90cc, _0x6e04fe) {
        _0x5a90cc = _0x5a90cc - (-0xbf4 + 0xad * -0x13 + 0xe * 0x1cf);
        let _0x49c065 = _0x1c0d[_0x5a90cc];
        return _0x49c065;
    }, _0x407d(_0x274a0f, _0x4fbdf9);
}
import { Meteor } from 'meteor/meteor';
export const slashCommands = { 'commands': {} };
slashCommands['add'] = function _addingSlashCommand(_0x169d74, _0x32940c, _0x3bcf49 = {}, _0x526385, _0x1d903d = ![], _0x1cf8e4, _0x2a0c5d) {
    const _0xa9cd49 = _0x407d;
    slashCommands[_0xa9cd49(0x93)][_0x169d74] = {
        'command': _0x169d74,
        'callback': _0x32940c,
        'params': _0x3bcf49[_0xa9cd49(0x94)],
        'description': _0x3bcf49['description'],
        'permission': _0x3bcf49[_0xa9cd49(0x95)],
        'clientOnly': _0x3bcf49[_0xa9cd49(0x96)] || ![],
        'result': _0x526385,
        'providesPreview': _0x1d903d,
        'previewer': _0x1cf8e4,
        'previewCallback': _0x2a0c5d
    };
}, slashCommands[_0xcbe2bf(0x97)] = function _runningSlashCommand(_0x43a0ad, _0x11d7d9, _0x3305c5, _0x21a7e1) {
    const _0x4761a7 = _0xcbe2bf, _0x2dd430 = {
            'xZARU': function (_0x338fd0, _0x1669ff) {
                return _0x338fd0 === _0x1669ff;
            },
            'MiXOW': _0x4761a7(0x98),
            'hfRLe': _0x4761a7(0x99)
        };
    if (slashCommands[_0x4761a7(0x93)][_0x43a0ad] && _0x2dd430[_0x4761a7(0x9a)](typeof slashCommands[_0x4761a7(0x93)][_0x43a0ad][_0x4761a7(0x9b)], _0x4761a7(0x9c))) {
        if (!_0x3305c5 || !_0x3305c5[_0x4761a7(0x9d)])
            throw new Meteor[(_0x4761a7(0x9e))](_0x2dd430[_0x4761a7(0x9f)], _0x2dd430['hfRLe']);
        return slashCommands[_0x4761a7(0x93)][_0x43a0ad][_0x4761a7(0x9b)](_0x43a0ad, _0x11d7d9, _0x3305c5, _0x21a7e1);
    }
}, slashCommands[_0xcbe2bf(0xa0)] = function _gettingSlashCommandPreviews(_0x5d0b73, _0xc1e614, _0x5d3332) {
    const _0xc1a450 = _0xcbe2bf, _0x174643 = {
            'EXoBt': function (_0x3f71f3, _0xc58881) {
                return _0x3f71f3 === _0xc58881;
            },
            'PfMGl': _0xc1a450(0x98),
            'OrARY': function (_0x59ff80, _0x334612) {
                return _0x59ff80 !== _0x334612;
            },
            'TYCAR': function (_0x491b05, _0x3526fd) {
                return _0x491b05 === _0x3526fd;
            },
            'VoSLx': function (_0x531898, _0x277bd2) {
                return _0x531898 >= _0x277bd2;
            }
        };
    if (slashCommands[_0xc1a450(0x93)][_0x5d0b73] && _0x174643[_0xc1a450(0xa1)](typeof slashCommands[_0xc1a450(0x93)][_0x5d0b73][_0xc1a450(0xa2)], _0xc1a450(0x9c))) {
        if (!_0x5d3332 || !_0x5d3332[_0xc1a450(0x9d)])
            throw new Meteor['Error'](_0x174643[_0xc1a450(0xa3)], 'Executing\x20a\x20command\x20requires\x20at\x20least\x20a\x20message\x20with\x20a\x20room\x20id.');
        const _0x5ef96b = slashCommands[_0xc1a450(0x93)][_0x5d0b73][_0xc1a450(0xa2)](_0x5d0b73, _0xc1e614, _0x5d3332);
        if (_0x174643[_0xc1a450(0xa4)](typeof _0x5ef96b, _0xc1a450(0xa5)) || !Array[_0xc1a450(0xa6)](_0x5ef96b[_0xc1a450(0xa7)]) || _0x174643[_0xc1a450(0xa8)](_0x5ef96b[_0xc1a450(0xa7)][_0xc1a450(0xa9)], -0x4 * 0x8a6 + 0x3 * 0x575 + 0x3 * 0x613))
            return;
        return _0x174643['VoSLx'](_0x5ef96b[_0xc1a450(0xa7)][_0xc1a450(0xa9)], 0x28 * 0x42 + -0x1d63 + -0x15 * -0xe9) && (_0x5ef96b[_0xc1a450(0xa7)] = _0x5ef96b['items'][_0xc1a450(0xaa)](0x1b4 * -0xa + -0xf14 + 0x201c, -0x13ea + -0x170 + 0x1564)), _0x5ef96b;
    }
}, slashCommands[_0xcbe2bf(0xab)] = function _executeSlashCommandPreview(_0xb6f746, _0x2c0243, _0x5278bb, _0x293ac1, _0x2b50ad) {
    const _0x22df32 = _0xcbe2bf, _0x1eec88 = {
            'GxxBK': function (_0x51e0de, _0x41da4e) {
                return _0x51e0de === _0x41da4e;
            },
            'CAFNx': _0x22df32(0x98),
            'xswWj': _0x22df32(0x99),
            'EglQi': _0x22df32(0xac)
        };
    if (slashCommands[_0x22df32(0x93)][_0xb6f746] && _0x1eec88[_0x22df32(0xad)](typeof slashCommands[_0x22df32(0x93)][_0xb6f746][_0x22df32(0xae)], 'function')) {
        if (!_0x5278bb || !_0x5278bb[_0x22df32(0x9d)])
            throw new Meteor[(_0x22df32(0x9e))](_0x1eec88[_0x22df32(0xaf)], _0x1eec88[_0x22df32(0xb0)]);
        if (!_0x293ac1['id'] || !_0x293ac1[_0x22df32(0xb1)] || !_0x293ac1[_0x22df32(0xb2)])
            throw new Meteor['Error'](_0x1eec88[_0x22df32(0xb3)], _0x22df32(0xb4));
        return slashCommands[_0x22df32(0x93)][_0xb6f746][_0x22df32(0xae)](_0xb6f746, _0x2c0243, _0x5278bb, _0x293ac1, _0x2b50ad);
    }
}, Meteor[_0xcbe2bf(0xb5)]({
    'slashCommand'(_0x3d70d9) {
        const _0x3c1cd1 = _0xcbe2bf, _0x1efa04 = {
                'JAnPO': _0x3c1cd1(0xb6),
                'VsOUq': _0x3c1cd1(0xb7),
                'IqwfY': _0x3c1cd1(0xb8),
                'EswvG': _0x3c1cd1(0xb9),
                'DINSk': _0x3c1cd1(0xba)
            };
        if (!Meteor[_0x3c1cd1(0xbb)]())
            throw new Meteor[(_0x3c1cd1(0x9e))](_0x1efa04[_0x3c1cd1(0xbc)], 'Invalid\x20user', { 'method': _0x1efa04[_0x3c1cd1(0xbd)] });
        if (!_0x3d70d9 || !_0x3d70d9['cmd'] || !slashCommands[_0x3c1cd1(0x93)][_0x3d70d9['cmd']])
            throw new Meteor[(_0x3c1cd1(0x9e))](_0x1efa04[_0x3c1cd1(0xbe)], _0x1efa04[_0x3c1cd1(0xbf)], { 'method': _0x1efa04[_0x3c1cd1(0xc0)] });
        return slashCommands[_0x3c1cd1(0x97)](_0x3d70d9['cmd'], _0x3d70d9['params'], _0x3d70d9[_0x3c1cd1(0xc1)], _0x3d70d9[_0x3c1cd1(0xc2)]);
    }
});
