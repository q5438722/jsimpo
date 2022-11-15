'use strict';

const _0x8b29 = ['AWS - Stream Integration Test', 'stream', 'Deleting Kinesis stream', 'streamKinesis', 'should invoke on kinesis messages from the trim horizon', 'INSERT', 'dev', 'Kinesis Streams', 'DynamoDB Streams', 'timeout', 'aSnPP', 'jbuBH', 'setup', 'OhmuJ', 'serviceConfig', '-table', 'Creating Kinesis stream "', 'siRxf', 'then', 'notice', 'ncnQn', 'ByoKi', 'wDbgl', 'klTih', 'FYjfl', 'stHWy', '/aws/lambda/', 'reduce', 'message', 'zFMqV', 'include', 'dMwrh', 'ymEsr', 'Fdfgt', 'Fbxkc', 'should invoke on dynamodb messages from the latest position', 'streamDynamoDb', 'ydMeU', 'hello', 'from dynamo!', 'random', 'toString', 'EgjfM', 'includes', 'rhQsi', 'kUcDM', '108387lcDMST', '2GOlXHJ', '644646AOTtom', '709806IEhOPW', '54473bDUtVW', '502VFwRWz', '691079WBXUqp', '1863664jTDEbS', 'log', 'get', 'serverless:test', '../../utils/kinesis', '../../utils/dynamodb', '../../utils/misc', '../../utils/integration'];
const _0x115366 = _0xe0ad;

(function (_0x152def, _0x17d4ea) {
    const _0x4ea74c = _0xe0ad;

    while (true) {
        try {
            const _0x1bdaf9 = parseInt(_0x4ea74c(0x19b)) + -parseInt(_0x4ea74c(0x19c)) * parseInt(_0x4ea74c(0x19d)) + parseInt(_0x4ea74c(0x19e)) + parseInt(_0x4ea74c(0x19f)) + parseInt(_0x4ea74c(0x1a0)) + -parseInt(_0x4ea74c(0x1a1)) + parseInt(_0x4ea74c(0x1a2));

            if (_0x1bdaf9 === _0x17d4ea) break;else _0x152def.push(_0x152def.shift());
        } catch (_0x1f1052) {
            _0x152def.push(_0x152def.shift());
        }
    }
})(_0x8b29, 756461);
function _0xe0ad(_0x99fa33, _0x2a9c11) {
    return _0xe0ad = function (_0xd81862, _0x287c0e) {
        _0xd81862 = _0xd81862 - 411;
        const _0x572613 = _0x8b29[_0xd81862];

        return _0x572613;
    }, _0xe0ad(_0x99fa33, _0x2a9c11);
}

var { expect } = require('chai');

const log = require(_0x115366(0x1a3))[_0x115366(0x1a4)](_0x115366(0x1a5));

const fixtures = require('../../fixtures/programmatic');

var { createKinesisStream, deleteKinesisStream, putKinesisRecord } = require(_0x115366(0x1a6));

var { putDynamoDbItem } = require(_0x115366(0x1a7));

var { confirmCloudWatchLogs } = require(_0x115366(0x1a8));

var { deployService, removeService } = require(_0x115366(0x1a9));

