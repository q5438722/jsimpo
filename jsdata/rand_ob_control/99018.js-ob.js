'use strict';
const {expect} = require('chai'), log = require('log')['get']('serverless:test'), fixtures = require('../../fixtures/programmatic'), {createKinesisStream, deleteKinesisStream, putKinesisRecord} = require('../../utils/kinesis'), {putDynamoDbItem} = require('../../utils/dynamodb'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration');
describe('AWS\x20-\x20Stream\x20Integration\x20Test', function () {
    const _0x5e9c7d = {
        'PTcdc': 'stream',
        'QeWDT': function (_0xd34b6a, _0x4b5b24) {
            return _0xd34b6a(_0x4b5b24);
        },
        'ZGNCw': 'Deleting\x20Kinesis\x20stream',
        'dPqRA': function (_0x3f3e3a, _0x457795) {
            return _0x3f3e3a(_0x457795);
        },
        'WDKxf': 'streamKinesis',
        'jiPAb': 'Hello\x20from\x20Kinesis!',
        'MvJKG': function (_0x331824, _0x4fef0f, _0x161c16, _0x4270f9) {
            return _0x331824(_0x4fef0f, _0x161c16, _0x4270f9);
        },
        'mmfoV': function (_0x1813f8, _0x384c84, _0x113691) {
            return _0x1813f8(_0x384c84, _0x113691);
        },
        'aKuQi': 'should\x20invoke\x20on\x20kinesis\x20messages\x20from\x20the\x20trim\x20horizon',
        'AJvfk': function (_0x2d1bd3, _0x1cc220, _0xf86c9f) {
            return _0x2d1bd3(_0x1cc220, _0xf86c9f);
        },
        'PuenS': function (_0x14a7a4, _0x5eacc6) {
            return _0x14a7a4(_0x5eacc6);
        },
        'TyQbS': function (_0xff5c6f, _0x4d7e82) {
            return _0xff5c6f(_0x4d7e82);
        },
        'ExyEu': 'INSERT',
        'vzKup': function (_0x5efe07, _0x536e19) {
            return _0x5efe07(_0x536e19);
        },
        'OTnFP': 'streamDynamoDb',
        'wNfEe': 'message',
        'GEOxZ': function (_0x26f5d8, _0xd231a2, _0x56733b, _0x2255e6) {
            return _0x26f5d8(_0xd231a2, _0x56733b, _0x2255e6);
        },
        'mzbwB': 'should\x20invoke\x20on\x20dynamodb\x20messages\x20from\x20the\x20latest\x20position',
        'rGSWc': function (_0x11ac2a, _0x5e2109) {
            return _0x11ac2a * _0x5e2109;
        },
        'eNvPu': 'Hello\x20from\x20the\x20Kinesis\x20horizon!',
        'qIsZx': 'dev',
        'oTDoX': function (_0x5f2695, _0x136677) {
            return _0x5f2695(_0x136677);
        },
        'pCeoz': 'Kinesis\x20Streams',
        'ggKZD': 'DynamoDB\x20Streams'
    };
    this['timeout'](_0x5e9c7d['rGSWc'](_0x5e9c7d['rGSWc'](0x3e8, 0x3c), 0x64));
    let _0x25dc75, _0x5bc8e7, _0x3f3dd5, _0x528427;
    const _0x267681 = _0x5e9c7d['eNvPu'], _0x189790 = _0x5e9c7d['qIsZx'];
    _0x5e9c7d['vzKup'](before, async () => {
        const _0x5cbaed = await fixtures['setup'](_0x5e9c7d['PTcdc']);
        ({servicePath: _0x5bc8e7} = _0x5cbaed);
        const _0x5d713c = _0x5cbaed['serviceConfig']['service'];
        return _0x3f3dd5 = _0x5d713c + '-kinesis', _0x528427 = _0x5d713c + '-table', _0x25dc75 = _0x5d713c + '-' + _0x189790, log['notice']('Creating\x20Kinesis\x20stream\x20\x22' + _0x3f3dd5 + '\x22...'), _0x5e9c7d['QeWDT'](createKinesisStream, _0x3f3dd5)['then'](() => putKinesisRecord(_0x3f3dd5, _0x267681))['then'](() => deployService(_0x5bc8e7));
    }), _0x5e9c7d['oTDoX'](after, async () => {
        return await _0x5e9c7d['QeWDT'](removeService, _0x5bc8e7), log['notice'](_0x5e9c7d['ZGNCw']), _0x5e9c7d['QeWDT'](deleteKinesisStream, _0x3f3dd5);
    }), _0x5e9c7d['AJvfk'](describe, _0x5e9c7d['pCeoz'], () => {
        _0x5e9c7d['mmfoV'](it, _0x5e9c7d['aKuQi'], () => {
            const _0x1b03ac = {
                    'VwSds': function (_0x30cb16, _0x3610c1) {
                        return _0x5e9c7d['dPqRA'](_0x30cb16, _0x3610c1);
                    }
                }, _0x5d0b0a = _0x5e9c7d['WDKxf'], _0x523cb6 = _0x5e9c7d['jiPAb'];
            return _0x5e9c7d['MvJKG'](confirmCloudWatchLogs, '/aws/lambda/' + _0x25dc75 + '-' + _0x5d0b0a, () => putKinesisRecord(_0x3f3dd5, _0x523cb6), { 'checkIsComplete': _0x957418 => _0x957418['reduce']((_0x8903bc, _0x403af6) => _0x8903bc + _0x403af6['message'], '')['includes'](_0x523cb6) })['then'](_0xfc2667 => {
                const _0x623d0d = _0xfc2667['reduce']((_0x3a17b3, _0x54b7f1) => _0x3a17b3 + _0x54b7f1['message'], '');
                _0x1b03ac['VwSds'](expect, _0x623d0d)['to']['include'](_0x5d0b0a), _0x1b03ac['VwSds'](expect, _0x623d0d)['to']['include'](_0x523cb6), _0x1b03ac['VwSds'](expect, _0x623d0d)['to']['include'](_0x267681);
            });
        });
    }), _0x5e9c7d['AJvfk'](describe, _0x5e9c7d['ggKZD'], () => {
        _0x5e9c7d['AJvfk'](it, _0x5e9c7d['mzbwB'], () => {
            const _0x1e908e = {
                    'AOIZJ': function (_0x3828ad, _0x2f10b0, _0x185f36) {
                        return _0x5e9c7d['AJvfk'](_0x3828ad, _0x2f10b0, _0x185f36);
                    },
                    'xAIQT': function (_0x55f955, _0x1628ef) {
                        return _0x5e9c7d['PuenS'](_0x55f955, _0x1628ef);
                    },
                    'fNBWl': function (_0x30baa5, _0x1beb0a) {
                        return _0x5e9c7d['TyQbS'](_0x30baa5, _0x1beb0a);
                    },
                    'gLMIX': _0x5e9c7d['ExyEu'],
                    'fdWLx': function (_0x3fb2a2, _0x28d16b) {
                        return _0x5e9c7d['vzKup'](_0x3fb2a2, _0x28d16b);
                    }
                }, _0x4c19f7 = _0x5e9c7d['OTnFP'], _0x1bf47a = { 'id': _0x5e9c7d['wNfEe'] };
            return _0x5e9c7d['GEOxZ'](confirmCloudWatchLogs, '/aws/lambda/' + _0x25dc75 + '-' + _0x4c19f7, () => {
                return _0x1bf47a['hello'] = 'from\x20dynamo!' + Math['random']()['toString'](0x24)['slice'](0x2), _0x1e908e['AOIZJ'](putDynamoDbItem, _0x528427, _0x1bf47a);
            }, { 'checkIsComplete': _0x4f3922 => _0x4f3922['reduce']((_0x26062c, _0x544d70) => _0x26062c + _0x544d70['message'], '')['includes'](_0x4c19f7) })['then'](_0x4c0215 => {
                const _0x409296 = _0x4c0215['reduce']((_0x5ba890, _0x48b6df) => _0x5ba890 + _0x48b6df['message'], '');
                _0x1e908e['xAIQT'](expect, _0x409296)['to']['include'](_0x4c19f7), _0x1e908e['fNBWl'](expect, _0x409296)['to']['include'](_0x1e908e['gLMIX']), _0x1e908e['fdWLx'](expect, _0x409296)['to']['include'](_0x1bf47a['id']);
            });
        });
    });
});
