const _0x584c = [
    '625340jeAWri',
    '268754prQieW',
    '4RWvCVC',
    '713159yrbyvl',
    '4oczIMw',
    'prototype',
    'undefined',
    'platform',
    'whitespace',
    '\x20=\x20',
    'isArray',
    'object',
    'section',
    'length',
    'replace',
    '\x02LITERAL\x5c1LITERAL\x02',
    'split',
    'map',
    'create',
    'match',
    '__proto__',
    'slice',
    'true',
    'null',
    'parse',
    'call',
    'keys',
    'pop',
    'push',
    'charAt',
    'trim',
    'stringify',
    'substr',
    '\x5c;#',
    'exports',
    '1oBkZTE',
    '1280365rjWVux',
    '833702ivWRKZ',
    '47ncPMUq',
    '15859lfyadd',
    '1KHrJbI',
    '1063564ILZUWb'
];
const _0x5e8628 = _0x41de;
(function (_0x167ccc, _0x4bb2a5) {
    const _0xf649ba = _0x41de;
    while (!![]) {
        try {
            const _0xc3e4ff = -parseInt(_0xf649ba(0xc8)) * parseInt(_0xf649ba(0xc9)) + -parseInt(_0xf649ba(0xca)) + parseInt(_0xf649ba(0xcb)) * parseInt(_0xf649ba(0xcc)) + -parseInt(_0xf649ba(0xcd)) * parseInt(_0xf649ba(0xce)) + -parseInt(_0xf649ba(0xcf)) + parseInt(_0xf649ba(0xd0)) * parseInt(_0xf649ba(0xd1)) + -parseInt(_0xf649ba(0xd2)) * -parseInt(_0xf649ba(0xd3));
            if (_0xc3e4ff === _0x4bb2a5)
                break;
            else
                _0x167ccc['push'](_0x167ccc['shift']());
        } catch (_0x3ec89a) {
            _0x167ccc['push'](_0x167ccc['shift']());
        }
    }
}(_0x584c, 0xd46a6));
const {hasOwnProperty} = Object[_0x5e8628(0xd4)], eol = typeof process !== _0x5e8628(0xd5) && process[_0x5e8628(0xd6)] === 'win32' ? '\x0d\x0a' : '\x0a', encode = (_0x5ab199, _0x27cd6c) => {
        const _0x5d740d = _0x5e8628, _0x23b726 = [];
        let _0xbaace6 = '';
        typeof _0x27cd6c === 'string' ? _0x27cd6c = {
            'section': _0x27cd6c,
            'whitespace': ![]
        } : (_0x27cd6c = _0x27cd6c || Object['create'](null), _0x27cd6c[_0x5d740d(0xd7)] = _0x27cd6c[_0x5d740d(0xd7)] === !![]);
        const _0x27424e = _0x27cd6c[_0x5d740d(0xd7)] ? _0x5d740d(0xd8) : '=';
        for (const _0x5dfed9 of Object['keys'](_0x5ab199)) {
            const _0x1bffe8 = _0x5ab199[_0x5dfed9];
            if (_0x1bffe8 && Array[_0x5d740d(0xd9)](_0x1bffe8)) {
                for (const _0x361a71 of _0x1bffe8)
                    _0xbaace6 += safe(_0x5dfed9 + '[]') + _0x27424e + safe(_0x361a71) + '\x0a';
            } else {
                if (_0x1bffe8 && typeof _0x1bffe8 === _0x5d740d(0xda))
                    _0x23b726['push'](_0x5dfed9);
                else
                    _0xbaace6 += safe(_0x5dfed9) + _0x27424e + safe(_0x1bffe8) + eol;
            }
        }
        if (_0x27cd6c[_0x5d740d(0xdb)] && _0xbaace6['length'])
            _0xbaace6 = '[' + safe(_0x27cd6c[_0x5d740d(0xdb)]) + ']' + eol + _0xbaace6;
        for (const _0x387cae of _0x23b726) {
            const _0x36d7b8 = dotSplit(_0x387cae)['join']('\x5c.'), _0x28e167 = (_0x27cd6c[_0x5d740d(0xdb)] ? _0x27cd6c[_0x5d740d(0xdb)] + '.' : '') + _0x36d7b8, {whitespace: _0x4618d2} = _0x27cd6c, _0x560b05 = encode(_0x5ab199[_0x387cae], {
                    'section': _0x28e167,
                    'whitespace': _0x4618d2
                });
            if (_0xbaace6[_0x5d740d(0xdc)] && _0x560b05['length'])
                _0xbaace6 += eol;
            _0xbaace6 += _0x560b05;
        }
        return _0xbaace6;
    }, dotSplit = _0x336667 => _0x336667[_0x5e8628(0xdd)](/\1/g, _0x5e8628(0xde))[_0x5e8628(0xdd)](/\\\./g, '\x01')[_0x5e8628(0xdf)](/\./)[_0x5e8628(0xe0)](_0x584318 => _0x584318[_0x5e8628(0xdd)](/\1/g, '\x5c.')[_0x5e8628(0xdd)](/\2LITERAL\\1LITERAL\2/g, '\x01')), decode = _0x3db129 => {
        const _0x5cacba = _0x5e8628, _0x173938 = Object[_0x5cacba(0xe1)](null);
        let _0x110d92 = _0x173938, _0x4fcd0f = null;
        const _0x401337 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i, _0x20db85 = _0x3db129['split'](/[\r\n]+/g);
        for (const _0x11271f of _0x20db85) {
            if (!_0x11271f || _0x11271f[_0x5cacba(0xe2)](/^\s*[;#]/))
                continue;
            const _0x118813 = _0x11271f[_0x5cacba(0xe2)](_0x401337);
            if (!_0x118813)
                continue;
            if (_0x118813[0x1] !== undefined) {
                _0x4fcd0f = unsafe(_0x118813[0x1]);
                if (_0x4fcd0f === _0x5cacba(0xe3)) {
                    _0x110d92 = Object[_0x5cacba(0xe1)](null);
                    continue;
                }
                _0x110d92 = _0x173938[_0x4fcd0f] = _0x173938[_0x4fcd0f] || Object[_0x5cacba(0xe1)](null);
                continue;
            }
            const _0x3c5ec7 = unsafe(_0x118813[0x2]), _0x24ce0f = _0x3c5ec7[_0x5cacba(0xdc)] > 0x2 && _0x3c5ec7[_0x5cacba(0xe4)](-0x2) === '[]', _0x1ec056 = _0x24ce0f ? _0x3c5ec7[_0x5cacba(0xe4)](0x0, -0x2) : _0x3c5ec7;
            if (_0x1ec056 === _0x5cacba(0xe3))
                continue;
            const _0x945f19 = _0x118813[0x3] ? unsafe(_0x118813[0x4]) : !![], _0x1d2f67 = _0x945f19 === _0x5cacba(0xe5) || _0x945f19 === 'false' || _0x945f19 === _0x5cacba(0xe6) ? JSON[_0x5cacba(0xe7)](_0x945f19) : _0x945f19;
            if (_0x24ce0f) {
                if (!hasOwnProperty[_0x5cacba(0xe8)](_0x110d92, _0x1ec056))
                    _0x110d92[_0x1ec056] = [];
                else {
                    if (!Array[_0x5cacba(0xd9)](_0x110d92[_0x1ec056]))
                        _0x110d92[_0x1ec056] = [_0x110d92[_0x1ec056]];
                }
            }
            if (Array[_0x5cacba(0xd9)](_0x110d92[_0x1ec056]))
                _0x110d92[_0x1ec056]['push'](_0x1d2f67);
            else
                _0x110d92[_0x1ec056] = _0x1d2f67;
        }
        const _0x321aee = [];
        for (const _0x407d88 of Object[_0x5cacba(0xe9)](_0x173938)) {
            if (!hasOwnProperty[_0x5cacba(0xe8)](_0x173938, _0x407d88) || typeof _0x173938[_0x407d88] !== _0x5cacba(0xda) || Array['isArray'](_0x173938[_0x407d88]))
                continue;
            const _0x1621bb = dotSplit(_0x407d88);
            let _0x509803 = _0x173938;
            const _0x5ee2d2 = _0x1621bb[_0x5cacba(0xea)](), _0x11e248 = _0x5ee2d2[_0x5cacba(0xdd)](/\\\./g, '.');
            for (const _0x301292 of _0x1621bb) {
                if (_0x301292 === _0x5cacba(0xe3))
                    continue;
                if (!hasOwnProperty[_0x5cacba(0xe8)](_0x509803, _0x301292) || typeof _0x509803[_0x301292] !== 'object')
                    _0x509803[_0x301292] = Object['create'](null);
                _0x509803 = _0x509803[_0x301292];
            }
            if (_0x509803 === _0x173938 && _0x11e248 === _0x5ee2d2)
                continue;
            _0x509803[_0x11e248] = _0x173938[_0x407d88], _0x321aee[_0x5cacba(0xeb)](_0x407d88);
        }
        for (const _0x19d015 of _0x321aee)
            delete _0x173938[_0x19d015];
        return _0x173938;
    }, isQuoted = _0xd28be6 => _0xd28be6[_0x5e8628(0xec)](0x0) === '\x22' && _0xd28be6['slice'](-0x1) === '\x22' || _0xd28be6[_0x5e8628(0xec)](0x0) === '\x27' && _0xd28be6['slice'](-0x1) === '\x27', safe = _0x15227c => typeof _0x15227c !== 'string' || _0x15227c[_0x5e8628(0xe2)](/[=\r\n]/) || _0x15227c[_0x5e8628(0xe2)](/^\[/) || _0x15227c[_0x5e8628(0xdc)] > 0x1 && isQuoted(_0x15227c) || _0x15227c !== _0x15227c[_0x5e8628(0xed)]() ? JSON[_0x5e8628(0xee)](_0x15227c) : _0x15227c[_0x5e8628(0xdd)](/;/g, '\x5c;')[_0x5e8628(0xdd)](/#/g, '\x5c#'), unsafe = (_0x183c19, _0x5d16a4) => {
        const _0x16be8b = _0x5e8628;
        _0x183c19 = (_0x183c19 || '')[_0x16be8b(0xed)]();
        if (isQuoted(_0x183c19)) {
            if (_0x183c19[_0x16be8b(0xec)](0x0) === '\x27')
                _0x183c19 = _0x183c19[_0x16be8b(0xef)](0x1, _0x183c19[_0x16be8b(0xdc)] - 0x2);
            try {
                _0x183c19 = JSON[_0x16be8b(0xe7)](_0x183c19);
            } catch (_0x295869) {
            }
        } else {
            let _0x57dd49 = ![], _0x41f89a = '';
            for (let _0x13c2e0 = 0x0, _0x263cae = _0x183c19[_0x16be8b(0xdc)]; _0x13c2e0 < _0x263cae; _0x13c2e0++) {
                const _0x147303 = _0x183c19[_0x16be8b(0xec)](_0x13c2e0);
                if (_0x57dd49) {
                    if (_0x16be8b(0xf0)['indexOf'](_0x147303) !== -0x1)
                        _0x41f89a += _0x147303;
                    else
                        _0x41f89a += '\x5c' + _0x147303;
                    _0x57dd49 = ![];
                } else {
                    if (';#'['indexOf'](_0x147303) !== -0x1)
                        break;
                    else {
                        if (_0x147303 === '\x5c')
                            _0x57dd49 = !![];
                        else
                            _0x41f89a += _0x147303;
                    }
                }
            }
            if (_0x57dd49)
                _0x41f89a += '\x5c';
            return _0x41f89a[_0x16be8b(0xed)]();
        }
        return _0x183c19;
    };
function _0x41de(_0x5da3be, _0x434236) {
    return _0x41de = function (_0x584c08, _0x41de60) {
        _0x584c08 = _0x584c08 - 0xc8;
        let _0x45136c = _0x584c[_0x584c08];
        return _0x45136c;
    }, _0x41de(_0x5da3be, _0x434236);
}
module[_0x5e8628(0xf1)] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};
