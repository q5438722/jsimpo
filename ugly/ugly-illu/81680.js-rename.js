const moment = require("moment-timezone");

const settingsCache = require("../../../../../../../shared/settings-cache");

const format = t => {
  return moment(t).tz(settingsCache.get("timezone")).toISOString(true);
};

const forPost = e => {
  ["created_at", "updated_at", "published_at"].forEach(t => {
    if (e[t]) {
      e[t] = format(e[t]);
    }
  });return e;
};

module.exports.format = format;module.exports.forPost = forPost;