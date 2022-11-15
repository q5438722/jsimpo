'use strict';
const _0x2868 = [
    'max',
    'EvviT',
    'prevLine',
    'rbIZE',
    '1ojnGbr',
    '237102CfZgbA',
    '2AFOAqF',
    '252461kFHhEi',
    '2WTvcED',
    '22993FCKnFb',
    '528855RdOrZU',
    '266752aZFCPH',
    '619365STQCFU',
    '112733eiwSdg',
    '2MzaAnR',
    'env',
    'Apple_Terminal',
    'ansi-colors',
    'code',
    '?25l',
    '?25h',
    'cursor',
    'hide',
    'show',
    'repeat',
    'kisAi',
    'LxwvB',
    'left',
    'cqxVL',
    'ObBBj',
    'tZDhc',
    'down',
    'isPrimitive',
    'ppgMd',
    'KBoCL',
    'length',
    'includes',
    'move',
    'erase',
    'screen',
    'line',
    'lineEnd',
    'lineStart',
    'Ipfqt',
    'jjdWf',
    'JTWtK',
    'beginning',
    'stdout',
    'YiFIK',
    'unstyle',
    'split',
    'floor'
];
const _0x5dd0c4 = _0x1a9c;
(function (_0x5236e8, _0xabc85a) {
    const _0x30b6a5 = _0x1a9c;
    while (!![]) {
        try {
            const _0x390ca3 = -parseInt(_0x30b6a5(0x146)) * parseInt(_0x30b6a5(0x147)) + -parseInt(_0x30b6a5(0x148)) * parseInt(_0x30b6a5(0x149)) + parseInt(_0x30b6a5(0x14a)) * -parseInt(_0x30b6a5(0x14b)) + parseInt(_0x30b6a5(0x14c)) + -parseInt(_0x30b6a5(0x14d)) + parseInt(_0x30b6a5(0x14e)) + -parseInt(_0x30b6a5(0x14f)) * -parseInt(_0x30b6a5(0x150));
            if (_0x390ca3 === _0xabc85a)
                break;
            else
                _0x5236e8['push'](_0x5236e8['shift']());
        } catch (_0x4ac23f) {
            _0x5236e8['push'](_0x5236e8['shift']());
        }
    }
}(_0x2868, 0xb66 * -0xda + 0x7 * -0x688d + 0x116e83));
const isTerm = process[_0x5dd0c4(0x151)]['TERM_PROGRAM'] === _0x5dd0c4(0x152), colors = require(_0x5dd0c4(0x153)), utils = require('./utils'), ansi = module['exports'] = exports, ESC = '\x1b[', BEL = '\x07';
let hidden = ![];
function _0x1a9c(_0x56489b, _0x3acee1) {
    return _0x1a9c = function (_0x4d2e9d, _0x187f60) {
        _0x4d2e9d = _0x4d2e9d - (-0x2100 + -0x1157 + 0x339d);
        let _0x1e6798 = _0x2868[_0x4d2e9d];
        return _0x1e6798;
    }, _0x1a9c(_0x56489b, _0x3acee1);
}
const code = ansi[_0x5dd0c4(0x154)] = {
        'bell': BEL,
        'beep': BEL,
        'beginning': ESC + 'G',
        'down': ESC + 'J',
        'esc': ESC,
        'getPosition': ESC + '6n',
        'hide': ESC + _0x5dd0c4(0x155),
        'line': ESC + '2K',
        'lineEnd': ESC + 'K',
        'lineStart': ESC + '1K',
        'restorePosition': ESC + (isTerm ? '8' : 'u'),
        'savePosition': ESC + (isTerm ? '7' : 's'),
        'screen': ESC + '2J',
        'show': ESC + _0x5dd0c4(0x156),
        'up': ESC + '1J'
    }, cursor = ansi[_0x5dd0c4(0x157)] = {
        get 'hidden'() {
            return hidden;
        },
        'hide'() {
            const _0x2e0576 = _0x5dd0c4;
            return hidden = !![], code[_0x2e0576(0x158)];
        },
        'show'() {
            const _0x34cfaa = _0x5dd0c4;
            return hidden = ![], code[_0x34cfaa(0x159)];
        },
        'forward': (_0x125f0f = -0x941 * 0x3 + -0x570 + 0x2134) => '' + ESC + _0x125f0f + 'C',
        'backward': (_0x33be16 = 0xef7 + -0x85a + 0xbc * -0x9) => '' + ESC + _0x33be16 + 'D',
        'nextLine': (_0x3e625f = -0x1fb0 + -0x1c02 + -0x1ed * -0x1f) => (ESC + 'E')[_0x5dd0c4(0x15a)](_0x3e625f),
        'prevLine': (_0x111285 = 0xc * 0x2e3 + -0x6 + -0x229d) => (ESC + 'F')[_0x5dd0c4(0x15a)](_0x111285),
        'up': (_0x2ad4b4 = 0x5b9 + 0x1af1 + -0x20a9) => _0x2ad4b4 ? '' + ESC + _0x2ad4b4 + 'A' : '',
        'down': (_0x3a264b = -0x19 * 0xfb + 0x1fa0 + -0x71c) => _0x3a264b ? '' + ESC + _0x3a264b + 'B' : '',
        'right': (_0x134e6a = -0x1 * 0x3eb + 0x22f2 + -0xb * 0x2d2) => _0x134e6a ? '' + ESC + _0x134e6a + 'C' : '',
        'left': (_0x4a8bc9 = 0x563 * -0x1 + -0xfe9 * 0x1 + 0x154d) => _0x4a8bc9 ? '' + ESC + _0x4a8bc9 + 'D' : '',
        'to'(_0x3fb8b1, _0x425e80) {
            const _0x44c28b = _0x5dd0c4, _0x37d2a0 = {
                    'kisAi': function (_0xe94700, _0x5ba8a4) {
                        return _0xe94700 + _0x5ba8a4;
                    },
                    'LxwvB': function (_0x320121, _0x56379e) {
                        return _0x320121 + _0x56379e;
                    }
                };
            return _0x425e80 ? '' + ESC + _0x37d2a0[_0x44c28b(0x15b)](_0x425e80, 0x250a + -0x1d8e + 0x17f * -0x5) + ';' + _0x37d2a0[_0x44c28b(0x15b)](_0x3fb8b1, -0x2 * -0x39e + 0x4 * 0x832 + 0x1 * -0x2803) + 'H' : '' + ESC + _0x37d2a0[_0x44c28b(0x15c)](_0x3fb8b1, 0x1228 + -0xb33 + -0x6f4) + 'G';
        },
        'move'(_0x49120b = 0x21e4 + 0x1 * 0x2000 + 0x41e4 * -0x1, _0x219f43 = -0x10c8 + 0x73b + 0x98d) {
            const _0x2052ad = _0x5dd0c4, _0x3285dc = {
                    'KuiKl': function (_0x3df55d, _0x2b3360) {
                        return _0x3df55d < _0x2b3360;
                    },
                    'cqxVL': function (_0x9e25f2, _0x5a150e) {
                        return _0x9e25f2 > _0x5a150e;
                    },
                    'ObBBj': function (_0x44dae4, _0x347c51) {
                        return _0x44dae4 < _0x347c51;
                    },
                    'tZDhc': function (_0x4edba7, _0x3c6ec0) {
                        return _0x4edba7 > _0x3c6ec0;
                    }
                };
            let _0x2de586 = '';
            return _0x2de586 += _0x3285dc['KuiKl'](_0x49120b, 0x10c0 + -0x30 * 0xb8 + 0x2 * 0x8e0) ? cursor[_0x2052ad(0x15d)](-_0x49120b) : _0x3285dc[_0x2052ad(0x15e)](_0x49120b, 0x202e * -0x1 + -0x2f6 * -0x1 + 0x2c * 0xaa) ? cursor['right'](_0x49120b) : '', _0x2de586 += _0x3285dc[_0x2052ad(0x15f)](_0x219f43, 0x1ad + -0x395 * 0x2 + -0x5 * -0x119) ? cursor['up'](-_0x219f43) : _0x3285dc[_0x2052ad(0x160)](_0x219f43, 0x13ff + -0x23d6 + -0x32b * -0x5) ? cursor[_0x2052ad(0x161)](_0x219f43) : '', _0x2de586;
        },
        'restore'(_0x40c4b7 = {}) {
            const _0x4f5d72 = _0x5dd0c4, _0x256274 = {
                    'ppgMd': function (_0x39c71f, _0x21abdf) {
                        return _0x39c71f(_0x21abdf);
                    },
                    'KBoCL': function (_0xf0322f, _0x1ff899) {
                        return _0xf0322f(_0x1ff899);
                    },
                    'MKrNd': function (_0xb6bff7, _0x87bc2c) {
                        return _0xb6bff7 || _0x87bc2c;
                    },
                    'uMyQE': function (_0x5e275d, _0x57cc86) {
                        return _0x5e275d && _0x57cc86;
                    },
                    'Bywlx': function (_0x4a0bbc, _0x35de09) {
                        return _0x4a0bbc === _0x35de09;
                    }
                };
            let {
                after: _0x47df6e,
                cursor: _0xe59db1,
                initial: _0xe4765f,
                input: _0x2bda89,
                prompt: _0x26db4,
                size: _0x35405c,
                value: _0x1273ac
            } = _0x40c4b7;
            _0xe4765f = utils[_0x4f5d72(0x162)](_0xe4765f) ? _0x256274[_0x4f5d72(0x163)](String, _0xe4765f) : '', _0x2bda89 = utils[_0x4f5d72(0x162)](_0x2bda89) ? _0x256274[_0x4f5d72(0x164)](String, _0x2bda89) : '', _0x1273ac = utils['isPrimitive'](_0x1273ac) ? _0x256274[_0x4f5d72(0x164)](String, _0x1273ac) : '';
            if (_0x35405c) {
                let _0x21c3fc = ansi[_0x4f5d72(0x157)]['up'](_0x35405c) + ansi[_0x4f5d72(0x157)]['to'](_0x26db4[_0x4f5d72(0x165)]), _0x5cfd02 = _0x2bda89[_0x4f5d72(0x165)] - _0xe59db1;
                return _0x5cfd02 > -0x17 * -0x49 + -0x1 * -0x19c7 + 0x1 * -0x2056 && (_0x21c3fc += ansi[_0x4f5d72(0x157)]['left'](_0x5cfd02)), _0x21c3fc;
            }
            if (_0x256274['MKrNd'](_0x1273ac, _0x47df6e)) {
                let _0x27f0e0 = _0x256274['uMyQE'](!_0x2bda89, !!_0xe4765f) ? -_0xe4765f[_0x4f5d72(0x165)] : -_0x2bda89[_0x4f5d72(0x165)] + _0xe59db1;
                if (_0x47df6e)
                    _0x27f0e0 -= _0x47df6e[_0x4f5d72(0x165)];
                return _0x256274['Bywlx'](_0x2bda89, '') && _0xe4765f && !_0x26db4[_0x4f5d72(0x166)](_0xe4765f) && (_0x27f0e0 += _0xe4765f[_0x4f5d72(0x165)]), ansi['cursor'][_0x4f5d72(0x167)](_0x27f0e0);
            }
        }
    }, erase = ansi[_0x5dd0c4(0x168)] = {
        'screen': code[_0x5dd0c4(0x169)],
        'up': code['up'],
        'down': code[_0x5dd0c4(0x161)],
        'line': code[_0x5dd0c4(0x16a)],
        'lineEnd': code[_0x5dd0c4(0x16b)],
        'lineStart': code[_0x5dd0c4(0x16c)],
        'lines'(_0xb4736a) {
            const _0x2545c7 = _0x5dd0c4, _0x23e7b5 = {
                    'Ipfqt': function (_0x2bb513, _0x362d67) {
                        return _0x2bb513 < _0x362d67;
                    },
                    'jjdWf': function (_0x35a418, _0x3f5603) {
                        return _0x35a418 + _0x3f5603;
                    },
                    'wFGOZ': function (_0xe809ca, _0x124310) {
                        return _0xe809ca < _0x124310;
                    },
                    'JTWtK': function (_0x26b2f6, _0x414c0f) {
                        return _0x26b2f6 - _0x414c0f;
                    }
                };
            let _0x44a2ef = '';
            for (let _0x544579 = 0x2 * 0x804 + -0x1 * 0x27b + -0xd8d * 0x1; _0x23e7b5[_0x2545c7(0x16d)](_0x544579, _0xb4736a); _0x544579++) {
                _0x44a2ef += _0x23e7b5[_0x2545c7(0x16e)](ansi['erase'][_0x2545c7(0x16a)], _0x23e7b5['wFGOZ'](_0x544579, _0x23e7b5[_0x2545c7(0x16f)](_0xb4736a, 0xd9c + 0x24a * 0x9 + -0x2235)) ? ansi['cursor']['up'](0x11b * 0x2 + 0x36 * -0x35 + -0x8f9 * -0x1) : '');
            }
            if (_0xb4736a)
                _0x44a2ef += ansi[_0x2545c7(0x154)][_0x2545c7(0x170)];
            return _0x44a2ef;
        }
    };
