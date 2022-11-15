'use strict';
describe("toDebugString", function() {
  it("should convert its argument to a string", function() {
    expect(toDebugString("string")).toEqual("string");
    expect(toDebugString(123)).toEqual("123");
    expect(toDebugString({
      a : {
        b : "c"
      }
    })).toEqual('{"a":{"b":"c"}}');
    expect(toDebugString(function t() {
      var e = 10;
    })).toEqual("function fn()");
    expect(toDebugString()).toEqual("undefined");
    var obj = {};
    obj.a = obj;
    expect(toDebugString(obj)).toEqual('{"a":"..."}');
    expect(toDebugString([obj, obj])).toEqual('[{"a":"..."},"..."]');
  });
  it("should convert its argument that are objects to string based on maxDepth", function() {
    var obj = {
      b : {
        c : {
          d : 1
        }
      }
    };
    expect(toDebugString(obj, 1)).toEqual('{"b":"..."}');
    expect(toDebugString(obj, 2)).toEqual('{"b":{"c":"..."}}');
    expect(toDebugString(obj, 3)).toEqual('{"b":{"c":{"d":1}}}');
  });
  they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", [NaN, null, undefined, true, false, -1, 0], function(t) {
    var obj = {
      b : {
        c : {
          d : 1
        }
      }
    };
    expect(toDebugString(obj, t)).toEqual('{"b":{"c":{"d":1}}}');
  });
});
describe("serializeObject", function() {
  it("should convert its argument to a string", function() {
    expect(serializeObject({
      a : {
        b : "c"
      }
    })).toEqual('{"a":{"b":"c"}}');
    var user = {};
    user.a = user;
    expect(serializeObject(user)).toEqual('{"a":"..."}');
    expect(serializeObject([user, user])).toEqual('[{"a":"..."},"..."]');
  });
  it("should convert its argument that are objects to string based on maxDepth", function() {
    var site = {
      b : {
        c : {
          d : 1
        }
      }
    };
    expect(serializeObject(site, 1)).toEqual('{"b":"..."}');
    expect(serializeObject(site, 2)).toEqual('{"b":{"c":"..."}}');
    expect(serializeObject(site, 3)).toEqual('{"b":{"c":{"d":1}}}');
  });
  they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", [NaN, null, undefined, true, false, -1, 0], function(key) {
    var site = {
      b : {
        c : {
          d : 1
        }
      }
    };
    expect(serializeObject(site, key)).toEqual('{"b":{"c":{"d":1}}}');
  });
});

