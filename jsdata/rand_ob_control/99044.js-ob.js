'use strict';
const fs = require('fs'), path = require('path'), {expect} = require('chai'), fse = require('fs-extra'), {execSync} = require('../utils/childProcess'), serverlessExec = require('../serverlessBinary'), {getTmpDirPath} = require('../utils/fs'), fixturePaths = {
        'regular': path['join'](__dirname, 'fixtures/regular'),
        'individually': path['join'](__dirname, 'fixtures/individually'),
        'artifact': path['join'](__dirname, 'fixtures/artifact')
    };
describe('Integration\x20test\x20-\x20Packaging\x20-\x20CloudFormation', () => {
    const _0x2eb584 = {
        'CwosD': function (_0x1c0b80) {
            return _0x1c0b80();
        },
        'lckJe': function (_0x73b90c, _0x330209, _0x40fc54) {
            return _0x73b90c(_0x330209, _0x40fc54);
        },
        'QSDdg': '.serverless/cloudformation-template-update-stack.json',
        'NccZW': function (_0x3e4635, _0x175119) {
            return _0x3e4635(_0x175119);
        },
        'VlUWD': 'AWS::Lambda::Function',
        'TdGir': 'ServerlessDeploymentBucket',
        'eJFsg': 'aws-nodejs-dev-hello',
        'VUsOH': 'handler.hello',
        'jEZoA': 'IamRoleLambdaExecution',
        'vWDns': 'Arn',
        'vlNVj': 'nodejs12.x',
        'xBtNt': 'HelloLogGroup',
        'WYuQS': function (_0x2c7766, _0x399b22) {
            return _0x2c7766(_0x399b22);
        },
        'jpCtJ': function (_0x2a393e, _0x531347, _0x141be7) {
            return _0x2a393e(_0x531347, _0x141be7);
        },
        'CBIBo': function (_0x1f5971, _0x1569a8) {
            return _0x1f5971(_0x1569a8);
        },
        'Tzkce': function (_0x5ab65e, _0x3e79fa) {
            return _0x5ab65e(_0x3e79fa);
        },
        'SPtBC': 'aws-nodejs-us-east-1-custom-name',
        'RpDUm': function (_0x42ac94, _0x22434e, _0x159709) {
            return _0x42ac94(_0x22434e, _0x159709);
        },
        'vHfZX': 'package\x20artifact\x20directive\x20works',
        'feSbh': 'creates\x20the\x20correct\x20default\x20function\x20resource\x20in\x20cfn\x20template',
        'lCZrd': function (_0xd5db99, _0x461d17, _0x30bc1f) {
            return _0xd5db99(_0x461d17, _0x30bc1f);
        },
        'fknKy': 'handles\x20package\x20individually\x20with\x20include/excludes\x20correctly',
        'QDWAa': 'resolves\x20self.provider.region'
    };
    let _0x575887;
    _0x2eb584['Tzkce'](beforeEach, () => {
        _0x575887 = _0x2eb584['CwosD'](getTmpDirPath);
    }), _0x2eb584['RpDUm'](it, _0x2eb584['vHfZX'], () => {
        fse['copySync'](fixturePaths['artifact'], _0x575887), _0x2eb584['lckJe'](execSync, serverlessExec + '\x20package', { 'cwd': _0x575887 });
        const _0x3849b0 = JSON['parse'](fs['readFileSync'](path['join'](_0x575887, _0x2eb584['QSDdg'])));
        _0x2eb584['NccZW'](expect, _0x3849b0['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x3849b0['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], _0x2eb584['NccZW'](expect, _0x3849b0['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': _0x2eb584['VlUWD'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x2eb584['TdGir'] } },
                'FunctionName': _0x2eb584['eJFsg'],
                'Handler': _0x2eb584['VUsOH'],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2eb584['jEZoA'],
                        _0x2eb584['vWDns']
                    ]
                },
                'Runtime': _0x2eb584['vlNVj'],
                'Timeout': 0x6
            },
            'DependsOn': [_0x2eb584['xBtNt']]
        });
    }), _0x2eb584['RpDUm'](it, _0x2eb584['feSbh'], () => {
        fse['copySync'](fixturePaths['regular'], _0x575887), _0x2eb584['lckJe'](execSync, serverlessExec + '\x20package', { 'cwd': _0x575887 });
        const _0x4488a7 = JSON['parse'](fs['readFileSync'](path['join'](_0x575887, _0x2eb584['QSDdg'])));
        _0x2eb584['WYuQS'](expect, _0x4488a7['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x4488a7['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], _0x2eb584['WYuQS'](expect, _0x4488a7['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': _0x2eb584['VlUWD'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x2eb584['TdGir'] } },
                'FunctionName': _0x2eb584['eJFsg'],
                'Handler': _0x2eb584['VUsOH'],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2eb584['jEZoA'],
                        _0x2eb584['vWDns']
                    ]
                },
                'Runtime': _0x2eb584['vlNVj'],
                'Timeout': 0x6
            },
            'DependsOn': [_0x2eb584['xBtNt']]
        });
    }), _0x2eb584['lCZrd'](it, _0x2eb584['fknKy'], () => {
        fse['copySync'](fixturePaths['individually'], _0x575887), _0x2eb584['jpCtJ'](execSync, serverlessExec + '\x20package', { 'cwd': _0x575887 });
        const _0x18b844 = JSON['parse'](fs['readFileSync'](path['join'](_0x575887, _0x2eb584['QSDdg'])));
        _0x2eb584['WYuQS'](expect, _0x18b844['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), _0x2eb584['CBIBo'](expect, _0x18b844['Resources']['Hello2LambdaFunction']['Properties']['Code']['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x18b844['Resources']['HelloLambdaFunction']['Properties']['Code']['S3Key'], _0x2eb584['CBIBo'](expect, _0x18b844['Resources']['HelloLambdaFunction'])['to']['deep']['equal']({
            'Type': _0x2eb584['VlUWD'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x2eb584['TdGir'] } },
                'FunctionName': _0x2eb584['eJFsg'],
                'Handler': _0x2eb584['VUsOH'],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2eb584['jEZoA'],
                        _0x2eb584['vWDns']
                    ]
                },
                'Runtime': _0x2eb584['vlNVj'],
                'Timeout': 0x6
            },
            'DependsOn': [_0x2eb584['xBtNt']]
        });
    }), _0x2eb584['lCZrd'](it, _0x2eb584['QDWAa'], () => {
        fse['copySync'](fixturePaths['regular'], _0x575887), _0x2eb584['jpCtJ'](execSync, serverlessExec + '\x20package', { 'cwd': _0x575887 });
        const _0x768e61 = JSON['parse'](fs['readFileSync'](path['join'](_0x575887, _0x2eb584['QSDdg'])));
        _0x2eb584['Tzkce'](expect, _0x768e61['Resources']['CustomDashnameLambdaFunction']['Properties']['FunctionName'])['to']['equal'](_0x2eb584['SPtBC']);
    });
});
