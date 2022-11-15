'use strict';
const _ = require("lodash");
const pluralize = require("pluralize");
const toPlural = (string) => {
  return pluralize(_.camelCase(string));
};
const toSingular = (name) => {
  return _.camelCase(pluralize.singular(name));
};
const toInputName = (apiLimit) => {
  return `${_.upperFirst(toSingular(apiLimit))}Input`;
};
module.exports = {
  toSingular : toSingular,
  toPlural : toPlural,
  toInputName : toInputName
};

