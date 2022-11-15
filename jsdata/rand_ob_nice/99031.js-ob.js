'use strict';
const _0x5236 = ["chai", "../../fixtures/programmatic", "../../utils/integration", "functionDestinations", "Lambda", "invoke", "Event", "VWkUm", "WARTo", "setup", "uuBDL", "serviceConfig", "service", "csTnI", "uXzCY", "/aws/lambda/", "-target", "tMkQB", "iMGiY", "siSnO", "length", "then", "BjTck", "dOded", "equal", "360295ykkJls", "362297rKOoVO", "421346zITvFd", "1302206DbjgMr", "39zCbVcB", "11013sDzLBV", "1010891AYjbYu", "1055gXcUcp", "1423xhVNJq"];
const _0x45cb22 = _0x2fc9;
(function(data, val) {
  const toMonths = _0x2fc9;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(140)) + parseInt(toMonths(141)) + -parseInt(toMonths(142)) + parseInt(toMonths(143)) + parseInt(toMonths(144)) * -parseInt(toMonths(145)) + parseInt(toMonths(146)) + parseInt(toMonths(147)) * -parseInt(toMonths(148));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x12b0fc) {
      data["push"](data["shift"]());
    }
  }
})(_0x5236, -1344436 + -14276 + 2042283);
const {
  expect : expect
} = require(_0x45cb22(149));
const awsRequest = require("@serverless/test/aws-request");
const fixtures = require(_0x45cb22(150));
const {
  confirmCloudWatchLogs : confirmCloudWatchLogs
} = require("../../utils/misc");
const {
  deployService : deployService,
  removeService : removeService
} = require(_0x45cb22(151));
function _0x2fc9(isBgroundImg, stgs) {
  return _0x2fc9 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1 * 5155 + 1796 * 2 + -8607);
    let _0x3e5044 = _0x5236[isBgroundImg];
    return _0x3e5044;
  }, _0x2fc9(isBgroundImg, stgs);
}
describe("Function destinations Integration Test", function() {
  const _char = _0x45cb22;
  const rpm_traffic = {
    "uuBDL" : _char(152),
    "csTnI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tMkQB" : function(require, load, callback, id) {
      return require(load, callback, id);
    },
    "iMGiY" : _char(153),
    "XySyv" : _char(154),
    "siSnO" : _char(155),
    "BjTck" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "dOded" : function(_num1, _num2) {
      return _num1 > _num2;
    },
    "VWkUm" : function(mmCoreSecondsDay, daysInterval) {
      return mmCoreSecondsDay * daysInterval;
    },
    "WARTo" : "dev",
    "uXzCY" : function(require, load, callback) {
      return require(load, callback);
    },
    "xdIsy" : "on async invoke should invoke destination target"
  };
  this["timeout"](rpm_traffic[_char(156)](rpm_traffic[_char(156)](1 * -9057 + 1432 + -8625 * -1, -991 * 9 + -661 * 12 + -3 * -5637), 2 * -4390 + -1 * -5237 + -1 * -3563));
  let _FOO_;
  let servicePath;
  const pref = rpm_traffic[_char(157)];
  before(async() => {
    const rel2Mstr = _char;
    const same = await fixtures[rel2Mstr(158)](rpm_traffic[rel2Mstr(159)]);
    ({
      servicePath : servicePath
    } = same);
    const tools_id = same[rel2Mstr(160)][rel2Mstr(161)];
    _FOO_ = tools_id + "-" + pref;
    await rpm_traffic[rel2Mstr(162)](deployService, servicePath);
  });
  rpm_traffic["BjTck"](after, async() => {
    const now = _char;
    if (!servicePath) {
      return;
    }
    await rpm_traffic[now(162)](removeService, servicePath);
  });
  rpm_traffic[_char(163)](it, rpm_traffic["xdIsy"], async() => {
    return confirmCloudWatchLogs(_char(164) + _FOO_ + _char(165), async() => {
      const now = _char;
      await rpm_traffic[now(166)](awsRequest, rpm_traffic[now(167)], rpm_traffic["XySyv"], {
        "FunctionName" : _FOO_ + "-trigger",
        "InvocationType" : rpm_traffic[now(168)]
      });
    }, {
      "checkIsComplete" : (metadata) => {
        return metadata[_char(169)];
      }
    })[_char(170)]((myPreferences) => {
      const getPreferenceKey = _char;
      rpm_traffic[getPreferenceKey(171)](expect, rpm_traffic[getPreferenceKey(172)](myPreferences[getPreferenceKey(169)], -2284 * 1 + 973 + 1311 * 1))["to"][getPreferenceKey(173)](!![]);
    });
  });
});

