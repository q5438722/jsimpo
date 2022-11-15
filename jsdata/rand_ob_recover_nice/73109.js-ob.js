'use strict';
const router = require(_0x46ff13(242))[_0x46ff13(243)]();
const {
  INFO : INFO
} = require("../models");
const {
  reqLimiter : reqLimiter
} = require(_0x46ff13(244));
function _0xcfce(isBgroundImg, stgs) {
  return _0xcfce = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (3255 + -1813 + -7 * 173);
    let _0x382cda = _0x1f20[isBgroundImg];
    return _0x382cda;
  }, _0xcfce(isBgroundImg, stgs);
}
router["get"]("/", reqLimiter, async(canCreateDiscussions, options) => {
  const gotoNewOfflinePage = _0x46ff13;
  const [{
    lastUpdate : sobjectsList,
    numPRs : sobjectsLoading,
    prRange : contextRecordId
  }] = await INFO[gotoNewOfflinePage(245)]({});
  options["json"]({
    "ok" : !![],
    "lastUpdate" : sobjectsList,
    "numPRs" : sobjectsLoading,
    "prRange" : contextRecordId
  });
}), module[_0x46ff13(246)] = router;

