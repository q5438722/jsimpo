'use strict';
const _0x2209 = ["lyVIi", "secure", "NUIMe", "tvUqZ", "IQhoU", "EUUbW", "iIvkr", "uLhNW", "Awrzx", "absolute/*/", "XsxnC", "JzEMp", "createTag", "parent", "tag url", "OvCeF", "DJVGh", "zectT", "nJVBg", "createUser", "NlQIv", "OLRMl", "EvuDH", "should return url for a nav", "UHEtg", "PPuFp", "nav", "aJMzC", "equal", "TCuIU", "cnGfP", "yjVRA", "BHyFj", "false", "996159WeAGzB", "80197BJBjbv", "699313hHegCb", "135496rqADbK", "5xQtxrl", "5WOepgH", "12397wptEey", "2REIAbr", "239753WefhGJ", "45965EiDTnL", 
"20jIExMS", "should", "sinon", "../../../core/shared/url-utils", "../../../core/frontend/meta/url", "../../utils", "getUrl", "urlFor", "post url", "draft", "/p/", "absolute secure", "relative", "absolute", "absolute, secure", "/*/amp/", "absolute/*/amp/", "author url", "absolute secure author url", "About Me", "about-me", "nav url", "absolute nav url", "/*/", "should return url for a post", "preview url: drafts/scheduled posts", "should return url for a tag", "should return secure absolute url for a author", 
"kIhgl", "restore", "SFygc", "DataGenerator", "forKnex", "createPost", "getUrlByResourceId", "znxHG", "eql", "qDSYE", "xRNda", "acKsf", "axpAc", "/404/", "PhxKj", "uVxQw", "xWKCQ", "not absolute, not secure", "withArgs", "returns", "uuid", "DioEO", "szSOI", "calledOnce", "true", "absolute, not secure", "bZqYv", "TjWzS"];
const _0x93f938 = _0x350d;
(function(data, val) {
  const toMonths = _0x350d;
  for (; !![];) {
    try {
      const nodeval = parseInt(toMonths(248)) + -parseInt(toMonths(249)) + parseInt(toMonths(250)) + parseInt(toMonths(251)) * parseInt(toMonths(252)) + parseInt(toMonths(253)) * -parseInt(toMonths(254)) + -parseInt(toMonths(255)) * parseInt(toMonths(256)) + parseInt(toMonths(257)) * -parseInt(toMonths(258));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x42ccfe) {
      data["push"](data["shift"]());
    }
  }
})(_0x2209, 1428780 + 354963 * -3 + 468073 * 1);
const should = require(_0x93f938(259));
const sinon = require(_0x93f938(260));
const urlUtils = require(_0x93f938(261));
const urlService = require("../../../core/frontend/services/url");
const getUrl = require(_0x93f938(262));
const testUtils = require(_0x93f938(263));
function _0x350d(isBgroundImg, stgs) {
  return _0x350d = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (7158 + -33 * -138 + -11464);
    let _0x2c169e = _0x2209[isBgroundImg];
    return _0x2c169e;
  }, _0x350d(isBgroundImg, stgs);
}
describe(_0x93f938(264), function() {
  const getRefreshTokenKey = _0x93f938;
  const data = {
    "kIhgl" : getRefreshTokenKey(265),
    "znxHG" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qDSYE" : getRefreshTokenKey(266),
    "acKsf" : getRefreshTokenKey(267),
    "xMokj" : "/404/",
    "uVxQw" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "NUIMe" : getRefreshTokenKey(268),
    "tvUqZ" : getRefreshTokenKey(269),
    "xWKCQ" : function(require, load, callback) {
      return require(load, callback);
    },
    "axpAc" : getRefreshTokenKey(270),
    "PhxKj" : getRefreshTokenKey(271),
    "iIvkr" : function(require, load, callback) {
      return require(load, callback);
    },
    "lyVIi" : getRefreshTokenKey(272),
    "EUUbW" : "absolute post url",
    "uLhNW" : getRefreshTokenKey(273),
    "Awrzx" : getRefreshTokenKey(274),
    "ylSLM" : "secure tag url",
    "DJVGh" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zectT" : getRefreshTokenKey(275),
    "NlQIv" : getRefreshTokenKey(276),
    "OLRMl" : function(require, load, callback) {
      return require(load, callback);
    },
    "cnGfP" : getRefreshTokenKey(277),
    "UHEtg" : "/about-me/",
    "PPuFp" : getRefreshTokenKey(278),
    "aJMzC" : getRefreshTokenKey(279),
    "yjVRA" : getRefreshTokenKey(280),
    "IQhoU" : function(require, load, callback) {
      return require(load, callback);
    },
    "BHyFj" : getRefreshTokenKey(281),
    "hplzL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "SFygc" : getRefreshTokenKey(282),
    "xRNda" : getRefreshTokenKey(283),
    "XsxnC" : function(require, load, callback) {
      return require(load, callback);
    },
    "JzEMp" : getRefreshTokenKey(284),
    "OvCeF" : "should return secure url for a tag",
    "nJVBg" : getRefreshTokenKey(285),
    "EvuDH" : function(require, load, callback) {
      return require(load, callback);
    },
    "TCuIU" : "should return absolute url for a nav"
  };
  data["hplzL"](beforeEach, function() {
    const pluralize = getRefreshTokenKey;
    sinon["stub"](urlService, "getUrlByResourceId");
    sinon["stub"](urlUtils, data[pluralize(286)]);
  });
  data["hplzL"](afterEach, function() {
    const gotoNewOfflinePage = getRefreshTokenKey;
    sinon[gotoNewOfflinePage(287)]();
  });
  data["IQhoU"](it, data[getRefreshTokenKey(288)], function() {
    const pluralize = getRefreshTokenKey;
    const value2 = testUtils[pluralize(289)][pluralize(290)][pluralize(291)]();
    urlService[pluralize(292)]["withArgs"](value2["id"], {
      "absolute" : undefined,
      "secure" : undefined,
      "withSubdirectory" : !![]
    })["returns"](pluralize(266));
    data[pluralize(293)](getUrl, value2)[pluralize(259)][pluralize(294)](data[pluralize(295)]);
  });
  data["IQhoU"](describe, data[getRefreshTokenKey(296)], function() {
    const pluralize = getRefreshTokenKey;
    const keys = {
      "APzyF" : data[pluralize(297)],
      "DioEO" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      },
      "szSOI" : pluralize(268),
      "dtiBU" : data[pluralize(298)],
      "ObxZL" : pluralize(299),
      "bZqYv" : function(formatters, customFormatters) {
        return formatters + customFormatters;
      },
      "TjWzS" : data[pluralize(300)],
      "FESMj" : function(_relatedTarget, position, size) {
        return data["xWKCQ"](_relatedTarget, position, size);
      },
      "lLeaJ" : function(_relatedTarget, position) {
        const getRefreshTokenKey = pluralize;
        return data[getRefreshTokenKey(301)](_relatedTarget, position);
      }
    };
    data[pluralize(302)](it, pluralize(303), function() {
      const parseInt = pluralize;
      const data = testUtils["DataGenerator"][parseInt(290)][parseInt(291)]({
        "status" : keys["APzyF"]
      });
      urlService[parseInt(292)][parseInt(304)](data["id"])[parseInt(305)](parseInt(299));
      urlUtils["urlFor"][parseInt(304)]({
        "relativeUrl" : keys["DioEO"](keys["szSOI"] + data[parseInt(306)], "/"),
        "secure" : undefined
      }, null, undefined)[parseInt(305)](keys["dtiBU"]);
      let frontpageItems = getUrl(data);
      urlService[parseInt(292)]["calledOnce"]["should"]["be"]["true"]();
      urlUtils[parseInt(265)][parseInt(304)]({
        "relativeUrl" : keys[parseInt(307)](keys[parseInt(308)], data["uuid"]) + "/",
        "secure" : undefined
      }, null, undefined)[parseInt(309)][parseInt(259)]["be"][parseInt(310)]();
      frontpageItems[parseInt(259)]["eql"](parseInt(270));
    });
    it(pluralize(311), function() {
      const parseInt = pluralize;
      const data = testUtils[parseInt(289)][parseInt(290)][parseInt(291)]({
        "status" : parseInt(267)
      });
      urlService["getUrlByResourceId"][parseInt(304)](data["id"])[parseInt(305)](keys["ObxZL"]);
      urlUtils[parseInt(265)][parseInt(304)]({
        "relativeUrl" : keys[parseInt(312)](keys[parseInt(312)](keys[parseInt(308)], data["uuid"]), "/"),
        "secure" : undefined
      }, null, !![])[parseInt(305)](keys[parseInt(313)]);
      let colData = keys["FESMj"](getUrl, data, !![]);
      urlService[parseInt(292)][parseInt(309)][parseInt(259)]["be"][parseInt(310)]();
      urlUtils[parseInt(265)][parseInt(304)]({
        "relativeUrl" : keys["lLeaJ"](keys["szSOI"] + data["uuid"], "/"),
        "secure" : undefined
      }, null, !![])["calledOnce"][parseInt(259)]["be"][parseInt(310)]();
      colData[parseInt(259)][parseInt(294)]("absolute");
    });
    data["iIvkr"](it, data[pluralize(314)], function() {
      const parseInt = pluralize;
      const options = testUtils[parseInt(289)]["forKnex"][parseInt(291)]({
        "status" : data[parseInt(297)]
      });
      options[parseInt(315)] = !![];
      urlService["getUrlByResourceId"][parseInt(304)](options["id"])[parseInt(305)](data["xMokj"]);
      urlUtils[parseInt(265)][parseInt(304)]({
        "relativeUrl" : data[parseInt(301)](data[parseInt(316)] + options[parseInt(306)], "/"),
        "secure" : !![]
      }, null, !![])[parseInt(305)](data["tvUqZ"]);
      let colData = data[parseInt(302)](getUrl, options, !![]);
      urlService[parseInt(292)]["calledOnce"][parseInt(259)]["be"][parseInt(310)]();
      urlUtils[parseInt(265)]["withArgs"]({
        "relativeUrl" : data["uVxQw"](data[parseInt(316)] + options["uuid"], "/"),
        "secure" : !![]
      }, null, !![])[parseInt(309)][parseInt(259)]["be"]["true"]();
      colData[parseInt(259)][parseInt(294)](data[parseInt(317)]);
    });
  });
  data[getRefreshTokenKey(318)](it, "should return absolute url for a post", function() {
    const pluralize = getRefreshTokenKey;
    const value2 = testUtils[pluralize(289)][pluralize(290)]["createPost"]();
    urlService[pluralize(292)]["withArgs"](value2["id"], {
      "absolute" : !![],
      "secure" : undefined,
      "withSubdirectory" : !![]
    })[pluralize(305)](data[pluralize(319)]);
    data[pluralize(320)](getUrl, value2, !![])[pluralize(259)][pluralize(294)](data[pluralize(319)]);
  });
  data[getRefreshTokenKey(318)](it, "should return absolute url for a post and remove /amp/ in url", function() {
    const pluralize = getRefreshTokenKey;
    const remoteHostsUrl = {
      "relativeUrl" : data[pluralize(321)]
    };
    urlUtils[pluralize(265)][pluralize(304)](remoteHostsUrl, {}, !![])[pluralize(305)](data[pluralize(322)]);
    getUrl(remoteHostsUrl, !![])[pluralize(259)][pluralize(294)](pluralize(323));
    urlService[pluralize(292)]["called"][pluralize(259)]["be"]["false"]();
  });
  data[getRefreshTokenKey(324)](it, data[getRefreshTokenKey(325)], function() {
    const idStringify = getRefreshTokenKey;
    const posCur = testUtils[idStringify(289)][idStringify(290)][idStringify(326)]();
    posCur[idStringify(327)] = null;
    urlService[idStringify(292)][idStringify(304)](posCur["id"], {
      "absolute" : undefined,
      "secure" : undefined,
      "withSubdirectory" : !![]
    })[idStringify(305)](idStringify(328));
    data["znxHG"](getUrl, posCur)[idStringify(259)][idStringify(294)](idStringify(328));
  });
  it(data[getRefreshTokenKey(329)], function() {
    const pluralize = getRefreshTokenKey;
    const value2 = testUtils[pluralize(289)][pluralize(290)][pluralize(326)]();
    value2[pluralize(327)] = null;
    value2[pluralize(315)] = !![];
    urlService[pluralize(292)][pluralize(304)](value2["id"], {
      "absolute" : undefined,
      "secure" : !![],
      "withSubdirectory" : !![]
    })[pluralize(305)](data["ylSLM"]);
    data[pluralize(330)](getUrl, value2)[pluralize(259)][pluralize(294)](data["ylSLM"]);
  });
  data[getRefreshTokenKey(324)](it, "should return url for a author", function() {
    const pluralize = getRefreshTokenKey;
    const asset = testUtils["DataGenerator"][pluralize(290)]["createUser"]();
    urlService[pluralize(292)][pluralize(304)](asset["id"], {
      "absolute" : undefined,
      "secure" : undefined,
      "withSubdirectory" : !![]
    })[pluralize(305)](data[pluralize(331)]);
    getUrl(asset)[pluralize(259)][pluralize(294)](data[pluralize(331)]);
  });
  data["XsxnC"](it, data[getRefreshTokenKey(332)], function() {
    const pluralize = getRefreshTokenKey;
    const value2 = testUtils[pluralize(289)]["forKnex"][pluralize(333)]();
    value2[pluralize(315)] = !![];
    urlService[pluralize(292)][pluralize(304)](value2["id"], {
      "absolute" : !![],
      "secure" : !![],
      "withSubdirectory" : !![]
    })["returns"](data[pluralize(334)]);
    data[pluralize(335)](getUrl, value2, !![])[pluralize(259)][pluralize(294)](data[pluralize(334)]);
  });
  data[getRefreshTokenKey(336)](it, getRefreshTokenKey(337), function() {
    const String = getRefreshTokenKey;
    const entry = {
      "label" : data["cnGfP"],
      "url" : data[String(338)],
      "slug" : data[String(339)],
      "current" : !![]
    };
    urlUtils["urlFor"]["withArgs"](String(340), {
      "nav" : entry,
      "secure" : entry[String(315)]
    }, undefined)[String(305)](data[String(341)]);
    getUrl(entry)[String(259)][String(342)](data["aJMzC"]);
  });
  data["EvuDH"](it, data[getRefreshTokenKey(343)], function() {
    const pluralize = getRefreshTokenKey;
    const state = {
      "label" : data[pluralize(344)],
      "url" : data[pluralize(338)],
      "slug" : data["PPuFp"],
      "current" : !![]
    };
    urlUtils[pluralize(265)][pluralize(304)]("nav", {
      "nav" : state,
      "secure" : state["secure"]
    }, !![])["returns"](data[pluralize(345)]);
    data[pluralize(318)](getUrl, state, !![])[pluralize(259)]["equal"](data[pluralize(345)]);
  });
  it("should return `relativeUrl` and remove /amp/ in url", function() {
    const get = getRefreshTokenKey;
    const tokens = {
      "relativeUrl" : get(273)
    };
    urlUtils[get(265)]["withArgs"](tokens, {}, undefined)[get(305)](tokens["relativeUrl"]);
    data[get(330)](getUrl, tokens)[get(259)][get(294)](data[get(346)]);
    urlService["getUrlByResourceId"]["called"]["should"]["be"][get(347)]();
  });
});

