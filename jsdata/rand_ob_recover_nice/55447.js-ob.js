'use strict';
const common = require(_0x52018a(228));
const fixtures = require(_0x52018a(229));
if (!common[_0x52018a(230)]) {
  common[_0x52018a(231)](_0x52018a(232));
}
function _0x558e(isBgroundImg, stgs) {
  return _0x558e = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (550 * -14 + -1447 * 3 + 12259);
    let _0x2ce887 = _0x3337[isBgroundImg];
    return _0x2ce887;
  }, _0x558e(isBgroundImg, stgs);
}
process[_0x52018a(233)]["NODE_TLS_REJECT_UNAUTHORIZED"] = "0", common[_0x52018a(234)](_0x52018a(235), "Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' " + "makes TLS connections and HTTPS requests insecure by disabling " + _0x52018a(236));
const assert = require(_0x52018a(237));
const https = require("https");
function read(characteristicUUID) {
  const getObserves = _0x52018a;
  return fixtures[getObserves(238)](characteristicUUID);
}
const key1 = read("agent1-key.pem");
const cert1 = read(_0x52018a(239));
const key2 = read(_0x52018a(240));
const cert2 = read("agent2-cert.pem");
const key3 = read(_0x52018a(241));
const cert3 = read(_0x52018a(242));
const ca1 = read(_0x52018a(243));
const ca2 = read("ca2-cert.pem");
const agent0 = new https["Agent"];
const agent1 = new (https[_0x52018a(244)])({
  "ca" : [ca1]
});
const agent2 = new (https[_0x52018a(244)])({
  "ca" : [ca2]
});
const agent3 = new (https[_0x52018a(244)])({
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
let listenWait = 2866 + 8 * 759 + -8938;
server1[_0x52018a(245)](9111 * 1 + 5273 + 31 * -464, listening()), server2[_0x52018a(245)](1349 + 3731 + 1 * -5080, listening()), server3[_0x52018a(245)](3 * 109 + 665 + -992, listening());
const responseErrors = {};
let pending = 1 * 4903 + 5 * 1926 + 1 * -14533;
function server(options) {
  const stringify = _0x52018a;
  const primaryReplicas = https["createServer"](options, handler);
  return primaryReplicas[stringify(246)] = [], primaryReplicas[stringify(247)] = -3169 + 5462 * -1 + 9 * 959, primaryReplicas;
}
function handler(data, selector) {
  const getKey = _0x52018a;
  const obj = {
    "FKqtC" : "foo",
    "ybQlS" : getKey(248)
  };
  this[getKey(246)][getKey(249)](data[getKey(250)]);
  selector[getKey(251)] = -755 + -8448 + 9403;
  selector[getKey(252)](obj[getKey(253)], obj[getKey(254)]);
  selector[getKey(255)]("hello, world\n");
}
function listening() {
  const rpm_traffic = {
    "vjrlv" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  return listenWait++, () => {
    const now = _0x558e;
    listenWait--;
    if (listenWait === -6 * 1174 + 152 + 6892) {
      rpm_traffic[now(256)](allListening);
    }
  };
}
function makeReq(path, port, pass, host, ca) {
  const get = _0x52018a;
  const data = {
    "ExwIP" : get(257),
    "fnWNK" : function(name, initialValue) {
      return name === initialValue;
    },
    "BvBFf" : get(258)
  };
  pending++;
  const query = {
    "port" : port,
    "path" : path,
    "ca" : ca
  };
  if (!ca) {
    query[get(259)] = agent0;
  } else {
    if (!Array[get(260)](ca)) {
      ca = [ca];
    }
    if (ca[get(261)](ca1) && ca[get(261)](ca2)) {
      query[get(259)] = agent3;
    } else {
      if (ca[get(261)](ca1)) {
        query["agent"] = agent1;
      } else {
        if (ca[get(261)](ca2)) {
          query["agent"] = agent2;
        } else {
          query[get(259)] = agent0;
        }
      }
    }
  }
  if (host) {
    query[get(262)] = {
      "host" : host
    };
  }
  const packByNumType = https["get"](query);
  const _0x239094 = port === server1[get(263)]()[get(264)] ? server1 : data[get(265)](port, server2[get(263)]()["port"]) ? server2 : data[get(265)](port, server3[get(263)]()[get(264)]) ? server3 : null;
  if (!_0x239094) {
    throw new Error(get(266) + port);
  }
  _0x239094["expectCount"]++;
  packByNumType["on"](data["BvBFf"], common[get(267)]((values) => {
    const parseInt = get;
    const callbackVals = data[parseInt(268)][parseInt(269)]("|");
    let callbackCount = 263 * -35 + -1603 * -1 + 7602;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          pending--;
          continue;
        case "1":
          values[parseInt(270)]();
          continue;
        case "2":
          assert["strictEqual"](values[parseInt(271)][parseInt(272)], pass);
          continue;
        case "3":
          responseErrors[path] = values["connection"][parseInt(272)];
          continue;
        case "4":
          if (pending === -107 * -39 + -7305 + 12 * 261) {
            server1[parseInt(273)]();
            server2[parseInt(273)]();
            server3[parseInt(273)]();
          }
          continue;
      }
      break;
    }
  }));
}
function allListening() {
  const getKey = _0x52018a;
  const obj = {
    "fpnNJ" : getKey(274),
    "MQIhr" : "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "Unlrp" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "lqxen" : "ERR_TLS_CERT_ALTNAME_INVALID",
    "rhslg" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "uXqbu" : "/inv1-ca1ca2",
    "MwVyv" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "HmUrT" : getKey(275),
    "NHrWw" : "agent1",
    "AAPLi" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "fFVos" : getKey(276),
    "cBxCy" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "bqJqh" : "/inv2",
    "eteNJ" : getKey(277),
    "EjXpK" : getKey(278),
    "ssGTd" : "DEPTH_ZERO_SELF_SIGNED_CERT",
    "rvKie" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "vxKqI" : getKey(279),
    "LwRHe" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "lXQJP" : function(runTest, context, source, version, expected, done) {
      return runTest(context, source, version, expected, done);
    },
    "uJQkX" : getKey(280),
    "KIcKV" : getKey(281)
  };
  const next = server1[getKey(263)]()[getKey(264)];
  const p3 = server2[getKey(263)]()[getKey(264)];
  const path = server3[getKey(263)]()[getKey(264)];
  makeReq(obj[getKey(282)], next, obj[getKey(283)]);
  obj[getKey(284)](makeReq, "/inv1-ca1", next, obj[getKey(285)], null, ca1);
  obj[getKey(286)](makeReq, obj[getKey(287)], next, obj["lqxen"], null, [ca1, ca2]);
  obj[getKey(288)](makeReq, obj["HmUrT"], next, null, obj[getKey(289)], ca1);
  obj[getKey(290)](makeReq, obj["fFVos"], next, null, obj[getKey(289)], [ca1, ca2]);
  makeReq(getKey(291), next, obj["MQIhr"], getKey(292), ca2);
  obj[getKey(293)](makeReq, obj["bqJqh"], p3, "DEPTH_ZERO_SELF_SIGNED_CERT");
  obj[getKey(290)](makeReq, getKey(294), p3, getKey(295), obj[getKey(296)], ca1);
  obj[getKey(290)](makeReq, obj[getKey(297)], p3, obj[getKey(298)], obj["eteNJ"], [ca1, ca2]);
  obj[getKey(293)](makeReq, getKey(299), path, obj[getKey(283)]);
  obj[getKey(300)](makeReq, obj["vxKqI"], path, obj[getKey(285)], null, ca2);
  obj[getKey(301)](makeReq, getKey(302), path, obj[getKey(285)], null, [ca1, ca2]);
  obj[getKey(303)](makeReq, getKey(304), path, null, getKey(280), ca2);
  makeReq(getKey(305), path, null, obj[getKey(306)], [ca1, ca2]);
  obj[getKey(303)](makeReq, obj["KIcKV"], path, obj[getKey(283)], obj[getKey(289)], ca1);
}
process["on"](_0x52018a(307), () => {
  const gotoNewOfflinePage = _0x52018a;
  assert["strictEqual"](server1[gotoNewOfflinePage(246)]["length"], server1["expectCount"]);
  assert[gotoNewOfflinePage(308)](server2[gotoNewOfflinePage(246)][gotoNewOfflinePage(309)], server2[gotoNewOfflinePage(247)]);
  assert[gotoNewOfflinePage(308)](server3[gotoNewOfflinePage(246)][gotoNewOfflinePage(309)], server3[gotoNewOfflinePage(247)]);
});

