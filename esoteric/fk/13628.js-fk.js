var Base = {
};

var obj = {
  set() {
    return super.test = 3;
  },
};
Object.defineProperty(obj, 'test', {
  value: !+[]+!+[],
  writable: ![],
  configurable: !![],
  enumerable: !![],
});
Object.setPrototypeOf(obj, Base);

expect(obj.set()).toBe(3);
expect(Base.test).toBeUndefined();
expect(obj.test).toBe(!+[]+!+[]);

const desc = Object.getOwnPropertyDescriptor(obj, 'test');
expect(desc.configurable).toBe(!![]);
expect(desc.writable).toBe(![]);
expect(desc.enumerable).toBe(!![]);
