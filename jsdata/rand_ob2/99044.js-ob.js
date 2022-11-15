'use strict';
const _0xe9d5 = [
    'aws-nodejs-us-east-1-custom-name',
    '579296escMWT',
    '19455bzzmqK',
    '11RiTeZE',
    '813869FbbPIW',
    '2zAFSie',
    '4TbUazx',
    '268587wqqGDs',
    '400bEzgSv',
    '2056jbVwmT',
    '604036jyFeqT',
    '2957767PxbLfZ',
    'path',
    'chai',
    'fs-extra',
    '../utils/childProcess',
    '../serverlessBinary',
    '../utils/fs',
    'join',
    'fixtures/regular',
    'fixtures/individually',
    'fixtures/artifact',
    'package\x20artifact\x20directive\x20works',
    'artifact',
    '.serverless/cloudformation-template-update-stack.json',
    'Resources',
    'HelloLambdaFunction',
    'Properties',
    'Code',
    'S3Key',
    'match',
    'deep',
    'equal',
    'ServerlessDeploymentBucket',
    'aws-nodejs-dev-hello',
    'handler.hello',
    'IamRoleLambdaExecution',
    'Arn',
    'nodejs12.x',
    'HelloLogGroup',
    'creates\x20the\x20correct\x20default\x20function\x20resource\x20in\x20cfn\x20template',
    'regular',
    '\x20package',
    'parse',
    'readFileSync',
    'AWS::Lambda::Function',
    'handles\x20package\x20individually\x20with\x20include/excludes\x20correctly',
    'copySync',
    'individually',
    'Hello2LambdaFunction',
    'FunctionName'
];
const _0xe79ade = _0x446b;
(function (_0x1b72be, _0x11bd0b) {
    const _0x17f18f = _0x446b;
    while (!![]) {
        try {
            const _0x47a598 = parseInt(_0x17f18f(0x1e6)) + -parseInt(_0x17f18f(0x1e7)) * -parseInt(_0x17f18f(0x1e8)) + parseInt(_0x17f18f(0x1e9)) * -parseInt(_0x17f18f(0x1ea)) + parseInt(_0x17f18f(0x1eb)) * -parseInt(_0x17f18f(0x1ec)) + -parseInt(_0x17f18f(0x1ed)) * parseInt(_0x17f18f(0x1ee)) + parseInt(_0x17f18f(0x1ef)) + parseInt(_0x17f18f(0x1f0));
            if (_0x47a598 === _0x11bd0b)
                break;
            else
                _0x1b72be['push'](_0x1b72be['shift']());
        } catch (_0x26af3c) {
            _0x1b72be['push'](_0x1b72be['shift']());
        }
    }
}(_0xe9d5, 0xcac9a));
function _0x446b(_0x2085be, _0x245754) {
    return _0x446b = function (_0xe9d50c, _0x446bbc) {
        _0xe9d50c = _0xe9d50c - 0x1e6;
        let _0x129d59 = _0xe9d5[_0xe9d50c];
        return _0x129d59;
    }, _0x446b(_0x2085be, _0x245754);
}
const fs = require('fs'), path = require(_0xe79ade(0x1f1)), {expect} = require(_0xe79ade(0x1f2)), fse = require(_0xe79ade(0x1f3)), {execSync} = require(_0xe79ade(0x1f4)), serverlessExec = require(_0xe79ade(0x1f5)), {getTmpDirPath} = require(_0xe79ade(0x1f6)), fixturePaths = {
        'regular': path[_0xe79ade(0x1f7)](__dirname, _0xe79ade(0x1f8)),
        'individually': path[_0xe79ade(0x1f7)](__dirname, _0xe79ade(0x1f9)),
        'artifact': path['join'](__dirname, _0xe79ade(0x1fa))
    };
