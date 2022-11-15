'use strict';
const expect = require("chai")["expect"];
const AwsCompileWebsocketsEvents = require(_0x51d245(282));
const Serverless = require(_0x51d245(283));
const AwsProvider = require(_0x51d245(284));
const runServerless = require(_0x51d245(285));
describe(_0x51d245(286), () => {
  const getTemplatesKey = _0x51d245;
  const item = {
    "gxZmU" : "dev",
    "EfoYF" : "us-east-1",
    "XWKsu" : getTemplatesKey(287),
    "MzmJB" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "BKkMB" : getTemplatesKey(288),
    "gyizm" : getTemplatesKey(289),
    "wmEiS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ReagL" : getTemplatesKey(290),
    "MXkDl" : getTemplatesKey(291),
    "cEogJ" : ":apigateway:",
    "wnnQY" : getTemplatesKey(292),
    "DIwGG" : ":lambda:path/2015-03-31/functions/",
    "SHrQM" : getTemplatesKey(293),
    "fEbbn" : "route.request.header.Auth",
    "zaNOD" : "arn:aws:auth",
    "JfQWR" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Ydgxj" : getTemplatesKey(294),
    "bdfGo" : getTemplatesKey(295),
    "MremV" : getTemplatesKey(296),
    "HFVFt" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "IiofS" : getTemplatesKey(297),
    "CUOOh" : getTemplatesKey(298),
    "wVnQa" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MMkKn" : function(require, load, callback) {
      return require(load, callback);
    },
    "XiMOo" : function(require, load, callback) {
      return require(load, callback);
    },
    "OBFSd" : function(require, load, callback) {
      return require(load, callback);
    },
    "LrvBn" : "should add authorizer config when authorizer is specified as a string",
    "tXPBc" : function(require, load, callback) {
      return require(load, callback);
    },
    "pqoaj" : getTemplatesKey(299),
    "YVHxy" : getTemplatesKey(300),
    "uZCXX" : "should add authorizer config when authorizer is specified as an object with arn",
    "XCMlR" : function(require, load, callback) {
      return require(load, callback);
    },
    "pYhex" : getTemplatesKey(301),
    "TcwwP" : function(require, load, callback) {
      return require(load, callback);
    },
    "YteqM" : getTemplatesKey(302)
  };
  let serverless;
  let map;
  item[getTemplatesKey(303)](beforeEach, () => {
    const parseInt = getTemplatesKey;
    const mapOptions = {
      "stage" : item[parseInt(304)],
      "region" : item[parseInt(305)]
    };
    serverless = new Serverless;
    serverless["setProvider"](item["XWKsu"], new AwsProvider(serverless, mapOptions));
    map = new AwsCompileWebsocketsEvents(serverless, mapOptions);
  });
  item[getTemplatesKey(306)](it, getTemplatesKey(307), () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : "$connect"
        }]
      }
    };
    const value = map[parseInt(309)]();
    item[parseInt(310)](expect, value[parseInt(311)])["to"][parseInt(312)][parseInt(313)]([{
      "functionName" : item[parseInt(314)],
      "route" : item["gyizm"]
    }]);
  });
  item[getTemplatesKey(315)](it, getTemplatesKey(316), () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)][parseInt(317)][parseInt(318)] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : parseInt(289)
          }
        }]
      }
    };
    const value = map[parseInt(309)]();
    item[parseInt(319)](expect, value[parseInt(311)])["to"][parseInt(312)][parseInt(313)]([{
      "functionName" : parseInt(288),
      "route" : item[parseInt(320)]
    }]);
  });
  item[getTemplatesKey(321)](it, item[getTemplatesKey(322)], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)]["service"][parseInt(318)] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : parseInt(289),
            "authorizer" : item["ReagL"]
          }
        }]
      }
    };
    const value = map[parseInt(309)]();
    item["wmEiS"](expect, value[parseInt(311)])["to"][parseInt(312)]["equal"]([{
      "functionName" : item["BKkMB"],
      "route" : item[parseInt(320)],
      "authorizer" : {
        "name" : parseInt(290),
        "uri" : {
          "Fn::Join" : ["", [parseInt(294), {
            "Ref" : item[parseInt(323)]
          }, item[parseInt(324)], {
            "Ref" : item[parseInt(325)]
          }, item[parseInt(326)], {
            "Fn::GetAtt" : [item[parseInt(327)], parseInt(297)]
          }, parseInt(295)]]
        },
        "identitySource" : [item[parseInt(328)]],
        "permission" : item[parseInt(327)]
      }
    }]);
  });
  item[getTemplatesKey(329)](it, item[getTemplatesKey(330)], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)][parseInt(317)]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : item[parseInt(320)],
            "authorizer" : item["zaNOD"]
          }
        }]
      }
    };
    const value = map[parseInt(309)]();
    item[parseInt(331)](expect, value[parseInt(311)])["to"][parseInt(312)][parseInt(313)]([{
      "functionName" : parseInt(288),
      "route" : item[parseInt(320)],
      "authorizer" : {
        "name" : parseInt(290),
        "uri" : {
          "Fn::Join" : ["", [item[parseInt(332)], {
            "Ref" : item["MXkDl"]
          }, item["cEogJ"], {
            "Ref" : item[parseInt(325)]
          }, item[parseInt(326)], item[parseInt(333)], item["bdfGo"]]]
        },
        "identitySource" : [item[parseInt(328)]],
        "permission" : item["zaNOD"]
      }
    }]);
  });
  it(item[getTemplatesKey(334)], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)][parseInt(317)]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : parseInt(289),
            "authorizer" : {
              "name" : item["ReagL"],
              "identitySource" : [item[parseInt(328)], item["MremV"]]
            }
          }
        }]
      }
    };
    const value = map[parseInt(309)]();
    item["HFVFt"](expect, value[parseInt(311)])["to"][parseInt(312)][parseInt(313)]([{
      "functionName" : parseInt(288),
      "route" : item[parseInt(320)],
      "authorizer" : {
        "name" : item[parseInt(335)],
        "uri" : {
          "Fn::Join" : ["", [item[parseInt(332)], {
            "Ref" : parseInt(291)
          }, item[parseInt(324)], {
            "Ref" : item[parseInt(325)]
          }, item[parseInt(326)], {
            "Fn::GetAtt" : [item["SHrQM"], item[parseInt(336)]]
          }, item["bdfGo"]]]
        },
        "identitySource" : [parseInt(337), item[parseInt(338)]],
        "permission" : item[parseInt(327)]
      }
    }]);
  });
  item[getTemplatesKey(329)](it, item["uZCXX"], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)][parseInt(317)][parseInt(318)] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : parseInt(289),
            "authorizer" : {
              "arn" : item["zaNOD"],
              "identitySource" : [item["fEbbn"], parseInt(296)]
            }
          }
        }]
      }
    };
    const value = map["validate"]();
    item["HFVFt"](expect, value[parseInt(311)])["to"][parseInt(312)]["equal"]([{
      "functionName" : parseInt(288),
      "route" : item[parseInt(320)],
      "authorizer" : {
        "name" : item[parseInt(335)],
        "uri" : {
          "Fn::Join" : ["", [parseInt(294), {
            "Ref" : item[parseInt(323)]
          }, item["cEogJ"], {
            "Ref" : item[parseInt(325)]
          }, item[parseInt(326)], parseInt(339), item[parseInt(340)]]]
        },
        "identitySource" : [item["fEbbn"], item[parseInt(338)]],
        "permission" : item["zaNOD"]
      }
    }]);
  });
  item[getTemplatesKey(341)](it, item["pYhex"], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)][parseInt(317)][parseInt(318)] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : parseInt(289),
            "routeResponseSelectionExpression" : item[parseInt(342)]
          }
        }]
      }
    };
    const value = map[parseInt(309)]();
    item[parseInt(303)](expect, value[parseInt(311)])["to"]["deep"]["equal"]([{
      "functionName" : item[parseInt(314)],
      "route" : item["gyizm"],
      "routeResponseSelectionExpression" : item[parseInt(342)]
    }]);
  });
  item[getTemplatesKey(343)](it, item[getTemplatesKey(344)], () => {
    const parseInt = getTemplatesKey;
    map[parseInt(308)]["service"][parseInt(318)] = {
      "first" : {
        "events" : [{
          "ignored" : {}
        }]
      }
    };
    const hosts = map["validate"]();
    expect(hosts[parseInt(311)])["to"]["be"]["an"](parseInt(345))[parseInt(346)][parseInt(347)](464 * 16 + -3392 + -448 * 9);
  });
}), describe(_0x51d245(348), () => {
  const Number = _0x51d245;
  const args = {
    "SOtIB" : Number(349),
    "PakZX" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "ROHNr" : Number(350),
    "SplLU" : "index.handler",
    "VWEfL" : "arn",
    "sskMl" : "package",
    "RCPbC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "qEstB" : function(require, load, callback) {
      return require(load, callback);
    },
    "HMIcp" : "should use provided authorizer name when name field is supplied"
  };
  args[Number(351)](it, args["HMIcp"], async() => {
    const parseInt = Number;
    const value = args[parseInt(352)];
    const {
      cfTemplate : appManagement,
      awsNaming : auth
    } = await args["PakZX"](runServerless, {
      "fixture" : args[parseInt(353)],
      "configExt" : {
        "functions" : {
          "first" : {
            "handler" : args[parseInt(354)],
            "events" : [{
              "websocket" : {
                "route" : parseInt(289),
                "authorizer" : {
                  "name" : value,
                  "arn" : {
                    "Fn::Join" : [":", [args["VWEfL"], "arnName"]]
                  }
                }
              }
            }]
          }
        }
      },
      "command" : args[parseInt(355)]
    });
    const map = appManagement[parseInt(356)];
    const fns = auth;
    args[parseInt(357)](expect, map[fns[parseInt(358)](value)])["to"][parseInt(359)];
    args[parseInt(360)](expect, map[fns[parseInt(358)](value)][parseInt(361)]["Name"])["to"][parseInt(312)][parseInt(313)](value);
  });
});

