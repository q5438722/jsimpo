const isTerm = process[_0x5dd0c4(337)]['TERM_PROGRAM'] === _0x5dd0c4(338), colors = require(_0x5dd0c4(339)), utils = require('./utils'), ansi = module['exports'] = exports, ESC = '\x1B[', BEL = '\x07';
let hidden = ![];
function _0x1a9c(_0x56489b, _0x3acee1) {
    return _0x1a9c = function (_0x4d2e9d, _0x187f60) {
        _0x4d2e9d = _0x4d2e9d - (-8448 + -4439 + 13213);
        let _0x1e6798 = _0x2868[_0x4d2e9d];
        return _0x1e6798;
    }, _0x1a9c(_0x56489b, _0x3acee1);
}
const code = ansi[_0x5dd0c4(340)] = {
        'bell': BEL,
        'beep': BEL,
        'beginning': ESC + 'G',
        'down': ESC + 'J',
        'esc': ESC,
        'getPosition': ESC + '6n',
        'hide': ESC + _0x5dd0c4(341),
        'line': ESC + '2K',
        'lineEnd': ESC + 'K',
        'lineStart': ESC + '1K',
        'restorePosition': ESC + (isTerm ? '8' : 'u'),
        'savePosition': ESC + (isTerm ? '7' : 's'),
        'screen': ESC + '2J',
        'show': ESC + _0x5dd0c4(342),
        'up': ESC + '1J'
    }, cursor = ansi[_0x5dd0c4(343)] = {
        get 'hidden'() {
            return hidden;
        },
        'hide'() {
            const _0x2e0576 = _0x5dd0c4;
            return hidden = !![], code[_0x2e0576(344)];
        },
        'show'() {
            const _0x34cfaa = _0x5dd0c4;
            return hidden = ![], code[_0x34cfaa(345)];
        },
        'forward': (_0x125f0f = -2369 * 3 + -1392 + 8500) => '' + ESC + _0x125f0f + 'C',
        'backward': (_0x33be16 = 3831 + -2138 + 188 * -9) => '' + ESC + _0x33be16 + 'D',
        'nextLine': (_0x3e625f = -8112 + -7170 + -493 * -31) => (ESC + 'E')[_0x5dd0c4(346)](_0x3e625f),
        'prevLine': (_0x111285 = 12 * 739 + -6 + -8861) => (ESC + 'F')[_0x5dd0c4(346)](_0x111285),
        'up': (_0x2ad4b4 = 1465 + 6897 + -8361) => _0x2ad4b4 ? '' + ESC + _0x2ad4b4 + 'A' : '',
        'down': (_0x3a264b = -25 * 251 + 8096 + -1820) => _0x3a264b ? '' + ESC + _0x3a264b + 'B' : '',
        'right': (_0x134e6a = -1 * 1003 + 8946 + -11 * 722) => _0x134e6a ? '' + ESC + _0x134e6a + 'C' : '',
        'left': (_0x4a8bc9 = 1379 * -1 + -4073 * 1 + 5453) => _0x4a8bc9 ? '' + ESC + _0x4a8bc9 + 'D' : '',
        'to'(_0x3fb8b1, _0x425e80) {
            const _0x44c28b = _0x5dd0c4, _0x37d2a0 = {
                    'kisAi': function (_0xe94700, _0x5ba8a4) {
                        return _0xe94700 + _0x5ba8a4;
                    },
                    'LxwvB': function (_0x320121, _0x56379e) {
                        return _0x320121 + _0x56379e;
                    }
                };
            return _0x425e80 ? '' + ESC + _0x37d2a0[_0x44c28b(347)](_0x425e80, 9482 + -7566 + 383 * -5) + ';' + _0x37d2a0[_0x44c28b(347)](_0x3fb8b1, -2 * -926 + 4 * 2098 + 1 * -10243) + 'H' : '' + ESC + _0x37d2a0[_0x44c28b(348)](_0x3fb8b1, 4648 + -2867 + -1780) + 'G';
        },
        'move'(_0x49120b = 8676 + 1 * 8192 + 16868 * -1, _0x219f43 = -4296 + 1851 + 2445) {
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
            return _0x2de586 += _0x3285dc['KuiKl'](_0x49120b, 4288 + -48 * 184 + 2 * 2272) ? cursor[_0x2052ad(349)](-_0x49120b) : _0x3285dc[_0x2052ad(350)](_0x49120b, 8238 * -1 + -758 * -1 + 44 * 170) ? cursor['right'](_0x49120b) : '', _0x2de586 += _0x3285dc[_0x2052ad(351)](_0x219f43, 429 + -917 * 2 + -5 * -281) ? cursor['up'](-_0x219f43) : _0x3285dc[_0x2052ad(352)](_0x219f43, 5119 + -9174 + -811 * -5) ? cursor[_0x2052ad(353)](_0x219f43) : '', _0x2de586;
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
            _0xe4765f = utils[_0x4f5d72(354)](_0xe4765f) ? _0x256274[_0x4f5d72(355)](String, _0xe4765f) : '', _0x2bda89 = utils[_0x4f5d72(354)](_0x2bda89) ? _0x256274[_0x4f5d72(356)](String, _0x2bda89) : '', _0x1273ac = utils['isPrimitive'](_0x1273ac) ? _0x256274[_0x4f5d72(356)](String, _0x1273ac) : '';
            if (_0x35405c) {
                let _0x21c3fc = ansi[_0x4f5d72(343)]['up'](_0x35405c) + ansi[_0x4f5d72(343)]['to'](_0x26db4[_0x4f5d72(357)]), _0x5cfd02 = _0x2bda89[_0x4f5d72(357)] - _0xe59db1;
                return _0x5cfd02 > -23 * -73 + -1 * -6599 + 1 * -8278 && (_0x21c3fc += ansi[_0x4f5d72(343)]['left'](_0x5cfd02)), _0x21c3fc;
            }
            if (_0x256274['MKrNd'](_0x1273ac, _0x47df6e)) {
                let _0x27f0e0 = _0x256274['uMyQE'](!_0x2bda89, !!_0xe4765f) ? -_0xe4765f[_0x4f5d72(357)] : -_0x2bda89[_0x4f5d72(357)] + _0xe59db1;
                if (_0x47df6e)
                    _0x27f0e0 -= _0x47df6e[_0x4f5d72(357)];
                return _0x256274['Bywlx'](_0x2bda89, '') && _0xe4765f && !_0x26db4[_0x4f5d72(358)](_0xe4765f) && (_0x27f0e0 += _0xe4765f[_0x4f5d72(357)]), ansi['cursor'][_0x4f5d72(359)](_0x27f0e0);
            }
        }
    }, erase = ansi[_0x5dd0c4(360)] = {
        'screen': code[_0x5dd0c4(361)],
        'up': code['up'],
        'down': code[_0x5dd0c4(353)],
        'line': code[_0x5dd0c4(362)],
        'lineEnd': code[_0x5dd0c4(363)],
        'lineStart': code[_0x5dd0c4(364)],
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
            for (let _0x544579 = 2 * 2052 + -1 * 635 + -3469 * 1; _0x23e7b5[_0x2545c7(365)](_0x544579, _0xb4736a); _0x544579++) {
                _0x44a2ef += _0x23e7b5[_0x2545c7(366)](ansi['erase'][_0x2545c7(362)], _0x23e7b5['wFGOZ'](_0x544579, _0x23e7b5[_0x2545c7(367)](_0xb4736a, 3484 + 586 * 9 + -8757)) ? ansi['cursor']['up'](283 * 2 + 54 * -53 + -2297 * -1) : '');
            }
            if (_0xb4736a)
                _0x44a2ef += ansi[_0x2545c7(340)][_0x2545c7(368)];
            return _0x44a2ef;
        }
    };
