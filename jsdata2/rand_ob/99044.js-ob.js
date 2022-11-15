'use strict';
const _0x50ed = [
    '1hNKysk',
    '1331080VMWcka',
    '1IcaGRs',
    '67040siiuxr',
    '2393595FgezEN',
    'path',
    'fs-extra',
    '../utils/fs',
    'join',
    'fixtures/individually',
    'fixtures/artifact',
    'Integration\x20test\x20-\x20Packaging\x20-\x20CloudFormation',
    '.serverless/cloudformation-template-update-stack.json',
    'AWS::Lambda::Function',
    'ServerlessDeploymentBucket',
    'aws-nodejs-dev-hello',
    'nodejs12.x',
    'IamRoleLambdaExecution',
    'aws-nodejs-us-east-1-custom-name',
    'package\x20artifact\x20directive\x20works',
    'tmeQx',
    'NLsne',
    'ncafQ',
    'YpwUu',
    '\x20package',
    'parse',
    'readFileSync',
    'uhCLw',
    'Resources',
    'HelloLambdaFunction',
    'Properties',
    'Code',
    'S3Key',
    'GIQlC',
    'deep',
    'equal',
    'exkZK',
    'PDneM',
    'Arn',
    'oFUDx',
    'IlzpZ',
    'creates\x20the\x20correct\x20default\x20function\x20resource\x20in\x20cfn\x20template',
    'regular',
    'kyvNO',
    'jYuBi',
    'copySync',
    'AeQik',
    'MNPym',
    'Hello2LambdaFunction',
    'ikwFn',
    'CMTue',
    'CustomDashnameLambdaFunction',
    'FunctionName',
    'bomzL',
    '755468iSGibF',
    '1272916nDfpws',
    '635728LTawsN',
    '1kSSdCs',
    '772498klOwfk'
];
const _0x17af96 = _0x4aa8;
(function (_0x540a62, _0x30e2f8) {
    const _0x4b1ca4 = _0x4aa8;
    while (!![]) {
        try {
            const _0x4f3568 = parseInt(_0x4b1ca4(0x6d)) + -parseInt(_0x4b1ca4(0x6e)) + -parseInt(_0x4b1ca4(0x6f)) * parseInt(_0x4b1ca4(0x70)) + -parseInt(_0x4b1ca4(0x71)) * -parseInt(_0x4b1ca4(0x72)) + -parseInt(_0x4b1ca4(0x73)) + parseInt(_0x4b1ca4(0x74)) * parseInt(_0x4b1ca4(0x75)) + parseInt(_0x4b1ca4(0x76));
            if (_0x4f3568 === _0x30e2f8)
                break;
            else
                _0x540a62['push'](_0x540a62['shift']());
        } catch (_0x3784a6) {
            _0x540a62['push'](_0x540a62['shift']());
        }
    }
}(_0x50ed, 0x81 * -0x23f6 + -0x5ade * -0xb + -0x19a4b9 * -0x1));
function _0x4aa8(_0x5495d5, _0x12424d) {
    return _0x4aa8 = function (_0x3de62b, _0x300d17) {
        _0x3de62b = _0x3de62b - (0x10e7 * -0x2 + 0xe58 + 0x13e3);
        let _0x319db8 = _0x50ed[_0x3de62b];
        return _0x319db8;
    }, _0x4aa8(_0x5495d5, _0x12424d);
}
const fs = require('fs'), path = require(_0x17af96(0x77)), {expect} = require('chai'), fse = require(_0x17af96(0x78)), {execSync} = require('../utils/childProcess'), serverlessExec = require('../serverlessBinary'), {getTmpDirPath} = require(_0x17af96(0x79)), fixturePaths = {
        'regular': path['join'](__dirname, 'fixtures/regular'),
        'individually': path[_0x17af96(0x7a)](__dirname, _0x17af96(0x7b)),
        'artifact': path['join'](__dirname, _0x17af96(0x7c))
    };
