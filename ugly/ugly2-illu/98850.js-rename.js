"use strict";

const expect = require("chai").expect;

const sinon = require("sinon");

const AwsInfo = require("../../../../../../lib/plugins/aws/info/index");

const AwsProvider = require("../../../../../../lib/plugins/aws/provider");

const Serverless = require("../../../../../../lib/Serverless");

describe("#getStackInfo()", () => {
  var t;
  var a;
  var i;
  beforeEach(() => {
    const e = { stage: "dev", region: "us-east-1" };
    t = new Serverless();t.setProvider("aws", new AwsProvider(t, e));t.service.service = "my-service";t.service.functions = { hello: { name: "my-service-dev-hello" }, world: { name: "customized" } };t.service.layers = { test: {} };a = new AwsInfo(t, e);i = sinon.stub(a.provider, "request");
  });afterEach(() => {
    a.provider.request.restore();
  });it("attach info from describeStack call to this.gatheredData if result is available", () => {
    const e = { Stacks: [{ StackId: "arn:aws:cloudformation:us-east-1:123456789012:stack/myteststack/466df9e0-0dff-08e3-8e2f-5088487c4896", Description: "AWS CloudFormation Sample Template S3_Bucket: Sample template showing how to create a publicly accessible S3 bucket.", Tags: [], Outputs: [{ Description: "URL of the service endpoint", OutputKey: "ServiceEndpoint", OutputValue: "ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev" }, { Description: "first", OutputKey: "ApiGatewayApiKey1Value", OutputValue: "xxx" }, { Description: "second", OutputKey: "ApiGatewayApiKey2Value", OutputValue: "yyy" }, { Description: "Current Lambda layer version", OutputKey: "TestLambdaLayerQualifiedArn", OutputValue: "arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1" }, { Description: "CloudFront Distribution Id", OutputKey: "CloudFrontDistribution", OutputValue: "a12bcdef3g45hi" }, { Description: "CloudFront Distribution Domain Name", OutputKey: "CloudFrontDistributionDomainName", OutputValue: "a12bcdef3g45hi.cloudfront.net" }], StackStatusReason: null, CreationTime: "2013-08-23T01:02:15.422Z", Capabilities: [], StackName: "myteststack", StackStatus: "CREATE_COMPLETE", DisableRollback: false }] };
    i.resolves(e);const t = { info: { functions: [{ name: "hello", deployedName: "my-service-dev-hello" }, { name: "world", deployedName: "customized" }], layers: [{ name: "test", arn: "arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1" }], endpoints: ["ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev"], cloudFront: "a12bcdef3g45hi.cloudfront.net", service: "my-service", stage: "dev", region: "us-east-1", stack: "my-service-dev" }, outputs: [{ Description: "URL of the service endpoint", OutputKey: "ServiceEndpoint", OutputValue: "ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev" }, { Description: "first", OutputKey: "ApiGatewayApiKey1Value", OutputValue: "xxx" }, { Description: "second", OutputKey: "ApiGatewayApiKey2Value", OutputValue: "yyy" }, { Description: "Current Lambda layer version", OutputKey: "TestLambdaLayerQualifiedArn", OutputValue: "arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1" }, { Description: "CloudFront Distribution Id", OutputKey: "CloudFrontDistribution", OutputValue: "a12bcdef3g45hi" }, { Description: "CloudFront Distribution Domain Name", OutputKey: "CloudFrontDistributionDomainName", OutputValue: "a12bcdef3g45hi.cloudfront.net" }] };
    return a.getStackInfo().then(() => {
      expect(i.calledOnce).to.equal(true);expect(i.calledWithExactly("CloudFormation", "describeStacks", { StackName: a.provider.naming.getStackName() })).to.equal(true);expect(a.gatheredData).to.deep.equal(t);
    });
  });it("should resolve if result is empty", () => {
    const e = null;
    i.resolves(e);const t = { info: { functions: [], layers: [], endpoints: [], service: "my-service", stage: "dev", region: "us-east-1", stack: "my-service-dev" }, outputs: [] };
    return a.getStackInfo().then(() => {
      expect(i.calledOnce).to.equal(true);expect(i.calledWithExactly("CloudFormation", "describeStacks", { StackName: a.provider.naming.getStackName() })).to.equal(true);expect(a.gatheredData).to.deep.equal(t);
    });
  });it("should attach info from api gateway if httpApi is used", () => {
    t.service.provider.httpApi = { id: "http-api-id" };i.withArgs("CloudFormation", "describeStacks", { StackName: a.provider.naming.getStackName() }).resolves(null);i.withArgs("ApiGatewayV2", "getApi", { ApiId: "http-api-id" }).resolves({ ApiEndpoint: "my-endpoint" });const e = { info: { functions: [], layers: [], endpoints: ["httpApi: my-endpoint"], service: "my-service", stage: "dev", region: "us-east-1", stack: "my-service-dev" }, outputs: [] };
    return a.getStackInfo().then(() => {
      expect(i.calledTwice).to.equal(true);expect(i.calledWithExactly("CloudFormation", "describeStacks", { StackName: a.provider.naming.getStackName() })).to.equal(true);expect(i.calledWithExactly("ApiGatewayV2", "getApi", { ApiId: "http-api-id" })).to.equal(true);expect(a.gatheredData).to.deep.equal(e);
    });
  });
});