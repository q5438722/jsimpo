'use strict';
module.exports = {
  postTransformNode(el) {
    if (el.tag === "swiper") {
      const a = el.attrsMap;
      let e;
      if (a[":disable-touch"]) {
        e = `!(${a[":disable-touch"]})`;
      } else {
        if ("disable-touch" in a) {
          e = "false";
        }
      }
      if (e) {
        const errorTextElement = el.attrs.find((engineDiscovery) => {
          return engineDiscovery.name === ":touchable";
        });
        if (errorTextElement) {
          errorTextElement.value = e;
        } else {
          el.attrs.push({
            name : ":touchable",
            value : e
          });
        }
      }
    }
  }
};

