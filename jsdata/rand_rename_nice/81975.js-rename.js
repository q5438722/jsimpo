'use strict';
const logging = require("@tryghost/logging");
module.exports = {
  config : {
    transaction : true
  },
  async up({
    transacting : knex
  }) {
    if (knex.client.config.client !== "mysql") {
      logging.warn("Skipping cleanup of duplicate subscriptions - database is not MySQL");
      return;
    }
    const expectedPackages = await knex("members_stripe_customers_subscriptions").select("subscription_id").count("subscription_id as count").groupBy("subscription_id").having("count", ">", 1);
    if (!expectedPackages.length) {
      logging.info("No duplicate subscriptions found");
      return;
    }
    logging.info(`Found ${expectedPackages.length} duplicate stripe subscriptions`);
    for (const expectedPackage of expectedPackages) {
      const paramsWithDefault = await knex("members_stripe_customers_subscriptions").select().where("subscription_id", expectedPackage.subscription_id);
      const devices = paramsWithDefault.sort((b, a) => {
        return a.updated_at - b.updated_at;
      });
      const [result, ...results] = devices;
      logging.info(`Keeping newest subscription ${result.id} - ${result.subscription_id}, last updated at ${result.updated_at}`);
      for (const result of results) {
        logging.info(`Deleting duplicate subscription ${result.id} - ${result.subscription_id}, last updated at ${result.updated_at}`);
        await knex("members_stripe_customers_subscriptions").where({
          id : result.id
        }).del();
      }
    }
  },
  async down() {
  }
};

