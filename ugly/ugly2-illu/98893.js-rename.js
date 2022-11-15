"use strict";

const expect = require("chai").expect;

const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");

const Serverless = require("../../../../../../../../../../lib/Serverless");

const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");

describe("#compileIntegrations()", () => {
  var t;
  beforeEach(() => {
    const e = new Serverless();
    e.setProvider("aws", new AwsProvider(e));e.service.provider.compiledCloudFormationTemplate = { Resources: {} };t = new AwsCompileWebsocketsEvents(e);t.websocketsApiLogicalId = t.provider.naming.getWebsocketsApiLogicalId();
  });it("should create an integration resource for every event", () => {
    t.validated = { events: [{ functionName: "First", route: "$connect" }, { functionName: "Second", route: "$disconnect" }] };t.compileIntegrations();const e = t.serverless.service.provider.compiledCloudFormationTemplate.Resources;
    expect(e).to.deep.equal({ FirstWebsocketsIntegration: { Type: "AWS::ApiGatewayV2::Integration", Properties: { ApiId: { Ref: "WebsocketsApi" }, IntegrationType: "AWS_PROXY", IntegrationUri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", { "Fn::GetAtt": ["FirstLambdaFunction", "Arn"] }, "/invocations"]] } } }, SecondWebsocketsIntegration: { Type: "AWS::ApiGatewayV2::Integration", Properties: { ApiId: { Ref: "WebsocketsApi" }, IntegrationType: "AWS_PROXY", IntegrationUri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", { "Fn::GetAtt": ["SecondLambdaFunction", "Arn"] }, "/invocations"]] } } } });
  });
});
