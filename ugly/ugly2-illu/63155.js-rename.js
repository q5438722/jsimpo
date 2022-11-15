Realm.create();const object = Realm.eval(1, "Object");
const f = Realm.eval(1, "function f() { return this }; f");
Number.prototype.f = f;const number = 1;
assertEquals(object.prototype, f.call(number).__proto__.__proto__);assertEquals(object.prototype, undefined().__proto__.__proto__);assertEquals(Realm.global(1), f());
