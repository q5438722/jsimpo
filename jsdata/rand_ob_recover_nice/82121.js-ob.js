'use strict';
const ObjectID = require(_0x1d5307(229));
const logging = require(_0x1d5307(230));
const {
  createTransactionalMigration : createTransactionalMigration
} = require(_0x1d5307(231));
const MIGRATION_USER = 265 * 25 + -17 * -403 + 1925 * -7;
module["exports"] = createTransactionalMigration(async function Event(obj) {
  const String = _0x1d5307;
  const data = {
    "TtcvC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ROTNI" : "settings",
    "AVSHO" : "key",
    "mkQrU" : String(232),
    "QyWDo" : "CURRENT_TIMESTAMP",
    "QJvLx" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "mJrPi" : function(saveNotifs) {
      return saveNotifs();
    },
    "pJMCQ" : String(233),
    "PDmOC" : String(234),
    "XZgvv" : String(235)
  };
  const _0x4052ad = await data["TtcvC"](obj, data["ROTNI"])[String(236)](data[String(237)], "=", String(233))[String(238)]();
  if (!_0x4052ad) {
    logging[String(239)](data[String(240)]);
    const now = obj[String(241)](data[String(242)]);
    await data[String(243)](obj, data[String(244)])[String(245)]({
      "id" : data[String(246)](ObjectID)[String(247)](),
      "key" : data[String(248)],
      "value" : "false",
      "group" : data[String(249)],
      "type" : data[String(250)],
      "flags" : "RO",
      "created_at" : now,
      "created_by" : MIGRATION_USER,
      "updated_at" : now,
      "updated_by" : MIGRATION_USER
    });
  } else {
    logging[String(251)]('Skipped adding "email_verification_required" record to "settings" table. Record already exists!');
  }
}, async function update(event) {
  const getId = _0x1d5307;
  const pointerInstances = {
    "hRtkQ" : 'Removing "email_verification_required" record from "settings" table',
    "GcXlK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "skmGg" : getId(252)
  };
  logging["info"](pointerInstances[getId(253)]);
  await pointerInstances[getId(254)](event, pointerInstances[getId(255)])["where"]("key", "=", getId(233))[getId(256)]();
});

