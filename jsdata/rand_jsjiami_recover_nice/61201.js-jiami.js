'use strict';
var extend = function(name, definition) {
  function Class() {
    this["constructor"] = name;
  }
  Class["prototype"] = definition["prototype"];
  name["prototype"] = new Class;
};
var Car = function(type) {
  var testcase = function() {
    var ret = {
      "XbeSS" : _0x2e167e["kJYzI"],
      "JSWxL" : _0x2e167e["msCpY"]
    };
    var target = this;
    type["call"](target);
    Object["defineProperties"](target, {
      "make" : {
        "enumerable" : !![],
        "configurable" : !![],
        "get" : function() {
          if (ret["PAgtd"] === ret["XbeSS"]) {
            return make;
          } else {
            return "Ford";
          }
        }
      }
    });
    target["copy"] = function() {
      if (ret["cwArp"] !== "mMocn") {
        throw new Error(ret["JSWxL"]);
      } else {
        var target = this;
        type["call"](target);
        Object["defineProperties"](target, {
          "make" : {
            "enumerable" : !![],
            "configurable" : !![],
            "get" : function() {
              return "Ford";
            }
          }
        });
        target["copy"] = function() {
          throw new Error("Meant to be overriden");
        };
        return target;
      }
    };
    return target;
  };
  extend(testcase, type);
  return testcase;
}(Object);
var SuperCar = function(fn) {
  var testcase = function(fn) {
    var callbackVals = _0x38fd46["HTUqI"]["split"]("|");
    var callbackCount = 0;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          return target;
        case "1":
          fn["call"](target);
          continue;
        case "2":
          var target = this;
          continue;
        case "3":
          Object["defineProperties"](target, {
            "make" : {
              "enumerable" : !![],
              "configurable" : !![],
              "get" : function() {
                return fn;
              }
            }
          });
          continue;
        case "4":
          target["copy"] = function() {
          };
          continue;
      }
      break;
    }
  };
  extend(testcase, fn);
  return testcase;
}(Car);
assertEquals("Ford", (new Car)["make"]);
assertEquals("Bugatti", (new SuperCar("Bugatti"))["make"]);
assertEquals("Lambo", (new SuperCar("Lambo"))["make"]);
assertEquals("Shelby", (new SuperCar("Shelby"))["make"]);

