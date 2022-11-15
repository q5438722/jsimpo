'use strict';
const common = require("../common");
const fixtures = require("../common/fixtures");
if (!common["hasCrypto"]) {
  common["skip"]("missing crypto");
}
process["env"]["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
common["expectWarning"]("Warning", "Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' " + "makes TLS connections and HTTPS requests insecure by disabling " + "certificate verification.");
const assert = require("assert");
const https = require("https");
function read(characteristicUUID) {
  return fixtures["readKey"](characteristicUUID);
}
const key1 = read("agent1-key.pem");
const cert1 = read("agent1-cert.pem");
const key2 = read("agent2-key.pem");
const cert2 = read("agent2-cert.pem");
const key3 = read("agent3-key.pem");
const cert3 = read("agent3-cert.pem");
const ca1 = read("ca1-cert.pem");
const ca2 = read("ca2-cert.pem");
const agent0 = new https["Agent"];
const agent1 = new https["Agent"]({
  "ca" : [ca1]
});
const agent2 = new https["Agent"]({
  "ca" : [ca2]
});
const agent3 = new https["Agent"]({
  "ca" : [ca1, ca2]
});
const options1 = {
  "key" : key1,
  "cert" : cert1
};
const options2 = {
  "key" : key2,
  "cert" : cert2
};
const options3 = {
  "key" : key3,
  "cert" : cert3
};
const server1 = server(options1);
const server2 = server(options2);
const server3 = server(options3);
let listenWait = 0;
server1["listen"](0, listening());
server2["listen"](0, listening());
server3["listen"](0, listening());
const responseErrors = {};
let pending = 0;
function server(options) {
  const value = https["createServer"](options, handler);
  value["requests"] = [];
  value["expectCount"] = 0;
  return value;
}
function handler(msg, response) {
  var incoming = {};
  this["requests"]["push"](msg["url"]);
  response["statusCode"] = 200;
  response["setHeader"](incoming["QbJwJ"], incoming["WINux"]);
  response["end"]("hello, world\n");
}
function listening() {
  listenWait++;
  return () => {
    listenWait--;
    if (listenWait === 0) {
      allListening();
    }
  };
}
function makeReq(path, port, error, host, ca) {
  pending++;
  const options = {
    "port" : port,
    "path" : path,
    "ca" : ca
  };
  if (!ca) {
    options["agent"] = agent0;
  } else {
    if ("VzWkt" === _0x197a94["EJiJf"]) {
      if (!Array["isArray"](ca)) {
        ca = [ca];
      }
      if (ca["includes"](ca1) && ca["includes"](ca2)) {
        options["agent"] = agent3;
      } else {
        if (ca["includes"](ca1)) {
          options["agent"] = agent1;
        } else {
          if (ca["includes"](ca2)) {
            options["agent"] = agent2;
          } else {
            if (_0x197a94["mVkMt"] !== _0x197a94["mVkMt"]) {
              options["agent"] = agent0;
            } else {
              options["agent"] = agent0;
            }
          }
        }
      }
    } else {
      options["headers"] = {
        "host" : host
      };
    }
  }
  if (host) {
    if (_0x197a94["XPtjo"] === _0x197a94["wxsKj"]) {
      const path = server1["address"]()["port"];
      const sendPort = server2["address"]()["port"];
      const next = server3["address"]()["port"];
      makeReq(_0x197a94["ukCHL"], path, "UNABLE_TO_VERIFY_LEAF_SIGNATURE");
      makeReq(_0x197a94["odyNA"], path, "ERR_TLS_CERT_ALTNAME_INVALID", null, ca1);
      makeReq("/inv1-ca1ca2", path, _0x197a94["LQaFW"], null, [ca1, ca2]);
      makeReq(_0x197a94["YTfbH"], path, null, _0x197a94["ubysg"], ca1);
      makeReq(_0x197a94["dHYJw"], path, null, "agent1", [ca1, ca2]);
      makeReq(_0x197a94["pEAKa"], path, "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "agent1", ca2);
      makeReq("/inv2", sendPort, _0x197a94["mmaot"]);
      makeReq(_0x197a94["yToQH"], sendPort, _0x197a94["mmaot"], _0x197a94["XbjiG"], ca1);
      makeReq(_0x197a94["QRlmb"], sendPort, "DEPTH_ZERO_SELF_SIGNED_CERT", _0x197a94["XbjiG"], [ca1, ca2]);
      makeReq(_0x197a94["TyBxW"], next, "UNABLE_TO_VERIFY_LEAF_SIGNATURE");
      makeReq(_0x197a94["wbJzX"], next, "ERR_TLS_CERT_ALTNAME_INVALID", null, ca2);
      makeReq(_0x197a94["UMSJL"], next, "ERR_TLS_CERT_ALTNAME_INVALID", null, [ca1, ca2]);
      makeReq("/val3-ca2", next, null, _0x197a94["vByHC"], ca2);
      makeReq(_0x197a94["zckEe"], next, null, _0x197a94["vByHC"], [ca1, ca2]);
      makeReq(_0x197a94["KYySY"], next, _0x197a94["Lcxjz"], "agent1", ca1);
    } else {
      options["headers"] = {
        "host" : host
      };
    }
  }
  const PL$12 = https["get"](options);
  const _0x1c58c5 = port === server1["address"]()["port"] ? server1 : port === server2["address"]()["port"] ? server2 : port === server3["address"]()["port"] ? server3 : null;
  if (!_0x1c58c5) {
    throw new Error("invalid port: " + port);
  }
  _0x1c58c5["expectCount"]++;
  PL$12["on"](_0x197a94["lVNaR"], common["mustCall"]((options) => {
    var a = {
      "Pgjwj" : _0x197a94["jzBEz"],
      "QCTIO" : _0x197a94["ozXrr"]
    };
    if (_0x197a94["IFBUg"] !== _0x197a94["IFBUg"]) {
      server1["close"]();
      server2["close"]();
      server3["close"]();
    } else {
      assert["strictEqual"](options["connection"]["authorizationError"], error);
      responseErrors[path] = options["connection"]["authorizationError"];
      pending--;
      if (pending === 0) {
        if (_0x197a94["glxVv"] === _0x197a94["glxVv"]) {
          server1["close"]();
          server2["close"]();
          server3["close"]();
        } else {
          this["requests"]["push"](PL$12["url"]);
          options["statusCode"] = 200;
          options["setHeader"](a["HAhwt"], a["Pgjwj"]);
          options["end"](a["QCTIO"]);
        }
      }
      options["resume"]();
    }
  }));
}
function allListening() {
  const path = server1["address"]()["port"];
  const sendPort = server2["address"]()["port"];
  const next = server3["address"]()["port"];
  makeReq(_0x3a84d8["mfvQs"], path, _0x3a84d8["dmkUl"]);
  makeReq(_0x3a84d8["QcIxZ"], path, _0x3a84d8["RJFwF"], null, ca1);
  makeReq("/inv1-ca1ca2", path, _0x3a84d8["RJFwF"], null, [ca1, ca2]);
  makeReq(_0x3a84d8["aUGHx"], path, null, _0x3a84d8["pAHDV"], ca1);
  makeReq(_0x3a84d8["nJNbC"], path, null, "agent1", [ca1, ca2]);
  makeReq("/inv1-ca2", path, _0x3a84d8["dmkUl"], _0x3a84d8["pAHDV"], ca2);
  makeReq(_0x3a84d8["olBzE"], sendPort, _0x3a84d8["bOalk"]);
  makeReq(_0x3a84d8["wGBMu"], sendPort, _0x3a84d8["bOalk"], _0x3a84d8["Wbhbw"], ca1);
  makeReq("/inv2-ca1ca2", sendPort, _0x3a84d8["bOalk"], "agent2", [ca1, ca2]);
  makeReq(_0x3a84d8["BzyVa"], next, _0x3a84d8["dmkUl"]);
  makeReq("/inv3-ca2", next, _0x3a84d8["RJFwF"], null, ca2);
  makeReq("/inv3-ca1ca2", next, _0x3a84d8["RJFwF"], null, [ca1, ca2]);
  makeReq("/val3-ca2", next, null, "agent3", ca2);
  makeReq("/val3-ca1ca2", next, null, _0x3a84d8["zXZEl"], [ca1, ca2]);
  makeReq("/inv3-ca1", next, _0x3a84d8["dmkUl"], _0x3a84d8["pAHDV"], ca1);
}
process["on"]("exit", () => {
  assert["strictEqual"](server1["requests"]["length"], server1["expectCount"]);
  assert["strictEqual"](server2["requests"]["length"], server2["expectCount"]);
  assert["strictEqual"](server3["requests"]["length"], server3["expectCount"]);
});

