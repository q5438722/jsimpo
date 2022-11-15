'use strict';
const _0x3d2c = ["AWS::ApiGatewayV2::Integration", "WebsocketsApi", "AWS::Partition", "AWS::Region", "/invocations", ":apigateway:", ":lambda:path/2015-03-31/functions/", "Arn", "should create an integration resource for every event", "setProvider", "nMAzb", "service", "provider", "compiledCloudFormationTemplate", "websocketsApiLogicalId", "naming", "getWebsocketsApiLogicalId", "CzoLT", "validated", "lDopc", "$connect", "Second", "$disconnect", "serverless", "Resources", "tRfEK", "deep", "equal", 
"NnEvr", "arn:", "ChZnD", "MdyaS", "FirstLambdaFunction", "AWS_PROXY", "rJluy", "ibwZZ", "SecondLambdaFunction", "DdkGJ", "324658PoHmbk", "272354MGfTKv", "1OTbTuq", "171289uJscwn", "1xxttCG", "209965rlTHmm", "1pOoVmO", "408458YFKLta", "33696zcCtix", "1158827gWeBre", "expect", "../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index", "../../../../../../../../../../lib/plugins/aws/provider", "#compileIntegrations()", "aws", "First"];
const _0x348e89 = _0x59a0;
function _0x59a0(isBgroundImg, stgs) {
  return _0x59a0 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (1940 * -2 + -1 * 9743 + -1281 * -11);
    let _0x508bd0 = _0x3d2c[isBgroundImg];
    return _0x508bd0;
  }, _0x59a0(isBgroundImg, stgs);
}
(function(data, val) {
  const toMonths = _0x59a0;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(468)) + parseInt(toMonths(469)) * parseInt(toMonths(470)) + -parseInt(toMonths(471)) * parseInt(toMonths(472)) + parseInt(toMonths(473)) * -parseInt(toMonths(474)) + -parseInt(toMonths(475)) + -parseInt(toMonths(476)) + parseInt(toMonths(477));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x31d3d7) {
      data["push"](data["shift"]());
    }
  }
})(_0x3d2c, 1 * 372751 + -77736 + 238 * -50);
const expect = require("chai")[_0x348e89(478)];
const AwsCompileWebsocketsEvents = require(_0x348e89(479));
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require(_0x348e89(480));
describe(_0x348e89(481), () => {
  const getRefreshTokenKey = _0x348e89;
  const data = {
    "nMAzb" : getRefreshTokenKey(482),
    "lDopc" : getRefreshTokenKey(483),
    "tRfEK" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zcJPu" : getRefreshTokenKey(484),
    "KXNXj" : getRefreshTokenKey(485),
    "NnEvr" : "AWS_PROXY",
    "ChZnD" : getRefreshTokenKey(486),
    "MdyaS" : getRefreshTokenKey(487),
    "tfgZi" : getRefreshTokenKey(488),
    "rJluy" : getRefreshTokenKey(489),
    "ibwZZ" : getRefreshTokenKey(490),
    "DdkGJ" : getRefreshTokenKey(491),
    "DevgC" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "CzoLT" : getRefreshTokenKey(492)
  };
  let colData;
  data["DevgC"](beforeEach, () => {
    const parseInt = getRefreshTokenKey;
    const formats = new Serverless;
    formats[parseInt(493)](data[parseInt(494)], new AwsProvider(formats));
    formats[parseInt(495)][parseInt(496)][parseInt(497)] = {
      "Resources" : {}
    };
    colData = new AwsCompileWebsocketsEvents(formats);
    colData[parseInt(498)] = colData[parseInt(496)][parseInt(499)][parseInt(500)]();
  });
  it(data[getRefreshTokenKey(501)], () => {
    const parseInt = getRefreshTokenKey;
    colData[parseInt(502)] = {
      "events" : [{
        "functionName" : data[parseInt(503)],
        "route" : parseInt(504)
      }, {
        "functionName" : parseInt(505),
        "route" : parseInt(506)
      }]
    };
    colData["compileIntegrations"]();
    const extraOptions = colData[parseInt(507)]["service"]["provider"][parseInt(497)][parseInt(508)];
    data[parseInt(509)](expect, extraOptions)["to"][parseInt(510)][parseInt(511)]({
      "FirstWebsocketsIntegration" : {
        "Type" : data["zcJPu"],
        "Properties" : {
          "ApiId" : {
            "Ref" : data["KXNXj"]
          },
          "IntegrationType" : data[parseInt(512)],
          "IntegrationUri" : {
            "Fn::Join" : ["", [parseInt(513), {
              "Ref" : data[parseInt(514)]
            }, parseInt(489), {
              "Ref" : data[parseInt(515)]
            }, parseInt(490), {
              "Fn::GetAtt" : [parseInt(516), parseInt(491)]
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
          "IntegrationType" : parseInt(517),
          "IntegrationUri" : {
            "Fn::Join" : ["", ["arn:", {
              "Ref" : data["ChZnD"]
            }, data[parseInt(518)], {
              "Ref" : data[parseInt(515)]
            }, data[parseInt(519)], {
              "Fn::GetAtt" : [parseInt(520), data[parseInt(521)]]
            }, data["tfgZi"]]]
          }
        }
      }
    });
  });
});

