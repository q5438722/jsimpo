const debug = require("@tryghost/debug")("api:v2:utils:serializers:output:db");

module.exports = { backupContent(e, t, o) {
    debug("backupContent");o.response = { db: [{ filename: e }] };
  }, exportContent(e, t, o) {
    debug("exportContent");o.response = { db: [e] };
  }, importContent(e, t, o) {
    debug("importContent");const n = e.length === 2 ? e[1].problems : e[0].problems;
    o.response = { db: [], problems: n };
  }, deleteAllContent(e, t, o) {
    o.response = { db: [] };
  } };
