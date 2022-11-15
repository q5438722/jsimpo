const _0x42ca = [
    'JSXText',
    'Literal',
    'trim',
    'openingElement',
    'has',
    'children',
    'filter',
    '2uGjHmF',
    '221399VPdNNH',
    '1208416dNKzgv',
    '1jqWlzI',
    '1270762gRjuxV',
    '250178ndwiCe',
    '1nNJFgY',
    '748696IfsCSJ',
    '7771VUVnpF',
    '19zKffAb',
    '868572dQWOln',
    'Swiper',
    'CoverImage',
    'CoverView',
    'Icon',
    'Text',
    'RichText',
    'Progress',
    'Button',
    'Form',
    'Input',
    'Label',
    'Picker',
    'PickerView',
    'Radio',
    'RadioGroup',
    'CheckboxGroup',
    'Textarea',
    'Navigator',
    'Audio',
    'Image',
    'Video',
    'Camera',
    'LivePlayer',
    'LivePusher',
    'Map',
    'Canvas',
    'WebView',
    'SwiperItem',
    'Provider',
    'MovableView',
    '不能在自定义组件中写\x20children',
    'exports',
    'custom-component-children',
    'type'
];
const _0x559634 = _0x2881;
(function (_0xb372ce, _0x466485) {
    const _0x3f6e93 = _0x2881;
    while (!![]) {
        try {
            const _0x43f9a3 = -parseInt(_0x3f6e93(0x64)) * -parseInt(_0x3f6e93(0x65)) + -parseInt(_0x3f6e93(0x66)) + parseInt(_0x3f6e93(0x67)) * parseInt(_0x3f6e93(0x68)) + -parseInt(_0x3f6e93(0x69)) * -parseInt(_0x3f6e93(0x6a)) + parseInt(_0x3f6e93(0x6b)) + -parseInt(_0x3f6e93(0x6c)) * -parseInt(_0x3f6e93(0x6d)) + -parseInt(_0x3f6e93(0x6e));
            if (_0x43f9a3 === _0x466485)
                break;
            else
                _0xb372ce['push'](_0xb372ce['shift']());
        } catch (_0x527286) {
            _0xb372ce['push'](_0xb372ce['shift']());
        }
    }
}(_0x42ca, 0xbf2f7));
function _0x2881(_0x40a9f3, _0xeca5e6) {
    return _0x2881 = function (_0x42ca55, _0x288151) {
        _0x42ca55 = _0x42ca55 - 0x64;
        let _0x27d5f7 = _0x42ca[_0x42ca55];
        return _0x27d5f7;
    }, _0x2881(_0x40a9f3, _0xeca5e6);
}
const {buildDocsMeta} = require('../utils/utils'), DEFAULT_Components_SET = new Set([
        'View',
        'ScrollView',
        _0x559634(0x6f),
        _0x559634(0x70),
        _0x559634(0x71),
        _0x559634(0x72),
        _0x559634(0x73),
        _0x559634(0x74),
        _0x559634(0x75),
        _0x559634(0x76),
        'Checkbox',
        _0x559634(0x77),
        _0x559634(0x78),
        _0x559634(0x79),
        _0x559634(0x7a),
        _0x559634(0x7b),
        _0x559634(0x7c),
        _0x559634(0x7d),
        _0x559634(0x7e),
        'Slider',
        'Switch',
        _0x559634(0x7f),
        _0x559634(0x80),
        _0x559634(0x81),
        _0x559634(0x82),
        _0x559634(0x83),
        _0x559634(0x84),
        _0x559634(0x85),
        _0x559634(0x86),
        _0x559634(0x87),
        _0x559634(0x88),
        'OpenData',
        _0x559634(0x89),
        _0x559634(0x8a),
        _0x559634(0x8b),
        'MovableArea',
        _0x559634(0x8c)
    ]), ERROR_MESSAGE = _0x559634(0x8d);
module[_0x559634(0x8e)] = {
    'meta': { 'docs': buildDocsMeta(ERROR_MESSAGE, _0x559634(0x8f)) },
    'create'(_0xc77203) {
        function _0x1cbb08(_0x5cf6e9) {
            const _0x112a1f = _0x2881;
            return !((_0x5cf6e9[_0x112a1f(0x90)] === _0x112a1f(0x91) || _0x5cf6e9[_0x112a1f(0x90)] === _0x112a1f(0x92)) && _0x5cf6e9['value'][_0x112a1f(0x93)]() === '');
        }
        return {
            'JSXElement'(_0x5aa1e5) {
                const _0x25aca8 = _0x2881, {name: _0x181cb9} = _0x5aa1e5[_0x25aca8(0x94)]['name'];
                !DEFAULT_Components_SET[_0x25aca8(0x95)](_0x181cb9) && _0x5aa1e5[_0x25aca8(0x96)][_0x25aca8(0x97)](_0x1cbb08)['length'] > 0x0 && _0xc77203['report']({
                    'message': ERROR_MESSAGE,
                    'node': _0x5aa1e5
                });
            }
        };
    }
};
