const _0x4d28 = ['1GKSNcX', '355519KlMejN', '287133HexJnY', 'void', 'undefined', 'gtMSa', 'source', 'find', 'VariableDeclaration', 'indexOf', 'value', 'type', 'declarations', 'filter', 'log', '> Skipping removal of undefined init for "', '": within ', 'init', 'jrpwr', 'operator', 'Llagj', 'Hepzu', 'argument', 'pxwwz', 'gaXcB', 'single', '1zXzGTT', '114315YVrBuD', '292304zlMQda', '522900CWVjlB', '7xIwYTI', '9787hZaUzh', '390251vtIZrl'];

function _0x4391(_0x434beb, _0x561ad4) {
    return _0x4391 = function (_0x1d8bf9, _0x12ea61) {
        _0x1d8bf9 = _0x1d8bf9 - 407;
        const _0x23a576 = _0x4d28[_0x1d8bf9];

        return _0x23a576;
    }, _0x4391(_0x434beb, _0x561ad4);
}
(function (_0x35554b, _0x60edec) {
    const _0x384f56 = _0x4391;

    while (true) {
        try {
            const _0x5c833a = parseInt(_0x384f56(0x197)) * -parseInt(_0x384f56(0x198)) + -parseInt(_0x384f56(0x199)) + parseInt(_0x384f56(0x19a)) + -parseInt(_0x384f56(0x19b)) * parseInt(_0x384f56(0x19c)) + parseInt(_0x384f56(0x19d)) + parseInt(_0x384f56(0x19e)) * -parseInt(_0x384f56(0x19f)) + parseInt(_0x384f56(0x1a0));

            if (_0x5c833a === _0x60edec) break;else _0x35554b.push(_0x35554b.shift());
        } catch (_0x356d26) {
            _0x35554b.push(_0x35554b.shift());
        }
    }
})(_0x4d28, 369637);
const BLOCKED = ['ForStatement', 'WhileStatement'];

export default ((_0x27c6b4, _0x26f4fa) => {
    const _0x3976fd = _0x4391;
    const _0xc7b516 = {
        'VPUbI': function (_0x3db033, _0x13c7d2) {
            return _0x3db033 === _0x13c7d2;
        },
        'jrpwr': function (_0x10937f, _0x32722d) {
            return _0x10937f === _0x32722d;
        },
        'Llagj': _0x3976fd(0x1a1),
        'Hepzu': function (_0x481ddd, _0x4950eb) {
            return _0x481ddd == _0x4950eb;
        },
        'pxwwz': function (_0x3e5bc2, _0x592a09) {
            return _0x3e5bc2 === _0x592a09;
        },
        'gaXcB': _0x3976fd(0x1a2),
        'gtMSa': function (_0x383619, _0x41824e) {
            return _0x383619(_0x41824e);
        }
    };
    var { jscodeshift: _0x4caaea } = _0x26f4fa;
    var _0x42f6b1 = 0;

    const _0x31dc90 = _0xc7b516[_0x3976fd(0x1a3)](_0x4caaea, _0x27c6b4[_0x3976fd(0x1a4)])[_0x3976fd(0x1a5)](_0x4caaea[_0x3976fd(0x1a6)]).forEach(_0x4e15a5);

    function _0x4e15a5(_0x13551c) {
        const _0x26d50b = _0x3976fd;
        var _0x458cdd = _0x13551c;
        var _0x437f55 = true;

        while (_0x458cdd = _0x458cdd.parentPath) {
            if (~BLOCKED[_0x26d50b(0x1a7)](_0x458cdd[_0x26d50b(0x1a8)][_0x26d50b(0x1a9)])) {
                _0x437f55 = false;
                break;
            }
        }
        _0x13551c[_0x26d50b(0x1a8)][_0x26d50b(0x1aa)][_0x26d50b(0x1ab)](_0x56784c).forEach(_0xad28ba => {
            const _0x497bd6 = _0x26d50b;

            _0xc7b516.VPUbI(_0x437f55, false) ? console[_0x497bd6(0x1ac)](_0x497bd6(0x1ad) + _0xad28ba.id.name + _0x497bd6(0x1ae) + _0x458cdd[_0x497bd6(0x1a8)][_0x497bd6(0x1a9)]) : _0x46a814(_0xad28ba);
        });
    }
    function _0x46a814(_0x455bca) {
        const _0xa6563e = _0x3976fd;

        _0x455bca[_0xa6563e(0x1af)] = null, _0x42f6b1++;
    }
    function _0x56784c(_0x249d79) {
        const _0x5a4cb8 = _0x3976fd;
        var { init: _0x4491bb } = _0x249d79;

        if (_0x4491bb) {
            if (_0xc7b516.VPUbI(_0x4491bb[_0x5a4cb8(0x1a9)], 'UnaryExpression') && _0xc7b516[_0x5a4cb8(0x1b0)](_0x4491bb[_0x5a4cb8(0x1b1)], _0xc7b516[_0x5a4cb8(0x1b2)]) && _0xc7b516[_0x5a4cb8(0x1b3)](_0x4491bb[_0x5a4cb8(0x1b4)][_0x5a4cb8(0x1a8)], 0)) return true;
            if (_0xc7b516[_0x5a4cb8(0x1b5)](_0x4491bb[_0x5a4cb8(0x1a9)], 'Identifier') && _0xc7b516[_0x5a4cb8(0x1b5)](_0x4491bb.name, _0xc7b516[_0x5a4cb8(0x1b6)])) return true;
        }
        return false;
    }
    return _0x42f6b1 ? _0x31dc90.toSource({ 'quote': _0x3976fd(0x1b7) }) : null;
});
