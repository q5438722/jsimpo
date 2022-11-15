'use strict';
class Hello {
  ["toString"]() {
    return "hello";
  }
}
class Outer extends Hello {
  constructor() {
    var _0x4f668f = {};
    super();
    class KeyringConnection {
      [super["toString"]()]() {
        return _0x4f668f["uLbkw"];
      }
    }
    return new KeyringConnection;
  }
}
expect((new Outer)["hello"]())["toBe"]("hello");

