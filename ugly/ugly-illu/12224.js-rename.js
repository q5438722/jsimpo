"use strict";

const _ = require("lodash");

const pluralize = require("pluralize");

const toPlural = l => pluralize(_.camelCase(l));

const toSingular = l => _.camelCase(pluralize.singular(l));

const toInputName = l => `${_.upperFirst(toSingular(l))}Input`;

module.exports = { toSingular: toSingular, toPlural: toPlural, toInputName: toInputName };
