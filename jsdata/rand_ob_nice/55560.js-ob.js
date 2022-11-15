'use strict';
const _0xdb9d = ["missing crypto", "assert", "tls", "../common/fixtures", "readKey", "agent2-key.pem", "agent2-cert.pem", "x\u221aab c", "xb\b\u001aab c", "Server", "log", "server: on secureConnection", "getProtocol", "end", "listen", "client: on data", "string", "client: on secureConnect", "3|2|1|0|4", "ascii", "data", "secureConnect", "connect", "address", "port", "setEncoding", "MwvTt", "RsOLp", "VRtqj", "otiJI", "JOnXo", "mustCall", "close", "split", "strictEqual", "notStrictEqual", "readyState", 
"rqENu", "kfgPd", "879389jjDJgy", "1EMDbiP", "735234YpPZwN", "720872SRaOXI", "93606kQfZHw", "229819RqhbPJ", "4QGrtsy", "1039174INshzn", "1873641kTuytM", "../common", "skip"];
const _0x36f003 = _0x5718;
(function(data, val) {
  const toMonths = _0x5718;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(186)) + -parseInt(toMonths(187)) * -parseInt(toMonths(188)) + parseInt(toMonths(189)) + parseInt(toMonths(190)) + -parseInt(toMonths(191)) * parseInt(toMonths(192)) + -parseInt(toMonths(193)) + parseInt(toMonths(194));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x1b49f8) {
      data["push"](data["shift"]());
    }
  }
})(_0xdb9d, 417452 + 433251 + -509 * 521);
function _0x5718(isBgroundImg, stgs) {
  return _0x5718 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (7731 + -190 * -39 + -14955);
    let _0x16ef54 = _0xdb9d[isBgroundImg];
    return _0x16ef54;
  }, _0x5718(isBgroundImg, stgs);
}
const common = require(_0x36f003(195));
if (!common["hasCrypto"]) {
  common[_0x36f003(196)](_0x36f003(197));
}
const assert = require(_0x36f003(198));
const tls = require(_0x36f003(199));
const fixtures = require(_0x36f003(200));
const options = {
  "key" : fixtures[_0x36f003(201)](_0x36f003(202)),
  "cert" : fixtures[_0x36f003(201)](_0x36f003(203))
};
const messageUtf8 = _0x36f003(204);
const messageAscii = _0x36f003(205);
const server = tls[_0x36f003(206)](options, common["mustCall"](function(myPreferences) {
  const getPreferenceKey = _0x36f003;
  console[getPreferenceKey(207)](getPreferenceKey(208), myPreferences[getPreferenceKey(209)]());
  myPreferences[getPreferenceKey(210)](messageUtf8);
}));
server[_0x36f003(211)](-6696 + -5 * 1829 + 15841, function() {
  const makeTransactionID = _0x36f003;
  const base_c = {
    "VRtqj" : makeTransactionID(212),
    "otiJI" : makeTransactionID(213),
    "feWtO" : makeTransactionID(214),
    "xZaLg" : makeTransactionID(215),
    "rqENu" : "closed",
    "kfgPd" : "client: on close",
    "MwvTt" : makeTransactionID(216),
    "RsOLp" : makeTransactionID(217),
    "JOnXo" : makeTransactionID(218)
  };
  const p = tls[makeTransactionID(219)]({
    "port" : this[makeTransactionID(220)]()[makeTransactionID(221)],
    "rejectUnauthorized" : ![]
  });
  let script = "";
  p[makeTransactionID(222)](base_c[makeTransactionID(223)]);
  p["on"](base_c[makeTransactionID(224)], function(body) {
    const getConcrete = makeTransactionID;
    console["log"](base_c[getConcrete(225)], body);
    assert["ok"](typeof body === base_c[getConcrete(226)]);
    script = script + body;
  });
  p["on"](base_c[makeTransactionID(227)], common[makeTransactionID(228)](() => {
    const getConsoleMethod = makeTransactionID;
    console[getConsoleMethod(207)](base_c["feWtO"]);
  }));
  p["on"](makeTransactionID(229), common["mustCall"](function() {
    const getConcrete = makeTransactionID;
    const callbackVals = base_c["xZaLg"][getConcrete(230)]("|");
    let callbackCount = 9572 + -1 * 751 + 8821 * -1;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          assert[getConcrete(231)](messageAscii, script);
          continue;
        case "1":
          assert[getConcrete(232)](messageUtf8, script);
          continue;
        case "2":
          assert[getConcrete(231)](p[getConcrete(233)], base_c[getConcrete(234)]);
          continue;
        case "3":
          console[getConcrete(207)](base_c[getConcrete(235)]);
          continue;
        case "4":
          server[getConcrete(229)]();
          continue;
      }
      break;
    }
  }));
});

