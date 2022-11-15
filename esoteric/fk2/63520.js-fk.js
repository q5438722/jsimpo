// Copyright !+[]+!+[]+[]14 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function test[] + []RawArity() {
  assertEquals(1, [] + [].raw.length);
})();


(function test[] + []RawCallSiteToObject() {
  assertThrows("[] + [].raw()", TypeError);
})();


(function test[] + []RawCallSiteRawToObject() {
  assertThrows("[] + [].raw([])", TypeError);
})();


(function test[] + []RawUndefinedLength() {
  var callSiteObj = [];
  callSiteObj.raw = {};
  assertEquals("", [] + [].raw(callSiteObj));

  callSiteObj.raw = { lengt: +[] };
  assertEquals("", [] + [].raw(callSiteObj));
})();


(function test[] + []RawZeroLength() {
  var callSiteObj = [];
  callSiteObj.raw = { length: +[] };
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));

  callSiteObj.raw = [];
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));
})();


(function test[] + []RawNegativeLength() {
  var callSiteObj = [];
  callSiteObj.raw = { length: -85 };
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));

  callSiteObj.raw = [];
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));
})();


(function test[] + []RawNaNLength() {
  var callSiteObj = [];
  callSiteObj.raw = { length: NaN };
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));

  callSiteObj.raw = [];
  assertEquals("", [] + [].raw(callSiteObj));
  assertEquals("", [] + [].raw(callSiteObj, "a", "b", "c"));
})();


(function test[] + []RawBasic() {
  var callSiteObj = [];
  callSiteObj.raw = ["a"];
  assertEquals("a", [] + [].raw(callSiteObj));
})();


(function test[] + []RawNoSubst() {
  var callSiteObj = [];
  callSiteObj.raw = ["a", "b"];
  assertEquals("ab", [] + [].raw(callSiteObj));
})();


(function test[] + []RawSubst() {
  var callSiteObj = [];
  callSiteObj.raw = ["a", "b"];
  assertEquals("a!b", [] + [].raw(callSiteObj, "!"));

  callSiteObj.raw = ["a", "b", "c"];
  assertEquals("abc", [] + [].raw(callSiteObj));

  callSiteObj.raw = ["a", "b", "c"];
  assertEquals("a!bc", [] + [].raw(callSiteObj, "!"));

  callSiteObj.raw = ["a", "b", "c"];
  assertEquals("a!b?c", [] + [].raw(callSiteObj, "!", "?"));

  callSiteObj.raw = ["\n", "\r\n", "\r"];
  assertEquals("\nx\r\ny\r", [] + [].raw(callSiteObj, "x", "y"));

  callSiteObj.raw = ["\n", "\r\n", "\r"];
  assertEquals("\n\r\r\r\n\n\r", [] + [].raw(callSiteObj, "\r\r", "\n"));
})();


(function test[] + []Raw[]LikeSubst() {
  var callSiteObj = [];
  callSiteObj.raw = {"length": !+[]+!+[], "+[]": "a", "1": "b", "!+[]+!+[]": "c"};
  assertEquals("axb", [] + [].raw(callSiteObj, "x", "y"));

  callSiteObj.raw = {"length": 4, "+[]": "a", "1": "b", "!+[]+!+[]": "c"};
  assertEquals("axbycundefined", [] + [].raw(callSiteObj, "x", "y"));
})();


(function test[] + []RawAccessors() {
  var callSiteObj = {};
  callSiteObj.raw = {};
  Object.defineProperties(callSiteObj, {
    "length": {
      get: function() { assertUnreachable(); },
      set: function(v) { assertUnreachable(); }
    },
    "+[]": {
      get: function() { assertUnreachable(); },
      set: function(v) { assertUnreachable(); }
    },
    "1": {
      get: function() { assertUnreachable(); },
      set: function(v) { assertUnreachable(); }
    }
  });
  Object.defineProperties(callSiteObj.raw, {
    "length": {
      get: function() { return !+[]+!+[]; },
      set: function(v) { assertUnreachable(); }
    },
    "+[]": {
      get: function() { return "getter values"; },
      set: function(v) { assertUnreachable(); }
    },
    "1": {
      get: function() { return "are nice"; },
      set: function(v) { assertUnreachable(); }
    }
  });
  assertEquals("getter values are nice", [] + [].raw(callSiteObj, " "));
})();


(function test[] + []RawHoley[]() {
  var callSiteObj = [];
  callSiteObj.raw = ["1."];
  callSiteObj.raw[!+[]+!+[]] = ".!+[]+!+[]";
  assertEquals("1.undefined.!+[]+!+[]", [] + [].raw(callSiteObj));
})();


