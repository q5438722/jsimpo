'use strict';
const _0x5263 = [
    'hide',
    'repeat',
    'left',
    'right',
    'isPrimitive',
    'length',
    'includes',
    'move',
    'screen',
    'down',
    'line',
    'lineEnd',
    'erase',
    'beginning',
    'stdout',
    'columns',
    'unstyle',
    'split',
    'floor',
    'max',
    '72459csRJKV',
    '5AyLczg',
    '398223rlRvGH',
    '223GqdPKt',
    '1573Rgqdjo',
    '1mTxGjf',
    '196849fJqwfq',
    '92JzNfcD',
    '3748BxbMXp',
    '40ZUsfTX',
    '8143DEttxB',
    '1702500msshdh',
    'env',
    'Apple_Terminal',
    'ansi-colors',
    './utils',
    'exports',
    'code',
    '?25l',
    '?25h',
    'cursor'
];
const _0x4c849f = _0x24f2;
(function (_0x200cb1, _0x4aac90) {
    const _0x448799 = _0x24f2;
    while (!![]) {
        try {
            const _0x328ea6 = parseInt(_0x448799(0xe7)) * parseInt(_0x448799(0xe8)) + parseInt(_0x448799(0xe9)) + parseInt(_0x448799(0xea)) * parseInt(_0x448799(0xeb)) + parseInt(_0x448799(0xec)) * parseInt(_0x448799(0xed)) + -parseInt(_0x448799(0xee)) * -parseInt(_0x448799(0xef)) + -parseInt(_0x448799(0xf0)) * -parseInt(_0x448799(0xf1)) + -parseInt(_0x448799(0xf2));
            if (_0x328ea6 === _0x4aac90)
                break;
            else
                _0x200cb1['push'](_0x200cb1['shift']());
        } catch (_0x2e3430) {
            _0x200cb1['push'](_0x200cb1['shift']());
        }
    }
}(_0x5263, 0x436d6));
function _0x24f2(_0xdaf9ba, _0xd22a3b) {
    return _0x24f2 = function (_0x52638e, _0x24f224) {
        _0x52638e = _0x52638e - 0xe7;
        let _0x3b6e78 = _0x5263[_0x52638e];
        return _0x3b6e78;
    }, _0x24f2(_0xdaf9ba, _0xd22a3b);
}
const isTerm = process[_0x4c849f(0xf3)]['TERM_PROGRAM'] === _0x4c849f(0xf4), colors = require(_0x4c849f(0xf5)), utils = require(_0x4c849f(0xf6)), ansi = module[_0x4c849f(0xf7)] = exports, ESC = '\x1b[', BEL = '\x07';
let hidden = ![];
const code = ansi[_0x4c849f(0xf8)] = {
        'bell': BEL,
        'beep': BEL,
        'beginning': ESC + 'G',
        'down': ESC + 'J',
        'esc': ESC,
        'getPosition': ESC + '6n',
        'hide': ESC + _0x4c849f(0xf9),
        'line': ESC + '2K',
        'lineEnd': ESC + 'K',
        'lineStart': ESC + '1K',
        'restorePosition': ESC + (isTerm ? '8' : 'u'),
        'savePosition': ESC + (isTerm ? '7' : 's'),
        'screen': ESC + '2J',
        'show': ESC + _0x4c849f(0xfa),
        'up': ESC + '1J'
    }, cursor = ansi[_0x4c849f(0xfb)] = {
        get 'hidden'() {
            return hidden;
        },
        'hide'() {
            const _0x29d0c4 = _0x4c849f;
            return hidden = !![], code[_0x29d0c4(0xfc)];
        },
        'show'() {
            return hidden = ![], code['show'];
        },
        'forward': (_0x107997 = 0x1) => '' + ESC + _0x107997 + 'C',
        'backward': (_0x4af6b8 = 0x1) => '' + ESC + _0x4af6b8 + 'D',
        'nextLine': (_0x144300 = 0x1) => (ESC + 'E')[_0x4c849f(0xfd)](_0x144300),
        'prevLine': (_0x3fb4dd = 0x1) => (ESC + 'F')[_0x4c849f(0xfd)](_0x3fb4dd),
        'up': (_0x49c533 = 0x1) => _0x49c533 ? '' + ESC + _0x49c533 + 'A' : '',
        'down': (_0x405a46 = 0x1) => _0x405a46 ? '' + ESC + _0x405a46 + 'B' : '',
        'right': (_0x2eaa1d = 0x1) => _0x2eaa1d ? '' + ESC + _0x2eaa1d + 'C' : '',
        'left': (_0x4ac857 = 0x1) => _0x4ac857 ? '' + ESC + _0x4ac857 + 'D' : '',
        'to'(_0x467f42, _0x86e002) {
            return _0x86e002 ? '' + ESC + (_0x86e002 + 0x1) + ';' + (_0x467f42 + 0x1) + 'H' : '' + ESC + (_0x467f42 + 0x1) + 'G';
        },
        'move'(_0x3fff7f = 0x0, _0x4ab232 = 0x0) {
            const _0x347734 = _0x4c849f;
            let _0x552276 = '';
            return _0x552276 += _0x3fff7f < 0x0 ? cursor[_0x347734(0xfe)](-_0x3fff7f) : _0x3fff7f > 0x0 ? cursor[_0x347734(0xff)](_0x3fff7f) : '', _0x552276 += _0x4ab232 < 0x0 ? cursor['up'](-_0x4ab232) : _0x4ab232 > 0x0 ? cursor['down'](_0x4ab232) : '', _0x552276;
        },
        'restore'(_0x26d6ad = {}) {
            const _0x546265 = _0x4c849f;
            let {
                after: _0xe06eac,
                cursor: _0x22c43d,
                initial: _0x19aa9e,
                input: _0xfe8f26,
                prompt: _0x3ff0f2,
                size: _0x491a5b,
                value: _0x2476c6
            } = _0x26d6ad;
            _0x19aa9e = utils[_0x546265(0x100)](_0x19aa9e) ? String(_0x19aa9e) : '', _0xfe8f26 = utils[_0x546265(0x100)](_0xfe8f26) ? String(_0xfe8f26) : '', _0x2476c6 = utils[_0x546265(0x100)](_0x2476c6) ? String(_0x2476c6) : '';
            if (_0x491a5b) {
                let _0x14d838 = ansi['cursor']['up'](_0x491a5b) + ansi[_0x546265(0xfb)]['to'](_0x3ff0f2[_0x546265(0x101)]), _0x3d4ab3 = _0xfe8f26[_0x546265(0x101)] - _0x22c43d;
                return _0x3d4ab3 > 0x0 && (_0x14d838 += ansi[_0x546265(0xfb)][_0x546265(0xfe)](_0x3d4ab3)), _0x14d838;
            }
            if (_0x2476c6 || _0xe06eac) {
                let _0x486aa1 = !_0xfe8f26 && !!_0x19aa9e ? -_0x19aa9e[_0x546265(0x101)] : -_0xfe8f26['length'] + _0x22c43d;
                if (_0xe06eac)
                    _0x486aa1 -= _0xe06eac[_0x546265(0x101)];
                return _0xfe8f26 === '' && _0x19aa9e && !_0x3ff0f2[_0x546265(0x102)](_0x19aa9e) && (_0x486aa1 += _0x19aa9e['length']), ansi['cursor'][_0x546265(0x103)](_0x486aa1);
            }
        }
    }, erase = ansi['erase'] = {
        'screen': code[_0x4c849f(0x104)],
        'up': code['up'],
        'down': code[_0x4c849f(0x105)],
        'line': code[_0x4c849f(0x106)],
        'lineEnd': code[_0x4c849f(0x107)],
        'lineStart': code['lineStart'],
        'lines'(_0x5987c8) {
            const _0x5bd77c = _0x4c849f;
            let _0x2cf3f5 = '';
            for (let _0x37aaa4 = 0x0; _0x37aaa4 < _0x5987c8; _0x37aaa4++) {
                _0x2cf3f5 += ansi[_0x5bd77c(0x108)]['line'] + (_0x37aaa4 < _0x5987c8 - 0x1 ? ansi[_0x5bd77c(0xfb)]['up'](0x1) : '');
            }
            if (_0x5987c8)
                _0x2cf3f5 += ansi[_0x5bd77c(0xf8)][_0x5bd77c(0x109)];
            return _0x2cf3f5;
        }
    };
ansi['clear'] = (_0xdabcd5 = '', _0x573dbc = process[_0x4c849f(0x10a)][_0x4c849f(0x10b)]) => {
    const _0x37759f = _0x4c849f;
    if (!_0x573dbc)
        return erase[_0x37759f(0x106)] + cursor['to'](0x0);
    let _0x446c60 = _0x4afd29 => [...colors[_0x37759f(0x10c)](_0x4afd29)][_0x37759f(0x101)], _0x3913ef = _0xdabcd5[_0x37759f(0x10d)](/\r?\n/), _0x25844c = 0x0;
    for (let _0x2dce9c of _0x3913ef) {
        _0x25844c += 0x1 + Math[_0x37759f(0x10e)](Math[_0x37759f(0x10f)](_0x446c60(_0x2dce9c) - 0x1, 0x0) / _0x573dbc);
    }
    return (erase['line'] + cursor['prevLine']())['repeat'](_0x25844c - 0x1) + erase[_0x37759f(0x106)] + cursor['to'](0x0);
};
