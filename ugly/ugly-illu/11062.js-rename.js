"use strict";

var { pipe, set, pick, eq, omit, remove, get, uniq, isArray, map, curry, merge } = require("lodash/fp");

const permissionFields = ["id", "action", "subject", "properties", "conditions", "role"];
const sanitizedPermissionFields = ["id", "action", "subject", "properties", "conditions"];
const sanitizePermissionFields = pick(sanitizedPermissionFields);

const getDefaultPermission = () => ({ conditions: [], properties: {}, subject: null });

const addCondition = curry((e, i) => {
  var { conditions: s } = i;
  const t = Array.isArray(s) ? uniq(s.concat(e)) : [e];
  return set("conditions", t, i);
});
const removeCondition = curry((e, i) => {
  return set("conditions", remove(eq(e), i.conditions), i);
});
const getProperty = curry((e, i) => get(`properties.${e}`, i));

const setProperty = (e, i, s) => {
  return set(`properties.${e}`, i, s);
};

const deleteProperty = (e, i) => omit(`properties.${e}`, i);

const create = e => {
  return pipe(pick(permissionFields), merge(getDefaultPermission()))(e);
};

const sanitizeConditions = curry((i, e) => {
  if (!isArray(e.conditions)) {
    return e;
  }return e.conditions.filter(e => !i.has(e)).reduce((e, i) => removeCondition(i, e), e);
});

const toPermission = e => isArray(e) ? map(create, e) : create(e);

module.exports = { addCondition: addCondition, removeCondition: removeCondition, create: create, deleteProperty: deleteProperty, permissionFields: permissionFields, getProperty: getProperty, sanitizedPermissionFields: sanitizedPermissionFields, sanitizeConditions: sanitizeConditions, sanitizePermissionFields: sanitizePermissionFields, setProperty: setProperty, toPermission: toPermission };