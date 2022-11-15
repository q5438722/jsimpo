'use strict';
const {
  expect : expect
} = require(_0x5d8139(129));
const log = require("log")[_0x5d8139(130)](_0x5d8139(131));
const fixtures = require(_0x5d8139(132));
const {
  createKinesisStream : createKinesisStream,
  deleteKinesisStream : deleteKinesisStream,
  putKinesisRecord : putKinesisRecord
} = require("../../utils/kinesis");
const {
  putDynamoDbItem : putDynamoDbItem
} = require(_0x5d8139(133));
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require(_0x5d8139(134));
function _0x18ad(isBgroundImg, stgs) {
  return _0x18ad = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-1 * -3023 + -9660 + 6754);
    let _0x546cc4 = _0x5c95[isBgroundImg];
    return _0x546cc4;
  }, _0x18ad(isBgroundImg, stgs);
}
describe(_0x5d8139(135), function() {
  const getKey = _0x5d8139;
  const data = {
    "fhRDV" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ClzCS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "DaWtk" : getKey(136),
    "ZCvEZ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "NGdTw" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KkhBT" : getKey(137),
    "UOCgP" : getKey(138),
    "XuQsb" : function(require, load, callback) {
      return require(load, callback);
    },
    "rjGyY" : function(require, load, callback) {
      return require(load, callback);
    },
    "PqPOr" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "CXrjc" : getKey(139),
    "lTKGq" : getKey(140),
    "uLXsC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "jICks" : function(require, load, callback) {
      return require(load, callback);
    },
    "rGejb" : getKey(141)
  };
  this[getKey(142)](data[getKey(143)](data["PqPOr"](2077 * -1 + -5381 + 8458, -112 * 27 + -3319 * -3 + 87 * -79), 7570 + 815 + 1 * -8285));
  let hash;
  let extraOptions;
  let ry;
  let controlY;
  const artistTrack = data["CXrjc"];
  const d = data[getKey(144)];
  data[getKey(145)](before, async() => {
    const parseInt = getKey;
    const colData = await fixtures[parseInt(146)](parseInt(147));
    ({
      servicePath : extraOptions
    } = colData);
    const y = colData[parseInt(148)][parseInt(149)];
    return ry = y + parseInt(150), controlY = y + parseInt(151), hash = y + "-" + d, log[parseInt(152)](parseInt(153) + ry + parseInt(154)), data[parseInt(155)](createKinesisStream, ry)[parseInt(156)](() => {
      return putKinesisRecord(ry, artistTrack);
    })[parseInt(156)](() => {
      return deployService(extraOptions);
    });
  });
  data[getKey(157)](after, async() => {
    const getRefreshTokenKey = getKey;
    return await data[getRefreshTokenKey(158)](removeService, extraOptions), log[getRefreshTokenKey(152)](data["DaWtk"]), data[getRefreshTokenKey(159)](deleteKinesisStream, ry);
  });
  data[getKey(160)](describe, data[getKey(161)], () => {
    const updateDevicesAfterDelay = getKey;
    const _related2 = {
      "sTOac" : function(_relatedTarget, position) {
        const getRefreshTokenKey = _0x18ad;
        return data[getRefreshTokenKey(159)](_relatedTarget, position);
      },
      "aonwA" : function(_relatedTarget, position) {
        const getRefreshTokenKey = _0x18ad;
        return data[getRefreshTokenKey(145)](_relatedTarget, position);
      },
      "VpzBx" : updateDevicesAfterDelay(162),
      "gGLCQ" : function(require, load, callback, id) {
        return require(load, callback, id);
      }
    };
    it(data["KkhBT"], () => {
      const decodeURIComponent = updateDevicesAfterDelay;
      const _itemWidgetName = decodeURIComponent(163);
      const GET_AUTH_URL_TIMEOUT = _related2[decodeURIComponent(164)];
      return _related2[decodeURIComponent(165)](confirmCloudWatchLogs, decodeURIComponent(166) + hash + "-" + _itemWidgetName, () => {
        return putKinesisRecord(ry, GET_AUTH_URL_TIMEOUT);
      }, {
        "checkIsComplete" : (metadata) => {
          return metadata[decodeURIComponent(167)]((i, p) => {
            return i + p[decodeURIComponent(138)];
          }, "")[decodeURIComponent(168)](GET_AUTH_URL_TIMEOUT);
        }
      })[decodeURIComponent(156)]((view) => {
        const getFrameType = decodeURIComponent;
        const relationName = view[getFrameType(167)]((intIndex, view) => {
          return intIndex + view[getFrameType(138)];
        }, "");
        _related2[getFrameType(169)](expect, relationName)["to"]["include"](_itemWidgetName);
        _related2[getFrameType(170)](expect, relationName)["to"][getFrameType(171)](GET_AUTH_URL_TIMEOUT);
        _related2[getFrameType(170)](expect, relationName)["to"][getFrameType(171)](artistTrack);
      });
    });
  });
  describe(getKey(172), () => {
    const getRefreshTokenKey = getKey;
    const test = {
      "Weglz" : function(_relatedTarget, position, size) {
        const getRefreshTokenKey = _0x18ad;
        return data[getRefreshTokenKey(173)](_relatedTarget, position, size);
      },
      "qqeKK" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "urXTH" : getRefreshTokenKey(174)
    };
    data[getRefreshTokenKey(175)](it, getRefreshTokenKey(176), () => {
      const getPreferenceKey = getRefreshTokenKey;
      const _iy = getPreferenceKey(177);
      const json = {
        "id" : data["UOCgP"]
      };
      return confirmCloudWatchLogs("/aws/lambda/" + hash + "-" + _iy, () => {
        const _getExpectProperty = getPreferenceKey;
        return json["hello"] = "from dynamo!" + Math["random"]()[_getExpectProperty(178)](-32 * 122 + 859 * -5 + 8235)[_getExpectProperty(179)](-1 * 3221 + -7456 + 10679 * 1), test[_getExpectProperty(180)](putDynamoDbItem, controlY, json);
      }, {
        "checkIsComplete" : (myPreferences) => {
          return myPreferences[getPreferenceKey(167)]((boardManager, myPreferences) => {
            return boardManager + myPreferences[getPreferenceKey(138)];
          }, "")[getPreferenceKey(168)](_iy);
        }
      })["then"]((view) => {
        const getFrameType = getPreferenceKey;
        const input = view[getFrameType(167)]((text, data) => {
          return text + data["message"];
        }, "");
        test[getFrameType(181)](expect, input)["to"]["include"](_iy);
        test["qqeKK"](expect, input)["to"][getFrameType(171)](test[getFrameType(182)]);
        test[getFrameType(181)](expect, input)["to"]["include"](json["id"]);
      });
    });
  });
});

