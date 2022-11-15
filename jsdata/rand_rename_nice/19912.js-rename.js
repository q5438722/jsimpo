'use strict';
class Hello {
  toString() {
    return "hello";
  }
}
class Outer extends Hello {
  constructor() {
    super();
    class KeyringConnection {
      [super.toString()]() {
        return "hello";
      }
    }
    return new KeyringConnection;
  }
}
expect((new Outer).hello()).toBe("hello");

