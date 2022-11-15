'use strict';
const expect = require("chai")[_0x348e89(478)];
const AwsCompileWebsocketsEvents = require(_0x348e89(479));
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require(_0x348e89(480));
describe(_0x348e89(481), () => {
  const pluralize = _0x348e89;
  const data = {
    "nMAzb" : pluralize(482),
    "lDopc" : pluralize(483),
    "tRfEK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zcJPu" : pluralize(484),
    "KXNXj" : pluralize(485),
    "NnEvr" : "AWS_PROXY",
    "ChZnD" : pluralize(486),
    "MdyaS" : pluralize(487),
    "tfgZi" : pluralize(488),
    "rJluy" : pluralize(489),
    "ibwZZ" : pluralize(490),
    "DdkGJ" : pluralize(491),
    "DevgC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "CzoLT" : pluralize(492)
  };
  let replace;
  data["DevgC"](beforeEach, () => {
    const getConcrete = pluralize;
    const base_c = new Serverless;
    base_c[getConcrete(493)](data[getConcrete(494)], new AwsProvider(base_c));
    base_c[getConcrete(495)][getConcrete(496)][getConcrete(497)] = {
      "Resources" : {}
    };
    replace = new AwsCompileWebsocketsEvents(base_c);
    replace[getConcrete(498)] = replace[getConcrete(496)][getConcrete(499)][getConcrete(500)]();
  });
  it(data[pluralize(501)], () => {
    const getRefreshTokenKey = pluralize;
    replace[getRefreshTokenKey(502)] = {
      "events" : [{
        "functionName" : data[getRefreshTokenKey(503)],
        "route" : getRefreshTokenKey(504)
      }, {
        "functionName" : getRefreshTokenKey(505),
        "route" : getRefreshTokenKey(506)
      }]
    };
    replace["compileIntegrations"]();
    const extraOptions = replace[getRefreshTokenKey(507)]["service"]["provider"][getRefreshTokenKey(497)][getRefreshTokenKey(508)];
    data[getRefreshTokenKey(509)](expect, extraOptions)["to"][getRefreshTokenKey(510)][getRefreshTokenKey(511)]({
      "FirstWebsocketsIntegration" : {
        "Type" : data["zcJPu"],
        "Properties" : {
          "ApiId" : {
            "Ref" : data["KXNXj"]
          },
          "IntegrationType" : data[getRefreshTokenKey(512)],
          "IntegrationUri" : {
            "Fn::Join" : ["", [getRefreshTokenKey(513), {
              "Ref" : data[getRefreshTokenKey(514)]
            }, getRefreshTokenKey(489), {
              "Ref" : data[getRefreshTokenKey(515)]
            }, getRefreshTokenKey(490), {
              "Fn::GetAtt" : [getRefreshTokenKey(516), getRefreshTokenKey(491)]
            }, data["tfgZi"]]]
          }
        }
      },
      "SecondWebsocketsIntegration" : {
        "Type" : "AWS::ApiGatewayV2::Integration",
        "Properties" : {
          "ApiId" : {
            "Ref" : data["KXNXj"]
          },
          "IntegrationType" : getRefreshTokenKey(517),
          "IntegrationUri" : {
            "Fn::Join" : ["", ["arn:", {
              "Ref" : data["ChZnD"]
            }, data[getRefreshTokenKey(518)], {
              "Ref" : data[getRefreshTokenKey(515)]
            }, data[getRefreshTokenKey(519)], {
              "Fn::GetAtt" : [getRefreshTokenKey(520), data[getRefreshTokenKey(521)]]
            }, data["tfgZi"]]]
          }
        }
      }
    });
  });
});