ansi['clear'] = (_0x78e314 = '', _0x545ad1 = process[_0x5dd0c4(369)]['columns']) => {
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
        return _0x29ef4e[_0x13b39a(370)](erase[_0x13b39a(362)], cursor['to'](-1 * 1667 + -9756 + 11423 * 1));
    let _0x53c414 = _0x2c15c3 => [...colors[_0x13b39a(371)](_0x2c15c3)][_0x13b39a(357)], _0x1c6141 = _0x78e314[_0x13b39a(372)](/\r?\n/), _0x4875ef = 7294 + 3 * -2516 + 254;
    for (let _0x44d454 of _0x1c6141) {
        _0x4875ef += _0x29ef4e[_0x13b39a(370)](-701 * -4 + 8573 + -36 * 316, Math[_0x13b39a(373)](Math[_0x13b39a(374)](_0x29ef4e['ThnzH'](_0x53c414(_0x44d454), -1 * -5369 + -2550 + 2818 * -1), -199 * 26 + -5111 + 10285) / _0x545ad1));
    }
    return _0x29ef4e[_0x13b39a(370)](_0x29ef4e[_0x13b39a(375)](erase[_0x13b39a(362)], cursor[_0x13b39a(376)]())[_0x13b39a(346)](_0x29ef4e[_0x13b39a(377)](_0x4875ef, -730 + 4607 + -19 * 204)), erase['line']) + cursor['to'](5 * 973 + -6162 + 1297 * 1);
};