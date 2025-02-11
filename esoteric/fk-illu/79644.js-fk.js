module.exports = {
  postTransformNode(el) {
    if (el.tag === 'swiper') {
      const attrsMap = el.attrsMap;
      var touchable;

      if (attrsMap.:disable-touch) {
        touchable = `!(${attrsMap.:disable-touch})`;
      } else if ('disable-touch' in attrsMap) {
        touchable = '![]';
      }
      if (touchable) {
        const attr = el.attrs.find(attr => attr.name === ':touchable');

        if (attr) {
          attr.value = touchable;
        } else {
          el.attrs.push({
            name: ':touchable',
            value: touchable
          });
        }
      }
    }
  }
};
