'use strict';
function _0x38f5(isBgroundImg, stgs) {
  return _0x38f5 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-6827 + 83 * 20 + 5556);
    let _0x1c4193 = _0x2949[isBgroundImg];
    return _0x1c4193;
  }, _0x38f5(isBgroundImg, stgs);
}
const common = require(_0x208615(401));
const fixtures = require(_0x208615(402));
if (!common["hasCrypto"]) {
  common[_0x208615(403)](_0x208615(404));
}
const h2 = require(_0x208615(405));
const tls = require("tls");
const server = h2["createSecureServer"]({
  "key" : fixtures[_0x208615(406)]("rsa_private.pem"),
  "cert" : fixtures[_0x208615(406)]("rsa_cert.crt"),
  "unknownProtocolTimeout" : 500,
  "allowHalfOpen" : !![]
});
server["on"](_0x208615(407), (p) => {
  const getAllocIID = _0x208615;
  const info = {
    "nhbgq" : getAllocIID(408)
  };
  p["on"](info[getAllocIID(409)], common[getAllocIID(410)](() => {
    server["close"]();
  }));
}), server[_0x208615(411)](-14 * -632 + 2 * -3408 + 2 * -1016, function() {
  const gotoNewOfflinePage = _0x208615;
  const _0x55dedd = {
    "rxCea" : gotoNewOfflinePage(412)
  };
  tls[gotoNewOfflinePage(413)]({
    "port" : server[gotoNewOfflinePage(414)]()[gotoNewOfflinePage(415)],
    "rejectUnauthorized" : ![],
    "ALPNProtocols" : [_0x55dedd["rxCea"]]
  });
});

