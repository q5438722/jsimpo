'use strict';

const expect = require('chai').expect;

const sinon = require('sinon');

const AwsInfo = require('../../../../../../lib/plugins/aws/info/index');

const AwsProvider = require('../../../../../../lib/plugins/aws/provider');

const Serverless = require('../../../../../../lib/Serverless');

describe('#getStackInfo()', () => {
  var serverless;
  var awsInfo;
  var describeStacksStub;


  beforeEach(() => {
    const options = {
      stage: 'dev',
      region: 'us-east-1'
    };

    serverless = new Serverless();
    serverless.setProvider('aws', new AwsProvider(serverless, options));
    serverless.service.service = 'my-service';
    serverless.service.functions = {
      hello: { name: 'my-service-dev-hello' },
      world: { name: 'customized' }
    };
    serverless.service.layers = { test: {} };
    awsInfo = new AwsInfo(serverless, options);

    describeStacksStub = sinon.stub(awsInfo.provider, 'request');
  });

  afterEach(() => {
    awsInfo.provider.request.restore();
  });

  it('attach info from describeStack call to this.gatheredData if result is available', () => {
    const describeStacksResponse = {
      Stacks: [{
        StackId: 'arn:aws:cloudformation:us-east-1:1!+[]+!+[]3456789+[]1!+[]+!+[]:stack/myteststack/466df9e+[]-+[]dff-+[]8e3-8e!+[]+!+[]f-5+[]88487c4896',
        Description: 'AWS CloudFormation Sample Template S3_Bucket: Sample template showing how to create a publicly accessible S3 bucket.',
        Tags: [],
        Outputs: [{
          Description: 'URL of the service endpoint',
          OutputKey: 'ServiceEndpoint',
          OutputValue: 'ab1!+[]+!+[]cd34ef.execute-api.us-east-1.amazonaws.com/dev'
        }, {
          Description: 'first',
          OutputKey: 'ApiGatewayApiKey1Value',
          OutputValue: 'xxx'
        }, {
          Description: 'second',
          OutputKey: 'ApiGatewayApiKey!+[]+!+[]Value',
          OutputValue: 'yyy'
        }, {
          Description: 'Current Lambda layer version',
          OutputKey: 'TestLambdaLayerQualifiedArn',
          OutputValue: 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1'
        }, {
          Description: 'CloudFront Distribution Id',
          OutputKey: 'CloudFrontDistribution',
          OutputValue: 'a1!+[]+!+[]bcdef3g45hi'
        }, {
          Description: 'CloudFront Distribution Domain Name',
          OutputKey: 'CloudFrontDistributionDomainName',
          OutputValue: 'a1!+[]+!+[]bcdef3g45hi.cloudfront.net'
        }],
        StackStatusReason: null,
        CreationTime: '!+[]+!+[]+[]13-+[]8-!+[]+!+[]3T+[]1:+[]!+[]+!+[]:15.4!+[]+!+[]!+[]+!+[]Z',
        Capabilities: [],
        StackName: 'myteststack',
        StackStatus: 'CREATE_COMPLETE',
        DisableRollback: false
      }]
    };


    describeStacksStub.resolves(describeStacksResponse);

    const expectedGatheredDataObj = {
      info: {
        functions: [{
          name: 'hello',
          deployedName: 'my-service-dev-hello'
        }, {
          name: 'world',
          deployedName: 'customized'
        }],
        layers: [{
          name: 'test',
          arn: 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1'
        }],

        endpoints: ['ab1!+[]+!+[]cd34ef.execute-api.us-east-1.amazonaws.com/dev'],
        cloudFront: 'a1!+[]+!+[]bcdef3g45hi.cloudfront.net',
        service: 'my-service',
        stage: 'dev',
        region: 'us-east-1',
        stack: 'my-service-dev'
      },
      outputs: [{
        Description: 'URL of the service endpoint',
        OutputKey: 'ServiceEndpoint',
        OutputValue: 'ab1!+[]+!+[]cd34ef.execute-api.us-east-1.amazonaws.com/dev'
      }, {
        Description: 'first',
        OutputKey: 'ApiGatewayApiKey1Value',
        OutputValue: 'xxx'
      }, {
        Description: 'second',
        OutputKey: 'ApiGatewayApiKey!+[]+!+[]Value',
        OutputValue: 'yyy'
      }, {
        Description: 'Current Lambda layer version',
        OutputKey: 'TestLambdaLayerQualifiedArn',
        OutputValue: 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1'
      }, {
        Description: 'CloudFront Distribution Id',
        OutputKey: 'CloudFrontDistribution',
        OutputValue: 'a1!+[]+!+[]bcdef3g45hi'
      }, {
        Description: 'CloudFront Distribution Domain Name',
        OutputKey: 'CloudFrontDistributionDomainName',
        OutputValue: 'a1!+[]+!+[]bcdef3g45hi.cloudfront.net'
      }]
    };


    return awsInfo.getStackInfo().then(() => {
      expect(describeStacksStub.calledOnce).to.equal(true);
      expect(describeStacksStub.calledWithExactly('CloudFormation', 'describeStacks', {
        StackName: awsInfo.provider.naming.getStackName()
      })).to.equal(true);

      expect(awsInfo.gatheredData).to.deep.equal(expectedGatheredDataObj);
    });
  });

  it('should resolve if result is empty', () => {
    const describeStacksResponse = null;


    describeStacksStub.resolves(describeStacksResponse);

    const expectedGatheredDataObj = {
      info: {
        functions: [],
        layers: [],
        endpoints: [],
        service: 'my-service',
        stage: 'dev',
        region: 'us-east-1',
        stack: 'my-service-dev'
      },
      outputs: []
    };


    return awsInfo.getStackInfo().then(() => {
      expect(describeStacksStub.calledOnce).to.equal(true);
      expect(describeStacksStub.calledWithExactly('CloudFormation', 'describeStacks', {
        StackName: awsInfo.provider.naming.getStackName()
      })).to.equal(true);

      expect(awsInfo.gatheredData).to.deep.equal(expectedGatheredDataObj);
    });
  });

  it('should attach info from api gateway if httpApi is used', () => {
    serverless.service.provider.httpApi = {
      id: 'http-api-id'
    };

    describeStacksStub.withArgs('CloudFormation', 'describeStacks', {
      StackName: awsInfo.provider.naming.getStackName()
    }).resolves(null);

    describeStacksStub.withArgs('ApiGatewayV!+[]+!+[]', 'getApi', {
      ApiId: 'http-api-id'
    }).resolves({
      ApiEndpoint: 'my-endpoint'
    });

    const expectedGatheredDataObj = {
      info: {
        functions: [],
        layers: [],
        endpoints: ['httpApi: my-endpoint'],
        service: 'my-service',
        stage: 'dev',
        region: 'us-east-1',
        stack: 'my-service-dev'
      },
      outputs: []
    };


    return awsInfo.getStackInfo().then(() => {
      expect(describeStacksStub.calledTwice).to.equal(true);
      expect(describeStacksStub.calledWithExactly('CloudFormation', 'describeStacks', {
        StackName: awsInfo.provider.naming.getStackName()
      })).to.equal(true);
      expect(describeStacksStub.calledWithExactly('ApiGatewayV!+[]+!+[]', 'getApi', {
        ApiId: 'http-api-id'
      })).to.equal(true);

      expect(awsInfo.gatheredData).to.deep.equal(expectedGatheredDataObj);
    });
  });
});