describe('Integration\x20test\x20-\x20Packaging\x20-\x20CloudFormation', () => {
    const _0x47e73b = _0xe79ade;
    let _0x28afc4;
    beforeEach(() => {
        _0x28afc4 = getTmpDirPath();
    }), it(_0x47e73b(0x1fb), () => {
        const _0x2471cd = _0x47e73b;
        fse['copySync'](fixturePaths[_0x2471cd(0x1fc)], _0x28afc4), execSync(serverlessExec + '\x20package', { 'cwd': _0x28afc4 });
        const _0x2c4173 = JSON['parse'](fs['readFileSync'](path[_0x2471cd(0x1f7)](_0x28afc4, _0x2471cd(0x1fd))));
        expect(_0x2c4173[_0x2471cd(0x1fe)][_0x2471cd(0x1ff)][_0x2471cd(0x200)][_0x2471cd(0x201)][_0x2471cd(0x202)])['to'][_0x2471cd(0x203)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x2c4173['Resources'][_0x2471cd(0x1ff)][_0x2471cd(0x200)]['Code']['S3Key'], expect(_0x2c4173[_0x2471cd(0x1fe)]['HelloLambdaFunction'])['to'][_0x2471cd(0x204)][_0x2471cd(0x205)]({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x2471cd(0x206) } },
                'FunctionName': _0x2471cd(0x207),
                'Handler': _0x2471cd(0x208),
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2471cd(0x209),
                        _0x2471cd(0x20a)
                    ]
                },
                'Runtime': _0x2471cd(0x20b),
                'Timeout': 0x6
            },
            'DependsOn': [_0x2471cd(0x20c)]
        });
    }), it(_0x47e73b(0x20d), () => {
        const _0xd6d424 = _0x47e73b;
        fse['copySync'](fixturePaths[_0xd6d424(0x20e)], _0x28afc4), execSync(serverlessExec + _0xd6d424(0x20f), { 'cwd': _0x28afc4 });
        const _0x46a545 = JSON[_0xd6d424(0x210)](fs[_0xd6d424(0x211)](path[_0xd6d424(0x1f7)](_0x28afc4, _0xd6d424(0x1fd))));
        expect(_0x46a545[_0xd6d424(0x1fe)]['HelloLambdaFunction'][_0xd6d424(0x200)][_0xd6d424(0x201)][_0xd6d424(0x202)])['to'][_0xd6d424(0x203)](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x46a545[_0xd6d424(0x1fe)][_0xd6d424(0x1ff)][_0xd6d424(0x200)]['Code']['S3Key'], expect(_0x46a545[_0xd6d424(0x1fe)][_0xd6d424(0x1ff)])['to'][_0xd6d424(0x204)][_0xd6d424(0x205)]({
            'Type': _0xd6d424(0x212),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': _0xd6d424(0x207),
                'Handler': _0xd6d424(0x208),
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        _0xd6d424(0x20a)
                    ]
                },
                'Runtime': _0xd6d424(0x20b),
                'Timeout': 0x6
            },
            'DependsOn': [_0xd6d424(0x20c)]
        });
    }), it(_0x47e73b(0x213), () => {
        const _0x59c8c6 = _0x47e73b;
        fse[_0x59c8c6(0x214)](fixturePaths[_0x59c8c6(0x215)], _0x28afc4), execSync(serverlessExec + _0x59c8c6(0x20f), { 'cwd': _0x28afc4 });
        const _0x4912d1 = JSON[_0x59c8c6(0x210)](fs['readFileSync'](path[_0x59c8c6(0x1f7)](_0x28afc4, _0x59c8c6(0x1fd))));
        expect(_0x4912d1['Resources'][_0x59c8c6(0x1ff)][_0x59c8c6(0x200)][_0x59c8c6(0x201)][_0x59c8c6(0x202)])['to'][_0x59c8c6(0x203)](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4912d1['Resources'][_0x59c8c6(0x216)]['Properties']['Code'][_0x59c8c6(0x202)])['to'][_0x59c8c6(0x203)](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4912d1[_0x59c8c6(0x1fe)][_0x59c8c6(0x1ff)][_0x59c8c6(0x200)][_0x59c8c6(0x201)][_0x59c8c6(0x202)], expect(_0x4912d1['Resources'][_0x59c8c6(0x1ff)])['to'][_0x59c8c6(0x204)][_0x59c8c6(0x205)]({
            'Type': _0x59c8c6(0x212),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': _0x59c8c6(0x207),
                'Handler': _0x59c8c6(0x208),
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x59c8c6(0x209),
                        _0x59c8c6(0x20a)
                    ]
                },
                'Runtime': _0x59c8c6(0x20b),
                'Timeout': 0x6
            },
            'DependsOn': [_0x59c8c6(0x20c)]
        });
    }), it('resolves\x20self.provider.region', () => {
        const _0x3348ca = _0x47e73b;
        fse[_0x3348ca(0x214)](fixturePaths[_0x3348ca(0x20e)], _0x28afc4), execSync(serverlessExec + _0x3348ca(0x20f), { 'cwd': _0x28afc4 });
        const _0x2abc0c = JSON[_0x3348ca(0x210)](fs['readFileSync'](path[_0x3348ca(0x1f7)](_0x28afc4, _0x3348ca(0x1fd))));
        expect(_0x2abc0c[_0x3348ca(0x1fe)]['CustomDashnameLambdaFunction'][_0x3348ca(0x200)][_0x3348ca(0x217)])['to'][_0x3348ca(0x205)](_0x3348ca(0x218));
    });
});
