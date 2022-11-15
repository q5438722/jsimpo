'use strict';
const _0x3417 = [
    'exports',
    'stringify',
    'basename',
    'match',
    'parse',
    'name',
    'const\x20React\x20=\x20require(\x27react\x27);\x0a\x20\x20\x20\x20\x20\x20module.exports\x20=\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20__esModule:\x20true,\x0a\x20\x20\x20\x20\x20\x20\x20\x20default:\x20',
    ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20ReactComponent:\x20React.forwardRef(function\x20',
    '(props,\x20ref)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20$$typeof:\x20Symbol.for(\x27react.element\x27),\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20type:\x20\x27svg\x27,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20ref:\x20ref,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20key:\x20null,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20props:\x20Object.assign({},\x20props,\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20children:\x20',
    'module.exports\x20=\x20',
    '1907iaklDs',
    '123oFqnwg',
    '61WXIeUX',
    '8377cXQDIW',
    '533432NjSSfu',
    '570813HHJhsc',
    '278967BtQEku',
    '73378bwkLMc',
    '1PsqIKg',
    '709avWdQX',
    '1107oQsqhL',
    'camelcase'
];
const _0x35c1b4 = _0x3a79;
(function (_0x40c3a4, _0x4dc2b6) {
    const _0x572f73 = _0x3a79;
    while (!![]) {
        try {
            const _0x2e21cd = parseInt(_0x572f73(0x187)) * -parseInt(_0x572f73(0x188)) + -parseInt(_0x572f73(0x189)) * -parseInt(_0x572f73(0x18a)) + -parseInt(_0x572f73(0x18b)) + -parseInt(_0x572f73(0x18c)) + parseInt(_0x572f73(0x18d)) + parseInt(_0x572f73(0x18e)) * parseInt(_0x572f73(0x18f)) + parseInt(_0x572f73(0x190)) * parseInt(_0x572f73(0x191));
            if (_0x2e21cd === _0x4dc2b6)
                break;
            else
                _0x40c3a4['push'](_0x40c3a4['shift']());
        } catch (_0x127a17) {
            _0x40c3a4['push'](_0x40c3a4['shift']());
        }
    }
}(_0x3417, 0x4b897));
function _0x3a79(_0x2d1e5a, _0x5db93f) {
    return _0x3a79 = function (_0x341764, _0x3a79d2) {
        _0x341764 = _0x341764 - 0x187;
        let _0x3cce34 = _0x3417[_0x341764];
        return _0x3cce34;
    }, _0x3a79(_0x2d1e5a, _0x5db93f);
}
const path = require('path'), camelcase = require(_0x35c1b4(0x192));
module[_0x35c1b4(0x193)] = {
    'process'(_0x581cd1, _0x2b7cbe) {
        const _0x151424 = _0x35c1b4, _0x479cb7 = JSON[_0x151424(0x194)](path[_0x151424(0x195)](_0x2b7cbe));
        if (_0x2b7cbe[_0x151424(0x196)](/\.svg$/)) {
            const _0x138a0e = camelcase(path[_0x151424(0x197)](_0x2b7cbe)[_0x151424(0x198)], { 'pascalCase': !![] }), _0x1fab0d = 'Svg' + _0x138a0e;
            return _0x151424(0x199) + _0x479cb7 + _0x151424(0x19a) + _0x1fab0d + _0x151424(0x19b) + _0x479cb7 + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20};\x0a\x20\x20\x20\x20\x20\x20\x20\x20}),\x0a\x20\x20\x20\x20\x20\x20};';
        }
        return _0x151424(0x19c) + _0x479cb7 + ';';
    }
};
