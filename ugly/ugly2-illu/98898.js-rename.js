"use strict";

const expect = require("chai").expect;

const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");

const Serverless = require("../../../../../../../../../../lib/Serverless");

const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");

const runServerless = require("../../../../../../../../../utils/run-serverless");

describe("#validate()", () => {
  var t;
  var n;
  beforeEach(() => {
    const e = { stage: "dev", region: "us-east-1" };
    t = new Serverless();t.setProvider("aws", new AwsProvider(t, e));n = new AwsCompileWebsocketsEvents(t, e);
  });it("should support the simplified string syntax", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: "$connect" }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect" }]);
  });it("should support the extended object syntax", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect" } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect" }]);
  });it("should add authorizer config when authorizer is specified as a string", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect", authorizer: "auth" } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect", authorizer: { name: "auth", uri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", { "Fn::GetAtt": ["AuthLambdaFunction", "Arn"] }, "/invocations"]] }, identitySource: ["route.request.header.Auth"], permission: "AuthLambdaFunction" } }]);
  });it("should add authorizer config when authorizer is specified as a string with arn", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect", authorizer: "arn:aws:auth" } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect", authorizer: { name: "auth", uri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", "arn:aws:auth", "/invocations"]] }, identitySource: ["route.request.header.Auth"], permission: "arn:aws:auth" } }]);
  });it("should add authorizer config when authorizer is specified as an object", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect", authorizer: { name: "auth", identitySource: ["route.request.header.Auth", "route.request.querystring.Auth"] } } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect", authorizer: { name: "auth", uri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", { "Fn::GetAtt": ["AuthLambdaFunction", "Arn"] }, "/invocations"]] }, identitySource: ["route.request.header.Auth", "route.request.querystring.Auth"], permission: "AuthLambdaFunction" } }]);
  });it("should add authorizer config when authorizer is specified as an object with arn", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect", authorizer: { arn: "arn:aws:auth", identitySource: ["route.request.header.Auth", "route.request.querystring.Auth"] } } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect", authorizer: { name: "auth", uri: { "Fn::Join": ["", ["arn:", { Ref: "AWS::Partition" }, ":apigateway:", { Ref: "AWS::Region" }, ":lambda:path/2015-03-31/functions/", "arn:aws:auth", "/invocations"]] }, identitySource: ["route.request.header.Auth", "route.request.querystring.Auth"], permission: "arn:aws:auth" } }]);
  });it("should add routeResponse when routeResponseSelectionExpression is configured", () => {
    n.serverless.service.functions = { first: { events: [{ websocket: { route: "$connect", routeResponseSelectionExpression: "$default" } }] } };const e = n.validate();
    expect(e.events).to.deep.equal([{ functionName: "first", route: "$connect", routeResponseSelectionExpression: "$default" }]);
  });it("should ignore non-websocket events", () => {
    n.serverless.service.functions = { first: { events: [{ ignored: {} }] } };const e = n.validate();
    expect(e.events).to.be.an("Array").with.length(0);
  });
});describe("#validate() using runServerless util", () => {
  it("should use provided authorizer name when name field is supplied", async () => {
    const e = "authName";
    var { cfTemplate: t, awsNaming: n } = await runServerless({ fixture: "function", configExt: { functions: { first: { handler: "index.handler", events: [{ websocket: { route: "$connect", authorizer: { name: e, arn: { "Fn::Join": [":", ["arn", "arnName"]] } } } }] } } }, command: "package" });
    const s = t.Resources;
    const r = n;
    expect(s[r.getWebsocketsAuthorizerLogicalId(e)]).to.exist;expect(s[r.getWebsocketsAuthorizerLogicalId(e)].Properties.Name).to.deep.equal(e);
  });
});
