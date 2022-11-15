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
        'forward': (_0x279f67 = -0x221c + 0x2042 + 0x1db) => '' + ESC + _0x279f67 + 'C',
        'backward': (_0x42e672 = -0x8e * 0x8 + -0x14 * 0x13d + 0x1d35) => '' + ESC + _0x42e672 + 'D',
        'nextLine': (_0x426e0a = 0x1163 * 0x1 + -0x188f * -0x1 + -0x4a9 * 0x9) => (ESC + 'E')['repeat'](_0x426e0a),
        'prevLine': (_0x385565 = 0x1 * -0x229b + -0xd * 0xc + 0x2338) => (ESC + 'F')['repeat'](_0x385565),
        'up': (_0x2634fa = 0x1 * -0xc34 + 0xcb3 * -0x1 + 0x1 * 0x18e8) => _0x2634fa ? '' + ESC + _0x2634fa + 'A' : '',
        'down': (_0x6b71cd = 0x1898 + 0x1b63 + -0x33fa) => _0x6b71cd ? '' + ESC + _0x6b71cd + 'B' : '',
        'right': (_0x59cb26 = 0x1b1c + 0x2288 + -0x3da3) => _0x59cb26 ? '' + ESC + _0x59cb26 + 'C' : '',
        'left': (_0x13c55a = 0x1 * 0x15c1 + -0x1f99 + 0x1 * 0x9d9) => _0x13c55a ? '' + ESC + _0x13c55a + 'D' : '',
        'to'(_0x41410e, _0x38542d) {
            return _0x38542d ? '' + ESC + (_0x38542d + (-0x2 * -0x10cb + -0x24 * -0x3b + -0x29e1)) + ';' + (_0x41410e + (-0x177 + -0x8c * -0x2b + -0x160c)) + 'H' : '' + ESC + (_0x41410e + (0x1343 + -0x25fa * 0x1 + 0x12b8)) + 'G';
        },
        'move'(_0x4738a2 = 0xbbf + 0x1 * 0x5e2 + -0x11a1, _0x4c8e7a = -0x2cf * 0x1 + 0x18 * 0xf2 + -0x13e1) {
            let _0x124b85 = '';
            return _0x124b85 += _0x4738a2 < -0x146 * 0x1 + 0x208 + -0x61 * 0x2 ? cursor['left'](-_0x4738a2) : _0x4738a2 > -0x1f * -0x13b + 0x7 * -0x87 + -0xb7c * 0x3 ? cursor['right'](_0x4738a2) : '', _0x124b85 += _0x4c8e7a < -0x11f * 0x6 + -0x124 + -0x26 * -0x35 ? cursor['up'](-_0x4c8e7a) : _0x4c8e7a > -0xb82 + 0x1f2b + -0x13a9 ? cursor['down'](_0x4c8e7a) : '', _0x124b85;
        },
        'restore'(_0x35564c = {}) {
            let {
                after: _0x1b20d1,
                cursor: _0x326402,
                initial: _0x5b11ea,
                input: _0x38085c,
                prompt: _0x2dc90a,
                size: _0xef5db7,
                value: _0x42f323
            } = _0x35564c;
            _0x5b11ea = utils['isPrimitive'](_0x5b11ea) ? String(_0x5b11ea) : '', _0x38085c = utils['isPrimitive'](_0x38085c) ? String(_0x38085c) : '', _0x42f323 = utils['isPrimitive'](_0x42f323) ? String(_0x42f323) : '';
            if (_0xef5db7) {
                let _0x53d80b = ansi['cursor']['up'](_0xef5db7) + ansi['cursor']['to'](_0x2dc90a['length']), _0x47619e = _0x38085c['length'] - _0x326402;
                return _0x47619e > 0x5ec + 0x1 * -0x1d3f + -0x7 * -0x355 && (_0x53d80b += ansi['cursor']['left'](_0x47619e)), _0x53d80b;
            }
            if (_0x42f323 || _0x1b20d1) {
                let _0x39e52e = !_0x38085c && !!_0x5b11ea ? -_0x5b11ea['length'] : -_0x38085c['length'] + _0x326402;
                if (_0x1b20d1)
                    _0x39e52e -= _0x1b20d1['length'];
                return _0x38085c === '' && _0x5b11ea && !_0x2dc90a['includes'](_0x5b11ea) && (_0x39e52e += _0x5b11ea['length']), ansi['cursor']['move'](_0x39e52e);
            }
        }
    }, erase = ansi['erase'] = {
        'screen': code['screen'],
        'up': code['up'],
        'down': code['down'],
        'line': code['line'],
        'lineEnd': code['lineEnd'],
        'lineStart': code['lineStart'],
        'lines'(_0x897906) {
            let _0x18ecbc = '';
            for (let _0xc1e6b9 = -0x1e13 * -0x1 + -0x13e5 + -0xa2e * 0x1; _0xc1e6b9 < _0x897906; _0xc1e6b9++) {
                _0x18ecbc += ansi['erase']['line'] + (_0xc1e6b9 < _0x897906 - (-0x8bc * -0x2 + -0x11b9 + 0x42) ? ansi['cursor']['up'](0xd * -0x175 + -0x2 * 0x644 + -0x6 * -0x53f) : '');
            }
            if (_0x897906)
                _0x18ecbc += ansi['code']['beginning'];
            return _0x18ecbc;
        }
    };
ansi['clear'] = (_0x351166 = '', _0x2ae96d = process['stdout']['columns']) => {
    if (!_0x2ae96d)
        return erase['line'] + cursor['to'](-0x4e * -0x2c + -0x1284 + 0x51c);
    let _0x2a03ff = _0xa3fb29 => [...colors['unstyle'](_0xa3fb29)]['length'], _0x3df61c = _0x351166['split'](/\r?\n/), _0xeb8e0b = -0xc2d + 0x816 * 0x2 + -0x3ff;
    for (let _0x3fbc5a of _0x3df61c) {
        _0xeb8e0b += 0xac4 * 0x1 + 0x155e + -0x2021 + Math['floor'](Math['max'](_0x2a03ff(_0x3fbc5a) - (0x2 * -0x90d + 0x2 * 0x38f + 0x1d * 0x61), 0x72c + -0x246 * -0x7 + -0x1716) / _0x2ae96d);
    }
    return (erase['line'] + cursor['prevLine']())['repeat'](_0xeb8e0b - (0x536 * -0x3 + 0x883 * 0x2 + -0x1 * 0x163)) + erase['line'] + cursor['to'](0x641 * 0x5 + -0xb28 + -0x141d);
};
