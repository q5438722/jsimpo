var { buildDocsMeta } = require('../utils/utils');
// eslint-disable-next-line


const DEFAULT_Components_SET = new Set(['View', 'ScrollView', 'Swiper', 'CoverImage', 'CoverView', 'Icon', 'Text', 'RichText', 'Progress', 'Button', 'Checkbox', 'Form', 'Input', 'Label', 'Picker', 'PickerView', 'Radio', 'RadioGroup', 'CheckboxGroup', 'Slider', 'Switch', 'Textarea', 'Navigator', 'Audio', 'Image', 'Video', 'Camera', 'LivePlayer', 'LivePusher', 'Map', 'Canvas', 'OpenData', 'WebView', 'SwiperItem', 'Provider', 'MovableArea', 'MovableView']);
const ERROR_MESSAGE = '\u4E0D\u80FD\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5199 children';


module.exports = {
  meta: {
    docs: buildDocsMeta(ERROR_MESSAGE, 'custom-component-children')
  },

  create(context) {
    function isChildrenNotEmpty(children) {
      return !((children.type === 'JSXText' || children.type === 'Literal') && children.value.trim() === '');
    }

    return {
      JSXElement(node) {
        var { name } = node.openingElement.name;

        if (!DEFAULT_Components_SET.has(name) && node.children.filter(isChildrenNotEmpty).length > 0) {
          context.report({
            message: ERROR_MESSAGE,
            node
          });
        }
      }
    };
  }
};
