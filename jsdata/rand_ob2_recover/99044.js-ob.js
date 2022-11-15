function _0x446b(_0x2085be, _0x245754) {
    return _0x446b = function (_0xe9d50c, _0x446bbc) {
        _0xe9d50c = _0xe9d50c - 486;
        let _0x129d59 = _0xe9d5[_0xe9d50c];
        return _0x129d59;
    }, _0x446b(_0x2085be, _0x245754);
}
const fs = require('fs'), path = require(_0xe79ade(497)), {expect} = require(_0xe79ade(498)), fse = require(_0xe79ade(499)), {execSync} = require(_0xe79ade(500)), serverlessExec = require(_0xe79ade(501)), {getTmpDirPath} = require(_0xe79ade(502)), fixturePaths = {
        'regular': path[_0xe79ade(503)](__dirname, _0xe79ade(504)),
        'individually': path[_0xe79ade(503)](__dirname, _0xe79ade(505)),
        'artifact': path['join'](__dirname, _0xe79ade(506))
    };
describe('Integration test - Packaging - CloudFormation', () => {
    const _0x47e73b = _0xe79ade;
    let _0x28afc4;
    beforeEach(() => {
        _0x28afc4 = getTmpDirPath();
    }), it(_0x47e73b(507), () => {
        const _0x2471cd = _0x47e73b;
        fse['copySync'](fixturePaths[_0x2471cd(508)], _0x28afc4), execSync(serverlessExec + ' package', { 'cwd': _0x28afc4 });
        const _0x2c4173 = JSON['parse'](fs['readFileSync'](path[_0x2471cd(503)](_0x28afc4, _0x2471cd(509))));
        expect(_0x2c4173[_0x2471cd(510)][_0x2471cd(511)][_0x2471cd(512)][_0x2471cd(513)][_0x2471cd(514)])['to'][_0x2471cd(515)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x2c4173['Resources'][_0x2471cd(511)][_0x2471cd(512)]['Code']['S3Key'], expect(_0x2c4173[_0x2471cd(510)]['HelloLambdaFunction'])['to'][_0x2471cd(516)][_0x2471cd(517)]({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x2471cd(518) } },
                'FunctionName': _0x2471cd(519),
                'Handler': _0x2471cd(520),
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2471cd(521),
                        _0x2471cd(522)
                    ]
                },
                'Runtime': _0x2471cd(523),
                'Timeout': 6
            },
            'DependsOn': [_0x2471cd(524)]
        });
    }), it(_0x47e73b(525), () => {
        const _0xd6d424 = _0x47e73b;
        fse['copySync'](fixturePaths[_0xd6d424(526)], _0x28afc4), execSync(serverlessExec + _0xd6d424(527), { 'cwd': _0x28afc4 });
        const _0x46a545 = JSON[_0xd6d424(528)](fs[_0xd6d424(529)](path[_0xd6d424(503)](_0x28afc4, _0xd6d424(509))));
        expect(_0x46a545[_0xd6d424(510)]['HelloLambdaFunction'][_0xd6d424(512)][_0xd6d424(513)][_0xd6d424(514)])['to'][_0xd6d424(515)](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x46a545[_0xd6d424(510)][_0xd6d424(511)][_0xd6d424(512)]['Code']['S3Key'], expect(_0x46a545[_0xd6d424(510)][_0xd6d424(511)])['to'][_0xd6d424(516)][_0xd6d424(517)]({
            'Type': _0xd6d424(530),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': _0xd6d424(519),
                'Handler': _0xd6d424(520),
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        _0xd6d424(522)
                    ]
                },
                'Runtime': _0xd6d424(523),
                'Timeout': 6
            },
            'DependsOn': [_0xd6d424(524)]
        });
    }), it(_0x47e73b(531), () => {
        const _0x59c8c6 = _0x47e73b;
        fse[_0x59c8c6(532)](fixturePaths[_0x59c8c6(533)], _0x28afc4), execSync(serverlessExec + _0x59c8c6(527), { 'cwd': _0x28afc4 });
        const _0x4912d1 = JSON[_0x59c8c6(528)](fs['readFileSync'](path[_0x59c8c6(503)](_0x28afc4, _0x59c8c6(509))));
        expect(_0x4912d1['Resources'][_0x59c8c6(511)][_0x59c8c6(512)][_0x59c8c6(513)][_0x59c8c6(514)])['to'][_0x59c8c6(515)](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4912d1['Resources'][_0x59c8c6(534)]['Properties']['Code'][_0x59c8c6(514)])['to'][_0x59c8c6(515)](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4912d1[_0x59c8c6(510)][_0x59c8c6(511)][_0x59c8c6(512)][_0x59c8c6(513)][_0x59c8c6(514)], expect(_0x4912d1['Resources'][_0x59c8c6(511)])['to'][_0x59c8c6(516)][_0x59c8c6(517)]({
            'Type': _0x59c8c6(530),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': _0x59c8c6(519),
                'Handler': _0x59c8c6(520),
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x59c8c6(521),
                        _0x59c8c6(522)
                    ]
                },
                'Runtime': _0x59c8c6(523),
                'Timeout': 6
            },
            'DependsOn': [_0x59c8c6(524)]
        });
    }), it('resolves self.provider.region', () => {
        const _0x3348ca = _0x47e73b;
        fse[_0x3348ca(532)](fixturePaths[_0x3348ca(526)], _0x28afc4), execSync(serverlessExec + _0x3348ca(527), { 'cwd': _0x28afc4 });
        const _0x2abc0c = JSON[_0x3348ca(528)](fs['readFileSync'](path[_0x3348ca(503)](_0x28afc4, _0x3348ca(509))));
        expect(_0x2abc0c[_0x3348ca(510)]['CustomDashnameLambdaFunction'][_0x3348ca(512)][_0x3348ca(535)])['to'][_0x3348ca(517)](_0x3348ca(536));
    });
});