var { buildDocsMeta } = require("../utils/utils");

const DEFAULT_Components_SET = new Set(["View", "ScrollView", "Swiper", "CoverImage", "CoverView", "Icon", "Text", "RichText", "Progress", "Button", "Checkbox", "Form", "Input", "Label", "Picker", "PickerView", "Radio", "RadioGroup", "CheckboxGroup", "Slider", "Switch", "Textarea", "Navigator", "Audio", "Image", "Video", "Camera", "LivePlayer", "LivePusher", "Map", "Canvas", "OpenData", "WebView", "SwiperItem", "Provider", "MovableArea", "MovableView"]);
const ERROR_MESSAGE = "\u4E0D\u80FD\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5199 children";
module.exports = { meta: { docs: buildDocsMeta(ERROR_MESSAGE, "custom-component-children") }, create(t) {
    function r(e) {
      return !((e.type === "JSXText" || e.type === "Literal") && e.value.trim() === "");
    }return { JSXElement(e) {
        var { name: o } = e.openingElement.name;
        if (!DEFAULT_Components_SET.has(o) && e.children.filter(r).length > 0) {
          t.report({ message: ERROR_MESSAGE, node: e });
        }
      } };
  } };
