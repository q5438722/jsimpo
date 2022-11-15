const fs = require('fs'), path = require(_0xb4aadd(334)), {expect} = require(_0xb4aadd(335)), fse = require('fs-extra'), {execSync} = require(_0xb4aadd(336)), serverlessExec = require(_0xb4aadd(337)), {getTmpDirPath} = require(_0xb4aadd(338)), fixturePaths = {
        'regular': path[_0xb4aadd(339)](__dirname, _0xb4aadd(340)),
        'individually': path[_0xb4aadd(339)](__dirname, _0xb4aadd(341)),
        'artifact': path[_0xb4aadd(339)](__dirname, _0xb4aadd(342))
    };
describe(_0xb4aadd(343), () => {
    const _0x170c05 = _0xb4aadd, _0x8bb0ab = {
            'kvFaD': function (_0x4190be) {
                return _0x4190be();
            },
            'tdACD': function (_0x3121c3, _0x102500, _0x4d77fd) {
                return _0x3121c3(_0x102500, _0x4d77fd);
            },
            'gTVuA': _0x170c05(344),
            'jTFyZ': function (_0x1d1c65, _0x201de0) {
                return _0x1d1c65(_0x201de0);
            },
            'fCoTd': function (_0x22d69e, _0x48daf4) {
                return _0x22d69e(_0x48daf4);
            },
            'fHmsg': 'AWS::Lambda::Function',
            'jJxKk': _0x170c05(345),
            'vGdXX': 'IamRoleLambdaExecution',
            'mjfnp': _0x170c05(346),
            'CENni': function (_0x51f54e, _0x2eb769) {
                return _0x51f54e(_0x2eb769);
            },
            'KpJew': _0x170c05(347),
            'CkXBB': _0x170c05(348),
            'jxAgi': _0x170c05(349),
            'YnZrl': _0x170c05(350),
            'Ksusb': _0x170c05(351),
            'KJYRz': function (_0xfef2e1, _0x17653a, _0x45abd2) {
                return _0xfef2e1(_0x17653a, _0x45abd2);
            },
            'FhUKk': _0x170c05(352),
            'ZDrhY': 'handles package individually with include/excludes correctly',
            'eBkhL': _0x170c05(353)
        };
    let _0x11f4b9;
    _0x8bb0ab[_0x170c05(354)](beforeEach, () => {
        const _0x1a922a = _0x170c05;
        _0x11f4b9 = _0x8bb0ab[_0x1a922a(355)](getTmpDirPath);
    }), _0x8bb0ab[_0x170c05(356)](it, _0x8bb0ab[_0x170c05(357)], () => {
        const _0xe33647 = _0x170c05;
        fse[_0xe33647(358)](fixturePaths[_0xe33647(359)], _0x11f4b9), _0x8bb0ab[_0xe33647(356)](execSync, serverlessExec + _0xe33647(360), { 'cwd': _0x11f4b9 });
        const _0x199879 = JSON['parse'](fs[_0xe33647(361)](path['join'](_0x11f4b9, _0x8bb0ab[_0xe33647(362)])));
        _0x8bb0ab[_0xe33647(363)](expect, _0x199879[_0xe33647(364)][_0xe33647(365)][_0xe33647(366)][_0xe33647(367)][_0xe33647(368)])['to'][_0xe33647(369)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x199879['Resources'][_0xe33647(365)][_0xe33647(366)][_0xe33647(367)][_0xe33647(368)], _0x8bb0ab[_0xe33647(370)](expect, _0x199879['Resources']['HelloLambdaFunction'])['to'][_0xe33647(371)]['equal']({
            'Type': _0x8bb0ab[_0xe33647(372)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0xe33647(350) } },
                'FunctionName': _0xe33647(347),
                'Handler': _0x8bb0ab[_0xe33647(373)],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x8bb0ab[_0xe33647(374)],
                        _0x8bb0ab['mjfnp']
                    ]
                },
                'Runtime': 'nodejs12.x',
                'Timeout': 6
            },
            'DependsOn': [_0xe33647(349)]
        });
    }), _0x8bb0ab[_0x170c05(375)](it, _0x8bb0ab[_0x170c05(376)], () => {
        const _0x1b3067 = _0x170c05;
        fse[_0x1b3067(358)](fixturePaths[_0x1b3067(377)], _0x11f4b9), _0x8bb0ab['tdACD'](execSync, serverlessExec + ' package', { 'cwd': _0x11f4b9 });
        const _0x2293af = JSON[_0x1b3067(378)](fs[_0x1b3067(361)](path['join'](_0x11f4b9, _0x8bb0ab[_0x1b3067(362)])));
        _0x8bb0ab[_0x1b3067(354)](expect, _0x2293af[_0x1b3067(364)][_0x1b3067(365)]['Properties'][_0x1b3067(367)]['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x2293af['Resources'][_0x1b3067(365)][_0x1b3067(366)][_0x1b3067(367)]['S3Key'], expect(_0x2293af[_0x1b3067(364)][_0x1b3067(365)])['to'][_0x1b3067(371)][_0x1b3067(379)]({
            'Type': _0x8bb0ab['fHmsg'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x1b3067(350) } },
                'FunctionName': _0x8bb0ab[_0x1b3067(380)],
                'Handler': _0x8bb0ab[_0x1b3067(373)],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x8bb0ab['vGdXX'],
                        _0x8bb0ab[_0x1b3067(381)]
                    ]
                },
                'Runtime': _0x8bb0ab[_0x1b3067(382)],
                'Timeout': 6
            },
            'DependsOn': [_0x8bb0ab[_0x1b3067(383)]]
        });
    }), _0x8bb0ab['KJYRz'](it, _0x8bb0ab[_0x170c05(384)], () => {
        const _0x494572 = _0x170c05;
        fse['copySync'](fixturePaths[_0x494572(385)], _0x11f4b9), execSync(serverlessExec + _0x494572(360), { 'cwd': _0x11f4b9 });
        const _0x4aeaf7 = JSON[_0x494572(378)](fs[_0x494572(361)](path[_0x494572(339)](_0x11f4b9, _0x8bb0ab[_0x494572(362)])));
        _0x8bb0ab[_0x494572(354)](expect, _0x4aeaf7['Resources'][_0x494572(365)][_0x494572(366)][_0x494572(367)][_0x494572(368)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4aeaf7[_0x494572(364)][_0x494572(386)][_0x494572(366)]['Code'][_0x494572(368)])['to'][_0x494572(369)](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4aeaf7[_0x494572(364)][_0x494572(365)][_0x494572(366)]['Code']['S3Key'], _0x8bb0ab[_0x494572(354)](expect, _0x4aeaf7[_0x494572(364)][_0x494572(365)])['to'][_0x494572(371)][_0x494572(379)]({
            'Type': _0x8bb0ab[_0x494572(372)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x8bb0ab[_0x494572(387)] } },
                'FunctionName': _0x8bb0ab[_0x494572(380)],
                'Handler': _0x8bb0ab['jJxKk'],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        _0x8bb0ab['mjfnp']
                    ]
                },
                'Runtime': _0x8bb0ab['CkXBB'],
                'Timeout': 6
            },
            'DependsOn': [_0x8bb0ab[_0x494572(383)]]
        });
    }), it(_0x8bb0ab[_0x170c05(388)], () => {
        const _0xe6ef4e = _0x170c05;
        fse[_0xe6ef4e(358)](fixturePaths[_0xe6ef4e(377)], _0x11f4b9), execSync(serverlessExec + _0xe6ef4e(360), { 'cwd': _0x11f4b9 });
        const _0x1eabd4 = JSON[_0xe6ef4e(378)](fs[_0xe6ef4e(361)](path[_0xe6ef4e(339)](_0x11f4b9, _0x8bb0ab[_0xe6ef4e(362)])));
        _0x8bb0ab[_0xe6ef4e(354)](expect, _0x1eabd4[_0xe6ef4e(364)][_0xe6ef4e(389)][_0xe6ef4e(366)][_0xe6ef4e(390)])['to'][_0xe6ef4e(379)](_0xe6ef4e(391));
    });
});