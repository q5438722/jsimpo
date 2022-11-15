'use strict';
function _0x50c6(isBgroundImg, stgs) {
  return _0x50c6 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-3874 + 3 * -334 + 5254);
    let _0xb227ea = _0xc6e4[isBgroundImg];
    return _0xb227ea;
  }, _0x50c6(isBgroundImg, stgs);
}
const _ = require(_0x53f8cc(387));
const crypto = require(_0x53f8cc(388));
const debug = require(_0x53f8cc(389))("frontend:services:settings:index");
const SettingsLoader = require(_0x53f8cc(390));
const ensureSettingsFiles = require(_0x53f8cc(391));
const errors = require("@tryghost/errors");
const defaultHashes = {
  "routes" : _0x53f8cc(392)
};
const calculateHash = (callback) => {
  const now = _0x53f8cc;
  const rpm_traffic = {
    "VAvvy" : now(393),
    "rZZxA" : now(394),
    "fvBwx" : now(395)
  };
  return crypto["createHash"](rpm_traffic[now(396)])[now(397)](callback, rpm_traffic[now(398)])[now(399)](rpm_traffic["fvBwx"]);
};
module[_0x53f8cc(400)] = {
  "init" : function() {
    const parseStoreDir = _0x53f8cc;
    const conditionMap = {
      "uwFtR" : function(require, load, callback) {
        return require(load, callback);
      }
    };
    const previousInputState = this["knownSettings"]();
    return conditionMap[parseStoreDir(401)](debug, "init settings service for:", previousInputState), ensureSettingsFiles(previousInputState);
  },
  "knownSettings" : function getRenderCanvas() {
    const now = _0x53f8cc;
    const rpm_traffic = {
      "OrREx" : now(402)
    };
    return [rpm_traffic[now(403)]];
  },
  "get" : function indent(value) {
    const getPaddingLeft = _0x53f8cc;
    const harderTypes = {
      "bIjQb" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      }
    };
    const item = this[getPaddingLeft(404)]();
    if (!value || harderTypes["bIjQb"](_[getPaddingLeft(405)](item, value), -431 * -4 + -3 * 899 + 973)) {
      throw new (errors[getPaddingLeft(406)])({
        "message" : getPaddingLeft(407) + value + "'.",
        "help" : "Please use only the supported settings: " + item + "."
      });
    }
    return SettingsLoader(value);
  },
  "getAll" : function waitConnection() {
    const until = _0x53f8cc;
    const rpm_traffic = {
      "ZnQds" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    const list = this[until(404)]();
    const dest = {};
    return _[until(408)](list, function(name) {
      const now = until;
      dest[name] = rpm_traffic[now(409)](SettingsLoader, name);
    }), dest;
  },
  "getDefaulHash" : (ballNumber) => {
    return defaultHashes[ballNumber];
  },
  "getCurrentHash" : async(mmCoreSplitViewBlock) => {
    const gotoNewOfflinePage = _0x53f8cc;
    const data = await SettingsLoader[gotoNewOfflinePage(410)](mmCoreSplitViewBlock);
    return calculateHash(JSON[gotoNewOfflinePage(411)](data));
  }
};

