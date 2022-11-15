'use strict';
const moment = require("moment-timezone");
const settingsCache = require("../../../../../../../shared/settings-cache");
const format = (startTime) => {
  return moment(startTime).tz(settingsCache.get("timezone")).toISOString(true);
};
const forPost = (x) => {
  ["created_at", "updated_at", "published_at"].forEach((key) => {
    if (x[key]) {
      x[key] = format(x[key]);
    }
  });
  return x;
};
module.exports.format = format;
module.exports.forPost = forPost;

