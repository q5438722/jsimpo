'use strict';
const expect = require("chai")["expect"];
const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");
describe("#compileIntegrations()", () => {
  let rt;
  beforeEach(() => {
    const serverless = new Serverless;
    serverless["setProvider"](_0x1a7626["CRZab"], new AwsProvider(serverless));
    serverless["service"]["provider"]["compiledCloudFormationTemplate"] = {
      "Resources" : {}
    };
    rt = new AwsCompileWebsocketsEvents(serverless);
    rt["websocketsApiLogicalId"] = rt["provider"]["naming"]["getWebsocketsApiLogicalId"]();
  });
  it(_0x1a7626["eoZuR"], () => {
    rt["validated"] = {
      "events" : [{
        "functionName" : "First",
        "route" : _0x1a7626["sigDL"]
      }, {
        "functionName" : "Second",
        "route" : _0x1a7626["sbQgh"]
      }]
    };
    rt["compileIntegrations"]();
    const input = rt["serverless"]["service"]["provider"]["compiledCloudFormationTemplate"]["Resources"];
    expect(input)["to"]["deep"]["equal"]({
      "FirstWebsocketsIntegration" : {
        "Type" : "AWS::ApiGatewayV2::Integration",
        "Properties" : {
          "ApiId" : {
            "Ref" : _0x1a7626["wlEzs"]
          },
          "IntegrationType" : _0x1a7626["sApnp"],
          "IntegrationUri" : {
            "Fn::Join" : ["", ["arn:", {
              "Ref" : _0x1a7626["wHbtt"]
            }, ":apigateway:", {
              "Ref" : _0x1a7626["feImN"]
            }, ":lambda:path/2015-03-31/functions/", {
              "Fn::GetAtt" : [_0x1a7626["qHzOT"], "Arn"]
            }, _0x1a7626["wyUAs"]]]
          }
        }
      },
      "SecondWebsocketsIntegration" : {
        "Type" : "AWS::ApiGatewayV2::Integration",
        "Properties" : {
          "ApiId" : {
            "Ref" : _0x1a7626["wlEzs"]
          },
          "IntegrationType" : _0x1a7626["sApnp"],
          "IntegrationUri" : {
            "Fn::Join" : ["", [_0x1a7626["oYEWG"], {
              "Ref" : _0x1a7626["wHbtt"]
            }, _0x1a7626["OakVa"], {
              "Ref" : "AWS::Region"
            }, _0x1a7626["awoPF"], {
              "Fn::GetAtt" : ["SecondLambdaFunction", _0x1a7626["DsSGd"]]
            }, _0x1a7626["wyUAs"]]]
          }
        }
      }
    });
  });
});

