'use strict';
const isTerm = process['env']['TERM_PROGRAM'] === 'Apple_Terminal', colors = require('ansi-colors'), utils = require('./utils'), ansi = module['exports'] = exports, ESC = '\x1b[', BEL = '\x07';
let hidden = ![];
const code = ansi['code'] = {
        'bell': BEL,
        'beep': BEL,
        'beginning': ESC + 'G',
        'down': ESC + 'J',
        'esc': ESC,
        'getPosition': ESC + '6n',
        'hide': ESC + '?25l',
        'line': ESC + '2K',
        'lineEnd': ESC + 'K',
        'lineStart': ESC + '1K',
        'restorePosition': ESC + (isTerm ? '8' : 'u'),
        'savePosition': ESC + (isTerm ? '7' : 's'),
        'screen': ESC + '2J',
        'show': ESC + '?25h',
        'up': ESC + '1J'
    }, cursor = ansi['cursor'] = {
        get 'hidden'() {
            return hidden;
        },
        'hide'() {
            return hidden = !![], code['hide'];
        },
        'show'() {
            return hidden = ![], code['show'];
        },
        'forward': (_0xbae7f0 = 0x1) => '' + ESC + _0xbae7f0 + 'C',
        'backward': (_0x3aab99 = 0x1) => '' + ESC + _0x3aab99 + 'D',
        'nextLine': (_0x282631 = 0x1) => (ESC + 'E')['repeat'](_0x282631),
        'prevLine': (_0x1cd4cc = 0x1) => (ESC + 'F')['repeat'](_0x1cd4cc),
        'up': (_0x196c8d = 0x1) => _0x196c8d ? '' + ESC + _0x196c8d + 'A' : '',
        'down': (_0x2d6f8e = 0x1) => _0x2d6f8e ? '' + ESC + _0x2d6f8e + 'B' : '',
        'right': (_0x1db1b7 = 0x1) => _0x1db1b7 ? '' + ESC + _0x1db1b7 + 'C' : '',
        'left': (_0x469cbc = 0x1) => _0x469cbc ? '' + ESC + _0x469cbc + 'D' : '',
        'to'(_0x9891fd, _0x489eec) {
            const _0x21ba45 = {
                'Haogn': function (_0x11e9d4, _0x546918) {
                    return _0x11e9d4 + _0x546918;
                },
                'cnqYu': function (_0x32dc9f, _0x3ba3f9) {
                    return _0x32dc9f + _0x3ba3f9;
                },
                'GxUvE': function (_0x1ac871, _0x5c3aff) {
                    return _0x1ac871 + _0x5c3aff;
                }
            };
            return _0x489eec ? '' + ESC + _0x21ba45['Haogn'](_0x489eec, 0x1) + ';' + _0x21ba45['cnqYu'](_0x9891fd, 0x1) + 'H' : '' + ESC + _0x21ba45['GxUvE'](_0x9891fd, 0x1) + 'G';
        },
        'move'(_0x58af6b = 0x0, _0x497d85 = 0x0) {
            const _0xc3135c = {
                'SKwkE': function (_0x4998f1, _0x278221) {
                    return _0x4998f1 < _0x278221;
                },
                'IELJV': function (_0x37e062, _0x10ce37) {
                    return _0x37e062 > _0x10ce37;
                }
            };
            let _0x50f56c = '';
            return _0x50f56c += _0xc3135c['SKwkE'](_0x58af6b, 0x0) ? cursor['left'](-_0x58af6b) : _0xc3135c['IELJV'](_0x58af6b, 0x0) ? cursor['right'](_0x58af6b) : '', _0x50f56c += _0xc3135c['SKwkE'](_0x497d85, 0x0) ? cursor['up'](-_0x497d85) : _0xc3135c['IELJV'](_0x497d85, 0x0) ? cursor['down'](_0x497d85) : '', _0x50f56c;
        },
        'restore'(_0x438d78 = {}) {
            const _0x5eaeb8 = {
                'PjRZT': function (_0x462bb0, _0x31b9ac) {
                    return _0x462bb0(_0x31b9ac);
                },
                'YPTMm': function (_0x18a755, _0x273ebf) {
                    return _0x18a755(_0x273ebf);
                },
                'nqaRN': function (_0xf123e7, _0x18b966) {
                    return _0xf123e7(_0x18b966);
                },
                'yupAE': function (_0xc8b9c, _0x102eef) {
                    return _0xc8b9c + _0x102eef;
                },
                'XReIG': function (_0x4063c4, _0x473c54) {
                    return _0x4063c4 - _0x473c54;
                },
                'JLGeN': function (_0x1d14e6, _0x80506) {
                    return _0x1d14e6 > _0x80506;
                },
                'vMCKu': function (_0x1e1fb8, _0x258ffa) {
                    return _0x1e1fb8 || _0x258ffa;
                },
                'BGbJQ': function (_0x388fc3, _0x111723) {
                    return _0x388fc3 && _0x111723;
                },
                'bnpLV': function (_0x28b21a, _0x21cd42) {
                    return _0x28b21a + _0x21cd42;
                },
                'oRDeI': function (_0x26680e, _0x2c6b94) {
                    return _0x26680e === _0x2c6b94;
                }
            };
            let {
                after: _0x26a132,
                cursor: _0x1ecdf9,
                initial: _0x46975d,
                input: _0x1899b3,
                prompt: _0x1cf170,
                size: _0x123256,
                value: _0x222e42
            } = _0x438d78;
            _0x46975d = utils['isPrimitive'](_0x46975d) ? _0x5eaeb8['PjRZT'](String, _0x46975d) : '', _0x1899b3 = utils['isPrimitive'](_0x1899b3) ? _0x5eaeb8['YPTMm'](String, _0x1899b3) : '', _0x222e42 = utils['isPrimitive'](_0x222e42) ? _0x5eaeb8['nqaRN'](String, _0x222e42) : '';
            if (_0x123256) {
                let _0x54d9fc = _0x5eaeb8['yupAE'](ansi['cursor']['up'](_0x123256), ansi['cursor']['to'](_0x1cf170['length'])), _0x8189d7 = _0x5eaeb8['XReIG'](_0x1899b3['length'], _0x1ecdf9);
                return _0x5eaeb8['JLGeN'](_0x8189d7, 0x0) && (_0x54d9fc += ansi['cursor']['left'](_0x8189d7)), _0x54d9fc;
            }
            if (_0x5eaeb8['vMCKu'](_0x222e42, _0x26a132)) {
                let _0x335e85 = _0x5eaeb8['BGbJQ'](!_0x1899b3, !!_0x46975d) ? -_0x46975d['length'] : _0x5eaeb8['bnpLV'](-_0x1899b3['length'], _0x1ecdf9);
                if (_0x26a132)
                    _0x335e85 -= _0x26a132['length'];
                return _0x5eaeb8['oRDeI'](_0x1899b3, '') && _0x46975d && !_0x1cf170['includes'](_0x46975d) && (_0x335e85 += _0x46975d['length']), ansi['cursor']['move'](_0x335e85);
            }
        }
    }, erase = ansi['erase'] = {
        'screen': code['screen'],
        'up': code['up'],
        'down': code['down'],
        'line': code['line'],
        'lineEnd': code['lineEnd'],
        'lineStart': code['lineStart'],
        'lines'(_0x5341dc) {
            const _0x72c6e8 = {
                'TsJHU': function (_0xebf8d, _0x35d738) {
                    return _0xebf8d < _0x35d738;
                },
                'cBJbl': function (_0x3031c2, _0x55b97c) {
                    return _0x3031c2 + _0x55b97c;
                },
                'OfrlD': function (_0x3aef67, _0xcaf98c) {
                    return _0x3aef67 - _0xcaf98c;
                }
            };
            let _0x2632a8 = '';
            for (let _0x1e2088 = 0x0; _0x72c6e8['TsJHU'](_0x1e2088, _0x5341dc); _0x1e2088++) {
                _0x2632a8 += _0x72c6e8['cBJbl'](ansi['erase']['line'], _0x72c6e8['TsJHU'](_0x1e2088, _0x72c6e8['OfrlD'](_0x5341dc, 0x1)) ? ansi['cursor']['up'](0x1) : '');
            }
            if (_0x5341dc)
                _0x2632a8 += ansi['code']['beginning'];
            return _0x2632a8;
        }
    };
