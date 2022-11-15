function _0xe0ad(_0x99fa33, _0x2a9c11) {
    return _0xe0ad = function (_0xd81862, _0x287c0e) {
        _0xd81862 = _0xd81862 - (-4294 + 9927 + -5222);
        let _0x572613 = _0x8b29[_0xd81862];
        return _0x572613;
    }, _0xe0ad(_0x99fa33, _0x2a9c11);
}
const {expect} = require('chai'), log = require(_0x115366(419))[_0x115366(420)](_0x115366(421)), fixtures = require('../../fixtures/programmatic'), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require(_0x115366(422)), {putDynamoDbItem} = require(_0x115366(423)), {confirmCloudWatchLogs} = require(_0x115366(424)), {deployService, removeService} = require(_0x115366(425));
describe(_0x115366(426), function () {
    const _0x2f5698 = _0x115366, _0x27f2b1 = {
            'OhmuJ': _0x2f5698(427),
            'siRxf': function (_0x1220ca, _0x43653e) {
                return _0x1220ca(_0x43653e);
            },
            'LmxNs': _0x2f5698(428),
            'dZOfm': function (_0x34c79b, _0x47c166) {
                return _0x34c79b(_0x47c166);
            },
            'ByoKi': function (_0xbe67c9, _0x624a56) {
                return _0xbe67c9(_0x624a56);
            },
            'wDbgl': _0x2f5698(429),
            'aCDRL': _0x2f5698(430),
            'dMwrh': function (_0x4a84fd, _0x287e4c, _0x5ce846) {
                return _0x4a84fd(_0x287e4c, _0x5ce846);
            },
            'MBfmj': function (_0x115338, _0x47d1aa) {
                return _0x115338(_0x47d1aa);
            },
            'Fdfgt': _0x2f5698(431),
            'Fbxkc': function (_0x4859f6, _0x4c3e1f, _0xffb54d, _0x3743ea) {
                return _0x4859f6(_0x4c3e1f, _0xffb54d, _0x3743ea);
            },
            'aSnPP': function (_0x1080cc, _0x50d475) {
                return _0x1080cc * _0x50d475;
            },
            'jbuBH': function (_0x3c0ca1, _0xcc3cd6) {
                return _0x3c0ca1 * _0xcc3cd6;
            },
            'AmOlz': _0x2f5698(432),
            'ZdqMd': function (_0x1ed454, _0x434c01) {
                return _0x1ed454(_0x434c01);
            },
            'ncnQn': _0x2f5698(433),
            'ymEsr': _0x2f5698(434)
        };
    this[_0x2f5698(435)](_0x27f2b1[_0x2f5698(436)](_0x27f2b1[_0x2f5698(437)](-1669 * -1 + 3 * 1931 + -6462, -1422 + -1 * -5687 + 145 * -29), -6697 + -2181 + 8978));
    let _0x18c857, _0x8352af, _0x4620f4, _0x4ea49c;
    const _0x529021 = 'Hello from the Kinesis horizon!', _0x167373 = _0x27f2b1['AmOlz'];
    _0x27f2b1['MBfmj'](before, async () => {
        const _0x42d39d = _0x2f5698, _0x2651d8 = await fixtures[_0x42d39d(438)](_0x27f2b1[_0x42d39d(439)]);
        ({servicePath: _0x8352af} = _0x2651d8);
        const _0xc42d95 = _0x2651d8[_0x42d39d(440)]['service'];
        return _0x4620f4 = _0xc42d95 + '-kinesis', _0x4ea49c = _0xc42d95 + _0x42d39d(441), _0x18c857 = _0xc42d95 + '-' + _0x167373, log['notice'](_0x42d39d(442) + _0x4620f4 + '"...'), _0x27f2b1[_0x42d39d(443)](createKinesisStream, _0x4620f4)[_0x42d39d(444)](() => putKinesisRecord(_0x4620f4, _0x529021))[_0x42d39d(444)](() => deployService(_0x8352af));
    }), _0x27f2b1['ZdqMd'](after, async () => {
        const _0x3b0582 = _0x2f5698;
        return await removeService(_0x8352af), log[_0x3b0582(445)](_0x27f2b1['LmxNs']), _0x27f2b1['dZOfm'](deleteKinesisStream, _0x4620f4);
    }), describe(_0x27f2b1[_0x2f5698(446)], () => {
        const _0xfac670 = _0x2f5698, _0x29bd33 = {
                'klTih': function (_0x297fb4, _0x9fdfb5) {
                    const _0x26f197 = _0xe0ad;
                    return _0x27f2b1[_0x26f197(447)](_0x297fb4, _0x9fdfb5);
                },
                'FYjfl': _0x27f2b1[_0xfac670(448)],
                'stHWy': 'Hello from Kinesis!'
            };
        it(_0x27f2b1['aCDRL'], () => {
            const _0x493be7 = _0xfac670, _0x47b07f = {
                    'zFMqV': function (_0x1d8e34, _0x4ab1c3) {
                        const _0x37919e = _0xe0ad;
                        return _0x29bd33[_0x37919e(449)](_0x1d8e34, _0x4ab1c3);
                    }
                }, _0x7b1c1a = _0x29bd33[_0x493be7(450)], _0x526529 = _0x29bd33[_0x493be7(451)];
            return confirmCloudWatchLogs(_0x493be7(452) + _0x18c857 + '-' + _0x7b1c1a, () => putKinesisRecord(_0x4620f4, _0x526529), { 'checkIsComplete': _0x311d5f => _0x311d5f[_0x493be7(453)]((_0xd144c6, _0x5ef4e4) => _0xd144c6 + _0x5ef4e4['message'], '')['includes'](_0x526529) })['then'](_0x4d7071 => {
                const _0x22cd36 = _0x493be7, _0x1e5959 = _0x4d7071[_0x22cd36(453)]((_0x43e916, _0x4fa16d) => _0x43e916 + _0x4fa16d[_0x22cd36(454)], '');
                _0x47b07f[_0x22cd36(455)](expect, _0x1e5959)['to'][_0x22cd36(456)](_0x7b1c1a), _0x47b07f['zFMqV'](expect, _0x1e5959)['to'][_0x22cd36(456)](_0x526529), expect(_0x1e5959)['to'][_0x22cd36(456)](_0x529021);
            });
        });
    }), _0x27f2b1[_0x2f5698(457)](describe, _0x27f2b1[_0x2f5698(458)], () => {
        const _0x3d7175 = _0x2f5698, _0x186044 = {
                'EgjfM': function (_0x42a98c, _0x24d853, _0x477510) {
                    return _0x27f2b1['dMwrh'](_0x42a98c, _0x24d853, _0x477510);
                },
                'rhQsi': function (_0x49a6fb, _0x2b07ef) {
                    return _0x27f2b1['MBfmj'](_0x49a6fb, _0x2b07ef);
                },
                'kUcDM': _0x27f2b1[_0x3d7175(459)],
                'ydMeU': function (_0x650e73, _0x29e5dc, _0x171ee5, _0x7324b1) {
                    const _0x112ee6 = _0x3d7175;
                    return _0x27f2b1[_0x112ee6(460)](_0x650e73, _0x29e5dc, _0x171ee5, _0x7324b1);
                }
            };
        _0x27f2b1[_0x3d7175(457)](it, _0x3d7175(461), () => {
            const _0x176290 = _0x3d7175, _0x1f252b = _0x176290(462), _0x5e5736 = { 'id': 'message' };
            return _0x186044[_0x176290(463)](confirmCloudWatchLogs, _0x176290(452) + _0x18c857 + '-' + _0x1f252b, () => {
                const _0x8adeee = _0x176290;
                return _0x5e5736[_0x8adeee(464)] = _0x8adeee(465) + Math[_0x8adeee(466)]()[_0x8adeee(467)](-684 + 177 * 17 + -3 * 763)['slice'](-5240 + -2 * 1867 + 8976), _0x186044[_0x8adeee(468)](putDynamoDbItem, _0x4ea49c, _0x5e5736);
            }, { 'checkIsComplete': _0xf5daa7 => _0xf5daa7[_0x176290(453)]((_0x19a6f6, _0x59475b) => _0x19a6f6 + _0x59475b[_0x176290(454)], '')[_0x176290(469)](_0x1f252b) })[_0x176290(444)](_0x189dbe => {
                const _0x11d6df = _0x176290, _0x3aaf99 = _0x189dbe[_0x11d6df(453)]((_0x31e3dc, _0x22f5f6) => _0x31e3dc + _0x22f5f6['message'], '');
                _0x186044['rhQsi'](expect, _0x3aaf99)['to']['include'](_0x1f252b), _0x186044[_0x11d6df(470)](expect, _0x3aaf99)['to'][_0x11d6df(456)](_0x186044[_0x11d6df(471)]), _0x186044[_0x11d6df(470)](expect, _0x3aaf99)['to']['include'](_0x5e5736['id']);
            });
        });
    });
});