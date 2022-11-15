const fs = require('fs'), path = require('path'), {expect} = require(_0x279811(259)), fse = require(_0x279811(260)), {execSync} = require(_0x279811(261)), serverlessExec = require(_0x279811(262)), {getTmpDirPath} = require(_0x279811(263)), fixturePaths = {
        'regular': path[_0x279811(264)](__dirname, _0x279811(265)),
        'individually': path['join'](__dirname, _0x279811(266)),
        'artifact': path[_0x279811(264)](__dirname, _0x279811(267))
    };
describe(_0x279811(268), () => {
    const _0x29ce71 = _0x279811;
    let _0x3adbef;
    beforeEach(() => {
        _0x3adbef = getTmpDirPath();
    }), it(_0x29ce71(269), () => {
        const _0x3fe4db = _0x29ce71;
        fse[_0x3fe4db(270)](fixturePaths[_0x3fe4db(271)], _0x3adbef), execSync(serverlessExec + ' package', { 'cwd': _0x3adbef });
        const _0xa0f6d2 = JSON['parse'](fs[_0x3fe4db(272)](path['join'](_0x3adbef, '.serverless/cloudformation-template-update-stack.json')));
        expect(_0xa0f6d2[_0x3fe4db(273)]['HelloLambdaFunction']['Properties'][_0x3fe4db(274)][_0x3fe4db(275)])['to'][_0x3fe4db(276)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0xa0f6d2['Resources'][_0x3fe4db(277)][_0x3fe4db(278)]['Code'][_0x3fe4db(275)], expect(_0xa0f6d2[_0x3fe4db(273)][_0x3fe4db(277)])['to'][_0x3fe4db(279)]['equal']({
            'Type': _0x3fe4db(280),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x3fe4db(281) } },
                'FunctionName': _0x3fe4db(282),
                'Handler': 'handler.hello',
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x3fe4db(283),
                        _0x3fe4db(284)
                    ]
                },
                'Runtime': _0x3fe4db(285),
                'Timeout': 6
            },
            'DependsOn': [_0x3fe4db(286)]
        });
    }), it(_0x29ce71(287), () => {
        const _0x5bf60f = _0x29ce71;
        fse[_0x5bf60f(270)](fixturePaths[_0x5bf60f(288)], _0x3adbef), execSync(serverlessExec + _0x5bf60f(289), { 'cwd': _0x3adbef });
        const _0x23febe = JSON[_0x5bf60f(290)](fs['readFileSync'](path[_0x5bf60f(264)](_0x3adbef, _0x5bf60f(291))));
        expect(_0x23febe[_0x5bf60f(273)][_0x5bf60f(277)][_0x5bf60f(278)]['Code'][_0x5bf60f(275)])['to'][_0x5bf60f(276)](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x23febe[_0x5bf60f(273)][_0x5bf60f(277)]['Properties']['Code'][_0x5bf60f(275)], expect(_0x23febe[_0x5bf60f(273)][_0x5bf60f(277)])['to']['deep'][_0x5bf60f(292)]({
            'Type': 'AWS::Lambda::Function',
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x5bf60f(281) } },
                'FunctionName': _0x5bf60f(282),
                'Handler': _0x5bf60f(293),
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x5bf60f(283),
                        _0x5bf60f(284)
                    ]
                },
                'Runtime': _0x5bf60f(285),
                'Timeout': 6
            },
            'DependsOn': [_0x5bf60f(286)]
        });
    }), it(_0x29ce71(294), () => {
        const _0x5cc39b = _0x29ce71;
        fse[_0x5cc39b(270)](fixturePaths[_0x5cc39b(295)], _0x3adbef), execSync(serverlessExec + ' package', { 'cwd': _0x3adbef });
        const _0x4feb01 = JSON[_0x5cc39b(290)](fs[_0x5cc39b(272)](path[_0x5cc39b(264)](_0x3adbef, _0x5cc39b(291))));
        expect(_0x4feb01[_0x5cc39b(273)][_0x5cc39b(277)]['Properties'][_0x5cc39b(274)][_0x5cc39b(275)])['to'][_0x5cc39b(276)](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4feb01[_0x5cc39b(273)]['Hello2LambdaFunction'][_0x5cc39b(278)][_0x5cc39b(274)][_0x5cc39b(275)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4feb01['Resources'][_0x5cc39b(277)][_0x5cc39b(278)][_0x5cc39b(274)][_0x5cc39b(275)], expect(_0x4feb01[_0x5cc39b(273)][_0x5cc39b(277)])['to'][_0x5cc39b(279)][_0x5cc39b(292)]({
            'Type': _0x5cc39b(280),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': 'ServerlessDeploymentBucket' } },
                'FunctionName': 'aws-nodejs-dev-hello',
                'Handler': _0x5cc39b(293),
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x5cc39b(283),
                        _0x5cc39b(284)
                    ]
                },
                'Runtime': _0x5cc39b(285),
                'Timeout': 6
            },
            'DependsOn': ['HelloLogGroup']
        });
    }), it(_0x29ce71(296), () => {
        const _0x7438b1 = _0x29ce71;
        fse[_0x7438b1(270)](fixturePaths[_0x7438b1(288)], _0x3adbef), execSync(serverlessExec + _0x7438b1(289), { 'cwd': _0x3adbef });
        const _0x37cb66 = JSON[_0x7438b1(290)](fs[_0x7438b1(272)](path[_0x7438b1(264)](_0x3adbef, _0x7438b1(291))));
        expect(_0x37cb66[_0x7438b1(273)][_0x7438b1(297)][_0x7438b1(278)]['FunctionName'])['to'][_0x7438b1(292)]('aws-nodejs-us-east-1-custom-name');
    });
});