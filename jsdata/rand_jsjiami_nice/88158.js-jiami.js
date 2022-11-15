'use strict';
var settings = "vip.v6";
var dict = [settings, "QcOuwpvDgsO1woTDq8ORw7EuwpQyw5vDrzo=", "wqnDv8OXw5fCo8KTw5jCmsKmLF/CscOEwqHDlA==", "JnVtcFc=", "NSccIsK5X8K3", "viYpe.Cgvc6hhVKQmLymbBHI=="];
(function(obj, count, version) {
  var update = function(target, value, str, val, k) {
    value = value >> 8;
    k = "po";
    var str = "shift";
    var method = "push";
    if (value < target) {
      for (; --target;) {
        val = obj[str]();
        if (value === target) {
          value = val;
          str = obj[k + "p"]();
        } else {
          if (value && str["replace"](/[YeCgchhVKQmLymbBHI=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662926;
  };
  return update(++count, version) >> count ^ version;
})(dict, 250, 64E3);
var fn = function(a, f) {
  a = ~~"0x"["concat"](a);
  var x = dict[a];
  if (fn["gFwKsd"] === undefined) {
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
    fn["bQkTvT"] = testcase;
    fn["xxXsxg"] = {};
    fn["gFwKsd"] = !![];
  }
  var size = fn["xxXsxg"][a];
  if (size === undefined) {
    if (fn["VNjAwA"] === undefined) {
      fn["VNjAwA"] = !![];
    }
    x = fn["bQkTvT"](x, f);
    fn["xxXsxg"][a] = x;
  } else {
    x = size;
  }
  return x;
};
import{
  ApolloServer as ApolloServer
}from "apollo-server-express";
import{
  WebApp as WebApp
}from "meteor/webapp";
import{
  getUser as getUser
}from "meteor/apollo";
import{
  LinksCollection as LinksCollection
}from "/imports/api/links";
import _0xa540c4 from "/imports/apollo/schema.graphql";
const BUFFER_SEPARRATOR = {
  "Query" : {
    "getLink" : (watID, {
      id : id
    }) => {
      return LinksCollection["findOne"](id);
    },
    "getLinks" : () => {
      return LinksCollection["find"]()[fn("0", "ENFx")]();
    }
  }
};
const PACKET_ESCAPE = new ApolloServer({
  "typeDefs" : _0xa540c4,
  "resolvers" : BUFFER_SEPARRATOR,
  "context" : async({
    req : req
  }) => {
    return {
      "user" : await getUser(req[fn("1", "l#8y")]["authorization"])
    };
  }
});
PACKET_ESCAPE[fn("2", "h%1l")]({
  "app" : WebApp[fn("3", "iCUr")],
  "cors" : !![]
});

