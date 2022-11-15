'use strict';
const locations = {
  "chalSuper" : "/challenges/responsive-web-design/",
  "chalBlock" : _0x10dec7(326),
  "chalChallenge" : _0x10dec7(327),
  "learnSuper" : _0x10dec7(328),
  "learnBlock" : _0x10dec7(329),
  "learnChallenge" : _0x10dec7(330)
};
describe("challenges/superblock redirect", function() {
  const now = _0x10dec7;
  const updatedEdgesById = {
    "pMRCv" : "Responsive Web Design Certification | freeCodeCamp.org",
    "aRwUs" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  updatedEdgesById[now(331)](it, now(332), () => {
    const edgeId = now;
    const symAttrs = {
      "kjCoY" : function(saveNotifs, notifications) {
        return saveNotifs(notifications);
      }
    };
    cy[edgeId(333)](locations[edgeId(334)]);
    cy[edgeId(335)]()[edgeId(336)]("eq", updatedEdgesById[edgeId(337)]);
    cy[edgeId(338)]()[edgeId(336)]((data) => {
      const getRefreshTokenKey = edgeId;
      symAttrs["kjCoY"](expect, data[getRefreshTokenKey(339)])["to"]["eq"](locations[getRefreshTokenKey(340)]);
    });
  });
}), describe("challenges/superblock/block redirect", function() {
  const now = _0x10dec7;
  const rpm_traffic = {
    "VbNSR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TUbSF" : now(341),
    "DzCLo" : now(342)
  };
  it(rpm_traffic[now(343)], () => {
    const edgeId = now;
    cy[edgeId(333)](locations[edgeId(344)]);
    cy[edgeId(335)]()["should"]("eq", rpm_traffic[edgeId(345)]);
    cy[edgeId(338)]()[edgeId(336)]((myPreferences) => {
      const getPreferenceKey = edgeId;
      rpm_traffic[getPreferenceKey(346)](expect, myPreferences[getPreferenceKey(339)])["to"]["eq"](locations[getPreferenceKey(347)]);
    });
  });
}), describe(_0x10dec7(348), function() {
  const now = _0x10dec7;
  const updatedEdgesById = {
    "uVRjV" : now(349),
    "mAQJC" : now(350)
  };
  it(updatedEdgesById[now(351)], () => {
    const edgeId = now;
    cy["visit"](locations["chalChallenge"]);
    cy[edgeId(335)]()[edgeId(336)]("eq", updatedEdgesById[edgeId(352)]);
    cy["location"]()[edgeId(336)]((manifest) => {
      const gotoNewOfflinePage = edgeId;
      expect(manifest["pathname"])["to"]["eq"](locations[gotoNewOfflinePage(353)]);
    });
  });
});