describe(_0x17af96(0x7d), () => {
    const _0x186647 = _0x17af96, _0x379788 = {
            'NLsne': function (_0x270c26) {
                return _0x270c26();
            },
            'YpwUu': function (_0xdb9dbd, _0x3296ea, _0x4c417c) {
                return _0xdb9dbd(_0x3296ea, _0x4c417c);
            },
            'uhCLw': _0x186647(0x7e),
            'GIQlC': function (_0x4bc91f, _0x5f40eb) {
                return _0x4bc91f(_0x5f40eb);
            },
            'ikwFn': _0x186647(0x7f),
            'exkZK': _0x186647(0x80),
            'kyvNO': _0x186647(0x81),
            'PDneM': 'handler.hello',
            'oFUDx': _0x186647(0x82),
            'IlzpZ': 'HelloLogGroup',
            'vnLbb': function (_0xc5d63c, _0x410896) {
                return _0xc5d63c(_0x410896);
            },
            'zrYxj': _0x186647(0x83),
            'AeQik': function (_0x24418d, _0x31c9cc, _0x536c3a) {
                return _0x24418d(_0x31c9cc, _0x536c3a);
            },
            'hPuQf': function (_0x4ea305, _0x3e8907) {
                return _0x4ea305(_0x3e8907);
            },
            'MNPym': function (_0x19fa33, _0x444c1e) {
                return _0x19fa33(_0x444c1e);
            },
            'CMTue': 'Arn',
            'gbKms': function (_0xe1986f, _0x312028, _0xea1222) {
                return _0xe1986f(_0x312028, _0xea1222);
            },
            'tmeQx': function (_0x578e98, _0x17737f) {
                return _0x578e98(_0x17737f);
            },
            'bomzL': _0x186647(0x84),
            'ncafQ': _0x186647(0x85),
            'jYuBi': function (_0x273b50, _0x42d824, _0x8a0f72) {
                return _0x273b50(_0x42d824, _0x8a0f72);
            }
        };
    let _0x9d8895;
    _0x379788[_0x186647(0x86)](beforeEach, () => {
        const _0x2b36c7 = _0x186647;
        _0x9d8895 = _0x379788[_0x2b36c7(0x87)](getTmpDirPath);
    }), it(_0x379788[_0x186647(0x88)], () => {
        const _0x166196 = _0x186647;
        fse['copySync'](fixturePaths['artifact'], _0x9d8895), _0x379788[_0x166196(0x89)](execSync, serverlessExec + _0x166196(0x8a), { 'cwd': _0x9d8895 });
        const _0x2bfa39 = JSON[_0x166196(0x8b)](fs[_0x166196(0x8c)](path['join'](_0x9d8895, _0x379788[_0x166196(0x8d)])));
        _0x379788['GIQlC'](expect, _0x2bfa39[_0x166196(0x8e)][_0x166196(0x8f)][_0x166196(0x90)][_0x166196(0x91)][_0x166196(0x92)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x2bfa39[_0x166196(0x8e)][_0x166196(0x8f)]['Properties'][_0x166196(0x91)][_0x166196(0x92)], _0x379788[_0x166196(0x93)](expect, _0x2bfa39['Resources'][_0x166196(0x8f)])['to'][_0x166196(0x94)][_0x166196(0x95)]({
            'Type': _0x379788['ikwFn'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x166196(0x96)] } },
                'FunctionName': _0x379788['kyvNO'],
                'Handler': _0x379788[_0x166196(0x97)],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        _0x166196(0x98)
                    ]
                },
                'Runtime': _0x379788[_0x166196(0x99)],
                'Timeout': 0x6
            },
            'DependsOn': [_0x379788[_0x166196(0x9a)]]
        });
    }), _0x379788['gbKms'](it, _0x186647(0x9b), () => {
        const _0x5a663c = _0x186647;
        fse['copySync'](fixturePaths[_0x5a663c(0x9c)], _0x9d8895), _0x379788[_0x5a663c(0x89)](execSync, serverlessExec + '\x20package', { 'cwd': _0x9d8895 });
        const _0x136fc2 = JSON[_0x5a663c(0x8b)](fs[_0x5a663c(0x8c)](path[_0x5a663c(0x7a)](_0x9d8895, _0x5a663c(0x7e))));
        _0x379788['GIQlC'](expect, _0x136fc2[_0x5a663c(0x8e)][_0x5a663c(0x8f)][_0x5a663c(0x90)]['Code'][_0x5a663c(0x92)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x136fc2[_0x5a663c(0x8e)][_0x5a663c(0x8f)][_0x5a663c(0x90)][_0x5a663c(0x91)][_0x5a663c(0x92)], _0x379788['vnLbb'](expect, _0x136fc2[_0x5a663c(0x8e)]['HelloLambdaFunction'])['to'][_0x5a663c(0x94)]['equal']({
            'Type': _0x5a663c(0x7f),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x5a663c(0x96)] } },
                'FunctionName': _0x379788[_0x5a663c(0x9d)],
                'Handler': _0x379788[_0x5a663c(0x97)],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x379788['zrYxj'],
                        'Arn'
                    ]
                },
                'Runtime': _0x5a663c(0x82),
                'Timeout': 0x6
            },
            'DependsOn': [_0x379788[_0x5a663c(0x9a)]]
        });
    }), _0x379788[_0x186647(0x9e)](it, 'handles\x20package\x20individually\x20with\x20include/excludes\x20correctly', () => {
        const _0x2243dd = _0x186647;
        fse[_0x2243dd(0x9f)](fixturePaths['individually'], _0x9d8895), _0x379788[_0x2243dd(0xa0)](execSync, serverlessExec + '\x20package', { 'cwd': _0x9d8895 });
        const _0x3821c8 = JSON[_0x2243dd(0x8b)](fs[_0x2243dd(0x8c)](path[_0x2243dd(0x7a)](_0x9d8895, _0x379788['uhCLw'])));
        _0x379788['hPuQf'](expect, _0x3821c8[_0x2243dd(0x8e)]['HelloLambdaFunction'][_0x2243dd(0x90)][_0x2243dd(0x91)]['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), _0x379788[_0x2243dd(0xa1)](expect, _0x3821c8[_0x2243dd(0x8e)][_0x2243dd(0xa2)][_0x2243dd(0x90)]['Code'][_0x2243dd(0x92)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x3821c8[_0x2243dd(0x8e)][_0x2243dd(0x8f)][_0x2243dd(0x90)][_0x2243dd(0x91)][_0x2243dd(0x92)], _0x379788[_0x2243dd(0xa1)](expect, _0x3821c8[_0x2243dd(0x8e)][_0x2243dd(0x8f)])['to'][_0x2243dd(0x94)][_0x2243dd(0x95)]({
            'Type': _0x379788[_0x2243dd(0xa3)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x2243dd(0x96)] } },
                'FunctionName': _0x379788[_0x2243dd(0x9d)],
                'Handler': _0x379788[_0x2243dd(0x97)],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2243dd(0x83),
                        _0x379788[_0x2243dd(0xa4)]
                    ]
                },
                'Runtime': _0x2243dd(0x82),
                'Timeout': 0x6
            },
            'DependsOn': [_0x379788['IlzpZ']]
        });
    }), it('resolves\x20self.provider.region', () => {
        const _0x2a34a6 = _0x186647;
        fse['copySync'](fixturePaths[_0x2a34a6(0x9c)], _0x9d8895), _0x379788['gbKms'](execSync, serverlessExec + _0x2a34a6(0x8a), { 'cwd': _0x9d8895 });
        const _0x4a6615 = JSON['parse'](fs[_0x2a34a6(0x8c)](path[_0x2a34a6(0x7a)](_0x9d8895, _0x379788[_0x2a34a6(0x8d)])));
        _0x379788['tmeQx'](expect, _0x4a6615[_0x2a34a6(0x8e)][_0x2a34a6(0xa5)][_0x2a34a6(0x90)][_0x2a34a6(0xa6)])['to'][_0x2a34a6(0x95)](_0x379788[_0x2a34a6(0xa7)]);
    });
});