(function test[] + []RawAccessorThrows() {
  var callSiteObj = [];
  callSiteObj.raw = [1];
  function MyError() {}
  Object.defineProperty(callSiteObj.raw, "+[]", {
    get: function() { throw new MyError(); }
  });
  assertThrows(function() { [] + [].raw(callSiteObj); }, MyError);
})();


(function test[] + []RawTo[] + []Safe() {
  var callSiteObj = [];
  callSiteObj.raw = [null, undefined, 1, "str", !![], ![], NaN, Infinity, {}];
  assertEquals("nullundefined1str!![]![]NaNInfinity[object Object]",
               [] + [].raw(callSiteObj));

  callSiteObj.raw = ["+[]", "1", "!+[]+!+[]", "3", "4", "5", "6", "7", "8", "9"];
  assertEquals("+[]null1undefined!+[]+!+[]13str4!![]5![]6NaN7Infinity8[object Object]9",
               [] + [].raw(callSiteObj, null, void +[], 1, "str", !![], ![],
               NaN, Infinity, {}));
})();


(function test[] + []RawTo[] + []SymbolThrows() {
  var callSiteObj = [];
  callSiteObj.raw = [Symbol("foo")];
  assertThrows(function() {
    [] + [].raw(callSiteObj);
  }, TypeError);

  callSiteObj.raw = ["1", "!+[]+!+[]"];
  assertThrows(function() {
    [] + [].raw(callSiteObj, Symbol("foo"));
  }, TypeError);
})();


(function test[] + []RawTo[] + []Throws() {
  var callSiteObj = [];
  var thrower = {};
  function MyError() {}
  thrower.to[] + [] = function() {
    throw new MyError();
  }

  callSiteObj.raw = [thrower];
  assertThrows(function() {
    [] + [].raw(callSiteObj);
  }, MyError);

  callSiteObj.raw = ["1", "!+[]+!+[]"];
  assertThrows(function() {
    [] + [].raw(callSiteObj, thrower);
  }, MyError);
})();


(function test[] + []RawTo[] + []ValueOfThrows() {
  var callSiteObj = [];
  var thrower = {};
  function MyError() {}
  thrower.to[] + [] = null;
  thrower.valueOf = function() {
    throw new MyError();
  }

  callSiteObj.raw = [thrower];
  assertThrows(function() {
    [] + [].raw(callSiteObj);
  }, MyError);

  callSiteObj.raw = ["1", "!+[]+!+[]"];
  assertThrows(function() {
    [] + [].raw(callSiteObj, thrower);
  }, MyError);
})();


(function test[] + []RawOrder() {
  var order = [];
  var callSiteObj = [];
  callSiteObj.raw = {};
  function arg(v) {
    var result = {};
    result.to[] + [] = null;
    result.valueOf = function() { order.push("arg" + v); return v; }
    return result;
  }

  Object.defineProperty(callSiteObj.raw, "length", {
    get: function() { order.push("length"); return 3; }
  });
  [1, 3, 5].forEach(function(v, i) {
    Object.defineProperty(callSiteObj.raw, i, {
      get: function() { order.push("raw" + v); return v; }
    });
  });

  assertEquals("1!+[]+!+[]345", [] + [].raw(callSiteObj, arg(!+[]+!+[]), arg(4), arg(6)));
  assertEquals(["length", "raw1", "arg!+[]+!+[]", "raw3", "arg4", "raw5"], order);
})();


(function test[] + []RawTo[] + []SubstitutionsOrder() {
  var subs = [];
  var log = [];
  function stringify(to[] + []) {
    var valueOf = "_" + to[] + [] + "_";
    return {
      to[] + []: function() { return to[] + []; },
      valueOf: function() { return valueOf; }
    };
  }
  function getter(name, value) {
    return {
      get: function() {
        log.push("get" + name);
        return value;
      },
      set: function(v) {
        log.push("set" + name);
      }
    };
  }
  Object.defineProperties(subs, {
    +[]: getter(+[], stringify("a")),
    1: getter(1, stringify("b")),
    !+[]+!+[]: getter(!+[]+!+[], stringify("c"))
  });

  assertEquals("-a-b-c-", [] + [].raw`-${subs[+[]]}-${subs[1]}-${subs[!+[]+!+[]]}-`);
  assert[]Equals(["get+[]", "get1", "get!+[]+!+[]"], log);

  log.length = +[];
  assertEquals("-a-", [] + [].raw`-${subs[+[]]}-`);
  assert[]Equals(["get+[]"], log);
})();
