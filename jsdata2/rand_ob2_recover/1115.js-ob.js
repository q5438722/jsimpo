function _0x2881(_0x40a9f3, _0xeca5e6) {
    return _0x2881 = function (_0x42ca55, _0x288151) {
        _0x42ca55 = _0x42ca55 - 100;
        let _0x27d5f7 = _0x42ca[_0x42ca55];
        return _0x27d5f7;
    }, _0x2881(_0x40a9f3, _0xeca5e6);
}
const {buildDocsMeta} = require('../utils/utils'), DEFAULT_Components_SET = new Set([
        'View',
        'ScrollView',
        _0x559634(111),
        _0x559634(112),
        _0x559634(113),
        _0x559634(114),
        _0x559634(115),
        _0x559634(116),
        _0x559634(117),
        _0x559634(118),
        'Checkbox',
        _0x559634(119),
        _0x559634(120),
        _0x559634(121),
        _0x559634(122),
        _0x559634(123),
        _0x559634(124),
        _0x559634(125),
        _0x559634(126),
        'Slider',
        'Switch',
        _0x559634(127),
        _0x559634(128),
        _0x559634(129),
        _0x559634(130),
        _0x559634(131),
        _0x559634(132),
        _0x559634(133),
        _0x559634(134),
        _0x559634(135),
        _0x559634(136),
        'OpenData',
        _0x559634(137),
        _0x559634(138),
        _0x559634(139),
        'MovableArea',
        _0x559634(140)
    ]), ERROR_MESSAGE = _0x559634(141);
module[_0x559634(142)] = {
    'meta': { 'docs': buildDocsMeta(ERROR_MESSAGE, _0x559634(143)) },
    'create'(_0xc77203) {
        function _0x1cbb08(_0x5cf6e9) {
            const _0x112a1f = _0x2881;
            return !((_0x5cf6e9[_0x112a1f(144)] === _0x112a1f(145) || _0x5cf6e9[_0x112a1f(144)] === _0x112a1f(146)) && _0x5cf6e9['value'][_0x112a1f(147)]() === '');
        }
        return {
            'JSXElement'(_0x5aa1e5) {
                const _0x25aca8 = _0x2881, {name: _0x181cb9} = _0x5aa1e5[_0x25aca8(148)]['name'];
                !DEFAULT_Components_SET[_0x25aca8(149)](_0x181cb9) && _0x5aa1e5[_0x25aca8(150)][_0x25aca8(151)](_0x1cbb08)['length'] > 0 && _0xc77203['report']({
                    'message': ERROR_MESSAGE,
                    'node': _0x5aa1e5
                });
            }
        };
    }
};