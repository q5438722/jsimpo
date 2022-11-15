const {hasOwnProperty} = Object['prototype'];
const eol = typeof process !== 'undefined' && process['platform'] === 'win32' ? '\r\n' : '\n';
const encode = (_0x37f07c, _0x1efae8) => {
    const _0x56808d = [];
    let _0x13449b = '';
    if (typeof _0x1efae8 === 'string') {
        _0x1efae8 = {
            'section': _0x1efae8,
            'whitespace': ![]
        };
    } else {
        if ('Pswkf' !== 'RAShn') {
            _0x1efae8 = _0x1efae8 || Object['create'](null);
            _0x1efae8['whitespace'] = _0x1efae8['whitespace'] === !![];
        } else {
            const _0x501e82 = _0x37f07c[k];
            if (_0x501e82 && Array['isArray'](_0x501e82)) {
                for (const _0x5b6c40 of _0x501e82)
                    _0x13449b += _0x407fd2['TtTLB'](safe(k + '[]'), _0x142af8) + safe(_0x5b6c40) + '\n';
            } else if (_0x501e82 && typeof _0x501e82 === 'object')
                _0x56808d['push'](k);
            else
                _0x13449b += _0x407fd2['DobRV'](safe(k) + _0x142af8, safe(_0x501e82)) + eol;
        }
    }
    const _0x142af8 = _0x1efae8['whitespace'] ? ' = ' : '=';
    for (const _0x3c80d7 of Object['keys'](_0x37f07c)) {
        if ('oCYdj' === 'oCYdj') {
            const _0x4cde90 = _0x37f07c[_0x3c80d7];
            if (_0x4cde90 && Array['isArray'](_0x4cde90)) {
                if ('tehyt' === 'tehyt') {
                    for (const _0x522345 of _0x4cde90)
                        _0x13449b += _0x407fd2['zjloh'](safe(_0x407fd2['zjloh'](_0x3c80d7, '[]')) + _0x142af8, safe(_0x522345)) + '\n';
                } else {
                    _0x4cde90 = JSON['parse'](_0x4cde90);
                }
            } else if (_0x4cde90 && typeof _0x4cde90 === 'object')
                _0x56808d['push'](_0x3c80d7);
            else
                _0x13449b += safe(_0x3c80d7) + _0x142af8 + safe(_0x4cde90) + eol;
        } else {
            if (!hasOwnProperty['call'](p, key))
                p[key] = [];
            else if (!Array['isArray'](p[key]))
                p[key] = [p[key]];
        }
    }
    if (_0x1efae8['section'] && _0x13449b['length'])
        _0x13449b = _0x407fd2['TkVqX']('[' + safe(_0x1efae8['section']) + ']', eol) + _0x13449b;
    for (const _0x2f1a3c of _0x56808d) {
        const _0x5b48d0 = dotSplit(_0x2f1a3c)['join']('\\.');
        const _0x34ff37 = (_0x1efae8['section'] ? _0x1efae8['section'] + '.' : '') + _0x5b48d0;
        const {whitespace} = _0x1efae8;
        const _0x51e2c0 = encode(_0x37f07c[_0x2f1a3c], {
            'section': _0x34ff37,
            'whitespace': whitespace
        });
        if (_0x13449b['length'] && _0x51e2c0['length'])
            _0x13449b += eol;
        _0x13449b += _0x51e2c0;
    }
    return _0x13449b;
};
const dotSplit = _0x2e12b3 => _0x2e12b3['replace'](/\1/g, '\x02LITERAL\\1LITERAL\x02')['replace'](/\\\./g, '\x01')['split'](/\./)['map'](_0x9e8f05 => _0x9e8f05['replace'](/\1/g, '\\.')['replace'](/\2LITERAL\\1LITERAL\2/g, '\x01'));
const decode = _0x3222e4 => {
    const _0x2dd683 = Object['create'](null);
    let _0x18828d = _0x2dd683;
    let _0x452008 = null;
    const _0x4121c1 = /^\[([^\]]*)\]$|^([^=]+)(=(.*))?$/i;
    const _0x2e0add = _0x3222e4['split'](/[\r\n]+/g);
    for (const _0xf00c44 of _0x2e0add) {
        if ('vbxPf' !== 'FRaLR') {
            if (!_0xf00c44 || _0xf00c44['match'](/^\s*[;#]/))
                continue;
            const _0x144bc9 = _0xf00c44['match'](_0x4121c1);
            if (!_0x144bc9)
                continue;
            if (_0x144bc9[1] !== undefined) {
                _0x452008 = unsafe(_0x144bc9[1]);
                if (_0x452008 === '__proto__') {
                    _0x18828d = Object['create'](null);
                    continue;
                }
                _0x18828d = _0x2dd683[_0x452008] = _0x2dd683[_0x452008] || Object['create'](null);
                continue;
            }
            const _0x5a3741 = unsafe(_0x144bc9[2]);
            const _0x2e6477 = _0x5a3741['length'] > 2 && _0x5a3741['slice'](-2) === '[]';
            const _0x23667e = _0x2e6477 ? _0x5a3741['slice'](0, -2) : _0x5a3741;
            if (_0x23667e === '__proto__')
                continue;
            const _0x5cabb3 = _0x144bc9[3] ? unsafe(_0x144bc9[4]) : !![];
            const _0x41c23d = _0x5cabb3 === 'true' || _0x5cabb3 === 'false' || _0x5cabb3 === 'null' ? JSON['parse'](_0x5cabb3) : _0x5cabb3;
            if (_0x2e6477) {
                if ('yYFYS' !== 'xpXFy') {
                    if (!hasOwnProperty['call'](_0x18828d, _0x23667e))
                        _0x18828d[_0x23667e] = [];
                    else if (!Array['isArray'](_0x18828d[_0x23667e]))
                        _0x18828d[_0x23667e] = [_0x18828d[_0x23667e]];
                } else {
                    opt = {
                        'section': opt,
                        'whitespace': ![]
                    };
                }
            }
            if (Array['isArray'](_0x18828d[_0x23667e]))
                _0x18828d[_0x23667e]['push'](_0x41c23d);
            else
                _0x18828d[_0x23667e] = _0x41c23d;
        } else {
            opt = opt || Object['create'](null);
            opt['whitespace'] = opt['whitespace'] === !![];
        }
    }
    const _0x1f770d = [];
    for (const _0x55623c of Object['keys'](_0x2dd683)) {
        if ('XRktR' !== 'ptDsZ') {
            if (!hasOwnProperty['call'](_0x2dd683, _0x55623c) || typeof _0x2dd683[_0x55623c] !== 'object' || Array['isArray'](_0x2dd683[_0x55623c]))
                continue;
            const _0x14b140 = dotSplit(_0x55623c);
            let _0x18828d = _0x2dd683;
            const _0x505ab1 = _0x14b140['pop']();
            const _0x32143a = _0x505ab1['replace'](/\\\./g, '.');
            for (const _0x5e53ee of _0x14b140) {
                if (_0x5e53ee === '__proto__')
                    continue;
                if (!hasOwnProperty['call'](_0x18828d, _0x5e53ee) || typeof _0x18828d[_0x5e53ee] !== 'object')
                    _0x18828d[_0x5e53ee] = Object['create'](null);
                _0x18828d = _0x18828d[_0x5e53ee];
            }
            if (_0x18828d === _0x2dd683 && _0x32143a === _0x505ab1)
                continue;
            _0x18828d[_0x32143a] = _0x2dd683[_0x55623c];
            _0x1f770d['push'](_0x55623c);
        } else {
            for (const _0xa3de42 of val)
                _0x2dd683 += safe(_0x55623c + '[]') + separator + safe(_0xa3de42) + '\n';
        }
    }
    for (const _0x231977 of _0x1f770d)
        delete _0x2dd683[_0x231977];
    return _0x2dd683;
};
const isQuoted = _0x3eec46 => _0x3eec46['charAt'](0) === '"' && _0x3eec46['slice'](-1) === '"' || _0x3eec46['charAt'](0) === '\'' && _0x3eec46['slice'](-1) === '\'';
const safe = _0x19f0da => typeof _0x19f0da !== 'string' || _0x19f0da['match'](/[=\r\n]/) || _0x19f0da['match'](/^\[/) || _0x19f0da['length'] > 1 && isQuoted(_0x19f0da) || _0x19f0da !== _0x19f0da['trim']() ? JSON['stringify'](_0x19f0da) : _0x19f0da['replace'](/;/g, '\\;')['replace'](/#/g, '\\#');
const unsafe = (_0x457398, _0x515ef0) => {
    _0x457398 = (_0x457398 || '')['trim']();
    if (isQuoted(_0x457398)) {
        if ('xATAn' === 'xATAn') {
            if (_0x457398['charAt'](0) === '\'')
                _0x457398 = _0x457398['substr'](1, _0x457398['length'] - 2);
            try {
                if ('XbBQT' === 'cHRyi') {
                    if (_0x457398['charAt'](0) === '\'')
                        _0x457398 = _0x457398['substr'](1, _0x457398['length'] - 2);
                    try {
                        _0x457398 = JSON['parse'](_0x457398);
                    } catch (_0x44b675) {
                    }
                } else {
                    _0x457398 = JSON['parse'](_0x457398);
                }
            } catch (_0xf4b1df) {
            }
        } else {
            const _0x26a748 = dotSplit(k)['join']('\\.');
            const _0x11084b = (opt['section'] ? opt['section'] + '.' : '') + _0x26a748;
            const {whitespace} = opt;
            const _0x2c2a53 = encode(obj[k], {
                'section': _0x11084b,
                'whitespace': whitespace
            });
            if (out['length'] && _0x2c2a53['length'])
                out += eol;
            out += _0x2c2a53;
        }
    } else {
        let _0xc46ed6 = ![];
        let _0x3a1b6c = '';
        for (let _0x9b82c4 = 0, _0x3d4398 = _0x457398['length']; _0x9b82c4 < _0x3d4398; _0x9b82c4++) {
            const _0x4c4f0e = _0x457398['charAt'](_0x9b82c4);
            if (_0xc46ed6) {
                if ('dccNY' === 'dccNY') {
                    if ('\\;#'['indexOf'](_0x4c4f0e) !== -1)
                        _0x3a1b6c += _0x4c4f0e;
                    else
                        _0x3a1b6c += '\\' + _0x4c4f0e;
                    _0xc46ed6 = ![];
                } else {
                    if ('\\;#'['indexOf'](_0x4c4f0e) !== -1)
                        _0x3a1b6c += _0x4c4f0e;
                    else
                        _0x3a1b6c += '\\' + _0x4c4f0e;
                    _0xc46ed6 = ![];
                }
            } else if (';#'['indexOf'](_0x4c4f0e) !== -1)
                break;
            else if (_0x4c4f0e === '\\')
                _0xc46ed6 = !![];
            else
                _0x3a1b6c += _0x4c4f0e;
        }
        if (_0xc46ed6)
            _0x3a1b6c += '\\';
        return _0x3a1b6c['trim']();
    }
    return _0x457398;
};
module['exports'] = {
    'parse': decode,
    'decode': decode,
    'stringify': encode,
    'encode': encode,
    'safe': safe,
    'unsafe': unsafe
};