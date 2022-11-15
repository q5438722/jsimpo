const debug = require('debug')('cypress:e2e');
module[_0x57a9c4(214)] = function (_0xecaf7b, _0x58c832) {
    const _0x20aba4 = _0x57a9c4;
    debug(_0x20aba4(215), __filename), debug('received config with browsers %o', _0x58c832['browsers']);
    if (!Array[_0x20aba4(216)](_0x58c832[_0x20aba4(217)]))
        throw new Error(_0x20aba4(218));
    if (_0x58c832[_0x20aba4(217)]['length'] === 0)
        throw new Error(_0x20aba4(219));
    const _0x5a775b = _0x58c832[_0x20aba4(217)][_0x20aba4(220)](_0x14222f => {
        const _0x24a744 = _0x20aba4;
        return _0x14222f['name'] === _0x24a744(221);
    });
    if (!_0x5a775b)
        throw new Error(_0x20aba4(222));
    const _0xffb0f2 = { 'browsers': [_0x5a775b] };
    return debug(_0x20aba4(223), _0xffb0f2), _0xffb0f2;
};