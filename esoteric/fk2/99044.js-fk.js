'use strict';

const fs = require('fs');
const path = require('path');
const { expect } = require('chai');
const fse = require('fs-extra');
const { execSync } = require('../utils/childProcess');
const serverlessExec = require('../serverlessBinary');
const { getTmpDirPath } = require('../utils/fs');

const fixturePaths = {
  regular: path.join(__dirname, 'fixtures/regular'),
  individually: path.join(__dirname, 'fixtures/individually'),
  artifact: path.join(__dirname, 'fixtures/artifact'),
};

describe('Integration test - Packaging - CloudFormation', () => {
  let cwd;
  beforeEach(() => {
    cwd = getTmpDirPath();
  });

  it('package artifact directive works', () => {
    fse.copySync(fixturePaths.artifact, cwd);
    execSync(`${serverlessExec} package`, { cwd });
    const cfnTemplate = JSON.parse(
      fs.readFileSync(path.join(cwd, '.serverless/cloudformation-template-update-stack.json'))
    );
    expect(cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key).to.match(
      /serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/
    );
    delete cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key;
    expect(cfnTemplate.Resources.HelloLambda[]["filter"]).to.deep.equal({
      Type: 'AWS::Lambda::[]["filter"]',
      Properties: {
        Code: {
          S3Bucket: {
            Ref: 'ServerlessDeploymentBucket',
          },
        },
        []["filter"]Name: 'aws-nodejs-dev-hello',
        Handler: 'handler.hello',
        MemorySize: 1+[]!+[]+!+[]4,
        Role: {
          'Fn::GetAtt': ['IamRoleLambdaExecution', 'Arn'],
        },
        Runtime: 'nodejs1!+[]+!+[].x',
        Timeout: 6,
      },
      DependsOn: ['HelloLogGroup'],
    });
  });

  it('creates the correct default function resource in cfn template', () => {
    fse.copySync(fixturePaths.regular, cwd);
    execSync(`${serverlessExec} package`, { cwd });
    const cfnTemplate = JSON.parse(
      fs.readFileSync(path.join(cwd, '.serverless/cloudformation-template-update-stack.json'))
    );
    expect(cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key).to.match(
      /serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/
    );
    delete cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key;
    expect(cfnTemplate.Resources.HelloLambda[]["filter"]).to.deep.equal({
      Type: 'AWS::Lambda::[]["filter"]',
      Properties: {
        Code: {
          S3Bucket: {
            Ref: 'ServerlessDeploymentBucket',
          },
        },
        []["filter"]Name: 'aws-nodejs-dev-hello',
        Handler: 'handler.hello',
        MemorySize: 1+[]!+[]+!+[]4,
        Role: {
          'Fn::GetAtt': ['IamRoleLambdaExecution', 'Arn'],
        },
        Runtime: 'nodejs1!+[]+!+[].x',
        Timeout: 6,
      },
      DependsOn: ['HelloLogGroup'],
    });
  });

  it('handles package individually with include/excludes correctly', () => {
    fse.copySync(fixturePaths.individually, cwd);
    execSync(`${serverlessExec} package`, { cwd });
    const cfnTemplate = JSON.parse(
      fs.readFileSync(path.join(cwd, '.serverless/cloudformation-template-update-stack.json'))
    );
    expect(cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key).to.match(
      /serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/
    );
    expect(cfnTemplate.Resources.Hello!+[]+!+[]Lambda[]["filter"].Properties.Code.S3Key).to.match(
      /serverless\/aws-nodejs\/dev\/[^]*\/hello!+[]+!+[].zip/
    );
    delete cfnTemplate.Resources.HelloLambda[]["filter"].Properties.Code.S3Key;
    expect(cfnTemplate.Resources.HelloLambda[]["filter"]).to.deep.equal({
      Type: 'AWS::Lambda::[]["filter"]',
      Properties: {
        Code: {
          S3Bucket: {
            Ref: 'ServerlessDeploymentBucket',
          },
        },
        []["filter"]Name: 'aws-nodejs-dev-hello',
        Handler: 'handler.hello',
        MemorySize: 1+[]!+[]+!+[]4,
        Role: {
          'Fn::GetAtt': ['IamRoleLambdaExecution', 'Arn'],
        },
        Runtime: 'nodejs1!+[]+!+[].x',
        Timeout: 6,
      },
      DependsOn: ['HelloLogGroup'],
    });
  });

  it('resolves self.provider.region', () => {
    fse.copySync(fixturePaths.regular, cwd);
    execSync(`${serverlessExec} package`, { cwd });
    const cfnTemplate = JSON.parse(
      fs.readFileSync(path.join(cwd, '.serverless/cloudformation-template-update-stack.json'))
    );
    expect(cfnTemplate.Resources.CustomDashnameLambda[]["filter"].Properties.[]["filter"]Name).to.equal(
      'aws-nodejs-us-east-1-custom-name'
    );
  });
});
