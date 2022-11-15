const _0x5dc1 = ['362tEUTKe', 'wzHJX', 'kXMLO', 'bLtem', 'nXIru', 'EdXvC', 'aPUaL', 'rWQyn', '27506ueVWxM', '14tJIeZv', '745797MFGStx', '127625TuoDnc', '141053TsAyJZ', '548602IFuzHI', '1075142MRdutf', '5900kpuVMA'];

(function (_0x27c105, _0x4c454a) {
    const _0x220d9b = _0x63aa;

    while (true) {
        try {
            const _0x43a088 = -parseInt(_0x220d9b(0x1b5)) * -parseInt(_0x220d9b(0x1b6)) + parseInt(_0x220d9b(0x1b7)) + parseInt(_0x220d9b(0x1b8)) + -parseInt(_0x220d9b(0x1b9)) + parseInt(_0x220d9b(0x1ba)) + parseInt(_0x220d9b(0x1bb)) + -parseInt(_0x220d9b(0x1bc)) * parseInt(_0x220d9b(0x1bd));

            if (_0x43a088 === _0x4c454a) break;else _0x27c105.push(_0x27c105.shift());
        } catch (_0x1e433d) {
            _0x27c105.push(_0x27c105.shift());
        }
    }
})(_0x5dc1, 605397);
function nQueensBitwiseRecursive(_0x4e3063, _0x26946c = 0, _0x5d4f10 = 0, _0x5696b3 = 0, _0x1e017b = 0) {
    const _0x4280af = _0x63aa;
    const _0x2d235b = {
        'wzHJX': function (_0x47d9cc, _0x3d694d) {
            return _0x47d9cc - _0x3d694d;
        },
        'rIgTq': function (_0x18b281, _0x1c860f) {
            return _0x18b281 === _0x1c860f;
        },
        'kXMLO': function (_0xa8136b, _0x43aa1e) {
            return _0xa8136b + _0x43aa1e;
        },
        'bLtem': function (_0x3fe3d8, _0x1843d4) {
            return _0x3fe3d8 | _0x1843d4;
        },
        'nXIru': function (_0x216ddf, _0x2721be) {
            return _0x216ddf & _0x2721be;
        },
        'EdXvC': function (_0x5e82b7, _0x3dd56c, _0x315f42, _0x1bb1b7, _0x2dc181, _0x48dc29) {
            return _0x5e82b7(_0x3dd56c, _0x315f42, _0x1bb1b7, _0x2dc181, _0x48dc29);
        },
        'aPUaL': function (_0x2a93d0, _0x146855) {
            return _0x2a93d0 >> _0x146855;
        },
        'rWQyn': function (_0xd38f6a, _0x56f389) {
            return _0xd38f6a | _0x56f389;
        },
        'veDID': function (_0xc03d70, _0x2c57cf) {
            return _0xc03d70 << _0x2c57cf;
        }
    };
    var _0x22bade = _0x1e017b;

    const _0x57281a = _0x2d235b[_0x4280af(0x1be)](2 ** _0x4e3063, 1);

    if (_0x2d235b.rIgTq(_0x5d4f10, _0x57281a)) return _0x2d235b[_0x4280af(0x1bf)](_0x22bade, 1);

    var _0x3cd0f9 = ~_0x2d235b[_0x4280af(0x1c0)](_0x26946c | _0x5696b3, _0x5d4f10);

    while (_0x2d235b[_0x4280af(0x1c1)](_0x3cd0f9, _0x57281a)) {
        const _0x2c502c = _0x3cd0f9 & -_0x3cd0f9;

        _0x3cd0f9 -= _0x2c502c, _0x22bade += _0x2d235b[_0x4280af(0x1c2)](nQueensBitwiseRecursive, _0x4e3063, _0x2d235b[_0x4280af(0x1c3)](_0x26946c | _0x2c502c, 1), _0x2d235b.rWQyn(_0x5d4f10, _0x2c502c), _0x2d235b.veDID(_0x2d235b[_0x4280af(0x1c4)](_0x5696b3, _0x2c502c), 1), _0x1e017b);
    }
    return _0x22bade;
}
function _0x63aa(_0x2e47f4, _0x2ec0bb) {
    return _0x63aa = function (_0x75b07a, _0x2d67e7) {
        _0x75b07a = _0x75b07a - 437;
        const _0x2bf481 = _0x5dc1[_0x75b07a];

        return _0x2bf481;
    }, _0x63aa(_0x2e47f4, _0x2ec0bb);
}
export default function nQueensBitwise(_0x371e4c) {
    return nQueensBitwiseRecursive(_0x371e4c);
}