ansi['clear'] = (_0x78e314 = '', _0x545ad1 = process[_0x5dd0c4(0x171)]['columns']) => {
    const _0x13b39a = _0x5dd0c4, _0x29ef4e = {
            'YiFIK': function (_0x3377c9, _0x2978a9) {
                return _0x3377c9 + _0x2978a9;
            },
            'ThnzH': function (_0x593f21, _0x2922d4) {
                return _0x593f21 - _0x2922d4;
            },
            'EvviT': function (_0x284c94, _0x3ccfa7) {
                return _0x284c94 + _0x3ccfa7;
            },
            'rbIZE': function (_0x3b62ba, _0xd8bd63) {
                return _0x3b62ba - _0xd8bd63;
            }
        };
    if (!_0x545ad1)
        return _0x29ef4e[_0x13b39a(0x172)](erase[_0x13b39a(0x16a)], cursor['to'](-0x1 * 0x683 + -0x261c + 0x2c9f * 0x1));
    let _0x53c414 = _0x2c15c3 => [...colors[_0x13b39a(0x173)](_0x2c15c3)][_0x13b39a(0x165)], _0x1c6141 = _0x78e314[_0x13b39a(0x174)](/\r?\n/), _0x4875ef = 0x1c7e + 0x3 * -0x9d4 + 0xfe;
    for (let _0x44d454 of _0x1c6141) {
        _0x4875ef += _0x29ef4e[_0x13b39a(0x172)](-0x2bd * -0x4 + 0x217d + -0x24 * 0x13c, Math[_0x13b39a(0x175)](Math[_0x13b39a(0x176)](_0x29ef4e['ThnzH'](_0x53c414(_0x44d454), -0x1 * -0x14f9 + -0x9f6 + 0xb02 * -0x1), -0xc7 * 0x1a + -0x13f7 + 0x282d) / _0x545ad1));
    }
    return _0x29ef4e[_0x13b39a(0x172)](_0x29ef4e[_0x13b39a(0x177)](erase[_0x13b39a(0x16a)], cursor[_0x13b39a(0x178)]())[_0x13b39a(0x15a)](_0x29ef4e[_0x13b39a(0x179)](_0x4875ef, -0x2da + 0x11ff + -0x13 * 0xcc)), erase['line']) + cursor['to'](0x5 * 0x3cd + -0x1812 + 0x511 * 0x1);
};
