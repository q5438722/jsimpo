function _0x24f2(_0xdaf9ba, _0xd22a3b) {
    return _0x24f2 = function (_0x52638e, _0x24f224) {
        _0x52638e = _0x52638e - 231;
        let _0x3b6e78 = _0x5263[_0x52638e];
        return _0x3b6e78;
    }, _0x24f2(_0xdaf9ba, _0xd22a3b);
}
const isTerm = process[_0x4c849f(243)]['TERM_PROGRAM'] === _0x4c849f(244), colors = require(_0x4c849f(245)), utils = require(_0x4c849f(246)), ansi = module[_0x4c849f(247)] = exports, ESC = '\x1B[', BEL = '\x07';
let hidden = ![];
const code = ansi[_0x4c849f(248)] = {
        'bell': BEL,
        'beep': BEL,
        'beginning': ESC + 'G',
        'down': ESC + 'J',
        'esc': ESC,
        'getPosition': ESC + '6n',
        'hide': ESC + _0x4c849f(249),
        'line': ESC + '2K',
        'lineEnd': ESC + 'K',
        'lineStart': ESC + '1K',
        'restorePosition': ESC + (isTerm ? '8' : 'u'),
        'savePosition': ESC + (isTerm ? '7' : 's'),
        'screen': ESC + '2J',
        'show': ESC + _0x4c849f(250),
        'up': ESC + '1J'
    }, cursor = ansi[_0x4c849f(251)] = {
        get 'hidden'() {
            return hidden;
        },
        'hide'() {
            const _0x29d0c4 = _0x4c849f;
            return hidden = !![], code[_0x29d0c4(252)];
        },
        'show'() {
            return hidden = ![], code['show'];
        },
        'forward': (_0x107997 = 1) => '' + ESC + _0x107997 + 'C',
        'backward': (_0x4af6b8 = 1) => '' + ESC + _0x4af6b8 + 'D',
        'nextLine': (_0x144300 = 1) => (ESC + 'E')[_0x4c849f(253)](_0x144300),
        'prevLine': (_0x3fb4dd = 1) => (ESC + 'F')[_0x4c849f(253)](_0x3fb4dd),
        'up': (_0x49c533 = 1) => _0x49c533 ? '' + ESC + _0x49c533 + 'A' : '',
        'down': (_0x405a46 = 1) => _0x405a46 ? '' + ESC + _0x405a46 + 'B' : '',
        'right': (_0x2eaa1d = 1) => _0x2eaa1d ? '' + ESC + _0x2eaa1d + 'C' : '',
        'left': (_0x4ac857 = 1) => _0x4ac857 ? '' + ESC + _0x4ac857 + 'D' : '',
        'to'(_0x467f42, _0x86e002) {
            return _0x86e002 ? '' + ESC + (_0x86e002 + 1) + ';' + (_0x467f42 + 1) + 'H' : '' + ESC + (_0x467f42 + 1) + 'G';
        },
        'move'(_0x3fff7f = 0, _0x4ab232 = 0) {
            const _0x347734 = _0x4c849f;
            let _0x552276 = '';
            return _0x552276 += _0x3fff7f < 0 ? cursor[_0x347734(254)](-_0x3fff7f) : _0x3fff7f > 0 ? cursor[_0x347734(255)](_0x3fff7f) : '', _0x552276 += _0x4ab232 < 0 ? cursor['up'](-_0x4ab232) : _0x4ab232 > 0 ? cursor['down'](_0x4ab232) : '', _0x552276;
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
            _0x19aa9e = utils[_0x546265(256)](_0x19aa9e) ? String(_0x19aa9e) : '', _0xfe8f26 = utils[_0x546265(256)](_0xfe8f26) ? String(_0xfe8f26) : '', _0x2476c6 = utils[_0x546265(256)](_0x2476c6) ? String(_0x2476c6) : '';
            if (_0x491a5b) {
                let _0x14d838 = ansi['cursor']['up'](_0x491a5b) + ansi[_0x546265(251)]['to'](_0x3ff0f2[_0x546265(257)]), _0x3d4ab3 = _0xfe8f26[_0x546265(257)] - _0x22c43d;
                return _0x3d4ab3 > 0 && (_0x14d838 += ansi[_0x546265(251)][_0x546265(254)](_0x3d4ab3)), _0x14d838;
            }
            if (_0x2476c6 || _0xe06eac) {
                let _0x486aa1 = !_0xfe8f26 && !!_0x19aa9e ? -_0x19aa9e[_0x546265(257)] : -_0xfe8f26['length'] + _0x22c43d;
                if (_0xe06eac)
                    _0x486aa1 -= _0xe06eac[_0x546265(257)];
                return _0xfe8f26 === '' && _0x19aa9e && !_0x3ff0f2[_0x546265(258)](_0x19aa9e) && (_0x486aa1 += _0x19aa9e['length']), ansi['cursor'][_0x546265(259)](_0x486aa1);
            }
        }
    }, erase = ansi['erase'] = {
        'screen': code[_0x4c849f(260)],
        'up': code['up'],
        'down': code[_0x4c849f(261)],
        'line': code[_0x4c849f(262)],
        'lineEnd': code[_0x4c849f(263)],
        'lineStart': code['lineStart'],
        'lines'(_0x5987c8) {
            const _0x5bd77c = _0x4c849f;
            let _0x2cf3f5 = '';
            for (let _0x37aaa4 = 0; _0x37aaa4 < _0x5987c8; _0x37aaa4++) {
                _0x2cf3f5 += ansi[_0x5bd77c(264)]['line'] + (_0x37aaa4 < _0x5987c8 - 1 ? ansi[_0x5bd77c(251)]['up'](1) : '');
            }
            if (_0x5987c8)
                _0x2cf3f5 += ansi[_0x5bd77c(248)][_0x5bd77c(265)];
            return _0x2cf3f5;
        }
    };
ansi['clear'] = (_0xdabcd5 = '', _0x573dbc = process[_0x4c849f(266)][_0x4c849f(267)]) => {
    const _0x37759f = _0x4c849f;
    if (!_0x573dbc)
        return erase[_0x37759f(262)] + cursor['to'](0);
    let _0x446c60 = _0x4afd29 => [...colors[_0x37759f(268)](_0x4afd29)][_0x37759f(257)], _0x3913ef = _0xdabcd5[_0x37759f(269)](/\r?\n/), _0x25844c = 0;
    for (let _0x2dce9c of _0x3913ef) {
        _0x25844c += 1 + Math[_0x37759f(270)](Math[_0x37759f(271)](_0x446c60(_0x2dce9c) - 1, 0) / _0x573dbc);
    }
    return (erase['line'] + cursor['prevLine']())['repeat'](_0x25844c - 1) + erase[_0x37759f(262)] + cursor['to'](0);
};