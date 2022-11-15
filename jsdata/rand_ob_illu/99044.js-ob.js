'use strict';

const _0x46b3 = ['953313WWFsYI', '2HuzEHk', '2lrAEEF', '817879mcqkOU', '85210UlhTby', '7gsjkov', '4285UDgtqZ', '314YZuYKm', '1379137BYNmLa', '1ixzVKZ', '71640AVrEVU', '1904692vBKXgM', 'path', 'chai', '../utils/childProcess', '../serverlessBinary', '../utils/fs', 'join', 'fixtures/regular', 'fixtures/individually', 'fixtures/artifact', 'Integration test - Packaging - CloudFormation', '.serverless/cloudformation-template-update-stack.json', 'handler.hello', 'Arn', 'aws-nodejs-dev-hello', 'nodejs12.x', 'HelloLogGroup', 'ServerlessDeploymentBucket', 'package artifact directive works', 'creates the correct default function resource in cfn template', 'resolves self.provider.region', 'CENni', 'kvFaD', 'tdACD', 'Ksusb', 'copySync', 'artifact', ' package', 'readFileSync', 'gTVuA', 'jTFyZ', 'Resources', 'HelloLambdaFunction', 'Properties', 'Code', 'S3Key', 'match', 'fCoTd', 'deep', 'fHmsg', 'jJxKk', 'vGdXX', 'KJYRz', 'FhUKk', 'regular', 'parse', 'equal', 'KpJew', 'mjfnp', 'CkXBB', 'jxAgi', 'ZDrhY', 'individually', 'Hello2LambdaFunction', 'YnZrl', 'eBkhL', 'CustomDashnameLambdaFunction', 'FunctionName', 'aws-nodejs-us-east-1-custom-name'];
const _0xb4aadd = _0x1bb6;

function _0x1bb6(_0x2f7192, _0x4ce7ed) {
    return _0x1bb6 = function (_0x55850f, _0x1422fc) {
        _0x55850f = _0x55850f - 322;
        const _0x5613f7 = _0x46b3[_0x55850f];

        return _0x5613f7;
    }, _0x1bb6(_0x2f7192, _0x4ce7ed);
}
(function (_0x2d61cc, _0x577369) {
    const _0x5e3224 = _0x1bb6;

    while (true) {
        try {
            const _0x27199d = -parseInt(_0x5e3224(0x142)) * parseInt(_0x5e3224(0x143)) + parseInt(_0x5e3224(0x144)) * parseInt(_0x5e3224(0x145)) + -parseInt(_0x5e3224(0x146)) * parseInt(_0x5e3224(0x147)) + -parseInt(_0x5e3224(0x148)) * parseInt(_0x5e3224(0x149)) + parseInt(_0x5e3224(0x14a)) * parseInt(_0x5e3224(0x14b)) + -parseInt(_0x5e3224(0x14c)) + parseInt(_0x5e3224(0x14d));

            if (_0x27199d === _0x577369) break;else _0x2d61cc.push(_0x2d61cc.shift());
        } catch (_0x33d13a) {
            _0x2d61cc.push(_0x2d61cc.shift());
        }
    }
})(_0x46b3, 999361);

const fs = require('fs');

const path = require(_0xb4aadd(0x14e));

var { expect } = require(_0xb4aadd(0x14f));

const fse = require('fs-extra');

var { execSync } = require(_0xb4aadd(0x150));

const serverlessExec = require(_0xb4aadd(0x151));

var { getTmpDirPath } = require(_0xb4aadd(0x152));

const fixturePaths = {
    'regular': path[_0xb4aadd(0x153)](__dirname, _0xb4aadd(0x154)),
    'individually': path[_0xb4aadd(0x153)](__dirname, _0xb4aadd(0x155)),
    'artifact': path[_0xb4aadd(0x153)](__dirname, _0xb4aadd(0x156))
};

