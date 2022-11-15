'use strict';
const isTerm = process['env']['TERM_PROGRAM'] === 'Apple_Terminal';
const colors = require('ansi-colors');
const utils = require('./utils');
const ansi = module['exports'] = exports;
const ESC = '\x1B[';
const BEL = '\x07';
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
};
const cursor = ansi['cursor'] = {
    get 'hidden'() {
        return hidden;
    },
    'hide'() {
        hidden = !![];
        return code['hide'];
    },
    'show'() {
        hidden = ![];
        return code['show'];
    },
    'forward': (_0x3a8477 = 1) => '' + ESC + _0x3a8477 + 'C',
    'backward': (_0x57f2db = 1) => '' + ESC + _0x57f2db + 'D',
    'nextLine': (_0x4a6f9a = 1) => (ESC + 'E')['repeat'](_0x4a6f9a),
    'prevLine': (_0x1c0c15 = 1) => (ESC + 'F')['repeat'](_0x1c0c15),
    'up': (_0x104893 = 1) => _0x104893 ? '' + ESC + _0x104893 + 'A' : '',
    'down': (_0x51035c = 1) => _0x51035c ? '' + ESC + _0x51035c + 'B' : '',
    'right': (_0x288f47 = 1) => _0x288f47 ? '' + ESC + _0x288f47 + 'C' : '',
    'left': (_0x227121 = 1) => _0x227121 ? '' + ESC + _0x227121 + 'D' : '',
    'to'(_0x1e22a4, _0x25b2e4) {
        return _0x25b2e4 ? '' + ESC + (_0x25b2e4 + 1) + ';' + (_0x1e22a4 + 1) + 'H' : '' + ESC + (_0x1e22a4 + 1) + 'G';
    },
    'move'(_0x2db89a = 0, _0x2d5985 = 0) {
        let _0x1a5277 = '';
        _0x1a5277 += _0x2db89a < 0 ? cursor['left'](-_0x2db89a) : _0x2db89a > 0 ? cursor['right'](_0x2db89a) : '';
        _0x1a5277 += _0x2d5985 < 0 ? cursor['up'](-_0x2d5985) : _0x2d5985 > 0 ? cursor['down'](_0x2d5985) : '';
        return _0x1a5277;
    },
    'restore'(_0xfd83cd = {}) {
        let {after, cursor, initial, input, prompt, size, value} = _0xfd83cd;
        initial = utils['isPrimitive'](initial) ? String(initial) : '';
        input = utils['isPrimitive'](input) ? String(input) : '';
        value = utils['isPrimitive'](value) ? String(value) : '';
        if (size) {
            if ('aFjMF' !== 'skNzb') {
                let _0x1cb95b = ansi['cursor']['up'](size) + ansi['cursor']['to'](prompt['length']);
                let _0xb87b4f = input['length'] - cursor;
                if (_0xb87b4f > 0) {
                    if ('LXvMR' !== 'LXvMR') {
                        let _0x140cb7 = !input && !!initial ? -initial['length'] : -input['length'] + cursor;
                        if (after)
                            _0x140cb7 -= after['length'];
                        if (input === '' && initial && !prompt['includes'](initial)) {
                            _0x140cb7 += initial['length'];
                        }
                        return ansi['cursor']['move'](_0x140cb7);
                    } else {
                        _0x1cb95b += ansi['cursor']['left'](_0xb87b4f);
                    }
                }
                return _0x1cb95b;
            } else {
                str += ansi['erase']['line'] + (i < n - 1 ? ansi['cursor']['up'](1) : '');
            }
        }
        if (value || after) {
            if ('fLHvh' === 'yLYiI') {
                if (!columns)
                    return erase['line'] + cursor['to'](0);
                let _0x2e982c = _0x2e4727 => [...colors['unstyle'](_0x2e4727)]['length'];
                let _0x1dbd3b = input['split'](/\r?\n/);
                let _0x3ea277 = 0;
                for (let _0x411efb of _0x1dbd3b) {
                    _0x3ea277 += 1 + Math['floor'](Math['max'](_0x2e982c(_0x411efb) - 1, 0) / columns);
                }
                return _0x1ad5e2['EnrAZ']((erase['line'] + cursor['prevLine']())['repeat'](_0x3ea277 - 1), erase['line']) + cursor['to'](0);
            } else {
                let _0xfcf73 = !input && !!initial ? -initial['length'] : -input['length'] + cursor;
                if (after)
                    _0xfcf73 -= after['length'];
                if (input === '' && initial && !prompt['includes'](initial)) {
                    _0xfcf73 += initial['length'];
                }
                return ansi['cursor']['move'](_0xfcf73);
            }
        }
    }
};
const erase = ansi['erase'] = {
    'screen': code['screen'],
    'up': code['up'],
    'down': code['down'],
    'line': code['line'],
    'lineEnd': code['lineEnd'],
    'lineStart': code['lineStart'],
    'lines'(_0x3b5e71) {
        let _0x6fb72a = '';
        for (let _0x2e5caa = 0; _0x2e5caa < _0x3b5e71; _0x2e5caa++) {
            _0x6fb72a += ansi['erase']['line'] + (_0x2e5caa < _0x3b5e71 - 1 ? ansi['cursor']['up'](1) : '');
        }
        if (_0x3b5e71)
            _0x6fb72a += ansi['code']['beginning'];
        return _0x6fb72a;
    }
};
ansi['clear'] = (_0x30e35c = '', _0x553513 = process['stdout']['columns']) => {
    if (!_0x553513)
        return erase['line'] + cursor['to'](0);
    let _0x236c85 = _0x3f4cfb => [...colors['unstyle'](_0x3f4cfb)]['length'];
    let _0x5eda6a = _0x30e35c['split'](/\r?\n/);
    let _0x5434d6 = 0;
    for (let _0x5ef741 of _0x5eda6a) {
        _0x5434d6 += 1 + Math['floor'](Math['max'](_0x236c85(_0x5ef741) - 1, 0) / _0x553513);
    }
    return _0x3b9c6f['Hkxxs'](erase['line'], cursor['prevLine']())['repeat'](_0x5434d6 - 1) + erase['line'] + cursor['to'](0);
};