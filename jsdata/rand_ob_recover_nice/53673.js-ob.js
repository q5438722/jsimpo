'use strict';
function _0x12af(isBgroundImg, stgs) {
  return _0x12af = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-4868 + -2858 + 7 * 1123);
    let _0x2fc1c5 = _0xf65f[isBgroundImg];
    return _0x2fc1c5;
  }, _0x12af(isBgroundImg, stgs);
}
const common = require(_0x3eb31c(145));
const http = require("http");
const server = http["createServer"](common[_0x3eb31c(146)]());
server["listen"](-8952 * 1 + 1 * -8595 + 17547, common[_0x3eb31c(147)](() => {
  const makeTransactionID = _0x3eb31c;
  const info = {
    "hvddC" : makeTransactionID(148)
  };
  const p = http[makeTransactionID(149)]({
    "method" : makeTransactionID(150),
    "host" : makeTransactionID(151),
    "port" : server[makeTransactionID(152)]()[makeTransactionID(153)]
  });
  p["on"]("abort", common[makeTransactionID(147)](() => {
    const gotoNewOfflinePage = makeTransactionID;
    server[gotoNewOfflinePage(154)]();
  }));
  p["on"](info["hvddC"], common[makeTransactionID(146)]());
  p[makeTransactionID(155)]();
  p["end"]();
}));

