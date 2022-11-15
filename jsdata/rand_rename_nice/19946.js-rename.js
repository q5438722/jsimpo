'use strict';
class Foo extends Bar {
  constructor() {
    const s = () => {
      return this;
    };
    s();
    super();
  }
}
;
