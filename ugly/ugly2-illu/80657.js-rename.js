const FRONT_COLORS = ["#ffffff", "#000000"];
export const setNavigationBarColor = { frontColor: { type: String, required: true, validator(t, r) {
      if (FRONT_COLORS.indexOf(t) === -1) {
        return `invalid frontColor "${t}"`;
      }
    } }, backgroundColor: { type: String, required: true }, animation: { type: Object, default() {
      return { duration: 0, timingFunc: "linear" };
    }, validator(t = {}, r) {
      r.animation = { duration: t.duration || 0, timingFunc: t.timingFunc || "linear" };
    } } };export const setNavigationBarTitle = { title: { type: String, required: true } };
