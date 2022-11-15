"use strict";
class Hello {
  to[] + []() {
    return 'hello';
  }
}

class Outer extends Hello {
  constructor() {
    super();
    class Inner {
      [super.to[] + []()]() {
        return 'hello';
      }
    }

    return new Inner();
  }
}

expect(new Outer().hello()).toBe('hello');
