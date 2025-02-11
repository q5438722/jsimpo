'use strict';
const path = require('path');
const camelcase = require('camelcase');
module['exports'] = {
    'process'(_0x25d5f0, _0xca398e) {
        const _0x52f078 = JSON['stringify'](path['basename'](_0xca398e));
        if (_0xca398e['match'](/\.svg$/)) {
            const _0xd61f33 = camelcase(path['parse'](_0xca398e)['name'], { 'pascalCase': !![] });
            const _0x2ae16d = 'Svg' + _0xd61f33;
            return 'const React = require(\'react\');\n      module.exports = {\n        __esModule: true,\n        default: ' + _0x52f078 + ',\n        ReactComponent: React.forwardRef(function ' + _0x2ae16d + '(props, ref) {\n          return {\n            $$typeof: Symbol.for(\'react.element\'),\n            type: \'svg\',\n            ref: ref,\n            key: null,\n            props: Object.assign({}, props, {\n              children: ' + _0x52f078 + '\n            })\n          };\n        }),\n      };';
        }
        return 'module.exports = ' + _0x52f078 + ';';
    }
};