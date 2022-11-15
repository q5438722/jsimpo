'use strict';
const ObjectID = require("bson-objectid");
const logging = require("@tryghost/logging");
const {
  createTransactionalMigration : createTransactionalMigration
} = require("../../utils.js");
const MIGRATION_USER = 1;
module["exports"] = createTransactionalMigration(async function validateScalarListUpdate(type) {
  const _0x147639 = await type("settings")["where"](_0x18929e["WsAup"], "=", _0x18929e["YdALv"])["first"]();
  if (!_0x147639) {
    logging["info"](_0x18929e["lZxxg"]);
    const now = type["raw"](_0x18929e["gNqji"]);
    await type(_0x18929e["esiUv"])["insert"]({
      "id" : ObjectID()["toHexString"](),
      "key" : "email_verification_required",
      "value" : _0x18929e["bPXgS"],
      "group" : _0x18929e["BJGzl"],
      "type" : _0x18929e["lQknt"],
      "flags" : "RO",
      "created_at" : now,
      "created_by" : MIGRATION_USER,
      "updated_at" : now,
      "updated_by" : MIGRATION_USER
    });
  } else {
    logging["warn"](_0x18929e["Biwar"]);
  }
}, async function f(rootValueTypes) {
  logging["info"](_0x584e28["qvuod"]);
  await rootValueTypes("settings")["where"](_0x584e28["InrsV"], "=", "email_verification_required")["del"]();
});

