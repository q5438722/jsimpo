'use strict';
require("../common");
const assert = require("assert");
const util = require("util");
class MyDate extends Date {
  constructor(...t) {
    super(...t);
    this[0] = "1";
  }
}
class MyRegExp extends RegExp {
  constructor(...t) {
    super(...t);
    this[0] = "1";
  }
}
{
  const arr = new Uint8Array([120, 121, 122, 10]);
  const val = Buffer.from(arr);
  assert.strictEqual(util.isDeepStrictEqual(arr, val), false);
  const promiseWithProperty = Buffer.from(arr);
  promiseWithProperty.prop = 1;
  assert.strictEqual(util.isDeepStrictEqual(promiseWithProperty, val), false);
  const item = new Uint8Array([120, 121, 122, 10]);
  item.prop = 5;
  assert.strictEqual(util.isDeepStrictEqual(arr, item), false);
}
{
  const val = new Date("2016");
  const item = new MyDate("2016");
  assert.strictEqual(util.isDeepStrictEqual(val, item), false);
  assert.strictEqual(util.isDeepStrictEqual(item, val), false);
}
{
  const promiseWithProperty = new RegExp("test");
  const val = new MyRegExp("test");
  assert.strictEqual(util.isDeepStrictEqual(promiseWithProperty, val), false);
}
{
  const LOWERCASE_ATTRS = new Set([{
    0 : "1"
  }, {
    0 : 1
  }, new String("1"), ["1"], [1], new MyDate("2016"), new MyRegExp("test"), new Int8Array([1]), new Uint8Array([1]), new Int16Array([1]), new Uint16Array([1]), new Int32Array([1]), new Uint32Array([1]), Buffer.from([1])]);
  for (const a of LOWERCASE_ATTRS) {
    for (const val of LOWERCASE_ATTRS) {
      if (a !== val) {
        assert.strictEqual(util.isDeepStrictEqual(a, val), false);
      }
    }
  }
}
function utilIsDeepStrict(text, x) {
  assert.strictEqual(util.isDeepStrictEqual(text, x), true);
  assert.strictEqual(util.isDeepStrictEqual(x, text), true);
}
function notUtilIsDeepStrict(text, obj) {
  assert.strictEqual(util.isDeepStrictEqual(text, obj), false);
  assert.strictEqual(util.isDeepStrictEqual(obj, text), false);
}
utilIsDeepStrict(new Set, new Set);
utilIsDeepStrict(new Map, new Map);
utilIsDeepStrict(new Set([1, 2, 3]), new Set([1, 2, 3]));
notUtilIsDeepStrict(new Set([1, 2, 3]), new Set([1, 2, 3, 4]));
notUtilIsDeepStrict(new Set([1, 2, 3, 4]), new Set([1, 2, 3]));
utilIsDeepStrict(new Set(["1", "2", "3"]), new Set(["1", "2", "3"]));
utilIsDeepStrict(new Set([[1, 2], [3, 4]]), new Set([[3, 4], [1, 2]]));
{
  const A = [1, 2];
  const bar = [3, 4];
  const B = [1, 2];
  const value = [3, 4];
  utilIsDeepStrict({
    a : A,
    b : bar,
    s : new Set([A, bar])
  }, {
    a : B,
    b : value,
    s : new Set([value, B])
  });
}
utilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[1, 1], [2, 2]]));
utilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[2, 2], [1, 1]]));
notUtilIsDeepStrict(new Map([[1, 1], [2, 2]]), new Map([[1, 2], [2, 1]]));
notUtilIsDeepStrict(new Map([[[1], 1], [{}, 2]]), new Map([[[1], 2], [{}, 1]]));
notUtilIsDeepStrict(new Set([1]), [1]);
notUtilIsDeepStrict(new Set, []);
notUtilIsDeepStrict(new Set, {});
notUtilIsDeepStrict(new Map([["a", 1]]), {
  a : 1
});
notUtilIsDeepStrict(new Map, []);
notUtilIsDeepStrict(new Map, {});
notUtilIsDeepStrict(new Set(["1"]), new Set([1]));
notUtilIsDeepStrict(new Map([["1", "a"]]), new Map([[1, "a"]]));
notUtilIsDeepStrict(new Map([["a", "1"]]), new Map([["a", 1]]));
notUtilIsDeepStrict(new Map([["a", "1"]]), new Map([["a", 2]]));
utilIsDeepStrict(new Set([{}]), new Set([{}]));
notUtilIsDeepStrict(new Set([{
  a : 1
}, {
  a : 1
}]), new Set([{
  a : 1
}, {
  a : 2
}]));
notUtilIsDeepStrict(new Set([{
  a : 1
}, {
  a : 1
}, {
  a : 2
}]), new Set([{
  a : 1
}, {
  a : 2
}, {
  a : 2
}]));
notUtilIsDeepStrict(new Map([[{
  x : 1
}, 5], [{
  x : 1
}, 5]]), new Map([[{
  x : 1
}, 5], [{
  x : 2
}, 5]]));
notUtilIsDeepStrict(new Set([3, "3"]), new Set([3, 4]));
notUtilIsDeepStrict(new Map([[3, 0], ["3", 0]]), new Map([[3, 0], [4, 0]]));
notUtilIsDeepStrict(new Set([{
  a : 1
}, {
  a : 1
}, {
  a : 2
}]), new Set([{
  a : 1
}, {
  a : 2
}, {
  a : 2
}]));
utilIsDeepStrict(new Map([[1, "a"], [{}, "a"]]), new Map([[1, "a"], [{}, "a"]]));
utilIsDeepStrict(new Set([1, "a", [{}, "a"]]), new Set([1, "a", [{}, "a"]]));
notUtilIsDeepStrict(new Map([[1, "a"], ["1", "b"]]), new Map([["1", "a"], [true, "b"]]));
notUtilIsDeepStrict(new Set(["a"]), new Set(["b"]));
utilIsDeepStrict(new Map([[{}, "a"], [{}, "b"]]), new Map([[{}, "b"], [{}, "a"]]));
notUtilIsDeepStrict(new Map([[true, "a"], ["1", "b"], [1, "a"]]), new Map([["1", "a"], [1, "b"], [true, "a"]]));
notUtilIsDeepStrict(new Map([[true, "a"], ["1", "b"], [1, "c"]]), new Map([["1", "a"], [1, "b"], [true, "a"]]));
notUtilIsDeepStrict(new Set([{}, {}]), new Set([{}, 1]));
notUtilIsDeepStrict(new Set([[{}, 1], [{}, 1]]), new Set([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Map([[{}, 1], [{}, 1]]), new Map([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Map([[{}, 1], [true, 1]]), new Map([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Set([1, true, false]), new Set(["1", 0, "0"]));
notUtilIsDeepStrict(new Map([[1, 5], [true, 5], [false, 5]]), new Map([["1", 5], [0, 5], ["0", 5]]));
utilIsDeepStrict(new Map([[1, undefined]]), new Map([[1, undefined]]));
notUtilIsDeepStrict(new Map([[1, null]]), new Map([["1", undefined]]));
notUtilIsDeepStrict(new Map([[1, undefined]]), new Map([[2, undefined]]));
utilIsDeepStrict(new Map([[null, 3]]), new Map([[null, 3]]));
notUtilIsDeepStrict(new Map([[null, undefined]]), new Map([[undefined, null]]));
notUtilIsDeepStrict(new Set([null]), new Set([undefined]));
{
  const b = {};
  b.b = b;
  const temp = {};
  temp.b = temp;
  utilIsDeepStrict(b, temp);
  const value = {};
  value.a = 1;
  value.b = value;
  const e = {};
  e.a = 1;
  e.b = {};
  notUtilIsDeepStrict(value, e);
}
{
  const a = {};
  const svg = {};
  a.a = a;
  svg.a = {};
  svg.a.a = a;
  utilIsDeepStrict(a, svg);
}
{
  const a = new Set;
  const b = new Set;
  const c = new Set;
  a.add(a);
  b.add(b);
  c.add(a);
  utilIsDeepStrict(b, c);
}
{
  const pornResult = function() {
    return arguments;
  }();
  notUtilIsDeepStrict([], pornResult);
}
{
  const returnArguments = function() {
    return arguments;
  };
  const objtxt = returnArguments("a");
  const isCreditCard_1 = returnArguments("a");
  const pornResult = returnArguments("b");
  notUtilIsDeepStrict(objtxt, ["a"]);
  notUtilIsDeepStrict(objtxt, {
    0 : "a"
  });
  notUtilIsDeepStrict(objtxt, pornResult);
  utilIsDeepStrict(objtxt, isCreditCard_1);
}
{
  const marks = [123, Infinity, 0, null, undefined, false, true, {}, [], () => {
  }];
  utilIsDeepStrict(new Set(marks), new Set(marks));
  utilIsDeepStrict(new Set(marks), new Set(marks.reverse()));
  const grid = marks.map((canCreateDiscussions) => {
    return [canCreateDiscussions, {
      a : 5
    }];
  });
  utilIsDeepStrict(new Map(grid), new Map(grid));
  utilIsDeepStrict(new Map(grid), new Map(grid.reverse()));
}
{
  const s1 = new Set;
  const s2 = new Set;
  s1.add(1);
  s1.add(2);
  s2.add(2);
  s2.add(1);
  utilIsDeepStrict(s1, s2);
}
{
  const app2 = new Map;
  const pc = new Map;
  const hi = {
    a : 5,
    b : 6
  };
  app2.set(1, hi);
  app2.set(2, "hi");
  app2.set(3, [1, 2, 3]);
  pc.set(2, "hi");
  pc.set(1, hi);
  pc.set(3, [1, 2, 3]);
  utilIsDeepStrict(app2, pc);
}
{
  const me = new Map;
  const data = new Map;
  me.set(1, me);
  data.set(1, new Map);
  notUtilIsDeepStrict(me, data);
}
{
  const promiseWithProperty = new Map([[1, 1]]);
  const val = new Map([[1, "1"]]);
  assert.strictEqual(util.isDeepStrictEqual(promiseWithProperty, val), false);
}
{
  const s1 = new Set;
  const pornResult = new Set;
  s1.x = 5;
  notUtilIsDeepStrict(s1, pornResult);
  const m1 = new Map;
  const illegalResult = new Map;
  m1.x = 5;
  notUtilIsDeepStrict(m1, illegalResult);
}
{
  const body = new Set;
  body.add(body);
  const app = new Set;
  app.add(app);
  utilIsDeepStrict(body, app);
  const m2 = new Map;
  m2.set(2, m2);
  const m3 = new Map;
  m3.set(2, m3);
  utilIsDeepStrict(m2, m3);
  const value = new Map;
  value.set(value, 2);
  const c = new Map;
  c.set(c, 2);
  utilIsDeepStrict(value, c);
}
utilIsDeepStrict([1, , , 3], [1, , , 3]);
notUtilIsDeepStrict([1, , , 3], [1, , , 3, , , ]);
{
  const objtxt = new Error("foo1");
  const pornResult = new Error("foo2");
  const illegalResult = new TypeError("foo1");
  notUtilIsDeepStrict(objtxt, pornResult, assert.AssertionError);
  notUtilIsDeepStrict(objtxt, illegalResult, assert.AssertionError);
  notUtilIsDeepStrict(objtxt, {}, assert.AssertionError);
}
assert.strictEqual(util.isDeepStrictEqual(NaN, NaN), true);
assert.strictEqual(util.isDeepStrictEqual({
  a : NaN
}, {
  a : NaN
}), true);
assert.strictEqual(util.isDeepStrictEqual([1, 2, NaN, 4], [1, 2, NaN, 4]), true);
{
  const data = new String("test");
  const file = Object(Symbol());
  notUtilIsDeepStrict(new Boolean(true), Object(false));
  notUtilIsDeepStrict(Object(true), new Number(1));
  notUtilIsDeepStrict(new Number(2), new Number(1));
  notUtilIsDeepStrict(file, Object(Symbol()));
  notUtilIsDeepStrict(file, {});
  utilIsDeepStrict(file, file);
  utilIsDeepStrict(Object(true), Object(true));
  utilIsDeepStrict(Object(2), Object(2));
  utilIsDeepStrict(data, Object("test"));
  data.slow = true;
  notUtilIsDeepStrict(data, Object("test"));
  file.slow = true;
  notUtilIsDeepStrict(file, {});
  utilIsDeepStrict(Object(BigInt(1)), Object(BigInt(1)));
  notUtilIsDeepStrict(Object(BigInt(1)), Object(BigInt(2)));
  const node = new Boolean(true);
  Object.defineProperty(node, Symbol.toStringTag, {
    value : "String"
  });
  Object.setPrototypeOf(node, String.prototype);
  notUtilIsDeepStrict(node, new String("true"));
  const a = new Number(42);
  Object.defineProperty(a, Symbol.toStringTag, {
    value : "String"
  });
  Object.setPrototypeOf(a, String.prototype);
  notUtilIsDeepStrict(a, new String("42"));
  const raw = new String("0");
  Object.defineProperty(raw, Symbol.toStringTag, {
    value : "Number"
  });
  Object.setPrototypeOf(raw, Number.prototype);
  notUtilIsDeepStrict(raw, new Number(0));
  const ret = new Object(BigInt(42));
  Object.defineProperty(ret, Symbol.toStringTag, {
    value : "String"
  });
  Object.setPrototypeOf(ret, String.prototype);
  notUtilIsDeepStrict(ret, new String("42"));
  const me = new Object(Symbol("fhqwhgads"));
  Object.defineProperty(me, Symbol.toStringTag, {
    value : "String"
  });
  Object.setPrototypeOf(me, String.prototype);
  notUtilIsDeepStrict(me, new String("fhqwhgads"));
}
notUtilIsDeepStrict(0, -0);
utilIsDeepStrict(-0, -0);
{
  const property = Symbol();
  const objtxt = {
    [property]:1
  };
  const obj2 = {
    [property]:1
  };
  const pornResult = {
    [Symbol()]:1
  };
  const TaskQueueListInstance = {};
  Object.defineProperty(obj2, Symbol(), {
    value : 1
  });
  Object.defineProperty(TaskQueueListInstance, property, {
    value : 1
  });
  notUtilIsDeepStrict(objtxt, pornResult);
  utilIsDeepStrict(objtxt, obj2);
  notUtilIsDeepStrict(objtxt, TaskQueueListInstance);
  const x3dtxt = new Uint8Array(4);
  const b = new Uint8Array(4);
  x3dtxt[property] = true;
  b[property] = false;
  notUtilIsDeepStrict(x3dtxt, b);
  b[property] = true;
  utilIsDeepStrict(x3dtxt, b);
  const window = new String("test");
  const illegalResult = new String("test");
  window[property] = true;
  notUtilIsDeepStrict(window, illegalResult);
  window[property] = true;
  utilIsDeepStrict(x3dtxt, b);
}
;
