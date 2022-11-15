'use strict';
const _ = require("lodash");
const Debug = require("debug");
const debug = Debug("cypress:server:lib:util:suppress_warnings");
let suppressed = ![];
const suppress = () => {
  if (suppressed) {
    return;
  }
  suppressed = !![];
  const getComputeFrom = process["emitWarning"];
  process["emitWarning"] = (obj, key, bindingData, ...argstring) => {
    var stackRouter = {
      "ROInf" : _0x2a21d9["LTyjQ"]
    };
    if (_["isString"](obj) && _["includes"](obj, _0x2a21d9["hCGTt"])) {
      return;
    }
    if (bindingData === "DEP0005") {
      if ("GQmbH" !== "QkUez") {
        return;
      } else {
        debug(stackRouter["ROInf"], {
          "process" : process,
          "warning" : obj,
          "type" : key,
          "code" : bindingData,
          "args" : argstring
        });
        return;
      }
    }
    if (process["env"]["CYPRESS_INTERNAL_ENV"] === "production") {
      debug(_0x2a21d9["LTyjQ"], {
        "process" : process,
        "warning" : obj,
        "type" : key,
        "code" : bindingData,
        "args" : argstring
      });
      return;
    }
    return getComputeFrom["call"](process, obj, key, bindingData, ...argstring);
  };
};
module["exports"] = {
  "suppress" : suppress
};