describe(_0xb4aadd(0x157), () => {
    const _0x170c05 = _0xb4aadd;
    const _0x8bb0ab = {
        'kvFaD': function (_0x4190be) {
            return _0x4190be();
        },
        'tdACD': function (_0x3121c3, _0x102500, _0x4d77fd) {
            return _0x3121c3(_0x102500, _0x4d77fd);
        },
        'gTVuA': _0x170c05(0x158),
        'jTFyZ': function (_0x1d1c65, _0x201de0) {
            return _0x1d1c65(_0x201de0);
        },
        'fCoTd': function (_0x22d69e, _0x48daf4) {
            return _0x22d69e(_0x48daf4);
        },
        'fHmsg': 'AWS::Lambda::Function',
        'jJxKk': _0x170c05(0x159),
        'vGdXX': 'IamRoleLambdaExecution',
        'mjfnp': _0x170c05(0x15a),
        'CENni': function (_0x51f54e, _0x2eb769) {
            return _0x51f54e(_0x2eb769);
        },
        'KpJew': _0x170c05(0x15b),
        'CkXBB': _0x170c05(0x15c),
        'jxAgi': _0x170c05(0x15d),
        'YnZrl': _0x170c05(0x15e),
        'Ksusb': _0x170c05(0x15f),
        'KJYRz': function (_0xfef2e1, _0x17653a, _0x45abd2) {
            return _0xfef2e1(_0x17653a, _0x45abd2);
        },
        'FhUKk': _0x170c05(0x160),
        'ZDrhY': 'handles package individually with include/excludes correctly',
        'eBkhL': _0x170c05(0x161)
    };

    var _0x11f4b9;

    _0x8bb0ab[_0x170c05(0x162)](beforeEach, () => {
        const _0x1a922a = _0x170c05;

        _0x11f4b9 = _0x8bb0ab[_0x1a922a(0x163)](getTmpDirPath);
    }), _0x8bb0ab[_0x170c05(0x164)](it, _0x8bb0ab[_0x170c05(0x165)], () => {
        const _0xe33647 = _0x170c05;

        fse[_0xe33647(0x166)](fixturePaths[_0xe33647(0x167)], _0x11f4b9), _0x8bb0ab[_0xe33647(0x164)](execSync, serverlessExec + _0xe33647(0x168), { 'cwd': _0x11f4b9 });

        const _0x199879 = JSON.parse(fs[_0xe33647(0x169)](path.join(_0x11f4b9, _0x8bb0ab[_0xe33647(0x16a)])));

        _0x8bb0ab[_0xe33647(0x16b)](expect, _0x199879[_0xe33647(0x16c)][_0xe33647(0x16d)][_0xe33647(0x16e)][_0xe33647(0x16f)][_0xe33647(0x170)]).to[_0xe33647(0x171)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/), delete _0x199879.Resources[_0xe33647(0x16d)][_0xe33647(0x16e)][_0xe33647(0x16f)][_0xe33647(0x170)], _0x8bb0ab[_0xe33647(0x172)](expect, _0x199879.Resources.HelloLambdaFunction).to[_0xe33647(0x173)].equal({
            'Type': _0x8bb0ab[_0xe33647(0x174)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0xe33647(0x15e) } },
                'FunctionName': _0xe33647(0x15b),
                'Handler': _0x8bb0ab[_0xe33647(0x175)],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [_0x8bb0ab[_0xe33647(0x176)], _0x8bb0ab.mjfnp]
                },
                'Runtime': 'nodejs12.x',
                'Timeout': 0x6
            },
            'DependsOn': [_0xe33647(0x15d)]
        });
    }), _0x8bb0ab[_0x170c05(0x177)](it, _0x8bb0ab[_0x170c05(0x178)], () => {
        const _0x1b3067 = _0x170c05;

        fse[_0x1b3067(0x166)](fixturePaths[_0x1b3067(0x179)], _0x11f4b9), _0x8bb0ab.tdACD(execSync, serverlessExec + ' package', { 'cwd': _0x11f4b9 });

        const _0x2293af = JSON[_0x1b3067(0x17a)](fs[_0x1b3067(0x169)](path.join(_0x11f4b9, _0x8bb0ab[_0x1b3067(0x16a)])));

        _0x8bb0ab[_0x1b3067(0x162)](expect, _0x2293af[_0x1b3067(0x16c)][_0x1b3067(0x16d)].Properties[_0x1b3067(0x16f)].S3Key).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/), delete _0x2293af.Resources[_0x1b3067(0x16d)][_0x1b3067(0x16e)][_0x1b3067(0x16f)].S3Key, expect(_0x2293af[_0x1b3067(0x16c)][_0x1b3067(0x16d)]).to[_0x1b3067(0x173)][_0x1b3067(0x17b)]({
            'Type': _0x8bb0ab.fHmsg,
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x1b3067(0x15e) } },
                'FunctionName': _0x8bb0ab[_0x1b3067(0x17c)],
                'Handler': _0x8bb0ab[_0x1b3067(0x175)],
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': [_0x8bb0ab.vGdXX, _0x8bb0ab[_0x1b3067(0x17d)]]
                },
                'Runtime': _0x8bb0ab[_0x1b3067(0x17e)],
                'Timeout': 0x6
            },
            'DependsOn': [_0x8bb0ab[_0x1b3067(0x17f)]]
        });
    }), _0x8bb0ab.KJYRz(it, _0x8bb0ab[_0x170c05(0x180)], () => {
        const _0x494572 = _0x170c05;

        fse.copySync(fixturePaths[_0x494572(0x181)], _0x11f4b9), execSync(serverlessExec + _0x494572(0x168), { 'cwd': _0x11f4b9 });

        const _0x4aeaf7 = JSON[_0x494572(0x17a)](fs[_0x494572(0x169)](path[_0x494572(0x153)](_0x11f4b9, _0x8bb0ab[_0x494572(0x16a)])));

        _0x8bb0ab[_0x494572(0x162)](expect, _0x4aeaf7.Resources[_0x494572(0x16d)][_0x494572(0x16e)][_0x494572(0x16f)][_0x494572(0x170)]).to.match(/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/), expect(_0x4aeaf7[_0x494572(0x16c)][_0x494572(0x182)][_0x494572(0x16e)].Code[_0x494572(0x170)]).to[_0x494572(0x171)](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/), delete _0x4aeaf7[_0x494572(0x16c)][_0x494572(0x16d)][_0x494572(0x16e)].Code.S3Key, _0x8bb0ab[_0x494572(0x162)](expect, _0x4aeaf7[_0x494572(0x16c)][_0x494572(0x16d)]).to[_0x494572(0x173)][_0x494572(0x17b)]({
            'Type': _0x8bb0ab[_0x494572(0x174)],
            'Properties': {
                'Code': { 'S3Bucket': { 'Ref': _0x8bb0ab[_0x494572(0x183)] } },
                'FunctionName': _0x8bb0ab[_0x494572(0x17c)],
                'Handler': _0x8bb0ab.jJxKk,
                'MemorySize': 0x400,
                'Role': {
                    'Fn::GetAtt': ['IamRoleLambdaExecution', _0x8bb0ab.mjfnp]
                },
                'Runtime': _0x8bb0ab.CkXBB,
                'Timeout': 0x6
            },
            'DependsOn': [_0x8bb0ab[_0x494572(0x17f)]]
        });
    }), it(_0x8bb0ab[_0x170c05(0x184)], () => {
        const _0xe6ef4e = _0x170c05;

        fse[_0xe6ef4e(0x166)](fixturePaths[_0xe6ef4e(0x179)], _0x11f4b9), execSync(serverlessExec + _0xe6ef4e(0x168), { 'cwd': _0x11f4b9 });

        const _0x1eabd4 = JSON[_0xe6ef4e(0x17a)](fs[_0xe6ef4e(0x169)](path[_0xe6ef4e(0x153)](_0x11f4b9, _0x8bb0ab[_0xe6ef4e(0x16a)])));

        _0x8bb0ab[_0xe6ef4e(0x162)](expect, _0x1eabd4[_0xe6ef4e(0x16c)][_0xe6ef4e(0x185)][_0xe6ef4e(0x16e)][_0xe6ef4e(0x186)]).to[_0xe6ef4e(0x17b)](_0xe6ef4e(0x187));
    });
});
