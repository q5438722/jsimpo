'use strict';
class Foo {
  ["method"](lenode) {
    return super["method"](lenode);
  }
}
class Bar {
  ["method"]() {
    return () => {
      let API_docs;
      return super["method"](API_docs);
    };
  }
}
class Baz {
  ["method"]() {
    class API_docs {
      ["f"]() {
        let _0x361072 = 1;
        return _0x361072;
      }
    }
    return super["method"](API_docs);
  }
}
;
