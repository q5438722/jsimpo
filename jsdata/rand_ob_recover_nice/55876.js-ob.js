'use strict';
const common = require(_0x2313d4(414));
const assert = require(_0x2313d4(415));
const dgram = require(_0x2313d4(416));
const message_to_send = _0x2313d4(417);
const server = dgram[_0x2313d4(418)](_0x2313d4(419));
server["on"]("message", common["mustCall"]((PL$126, myPreferences) => {
  const getPreferenceKey = _0x2313d4;
  assert["strictEqual"](myPreferences["address"], common["localhostIPv4"]);
  assert["strictEqual"](PL$126[getPreferenceKey(420)](), message_to_send["toString"]());
  server["send"](PL$126, 7435 + 1403 * -5 + -420, PL$126[getPreferenceKey(421)], myPreferences[getPreferenceKey(422)], myPreferences[getPreferenceKey(423)]);
})), server["on"]("listening", common[_0x2313d4(424)](() => {
  const makeTransactionID = _0x2313d4;
  const info = {
    "tcGEv" : makeTransactionID(425),
    "lNRdM" : makeTransactionID(426),
    "sPwfz" : "close"
  };
  const p = dgram[makeTransactionID(418)]("udp4");
  const rule = server["address"]()[makeTransactionID(422)];
  p["on"](info["tcGEv"], common[makeTransactionID(424)]((lengths, patternLengths) => {
    const patternLengthKey = makeTransactionID;
    const callbackVals = patternLengthKey(427)[patternLengthKey(428)]("|");
    let callbackCount = -4121 + -2691 + -2 * -3406;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          assert["strictEqual"](patternLengths[patternLengthKey(423)], common[patternLengthKey(429)]);
          continue;
        case "1":
          assert[patternLengthKey(430)](patternLengths[patternLengthKey(422)], rule);
          continue;
        case "2":
          assert[patternLengthKey(430)](lengths[patternLengthKey(420)](), message_to_send["toString"]());
          continue;
        case "3":
          p["close"]();
          continue;
        case "4":
          server[patternLengthKey(431)]();
          continue;
      }
      break;
    }
  }));
  p[makeTransactionID(432)](message_to_send, -1798 + 1130 + 668, message_to_send[makeTransactionID(421)], rule, info[makeTransactionID(433)]);
  p["on"](info[makeTransactionID(434)], common[makeTransactionID(424)]());
})), server["on"](_0x2313d4(431), common[_0x2313d4(424)]()), server[_0x2313d4(435)](-46 * 190 + 9457 + -717);

