const debug = require("@tryghost/debug")("api:v3:utils:serializers:output:tags");

const mapper = require("./utils/mapper");

module.exports = { all(e, a, r) {
    debug("all");if (!e) {
      return;
    }if (e.meta) {
      r.response = { tags: e.data.map(e => mapper.mapTag(e, r)), meta: e.meta };return;
    }r.response = { tags: [mapper.mapTag(e, r)] };
  } };
