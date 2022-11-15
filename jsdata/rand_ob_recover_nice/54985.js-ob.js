'use strict';
const common = require(_0x43d617(339));
if (!common[_0x43d617(340)]) {
  common[_0x43d617(341)](_0x43d617(342));
}
function _0x51a3(isBgroundImg, stgs) {
  return _0x51a3 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1327 * -1 + -1 * -5981 + -4326);
    let _0x480b4a = _0x5d7f[isBgroundImg];
    return _0x480b4a;
  }, _0x51a3(isBgroundImg, stgs);
}
const assert = require(_0x43d617(343));
const http2 = require(_0x43d617(344));
const errCheck = common[_0x43d617(345)]({
  "name" : "Error",
  "code" : "ERR_STREAM_WRITE_AFTER_END",
  "message" : _0x43d617(346)
}, -8011 + 2 * -433 + 8878);
const {
  HTTP2_HEADER_PATH : HTTP2_HEADER_PATH,
  HTTP2_HEADER_METHOD : HTTP2_HEADER_METHOD,
  HTTP2_HEADER_STATUS : HTTP2_HEADER_STATUS,
  HTTP2_METHOD_HEAD : HTTP2_METHOD_HEAD
} = http2["constants"];
const server = http2[_0x43d617(347)]();
server["on"](_0x43d617(348), (p, headers) => {
  const makeTransactionID = _0x43d617;
  const info = {
    "jpsch" : makeTransactionID(349)
  };
  assert[makeTransactionID(350)](headers[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD);
  p[makeTransactionID(351)]({
    [HTTP2_HEADER_STATUS]:856 * 10 + -2579 + -5781
  });
  p["on"](info[makeTransactionID(352)], errCheck);
  p[makeTransactionID(353)]("data");
}), server[_0x43d617(354)](6994 + 1 * 5247 + 1 * -12241, () => {
  const now = _0x43d617;
  const PL$24 = {
    "ryJQN" : now(355),
    "yHgwY" : "data",
    "CvRDB" : now(356)
  };
  const updatedEdgesById = http2[now(357)](now(358) + server["address"]()[now(359)]);
  const PL$28 = updatedEdgesById[now(360)]({
    [HTTP2_HEADER_METHOD]:HTTP2_METHOD_HEAD,
    [HTTP2_HEADER_PATH]:"/"
  });
  PL$28["on"](PL$24[now(361)], common["mustCall"]((headers, a) => {
    const updateDevicesAfterDelay = now;
    assert[updateDevicesAfterDelay(350)](headers[HTTP2_HEADER_STATUS], 11 * 373 + -4452 + 549);
    assert[updateDevicesAfterDelay(350)](a, -2045 + -23 * -179 + 2067 * -1);
  }));
  PL$28["on"](PL$24[now(362)], common[now(363)]());
  PL$28["on"](PL$24[now(364)], common[now(365)](() => {
    const edgeId = now;
    server[edgeId(366)]();
    updatedEdgesById[edgeId(366)]();
  }));
});

