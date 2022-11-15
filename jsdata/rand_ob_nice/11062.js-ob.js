'use strict';
const _0x2b40 = ["reduce", "690575zEmnXm", "1mCGiol", "894451WlBQlH", "247953cCdoxb", "3JMcHxS", "25QxUbDw", "33343DNEpKU", "36123UYrgSf", "269614SBfJYY", "1185093LxGijY", "lodash/fp", "action", "subject", "conditions", "properties", "isArray", "JDHTw", "properties.", "MDBYR", "rCBOO", "Xhpon", "filter", "has"];
function _0x196f(isBgroundImg, stgs) {
  return _0x196f = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-2471 + 9684 + -7019);
    let _0x1490d4 = _0x2b40[isBgroundImg];
    return _0x1490d4;
  }, _0x196f(isBgroundImg, stgs);
}
const _0x5ee281 = _0x196f;
(function(data, val) {
  const toMonths = _0x196f;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(194)) + -parseInt(toMonths(195)) * -parseInt(toMonths(196)) + parseInt(toMonths(197)) * parseInt(toMonths(198)) + parseInt(toMonths(199)) * -parseInt(toMonths(200)) + -parseInt(toMonths(201)) + parseInt(toMonths(202)) + -parseInt(toMonths(203));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x3ae5e0) {
      data["push"](data["shift"]());
    }
  }
})(_0x2b40, 760740 + 498380 + -357706 * 2);
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
} = require(_0x5ee281(204));
const permissionFields = ["id", _0x5ee281(205), _0x5ee281(206), "properties", _0x5ee281(207), "role"];
const sanitizedPermissionFields = ["id", "action", _0x5ee281(206), _0x5ee281(208), _0x5ee281(207)];
const sanitizePermissionFields = pick(sanitizedPermissionFields);
const getDefaultPermission = () => {
  return {
    "conditions" : [],
    "properties" : {},
    "subject" : null
  };
};
const addCondition = curry((params, sortby) => {
  const gotoNewOfflinePage = _0x5ee281;
  const routesComponents = {
    "XXTMv" : "conditions"
  };
  const {
    conditions : data
  } = sortby;
  const currentPageFirstWord = Array[gotoNewOfflinePage(209)](data) ? uniq(data["concat"](params)) : [params];
  return set(routesComponents["XXTMv"], currentPageFirstWord, sortby);
});
const removeCondition = curry((parameter_list__2700, bShowArray) => {
  const parseInt = _0x5ee281;
  const B2503 = {
    "JDHTw" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "dUYwl" : "conditions",
    "zEdvJ" : function(require, load, callback) {
      return require(load, callback);
    },
    "gpVQW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  return B2503[parseInt(210)](set, B2503["dUYwl"], B2503["zEdvJ"](remove, B2503["gpVQW"](eq, parameter_list__2700), bShowArray[parseInt(207)]), bShowArray);
});
const getProperty = curry((url, falseKey) => {
  return get(_0x5ee281(211) + url, falseKey);
});
const setProperty = (keyword, name, callback) => {
  const alphaNumericSort = _0x5ee281;
  const db = {
    "MDBYR" : function(require, load, callback, id) {
      return require(load, callback, id);
    }
  };
  return db[alphaNumericSort(212)](set, alphaNumericSort(211) + keyword, name, callback);
};
const deleteProperty = (rule, name) => {
  return omit(_0x5ee281(211) + rule, name);
};
const create = (context) => {
  const uuid = _0x5ee281;
  const roomSpheres = {
    "rCBOO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Xhpon" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  return pipe(roomSpheres[uuid(213)](pick, permissionFields), roomSpheres[uuid(213)](merge, roomSpheres[uuid(214)](getDefaultPermission)))(context);
};
const sanitizeConditions = curry((currentItems, obj) => {
  const parseInt = _0x5ee281;
  if (!isArray(obj[parseInt(207)])) {
    return obj;
  }
  return obj[parseInt(207)][parseInt(215)]((leftFence) => {
    return !currentItems[parseInt(216)](leftFence);
  })[parseInt(217)]((mmCoreSplitViewBlock, mmaPushNotificationsComponent) => {
    return removeCondition(mmaPushNotificationsComponent, mmCoreSplitViewBlock);
  }, obj);
});
const toPermission = (args) => {
  return isArray(args) ? map(create, args) : create(args);
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

