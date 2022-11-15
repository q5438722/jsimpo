'use strict';
var _0x51db = ["1335107QiOVuT", "57296YMpADv", "22cORXJc", "Test to ensure correct behaviour of prototype caching with dictionary prototypes", "protoProp", "propToRemove", "protoTest(o)", "fakeProtoProp", "FAIL", "meh", "push", "protoKeys", "[1,2,3]", "test", "testFunction(subclass1)", "testFunction(subclass2)", "1499908efHPja", "16083UtvsiU", "273050mKdmqj", "853242eTxXTi", "197168WwvUqr"];
var _0xcbf008 = _0x7277;
(function(data, val) {
  var toMonths = _0x7277;
  for (; !![];) {
    try {
      var nodeval = parseInt(toMonths(180)) + parseInt(toMonths(181)) + parseInt(toMonths(182)) + -parseInt(toMonths(183)) + -parseInt(toMonths(184)) + parseInt(toMonths(185)) + -parseInt(toMonths(186)) * parseInt(toMonths(187));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x504887) {
      data["push"](data["shift"]());
    }
  }
})(_0x51db, 579999 + -261792 + 495019 * 1), description(_0xcbf008(188));
function protoTest(type) {
  var getRandomNumber = _0xcbf008;
  return type[getRandomNumber(189)];
}
var proto = {
  "protoProp" : "PASS",
  "propToRemove" : "foo"
};
var o = {
  "__proto__" : proto
};
delete proto[_0xcbf008(190)], protoTest(o), protoTest(o), protoTest(o), shouldBe(_0xcbf008(191), "'PASS'"), delete proto["protoProp"], proto[_0xcbf008(192)] = _0xcbf008(193), shouldBeUndefined(_0xcbf008(191));
function _0x7277(totalExpectedResults, entrySelector) {
  return _0x7277 = function(hashOrKey, value) {
    hashOrKey = hashOrKey - (-8014 * 1 + 851 + 1 * 7343);
    var _0x2a8261 = _0x51db[hashOrKey];
    return _0x2a8261;
  }, _0x7277(totalExpectedResults, entrySelector);
}
function protoTest2(v) {
  return v["b"];
}
proto = {
  "a" : 1,
  "b" : _0xcbf008(194),
  "c" : 2
};
o = {
  "__proto__" : proto
};
delete proto["b"], proto["d"] = -9370 + -13 * -379 + 6 * 741, protoTest2(o), protoTest2(o), protoTest2(o);
var protoKeys = [];
var i;
for (i in proto) {
  protoKeys[_0xcbf008(195)](proto[i]);
}
shouldBe(_0xcbf008(196), "[1,2,3]");
function protoTest3(popularities) {
  return popularities["b"];
}
proto = {
  "a" : 1,
  "b" : "meh",
  "c" : 2
};
o = {
  "__proto__" : proto
};
delete proto["b"], protoTest2(o), protoTest2(o), protoTest2(o), proto["d"] = -1 * -7502 + 2 * 4625 + -9 * 1861;
protoKeys = [];
for (i in proto) {
  protoKeys[_0xcbf008(195)](proto[i]);
}
shouldBe(_0xcbf008(196), _0xcbf008(197));
function testFunction(myPreferences) {
  var getPreferenceKey = _0xcbf008;
  return myPreferences[getPreferenceKey(198)];
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
i = 7766 + 5353 + -13119;
for (; i < 8466 + 2 * 717 + 470 * -20; i++) {
  subclass2["a" + i] = "a" + i;
}
testFunction(subclass1), shouldBeTrue(_0xcbf008(199)), shouldBeTrue(_0xcbf008(200)), proto[_0xcbf008(198)] = ![], subclass2[_0xcbf008(198)] = !![], shouldBeTrue("testFunction(subclass2)");

