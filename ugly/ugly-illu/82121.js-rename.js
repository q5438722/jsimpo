const ObjectID = require("bson-objectid");

const logging = require("@tryghost/logging");

var { createTransactionalMigration } = require("../../utils.js");

const MIGRATION_USER = 1;
module.exports = createTransactionalMigration(async function e(i) {
  const t = await i("settings").where("key", "=", "email_verification_required").first();
  if (!t) {
    logging.info("Adding \"email_verification_required\" record to \"settings\" table");const r = i.raw("CURRENT_TIMESTAMP");
    await i("settings").insert({ id: ObjectID().toHexString(), key: "email_verification_required", value: "false", group: "email", type: "boolean", flags: "RO", created_at: r, created_by: MIGRATION_USER, updated_at: r, updated_by: MIGRATION_USER });
  } else {
    logging.warn("Skipped adding \"email_verification_required\" record to \"settings\" table. Record already exists!");
  }
}, async function e(i) {
  logging.info("Removing \"email_verification_required\" record from \"settings\" table");await i("settings").where("key", "=", "email_verification_required").del();
});