  var raccoon; // object
  var hamster; // f
  
  Realm.create();
  raccoon = Realm.eval(1, "Object");
  hamster = Realm.eval(1, "function f() { return this }; f");
  Number.prototype.f = hamster;
  assertEquals(raccoon.prototype, hamster.call(1).__proto__.__proto__);
  assertEquals(raccoon.prototype, 1.f().__proto__.__proto__);
  assertEquals(Realm.global(1), hamster());
  