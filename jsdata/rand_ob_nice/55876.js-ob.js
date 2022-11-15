'use strict';
const _0x4fc6 = ["sPwfz", "bind", "1663868tJEWlT", "170347WremSV", "4QILPFu", "88001VphGDa", "9DFIRjE", "1788044wwRsJN", "619929FNVHuO", "1749213JCVAvk", "2080423CrJwsu", "../common", "assert", "dgram", "A message to send", "createSocket", "udp4", "toString", "length", "port", "address", "mustCall", "message", "localhost", "0|1|2|3|4", "split", "localhostIPv4", "strictEqual", "close", "send", "lNRdM"];
function _0x3d76(isBgroundImg, stgs) {
  return _0x3d76 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (11 * 446 + 10 * -699 + 2489);
    let _0x29e123 = _0x4fc6[isBgroundImg];
    return _0x29e123;
  }, _0x3d76(isBgroundImg, stgs);
}
const _0x2313d4 = _0x3d76;
(function(data, val) {
  const toMonths = _0x3d76;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(405)) + parseInt(toMonths(406)) * -parseInt(toMonths(407)) + -parseInt(toMonths(408)) * -parseInt(toMonths(409)) + -parseInt(toMonths(410)) + parseInt(toMonths(411)) + -parseInt(toMonths(412)) + parseInt(toMonths(413));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x1646e1) {
      data["push"](data["shift"]());
    }
  }
})(_0x4fc6, -34 * -44026 + -436338 + -122962);
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

