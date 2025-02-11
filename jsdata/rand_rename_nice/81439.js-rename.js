'use strict';
const i18n = require("../../../../shared/i18n");
const errors = require("@tryghost/errors");
const urlUtils = require("../../../../shared/url-utils");
module.exports = function handlePageParam(req, res, next, page) {
  const rssRegex = new RegExp("/page/(.*)?/");
  page = parseInt(page, 10);
  if (page === 1) {
    return urlUtils.redirect301(res, req.originalUrl.replace(rssRegex, "/"));
  } else {
    if (page < 1 || isNaN(page)) {
      return next(new errors.NotFoundError({
        message : i18n.t("errors.errors.pageNotFound")
      }));
    } else {
      req.params.page = page;
      return next();
    }
  }
};

