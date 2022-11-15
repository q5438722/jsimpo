'use strict';
function assertSize(offset, result) {
  if (result instanceof Map || result instanceof Set) {
    assertEquals(offset, result.size);
  }
}
function TestValidSetCalls(result) {
  assertDoesNotThrow(function() {
    result.add(new Object);
  });
  assertDoesNotThrow(function() {
    result.has(new Object);
  });
  assertDoesNotThrow(function() {
    result.delete(new Object);
  });
}
TestValidSetCalls(new Set);
TestValidSetCalls(new WeakSet);
function TestValidMapCalls(_) {
  assertDoesNotThrow(function() {
    _.get(new Object);
  });
  assertDoesNotThrow(function() {
    _.set(new Object);
  });
  assertDoesNotThrow(function() {
    _.has(new Object);
  });
  assertDoesNotThrow(function() {
    _.delete(new Object);
  });
  assertDoesNotThrow(function() {
    _.get(undefined);
  });
  assertDoesNotThrow(function() {
    _.get(null);
  });
  assertDoesNotThrow(function() {
    _.get(0);
  });
  assertDoesNotThrow(function() {
    _.get("a-key");
  });
  assertDoesNotThrow(function() {
    _.get(Symbol());
  });
  assertDoesNotThrow(function() {
    _.has(undefined);
  });
  assertDoesNotThrow(function() {
    _.has(null);
  });
  assertDoesNotThrow(function() {
    _.has(0);
  });
  assertDoesNotThrow(function() {
    _.has("a-key");
  });
  assertDoesNotThrow(function() {
    _.has(Symbol());
  });
  assertDoesNotThrow(function() {
    _.delete(undefined);
  });
  assertDoesNotThrow(function() {
    _.delete(null);
  });
  assertDoesNotThrow(function() {
    _.delete(0);
  });
  assertDoesNotThrow(function() {
    _.delete("a-key");
  });
  assertDoesNotThrow(function() {
    _.delete(Symbol());
  });
}
TestValidMapCalls(new Map);
TestValidMapCalls(new WeakMap);
function TestInvalidCalls(adapter) {
  assertThrows(function() {
    adapter.set(undefined, 0);
  }, TypeError);
  assertThrows(function() {
    adapter.set(null, 0);
  }, TypeError);
  assertThrows(function() {
    adapter.set(0, 0);
  }, TypeError);
  assertThrows(function() {
    adapter.set("a-key", 0);
  }, TypeError);
  assertThrows(function() {
    adapter.set(Symbol(), 0);
  }, TypeError);
}
TestInvalidCalls(new WeakMap);
function TestSet(obj, el) {
  assertFalse(obj.has(el));
  assertFalse(obj.delete(el));
  if (typeof el === "object" && !(obj instanceof WeakSet)) {
    assertSame(obj, obj.add(el));
    assertTrue(obj.has(el));
    assertTrue(obj.delete(el));
  }
  assertFalse(obj.has(el));
  assertFalse(obj.delete(el));
  assertFalse(obj.has(el));
}
function TestSetBehavior(e) {
  var name = 0;
  for (; name < 20; name++) {
    TestSet(e, new Object);
    TestSet(e, name);
    TestSet(e, name / 100);
    TestSet(e, "key-" + name);
    TestSet(e, Symbol(name));
  }
  var carrierNames = [-0, +0, 1, 1 / 3, 10, +Infinity, -Infinity, NaN, true, false, null, undefined, "x", Symbol(), {}, function() {
  }];
  name = 0;
  for (; name < carrierNames.length; name++) {
    TestSet(e, carrierNames[name]);
  }
}
TestSetBehavior(new Set);
TestSetBehavior(new WeakSet);
function TestMapping(obj, el, object) {
  assertFalse(obj.has(el));
  assertSame(undefined, obj.get(el));
  assertFalse(obj.delete(el));
  if (typeof el === "object" && !(obj instanceof WeakMap)) {
    assertSame(obj, obj.set(el, object));
    assertSame(object, obj.get(el));
    assertTrue(obj.has(el));
    assertTrue(obj.delete(el));
  }
  assertFalse(obj.has(el));
  assertSame(undefined, obj.get(el));
  assertFalse(obj.delete(el));
  assertFalse(obj.has(el));
  assertSame(undefined, obj.get(el));
}
function TestMapBehavior(metaIn) {
  TestMapping(metaIn, new Object, 23);
  TestMapping(metaIn, new Object, "the-value");
  TestMapping(metaIn, new Object, new Object);
  var key = 0;
  for (; key < 20; key++) {
    TestMapping(metaIn, key, new Object);
    TestMapping(metaIn, key / 10, new Object);
    TestMapping(metaIn, "key-" + key, new Object);
    TestMapping(metaIn, Symbol(key), new Object);
  }
  var pinupList = [-0, +0, 1, 1 / 3, 10, +Infinity, -Infinity, NaN, true, false, null, undefined, "x", Symbol(), {}, function() {
  }];
  key = 0;
  for (; key < pinupList.length; key++) {
    TestMapping(metaIn, pinupList[key], 23);
    TestMapping(metaIn, pinupList[key], "the-value");
    TestMapping(metaIn, pinupList[key], new Object);
  }
}
TestMapBehavior(new Map);
TestMapBehavior(new WeakMap);
function TestQuery(suite) {
  var t = new Object;
  var expected = ["x", 0, +Infinity, -Infinity, true, false, null, undefined];
  var i = 0;
  for (; i < expected.length; i++) {
    TestMapping(suite, t, expected[i]);
  }
}
TestQuery(new Map);
TestQuery(new WeakMap);
function TestDelete(result) {
  var i = new Object;
  TestMapping(result, i, "to-be-deleted");
  assertFalse(result.delete(i));
  assertFalse(result.delete(new Object));
  assertSame(result.get(i), undefined);
}
TestDelete(new Map);
TestDelete(new WeakMap);
function TestGC1(e) {
  var object = new Object;
  e.set(object, "not-collected");
  gc();
  assertSame("not-collected", e.get(object));
}
TestGC1(new Map);
TestGC1(new WeakMap);
function TestGC2(entity) {
  var Taxa2colorDictionary = new Object;
  key = Taxa2colorDictionary;
  i = 0;
  for (; i < 10; i++, key = entity.get(key)) {
    entity.set(key, new Object);
  }
  gc();
  var beforeShowCallCount = 0;
  key = Taxa2colorDictionary;
  for (; key != undefined; key = entity.get(key)) {
    beforeShowCallCount++;
  }
  assertEquals(11, beforeShowCallCount);
}
TestGC2(new Map);
TestGC2(new WeakMap);
function TestEnumerable(func) {
  function props(props) {
    var t = [];
    var i;
    for (i in props) {
      t.push(i);
    }
    return t.sort();
  }
  assertArrayEquals([], props(func));
  assertArrayEquals([], props(func.prototype));
  assertArrayEquals([], props(new func));
}
TestEnumerable(Set);
TestEnumerable(Map);
TestEnumerable(WeakMap);
TestEnumerable(WeakSet);
function TestArbitrary(m) {
  function TestProperty(map, property, value) {
    map[property] = value;
    assertEquals(value, map[property]);
  }
  var i = 0;
  for (; i < 20; i++) {
    TestProperty(m, i, "val" + i);
    TestProperty(m, "foo" + i, "bar" + i);
  }
  TestMapping(m, new Object, "foobar");
}
TestArbitrary(new Map);
TestArbitrary(new WeakMap);
assertThrows(function() {
  Set();
}, TypeError);
assertThrows(function() {
  Map();
}, TypeError);
assertThrows(function() {
  WeakMap();
}, TypeError);
assertThrows(function() {
  WeakSet();
}, TypeError);
var s = new Set;
assertFalse(s.has(NaN));
assertFalse(s.has(NaN + 1));
assertFalse(s.has(23));
s.add(NaN);
assertTrue(s.has(NaN));
assertTrue(s.has(NaN + 1));
assertFalse(s.has(23));
var m = new Map;
assertFalse(m.has(NaN));
assertFalse(m.has(NaN + 1));
assertFalse(m.has(23));
m.set(NaN, "a-value");
assertTrue(m.has(NaN));
assertTrue(m.has(NaN + 1));
assertFalse(m.has(23));
s = new Set;
assertTrue(s instanceof Set);
assertTrue(Set.prototype.add instanceof Function);
assertTrue(Set.prototype.has instanceof Function);
assertTrue(Set.prototype.delete instanceof Function);
assertTrue(Set.prototype.clear instanceof Function);
m = new Map;
assertTrue(m instanceof Map);
assertTrue(Map.prototype.set instanceof Function);
assertTrue(Map.prototype.get instanceof Function);
assertTrue(Map.prototype.has instanceof Function);
assertTrue(Map.prototype.delete instanceof Function);
assertTrue(Map.prototype.clear instanceof Function);
m = new WeakMap;
assertTrue(m instanceof WeakMap);
assertTrue(WeakMap.prototype.set instanceof Function);
assertTrue(WeakMap.prototype.get instanceof Function);
assertTrue(WeakMap.prototype.has instanceof Function);
assertTrue(WeakMap.prototype.delete instanceof Function);
s = new WeakSet;
assertTrue(s instanceof WeakSet);
assertTrue(WeakSet.prototype.add instanceof Function);
assertTrue(WeakSet.prototype.has instanceof Function);
assertTrue(WeakSet.prototype.delete instanceof Function);
assertEquals("Set", Set.name);
assertEquals("Map", Map.name);
assertEquals("WeakMap", WeakMap.name);
assertEquals("WeakSet", WeakSet.name);
function TestPrototype(obj) {
  assertTrue(obj.prototype instanceof Object);
  assertEquals({
    value : obj.prototype,
    writable : false,
    enumerable : false,
    configurable : false
  }, Object.getOwnPropertyDescriptor(obj, "prototype"));
}
TestPrototype(Set);
TestPrototype(Map);
TestPrototype(WeakMap);
TestPrototype(WeakSet);
function TestConstructor(obj) {
  assertFalse(obj === Object.prototype.constructor);
  assertSame(obj, obj.prototype.constructor);
  assertSame(obj, (new obj).__proto__.constructor);
  assertEquals(0, obj.length);
}
TestConstructor(Set);
TestConstructor(Map);
TestConstructor(WeakMap);
TestConstructor(WeakSet);
function TestDescriptor(e, obj) {
  assertEquals({
    value : obj,
    writable : true,
    enumerable : false,
    configurable : true
  }, Object.getOwnPropertyDescriptor(e, obj.name));
}
TestDescriptor(this, Set);
TestDescriptor(this, Map);
TestDescriptor(this, WeakMap);
TestDescriptor(this, WeakSet);
assertTrue(WeakMap.prototype.constructor === WeakMap);
assertTrue(Object.getPrototypeOf(WeakMap.prototype) === Object.prototype);
assertFalse(WeakMap.prototype === Object.prototype);
var o = Object.create({});
assertFalse("get" in o);
assertFalse("set" in o);
assertEquals(undefined, o.get);
assertEquals(undefined, o.set);
o = Object.create({}, {
  myValue : {
    value : 10,
    enumerable : false,
    configurable : true,
    writable : true
  }
});
assertEquals(10, o.myValue);
var alwaysBogus = [undefined, null, true, "x", 23, {}];
var bogusReceiversTestSet = [{
  proto : Set.prototype,
  funcs : ["add", "has", "delete"],
  receivers : alwaysBogus.concat([new Map, new WeakMap, new WeakSet])
}, {
  proto : Map.prototype,
  funcs : ["get", "set", "has", "delete"],
  receivers : alwaysBogus.concat([new Set, new WeakMap, new WeakSet])
}, {
  proto : WeakMap.prototype,
  funcs : ["get", "set", "has", "delete"],
  receivers : alwaysBogus.concat([new Set, new Map, new WeakSet])
}, {
  proto : WeakSet.prototype,
  funcs : ["add", "has", "delete"],
  receivers : alwaysBogus.concat([new Set, new Map, new WeakMap])
}];
function TestBogusReceivers(classes) {
  var i = 0;
  for (; i < classes.length; i++) {
    var proto = classes[i].proto;
    var tmpFunc = classes[i].funcs;
    var elems = classes[i].receivers;
    var j = 0;
    for (; j < tmpFunc.length; j++) {
      var value = proto[tmpFunc[j]];
      var i = 0;
      for (; i < elems.length; i++) {
        assertThrows(function() {
          value.call(elems[i], {});
        }, TypeError);
      }
    }
  }
}
TestBogusReceivers(bogusReceiversTestSet);
var setSizeDescriptor = Object.getOwnPropertyDescriptor(Set.prototype, "size");
assertEquals(undefined, setSizeDescriptor.value);
assertEquals(undefined, setSizeDescriptor.set);
assertTrue(setSizeDescriptor.get instanceof Function);
assertEquals(undefined, setSizeDescriptor.get.prototype);
assertFalse(setSizeDescriptor.enumerable);
assertTrue(setSizeDescriptor.configurable);
assertEquals("get size", setSizeDescriptor.get.name);
s = new Set;
assertFalse(s.hasOwnProperty("size"));
var i = 0;
for (; i < 10; i++) {
  assertEquals(i, s.size);
  s.add(i);
}
i = 9;
for (; i >= 0; i--) {
  s.delete(i);
  assertEquals(i, s.size);
}
var mapSizeDescriptor = Object.getOwnPropertyDescriptor(Map.prototype, "size");
assertEquals(undefined, mapSizeDescriptor.value);
assertEquals(undefined, mapSizeDescriptor.set);
assertTrue(mapSizeDescriptor.get instanceof Function);
assertEquals(undefined, mapSizeDescriptor.get.prototype);
assertFalse(mapSizeDescriptor.enumerable);
assertTrue(mapSizeDescriptor.configurable);
assertEquals("get size", mapSizeDescriptor.get.name);
m = new Map;
assertFalse(m.hasOwnProperty("size"));
i = 0;
for (; i < 10; i++) {
  assertEquals(i, m.size);
  m.set(i, i);
}
i = 9;
for (; i >= 0; i--) {
  m.delete(i);
  assertEquals(i, m.size);
}
(function() {
  var mySet = new Set;
  mySet.add(42);
  assertTrue(mySet.has(42));
  assertEquals(1, mySet.size);
  mySet.clear();
  assertFalse(mySet.has(42));
  assertEquals(0, mySet.size);
})();
(function() {
  var e = new Map;
  e.set(42, true);
  assertTrue(e.has(42));
  assertEquals(1, e.size);
  e.clear();
  assertFalse(e.has(42));
  assertEquals(0, e.size);
})();
(function TestConstructor() {
  var t = new Set;
  t.add(-0);
  assertSame(0, t.values().next().value);
  t.add(0);
  assertEquals(1, t.size);
  assertTrue(t.has(0));
  assertTrue(t.has(-0));
})();
(function init() {
  var t = new Map;
  t.set(-0, "minus");
  assertSame(0, t.keys().next().value);
  t.set(0, "plus");
  assertEquals(1, t.size);
  assertTrue(t.has(0));
  assertTrue(t.has(-0));
  assertEquals("plus", t.get(0));
  assertEquals("plus", t.get(-0));
})();
(function init() {
  assertThrows(function() {
    Set.prototype.set.forEach.call({});
  }, TypeError);
  var activeLikes = new Set;
  assertThrows(function() {
    activeLikes.forEach({});
  }, TypeError);
})();
(function check() {
  var test = new Set;
  test.add("a");
  test.add("b");
  test.add("c");
  var html = "";
  var x = {};
  test.forEach(function(result, actualThis, e) {
    assertSame(result, actualThis);
    assertSame(test, e);
    assertSame(this, x);
    html = html + result;
    if (result === "a") {
      test.delete("b");
      test.add("d");
      test.add("e");
      test.add("f");
    } else {
      if (result === "c") {
        test.add("b");
        test.delete("e");
      }
    }
  }, x);
  assertEquals("acdfb", html);
})();
(function verify() {
  var t = new Set;
  t.add("a");
  t.add("b");
  var calls = "";
  t.forEach(function(a) {
    calls = calls + a;
    if (a === "b") {
      t.add("c");
    }
  });
  assertEquals("abc", calls);
})();
(function check() {
  var result = new Set;
  result.add("a");
  result.add("b");
  result.add("c");
  var encoded = "";
  result.forEach(function(ch) {
    encoded = encoded + ch;
    if (ch === "b") {
      result.delete("c");
    }
  });
  assertEquals("ab", encoded);
})();
(function verify() {
  var result = new Set;
  result.add("a");
  result.add("b");
  result.add("c");
  var encoded = "";
  result.forEach(function(ch) {
    encoded = encoded + ch;
    if (ch === "b") {
      result.delete("a");
    } else {
      if (ch === "c") {
        result.add("a");
      }
    }
  });
  assertEquals("abca", encoded);
})();
(function check() {
  var t = new Set;
  t.add("a");
  t.add("b");
  t.add("c");
  var result = "";
  t.forEach(function(tag) {
    result = result + tag;
    if (tag === "a") {
      t.clear();
      t.add("d");
      t.add("e");
    }
  });
  assertEquals("ade", result);
})();
(function HTMLtable() {
  var t = new Set;
  t.add("a");
  t.add("b");
  t.add("c");
  var result = "";
  t.forEach(function(overrideSubItems) {
    result = result + overrideSubItems;
    t.forEach(function(tag) {
      result = result + tag;
      if (tag === "a") {
        t.delete("b");
      }
    });
  });
  assertEquals("aaccac", result);
})();
(function resolveProviderPromises() {
  var t = new Set;
  t.add("a");
  t.add("b");
  t.add("c");
  var result = "";
  var spaceBetweenBarsSpecified = {};
  try {
    t.forEach(function(overrideSubItems) {
      result = result + overrideSubItems;
      throw spaceBetweenBarsSpecified;
    });
  } catch (beforeShowCallCount) {
    assertEquals(spaceBetweenBarsSpecified, beforeShowCallCount);
  }
  assertEquals("a", result);
})();
(function testBunches() {
  var activeLikes = new Set;
  var x = 0;
  for (; x < 100; x++) {
    activeLikes.add(x);
  }
  var s = 0;
  activeLikes.forEach(function(indentSpace) {
    s = s + indentSpace;
    if (indentSpace % 10 === 0) {
      gc();
    }
  });
  assertEquals(4950, s);
})();
(function cancelAddedRows() {
  var allDomains = new Set(["1", "2"]);
  var array = [];
  allDomains.forEach(function() {
    array.push(this);
  }, "");
  assertTrue(array[0] !== array[1]);
  array = [];
  allDomains.forEach(function() {
    array.push(this);
  }, {});
  assertEquals(array[0], array[1]);
})();
(function cancelAddedRows() {
  var allDomains = new Set(["1", "2"]);
  var p = [];
  allDomains.forEach(function() {
    p.push(this);
  }, "");
  assertTrue(p[0] === "" && p[0] === p[1]);
})();
(function build() {
  assertThrows(function() {
    Map.prototype.map.forEach.call({});
  }, TypeError);
  var staleScenes = new Map;
  assertThrows(function() {
    staleScenes.forEach({});
  }, TypeError);
})();
(function check() {
  var store = new Map;
  store.set(0, "a");
  store.set(1, "b");
  store.set(2, "c");
  var result = [];
  var o = {};
  store.forEach(function(paramText, overriddenMethodNames, expectedDeltaX) {
    assertEquals(store, expectedDeltaX);
    assertEquals(this, o);
    result.push(overriddenMethodNames, paramText);
    if (overriddenMethodNames === 0) {
      store.delete(1);
      store.set(3, "d");
      store.set(4, "e");
      store.set(5, "f");
    } else {
      if (overriddenMethodNames === 2) {
        store.set(1, "B");
        store.delete(4);
      }
    }
  }, o);
  assertArrayEquals([0, "a", 2, "c", 3, "d", 5, "f", 1, "B"], result);
})();
(function done() {
  var stubs = new Map;
  stubs.set(0, "a");
  stubs.set(1, "b");
  var valuesResult = [];
  stubs.forEach(function(opt_script_contents, bone_in) {
    valuesResult.push(bone_in, opt_script_contents);
    if (bone_in === 1) {
      stubs.set(2, "c");
    }
  });
  assertArrayEquals([0, "a", 1, "b", 2, "c"], valuesResult);
})();
(function resolveProviderPromises() {
  var s = new Map;
  s.set(0, "a");
  s.set(1, "b");
  s.set(2, "c");
  var valuesResult = [];
  s.forEach(function(opt_script_contents, bone_in) {
    valuesResult.push(bone_in, opt_script_contents);
    if (bone_in === 1) {
      s.delete(2);
    }
  });
  assertArrayEquals([0, "a", 1, "b"], valuesResult);
})();
(function resolveProviderPromises() {
  var s = new Map;
  s.set(0, "a");
  s.set(1, "b");
  s.set(2, "c");
  var valuesResult = [];
  s.forEach(function(opt_script_contents, bone_in) {
    valuesResult.push(bone_in, opt_script_contents);
    if (bone_in === 1) {
      s.delete(0);
    } else {
      if (bone_in === 2) {
        s.set(0, "a");
      }
    }
  });
  assertArrayEquals([0, "a", 1, "b", 2, "c", 0, "a"], valuesResult);
})();
(function check() {
  var s = new Map;
  s.set(0, "a");
  s.set(1, "b");
  s.set(2, "c");
  var valuesResult = [];
  s.forEach(function(opt_script_contents, bone_in) {
    valuesResult.push(bone_in, opt_script_contents);
    if (bone_in === 0) {
      s.clear();
      s.set(3, "d");
      s.set(4, "e");
    }
  });
  assertArrayEquals([0, "a", 3, "d", 4, "e"], valuesResult);
})();
(function testRemove() {
  var s = new Map;
  s.set(0, "a");
  s.set(1, "b");
  s.set(2, "c");
  var args = [];
  s.forEach(function(opt_script_contents, display_arg) {
    args.push(display_arg, opt_script_contents);
    s.forEach(function(opt_script_contents, display_arg) {
      args.push(display_arg, opt_script_contents);
      if (display_arg === 0) {
        s.delete(1);
      }
    });
  });
  assertArrayEquals([0, "a", 0, "a", 2, "c", 2, "c", 0, "a", 2, "c"], args);
})();
(function TestStaticClassMethodString() {
  var stubs = new Map;
  stubs.set(0, "a");
  stubs.set(1, "b");
  stubs.set(2, "c");
  var valuesResult = [];
  var spaceBetweenBarsSpecified = {};
  try {
    stubs.forEach(function(opt_script_contents, bone_in) {
      valuesResult.push(bone_in, opt_script_contents);
      throw spaceBetweenBarsSpecified;
    });
  } catch (beforeShowCallCount) {
    assertEquals(spaceBetweenBarsSpecified, beforeShowCallCount);
  }
  assertArrayEquals([0, "a"], valuesResult);
})();
(function map_to_map() {
  var t = new Map;
  var x = 0;
  for (; x < 100; x++) {
    t.set(x, x);
  }
  var s = 0;
  t.forEach(function(indentSpace) {
    s = s + indentSpace;
    if (indentSpace % 10 === 0) {
      gc();
    }
  });
  assertEquals(4950, s);
})();
(function handleNoteKey() {
  var timeouts = new Map;
  timeouts.set(0, 0);
  var valuesResult = [];
  timeouts.forEach(function(bone_in) {
    valuesResult.push(bone_in);
    if (bone_in === 0) {
      var t = 1;
      for (; t < 4; t++) {
        timeouts.set(t, t);
      }
    }
    if (bone_in === 3) {
      t = 0;
      for (; t < 4; t++) {
        timeouts.delete(t);
      }
      t = 4;
      for (; t < 8; t++) {
        timeouts.set(t, t);
      }
    }
  });
  assertArrayEquals([0, 1, 2, 3, 4, 5, 6, 7], valuesResult);
})();
(function _resolveProviders() {
  var ranges = new Map;
  ranges.set(0, 0);
  var r = 0;
  var result = [];
  ranges.forEach(function(overriddenMethodNames) {
    result.push(overriddenMethodNames);
    if (++r < 5) {
      var t = 0;
      for (; t < 5; t++) {
        ranges.clear();
        ranges.set(r, r);
      }
    }
  });
  assertArrayEquals([0, 1, 2, 3, 4], result);
})();
(function handleNoteKey() {
  var s = new Map;
  s.set(0, 0);
  s.set(1, 1);
  s.set(2, 2);
  s.set(3, 3);
  s.delete(0);
  var r = 0;
  var result = [];
  s.forEach(function(overriddenMethodNames) {
    if (++r > 10) {
      return;
    }
    result.push(overriddenMethodNames);
    if (overriddenMethodNames == 3) {
      s.delete(1);
      var i = 4;
      for (; i < 10; i++) {
        s.set(i, i);
      }
      i = 4;
      for (; i < 10; i = i + 2) {
        s.delete(i);
      }
      s.delete(2);
      i = 10;
      for (; i < 20; i++) {
        s.set(i, i);
      }
      i = 10;
      for (; i < 20; i = i + 2) {
        s.delete(i);
      }
      s.delete(3);
    }
  });
  assertArrayEquals([1, 2, 3, 5, 7, 9, 11, 13, 15, 17], result);
})();
(function handleNoteKey() {
  var timeouts = new Map;
  timeouts.set(0, 0);
  var valuesResult = [];
  timeouts.forEach(function(bone_in) {
    valuesResult.push(bone_in);
    if (bone_in === 0) {
      var t = 1;
      for (; t < 8; t++) {
        timeouts.set(t, t);
      }
    }
    if (bone_in === 4) {
      t = 0;
      for (; t < 8; t++) {
        timeouts.delete(t);
      }
    }
  });
  assertArrayEquals([0, 1, 2, 3, 4], valuesResult);
})();
(function handleNoteKey() {
  var timeouts = new Map;
  timeouts.set(0, 0);
  var valuesResult = [];
  timeouts.forEach(function(bone_in) {
    valuesResult.push(bone_in);
    if (bone_in === 0) {
      var t = 1;
      for (; t < 16; t++) {
        timeouts.set(t, t);
      }
    }
    if (bone_in === 4) {
      t = 5;
      for (; t < 16; t++) {
        timeouts.delete(t);
      }
    }
  });
  assertArrayEquals([0, 1, 2, 3, 4], valuesResult);
})();
(function test() {
  var map = new Map;
  map.set("key1", "value1");
  map.set("key2", "value2");
  var array = [];
  map.forEach(function() {
    array.push(this);
  }, "");
  assertTrue(array[0] !== array[1]);
  array = [];
  map.forEach(function() {
    array.push(this);
  }, {});
  assertEquals(array[0], array[1]);
})();
(function test() {
  var map = new Map;
  map.set("key1", "value1");
  map.set("key2", "value2");
  var p = [];
  map.forEach(function() {
    p.push(this);
  }, "");
  assertTrue(p[0] === "" && p[0] === p[1]);
})();
var oneAndTwo = new Map;
var k0 = {
  key : 0
};
var k1 = {
  key : 1
};
var k2 = {
  key : 2
};
oneAndTwo.set(k1, 1);
oneAndTwo.set(k2, 2);
function TestSetConstructor(Database) {
  var db = new Database(null);
  assertSize(0, db);
  db = new Database(undefined);
  assertSize(0, db);
  assertThrows(function() {
    new Database({});
  }, TypeError);
  assertThrows(function() {
    new Database(true);
  }, TypeError);
  assertThrows(function() {
    var rules = {};
    rules[Symbol.iterator] = 42;
    new Database(rules);
  }, TypeError);
  assertThrows(function() {
    var rules = {};
    rules[Symbol.iterator] = function() {
      return 42;
    };
    new Database(rules);
  }, TypeError);
  var map = new Set;
  map.add(k0);
  map.add(k1);
  map.add(k2);
  db = new Database(map.values());
  assertSize(3, db);
  assertTrue(db.has(k0));
  assertTrue(db.has(k1));
  assertTrue(db.has(k2));
}
TestSetConstructor(Set);
TestSetConstructor(WeakSet);
function TestSetConstructorAddNotCallable(v) {
  var add = v.prototype.add;
  assertThrows(function() {
    v.prototype.add = 42;
    new v(oneAndTwo.values());
  }, TypeError);
  v.prototype.add = add;
}
TestSetConstructorAddNotCallable(Set);
TestSetConstructorAddNotCallable(WeakSet);
function TestSetConstructorGetAddOnce(v) {
  var content = v.prototype.add;
  var beforeShowCallCount = 0;
  Object.defineProperty(v.prototype, "add", {
    get : function() {
      beforeShowCallCount++;
      return function() {
      };
    }
  });
  var first_result = new v(oneAndTwo.values());
  assertEquals(1, beforeShowCallCount);
  assertSize(0, first_result);
  Object.defineProperty(v.prototype, "add", {
    value : content,
    writable : true
  });
}
TestSetConstructorGetAddOnce(Set);
TestSetConstructorGetAddOnce(WeakSet);
function TestSetConstructorAddReplaced(v) {
  var old = v.prototype.add;
  var beforeShowCallCount = 0;
  v.prototype.add = function(key) {
    beforeShowCallCount++;
    old.call(this, key);
    v.prototype.add = null;
  };
  var first_result = new v(oneAndTwo.keys());
  assertEquals(2, beforeShowCallCount);
  assertSize(2, first_result);
  v.prototype.add = old;
}
TestSetConstructorAddReplaced(Set);
TestSetConstructorAddReplaced(WeakSet);
function TestSetConstructorOrderOfDoneValue(NAME) {
  var beforeShowCallCount = 0;
  var showCallCount = 0;
  var iterable = {
    next : function() {
      return {
        get value() {
          beforeShowCallCount++;
        },
        get done() {
          showCallCount++;
          throw new Error;
        }
      };
    }
  };
  iterable[Symbol.iterator] = function() {
    return this;
  };
  assertThrows(function() {
    new NAME(iterable);
  });
  assertEquals(1, showCallCount);
  assertEquals(0, beforeShowCallCount);
}
TestSetConstructorOrderOfDoneValue(Set);
TestSetConstructorOrderOfDoneValue(WeakSet);
function TestSetConstructorNextNotAnObject(NAME) {
  var iterable = {
    next : function() {
      return "abc";
    }
  };
  iterable[Symbol.iterator] = function() {
    return this;
  };
  assertThrows(function() {
    new NAME(iterable);
  }, TypeError);
}
TestSetConstructorNextNotAnObject(Set);
TestSetConstructorNextNotAnObject(WeakSet);
(function CheckAccessor() {
  assertThrows(function() {
    new WeakSet([1]);
  }, TypeError);
})();
function TestSetConstructorIterableValue(NAME) {
  Object.defineProperty(Number.prototype, Symbol.iterator, {
    get : function() {
      assertEquals("number", typeof this);
      return function() {
        assertEquals("number", typeof this);
        return oneAndTwo.keys();
      };
    },
    configurable : true
  });
  var map = new NAME(42);
  assertSize(2, map);
  assertTrue(map.has(k1));
  assertTrue(map.has(k2));
  delete Number.prototype[Symbol.iterator];
}
TestSetConstructorIterableValue(Set);
TestSetConstructorIterableValue(WeakSet);
(function testStringRawSubst() {
  var b = new Set("abc");
  assertSize(3, b);
  assertTrue(b.has("a"));
  assertTrue(b.has("b"));
  assertTrue(b.has("c"));
})();
function TestMapConstructor(Collection) {
  var collection = new Collection(null);
  assertSize(0, collection);
  collection = new Collection(undefined);
  assertSize(0, collection);
  assertThrows(function() {
    new Collection({});
  }, TypeError);
  assertThrows(function() {
    new Collection(true);
  }, TypeError);
  assertThrows(function() {
    var string = {};
    string[Symbol.iterator] = 42;
    new Collection(string);
  }, TypeError);
  assertThrows(function() {
    var string = {};
    string[Symbol.iterator] = function() {
      return 42;
    };
    new Collection(string);
  }, TypeError);
  var map = new Map;
  map.set(k0, "a");
  map.set(k1, "b");
  map.set(k2, "c");
  collection = new Collection(map.entries());
  assertSize(3, collection);
  assertEquals("a", collection.get(k0));
  assertEquals("b", collection.get(k1));
  assertEquals("c", collection.get(k2));
}
TestMapConstructor(Map);
TestMapConstructor(WeakMap);
function TestMapConstructorSetNotCallable(object) {
  var originalSet = object.prototype.set;
  assertThrows(function() {
    object.prototype.set = 42;
    new object(oneAndTwo.entries());
  }, TypeError);
  object.prototype.set = originalSet;
}
TestMapConstructorSetNotCallable(Map);
TestMapConstructorSetNotCallable(WeakMap);
function TestMapConstructorGetAddOnce(ctor) {
  var orig = ctor.prototype.set;
  var beforeShowCallCount = 0;
  Object.defineProperty(ctor.prototype, "set", {
    get : function() {
      beforeShowCallCount++;
      return function() {
      };
    }
  });
  var q = new ctor(oneAndTwo.entries());
  assertEquals(1, beforeShowCallCount);
  assertSize(0, q);
  Object.defineProperty(ctor.prototype, "set", {
    value : orig,
    writable : true
  });
}
TestMapConstructorGetAddOnce(Map);
TestMapConstructorGetAddOnce(WeakMap);
function TestMapConstructorSetReplaced(ctor) {
  var setter = ctor.prototype.set;
  var beforeShowCallCount = 0;
  ctor.prototype.set = function(key, name) {
    beforeShowCallCount++;
    setter.call(this, key, name);
    ctor.prototype.set = null;
  };
  var q = new ctor(oneAndTwo.entries());
  assertEquals(2, beforeShowCallCount);
  assertSize(2, q);
  ctor.prototype.set = setter;
}
TestMapConstructorSetReplaced(Map);
TestMapConstructorSetReplaced(WeakMap);
function TestMapConstructorOrderOfDoneValue(construct) {
  function CustomError() {
  }
  var beforeShowCallCount = 0;
  var showCallCount = 0;
  var iterable = {
    next : function() {
      return {
        get value() {
          beforeShowCallCount++;
        },
        get done() {
          showCallCount++;
          throw new CustomError;
        }
      };
    }
  };
  iterable[Symbol.iterator] = function() {
    return this;
  };
  assertThrows(function() {
    new construct(iterable);
  }, CustomError);
  assertEquals(1, showCallCount);
  assertEquals(0, beforeShowCallCount);
}
TestMapConstructorOrderOfDoneValue(Map);
TestMapConstructorOrderOfDoneValue(WeakMap);
function TestMapConstructorNextNotAnObject(construct) {
  var iterable = {
    next : function() {
      return "abc";
    }
  };
  iterable[Symbol.iterator] = function() {
    return this;
  };
  assertThrows(function() {
    new construct(iterable);
  }, TypeError);
}
TestMapConstructorNextNotAnObject(Map);
TestMapConstructorNextNotAnObject(WeakMap);
function TestMapConstructorIteratorNotObjectValues(construct) {
  assertThrows(function() {
    new construct(oneAndTwo.values());
  }, TypeError);
}
TestMapConstructorIteratorNotObjectValues(Map);
TestMapConstructorIteratorNotObjectValues(WeakMap);
(function stateFor() {
  assertThrows(function() {
    new WeakMap([[1, 2]]);
  }, TypeError);
})();
function TestMapConstructorIterableValue(Map) {
  Object.defineProperty(Number.prototype, Symbol.iterator, {
    get : function() {
      assertEquals("number", typeof this);
      return function() {
        assertEquals("number", typeof this);
        return oneAndTwo.entries();
      };
    },
    configurable : true
  });
  var map = new Map(42);
  assertSize(2, map);
  assertEquals(1, map.get(k1));
  assertEquals(2, map.get(k2));
  delete Number.prototype[Symbol.iterator];
}
TestMapConstructorIterableValue(Map);
TestMapConstructorIterableValue(WeakMap);
function TestCollectionToString(expectedType) {
  assertEquals("[object " + expectedType.name + "]", Object.prototype.toString.call(new expectedType));
}
TestCollectionToString(Map);
TestCollectionToString(Set);
TestCollectionToString(WeakMap);
TestCollectionToString(WeakSet);
function TestConstructorOrderOfAdderIterator(v, p) {
  var data = new Map;
  data.set({}, {});
  data.set({}, {});
  var entries = data[Symbol.iterator];
  Object.defineProperty(data, Symbol.iterator, {
    get : function() {
      x = x + "iterator";
      return entries;
    }
  });
  var x = "";
  var page = v.prototype[p];
  Object.defineProperty(v.prototype, p, {
    get : function() {
      x = x + p;
      return page;
    }
  });
  new v(data);
  assertEquals(p + "iterator", x);
  Object.defineProperty(v.prototype, p, {
    value : page
  });
}
TestConstructorOrderOfAdderIterator(Map, "set");
TestConstructorOrderOfAdderIterator(Set, "add");
TestConstructorOrderOfAdderIterator(WeakMap, "set");
TestConstructorOrderOfAdderIterator(WeakSet, "add");

