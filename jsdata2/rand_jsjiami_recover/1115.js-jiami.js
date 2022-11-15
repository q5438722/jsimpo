const {buildDocsMeta} = require('../utils/utils');
const DEFAULT_Components_SET = new Set([
    'View',
    'ScrollView',
    'Swiper',
    'CoverImage',
    'CoverView',
    'Icon',
    'Text',
    'RichText',
    'Progress',
    'Button',
    'Checkbox',
    'Form',
    'Input',
    'Label',
    'Picker',
    'PickerView',
    'Radio',
    'RadioGroup',
    'CheckboxGroup',
    'Slider',
    'Switch',
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
    'OpenData',
    'WebView',
    'SwiperItem',
    'Provider',
    'MovableArea',
    'MovableView'
]);
const ERROR_MESSAGE = '不能在自定义组件中写 children';
module['exports'] = {
    'meta': { 'docs': buildDocsMeta(ERROR_MESSAGE, 'custom-component-children') },
    'create'(_0x298712) {
        function _0x277d61(_0x29951f) {
            return !((_0x29951f['type'] === 'JSXText' || _0x29951f['type'] === 'Literal') && _0x29951f['value']['trim']() === '');
        }
        return {
            'JSXElement'(_0x51498b) {
                const {name} = _0x51498b['openingElement']['name'];
                if (!DEFAULT_Components_SET['has'](name) && _0x51498b['children']['filter'](_0x277d61)['length'] > 0) {
                    _0x298712['report']({
                        'message': ERROR_MESSAGE,
                        'node': _0x51498b
                    });
                }
            }
        };
    }
};