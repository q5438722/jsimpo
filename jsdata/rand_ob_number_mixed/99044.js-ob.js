'use strict';
const fs = require('fs'), path = require('path'), {expect} = require('chai'), fse = require('fs-extra'), {execSync} = require('../utils/childProcess'), serverlessExec = require('../serverlessBinary'), {getTmpDirPath} = require('../utils/fs'), fixturePaths = {
        'regular': path['join'](__dirname, 'fixtures/regular'),
        'individually': path['join'](__dirname, 'fixtures/individually'),
        'artifact': path['join'](__dirname, 'fixtures/artifact')
    };
describe('Integration\x20test\x20-\x20Packaging\x20-\x20CloudFormation', () => {
    let _0x2a9bb1;
    beforeEach(() => {
        _0x2a9bb1 = getTmpDirPath();
    }), it('package\x20artifact\x20directive\x20works', () => {
        fse['copySync'](fixturePaths['artifact'], _0x2a9bb1), execSync(serverlessExec + '\x20package', { 'cwd': _0x2a9bb1 });
        const _0x405aef = JSON['parse'](fs['readFileSync'](path['join'](_0x2a9bb1, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0x405aef['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x405aef['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], expect(_0x405aef['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': 'aws-nodejs-dev-hello',
                'Handler': 'handler.hello',
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        'Arn'
                    ]
                },
                'Runtime': 'nodejs12.x',
                'Timeout': 0x6
            },
            'DependsOn': ['HelloLogGroup']
        });
    }), it('creates\x20the\x20correct\x20default\x20function\x20resource\x20in\x20cfn\x20template', () => {
        fse['copySync'](fixturePaths['regular'], _0x2a9bb1), execSync(serverlessExec + '\x20package', { 'cwd': _0x2a9bb1 });
        const _0x114da4 = JSON['parse'](fs['readFileSync'](path['join'](_0x2a9bb1, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0x114da4['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x114da4['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], expect(_0x114da4['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': 'aws-nodejs-dev-hello',
                'Handler': 'handler.hello',
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        'Arn'
                    ]
                },
                'Runtime': 'nodejs12.x',
                'Timeout': 0x6
            },
            'DependsOn': ['HelloLogGroup']
        });
    }), it('handles\x20package\x20individually\x20with\x20include/excludes\x20correctly', () => {
        fse['copySync'](fixturePaths['individually'], _0x2a9bb1), execSync(serverlessExec + '\x20package', { 'cwd': _0x2a9bb1 });
        const _0x31f4d7 = JSON['parse'](fs['readFileSync'](path['join'](_0x2a9bb1, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0x31f4d7['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x31f4d7['Resources']['Hello2LambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x31f4d7['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], expect(_0x31f4d7['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': 'aws-nodejs-dev-hello',
                'Handler': 'handler.hello',
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        'Arn'
                    ]
                },
                'Runtime': 'nodejs12.x',
                'Timeout': 0x6
            },
            'DependsOn': ['HelloLogGroup']
        });
    }), it('resolves\x20self.provider.region', () => {
        fse['copySync'](fixturePaths['regular'], _0x2a9bb1), execSync(serverlessExec + '\x20package', { 'cwd': _0x2a9bb1 });
        const _0x1b50e6 = JSON['parse'](fs['readFileSync'](path['join'](_0x2a9bb1, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0x1b50e6['Resources']['CustomDashnameLambdaFunction']['Properties']['FunctionName'])['to']['equal']('aws-nodejs-us-east-1-custom-name');
    });
});
