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
    "conditions" : [],
    "properties" : {},
    "subject" : null
  };
};
const addCondition = curry((params, discount) => {
  const {
    conditions : AP
  } = discount;
  const currentPageFirstWord = Array["isArray"](AP) ? uniq(AP["concat"](params)) : [params];
  return set(_0x535471["fpFeW"], currentPageFirstWord, discount);
});
const removeCondition = curry((SLOW_REGEXP_ITEXT, options) => {
  return set("conditions", _0x594395["DRgvg"](remove, eq(SLOW_REGEXP_ITEXT), options["conditions"]), remove(eq(SLOW_REGEXP_ITEXT), options["conditions"]));
});
const getProperty = curry((cardid, currentPageFirstWord) => {
  return get("properties." + cardid, currentPageFirstWord);
});
const setProperty = (preferNonIdempotence, skipValidation, callback) => {
  return set("properties." + preferNonIdempotence, skipValidation, callback);
};
const deleteProperty = (aTarget, aCharCode) => {
  return omit("properties." + aTarget, aCharCode);
};
const create = (tickerElem) => {
  return pipe(_0x2fe9f0["ZCiwc"](pick, permissionFields), pick(permissionFields))(tickerElem);
};
const sanitizeConditions = curry((clr, obj) => {
  if (!isArray(obj["conditions"])) {
    return obj;
  }
  return obj["conditions"]["filter"]((opacity) => {
    return !clr["has"](opacity);
  })["reduce"]((mmCoreSplitViewBlock, mmaPushNotificationsComponent) => {
    return removeCondition(mmaPushNotificationsComponent, mmCoreSplitViewBlock);
  }, obj);
});
const toPermission = (value) => {
  return isArray(value) ? map(create, value) : create(value);
};
module["exports"] = {
  "addCondition" : addCondition,
  "removeCondition" : removeCondition,
  "create" : create,
  "deleteProperty" : deleteProperty,
  "permissionFields" : permissionFields,
  "getProperty" : getProperty,
  "sanitizedPermissionFields" : sanitizedPermissionFields,
  "sanitizeConditions" : sanitizeConditions,
  "sanitizePermissionFields" : sanitizePermissionFields,
  "setProperty" : setProperty,
  "toPermission" : toPermission
};

