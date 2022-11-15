'use strict';
import assert from "assert";
import lodashStable from "lodash";
import{
  noop as noop,
  identity as identity,
  isNpm as isNpm,
  mapCaches as mapCaches
}from "./utils.js";
import mergeWith from "../mergeWith.js";
import last from "../last.js";
describe("mergeWith", function() {
  it("should handle merging when `customizer` returns `undefined`", function() {
    var options = mergeWith({
      a : {
        b : [1, 1]
      }
    }, {
      a : {
        b : [0]
      }
    }, noop);
    assert.deepStrictEqual(options, {
      a : {
        b : [0, 1]
      }
    });
    options = mergeWith([], [undefined], identity);
    assert.deepStrictEqual(options, [undefined]);
  });
  it("should clone sources when `customizer` returns `undefined`", function() {
    var msg = {
      a : {
        b : {
          c : 1
        }
      }
    };
    var src = {
      a : {
        b : {
          d : 2
        }
      }
    };
    mergeWith({}, msg, src, noop);
    assert.deepStrictEqual(msg.a.b, {
      c : 1
    });
  });
  it("should defer to `customizer` for non `undefined` results", function() {
    var fakeLoggingOptions_ = mergeWith({
      a : {
        b : [0, 1]
      }
    }, {
      a : {
        b : [2]
      }
    }, function(value, result) {
      return lodashStable.isArray(value) ? value.concat(result) : undefined;
    });
    assert.deepStrictEqual(fakeLoggingOptions_, {
      a : {
        b : [0, 1, 2]
      }
    });
  });
  it("should provide `stack` to `customizer`", function() {
    var path;
    mergeWith({}, {
      a : {
        b : 2
      }
    }, function() {
      path = last(arguments);
    });
    assert.ok(isNpm ? path.constructor.name == "Stack" : path instanceof mapCaches.Stack);
  });
  it("should overwrite primitives with source object clones", function() {
    var fakeLoggingOptions_ = mergeWith({
      a : 0
    }, {
      a : {
        b : ["c"]
      }
    }, function(value, result) {
      return lodashStable.isArray(value) ? value.concat(result) : undefined;
    });
    assert.deepStrictEqual(fakeLoggingOptions_, {
      a : {
        b : ["c"]
      }
    });
  });
  it("should pop the stack of sources for each sibling property", function() {
    var a = ["b", "c"];
    var settings = {
      a : ["a"]
    };
    var defaults = {
      a : a,
      b : a
    };
    var fakeLoggingOptions_ = mergeWith(settings, defaults, function(value, result) {
      return lodashStable.isArray(value) ? value.concat(result) : undefined;
    });
    assert.deepStrictEqual(fakeLoggingOptions_, {
      a : ["a", "b", "c"],
      b : ["b", "c"]
    });
  });
});

