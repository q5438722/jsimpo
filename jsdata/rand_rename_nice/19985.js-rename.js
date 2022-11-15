'use strict';
class Foo {
  method(e) {
    return super.method(e);
  }
}
class Bar {
  method() {
    return () => {
      let currentOneTimePassword;
      return super.method(currentOneTimePassword);
    };
  }
}
class Baz {
  method() {
    class currentOneTimePassword {
      f() {
        let resultToDisplay = 1;
        return resultToDisplay;
      }
    }
    return super.method(currentOneTimePassword);
  }
}
;
