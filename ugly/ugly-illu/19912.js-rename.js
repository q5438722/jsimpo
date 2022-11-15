"use strict";
class Hello {
  toString() {
    return "hello";
  }
}class Outer extends Hello {
  constructor() {
    super();class e {
      [super.toString()]() {
        return "hello";
      }
    }return new e();
  }
}expect(new Outer().hello()).toBe("hello");
