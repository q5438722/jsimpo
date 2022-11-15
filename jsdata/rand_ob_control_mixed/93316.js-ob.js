function nQueensBitwiseRecursive(_0x26c025, _0x3dc1de = 0x0, _0x4aca3b = 0x0, _0xd68b3e = 0x0, _0x34f232 = 0x0) {
    const _0x492dcf = {
        'KOXIU': function (_0x1df291, _0x1d4ab7) {
            return _0x1df291 - _0x1d4ab7;
        },
        'srVEc': function (_0x44e4bf, _0x5dc587) {
            return _0x44e4bf ** _0x5dc587;
        },
        'tlEMf': function (_0x22df90, _0x3e7499) {
            return _0x22df90 === _0x3e7499;
        },
        'PyIQO': function (_0x257092, _0x3d5036) {
            return _0x257092 + _0x3d5036;
        },
        'QNTuU': function (_0x1e8957, _0x32ee20) {
            return _0x1e8957 | _0x32ee20;
        },
        'yHlFE': function (_0x55645e, _0x5812a3) {
            return _0x55645e | _0x5812a3;
        },
        'eNQSz': function (_0x40c4b9, _0x34685b) {
            return _0x40c4b9 & _0x34685b;
        },
        'lXDqD': function (_0x212bcb, _0x17f035) {
            return _0x212bcb & _0x17f035;
        },
        'SDXrw': function (_0x31595d, _0x4c8dbc, _0x4639ed, _0x1e370c, _0x55a520, _0x2115ce) {
            return _0x31595d(_0x4c8dbc, _0x4639ed, _0x1e370c, _0x55a520, _0x2115ce);
        },
        'GnPrQ': function (_0x443ec1, _0x240fc7) {
            return _0x443ec1 >> _0x240fc7;
        },
        'vRSzR': function (_0x2a575c, _0x2c3e48) {
            return _0x2a575c << _0x2c3e48;
        }
    };
    let _0x19b9fb = _0x34f232;
    const _0x540167 = _0x492dcf['KOXIU'](_0x492dcf['srVEc'](0x2, _0x26c025), 0x1);
    if (_0x492dcf['tlEMf'](_0x4aca3b, _0x540167))
        return _0x492dcf['PyIQO'](_0x19b9fb, 0x1);
    let _0x54bcac = ~_0x492dcf['QNTuU'](_0x492dcf['yHlFE'](_0x3dc1de, _0xd68b3e), _0x4aca3b);
    while (_0x492dcf['eNQSz'](_0x54bcac, _0x540167)) {
        const _0x28bccd = _0x492dcf['lXDqD'](_0x54bcac, -_0x54bcac);
        _0x54bcac -= _0x28bccd, _0x19b9fb += _0x492dcf['SDXrw'](nQueensBitwiseRecursive, _0x26c025, _0x492dcf['GnPrQ'](_0x492dcf['yHlFE'](_0x3dc1de, _0x28bccd), 0x1), _0x492dcf['yHlFE'](_0x4aca3b, _0x28bccd), _0x492dcf['vRSzR'](_0x492dcf['yHlFE'](_0xd68b3e, _0x28bccd), 0x1), _0x34f232);
    }
    return _0x19b9fb;
}
export default function nQueensBitwise(_0x21c98e) {
    const _0x2a3a63 = {
        'kicKr': function (_0x45416c, _0x40fd07) {
            return _0x45416c(_0x40fd07);
        }
    };
    return _0x2a3a63['kicKr'](nQueensBitwiseRecursive, _0x21c98e);
}
