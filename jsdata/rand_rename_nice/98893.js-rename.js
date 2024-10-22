'use strict';
const expect = require("chai").expect;
const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");
describe("#compileIntegrations()", () => {
  let serverlessStepFunctions;
  beforeEach(() => {
    const serverless = new Serverless;
    serverless.setProvider("aws", new AwsProvider(serverless));
    serverless.service.provider.compiledCloudFormationTemplate = {
      Resources : {}
    };
    serverlessStepFunctions = new AwsCompileWebsocketsEvents(serverless);
    serverlessStepFunctions.websocketsApiLogicalId = serverlessStepFunctions.provider.naming.getWebsocketsApiLogicalId();
  });
  it("should create an integration resource for every event", () => {
    serverlessStepFunctions.validated = {
      events : [{
        functionName : "First",
        route : "$connect"
      }, {
        functionName : "Second",
        route : "$disconnect"
      }]
    };
    serverlessStepFunctions.compileIntegrations();
    const button2Component = serverlessStepFunctions.serverless.service.provider.compiledCloudFormationTemplate.Resources;
    expect(button2Component).to.deep.equal({
      FirstWebsocketsIntegration : {
        Type : "AWS::ApiGatewayV2::Integration",
        Properties : {
          ApiId : {
            Ref : "WebsocketsApi"
          },
          IntegrationType : "AWS_PROXY",
          IntegrationUri : {
            "Fn::Join" : ["", ["arn:", {
              Ref : "AWS::Partition"
            }, ":apigateway:", {
              Ref : "AWS::Region"
            }, ":lambda:path/2015-03-31/functions/", {
              "Fn::GetAtt" : ["FirstLambdaFunction", "Arn"]
            }, "/invocations"]]
          }
        }
      },
      SecondWebsocketsIntegration : {
        Type : "AWS::ApiGatewayV2::Integration",
        Properties : {
          ApiId : {
            Ref : "WebsocketsApi"
          },
          IntegrationType : "AWS_PROXY",
          IntegrationUri : {
            "Fn::Join" : ["", ["arn:", {
              Ref : "AWS::Partition"
            }, ":apigateway:", {
              Ref : "AWS::Region"
            }, ":lambda:path/2015-03-31/functions/", {
              "Fn::GetAtt" : ["SecondLambdaFunction", "Arn"]
            }, "/invocations"]]
          }
        }
      }
    });
  });
});

