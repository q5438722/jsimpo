'use strict';
const _ = require(_0x3f2bf6(466));
function _0x50a7(isBgroundImg, stgs) {
  return _0x50a7 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-1120 + 2539 * -3 + 9193);
    let _0x293044 = _0x6727[isBgroundImg];
    return _0x293044;
  }, _0x50a7(isBgroundImg, stgs);
}
module[_0x3f2bf6(467)] = function(data) {
  const getRefreshTokenKey = _0x3f2bf6;
  const prefixes = {
    "TgJCi" : getRefreshTokenKey(468)
  };
  const conninfo = data["Model"];
  data[getRefreshTokenKey(469)] = data[getRefreshTokenKey(469)][getRefreshTokenKey(470)]({
    "sync" : function update() {
      const getId = getRefreshTokenKey;
      const pointerInstances = conninfo[getId(471)]["sync"]["apply"](this, arguments);
      const c = pointerInstances["update"];
      const PL$23 = pointerInstances[getId(472)];
      const PL$24 = this;
      return pointerInstances["update"] = function updateBestTileAtCurrentLevel(PL$22) {
        const min = getId;
        return PL$22 = PL$24["formatOnWrite"](_[min(473)](PL$22)), c[min(474)](this, [PL$22]);
      }, pointerInstances[getId(472)] = function update(PL$22) {
        const updateIsBeat = getId;
        return PL$22 = PL$24[updateIsBeat(475)](_[updateIsBeat(473)](PL$22)), PL$23["apply"](this, [PL$22]);
      }, pointerInstances;
    },
    "formatOnWrite" : function parseCustomUrl(url) {
      return url;
    },
    "format" : function $get(mmCoreSplitViewBlock) {
      const getPreferredLanguage = getRefreshTokenKey;
      return this[getPreferredLanguage(476)](mmCoreSplitViewBlock);
    },
    "parse" : function $get(mmCoreSplitViewBlock) {
      const getPreferredLanguage = getRefreshTokenKey;
      return this[getPreferredLanguage(477)](this["fixDatesWhenFetch"](mmCoreSplitViewBlock));
    },
    "toJSON" : function testcase(fn) {
      const String = getRefreshTokenKey;
      const PL$3 = data[String(469)][String(478)](fn, prefixes[String(479)]);
      PL$3[String(480)] = !![];
      _[String(481)](this[String(482)], (trick, ballNumber) => {
        const defineProperty = String;
        if (_[defineProperty(483)](trick)) {
          delete this[defineProperty(482)][ballNumber];
        }
      });
      if (PL$3[String(484)]) {
        const target = _[String(473)](this);
        return target[String(485)] = this["_previousAttributes"], this[String(486)] && this[String(486)][String(487)]((type) => {
          const capitalize = String;
          if (this[capitalize(488)] && Object[capitalize(471)][capitalize(489)][capitalize(490)](this[capitalize(488)], type)) {
            target[capitalize(491)](type)[capitalize(492)] = this[capitalize(488)][type][capitalize(492)];
          }
        }), conninfo["prototype"]["toJSON"]["call"](target, PL$3);
      }
      return conninfo["prototype"][String(468)]["call"](this, PL$3);
    }
  });
};

