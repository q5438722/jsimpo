'use strict';
var threw = ![];
try {
  var obj = new Function["__proto__"];
} catch (e) {
  assertInstanceof(e, TypeError);
  threw = !![];
}
assertTrue(threw);

