'use strict';
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

