'use strict';
const debug = require("@tryghost/debug")("api:v2:utils:serializers:output:db");
module.exports = {
  backupContent(e, t, state) {
    debug("backupContent");
    state.response = {
      db : [{
        filename : e
      }]
    };
  },
  exportContent(exportedData, params, options) {
    debug("exportContent");
    options.response = {
      db : [exportedData]
    };
  },
  importContent(elms, md, options) {
    debug("importContent");
    const problems = elms.length === 2 ? elms[1].problems : elms[0].problems;
    options.response = {
      db : [],
      problems : problems
    };
  },
  deleteAllContent(binProps, controller, options) {
    options.response = {
      db : []
    };
  }
};

