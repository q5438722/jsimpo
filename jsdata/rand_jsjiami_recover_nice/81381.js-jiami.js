'use strict';
const _ = require("lodash");
const crypto = require("crypto");
const debug = require("@tryghost/debug")("frontend:services:settings:index");
const SettingsLoader = require("./loader");
const ensureSettingsFiles = require("./ensure-settings");
const errors = require("@tryghost/errors");
const defaultHashes = {};
const calculateHash = (callback) => {
  var _0x44b46f = {};
  return crypto["createHash"](_0x44b46f["vuMJY"])["update"](callback, _0x44b46f["xoMBi"])["digest"]("hex");
};
module["exports"] = {
  "init" : function() {
    const compileCommand = this["knownSettings"]();
    debug(_0x3d7fb2["fhEbZ"], compileCommand);
    return ensureSettingsFiles(compileCommand);
  },
  "knownSettings" : function knownSettings() {
    return [_0x911a78["RJrpo"]];
  },
  "get" : function getOwnPropertyNames(value) {
    const growingCollection = this["knownSettings"]();
    if (!value || _["indexOf"](growingCollection, value) < 0) {
      throw new errors["IncorrectUsageError"]({
        "message" : "Requested setting is not supported: '" + value + "'.",
        "help" : "Please use only the supported settings: " + growingCollection + "."
      });
    }
    return SettingsLoader(value);
  },
  "getAll" : function visitQueryConditions() {
    const which = this["knownSettings"]();
    _["each"](which, function(statisticName) {
      _0x4d75aa[statisticName] = SettingsLoader(statisticName);
    });
    return _0x4d75aa;
  },
  "getDefaulHash" : (ballNumber) => {
    return defaultHashes[ballNumber];
  },
  "getCurrentHash" : async(mmCoreSplitViewBlock) => {
    const message = await SettingsLoader["loadSettings"](mmCoreSplitViewBlock);
    return calculateHash(JSON["stringify"](message));
  }
};

