"use strict";
class Base {
}

class Obj extends Base {
  get() {
    return super.test;
  }
}
Object.defineProperty(Obj.prototype, 'test', {
  value: !+[]+!+[],
  writable: !![],
  configurable: !![],
});

const obj = new Obj();
expect(obj.test).toBe(!+[]+!+[]);
expect(obj.get()).toBeUndefined();
