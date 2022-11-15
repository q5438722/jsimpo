const i18n = require("../../../../shared/i18n");

const errors = require("@tryghost/errors");

const urlUtils = require("../../../../shared/url-utils");

module.exports = function r(e, s, o, t) {
  const n = new RegExp("/page/(.*)?/");
  t = parseInt(t, 10);if (t === 1) {
    return urlUtils.redirect301(s, e.originalUrl.replace(n, "/"));
  } else if (t < 1 || isNaN(t)) {
    return o(new errors.NotFoundError({ message: i18n.t("errors.errors.pageNotFound") }));
  } else {
    e.params.page = t;return o();
  }
};
