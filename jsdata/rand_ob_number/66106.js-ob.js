const {hasOwnProperty} = Object['prototype'], eol = typeof process !== 'undefined' && process['platform'] === 'win32' ? '\x0d\x0a' : '\x0a', encode = (_0x29f5ca, _0x7d33a0) => {
        const _0x6e33be = [];
        let _0x48b875 = '';
        typeof _0x7d33a0 === 'string' ? _0x7d33a0 = {
            'section': _0x7d33a0,
            'whitespace': ![]
        } : (_0x7d33a0 = _0x7d33a0 || Object['create'](null), _0x7d33a0['whitespace'] = _0x7d33a0['whitespace'] === !![]);
        const _0x158590 = _0x7d33a0['whitespace'] ? '\x20=\x20' : '=';
        for (const _0x49dfec of Object['keys'](_0x29f5ca)) {
            const _0x5182d9 = _0x29f5ca[_0x49dfec];
            if (_0x5182d9 && Array['isArray'](_0x5182d9)) {
                for (const _0x2ed0f2 of _0x5182d9)
                    _0x48b875 += safe(_0x49dfec + '[]') + _0x158590 + safe(_0x2ed0f2) + '\x0a';
            } else {
                if (_0x5182d9 && typeof _0x5182d9 === 'object')
                    _0x6e33be['push'](_0x49dfec);
                else
                    _0x48b875 += safe(_0x49dfec) + _0x158590 + safe(_0x5182d9) + eol;
            }
        }
        if (_0x7d33a0['section'] && _0x48b875['length'])
            _0x48b875 = '[' + safe(_0x7d33a0['section']) + ']' + eol + _0x48b875;
        for (const _0x420b3a of _0x6e33be) {
            const _0x58c8a9 = dotSplit(_0x420b3a)['join']('\x5c.'), _0x1b5d4b = (_0x7d33a0['section'] ? _0x7d33a0['section'] + '.' : '') + _0x58c8a9, {whitespace: _0x367318} = _0x7d33a0, _0x27d64b = encode(_0x29f5ca[_0x420b3a], {
                    'section': _0x1b5d4b,
                    'whitespace': _0x367318
                });
            if (_0x48b875['length'] && _0x27d64b['length'])
                _0x48b875 += eol;
            _0x48b875 += _0x27d64b;
        }
        return _0x48b875;
    }, dotSplit = _0x3a5970 => _0x3a5970['replace'](/\1/g, '\x02LITERAL\x5c1LITERAL\x02')['replace'](/\\\./g, '\x01')['split'](/\./)['map'](_0xfa0708 => _0xfa0708['replace'](/\1/g, '\x5c.')['replace'](/\2LITERAL\\1LITERAL\2/g, '\x01')), decode = _0x2fb121 => {
        const _0x269e3a = Object['create'](null);
        let _0x519f8a = _0x269e3a, _0x259e0f = null;
        const _0x183828 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i, _0x3e92f0 = _0x2fb121['split'](/[\r\n]+/g);
        for (const _0x4714b0 of _0x3e92f0) {
            if (!_0x4714b0 || _0x4714b0['match'](/^\s*[;#]/))
                continue;
            const _0x352f46 = _0x4714b0['match'](_0x183828);
            if (!_0x352f46)
                continue;
            if (_0x352f46[-0x19ee + -0x26b9 + 0x102a * 0x4] !== undefined) {
                _0x259e0f = unsafe(_0x352f46[0x1e0c + -0x2084 + 0x279]);
                if (_0x259e0f === '__proto__') {
                    _0x519f8a = Object['create'](null);
                    continue;
                }
                _0x519f8a = _0x269e3a[_0x259e0f] = _0x269e3a[_0x259e0f] || Object['create'](null);
                continue;
            }
            const _0x2ab395 = unsafe(_0x352f46[0x1a0a + 0x543 * -0x2 + -0x2 * 0x7c1]), _0x49e6c3 = _0x2ab395['length'] > -0xb * -0xd0 + -0x46 * 0xa + 0x7a * -0xd && _0x2ab395['slice'](-(0x7ff + 0xdfd * -0x1 + -0x4 * -0x180)) === '[]', _0x4f39e5 = _0x49e6c3 ? _0x2ab395['slice'](0xb * 0x335 + -0x378 + -0x1fcf, -(0x66e + -0x8b5 * -0x4 + -0x2940)) : _0x2ab395;
            if (_0x4f39e5 === '__proto__')
                continue;
            const _0xd2b071 = _0x352f46[0x1 * 0x21d5 + -0x1a6a + -0x4f * 0x18] ? unsafe(_0x352f46[-0x1d * 0xcd + -0x2597 + 0x3cd4]) : !![], _0x516d31 = _0xd2b071 === 'true' || _0xd2b071 === 'false' || _0xd2b071 === 'null' ? JSON['parse'](_0xd2b071) : _0xd2b071;
            if (_0x49e6c3) {
                if (!hasOwnProperty['call'](_0x519f8a, _0x4f39e5))
                    _0x519f8a[_0x4f39e5] = [];
                else {
                    if (!Array['isArray'](_0x519f8a[_0x4f39e5]))
                        _0x519f8a[_0x4f39e5] = [_0x519f8a[_0x4f39e5]];
                }
            }
            if (Array['isArray'](_0x519f8a[_0x4f39e5]))
                _0x519f8a[_0x4f39e5]['push'](_0x516d31);
            else
                _0x519f8a[_0x4f39e5] = _0x516d31;
        }
        const _0x452aa0 = [];
        for (const _0x546104 of Object['keys'](_0x269e3a)) {
            if (!hasOwnProperty['call'](_0x269e3a, _0x546104) || typeof _0x269e3a[_0x546104] !== 'object' || Array['isArray'](_0x269e3a[_0x546104]))
                continue;
            const _0x10f5a3 = dotSplit(_0x546104);
            let _0x11c483 = _0x269e3a;
            const _0x13b0f = _0x10f5a3['pop'](), _0x25e982 = _0x13b0f['replace'](/\\\./g, '.');
            for (const _0x1fa144 of _0x10f5a3) {
                if (_0x1fa144 === '__proto__')
                    continue;
                if (!hasOwnProperty['call'](_0x11c483, _0x1fa144) || typeof _0x11c483[_0x1fa144] !== 'object')
                    _0x11c483[_0x1fa144] = Object['create'](null);
                _0x11c483 = _0x11c483[_0x1fa144];
            }
            if (_0x11c483 === _0x269e3a && _0x25e982 === _0x13b0f)
                continue;
            _0x11c483[_0x25e982] = _0x269e3a[_0x546104], _0x452aa0['push'](_0x546104);
        }
        for (const _0x3cc798 of _0x452aa0)
            delete _0x269e3a[_0x3cc798];
        return _0x269e3a;
    }, isQuoted = _0x268711 => _0x268711['charAt'](-0x26e8 + 0x245e + 0x82 * 0x5) === '\x22' && _0x268711['slice'](-(0x35 * 0x21 + -0xa39 * 0x1 + -0xb * -0x4f)) === '\x22' || _0x268711['charAt'](0x21b9 + 0xaab * -0x1 + -0xe3 * 0x1a) === '\x27' && _0x268711['slice'](-(-0x546 + -0x2b6 * -0x5 + -0x847)) === '\x27', safe = _0x501e5d => typeof _0x501e5d !== 'string' || _0x501e5d['match'](/[=\r\n]/) || _0x501e5d['match'](/^\[/) || _0x501e5d['length'] > 0x184c * -0x1 + -0x18d3 * 0x1 + -0x30 * -0x106 && isQuoted(_0x501e5d) || _0x501e5d !== _0x501e5d['trim']() ? JSON['stringify'](_0x501e5d) : _0x501e5d['replace'](/;/g, '\x5c;')['replace'](/#/g, '\x5c#'), unsafe = (_0x47ed9a, _0x32532f) => {
        _0x47ed9a = (_0x47ed9a || '')['trim']();
        if (isQuoted(_0x47ed9a)) {
            if (_0x47ed9a['charAt'](-0x126e * 0x1 + -0x70a + 0x1978) === '\x27')
                _0x47ed9a = _0x47ed9a['substr'](-0x1a1 + 0x3b9 * 0x6 + -0x109 * 0x14, _0x47ed9a['length'] - (0x35 * -0xad + -0x1cf1 + -0x1 * -0x40c4));
            try {
                _0x47ed9a = JSON['parse'](_0x47ed9a);
            } catch (_0x47d213) {
            }
        } else {
            let _0xc7002c = ![], _0x3c012b = '';
            for (let _0x5023d1 = 0x1 * 0x673 + -0x136 + -0x53d, _0x368cbb = _0x47ed9a['length']; _0x5023d1 < _0x368cbb; _0x5023d1++) {
                const _0x18ff4a = _0x47ed9a['charAt'](_0x5023d1);
                if (_0xc7002c) {
                    if ('\x5c;#'['indexOf'](_0x18ff4a) !== -(0x21e2 * -0x1 + 0x9 * -0x14d + -0x1 * -0x2d98))
                        _0x3c012b += _0x18ff4a;
                    else
                        _0x3c012b += '\x5c' + _0x18ff4a;
                    _0xc7002c = ![];
                } else {
                    if (';#'['indexOf'](_0x18ff4a) !== -(0x1ad5 + -0x1c19 * 0x1 + -0x145 * -0x1))
                        break;
                    else {
                        if (_0x18ff4a === '\x5c')
                            _0xc7002c = !![];
                        else
                            _0x3c012b += _0x18ff4a;
                    }
                }
            }
            if (_0xc7002c)
                _0x3c012b += '\x5c';
            return _0x3c012b['trim']();
        }
        return _0x47ed9a;
    };
module['exports'] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};
