const {hasOwnProperty} = Object[_0x5e8628(212)], eol = typeof process !== _0x5e8628(213) && process[_0x5e8628(214)] === 'win32' ? '\r\n' : '\n', encode = (_0x5ab199, _0x27cd6c) => {
        const _0x5d740d = _0x5e8628, _0x23b726 = [];
        let _0xbaace6 = '';
        typeof _0x27cd6c === 'string' ? _0x27cd6c = {
            'section': _0x27cd6c,
            'whitespace': ![]
        } : (_0x27cd6c = _0x27cd6c || Object['create'](null), _0x27cd6c[_0x5d740d(215)] = _0x27cd6c[_0x5d740d(215)] === !![]);
        const _0x27424e = _0x27cd6c[_0x5d740d(215)] ? _0x5d740d(216) : '=';
        for (const _0x5dfed9 of Object['keys'](_0x5ab199)) {
            const _0x1bffe8 = _0x5ab199[_0x5dfed9];
            if (_0x1bffe8 && Array[_0x5d740d(217)](_0x1bffe8)) {
                for (const _0x361a71 of _0x1bffe8)
                    _0xbaace6 += safe(_0x5dfed9 + '[]') + _0x27424e + safe(_0x361a71) + '\n';
            } else {
                if (_0x1bffe8 && typeof _0x1bffe8 === _0x5d740d(218))
                    _0x23b726['push'](_0x5dfed9);
                else
                    _0xbaace6 += safe(_0x5dfed9) + _0x27424e + safe(_0x1bffe8) + eol;
            }
        }
        if (_0x27cd6c[_0x5d740d(219)] && _0xbaace6['length'])
            _0xbaace6 = '[' + safe(_0x27cd6c[_0x5d740d(219)]) + ']' + eol + _0xbaace6;
        for (const _0x387cae of _0x23b726) {
            const _0x36d7b8 = dotSplit(_0x387cae)['join']('\\.'), _0x28e167 = (_0x27cd6c[_0x5d740d(219)] ? _0x27cd6c[_0x5d740d(219)] + '.' : '') + _0x36d7b8, {whitespace: _0x4618d2} = _0x27cd6c, _0x560b05 = encode(_0x5ab199[_0x387cae], {
                    'section': _0x28e167,
                    'whitespace': _0x4618d2
                });
            if (_0xbaace6[_0x5d740d(220)] && _0x560b05['length'])
                _0xbaace6 += eol;
            _0xbaace6 += _0x560b05;
        }
        return _0xbaace6;
    }, dotSplit = _0x336667 => _0x336667[_0x5e8628(221)](/\1/g, _0x5e8628(222))[_0x5e8628(221)](/\\\./g, '\x01')[_0x5e8628(223)](/\./)[_0x5e8628(224)](_0x584318 => _0x584318[_0x5e8628(221)](/\1/g, '\\.')[_0x5e8628(221)](/\2LITERAL\\1LITERAL\2/g, '\x01')), decode = _0x3db129 => {
        const _0x5cacba = _0x5e8628, _0x173938 = Object[_0x5cacba(225)](null);
        let _0x110d92 = _0x173938, _0x4fcd0f = null;
        const _0x401337 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i, _0x20db85 = _0x3db129['split'](/[\r\n]+/g);
        for (const _0x11271f of _0x20db85) {
            if (!_0x11271f || _0x11271f[_0x5cacba(226)](/^\s*[;#]/))
                continue;
            const _0x118813 = _0x11271f[_0x5cacba(226)](_0x401337);
            if (!_0x118813)
                continue;
            if (_0x118813[1] !== undefined) {
                _0x4fcd0f = unsafe(_0x118813[1]);
                if (_0x4fcd0f === _0x5cacba(227)) {
                    _0x110d92 = Object[_0x5cacba(225)](null);
                    continue;
                }
                _0x110d92 = _0x173938[_0x4fcd0f] = _0x173938[_0x4fcd0f] || Object[_0x5cacba(225)](null);
                continue;
            }
            const _0x3c5ec7 = unsafe(_0x118813[2]), _0x24ce0f = _0x3c5ec7[_0x5cacba(220)] > 2 && _0x3c5ec7[_0x5cacba(228)](-2) === '[]', _0x1ec056 = _0x24ce0f ? _0x3c5ec7[_0x5cacba(228)](0, -2) : _0x3c5ec7;
            if (_0x1ec056 === _0x5cacba(227))
                continue;
            const _0x945f19 = _0x118813[3] ? unsafe(_0x118813[4]) : !![], _0x1d2f67 = _0x945f19 === _0x5cacba(229) || _0x945f19 === 'false' || _0x945f19 === _0x5cacba(230) ? JSON[_0x5cacba(231)](_0x945f19) : _0x945f19;
            if (_0x24ce0f) {
                if (!hasOwnProperty[_0x5cacba(232)](_0x110d92, _0x1ec056))
                    _0x110d92[_0x1ec056] = [];
                else {
                    if (!Array[_0x5cacba(217)](_0x110d92[_0x1ec056]))
                        _0x110d92[_0x1ec056] = [_0x110d92[_0x1ec056]];
                }
            }
            if (Array[_0x5cacba(217)](_0x110d92[_0x1ec056]))
                _0x110d92[_0x1ec056]['push'](_0x1d2f67);
            else
                _0x110d92[_0x1ec056] = _0x1d2f67;
        }
        const _0x321aee = [];
        for (const _0x407d88 of Object[_0x5cacba(233)](_0x173938)) {
            if (!hasOwnProperty[_0x5cacba(232)](_0x173938, _0x407d88) || typeof _0x173938[_0x407d88] !== _0x5cacba(218) || Array['isArray'](_0x173938[_0x407d88]))
                continue;
            const _0x1621bb = dotSplit(_0x407d88);
            let _0x509803 = _0x173938;
            const _0x5ee2d2 = _0x1621bb[_0x5cacba(234)](), _0x11e248 = _0x5ee2d2[_0x5cacba(221)](/\\\./g, '.');
            for (const _0x301292 of _0x1621bb) {
                if (_0x301292 === _0x5cacba(227))
                    continue;
                if (!hasOwnProperty[_0x5cacba(232)](_0x509803, _0x301292) || typeof _0x509803[_0x301292] !== 'object')
                    _0x509803[_0x301292] = Object['create'](null);
                _0x509803 = _0x509803[_0x301292];
            }
            if (_0x509803 === _0x173938 && _0x11e248 === _0x5ee2d2)
                continue;
            _0x509803[_0x11e248] = _0x173938[_0x407d88], _0x321aee[_0x5cacba(235)](_0x407d88);
        }
        for (const _0x19d015 of _0x321aee)
            delete _0x173938[_0x19d015];
        return _0x173938;
    }, isQuoted = _0xd28be6 => _0xd28be6[_0x5e8628(236)](0) === '"' && _0xd28be6['slice'](-1) === '"' || _0xd28be6[_0x5e8628(236)](0) === '\'' && _0xd28be6['slice'](-1) === '\'', safe = _0x15227c => typeof _0x15227c !== 'string' || _0x15227c[_0x5e8628(226)](/[=\r\n]/) || _0x15227c[_0x5e8628(226)](/^\[/) || _0x15227c[_0x5e8628(220)] > 1 && isQuoted(_0x15227c) || _0x15227c !== _0x15227c[_0x5e8628(237)]() ? JSON[_0x5e8628(238)](_0x15227c) : _0x15227c[_0x5e8628(221)](/;/g, '\\;')[_0x5e8628(221)](/#/g, '\\#'), unsafe = (_0x183c19, _0x5d16a4) => {
        const _0x16be8b = _0x5e8628;
        _0x183c19 = (_0x183c19 || '')[_0x16be8b(237)]();
        if (isQuoted(_0x183c19)) {
            if (_0x183c19[_0x16be8b(236)](0) === '\'')
                _0x183c19 = _0x183c19[_0x16be8b(239)](1, _0x183c19[_0x16be8b(220)] - 2);
            try {
                _0x183c19 = JSON[_0x16be8b(231)](_0x183c19);
            } catch (_0x295869) {
            }
        } else {
            let _0x57dd49 = ![], _0x41f89a = '';
            for (let _0x13c2e0 = 0, _0x263cae = _0x183c19[_0x16be8b(220)]; _0x13c2e0 < _0x263cae; _0x13c2e0++) {
                const _0x147303 = _0x183c19[_0x16be8b(236)](_0x13c2e0);
                if (_0x57dd49) {
                    if (_0x16be8b(240)['indexOf'](_0x147303) !== -1)
                        _0x41f89a += _0x147303;
                    else
                        _0x41f89a += '\\' + _0x147303;
                    _0x57dd49 = ![];
                } else {
                    if (';#'['indexOf'](_0x147303) !== -1)
                        break;
                    else {
                        if (_0x147303 === '\\')
                            _0x57dd49 = !![];
                        else
                            _0x41f89a += _0x147303;
                    }
                }
            }
            if (_0x57dd49)
                _0x41f89a += '\\';
            return _0x41f89a[_0x16be8b(237)]();
        }
        return _0x183c19;
    };
function _0x41de(_0x5da3be, _0x434236) {
    return _0x41de = function (_0x584c08, _0x41de60) {
        _0x584c08 = _0x584c08 - 200;
        let _0x45136c = _0x584c[_0x584c08];
        return _0x45136c;
    }, _0x41de(_0x5da3be, _0x434236);
}
module[_0x5e8628(241)] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};