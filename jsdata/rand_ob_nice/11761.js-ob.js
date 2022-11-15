'use strict';
const _0x988e = ["SLtle", "796189KZcBpP", "1OOUvQQ", "994005ZvsHhI", "138464mfORmC", "7nItfNW", "15727zfvEGn", "15dvjWGp", "4216XpaxRM", "192iyMKXb", "151190cjgJnb", "10cDxvzt", "130477JbKkuC", "path", "../../../../test/helpers/builder", "../../../../test/helpers/request", "rec.jpg", "IQxyl", "POST", "rmukp", "vvoBj", "single-media", "media", "with-nested", "component", "default.single-media", "default.multiple-media", "withdynamiczonemedia", "default.with-nested", "each", "/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia", 
"GENERATED API", "/withdynamiczonemedias", "[%s] => Not required dynamiczone", "2|4|1|3|0", "GET", "The medias are correctly related to the components on creation", "The medias are correctly related to the components on edition", "The medias are correctly related to the nested components on creation", "Contains components with nested components having medias", "CYGoD", "split", "setURLPrefix", "singleMedia", "multipleMedia", "addComponent", "withNested", "addContentType", "build", "zqlXB", "destroy", 
"cleanup", "MQiml", "ZvbIf", "TmEUI", "tGQtO", "jhNoG", "toBe", "body", "JihXE", "UYNmE", "statusCode", "GDNHl", "isArray", "field", "toMatchObject", "anything", "arrayContaining", "objectContaining", "any", "ZjLRM", "fFceI", "xazru", "xAJjm", "LEhBn", "FvukK", "gnhJC", "wWIRK", "SGJKL", "OjOjh", "PtlHv", "BJKCq", "VvljG", "iimzs", "jkzOa"];
const _0x3f803c = _0x213d;
(function(data, val) {
  const toMonths = _0x213d;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(471)) * -parseInt(toMonths(472)) + parseInt(toMonths(473)) + -parseInt(toMonths(474)) * parseInt(toMonths(475)) + parseInt(toMonths(476)) * parseInt(toMonths(477)) + parseInt(toMonths(478)) * parseInt(toMonths(479)) + parseInt(toMonths(480)) + -parseInt(toMonths(481)) * parseInt(toMonths(482));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x1cf890) {
      data["push"](data["shift"]());
    }
  }
})(_0x988e, 566270 + -245276 + 391749);
const fs = require("fs");
const path = require(_0x3f803c(483));
const {
  createTestBuilder : createTestBuilder
} = require(_0x3f803c(484));
const {
  createStrapiInstance : createStrapiInstance
} = require("../../../../test/helpers/strapi");
const {
  createAuthRequest : createAuthRequest
} = require(_0x3f803c(485));
let strapi;
let rq;
let baseRq;
const uploadImg = () => {
  const now = _0x3f803c;
  const rpm_traffic = {
    "IQxyl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "rmukp" : "/upload",
    "vvoBj" : now(486)
  };
  return rpm_traffic[now(487)](baseRq, {
    "method" : now(488),
    "url" : rpm_traffic[now(489)],
    "formData" : {
      "files" : fs["createReadStream"](path["join"](__dirname, rpm_traffic[now(490)]))
    }
  });
};
const components = {
  "singleMedia" : {
    "name" : _0x3f803c(491),
    "attributes" : {
      "media" : {
        "type" : _0x3f803c(492)
      }
    }
  },
  "multipleMedia" : {
    "name" : "multiple-media",
    "attributes" : {
      "media" : {
        "type" : _0x3f803c(492),
        "multiple" : !![]
      }
    }
  },
  "withNested" : {
    "name" : _0x3f803c(493),
    "attributes" : {
      "singleMedia" : {
        "type" : _0x3f803c(494),
        "component" : _0x3f803c(495)
      },
      "multipleMedia" : {
        "type" : "component",
        "component" : _0x3f803c(496)
      }
    }
  }
};
const ct = {
  "name" : _0x3f803c(497),
  "attributes" : {
    "field" : {
      "type" : "dynamiczone",
      "components" : [_0x3f803c(495), _0x3f803c(496), _0x3f803c(498)]
    }
  }
};
function _0x213d(isBgroundImg, stgs) {
  return _0x213d = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (9262 + 1602 + -10393);
    let _0x37e3e5 = _0x988e[isBgroundImg];
    return _0x37e3e5;
  }, _0x213d(isBgroundImg, stgs);
}
describe[_0x3f803c(499)]([["CONTENT MANAGER", _0x3f803c(500)], [_0x3f803c(501), _0x3f803c(502)]])(_0x3f803c(503), (canCreateDiscussions, mmCoreSplitViewBlock) => {
  const getTemplatesKey = _0x3f803c;
  const item = {
    "CYGoD" : getTemplatesKey(504),
    "jhNoG" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zqlXB" : function(saveNotifs) {
      return saveNotifs();
    },
    "tGQtO" : function(saveNotifs) {
      return saveNotifs();
    },
    "JihXE" : getTemplatesKey(496),
    "UYNmE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "GDNHl" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fFceI" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xazru" : getTemplatesKey(488),
    "wWIRK" : getTemplatesKey(495),
    "hMTfC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xAJjm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "gnhJC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "SGJKL" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "OjOjh" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "PtlHv" : getTemplatesKey(505),
    "ZvbIf" : function(require, load, callback) {
      return require(load, callback);
    },
    "TmEUI" : getTemplatesKey(506),
    "ZjLRM" : getTemplatesKey(507),
    "LEhBn" : function(require, load, callback) {
      return require(load, callback);
    },
    "FvukK" : "The media are populated on the components",
    "AEtdi" : getTemplatesKey(498),
    "iimzs" : function(require, load, callback) {
      return require(load, callback);
    },
    "jkzOa" : getTemplatesKey(508),
    "oOkLF" : function(saveNotifs) {
      return saveNotifs();
    },
    "MQiml" : function(require, load, callback) {
      return require(load, callback);
    },
    "gTMGc" : "Contains components with medias",
    "BJKCq" : function(require, load, callback) {
      return require(load, callback);
    },
    "VvljG" : getTemplatesKey(509)
  };
  const self = item["oOkLF"](createTestBuilder);
  item["OjOjh"](beforeAll, async() => {
    const getInstanceName = getTemplatesKey;
    const callbackVals = item[getInstanceName(510)][getInstanceName(511)]("|");
    let callbackCount = 6284 + 6828 + -13112;
    for (; !![];) {
      switch(callbackVals[callbackCount++]) {
        case "0":
          rq[getInstanceName(512)](mmCoreSplitViewBlock);
          continue;
        case "1":
          baseRq = await item["jhNoG"](createAuthRequest, {
            "strapi" : strapi
          });
          continue;
        case "2":
          await self["addComponent"](components[getInstanceName(513)])["addComponent"](components[getInstanceName(514)])[getInstanceName(515)](components[getInstanceName(516)])[getInstanceName(517)](ct)[getInstanceName(518)]();
          continue;
        case "3":
          rq = await createAuthRequest({
            "strapi" : strapi
          });
          continue;
        case "4":
          strapi = await item[getInstanceName(519)](createStrapiInstance);
          continue;
      }
      break;
    }
  });
  afterAll(async() => {
    const toKey = getTemplatesKey;
    await strapi[toKey(520)]();
    await self[toKey(521)]();
  });
  item[getTemplatesKey(522)](describe, item["gTMGc"], () => {
    const parseInt = getTemplatesKey;
    item[parseInt(523)](test, item[parseInt(524)], async() => {
      const rel2Mstr = parseInt;
      const arg = await item[rel2Mstr(525)](uploadImg);
      item[rel2Mstr(526)](expect, arg["statusCode"])[rel2Mstr(527)](1 * -7369 + -5 * -331 + -5914 * -1);
      const videoId = arg[rel2Mstr(528)][2576 + -9986 + 3 * 2470]["id"];
      const same = await rq({
        "method" : rel2Mstr(488),
        "url" : "/",
        "body" : {
          "field" : [{
            "__component" : "default.single-media",
            "media" : videoId
          }, {
            "__component" : item[rel2Mstr(529)],
            "media" : [videoId, videoId]
          }]
        }
      });
      item[rel2Mstr(530)](expect, same[rel2Mstr(531)])[rel2Mstr(527)](-5814 + -4804 + 10818);
      item[rel2Mstr(532)](expect, Array[rel2Mstr(533)](same[rel2Mstr(528)][rel2Mstr(534)]))["toBe"](!![]);
      item[rel2Mstr(532)](expect, same["body"])[rel2Mstr(535)]({
        "field" : [{
          "id" : expect[rel2Mstr(536)](),
          "__component" : rel2Mstr(495),
          "media" : {
            "id" : videoId,
            "url" : expect["any"](String)
          }
        }, {
          "id" : expect[rel2Mstr(536)](),
          "__component" : item[rel2Mstr(529)],
          "media" : expect[rel2Mstr(537)]([expect[rel2Mstr(538)]({
            "id" : videoId,
            "url" : expect[rel2Mstr(539)](String)
          })])
        }]
      });
    });
    item[parseInt(523)](test, item[parseInt(540)], async() => {
      const rel2Mstr = parseInt;
      const json = await item[rel2Mstr(525)](uploadImg);
      item[rel2Mstr(541)](expect, json[rel2Mstr(531)])[rel2Mstr(527)](7276 + 271 * 1 + -7347);
      const exportJSONMedia = json["body"][6333 + 1 * -6433 + 100]["id"];
      const same = await item[rel2Mstr(541)](rq, {
        "method" : item[rel2Mstr(542)],
        "url" : "/",
        "body" : {
          "field" : [{
            "__component" : item["wWIRK"],
            "media" : exportJSONMedia
          }, {
            "__component" : "default.multiple-media",
            "media" : [exportJSONMedia, exportJSONMedia]
          }]
        }
      });
      item[rel2Mstr(541)](expect, same[rel2Mstr(531)])[rel2Mstr(527)](1717 * 5 + -3644 + -431 * 11);
      item["fFceI"](expect, Array[rel2Mstr(533)](same[rel2Mstr(528)][rel2Mstr(534)]))["toBe"](!![]);
      const el = await item[rel2Mstr(525)](uploadImg);
      item["hMTfC"](expect, el[rel2Mstr(531)])[rel2Mstr(527)](-6676 + 1 * -2172 + -6 * -1508);
      const videoId = el[rel2Mstr(528)][193 + -1143 + 950]["id"];
      const notif_data = await item[rel2Mstr(543)](rq, {
        "method" : "PUT",
        "url" : "/" + same[rel2Mstr(528)]["id"],
        "body" : {
          "field" : [{
            "__component" : "default.single-media",
            "media" : videoId
          }, {
            "__component" : item["JihXE"],
            "media" : [videoId, videoId]
          }]
        }
      });
      item[rel2Mstr(543)](expect, notif_data["body"])[rel2Mstr(535)]({
        "field" : [{
          "id" : expect[rel2Mstr(536)](),
          "__component" : "default.single-media",
          "media" : {
            "id" : videoId,
            "url" : expect[rel2Mstr(539)](String)
          }
        }, {
          "id" : expect[rel2Mstr(536)](),
          "__component" : item[rel2Mstr(529)],
          "media" : expect[rel2Mstr(537)]([expect[rel2Mstr(538)]({
            "id" : videoId,
            "url" : expect["any"](String)
          })])
        }]
      });
    });
    item[parseInt(544)](test, item[parseInt(545)], async() => {
      const getTemplatesKey = parseInt;
      const el = await item[getTemplatesKey(525)](uploadImg);
      item[getTemplatesKey(546)](expect, el[getTemplatesKey(531)])[getTemplatesKey(527)](41 * -170 + 1 * -2143 + 9313);
      const videoId = el[getTemplatesKey(528)][-3192 * -2 + -1 * -2117 + -8501 * 1]["id"];
      const data = await rq({
        "method" : item[getTemplatesKey(542)],
        "url" : "/",
        "body" : {
          "field" : [{
            "__component" : item[getTemplatesKey(547)],
            "media" : videoId
          }, {
            "__component" : item["JihXE"],
            "media" : [videoId, videoId]
          }]
        }
      });
      item[getTemplatesKey(548)](expect, data[getTemplatesKey(531)])[getTemplatesKey(527)](47 * 25 + 6332 + -7307);
      const value = await item[getTemplatesKey(549)](rq, {
        "method" : item[getTemplatesKey(550)],
        "url" : "/" + data[getTemplatesKey(528)]["id"]
      });
      item[getTemplatesKey(549)](expect, value[getTemplatesKey(528)])[getTemplatesKey(535)]({
        "field" : [{
          "id" : expect[getTemplatesKey(536)](),
          "__component" : item[getTemplatesKey(547)],
          "media" : {
            "id" : videoId,
            "url" : expect[getTemplatesKey(539)](String)
          }
        }, {
          "id" : expect[getTemplatesKey(536)](),
          "__component" : item[getTemplatesKey(529)],
          "media" : expect[getTemplatesKey(537)]([expect[getTemplatesKey(538)]({
            "id" : videoId,
            "url" : expect[getTemplatesKey(539)](String)
          })])
        }]
      });
    });
  });
  item[getTemplatesKey(551)](describe, item[getTemplatesKey(552)], () => {
    const scriptCase = getTemplatesKey;
    const args = {
      "SLtle" : function(value, i) {
        const getTemplatesKey = _0x213d;
        return item[getTemplatesKey(549)](value, i);
      },
      "RBpdw" : item[scriptCase(542)],
      "LrOMJ" : item["AEtdi"]
    };
    item[scriptCase(553)](test, item[scriptCase(554)], async() => {
      const parseInt = scriptCase;
      const atomToChunk = await uploadImg();
      args[parseInt(555)](expect, atomToChunk[parseInt(531)])[parseInt(527)](-67 * -56 + -35 * 227 + 4393);
      const videoId = atomToChunk[parseInt(528)][-29 * 123 + -983 * -2 + 1601]["id"];
      const buffer = await args["SLtle"](rq, {
        "method" : args["RBpdw"],
        "url" : "/",
        "body" : {
          "field" : [{
            "__component" : args["LrOMJ"],
            "singleMedia" : {
              "media" : videoId
            },
            "multipleMedia" : {
              "media" : [videoId, videoId]
            }
          }]
        }
      });
      args[parseInt(555)](expect, buffer[parseInt(531)])[parseInt(527)](1 * -6568 + -1 * 2439 + 33 * 279);
      args[parseInt(555)](expect, Array[parseInt(533)](buffer[parseInt(528)]["field"]))["toBe"](!![]);
      expect(buffer[parseInt(528)])[parseInt(535)]({
        "field" : [{
          "id" : expect[parseInt(536)](),
          "__component" : args["LrOMJ"],
          "singleMedia" : {
            "media" : {
              "id" : videoId,
              "url" : expect["any"](String)
            }
          },
          "multipleMedia" : {
            "media" : expect[parseInt(537)]([expect[parseInt(538)]({
              "id" : videoId,
              "url" : expect[parseInt(539)](String)
            })])
          }
        }]
      });
    });
  });
});

