'use strict';
const _ = require("lodash");
const crypto = require("crypto");
const debug = require("@tryghost/debug")("frontend:services:settings:index");
const SettingsLoader = require("./loader");
const ensureSettingsFiles = require("./ensure-settings");
const errors = require("@tryghost/errors");
const defaultHashes = {
  routes : "3d180d52c663d173a6be791ef411ed01"
};
const calculateHash = (payload) => {
  return crypto.createHash("md5").update(payload, "binary").digest("hex");
};
module.exports = {
  init : function() {
    const newMods = this.knownSettings();
    debug("init settings service for:", newMods);
    return ensureSettingsFiles(newMods);
  },
  knownSettings : function startSocket() {
    return ["routes"];
  },
  get : function init(t) {
    const _activeModels = this.knownSettings();
    if (!t || _.indexOf(_activeModels, t) < 0) {
      throw new errors.IncorrectUsageError({
        message : `Requested setting is not supported: '${t}'.`,
        help : `Please use only the supported settings: ${_activeModels}.`
      });
    }
    return SettingsLoader(t);
  },
  getAll : function getGroupVals() {
    const expiredPokemons = this.knownSettings();
    const value = {};
    _.each(expiredPokemons, function(i) {
      value[i] = SettingsLoader(i);
    });
    return value;
  },
  getDefaulHash : (ballNumber) => {
    return defaultHashes[ballNumber];
  },
  getCurrentHash : async(settings) => {
    const train1or = await SettingsLoader.loadSettings(settings);
    return calculateHash(JSON.stringify(train1or));
  }
};

