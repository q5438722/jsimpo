const Promise = require("bluebird");

const ObjectId = require("bson-objectid");

const _ = require("lodash");

const logging = require("@tryghost/logging");

module.exports.config = { transaction: true, irreversible: true };module.exports.up = e => {
  const t = _.merge({ context: { internal: true }, migrating: true }, e);

  const n = ["name", "email", "created_at", "created_by", "updated_at", "updated_by"];
  return t.transacting("subscribers").select().then(r => {
    if (r && r.length > 0) {
      logging.info(`Adding ${r.length} entries to members`);
      const e = _.map(r, t => {
        const e = n.reduce(function (e, r) {
          return Object.assign(e, { [r]: t[r] });
        }, {});
        e.id = ObjectId().toHexString();return e;
      });

      return Promise.map(e, e => {
        return t.transacting("members").insert(e);
      });
    } else {
      logging.info("Skipping populating members table: found 0 subscribers");return Promise.resolve();
    }
  });
};module.exports.down = () => {
  return Promise.reject();
};
