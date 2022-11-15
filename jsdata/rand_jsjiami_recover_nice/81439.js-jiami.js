'use strict';
const i18n = require("../../../../shared/i18n");
const errors = require("@tryghost/errors");
const urlUtils = require("../../../../shared/url-utils");
module["exports"] = function log(request, sourceLink, callback, page) {
  const B538 = new RegExp("/page/(.*)?/");
  page = parseInt(page, 10);
  if (page === 1) {
    return urlUtils["redirect301"](sourceLink, request["originalUrl"]["replace"](B538, "/"));
  } else {
    if (page < 1 || isNaN(page)) {
      return callback(new errors["NotFoundError"]({
        "message" : i18n["t"](_0x2283e8["dhggI"])
      }));
    } else {
      request["params"]["page"] = page;
      return callback();
    }
  }
};

