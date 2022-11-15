'use strict';

const _0x189b = ['157161xnPkhl', '3WOOiIl', '1788470Wssoph', '1asMTGP', '390129BvNlXt', '891304BADjIU', '590846vbLcnI', 'exports', 'stringify', 'match', 'parse', 'name', 'const React = require(\'react\');\n      module.exports = {\n        __esModule: true,\n        default: ', ',\n        ReactComponent: React.forwardRef(function ', 'module.exports = ', '169446DwvnUi', '1343703tXyirW', '1MWWnbr'];
const _0x36072f = _0x3ff2;

(function (_0x1d8979, _0x3787db) {
    const _0x356cd5 = _0x3ff2;

    while (true) {
        try {
            const _0x543aa0 = parseInt(_0x356cd5(0x1df)) + parseInt(_0x356cd5(0x1e0)) * parseInt(_0x356cd5(0x1e1)) + parseInt(_0x356cd5(0x1e2)) * -parseInt(_0x356cd5(0x1e3)) + parseInt(_0x356cd5(0x1e4)) + parseInt(_0x356cd5(0x1e5)) * -parseInt(_0x356cd5(0x1e6)) + -parseInt(_0x356cd5(0x1e7)) + -parseInt(_0x356cd5(0x1e8));

            if (_0x543aa0 === _0x3787db) break;else _0x1d8979.push(_0x1d8979.shift());
        } catch (_0x5c2679) {
            _0x1d8979.push(_0x1d8979.shift());
        }
    }
})(_0x189b, 957857);
function _0x3ff2(_0x120a36, _0x16a5eb) {
    return _0x3ff2 = function (_0x5e121e, _0x43b503) {
        _0x5e121e = _0x5e121e - 479;
        const _0x42d1bf = _0x189b[_0x5e121e];

        return _0x42d1bf;
    }, _0x3ff2(_0x120a36, _0x16a5eb);
}

const path = require('path');

const camelcase = require('camelcase');

module[_0x36072f(0x1e9)] = {
    'process'(_0x242b42, _0x583248) {
        const _0x7387c0 = _0x36072f;
        const _0x48d6ea = {
            'RnLXK': function (_0x596e55, _0x27b853, _0x8e22e9) {
                return _0x596e55(_0x27b853, _0x8e22e9);
            }
        };

        const _0x4ceaaf = JSON[_0x7387c0(0x1ea)](path.basename(_0x583248));

        if (_0x583248[_0x7387c0(0x1eb)](/\.svg$/)) {
            const _0x57fe39 = _0x48d6ea.RnLXK(camelcase, path[_0x7387c0(0x1ec)](_0x583248)[_0x7387c0(0x1ed)], { 'pascalCase': true });

            const _0x48574d = 'Svg' + _0x57fe39;

            return _0x7387c0(0x1ee) + _0x4ceaaf + _0x7387c0(0x1ef) + _0x48574d + '(props, ref) {\n          return {\n            $$typeof: Symbol.for(\'react.element\'),\n            type: \'svg\',\n            ref: ref,\n            key: null,\n            props: Object.assign({}, props, {\n              children: ' + _0x4ceaaf + '\n            })\n          };\n        }),\n      };';
        }
        return _0x7387c0(0x1f0) + _0x4ceaaf + ';';
    }
};
