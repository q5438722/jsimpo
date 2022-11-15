'use strict';
import assert from "assert";
import lodashStable from "lodash";
import{
  args as args,
  toArgs as toArgs
}from "./utils.js";
import pick from "../pick.js";
describe("pick", function() {
  var args = toArgs(["a", "c"]);
  var a = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
  };
  var out = {
    a : 1,
    b : {
      c : 2,
      d : 3
    }
  };
  it("should flatten `paths`", function() {
    assert.deepStrictEqual(pick(a, "a", "c"), {
      a : 1,
      c : 3
    });
    assert.deepStrictEqual(pick(a, ["a", "d"], "c"), {
      a : 1,
      c : 3,
      d : 4
    });
  });
  it("should support deep paths", function() {
    assert.deepStrictEqual(pick(out, "b.c"), {
      b : {
        c : 2
      }
    });
  });
  it("should support path arrays", function() {
    var userRoutesActions = {
      "a.b" : 1,
      a : {
        b : 2
      }
    };
    var fakeLoggingOptions_ = pick(userRoutesActions, [["a.b"]]);
    assert.deepStrictEqual(fakeLoggingOptions_, {
      "a.b" : 1
    });
  });
  it("should pick a key over a path", function() {
    var a = {
      "a.b" : 1,
      a : {
        b : 2
      }
    };
    lodashStable.each(["a.b", ["a.b"]], function(connectedPeerIds) {
      assert.deepStrictEqual(pick(a, connectedPeerIds), {
        "a.b" : 1
      });
    });
  });
  it("should coerce `paths` to strings", function() {
    assert.deepStrictEqual(pick({
      0 : "a",
      1 : "b"
    }, 0), {
      0 : "a"
    });
  });
  it("should return an empty object when `object` is nullish", function() {
    lodashStable.each([null, undefined], function(out) {
      assert.deepStrictEqual(pick(out, "valueOf"), {});
    });
  });
  it("should work with a primitive `object`", function() {
    assert.deepStrictEqual(pick("", "slice"), {
      slice : "".slice
    });
  });
  it("should work with `arguments` object `paths`", function() {
    assert.deepStrictEqual(pick(a, args), {
      a : 1,
      c : 3
    });
  });
});

