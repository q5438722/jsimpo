'use strict';
require("../common");
const assert = require("assert");
const util = require("util");
class MyDate extends Date {
  constructor(..._0x131def) {
    super(..._0x131def);
    this[0] = "1";
  }
}
class MyRegExp extends RegExp {
  constructor(..._0x334a34) {
    super(..._0x334a34);
    this[0] = "1";
  }
}
{
  const data = new Uint8Array([120, 121, 122, 10]);
  const nb1 = Buffer["from"](data);
  assert["strictEqual"](util["isDeepStrictEqual"](data, nb1), ![]);
  const resources = Buffer["from"](data);
  resources["prop"] = 1;
  assert["strictEqual"](util["isDeepStrictEqual"](resources, nb1), ![]);
  const model = new Uint8Array([120, 121, 122, 10]);
  model["prop"] = 5;
  assert["strictEqual"](util["isDeepStrictEqual"](data, model), ![]);
}
{
  const nb1 = new Date("2016");
  const Pframe = new MyDate("2016");
  assert["strictEqual"](util["isDeepStrictEqual"](nb1, Pframe), ![]);
  assert["strictEqual"](util["isDeepStrictEqual"](Pframe, nb1), ![]);
}
{
  const data = new RegExp("test");
  const nb1 = new MyRegExp("test");
  assert["strictEqual"](util["isDeepStrictEqual"](data, nb1), ![]);
}
{
  const deps = new Set([{
    0 : "1"
  }, {
    0 : 1
  }, new String("1"), ["1"], [1], new MyDate("2016"), new MyRegExp("test"), new Int8Array([1]), new Uint8Array([1]), new Int16Array([1]), new Uint16Array([1]), new Int32Array([1]), new Uint32Array([1]), Buffer["from"]([1])]);
  for (const data of deps) {
    for (const depPkgUri of deps) {
      if (data !== depPkgUri) {
        assert["strictEqual"](util["isDeepStrictEqual"](data, depPkgUri), ![]);
      }
    }
  }
}
function utilIsDeepStrict(obj, data) {
  assert["strictEqual"](util["isDeepStrictEqual"](obj, data), !![]);
  assert["strictEqual"](util["isDeepStrictEqual"](data, obj), !![]);
}
function notUtilIsDeepStrict(obj, data) {
  assert["strictEqual"](util["isDeepStrictEqual"](obj, data), ![]);
  assert["strictEqual"](util["isDeepStrictEqual"](data, obj), ![]);
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
    "a" : A,
    "b" : bar,
    "s" : new Set([A, bar])
  }, {
    "a" : B,
    "b" : value,
    "s" : new Set([value, B])
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
  "a" : 1
});
notUtilIsDeepStrict(new Map, []);
notUtilIsDeepStrict(new Map, {});
notUtilIsDeepStrict(new Set(["1"]), new Set([1]));
notUtilIsDeepStrict(new Map([["1", "a"]]), new Map([[1, "a"]]));
notUtilIsDeepStrict(new Map([["a", "1"]]), new Map([["a", 1]]));
notUtilIsDeepStrict(new Map([["a", "1"]]), new Map([["a", 2]]));
utilIsDeepStrict(new Set([{}]), new Set([{}]));
notUtilIsDeepStrict(new Set([{
  "a" : 1
}, {
  "a" : 1
}]), new Set([{
  "a" : 1
}, {
  "a" : 2
}]));
notUtilIsDeepStrict(new Set([{
  "a" : 1
}, {
  "a" : 1
}, {
  "a" : 2
}]), new Set([{
  "a" : 1
}, {
  "a" : 2
}, {
  "a" : 2
}]));
notUtilIsDeepStrict(new Map([[{
  "x" : 1
}, 5], [{
  "x" : 1
}, 5]]), new Map([[{
  "x" : 1
}, 5], [{
  "x" : 2
}, 5]]));
notUtilIsDeepStrict(new Set([3, "3"]), new Set([3, 4]));
notUtilIsDeepStrict(new Map([[3, 0], ["3", 0]]), new Map([[3, 0], [4, 0]]));
notUtilIsDeepStrict(new Set([{
  "a" : 1
}, {
  "a" : 1
}, {
  "a" : 2
}]), new Set([{
  "a" : 1
}, {
  "a" : 2
}, {
  "a" : 2
}]));
utilIsDeepStrict(new Map([[1, "a"], [{}, "a"]]), new Map([[1, "a"], [{}, "a"]]));
utilIsDeepStrict(new Set([1, "a", [{}, "a"]]), new Set([1, "a", [{}, "a"]]));
notUtilIsDeepStrict(new Map([[1, "a"], ["1", "b"]]), new Map([["1", "a"], [!![], "b"]]));
notUtilIsDeepStrict(new Set(["a"]), new Set(["b"]));
utilIsDeepStrict(new Map([[{}, "a"], [{}, "b"]]), new Map([[{}, "b"], [{}, "a"]]));
notUtilIsDeepStrict(new Map([[!![], "a"], ["1", "b"], [1, "a"]]), new Map([["1", "a"], [1, "b"], [!![], "a"]]));
notUtilIsDeepStrict(new Map([[!![], "a"], ["1", "b"], [1, "c"]]), new Map([["1", "a"], [1, "b"], [!![], "a"]]));
notUtilIsDeepStrict(new Set([{}, {}]), new Set([{}, 1]));
notUtilIsDeepStrict(new Set([[{}, 1], [{}, 1]]), new Set([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Map([[{}, 1], [{}, 1]]), new Map([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Map([[{}, 1], [!![], 1]]), new Map([[{}, 1], [1, 1]]));
notUtilIsDeepStrict(new Set([1, !![], ![]]), new Set(["1", 0, "0"]));
notUtilIsDeepStrict(new Map([[1, 5], [!![], 5], [![], 5]]), new Map([["1", 5], [0, 5], ["0", 5]]));
utilIsDeepStrict(new Map([[1, undefined]]), new Map([[1, undefined]]));
notUtilIsDeepStrict(new Map([[1, null]]), new Map([["1", undefined]]));
notUtilIsDeepStrict(new Map([[1, undefined]]), new Map([[2, undefined]]));
utilIsDeepStrict(new Map([[null, 3]]), new Map([[null, 3]]));
notUtilIsDeepStrict(new Map([[null, undefined]]), new Map([[undefined, null]]));
notUtilIsDeepStrict(new Set([null]), new Set([undefined]));
{
  const a = {};
  a["b"] = a;
  const stuff = {};
  stuff["b"] = stuff;
  utilIsDeepStrict(a, stuff);
  const o = {};
  o["a"] = 1;
  o["b"] = o;
  const e = {};
  e["a"] = 1;
  e["b"] = {};
  notUtilIsDeepStrict(o, e);
}
{
  const a = {};
  const data = {};
  a["a"] = a;
  data["a"] = {};
  data["a"]["a"] = a;
  utilIsDeepStrict(a, data);
}
{
  const value = new Set;
  const result = new Set;
  const nodes = new Set;
  value["add"](value);
  result["add"](result);
  nodes["add"](value);
  utilIsDeepStrict(result, nodes);
}
{
  const falseySection = function() {
    return arguments;
  }();
  notUtilIsDeepStrict([], falseySection);
}
{
  const returnArguments = function() {
    return arguments;
  };
  const pornResult = returnArguments("a");
  const falseySection = returnArguments("a");
  const $donutData = returnArguments("b");
  notUtilIsDeepStrict(pornResult, ["a"]);
  notUtilIsDeepStrict(pornResult, {
    0 : "a"
  });
  notUtilIsDeepStrict(pornResult, $donutData);
  utilIsDeepStrict(pornResult, falseySection);
}
{
  const inputs = [123, Infinity, 0, null, undefined, ![], !![], {}, [], () => {
  }];
  utilIsDeepStrict(new Set(inputs), new Set(inputs));
  utilIsDeepStrict(new Set(inputs), new Set(inputs["reverse"]()));
  const args = inputs["map"]((canCreateDiscussions) => {
    return [canCreateDiscussions, {
      "a" : 5
    }];
  });
  utilIsDeepStrict(new Map(args), new Map(args));
  utilIsDeepStrict(new Map(args), new Map(args["reverse"]()));
}
{
  const target = new Set;
  const result = new Set;
  target["add"](1);
  target["add"](2);
  result["add"](2);
  result["add"](1);
  utilIsDeepStrict(target, result);
}
{
  const ajaxSettings = new Map;
  const item = new Map;
  const indentString = {};
  ajaxSettings["set"](1, indentString);
  ajaxSettings["set"](2, "hi");
  ajaxSettings["set"](3, [1, 2, 3]);
  item["set"](2, "hi");
  item["set"](1, indentString);
  item["set"](3, [1, 2, 3]);
  utilIsDeepStrict(ajaxSettings, item);
}
{
  const node = new Map;
  const item = new Map;
  node["set"](1, node);
  item["set"](1, new Map);
  notUtilIsDeepStrict(node, item);
}
{
  const data = new Map([[1, 1]]);
  const nb1 = new Map([[1, "1"]]);
  assert["strictEqual"](util["isDeepStrictEqual"](data, nb1), ![]);
}
{
  const schemasValue = new Set;
  const falseySection = new Set;
  schemasValue["x"] = 5;
  notUtilIsDeepStrict(schemasValue, falseySection);
  const m1 = new Map;
  const $donutData = new Map;
  m1["x"] = 5;
  notUtilIsDeepStrict(m1, $donutData);
}
{
  const elem = new Set;
  elem["add"](elem);
  const result = new Set;
  result["add"](result);
  utilIsDeepStrict(elem, result);
  const node = new Map;
  node["set"](2, node);
  const value = new Map;
  value["set"](2, value);
  utilIsDeepStrict(node, value);
  const val = new Map;
  val["set"](val, 2);
  const item = new Map;
  item["set"](item, 2);
  utilIsDeepStrict(val, item);
}
utilIsDeepStrict([1, , , 3], [1, , , 3]);
notUtilIsDeepStrict([1, , , 3], [1, , , 3, , , ]);
{
  const pornResult = new Error("foo1");
  const falseySection = new Error("foo2");
  const $donutData = new TypeError("foo1");
  notUtilIsDeepStrict(pornResult, falseySection, assert["AssertionError"]);
  notUtilIsDeepStrict(pornResult, $donutData, assert["AssertionError"]);
  notUtilIsDeepStrict(pornResult, {}, assert["AssertionError"]);
}
assert["strictEqual"](util["isDeepStrictEqual"](NaN, NaN), !![]);
assert["strictEqual"](util["isDeepStrictEqual"]({
  "a" : NaN
}, {
  "a" : NaN
}), !![]);
assert["strictEqual"](util["isDeepStrictEqual"]([1, 2, NaN, 4], [1, 2, NaN, 4]), !![]);
{
  const pornResult = new String("test");
  const nums = Object(Symbol());
  notUtilIsDeepStrict(new Boolean(!![]), Object(![]));
  notUtilIsDeepStrict(Object(!![]), new Number(1));
  notUtilIsDeepStrict(new Number(2), new Number(1));
  notUtilIsDeepStrict(nums, Object(Symbol()));
  notUtilIsDeepStrict(nums, {});
  utilIsDeepStrict(nums, nums);
  utilIsDeepStrict(Object(!![]), Object(!![]));
  utilIsDeepStrict(Object(2), Object(2));
  utilIsDeepStrict(pornResult, Object("test"));
  pornResult["slow"] = !![];
  notUtilIsDeepStrict(pornResult, Object("test"));
  nums["slow"] = !![];
  notUtilIsDeepStrict(nums, {});
  utilIsDeepStrict(Object(BigInt(1)), Object(BigInt(1)));
  notUtilIsDeepStrict(Object(BigInt(1)), Object(BigInt(2)));
  const foo = new Boolean(!![]);
  Object["defineProperty"](foo, Symbol["toStringTag"], {
    "value" : "String"
  });
  Object["setPrototypeOf"](foo, String["prototype"]);
  notUtilIsDeepStrict(foo, new String("true"));
  const obj = new Number(42);
  Object["defineProperty"](obj, Symbol["toStringTag"], {
    "value" : "String"
  });
  Object["setPrototypeOf"](obj, String["prototype"]);
  notUtilIsDeepStrict(obj, new String("42"));
  const target = new String("0");
  Object["defineProperty"](target, Symbol["toStringTag"], {
    "value" : "Number"
  });
  Object["setPrototypeOf"](target, Number["prototype"]);
  notUtilIsDeepStrict(target, new Number(0));
  const descriptor = new Object(BigInt(42));
  Object["defineProperty"](descriptor, Symbol["toStringTag"], {
    "value" : "String"
  });
  Object["setPrototypeOf"](descriptor, String["prototype"]);
  notUtilIsDeepStrict(descriptor, new String("42"));
  const exports = new Object(Symbol("fhqwhgads"));
  Object["defineProperty"](exports, Symbol["toStringTag"], {
    "value" : "String"
  });
  Object["setPrototypeOf"](exports, String["prototype"]);
  notUtilIsDeepStrict(exports, new String("fhqwhgads"));
}
notUtilIsDeepStrict(0, -0);
utilIsDeepStrict(-0, -0);
{
  const prop = Symbol();
  const pornResult = {
    [prop]:1
  };
  const foo = {
    [prop]:1
  };
  const $donutData = {
    [Symbol()]:1
  };
  const obj = {};
  Object["defineProperty"](foo, Symbol(), {
    "value" : 1
  });
  Object["defineProperty"](obj, prop, {
    "value" : 1
  });
  notUtilIsDeepStrict(pornResult, $donutData);
  utilIsDeepStrict(pornResult, foo);
  notUtilIsDeepStrict(pornResult, obj);
  const referenceFix = new Uint8Array(4);
  const stateToStore = new Uint8Array(4);
  referenceFix[prop] = !![];
  stateToStore[prop] = ![];
  notUtilIsDeepStrict(referenceFix, stateToStore);
  stateToStore[prop] = !![];
  utilIsDeepStrict(referenceFix, stateToStore);
  const groupedObj = new String("test");
  const falseySection = new String("test");
  groupedObj[prop] = !![];
  notUtilIsDeepStrict(groupedObj, falseySection);
  groupedObj[prop] = !![];
  utilIsDeepStrict(referenceFix, stateToStore);
}
;
