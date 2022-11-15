'use strict';
const router = require("express")["Router"]();
const {
  INFO : INFO
} = require("../models");
const {
  reqLimiter : reqLimiter
} = require("../req-limiter");
router["get"]("/", reqLimiter, async(canCreateDiscussions, cache) => {
  const [{
    lastUpdate : sobjectsList,
    numPRs : auth,
    prRange : contextRecordId
  }] = await INFO["find"]({});
  cache["json"]({
    "ok" : !![],
    "lastUpdate" : sobjectsList,
    "numPRs" : auth,
    "prRange" : contextRecordId
  });
});
module["exports"] = router;

