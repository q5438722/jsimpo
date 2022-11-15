'use strict';
const _0x2791 = [
    '1hapsMj',
    '137smjjtx',
    '1ZgWIzo',
    '65883dBgwUN',
    '267515jSxiJv',
    '1ZpBSUb',
    '223VPHSXZ',
    '62lebjWX',
    '19119bkMAYs',
    'chai',
    'fs-extra',
    '../utils/childProcess',
    '../serverlessBinary',
    '../utils/fs',
    'join',
    'fixtures/regular',
    'fixtures/individually',
    'fixtures/artifact',
    'Integration\x20test\x20-\x20Packaging\x20-\x20CloudFormation',
    'package\x20artifact\x20directive\x20works',
    'copySync',
    'artifact',
    'readFileSync',
    'Resources',
    'Code',
    'S3Key',
    'match',
    'HelloLambdaFunction',
    'Properties',
    'deep',
    'AWS::Lambda::Function',
    'ServerlessDeploymentBucket',
    'aws-nodejs-dev-hello',
    'IamRoleLambdaExecution',
    'Arn',
    'nodejs12.x',
    'HelloLogGroup',
    'creates\x20the\x20correct\x20default\x20function\x20resource\x20in\x20cfn\x20template',
    'regular',
    '\x20package',
    'parse',
    '.serverless/cloudformation-template-update-stack.json',
    'equal',
    'handler.hello',
    'handles\x20package\x20individually\x20with\x20include/excludes\x20correctly',
    'individually',
    'resolves\x20self.provider.region',
    'CustomDashnameLambdaFunction',
    '152664gSRLpc',
    '145593dNMvck'
];
const _0x279811 = _0x5647;
function _0x5647(_0xfde78c, _0x463646) {
    return _0x5647 = function (_0x27917e, _0x564752) {
        _0x27917e = _0x27917e - 0xf8;
        let _0x18d7f0 = _0x2791[_0x27917e];
        return _0x18d7f0;
    }, _0x5647(_0xfde78c, _0x463646);
}
(function (_0x1c4786, _0x442800) {
    const _0x33f2e2 = _0x5647;
    while (!![]) {
        try {
            const _0x1f4187 = parseInt(_0x33f2e2(0xf8)) + parseInt(_0x33f2e2(0xf9)) * -parseInt(_0x33f2e2(0xfa)) + parseInt(_0x33f2e2(0xfb)) + -parseInt(_0x33f2e2(0xfc)) * parseInt(_0x33f2e2(0xfd)) + -parseInt(_0x33f2e2(0xfe)) * -parseInt(_0x33f2e2(0xff)) + parseInt(_0x33f2e2(0x100)) * -parseInt(_0x33f2e2(0x101)) + -parseInt(_0x33f2e2(0x102));
            if (_0x1f4187 === _0x442800)
                break;
            else
                _0x1c4786['push'](_0x1c4786['shift']());
        } catch (_0x415a0c) {
            _0x1c4786['push'](_0x1c4786['shift']());
        }
    }
}(_0x2791, 0x2af17));
const fs = require('fs'), path = require('path'), {expect} = require(_0x279811(0x103)), fse = require(_0x279811(0x104)), {execSync} = require(_0x279811(0x105)), serverlessExec = require(_0x279811(0x106)), {getTmpDirPath} = require(_0x279811(0x107)), fixturePaths = {
        'regular': path[_0x279811(0x108)](__dirname, _0x279811(0x109)),
        'individually': path['join'](__dirname, _0x279811(0x10a)),
        'artifact': path[_0x279811(0x108)](__dirname, _0x279811(0x10b))
    };
