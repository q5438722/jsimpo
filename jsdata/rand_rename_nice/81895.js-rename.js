'use strict';
const debug = require("@tryghost/debug")("api:v3:utils:serializers:output:tags");
const mapper = require("./utils/mapper");
module.exports = {
  all(e, a, response) {
    debug("all");
    if (!e) {
      return;
    }
    if (e.meta) {
      response.response = {
        tags : e.data.map((e) => {
          return mapper.mapTag(e, response);
        }),
        meta : e.meta
      };
      return;
    }
    response.response = {
      tags : [mapper.mapTag(e, response)]
    };
  }
};

