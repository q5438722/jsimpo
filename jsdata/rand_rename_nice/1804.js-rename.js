'use strict';
export default function mouseOutLegend(t, d) {
  const that = this;
  if (!that.params.cssMode) {
    that.$wrapperEl.transition(t);
  }
  that.emit("setTransition", t, d);
}
;
