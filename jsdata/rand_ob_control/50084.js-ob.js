(function (_0x48c63c) {
    var _0x43e77a = {
        'RGkVB': function (_0x211c11, _0xf45b5a) {
            return _0x211c11 == _0xf45b5a;
        },
        'unIbR': 'object',
        'rUANG': function (_0x2816e5, _0x212e40, _0x55d422) {
            return _0x2816e5(_0x212e40, _0x55d422);
        },
        'lfTdp': function (_0x505eae, _0x33f5a0) {
            return _0x505eae(_0x33f5a0);
        },
        'XRLjc': '../../lib/codemirror',
        'ytRtq': function (_0x21057e, _0x2aea53) {
            return _0x21057e(_0x2aea53);
        },
        'neeKY': '../yaml/yaml',
        'MxUOx': function (_0x47733e, _0x56cf77) {
            return _0x47733e == _0x56cf77;
        },
        'zOgHY': 'function',
        'qruEj': function (_0xe63f25, _0x4ed4c2, _0x2378ed) {
            return _0xe63f25(_0x4ed4c2, _0x2378ed);
        }
    };
    if (_0x43e77a['RGkVB'](typeof exports, _0x43e77a['unIbR']) && _0x43e77a['RGkVB'](typeof module, _0x43e77a['unIbR']))
        _0x43e77a['rUANG'](_0x48c63c, _0x43e77a['lfTdp'](require, _0x43e77a['XRLjc']), _0x43e77a['ytRtq'](require, _0x43e77a['neeKY']));
    else {
        if (_0x43e77a['MxUOx'](typeof define, _0x43e77a['zOgHY']) && define['amd'])
            _0x43e77a['qruEj'](define, [
                _0x43e77a['XRLjc'],
                _0x43e77a['neeKY']
            ], _0x48c63c);
        else
            _0x43e77a['ytRtq'](_0x48c63c, CodeMirror);
    }
}(function (_0x13f902) {
    var _0x263a36 = {
            'VQqab': function (_0x45bba2, _0xa34305) {
                return _0x45bba2 == _0xa34305;
            },
            'tMkpX': function (_0x20ed3c, _0x29ef5f) {
                return _0x20ed3c(_0x29ef5f);
            },
            'GdCTE': '---',
            'YVMst': function (_0x220ed8, _0xb30043) {
                return _0x220ed8(_0xb30043);
            },
            'QyIJc': 'yaml',
            'YYETy': 'gfm',
            'kOpMK': 'yaml-frontmatter'
        }, _0x3f8d65 = 0x0, _0x33c54e = 0x1, _0x2ac279 = 0x2;
    _0x13f902['defineMode'](_0x263a36['kOpMK'], function (_0x18696f, _0x1d4e79) {
        var _0x1e8d14 = {
                'mYKpi': function (_0x1b6b40, _0x15ce13) {
                    return _0x263a36['VQqab'](_0x1b6b40, _0x15ce13);
                },
                'PKotH': function (_0x524458, _0x17a5f8) {
                    return _0x263a36['tMkpX'](_0x524458, _0x17a5f8);
                },
                'fTOXu': _0x263a36['GdCTE'],
                'TdmdI': function (_0x34d015, _0x1a6d95) {
                    return _0x263a36['YVMst'](_0x34d015, _0x1a6d95);
                },
                'pReSn': function (_0x13bd03, _0x225178) {
                    return _0x263a36['YVMst'](_0x13bd03, _0x225178);
                }
            }, _0x346260 = _0x13f902['getMode'](_0x18696f, _0x263a36['QyIJc']), _0x2bb407 = _0x13f902['getMode'](_0x18696f, _0x1d4e79 && _0x1d4e79['base'] || _0x263a36['YYETy']);
        function _0x4b4a27(_0x3fa0ae) {
            return _0x1e8d14['mYKpi'](_0x3fa0ae['state'], _0x2ac279) ? _0x2bb407 : _0x346260;
        }
        return {
            'startState': function () {
                return {
                    'state': _0x3f8d65,
                    'inner': _0x13f902['startState'](_0x346260)
                };
            },
            'copyState': function (_0x412905) {
                return {
                    'state': _0x412905['state'],
                    'inner': _0x13f902['copyState'](_0x1e8d14['PKotH'](_0x4b4a27, _0x412905), _0x412905['inner'])
                };
            },
            'token': function (_0x218d56, _0x2b1f51) {
                if (_0x1e8d14['mYKpi'](_0x2b1f51['state'], _0x3f8d65))
                    return _0x218d56['match'](_0x1e8d14['fTOXu'], ![]) ? (_0x2b1f51['state'] = _0x33c54e, _0x346260['token'](_0x218d56, _0x2b1f51['inner'])) : (_0x2b1f51['state'] = _0x2ac279, _0x2b1f51['inner'] = _0x13f902['startState'](_0x2bb407), _0x2bb407['token'](_0x218d56, _0x2b1f51['inner']));
                else {
                    if (_0x1e8d14['mYKpi'](_0x2b1f51['state'], _0x33c54e)) {
                        var _0x31adeb = _0x218d56['sol']() && _0x218d56['match'](/(---|\.\.\.)/, ![]), _0x29eb10 = _0x346260['token'](_0x218d56, _0x2b1f51['inner']);
                        return _0x31adeb && (_0x2b1f51['state'] = _0x2ac279, _0x2b1f51['inner'] = _0x13f902['startState'](_0x2bb407)), _0x29eb10;
                    } else
                        return _0x2bb407['token'](_0x218d56, _0x2b1f51['inner']);
                }
            },
            'innerMode': function (_0x352baa) {
                return {
                    'mode': _0x1e8d14['TdmdI'](_0x4b4a27, _0x352baa),
                    'state': _0x352baa['inner']
                };
            },
            'blankLine': function (_0x21facb) {
                var _0xcafe2d = _0x1e8d14['pReSn'](_0x4b4a27, _0x21facb);
                if (_0xcafe2d['blankLine'])
                    return _0xcafe2d['blankLine'](_0x21facb['inner']);
            }
        };
    });
}));
