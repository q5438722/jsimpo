'use strict';
const logging = require("@tryghost/logging");
module.exports = {
  config : {
    transaction : true
  },
  async up({
    transacting : update
  }) {
    const ind = {
      provider : "mailgun",
      apiKey : null,
      domain : null,
      baseUrl : null
    };
    const a = await update("settings").where({
      key : "bulk_email_settings"
    }).select().first();
    let i;
    try {
      i = JSON.parse(a.value) || ind;
    } catch (e) {
      logging.warn(`Error parsing bulk_email_settings JSON. Using defaults`);
      i = ind;
    }
    const lines = [{
      key : "mailgun_api_key",
      value : i.apiKey
    }, {
      key : "mailgun_domain",
      value : i.domain
    }, {
      key : "mailgun_base_url",
      value : i.baseUrl
    }];
    for (const l of lines) {
      logging.info(`Updating ${l.key} setting's value, group, type & flags.`);
      await update("settings").where({
        key : l.key
      }).update({
        group : "email",
        type : "string",
        flags : null,
        value : l.value
      });
    }
  },
  async down({
    transacting : knex
  }) {
    const room = ["mailgun_api_key", "mailgun_domain", "mailgun_base_url"];
    logging.info(`Deleting settings: ${room.join(", ")}`);
    await knex("settings").whereIn("key", room).del();
  }
};

