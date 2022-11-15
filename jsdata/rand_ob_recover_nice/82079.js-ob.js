'use strict';
const Promise = require(_0x556333(419));
const ObjectId = require(_0x556333(420));
const _ = require(_0x556333(421));
const logging = require("@tryghost/logging");
module[_0x556333(422)][_0x556333(423)] = {
  "transaction" : !![],
  "irreversible" : !![]
}, module["exports"]["up"] = (value) => {
  const findMiddlePosition = _0x556333;
  const rightBranch = {
    "vXwRu" : findMiddlePosition(424),
    "HkizN" : findMiddlePosition(425),
    "OJTvl" : "created_at",
    "aBoFr" : findMiddlePosition(426),
    "Jxfzc" : findMiddlePosition(427),
    "DJVLJ" : findMiddlePosition(428)
  };
  const leftBranch = _[findMiddlePosition(429)]({
    "context" : {
      "internal" : !![]
    },
    "migrating" : !![]
  }, value);
  const rpm_traffic = [findMiddlePosition(430), findMiddlePosition(431), rightBranch[findMiddlePosition(432)], findMiddlePosition(433), rightBranch["aBoFr"], rightBranch[findMiddlePosition(434)]];
  return leftBranch[findMiddlePosition(435)](rightBranch[findMiddlePosition(436)])[findMiddlePosition(437)]()[findMiddlePosition(438)]((el) => {
    const propFunc = findMiddlePosition;
    const rpm_traffic = {
      "YEFXn" : rightBranch[propFunc(439)]
    };
    if (el && el[propFunc(440)] > 2007 + 41 * 146 + -7993) {
      logging[propFunc(441)](propFunc(442) + el[propFunc(440)] + propFunc(443));
      let resolve__1565 = _[propFunc(444)](el, (object) => {
        const now = propFunc;
        let default_titles = rpm_traffic[now(445)](function(descriptor, resourceType) {
          const zoneSymbol = now;
          return Object[zoneSymbol(446)](descriptor, {
            [resourceType]:object[resourceType]
          });
        }, {});
        return default_titles["id"] = ObjectId()[now(447)](), default_titles;
      });
      return Promise["map"](resolve__1565, (mmCoreSplitViewBlock) => {
        const now = propFunc;
        return leftBranch["transacting"](rpm_traffic[now(448)])[now(449)](mmCoreSplitViewBlock);
      });
    } else {
      return logging[propFunc(441)](rightBranch[propFunc(450)]), Promise[propFunc(451)]();
    }
  });
}, module[_0x556333(422)][_0x556333(452)] = () => {
  const gotoNewOfflinePage = _0x556333;
  return Promise[gotoNewOfflinePage(453)]();
};