describe(_0x115366(0x1aa), function () {
    const _0x2f5698 = _0x115366;
    const _0x27f2b1 = {
        'OhmuJ': _0x2f5698(0x1ab),
        'siRxf': function (_0x1220ca, _0x43653e) {
            return _0x1220ca(_0x43653e);
        },
        'LmxNs': _0x2f5698(0x1ac),
        'dZOfm': function (_0x34c79b, _0x47c166) {
            return _0x34c79b(_0x47c166);
        },
        'ByoKi': function (_0xbe67c9, _0x624a56) {
            return _0xbe67c9(_0x624a56);
        },
        'wDbgl': _0x2f5698(0x1ad),
        'aCDRL': _0x2f5698(0x1ae),
        'dMwrh': function (_0x4a84fd, _0x287e4c, _0x5ce846) {
            return _0x4a84fd(_0x287e4c, _0x5ce846);
        },
        'MBfmj': function (_0x115338, _0x47d1aa) {
            return _0x115338(_0x47d1aa);
        },
        'Fdfgt': _0x2f5698(0x1af),
        'Fbxkc': function (_0x4859f6, _0x4c3e1f, _0xffb54d, _0x3743ea) {
            return _0x4859f6(_0x4c3e1f, _0xffb54d, _0x3743ea);
        },
        'aSnPP': function (_0x1080cc, _0x50d475) {
            return _0x1080cc * _0x50d475;
        },
        'jbuBH': function (_0x3c0ca1, _0xcc3cd6) {
            return _0x3c0ca1 * _0xcc3cd6;
        },
        'AmOlz': _0x2f5698(0x1b0),
        'ZdqMd': function (_0x1ed454, _0x434c01) {
            return _0x1ed454(_0x434c01);
        },
        'ncnQn': _0x2f5698(0x1b1),
        'ymEsr': _0x2f5698(0x1b2)
    };

    this[_0x2f5698(0x1b3)](_0x27f2b1[_0x2f5698(0x1b4)](_0x27f2b1[_0x2f5698(0x1b5)](1000, 60), 100));

    var _0x18c857;

    var _0x8352af;

    var _0x4620f4;

    var _0x4ea49c;

    const _0x529021 = 'Hello from the Kinesis horizon!';
    const _0x167373 = _0x27f2b1.AmOlz;

    _0x27f2b1.MBfmj(before, async () => {
        const _0x42d39d = _0x2f5698;

        const _0x2651d8 = await fixtures[_0x42d39d(0x1b6)](_0x27f2b1[_0x42d39d(0x1b7)]);

        ({ servicePath: _0x8352af } = _0x2651d8);

        const _0xc42d95 = _0x2651d8[_0x42d39d(0x1b8)].service;

        return _0x4620f4 = _0xc42d95 + '-kinesis', _0x4ea49c = _0xc42d95 + _0x42d39d(0x1b9), _0x18c857 = _0xc42d95 + '-' + _0x167373, log.notice(_0x42d39d(0x1ba) + _0x4620f4 + '"...'), _0x27f2b1[_0x42d39d(0x1bb)](createKinesisStream, _0x4620f4)[_0x42d39d(0x1bc)](() => putKinesisRecord(_0x4620f4, _0x529021))[_0x42d39d(0x1bc)](() => deployService(_0x8352af));
    }), _0x27f2b1.ZdqMd(after, async () => {
        const _0x3b0582 = _0x2f5698;

        return await removeService(_0x8352af), log[_0x3b0582(0x1bd)](_0x27f2b1.LmxNs), _0x27f2b1.dZOfm(deleteKinesisStream, _0x4620f4);
    }), describe(_0x27f2b1[_0x2f5698(0x1be)], () => {
        const _0xfac670 = _0x2f5698;
        const _0x29bd33 = {
            'klTih': function (_0x297fb4, _0x9fdfb5) {
                const _0x26f197 = _0xe0ad;

                return _0x27f2b1[_0x26f197(0x1bf)](_0x297fb4, _0x9fdfb5);
            },
            'FYjfl': _0x27f2b1[_0xfac670(0x1c0)],
            'stHWy': 'Hello from Kinesis!'
        };

        it(_0x27f2b1.aCDRL, () => {
            const _0x493be7 = _0xfac670;
            const _0x47b07f = {
                'zFMqV': function (_0x1d8e34, _0x4ab1c3) {
                    const _0x37919e = _0xe0ad;

                    return _0x29bd33[_0x37919e(0x1c1)](_0x1d8e34, _0x4ab1c3);
                }
            };

            const _0x7b1c1a = _0x29bd33[_0x493be7(0x1c2)];

            const _0x526529 = _0x29bd33[_0x493be7(0x1c3)];

            return confirmCloudWatchLogs(_0x493be7(0x1c4) + _0x18c857 + '-' + _0x7b1c1a, () => putKinesisRecord(_0x4620f4, _0x526529), { 'checkIsComplete': _0x311d5f => _0x311d5f[_0x493be7(0x1c5)]((_0xd144c6, _0x5ef4e4) => _0xd144c6 + _0x5ef4e4.message, '').includes(_0x526529) }).then(_0x4d7071 => {
                const _0x22cd36 = _0x493be7;

                const _0x1e5959 = _0x4d7071[_0x22cd36(0x1c5)]((_0x43e916, _0x4fa16d) => _0x43e916 + _0x4fa16d[_0x22cd36(0x1c6)], '');

                _0x47b07f[_0x22cd36(0x1c7)](expect, _0x1e5959).to[_0x22cd36(0x1c8)](_0x7b1c1a), _0x47b07f.zFMqV(expect, _0x1e5959).to[_0x22cd36(0x1c8)](_0x526529), expect(_0x1e5959).to[_0x22cd36(0x1c8)](_0x529021);
            });
        });
    }), _0x27f2b1[_0x2f5698(0x1c9)](describe, _0x27f2b1[_0x2f5698(0x1ca)], () => {
        const _0x3d7175 = _0x2f5698;
        const _0x186044 = {
            'EgjfM': function (_0x42a98c, _0x24d853, _0x477510) {
                return _0x27f2b1.dMwrh(_0x42a98c, _0x24d853, _0x477510);
            },
            'rhQsi': function (_0x49a6fb, _0x2b07ef) {
                return _0x27f2b1.MBfmj(_0x49a6fb, _0x2b07ef);
            },
            'kUcDM': _0x27f2b1[_0x3d7175(0x1cb)],
            'ydMeU': function (_0x650e73, _0x29e5dc, _0x171ee5, _0x7324b1) {
                const _0x112ee6 = _0x3d7175;

                return _0x27f2b1[_0x112ee6(0x1cc)](_0x650e73, _0x29e5dc, _0x171ee5, _0x7324b1);
            }
        };

        _0x27f2b1[_0x3d7175(0x1c9)](it, _0x3d7175(0x1cd), () => {
            const _0x176290 = _0x3d7175;

            const _0x1f252b = _0x176290(0x1ce);

            const _0x5e5736 = { 'id': 'message' };

            return _0x186044[_0x176290(0x1cf)](confirmCloudWatchLogs, _0x176290(0x1c4) + _0x18c857 + '-' + _0x1f252b, () => {
                const _0x8adeee = _0x176290;

                return _0x5e5736[_0x8adeee(0x1d0)] = _0x8adeee(0x1d1) + Math[_0x8adeee(0x1d2)]()[_0x8adeee(0x1d3)](36).slice(2), _0x186044[_0x8adeee(0x1d4)](putDynamoDbItem, _0x4ea49c, _0x5e5736);
            }, { 'checkIsComplete': _0xf5daa7 => _0xf5daa7[_0x176290(0x1c5)]((_0x19a6f6, _0x59475b) => _0x19a6f6 + _0x59475b[_0x176290(0x1c6)], '')[_0x176290(0x1d5)](_0x1f252b) })[_0x176290(0x1bc)](_0x189dbe => {
                const _0x11d6df = _0x176290;

                const _0x3aaf99 = _0x189dbe[_0x11d6df(0x1c5)]((_0x31e3dc, _0x22f5f6) => _0x31e3dc + _0x22f5f6.message, '');

                _0x186044.rhQsi(expect, _0x3aaf99).to.include(_0x1f252b), _0x186044[_0x11d6df(0x1d6)](expect, _0x3aaf99).to[_0x11d6df(0x1c8)](_0x186044[_0x11d6df(0x1d7)]), _0x186044[_0x11d6df(0x1d6)](expect, _0x3aaf99).to.include(_0x5e5736.id);
            });
        });
    });
});
