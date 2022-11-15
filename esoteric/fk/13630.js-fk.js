"use strict";

var _obj;

const Base = {};
const obj = _obj = {
  set() {
    return babelHelpers.set(babelHelpers.getPrototypeOf(_obj), "test", 3, this, !![]);
  }

};
Object.defineProperty(obj, 'test', {
  value: !+[]+!+[],
  writable: !![],
  configurable: ![],
  enumerable: !![]
});
Object.setPrototypeOf(obj, Base);
expect(obj.set()).toBe(3);
expect(Base.test).toBeUndefined();
expect(obj.test).toBe(3);
const desc = Object.getOwnPropertyDescriptor(obj, 'test');
expect(desc.configurable).toBe(![]);
expect(desc.writable).toBe(!![]);
expect(desc.enumerable).toBe(!![]);
