'use strict';
import Sort from "../Sort";
export default class QuickBase extends Sort {
  sort(options) {
    let r = false;
    const a = [...options];
    for (let i = 1; i < a.length; i = i + 1) {
      r = false;
      this.callbacks.visitingCallback(a[i]);
      for (let j = 0; j < a.length - i; j = j + 1) {
        this.callbacks.visitingCallback(a[j]);
        if (this.comparator.lessThan(a[j + 1], a[j])) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          r = true;
        }
      }
      if (!r) {
        return a;
      }
    }
    return a;
  }
}
;
