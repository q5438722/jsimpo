'use strict';
description("Test to ensure correct behaviour of prototype caching with dictionary prototypes");
function protoTest(indexVarValue) {
  return indexVarValue["protoProp"];
}
var proto = {};
var o = {
  "__proto__" : proto
};
delete proto["propToRemove"];
protoTest(o);
protoTest(o);
protoTest(o);
shouldBe("protoTest(o)", "'PASS'");
delete proto["protoProp"];
proto["fakeProtoProp"] = "FAIL";
shouldBeUndefined("protoTest(o)");
function protoTest2(indexVarValue) {
  return indexVarValue["b"];
}
proto = {};
o = {
  "__proto__" : proto
};
delete proto["b"];
proto["d"] = 3;
protoTest2(o);
protoTest2(o);
protoTest2(o);
var protoKeys = [];
var i;
for (i in proto) {
  protoKeys["push"](proto[i]);
}
shouldBe("protoKeys", "[1,2,3]");
function protoTest3(spacetime) {
  return spacetime["b"];
}
proto = {};
o = {
  "__proto__" : proto
};
delete proto["b"];
protoTest2(o);
protoTest2(o);
protoTest2(o);
proto["d"] = 3;
protoKeys = [];
for (i in proto) {
  protoKeys["push"](proto[i]);
}
shouldBe("protoKeys", "[1,2,3]");
function testFunction(animationContext) {
  return animationContext["test"];
}
proto = {
  "test" : !![]
};
var subclass1 = {
  "__proto__" : proto
};
var subclass2 = {
  "__proto__" : proto
};
i = 0;
for (; i < 500; i++) {
  subclass2["a" + i] = "a" + i;
}
testFunction(subclass1);
shouldBeTrue("testFunction(subclass1)");
shouldBeTrue("testFunction(subclass2)");
proto["test"] = ![];
subclass2["test"] = !![];
shouldBeTrue("testFunction(subclass2)");

