'use strict';
const _ = require("lodash");
const Debug = require("debug");
const debug = Debug("cypress:server:lib:util:suppress_warnings");
let suppressed = false;
const suppress = () => {
  if (suppressed) {
    return;
  }
  suppressed = true;
  const logger = process.emitWarning;
  process.emitWarning = (e, message, data, ...args) => {
    if (_.isString(e) && _.includes(e, "NODE_TLS_REJECT_UNAUTHORIZED")) {
      return;
    }
    if (data === "DEP0005") {
      return;
    }
    if (process.env.CYPRESS_INTERNAL_ENV === "production") {
      debug("suppressed emitWarning from node: %o", {
        process : process,
        warning : e,
        type : message,
        code : data,
        args : args
      });
      return;
    }
    return logger.call(process, e, message, data, ...args);
  };
};
module.exports = {
  suppress : suppress
};

