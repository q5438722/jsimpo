'use strict';
var vip = "vip.v6";
var _0x4f2d = [vip, "ehUlXgw=", "wqHDrcK1w7xLw6kISh8pZG8Bwp3Cq3xlw6nCoRMLSjHCp2FWw6cvwoBjwpLClQArwqbCj2kAIMOqe1fDihwXCMObcsOAfWrDkMKww43DucOYwqlfw4loaRFqwpA9w4EIwq0oN8KaEcK0AwpQw60aecOVw43CssKzwp3DmWDDpGdswobDqsO7S2vDtw==", "KMKuJwM1", "w77DuGbDhMKt", "MsKaw6/CrX4=", "KhfCn0EB", "wozCuAkQ", "UMOfXsOLw7k=", "KsOSSQ==", "wpEuegQA", "HSzCr17Dqw==", "PMO/w73CrhY=", "wp8OeAsbcA==", "w57Du8Oyw59S", "MEYOwq5/w7g7w4/DiMOyMsK+bcK4w7x0w5TCr8OfwrHCiVTDvBQjZ8KZ", "w7VOwoTDkcKU", "HcKMBQs8", "NUTCny9C", "G8Olw6PCmhI=", 
"MzU6c8ObT8K+J8ODw5LCqlwdw6cFwoYQE1ULwqQGFsKgwr4ew5VYwofCl8KvbjN6wpAOQ8O+akzDg1vCtnXCl8KzwpZPLcORw5TCssKXw4HCicOncMKmIcKfcT/CvwdYwqbDvg==", "w6XDq8Ku", "GFsEw4Y=", "w7cOw7l8w6M=", "w7Udw7hnw64cwrg/", "w790w5kKw4w=", "WTpRw77DiA==", "w6rDq8K7", "O8O/w7vClU0Gw7zDmWljwpzCtgI=", "woEzTx08w6xcwoYvTsK9wq/DqWPCj8O9dg==", "ecOqZMKew47Do8OGRSQSWETDvT4=", "wpMNagcFW8KRwp/DpzkDa2PCizPCgMOwwp3DhsO0w4zDjSQDw4sWw6o=", "w6VOwr8swq5Gw7svwobCucKnwoBSwr3DkWImw6VlwoPCjUsSwqR2wrvDisOcw55bw5vCpwZ+G8OrMiljOMOzwpvCvsObwrF8woYzwqXDjBXCqXbCh8KLw7nDsFZywphgw5XCjA==", 
"IGZLS8OnU23CpcOfSEYcf8OGATXDiA==", "w7woQcO/woZPw5E1", "WwWgWvKip.KVmUzHvL6WsK=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[WwWgWKKVmUzHLWsK=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662284;
  };
  return fn(++count, long) >> count ^ long;
})(_0x4f2d, 333, 85248);
var _0x2ae9 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x4f2d[c];
  if (_0x2ae9["cNHMGo"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x2ae9["Yykaba"] = testcase;
    _0x2ae9["MDZxJM"] = {};
    _0x2ae9["cNHMGo"] = !![];
  }
  var e = _0x2ae9["MDZxJM"][c];
  if (e === undefined) {
    if (_0x2ae9["FEaNMO"] === undefined) {
      _0x2ae9["FEaNMO"] = !![];
    }
    x = _0x2ae9["Yykaba"](x, alpha);
    _0x2ae9["MDZxJM"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const ObjectID = require(_0x2ae9("0", "efLE"));
const logging = require(_0x2ae9("1", "SpX@"));
const {
  createTransactionalMigration : createTransactionalMigration
} = require(_0x2ae9("2", "zIZw"));
const MIGRATION_USER = 1;
module["exports"] = createTransactionalMigration(async function MakeLineChart(_) {
  var types = {
    "WsAup" : "key",
    "YdALv" : _0x2ae9("3", "6kzI"),
    "lZxxg" : _0x2ae9("4", "H$TA"),
    "gNqji" : _0x2ae9("5", "iNvi"),
    "ERtPl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "esiUv" : _0x2ae9("6", "G[R#"),
    "uTKpJ" : function(saveNotifs) {
      return saveNotifs();
    },
    "bPXgS" : "false",
    "BJGzl" : _0x2ae9("7", "RmAw"),
    "lQknt" : "boolean",
    "Biwar" : _0x2ae9("8", "&*]z")
  };
  const _0x147639 = await _("settings")[_0x2ae9("9", "sqKH")](types[_0x2ae9("a", "1)]e")], "=", types[_0x2ae9("b", "YT@S")])[_0x2ae9("c", "ZGOp")]();
  if (!_0x147639) {
    logging[_0x2ae9("d", "IY9S")](types[_0x2ae9("e", "JyQb")]);
    const now = _[_0x2ae9("f", "IGR#")](types[_0x2ae9("10", "6kzI")]);
    await types[_0x2ae9("11", "@(G0")](_, types[_0x2ae9("12", "efLE")])[_0x2ae9("13", "6kzI")]({
      "id" : types[_0x2ae9("14", "zM]q")](ObjectID)["toHexString"](),
      "key" : _0x2ae9("15", "rVZV"),
      "value" : types[_0x2ae9("16", "B7L1")],
      "group" : types[_0x2ae9("17", "sqKH")],
      "type" : types[_0x2ae9("18", "sx@6")],
      "flags" : "RO",
      "created_at" : now,
      "created_by" : MIGRATION_USER,
      "updated_at" : now,
      "updated_by" : MIGRATION_USER
    });
  } else {
    logging["warn"](types[_0x2ae9("19", "efLE")]);
  }
}, async function f(__) {
  var _0x584e28 = {
    "qvuod" : _0x2ae9("1a", "Uf8c"),
    "InrsV" : _0x2ae9("1b", "PtYt")
  };
  logging[_0x2ae9("1c", "suN]")](_0x584e28[_0x2ae9("1d", "2R2w")]);
  await __(_0x2ae9("1e", "2R2w"))[_0x2ae9("1f", "]chu")](_0x584e28[_0x2ae9("20", "ulXC")], "=", "email_verification_required")[_0x2ae9("21", "PtYt")]();
});

