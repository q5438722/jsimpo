const _0x3f96 = ['Form', 'Input', 'Label', 'Picker', 'PickerView', 'Radio', 'RadioGroup', 'CheckboxGroup', 'Slider', 'Switch', 'Textarea', 'Navigator', 'Audio', 'Image', 'Video', 'LivePlayer', 'LivePusher', 'OpenData', 'WebView', 'SwiperItem', 'Provider', 'MovableView', '\u4E0D\u80FD\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5199 children', 'exports', 'JSXText', 'Literal', 'gZRkb', 'FFekj', 'type', 'HZACq', 'value', 'trim', 'openingElement', 'name', 'JtgIG', 'children', 'report', '30724haagiR', '1lFnVGN', '48492PWXxLP', '212375bIvfmP', '106727rtdBuR', '222509AMOMXI', '156207GzCkSR', '530804NiHAkQ', '../utils/utils', 'ScrollView', 'Swiper', 'CoverImage', 'CoverView', 'Icon', 'Text', 'RichText', 'Progress', 'Button', 'Checkbox'];
const _0x2efc20 = _0x20da;

(function (_0x504247, _0x221a6d) {
    const _0x266352 = _0x20da;

    while (true) {
        try {
            const _0x9108ff = parseInt(_0x266352(0x129)) * parseInt(_0x266352(0x12a)) + parseInt(_0x266352(0x12b)) + -parseInt(_0x266352(0x12c)) + -parseInt(_0x266352(0x12d)) + -parseInt(_0x266352(0x12e)) + parseInt(_0x266352(0x12f)) + parseInt(_0x266352(0x130));

            if (_0x9108ff === _0x221a6d) break;else _0x504247.push(_0x504247.shift());
        } catch (_0x4a61e7) {
            _0x504247.push(_0x504247.shift());
        }
    }
})(_0x3f96, 224616);
function _0x20da(_0x16b933, _0x119080) {
    return _0x20da = function (_0x1b8002, _0x24efbe) {
        _0x1b8002 = _0x1b8002 - 297;
        const _0x5331aa = _0x3f96[_0x1b8002];

        return _0x5331aa;
    }, _0x20da(_0x16b933, _0x119080);
}

var { buildDocsMeta } = require(_0x2efc20(0x131));

const DEFAULT_Components_SET = new Set(['View', _0x2efc20(0x132), _0x2efc20(0x133), _0x2efc20(0x134), _0x2efc20(0x135), _0x2efc20(0x136), _0x2efc20(0x137), _0x2efc20(0x138), _0x2efc20(0x139), _0x2efc20(0x13a), _0x2efc20(0x13b), _0x2efc20(0x13c), _0x2efc20(0x13d), _0x2efc20(0x13e), _0x2efc20(0x13f), _0x2efc20(0x140), _0x2efc20(0x141), _0x2efc20(0x142), _0x2efc20(0x143), _0x2efc20(0x144), _0x2efc20(0x145), _0x2efc20(0x146), _0x2efc20(0x147), _0x2efc20(0x148), _0x2efc20(0x149), _0x2efc20(0x14a), 'Camera', _0x2efc20(0x14b), _0x2efc20(0x14c), 'Map', 'Canvas', _0x2efc20(0x14d), _0x2efc20(0x14e), _0x2efc20(0x14f), _0x2efc20(0x150), 'MovableArea', _0x2efc20(0x151)]);

const ERROR_MESSAGE = _0x2efc20(0x152);

module[_0x2efc20(0x153)] = {
    'meta': { 'docs': buildDocsMeta(ERROR_MESSAGE, 'custom-component-children') },
    'create'(_0x363fe3) {
        const _0x5f4a91 = _0x2efc20;
        const _0x1afc5a = {
            'gZRkb': function (_0x3885d5, _0xbf1c73) {
                return _0x3885d5 === _0xbf1c73;
            },
            'FFekj': _0x5f4a91(0x154),
            'HZACq': _0x5f4a91(0x155),
            'JtgIG': function (_0x149fae, _0x5c60b2) {
                return _0x149fae > _0x5c60b2;
            }
        };

        function _0x9674ef(_0x500dd2) {
            const _0x44929e = _0x5f4a91;

            return !((_0x1afc5a[_0x44929e(0x156)](_0x500dd2.type, _0x1afc5a[_0x44929e(0x157)]) || _0x1afc5a[_0x44929e(0x156)](_0x500dd2[_0x44929e(0x158)], _0x1afc5a[_0x44929e(0x159)])) && _0x1afc5a.gZRkb(_0x500dd2[_0x44929e(0x15a)][_0x44929e(0x15b)](), ''));
        }
        return {
            'JSXElement'(_0x107db3) {
                const _0x18537f = _0x5f4a91;

                var { name: _0x3f7b1f } = _0x107db3[_0x18537f(0x15c)][_0x18537f(0x15d)];

                !DEFAULT_Components_SET.has(_0x3f7b1f) && _0x1afc5a[_0x18537f(0x15e)](_0x107db3[_0x18537f(0x15f)].filter(_0x9674ef).length, 0) && _0x363fe3[_0x18537f(0x160)]({
                    'message': ERROR_MESSAGE,
                    'node': _0x107db3
                });
            }
        };
    }
};
