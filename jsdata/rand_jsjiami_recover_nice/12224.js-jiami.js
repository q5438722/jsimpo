'use strict';
const _ = require("lodash");
const pluralize = require("pluralize");
const toPlural = (string) => {
  return pluralize(_["camelCase"](string));
};
const toSingular = (string) => {
  return _["camelCase"](pluralize["singular"](string));
};
const toInputName = (attr) => {
  return _["upperFirst"](toSingular(attr)) + "Input";
};
module["exports"] = {
  "toSingular" : toSingular,
  "toPlural" : toPlural,
  "toInputName" : toInputName
};

