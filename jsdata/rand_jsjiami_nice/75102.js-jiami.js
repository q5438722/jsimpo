'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "JMOZHsOewrM=", "M8KOwqlmw6s=", "AMKBaQ==", "JnrDjQ==", "woDDh8O3", "w4rCshzCqg==", "bsO0e07Dq8KVMMOtNjUyU8KuwrM=", "dsKzAgvClA==", "wr1WfzfDqg==", "wpHDmsKqTMO2", "wqcAU8KhWw==", "wpYRNEfDtw==", "wrnDgcOhIlXDlW0=", "wqDDp8Ozw77Cog==", "GHfDjQ==", "RlEAw5bCjMKMw4oUEjTDlMKDGMOtRMKlw4jDgMOrKA41wpfDmnUTw4BZRcK8wrlS", "Z8Kkwr7DqQ==", "wofCmx5QwrA=", "wr9Lw63DsEI=", "O8O/w4bDkMKo", "OsKkwph+w6Y=", "wrAgeMKVWH/DmcO8X2XCpTvChsOEwqvDtlkuEzU=", "KsOhEA==", "woxew6nDv33CtB/Cilk=", 
"w7QswrpQ", "H3zDm8KDccKNwqQ=", "woc1wqA=", "O0fDr8Kjeg==", "bTFHwqrDrg==", "B0Z3w6hI", "w5PDohI=", "w7PDhhjDmA==", "B8OKw5wzYWLDmcOHw6w=", "fMKjCw==", "wqwMCVw=", "wqQgcg==", "wr0sb8KC", "w7vDtcKOfDZmwq0=", "wqokwqhjbA==", "NlnDvsKAew==", "ekgsKsOzc8OuDxPChMKO", "w742WsKcckbCtwk=", "w6wswrFVw74ew5nDkQ==", "dMKQHsKFR1TCj8OmHA==", "VMOncnXDvw==", "wr7Dm8KFZMOy", "ex7DrmTCuw==", "w7kmwrFmw7Yew5Q=", "vZNip.v6wjyNUSeKffShjtre=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[ZNwjyNUSeKffShjtre=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662229;
  };
  return fn(++count, size) >> count ^ size;
})(match, 449, 114944);
var fn = function(c, args) {
  c = ~~"0x"["concat"](c);
  var value = match[c];
  if (fn["NYJjPG"] === undefined) {
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
    fn["XxEcgA"] = testcase;
    fn["smzPGc"] = {};
    fn["NYJjPG"] = !![];
  }
  var prevValue = fn["smzPGc"][c];
  if (prevValue === undefined) {
    if (fn["alIrny"] === undefined) {
      fn["alIrny"] = !![];
    }
    value = fn["XxEcgA"](value, args);
    fn["smzPGc"][c] = value;
  } else {
    value = prevValue;
  }
  return value;
};
import{
  Meteor as Meteor
}from "meteor/meteor";
import{
  SyncedCron as SyncedCron
}from "meteor/littledata:synced-cron";
import{
  updateUserTokenpassBalances as updateUserTokenpassBalances
}from "./functions/updateUserTokenpassBalances";
import{
  Tokenpass as Tokenpass
}from "./Tokenpass";
import{
  Rooms as Rooms,
  Subscriptions as Subscriptions,
  Users as Users
}from "../../models";
import{
  removeUserFromRoom as removeUserFromRoom
}from "../../lib/server/functions/removeUserFromRoom";
function runTests() {
  var c = {
    "JypSr" : function(saveNotifs) {
      return saveNotifs();
    },
    "gJOKN" : function(state, undefinedAttr) {
      return state !== undefinedAttr;
    },
    "BTFej" : fn("0", "7$3H"),
    "TKDer" : function(require, load, callback) {
      return require(load, callback);
    },
    "rxlBD" : fn("1", "KLc6"),
    "OJWFk" : fn("2", "K66T"),
    "LreRp" : function(type, name) {
      return type === name;
    },
    "KdIMv" : fn("3", "^8!D"),
    "qbnjJ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const obj = {};
  Rooms[fn("4", "qSrS")]()["forEach"]((result) => {
    obj[result[fn("5", "8VoT")]] = result[fn("6", "KLc6")];
  });
  const target = {};
  Subscriptions["findByRoomIds"](Object[fn("7", "H*NO")](obj))[fn("8", "Im54")]((result) => {
    if (!target[result["u"][fn("9", "9YXr")]]) {
      if (c["gJOKN"](c[fn("a", "Im54")], fn("b", "J38$"))) {
        target[result["u"][fn("9", "9YXr")]] = [];
      } else {
        c[fn("c", "Uk00")](runTests);
        SyncedCron[fn("d", "$yyW")]({
          "name" : "Remove users from Token Channels",
          "schedule" : (result) => {
            return result[fn("e", "Vwxp")](fn("f", "#(UZ"));
          },
          "job" : runTests
        });
      }
    }
    target[result["u"][fn("10", "stX9")]][fn("11", "ABK%")](result[fn("12", "qSrS")]);
  });
  Object[fn("13", "qSrS")](target)[fn("14", "RviN")]((name) => {
    var el = {
      "QQjAh" : function(row, val) {
        return c["gJOKN"](row, val);
      },
      "HnUdI" : c[fn("15", "9YXr")],
      "ShZdr" : c[fn("16", "Im54")],
      "YEzZd" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    const val = Users[fn("17", "(1*^")](name);
    if (val && val[fn("18", "1pY*")] && val[fn("19", "H*NO")][fn("1a", "YzEN")]) {
      if (c[fn("1b", "HbOv")](c[fn("1c", "v#ze")], c["KdIMv"])) {
        const artistTrack = c[fn("1d", "Y%O]")](updateUserTokenpassBalances, val);
        target[name][fn("1e", "H*NO")]((tagName) => {
          const valid = Tokenpass["validateAccess"](obj[tagName], artistTrack);
          if (!valid) {
            if (el[fn("1f", "8VoT")](el["HnUdI"], el["ShZdr"])) {
              el[fn("20", "^8!D")](removeUserFromRoom, tagName, val);
            } else {
              if (!target[sub["u"][fn("21", "btAh")]]) {
                target[sub["u"][fn("22", "Im54")]] = [];
              }
              target[sub["u"][fn("23", "%xxH")]][fn("24", "LAo3")](sub["rid"]);
            }
          }
        });
      } else {
        const _0x475d2e = Tokenpass[fn("25", "HbOv")](obj[roomId], balances);
        if (!_0x475d2e) {
          c["TKDer"](removeUserFromRoom, roomId, val);
        }
      }
    }
  });
}
Meteor["startup"](function() {
  var mapped = {
    "JhNsJ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qIEPB" : fn("26", "stX9"),
    "UXJKY" : fn("27", "KlHt"),
    "xetjC" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  Meteor[fn("28", "v#ze")](function() {
    if (mapped[fn("29", "qSrS")] === mapped["UXJKY"]) {
      const artistTrack = mapped[fn("2a", "ABK%")](updateUserTokenpassBalances, userInfo);
      users[user][fn("2b", "%xxH")]((roomid) => {
        const _0x318783 = Tokenpass["validateAccess"](rooms[roomid], artistTrack);
        if (!_0x318783) {
          removeUserFromRoom(roomid, userInfo);
        }
      });
    } else {
      mapped[fn("2c", "O%oA")](runTests);
      SyncedCron[fn("2d", "Im54")]({
        "name" : fn("2e", "OF]&"),
        "schedule" : (result) => {
          return result[fn("2f", "22Yt")](fn("f", "#(UZ"));
        },
        "job" : runTests
      });
    }
  });
});

