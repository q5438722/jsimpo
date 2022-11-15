'use strict';
const fs = require("fs");
const path = require("path");
const {
  expect : expect
} = require("chai");
const fse = require("fs-extra");
const {
  execSync : execSync
} = require("../utils/childProcess");
const serverlessExec = require("../serverlessBinary");
const {
  getTmpDirPath : getTmpDirPath
} = require("../utils/fs");
const fixturePaths = {
  regular : path.join(__dirname, "fixtures/regular"),
  individually : path.join(__dirname, "fixtures/individually"),
  artifact : path.join(__dirname, "fixtures/artifact")
};
describe("Integration test - Packaging - CloudFormation", () => {
  let prj_dir;
  beforeEach(() => {
    prj_dir = getTmpDirPath();
  });
  it("package artifact directive works", () => {
    fse.copySync(fixturePaths.artifact, prj_dir);
    execSync(`${serverlessExec} package`, {
      cwd : prj_dir
    });
    const game = JSON.parse(fs.readFileSync(path.join(prj_dir, ".serverless/cloudformation-template-update-stack.json")));
    expect(game.Resources.HelloLambdaFunction.Properties.Code.S3Key).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/);
    delete game.Resources.HelloLambdaFunction.Properties.Code.S3Key;
    expect(game.Resources.HelloLambdaFunction).to.deep.equal({
      Type : "AWS::Lambda::Function",
      Properties : {
        Code : {
          S3Bucket : {
            Ref : "ServerlessDeploymentBucket"
          }
        },
        FunctionName : "aws-nodejs-dev-hello",
        Handler : "handler.hello",
        MemorySize : 1024,
        Role : {
          "Fn::GetAtt" : ["IamRoleLambdaExecution", "Arn"]
        },
        Runtime : "nodejs12.x",
        Timeout : 6
      },
      DependsOn : ["HelloLogGroup"]
    });
  });
  it("creates the correct default function resource in cfn template", () => {
    fse.copySync(fixturePaths.regular, prj_dir);
    execSync(`${serverlessExec} package`, {
      cwd : prj_dir
    });
    const game = JSON.parse(fs.readFileSync(path.join(prj_dir, ".serverless/cloudformation-template-update-stack.json")));
    expect(game.Resources.HelloLambdaFunction.Properties.Code.S3Key).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/);
    delete game.Resources.HelloLambdaFunction.Properties.Code.S3Key;
    expect(game.Resources.HelloLambdaFunction).to.deep.equal({
      Type : "AWS::Lambda::Function",
      Properties : {
        Code : {
          S3Bucket : {
            Ref : "ServerlessDeploymentBucket"
          }
        },
        FunctionName : "aws-nodejs-dev-hello",
        Handler : "handler.hello",
        MemorySize : 1024,
        Role : {
          "Fn::GetAtt" : ["IamRoleLambdaExecution", "Arn"]
        },
        Runtime : "nodejs12.x",
        Timeout : 6
      },
      DependsOn : ["HelloLogGroup"]
    });
  });
  it("handles package individually with include/excludes correctly", () => {
    fse.copySync(fixturePaths.individually, prj_dir);
    execSync(`${serverlessExec} package`, {
      cwd : prj_dir
    });
    const game = JSON.parse(fs.readFileSync(path.join(prj_dir, ".serverless/cloudformation-template-update-stack.json")));
    expect(game.Resources.HelloLambdaFunction.Properties.Code.S3Key).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/);
    expect(game.Resources.Hello2LambdaFunction.Properties.Code.S3Key).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/);
    delete game.Resources.HelloLambdaFunction.Properties.Code.S3Key;
    expect(game.Resources.HelloLambdaFunction).to.deep.equal({
      Type : "AWS::Lambda::Function",
      Properties : {
        Code : {
          S3Bucket : {
            Ref : "ServerlessDeploymentBucket"
          }
        },
        FunctionName : "aws-nodejs-dev-hello",
        Handler : "handler.hello",
        MemorySize : 1024,
        Role : {
          "Fn::GetAtt" : ["IamRoleLambdaExecution", "Arn"]
        },
        Runtime : "nodejs12.x",
        Timeout : 6
      },
      DependsOn : ["HelloLogGroup"]
    });
  });
  it("resolves self.provider.region", () => {
    fse.copySync(fixturePaths.regular, prj_dir);
    execSync(`${serverlessExec} package`, {
      cwd : prj_dir
    });
    const game = JSON.parse(fs.readFileSync(path.join(prj_dir, ".serverless/cloudformation-template-update-stack.json")));
    expect(game.Resources.CustomDashnameLambdaFunction.Properties.FunctionName).to.equal("aws-nodejs-us-east-1-custom-name");
  });
});