describe(_0x279811(0x10c), () => {
    const _0x29ce71 = _0x279811;
    let _0x3adbef;
    beforeEach(() => {
        _0x3adbef = getTmpDirPath();
    }), it(_0x29ce71(0x10d), () => {
        const _0x3fe4db = _0x29ce71;
        fse[_0x3fe4db(0x10e)](fixturePaths[_0x3fe4db(0x10f)], _0x3adbef), execSync(serverlessExec + '\x20package', { 'cwd': _0x3adbef });
        const _0xa0f6d2 = JSON['parse'](fs[_0x3fe4db(0x110)](path['join'](_0x3adbef, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0xa0f6d2[_0x3fe4db(0x111)]['HelloLambdaFunction']['Properties'][_0x3fe4db(0x112)][_0x3fe4db(0x113)])['to'][_0x3fe4db(0x114)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0xa0f6d2['Resources'][_0x3fe4db(0x115)][_0x3fe4db(0x116)]['Code'][_0x3fe4db(0x113)], expect(_0xa0f6d2[_0x3fe4db(0x111)][_0x3fe4db(0x115)])['to'][_0x3fe4db(0x117)]['equal']({
            'Type': _0x3fe4db(0x118),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x3fe4db(0x119) } },
                'FunctionName': _0x3fe4db(0x11a),
                'Handler': 'handler.hello',
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x3fe4db(0x11b),
                        _0x3fe4db(0x11c)
                    ]
                },
                'Runtime': _0x3fe4db(0x11d),
                'Timeout': 0x6
            },
            'DependsOn': [_0x3fe4db(0x11e)]
        });
    }), it(_0x29ce71(0x11f), () => {
        const _0x5bf60f = _0x29ce71;
        fse[_0x5bf60f(0x10e)](fixturePaths[_0x5bf60f(0x120)], _0x3adbef), execSync(serverlessExec + _0x5bf60f(0x121), { 'cwd': _0x3adbef });
        const _0x23febe = JSON[_0x5bf60f(0x122)](fs['readFileSync'](path[_0x5bf60f(0x108)](_0x3adbef, _0x5bf60f(0x123))));
        expect(_0x23febe[_0x5bf60f(0x111)][_0x5bf60f(0x115)][_0x5bf60f(0x116)]['Code'][_0x5bf60f(0x113)])['to'][_0x5bf60f(0x114)](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x23febe[_0x5bf60f(0x111)][_0x5bf60f(0x115)]['Properties']['Code'][_0x5bf60f(0x113)], expect(_0x23febe[_0x5bf60f(0x111)][_0x5bf60f(0x115)])['to']['deep'][_0x5bf60f(0x124)]({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x5bf60f(0x119) } },
                'FunctionName': _0x5bf60f(0x11a),
                'Handler': _0x5bf60f(0x125),
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x5bf60f(0x11b),
                        _0x5bf60f(0x11c)
                    ]
                },
                'Runtime': _0x5bf60f(0x11d),
                'Timeout': 0x6
            },
            'DependsOn': [_0x5bf60f(0x11e)]
        });
    }), it(_0x29ce71(0x126), () => {
        const _0x5cc39b = _0x29ce71;
        fse[_0x5cc39b(0x10e)](fixturePaths[_0x5cc39b(0x127)], _0x3adbef), execSync(serverlessExec + '\x20package', { 'cwd': _0x3adbef });
        const _0x4feb01 = JSON[_0x5cc39b(0x122)](fs[_0x5cc39b(0x110)](path[_0x5cc39b(0x108)](_0x3adbef, _0x5cc39b(0x123))));
        expect(_0x4feb01[_0x5cc39b(0x111)][_0x5cc39b(0x115)]['Properties'][_0x5cc39b(0x112)][_0x5cc39b(0x113)])['to'][_0x5cc39b(0x114)](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4feb01[_0x5cc39b(0x111)]['Hello2LambdaFunction'][_0x5cc39b(0x116)][_0x5cc39b(0x112)][_0x5cc39b(0x113)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4feb01['Resources'][_0x5cc39b(0x115)][_0x5cc39b(0x116)][_0x5cc39b(0x112)][_0x5cc39b(0x113)], expect(_0x4feb01[_0x5cc39b(0x111)][_0x5cc39b(0x115)])['to'][_0x5cc39b(0x117)][_0x5cc39b(0x124)]({
            'Type': _0x5cc39b(0x118),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': 'aws-nodejs-dev-hello',
                'Handler': _0x5cc39b(0x125),
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x5cc39b(0x11b),
                        _0x5cc39b(0x11c)
                    ]
                },
                'Runtime': _0x5cc39b(0x11d),
                'Timeout': 0x6
            },
            'DependsOn': ['HelloLogGroup']
        });
    }), it(_0x29ce71(0x128), () => {
        const _0x7438b1 = _0x29ce71;
        fse[_0x7438b1(0x10e)](fixturePaths[_0x7438b1(0x120)], _0x3adbef), execSync(serverlessExec + _0x7438b1(0x121), { 'cwd': _0x3adbef });
        const _0x37cb66 = JSON[_0x7438b1(0x122)](fs[_0x7438b1(0x110)](path[_0x7438b1(0x108)](_0x3adbef, _0x7438b1(0x123))));
        expect(_0x37cb66[_0x7438b1(0x111)][_0x7438b1(0x129)][_0x7438b1(0x116)]['FunctionName'])['to'][_0x7438b1(0x124)]('aws-nodejs-us-east-1-custom-name');
    });
});