ansi['clear'] = (_0xc6d02a = '', _0xbd2df = process['stdout']['columns']) => {
    const _0x48f830 = {
        'VgvfM': function (_0x4033ed, _0x2515cb) {
            return _0x4033ed + _0x2515cb;
        },
        'RIYus': function (_0x4d3a8f, _0x496341) {
            return _0x4d3a8f / _0x496341;
        },
        'BrIho': function (_0x4068e0, _0x113f18) {
            return _0x4068e0 - _0x113f18;
        },
        'hfpgw': function (_0x551256, _0x499e74) {
            return _0x551256(_0x499e74);
        },
        'iwvOG': function (_0x1ea6bb, _0x5656cf) {
            return _0x1ea6bb - _0x5656cf;
        }
    };
    if (!_0xbd2df)
        return _0x48f830['VgvfM'](erase['line'], cursor['to'](0x0));
    let _0x57127f = _0x387a54 => [...colors['unstyle'](_0x387a54)]['length'], _0x315888 = _0xc6d02a['split'](/\r?\n/), _0x498b70 = 0x0;
    for (let _0x3b7473 of _0x315888) {
        _0x498b70 += _0x48f830['VgvfM'](0x1, Math['floor'](_0x48f830['RIYus'](Math['max'](_0x48f830['BrIho'](_0x48f830['hfpgw'](_0x57127f, _0x3b7473), 0x1), 0x0), _0xbd2df)));
    }
    return _0x48f830['VgvfM'](_0x48f830['VgvfM'](_0x48f830['VgvfM'](erase['line'], cursor['prevLine']())['repeat'](_0x48f830['iwvOG'](_0x498b70, 0x1)), erase['line']), cursor['to'](0x0));
};
