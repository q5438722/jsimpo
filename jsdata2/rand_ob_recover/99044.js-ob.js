function _0x4aa8(_0x5495d5, _0x12424d) {
    return _0x4aa8 = function (_0x3de62b, _0x300d17) {
        _0x3de62b = _0x3de62b - (4327 * -2 + 3672 + 5091);
        let _0x319db8 = _0x50ed[_0x3de62b];
        return _0x319db8;
    }, _0x4aa8(_0x5495d5, _0x12424d);
}
const fs = require('fs'), path = require(_0x17af96(119)), {expect} = require('chai'), fse = require(_0x17af96(120)), {execSync} = require('../utils/childProcess'), serverlessExec = require('../serverlessBinary'), {getTmpDirPath} = require(_0x17af96(121)), fixturePaths = {
        'regular': path['join'](__dirname, 'fixtures/regular'),
        'individually': path[_0x17af96(122)](__dirname, _0x17af96(123)),
        'artifact': path['join'](__dirname, _0x17af96(124))
    };
describe(_0x17af96(125), () => {
    const _0x186647 = _0x17af96, _0x379788 = {
            'NLsne': function (_0x270c26) {
                return _0x270c26();
            },
            'YpwUu': function (_0xdb9dbd, _0x3296ea, _0x4c417c) {
                return _0xdb9dbd(_0x3296ea, _0x4c417c);
            },
            'uhCLw': _0x186647(126),
            'GIQlC': function (_0x4bc91f, _0x5f40eb) {
                return _0x4bc91f(_0x5f40eb);
            },
            'ikwFn': _0x186647(127),
            'exkZK': _0x186647(128),
            'kyvNO': _0x186647(129),
            'PDneM': 'handler.hello',
            'oFUDx': _0x186647(130),
            'IlzpZ': 'HelloLogGroup',
            'vnLbb': function (_0xc5d63c, _0x410896) {
                return _0xc5d63c(_0x410896);
            },
            'zrYxj': _0x186647(131),
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
            'bomzL': _0x186647(132),
            'ncafQ': _0x186647(133),
            'jYuBi': function (_0x273b50, _0x42d824, _0x8a0f72) {
                return _0x273b50(_0x42d824, _0x8a0f72);
            }
        };
    let _0x9d8895;
    _0x379788[_0x186647(134)](beforeEach, () => {
        const _0x2b36c7 = _0x186647;
        _0x9d8895 = _0x379788[_0x2b36c7(135)](getTmpDirPath);
    }), it(_0x379788[_0x186647(136)], () => {
        const _0x166196 = _0x186647;
        fse['copySync'](fixturePaths['artifact'], _0x9d8895), _0x379788[_0x166196(137)](execSync, serverlessExec + _0x166196(138), { 'cwd': _0x9d8895 });
        const _0x2bfa39 = JSON[_0x166196(139)](fs[_0x166196(140)](path['join'](_0x9d8895, _0x379788[_0x166196(141)])));
        _0x379788['GIQlC'](expect, _0x2bfa39[_0x166196(142)][_0x166196(143)][_0x166196(144)][_0x166196(145)][_0x166196(146)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x2bfa39[_0x166196(142)][_0x166196(143)]['Properties'][_0x166196(145)][_0x166196(146)], _0x379788[_0x166196(147)](expect, _0x2bfa39['Resources'][_0x166196(143)])['to'][_0x166196(148)][_0x166196(149)]({
            'Type': _0x379788['ikwFn'],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x166196(150)] } },
                'FunctionName': _0x379788['kyvNO'],
                'Handler': _0x379788[_0x166196(151)],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        'IamRoleLambdaExecution',
                        _0x166196(152)
                    ]
                },
                'Runtime': _0x379788[_0x166196(153)],
                'Timeout': 6
            },
            'DependsOn': [_0x379788[_0x166196(154)]]
        });
    }), _0x379788['gbKms'](it, _0x186647(155), () => {
        const _0x5a663c = _0x186647;
        fse['copySync'](fixturePaths[_0x5a663c(156)], _0x9d8895), _0x379788[_0x5a663c(137)](execSync, serverlessExec + ' package', { 'cwd': _0x9d8895 });
        const _0x136fc2 = JSON[_0x5a663c(139)](fs[_0x5a663c(140)](path[_0x5a663c(122)](_0x9d8895, _0x5a663c(126))));
        _0x379788['GIQlC'](expect, _0x136fc2[_0x5a663c(142)][_0x5a663c(143)][_0x5a663c(144)]['Code'][_0x5a663c(146)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x136fc2[_0x5a663c(142)][_0x5a663c(143)][_0x5a663c(144)][_0x5a663c(145)][_0x5a663c(146)], _0x379788['vnLbb'](expect, _0x136fc2[_0x5a663c(142)]['HelloLambdaFunction'])['to'][_0x5a663c(148)]['equal']({
            'Type': _0x5a663c(127),
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x5a663c(150)] } },
                'FunctionName': _0x379788[_0x5a663c(157)],
                'Handler': _0x379788[_0x5a663c(151)],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x379788['zrYxj'],
                        'Arn'
                    ]
                },
                'Runtime': _0x5a663c(130),
                'Timeout': 6
            },
            'DependsOn': [_0x379788[_0x5a663c(154)]]
        });
    }), _0x379788[_0x186647(158)](it, 'handles package individually with include/excludes correctly', () => {
        const _0x2243dd = _0x186647;
        fse[_0x2243dd(159)](fixturePaths['individually'], _0x9d8895), _0x379788[_0x2243dd(160)](execSync, serverlessExec + ' package', { 'cwd': _0x9d8895 });
        const _0x3821c8 = JSON[_0x2243dd(139)](fs[_0x2243dd(140)](path[_0x2243dd(122)](_0x9d8895, _0x379788['uhCLw'])));
        _0x379788['hPuQf'](expect, _0x3821c8[_0x2243dd(142)]['HelloLambdaFunction'][_0x2243dd(144)][_0x2243dd(145)]['S3Key'])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), _0x379788[_0x2243dd(161)](expect, _0x3821c8[_0x2243dd(142)][_0x2243dd(162)][_0x2243dd(144)]['Code'][_0x2243dd(146)])['to']['match'](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x3821c8[_0x2243dd(142)][_0x2243dd(143)][_0x2243dd(144)][_0x2243dd(145)][_0x2243dd(146)], _0x379788[_0x2243dd(161)](expect, _0x3821c8[_0x2243dd(142)][_0x2243dd(143)])['to'][_0x2243dd(148)][_0x2243dd(149)]({
            'Type': _0x379788[_0x2243dd(163)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x379788[_0x2243dd(150)] } },
                'FunctionName': _0x379788[_0x2243dd(157)],
                'Handler': _0x379788[_0x2243dd(151)],
                'MemorySize': 1024,
                'Role': {
                    'Fn::GetAtt': [
                        _0x2243dd(131),
                        _0x379788[_0x2243dd(164)]
                    ]
                },
                'Runtime': _0x2243dd(130),
                'Timeout': 6
            },
            'DependsOn': [_0x379788['IlzpZ']]
        });
    }), it('resolves self.provider.region', () => {
        const _0x2a34a6 = _0x186647;
        fse['copySync'](fixturePaths[_0x2a34a6(156)], _0x9d8895), _0x379788['gbKms'](execSync, serverlessExec + _0x2a34a6(138), { 'cwd': _0x9d8895 });
        const _0x4a6615 = JSON['parse'](fs[_0x2a34a6(140)](path[_0x2a34a6(122)](_0x9d8895, _0x379788[_0x2a34a6(141)])));
        _0x379788['tmeQx'](expect, _0x4a6615[_0x2a34a6(142)][_0x2a34a6(165)][_0x2a34a6(144)][_0x2a34a6(166)])['to'][_0x2a34a6(149)](_0x379788[_0x2a34a6(167)]);
    });
});