'use strict';
const ObjectID = require("bson-objectid");
const logging = require("@tryghost/logging");
const {
  createTransactionalMigration : createTransactionalMigration
} = require("../../utils.js");
const MIGRATION_USER = 1;
module.exports = createTransactionalMigration(async function f(knex) {
  const t = await knex("settings").where("key", "=", "email_verification_required").first();
  if (!t) {
    logging.info('Adding "email_verification_required" record to "settings" table');
    const now = knex.raw("CURRENT_TIMESTAMP");
    await knex("settings").insert({
      id : ObjectID().toHexString(),
      key : "email_verification_required",
      value : "false",
      group : "email",
      type : "boolean",
      flags : "RO",
      created_at : now,
      created_by : MIGRATION_USER,
      updated_at : now,
      updated_by : MIGRATION_USER
    });
  } else {
    logging.warn('Skipped adding "email_verification_required" record to "settings" table. Record already exists!');
  }
}, async function f(update) {
  logging.info('Removing "email_verification_required" record from "settings" table');
  await update("settings").where("key", "=", "email_verification_required").del();
});

