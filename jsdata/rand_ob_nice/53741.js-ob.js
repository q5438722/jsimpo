'use strict';
const _0x2949 = ["538520RuCBhd", "../common", "../common/fixtures", "skip", "missing crypto", "http2", "readKey", "connection", "close", "nhbgq", "mustCall", "listen", "bogus", "connect", "address", "port", "56643VmeGot", "2NqHeYz", "1EYxywp", "73946sQLSmr", "66153LmzhuW", "326NHZaai", "953BiupjQ", "321fwebEe", "79RaqYAx", "327sXAcCF", "67EtIVCz"];
const _0x208615 = _0x38f5;
(function(data, val) {
  const toMonths = _0x38f5;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(389)) * parseInt(toMonths(390)) + parseInt(toMonths(391)) * parseInt(toMonths(392)) + parseInt(toMonths(393)) + parseInt(toMonths(394)) * -parseInt(toMonths(395)) + -parseInt(toMonths(396)) * parseInt(toMonths(397)) + parseInt(toMonths(398)) * -parseInt(toMonths(399)) + parseInt(toMonths(400));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x4c9d5f) {
      data["push"](data["shift"]());
    }
  }
})(_0x2949, 51287 * -4 + 270343 * -1 + 682878);
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

