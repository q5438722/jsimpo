'use strict';
const ModuleFilenameHelpers = require(_0x4aadbd(199));
const NormalModule = require("./NormalModule");
const createSchemaValidation = require(_0x4aadbd(200));
const validate = createSchemaValidation(require(_0x4aadbd(201)), () => {
  return require(_0x4aadbd(202));
}, {
  "name" : _0x4aadbd(203),
  "baseDataPath" : "options"
});
class LoaderOptionsPlugin {
  constructor(stringTests = {}) {
    const uuid = _0x4aadbd;
    const roomSpheres = {
      "FeeCQ" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      },
      "UwvsL" : function(value, joiner) {
        return value !== joiner;
      }
    };
    roomSpheres[uuid(204)](validate, stringTests);
    if (roomSpheres["UwvsL"](typeof stringTests, "object")) {
      stringTests = {};
    }
    if (!stringTests[uuid(205)]) {
      stringTests["test"] = {
        "test" : () => {
          return !![];
        }
      };
    }
    this[uuid(206)] = stringTests;
  }
  [_0x4aadbd(207)](serverConfig) {
    const now = _0x4aadbd;
    const rpm_traffic = {
      "jVhtX" : function(progressOld, progressNew) {
        return progressOld < progressNew;
      },
      "qGmLy" : now(208),
      "uhxxW" : function(name, initialValue) {
        return name === initialValue;
      },
      "qPQCX" : now(209),
      "FAwiu" : now(205),
      "nepQz" : now(210)
    };
    const obj = this[now(206)];
    serverConfig["hooks"][now(211)][now(212)](rpm_traffic[now(213)], (name) => {
      const getLeaf = now;
      const types = {
        "FQNdS" : function(mmCoreSplitViewBlock, $state) {
          const now = _0x192d;
          return rpm_traffic[now(214)](mmCoreSplitViewBlock, $state);
        },
        "ZXPxZ" : function(name, initialValue) {
          return name === initialValue;
        },
        "eSYcX" : rpm_traffic["qGmLy"],
        "jiJdy" : function(mmCoreSplitViewBlock, $state) {
          const now = _0x192d;
          return rpm_traffic[now(215)](mmCoreSplitViewBlock, $state);
        },
        "lidxJ" : rpm_traffic[getLeaf(216)],
        "OudUH" : rpm_traffic[getLeaf(217)]
      };
      NormalModule["getCompilationHooks"](name)[getLeaf(218)]["tap"](rpm_traffic["nepQz"], (global, myPreferences) => {
        const getPreferenceKey = getLeaf;
        const base = myPreferences[getPreferenceKey(219)];
        if (!base) {
          return;
        }
        const value = base[getPreferenceKey(220)]("?");
        if (ModuleFilenameHelpers[getPreferenceKey(221)](obj, types[getPreferenceKey(222)](value, 1415 * -7 + -7044 + -1 * -16949) ? base : base[getPreferenceKey(223)](-1928 * -3 + 9294 + -15078, value))) {
          for (const name of Object[getPreferenceKey(224)](obj)) {
            if (types[getPreferenceKey(225)](name, types["eSYcX"]) || types[getPreferenceKey(226)](name, types["lidxJ"]) || name === types["OudUH"]) {
              continue;
            }
            global[name] = obj[name];
          }
        }
      });
    });
  }
}
function _0x192d(isBgroundImg, stgs) {
  return _0x192d = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1915 + -9031 + -3651 * -2);
    let _0x3dbfcf = _0x4d2c[isBgroundImg];
    return _0x3dbfcf;
  }, _0x192d(isBgroundImg, stgs);
}
module[_0x4aadbd(227)] = LoaderOptionsPlugin;

