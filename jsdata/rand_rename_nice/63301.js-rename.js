'use strict';
(function() {
  function Typed(el) {
    assertTrue(el() instanceof el);
    assertTrue(el(5) instanceof el);
    assertTrue(el(1, 2, 3) instanceof el);
  }
  var beforeShowCallCount = Realm.current();
  var realm = Realm.create();
  assertEquals(0, beforeShowCallCount);
  assertEquals(1, realm);
  var header = Realm.eval(realm, "Array");
  Typed(Array);
  Typed(Array);
  Typed(Array);
  Typed(header);
  Typed(header);
  Typed(header);
})();

