function compareLocations(_0x1427f0, _0x45ef2f) {
    const _0x2053e1 = _0x850b;
    return _0x1427f0['line'] - _0x45ef2f[_0x2053e1(192)] || _0x1427f0[_0x2053e1(193)] - _0x45ef2f[_0x2053e1(193)];
}
function applyDirectives(_0x2614a3) {
    const _0x193573 = _0x850b, _0xc05265 = [];
    let _0x568594 = 0, _0x1f07e8 = null;
    const _0x4bef74 = new Map(), _0x490cba = new Set(), _0x4dcb72 = new Set();
    for (const _0x1d0f12 of _0x2614a3[_0x193573(194)]) {
        while (_0x568594 < _0x2614a3[_0x193573(195)][_0x193573(196)] && compareLocations(_0x2614a3[_0x193573(195)][_0x568594], _0x1d0f12) <= 0) {
            const _0x15d18f = _0x2614a3['directives'][_0x568594++];
            switch (_0x15d18f[_0x193573(197)]) {
            case 'disable':
                if (_0x15d18f[_0x193573(198)] === null)
                    _0x1f07e8 = _0x15d18f, _0x4bef74['clear'](), _0x490cba[_0x193573(199)]();
                else
                    _0x1f07e8 ? (_0x490cba[_0x193573(200)](_0x15d18f[_0x193573(198)]), _0x4bef74[_0x193573(201)](_0x15d18f['ruleId'], _0x15d18f)) : _0x4bef74['set'](_0x15d18f['ruleId'], _0x15d18f);
                break;
            case 'enable':
                if (_0x15d18f['ruleId'] === null)
                    _0x1f07e8 = null, _0x4bef74[_0x193573(199)]();
                else
                    _0x1f07e8 ? (_0x490cba[_0x193573(202)](_0x15d18f[_0x193573(198)]), _0x4bef74[_0x193573(200)](_0x15d18f['ruleId'])) : _0x4bef74['delete'](_0x15d18f[_0x193573(198)]);
                break;
            }
        }
        if (_0x4bef74['has'](_0x1d0f12[_0x193573(198)]))
            _0x4dcb72[_0x193573(202)](_0x4bef74[_0x193573(203)](_0x1d0f12[_0x193573(198)]));
        else
            _0x1f07e8 && !_0x490cba['has'](_0x1d0f12['ruleId']) ? _0x4dcb72[_0x193573(202)](_0x1f07e8) : _0xc05265[_0x193573(204)](_0x1d0f12);
    }
    const _0xa9b94b = _0x2614a3[_0x193573(195)][_0x193573(205)](_0x3c5ef6 => _0x3c5ef6[_0x193573(197)] === 'disable' && !_0x4dcb72[_0x193573(206)](_0x3c5ef6))[_0x193573(207)](_0xd52508 => ({
        'ruleId': null,
        'message': _0xd52508[_0x193573(198)] ? _0x193573(208) + _0xd52508['ruleId'] + _0x193573(209) : _0x193573(210),
        'line': _0xd52508[_0x193573(211)][_0x193573(192)],
        'column': _0xd52508[_0x193573(211)][_0x193573(193)],
        'severity': _0x2614a3['reportUnusedDisableDirectives'] === _0x193573(212) ? 1 : 2,
        'nodeType': null
    }));
    return {
        'problems': _0xc05265,
        'unusedDisableDirectives': _0xa9b94b
    };
}
function _0x850b(_0x3bac14, _0x339657) {
    return _0x850b = function (_0x1ff10e, _0x850b2a) {
        _0x1ff10e = _0x1ff10e - 180;
        let _0x589ea1 = _0x1ff1[_0x1ff10e];
        return _0x589ea1;
    }, _0x850b(_0x3bac14, _0x339657);
}
module[_0x59e456(213)] = ({
    directives: _0x2d89d0,
    problems: _0x26120d,
    reportUnusedDisableDirectives: reportUnusedDisableDirectives = _0x59e456(214)
}) => {
    const _0x58e195 = _0x59e456, _0x36ebf0 = _0x2d89d0[_0x58e195(205)](_0x8d11e4 => _0x8d11e4[_0x58e195(197)] === _0x58e195(215) || _0x8d11e4[_0x58e195(197)] === _0x58e195(216))[_0x58e195(207)](_0x458c80 => Object[_0x58e195(217)]({}, _0x458c80, { 'unprocessedDirective': _0x458c80 }))[_0x58e195(218)](compareLocations);
    function _0x196c17(_0x2fd474, _0x3bbdba) {
        const _0x41ec2f = _0x58e195, _0xbf6869 = _0x2fd474[_0x41ec2f(207)](_0x3bbdba), _0x410f55 = []['concat'](..._0xbf6869);
        return _0x410f55;
    }
    const _0x44f732 = _0x196c17(_0x2d89d0, _0x13d5b4 => {
            const _0x1244fc = _0x58e195;
            switch (_0x13d5b4['type']) {
            case 'disable':
            case 'enable':
                return [];
            case _0x1244fc(219):
                return [
                    {
                        'type': 'disable',
                        'line': _0x13d5b4[_0x1244fc(192)],
                        'column': 1,
                        'ruleId': _0x13d5b4[_0x1244fc(198)],
                        'unprocessedDirective': _0x13d5b4
                    },
                    {
                        'type': _0x1244fc(216),
                        'line': _0x13d5b4['line'] + 1,
                        'column': 0,
                        'ruleId': _0x13d5b4['ruleId'],
                        'unprocessedDirective': _0x13d5b4
                    }
                ];
            case _0x1244fc(220):
                return [
                    {
                        'type': _0x1244fc(215),
                        'line': _0x13d5b4[_0x1244fc(192)] + 1,
                        'column': 1,
                        'ruleId': _0x13d5b4['ruleId'],
                        'unprocessedDirective': _0x13d5b4
                    },
                    {
                        'type': 'enable',
                        'line': _0x13d5b4[_0x1244fc(192)] + 2,
                        'column': 0,
                        'ruleId': _0x13d5b4[_0x1244fc(198)],
                        'unprocessedDirective': _0x13d5b4
                    }
                ];
            default:
                throw new TypeError('Unrecognized directive type \'' + _0x13d5b4[_0x1244fc(197)] + '\'');
            }
        })[_0x58e195(218)](compareLocations), _0xd60134 = applyDirectives({
            'problems': _0x26120d,
            'directives': _0x36ebf0,
            'reportUnusedDisableDirectives': reportUnusedDisableDirectives
        }), _0x47aa06 = applyDirectives({
            'problems': _0xd60134['problems'],
            'directives': _0x44f732,
            'reportUnusedDisableDirectives': reportUnusedDisableDirectives
        });
    return reportUnusedDisableDirectives !== _0x58e195(214) ? _0x47aa06[_0x58e195(194)][_0x58e195(221)](_0xd60134[_0x58e195(222)])[_0x58e195(221)](_0x47aa06[_0x58e195(222)])['sort'](compareLocations) : _0x47aa06[_0x58e195(194)];
};