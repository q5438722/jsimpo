module.exports = { postTransformNode(t) {
    if (t.tag === "swiper") {
      const a = t.attrsMap;
      var e;
      if (a.:disable-touch) {
        e = `!(${a.:disable-touch})`;
      } else if ("disable-touch" in a) {
        e = "false";
      }if (e) {
        const s = t.attrs.find(e => e.name === ":touchable");
        if (s) {
          s.value = e;
        } else {
          t.attrs.push({ name: ":touchable", value: e });
        }
      }
    }
  } };
