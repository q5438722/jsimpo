'use strict';
const selectors = {
  "heading" : _0xcf160e(431),
  "callToAction" : "[data-test-label='landing-big-cta']",
  "certifications" : _0xcf160e(432),
  "testimonials" : "[data-test-label='testimonial-cards']",
  "landingPageImage" : ".landing-page-image"
};
const certifications = [_0xcf160e(433), _0xcf160e(434), "Front End Development Libraries", "Data Visualization", _0xcf160e(435), _0xcf160e(436), _0xcf160e(437), _0xcf160e(438), _0xcf160e(439), _0xcf160e(440)];
function _0x1345(isBgroundImg, stgs) {
  return _0x1345 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-7507 * 1 + -2680 + 10607);
    let _0x5cd13c = _0x590d[isBgroundImg];
    return _0x5cd13c;
  }, _0x1345(isBgroundImg, stgs);
}
describe(_0xcf160e(441), () => {
  const min = _0xcf160e;
  const c = {
    "vHBtX" : min(442),
    "qhBDN" : "have.length",
    "WutME" : "Learn to code \u2014 for free.",
    "XMZso" : min(443),
    "pdFcH" : min(444),
    "SVfcQ" : min(445),
    "qzRmm" : min(446),
    "khqaI" : min(447),
    "WpGsJ" : min(448),
    "aSPJk" : min(449),
    "iGgnd" : function(require, load, callback) {
      return require(load, callback);
    },
    "eooaW" : min(450),
    "mQCnP" : min(451),
    "VGJAn" : min(452),
    "whIUh" : min(453),
    "zcRNN" : function(require, load, callback) {
      return require(load, callback);
    },
    "cSfIR" : min(454),
    "nGGpz" : function(require, load, callback) {
      return require(load, callback);
    },
    "lWtZH" : min(455),
    "EKhuC" : function(require, load, callback) {
      return require(load, callback);
    },
    "jmoel" : "Has 3 testimonial cards"
  };
  c[min(456)](it, c[min(457)], () => {
    const _getNodeName = min;
    cy[_getNodeName(458)]("/");
    cy[_getNodeName(459)]()[_getNodeName(460)]("eq", _getNodeName(461));
    cy[_getNodeName(462)](selectors[_getNodeName(463)], c["vHBtX"]);
    cy[_getNodeName(464)](selectors[_getNodeName(463)])[_getNodeName(460)](c[_getNodeName(465)], 5660 + 211 * 37 + 5 * -2693);
  });
  it(c[min(466)], () => {
    const _getNodeName = min;
    cy[_getNodeName(462)](selectors[_getNodeName(467)], c[_getNodeName(468)]);
    cy[_getNodeName(462)](c["XMZso"])["should"](c[_getNodeName(469)]);
    cy["contains"](c[_getNodeName(470)])[_getNodeName(460)](c[_getNodeName(469)]);
    cy[_getNodeName(462)](c[_getNodeName(471)] + _getNodeName(472))["should"](c[_getNodeName(469)]);
  });
  it(c[min(473)], () => {
    const _getNodeName = min;
    cy[_getNodeName(464)](_getNodeName(474))["children"]()[_getNodeName(475)](c[_getNodeName(476)])["should"]("eq", 8680 + 4876 + -13551);
  });
  it(c["whIUh"], () => {
    const _getNodeName = min;
    cy[_getNodeName(462)](c[_getNodeName(477)])[_getNodeName(460)]("be.visible");
    cy[_getNodeName(464)](c[_getNodeName(478)])[_getNodeName(479)]()[_getNodeName(464)](c[_getNodeName(480)]);
  });
  c[min(481)](it, c[min(482)], function() {
    const gotoNewOfflinePage = min;
    cy[gotoNewOfflinePage(483)](352 + -3874 + 4722, -8789 + -8650 + 18099)["get"](selectors[gotoNewOfflinePage(484)])["should"](c["pdFcH"]);
    cy[gotoNewOfflinePage(483)](4 * 2197 + 7212 + -14801, 3128 + 4055 + -6523)["get"](selectors[gotoNewOfflinePage(484)])[gotoNewOfflinePage(460)]("not.exist");
  });
  c["nGGpz"](it, c["lWtZH"], function() {
    const gotoNewOfflinePage = min;
    cy[gotoNewOfflinePage(464)](selectors["certifications"])[gotoNewOfflinePage(485)]()["its"](gotoNewOfflinePage(447))[gotoNewOfflinePage(460)]("eq", 2 * 1039 + 870 + -2938);
    cy[gotoNewOfflinePage(486)](certifications)["each"]((mmCoreSplitViewBlock) => {
      const updateDevicesAfterDelay = gotoNewOfflinePage;
      cy[updateDevicesAfterDelay(464)](selectors["certifications"])[updateDevicesAfterDelay(462)](mmCoreSplitViewBlock);
    });
  });
  c["EKhuC"](it, c["jmoel"], function() {
    const gotoNewOfflinePage = min;
    cy[gotoNewOfflinePage(464)](selectors["testimonials"])["children"]()[gotoNewOfflinePage(475)](gotoNewOfflinePage(447))[gotoNewOfflinePage(460)]("eq", -9148 + -6915 + -29 * -554);
  });
});

