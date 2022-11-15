'use strict';
const _0x1ff1 = [
    'Unused\x20eslint-disable\x20directive\x20(no\x20problems\x20were\x20reported).',
    'unprocessedDirective',
    'warn',
    'exports',
    'off',
    'disable',
    'enable',
    'assign',
    'sort',
    'disable-line',
    'disable-next-line',
    'concat',
    'unusedDisableDirectives',
    '299PYLHpb',
    '667mDuCkk',
    '232536ZBKQXS',
    '11213oNiAwY',
    '5wUPqsU',
    '204166QdJVNB',
    '7358SeSxQz',
    '22vaCfdy',
    '7486dcEyYA',
    '30dvimYH',
    '83fmQgCy',
    '4609rCnHas',
    'line',
    'column',
    'problems',
    'directives',
    'length',
    'type',
    'ruleId',
    'clear',
    'delete',
    'set',
    'add',
    'get',
    'push',
    'filter',
    'has',
    'map',
    'Unused\x20eslint-disable\x20directive\x20(no\x20problems\x20were\x20reported\x20from\x20\x27',
    '\x27).'
];
const _0x59e456 = _0x850b;
(function (_0x3fa731, _0x1ce5e4) {
    const _0x4ca22e = _0x850b;
    while (!![]) {
        try {
            const _0x3fa0c1 = parseInt(_0x4ca22e(0xb4)) * -parseInt(_0x4ca22e(0xb5)) + -parseInt(_0x4ca22e(0xb6)) + parseInt(_0x4ca22e(0xb7)) * -parseInt(_0x4ca22e(0xb8)) + parseInt(_0x4ca22e(0xb9)) + parseInt(_0x4ca22e(0xba)) * -parseInt(_0x4ca22e(0xbb)) + parseInt(_0x4ca22e(0xbc)) * parseInt(_0x4ca22e(0xbd)) + -parseInt(_0x4ca22e(0xbe)) * -parseInt(_0x4ca22e(0xbf));
            if (_0x3fa0c1 === _0x1ce5e4)
                break;
            else
                _0x3fa731['push'](_0x3fa731['shift']());
        } catch (_0x2d0116) {
            _0x3fa731['push'](_0x3fa731['shift']());
        }
    }
}(_0x1ff1, 0x27667));
function compareLocations(_0x1427f0, _0x45ef2f) {
    const _0x2053e1 = _0x850b;
    return _0x1427f0['line'] - _0x45ef2f[_0x2053e1(0xc0)] || _0x1427f0[_0x2053e1(0xc1)] - _0x45ef2f[_0x2053e1(0xc1)];
}
function applyDirectives(_0x2614a3) {
    const _0x193573 = _0x850b, _0xc05265 = [];
    let _0x568594 = 0x0, _0x1f07e8 = null;
    const _0x4bef74 = new Map(), _0x490cba = new Set(), _0x4dcb72 = new Set();
    for (const _0x1d0f12 of _0x2614a3[_0x193573(0xc2)]) {
        while (_0x568594 < _0x2614a3[_0x193573(0xc3)][_0x193573(0xc4)] && compareLocations(_0x2614a3[_0x193573(0xc3)][_0x568594], _0x1d0f12) <= 0x0) {
            const _0x15d18f = _0x2614a3['directives'][_0x568594++];
            switch (_0x15d18f[_0x193573(0xc5)]) {
            case 'disable':
                if (_0x15d18f[_0x193573(0xc6)] === null)
                    _0x1f07e8 = _0x15d18f, _0x4bef74['clear'](), _0x490cba[_0x193573(0xc7)]();
                else
                    _0x1f07e8 ? (_0x490cba[_0x193573(0xc8)](_0x15d18f[_0x193573(0xc6)]), _0x4bef74[_0x193573(0xc9)](_0x15d18f['ruleId'], _0x15d18f)) : _0x4bef74['set'](_0x15d18f['ruleId'], _0x15d18f);
                break;
            case 'enable':
                if (_0x15d18f['ruleId'] === null)
                    _0x1f07e8 = null, _0x4bef74[_0x193573(0xc7)]();
                else
                    _0x1f07e8 ? (_0x490cba[_0x193573(0xca)](_0x15d18f[_0x193573(0xc6)]), _0x4bef74[_0x193573(0xc8)](_0x15d18f['ruleId'])) : _0x4bef74['delete'](_0x15d18f[_0x193573(0xc6)]);
                break;
            }
        }
        if (_0x4bef74['has'](_0x1d0f12[_0x193573(0xc6)]))
            _0x4dcb72[_0x193573(0xca)](_0x4bef74[_0x193573(0xcb)](_0x1d0f12[_0x193573(0xc6)]));
        else
            _0x1f07e8 && !_0x490cba['has'](_0x1d0f12['ruleId']) ? _0x4dcb72[_0x193573(0xca)](_0x1f07e8) : _0xc05265[_0x193573(0xcc)](_0x1d0f12);
    }
    const _0xa9b94b = _0x2614a3[_0x193573(0xc3)][_0x193573(0xcd)](_0x3c5ef6 => _0x3c5ef6[_0x193573(0xc5)] === 'disable' && !_0x4dcb72[_0x193573(0xce)](_0x3c5ef6))[_0x193573(0xcf)](_0xd52508 => ({
        'ruleId': null,
        'message': _0xd52508[_0x193573(0xc6)] ? _0x193573(0xd0) + _0xd52508['ruleId'] + _0x193573(0xd1) : _0x193573(0xd2),
        'line': _0xd52508[_0x193573(0xd3)][_0x193573(0xc0)],
        'column': _0xd52508[_0x193573(0xd3)][_0x193573(0xc1)],
        'severity': _0x2614a3['reportUnusedDisableDirectives'] === _0x193573(0xd4) ? 0x1 : 0x2,
        'nodeType': null
    }));
    return {
        'problems': _0xc05265,
        'unusedDisableDirectives': _0xa9b94b
    };
}
function _0x850b(_0x3bac14, _0x339657) {
    return _0x850b = function (_0x1ff10e, _0x850b2a) {
        _0x1ff10e = _0x1ff10e - 0xb4;
        let _0x589ea1 = _0x1ff1[_0x1ff10e];
        return _0x589ea1;
    }, _0x850b(_0x3bac14, _0x339657);
}
module[_0x59e456(0xd5)] = ({
    directives: _0x2d89d0,
    problems: _0x26120d,
    reportUnusedDisableDirectives: reportUnusedDisableDirectives = _0x59e456(0xd6)
}) => {
    const _0x58e195 = _0x59e456, _0x36ebf0 = _0x2d89d0[_0x58e195(0xcd)](_0x8d11e4 => _0x8d11e4[_0x58e195(0xc5)] === _0x58e195(0xd7) || _0x8d11e4[_0x58e195(0xc5)] === _0x58e195(0xd8))[_0x58e195(0xcf)](_0x458c80 => Object[_0x58e195(0xd9)]({}, _0x458c80, { 'unprocessedDirective': _0x458c80 }))[_0x58e195(0xda)](compareLocations);
    function _0x196c17(_0x2fd474, _0x3bbdba) {
        const _0x41ec2f = _0x58e195, _0xbf6869 = _0x2fd474[_0x41ec2f(0xcf)](_0x3bbdba), _0x410f55 = []['concat'](..._0xbf6869);
        return _0x410f55;
    }
    const _0x44f732 = _0x196c17(_0x2d89d0, _0x13d5b4 => {
            const _0x1244fc = _0x58e195;
            switch (_0x13d5b4['type']) {
            case 'disable':
            case 'enable':
                return [];
            case _0x1244fc(0xdb):
                return [
                    {
                        'type': 'disable',
                        'line': _0x13d5b4[_0x1244fc(0xc0)],
                        'column': 0x1,
                        'ruleId': _0x13d5b4[_0x1244fc(0xc6)],
                        'unprocessedDirective': _0x13d5b4
                    },
                    {
                        'type': _0x1244fc(0xd8),
                        'line': _0x13d5b4['line'] + 0x1,
                        'column': 0x0,
                        'ruleId': _0x13d5b4['ruleId'],
                        'unprocessedDirective': _0x13d5b4
                    }
                ];
            case _0x1244fc(0xdc):
                return [
                    {
                        'type': _0x1244fc(0xd7),
                        'line': _0x13d5b4[_0x1244fc(0xc0)] + 0x1,
                        'column': 0x1,
                        'ruleId': _0x13d5b4['ruleId'],
                        'unprocessedDirective': _0x13d5b4
                    },
                    {
                        'type': 'enable',
                        'line': _0x13d5b4[_0x1244fc(0xc0)] + 0x2,
                        'column': 0x0,
                        'ruleId': _0x13d5b4[_0x1244fc(0xc6)],
                        'unprocessedDirective': _0x13d5b4
                    }
                ];
            default:
                throw new TypeError('Unrecognized\x20directive\x20type\x20\x27' + _0x13d5b4[_0x1244fc(0xc5)] + '\x27');
            }
        })[_0x58e195(0xda)](compareLocations), _0xd60134 = applyDirectives({
            'problems': _0x26120d,
            'directives': _0x36ebf0,
            'reportUnusedDisableDirectives': reportUnusedDisableDirectives
        }), _0x47aa06 = applyDirectives({
            'problems': _0xd60134['problems'],
            'directives': _0x44f732,
            'reportUnusedDisableDirectives': reportUnusedDisableDirectives
        });
    return reportUnusedDisableDirectives !== _0x58e195(0xd6) ? _0x47aa06[_0x58e195(0xc2)][_0x58e195(0xdd)](_0xd60134[_0x58e195(0xde)])[_0x58e195(0xdd)](_0x47aa06[_0x58e195(0xde)])['sort'](compareLocations) : _0x47aa06[_0x58e195(0xc2)];
};
