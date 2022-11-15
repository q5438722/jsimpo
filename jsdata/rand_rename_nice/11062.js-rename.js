'use strict';
const {
  pipe : pipe,
  set : set,
  pick : pick,
  eq : eq,
  omit : omit,
  remove : remove,
  get : get,
  uniq : uniq,
  isArray : isArray,
  map : map,
  curry : curry,
  merge : merge
} = require("lodash/fp");
const permissionFields = ["id", "action", "subject", "properties", "conditions", "role"];
const sanitizedPermissionFields = ["id", "action", "subject", "properties", "conditions"];
const sanitizePermissionFields = pick(sanitizedPermissionFields);
const getDefaultPermission = () => {
  return {
    conditions : [],
    properties : {},
    subject : null
  };
};
const addCondition = curry((addedRecords, sortby) => {
  const {
    conditions : conds
  } = sortby;
  const currentPageFirstWord = Array.isArray(conds) ? uniq(conds.concat(addedRecords)) : [addedRecords];
  return set("conditions", currentPageFirstWord, sortby);
});
const removeCondition = curry((p1, e) => {
  return set("conditions", remove(eq(p1), e.conditions), e);
});
const getProperty = curry((canCreateDiscussions, falseKey) => {
  return get(`properties.${canCreateDiscussions}`, falseKey);
});
const setProperty = (parameters, path, name) => {
  return set(`properties.${parameters}`, path, name);
};
const deleteProperty = (rule, name) => {
  return omit(`properties.${rule}`, name);
};
const create = (context) => {
  return pipe(pick(permissionFields), merge(getDefaultPermission()))(context);
};
const sanitizeConditions = curry((_, tags) => {
  if (!isArray(tags.conditions)) {
    return tags;
  }
  return tags.conditions.filter((geomData) => {
    return !_.has(geomData);
  }).reduce((e, i) => {
    return removeCondition(i, e);
  }, tags);
});
const toPermission = (args) => {
  return isArray(args) ? map(create, args) : create(args);
};
module.exports = {
  addCondition : addCondition,
  removeCondition : removeCondition,
  create : create,
  deleteProperty : deleteProperty,
  permissionFields : permissionFields,
  getProperty : getProperty,
  sanitizedPermissionFields : sanitizedPermissionFields,
  sanitizeConditions : sanitizeConditions,
  sanitizePermissionFields : sanitizePermissionFields,
  setProperty : setProperty,
  toPermission : toPermission
};

