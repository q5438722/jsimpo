'use strict';
const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider'), runServerless = require('../../../../../../../../../utils/run-serverless');
describe('#validate()', () => {
    const _0x4192ce = {
        'pJkAQ': 'dev',
        'COxBb': 'us-east-1',
        'eCjJV': 'aws',
        'tIPdC': '$connect',
        'RHpbw': function (_0x257fa6, _0x5a8733) {
            return _0x257fa6(_0x5a8733);
        },
        'SNQTw': 'first',
        'rfPnw': function (_0x5d72cf, _0x3a4ff7) {
            return _0x5d72cf(_0x3a4ff7);
        },
        'WPxzz': 'auth',
        'XDvVK': function (_0x59b8a6, _0x122eeb) {
            return _0x59b8a6(_0x122eeb);
        },
        'uVwjj': 'arn:',
        'FHqrT': 'AWS::Partition',
        'gPWdc': ':apigateway:',
        'Zztrf': 'AWS::Region',
        'xkSFR': ':lambda:path/2015-03-31/functions/',
        'rUpOv': 'AuthLambdaFunction',
        'tfaBt': 'Arn',
        'ANgDI': '/invocations',
        'Ckxza': 'route.request.header.Auth',
        'uXioy': 'arn:aws:auth',
        'xKwGS': function (_0x4619c5, _0x299f07) {
            return _0x4619c5(_0x299f07);
        },
        'APXts': 'route.request.querystring.Auth',
        'dRoDo': '$default',
        'vFExh': 'Array',
        'ONiCh': function (_0xf8d6e, _0x30f0eb, _0x3f037d) {
            return _0xf8d6e(_0x30f0eb, _0x3f037d);
        },
        'LSODh': 'should\x20support\x20the\x20simplified\x20string\x20syntax',
        'tILNh': 'should\x20support\x20the\x20extended\x20object\x20syntax',
        'YlUDi': function (_0x5025b, _0x1f8aaa, _0x513aee) {
            return _0x5025b(_0x1f8aaa, _0x513aee);
        },
        'pxZvT': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string',
        'dyzna': function (_0x279e52, _0xb73413, _0x3552a6) {
            return _0x279e52(_0xb73413, _0x3552a6);
        },
        'CXUqj': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn',
        'cMtlu': function (_0x4f8608, _0x4ee534, _0x1e9438) {
            return _0x4f8608(_0x4ee534, _0x1e9438);
        },
        'jjsvo': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object',
        'TIido': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn',
        'ETPYP': 'should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured',
        'BKQcf': 'should\x20ignore\x20non-websocket\x20events'
    };
    let _0x568f52, _0x302a05;
    _0x4192ce['xKwGS'](beforeEach, () => {
        const _0x29536c = {
            'stage': _0x4192ce['pJkAQ'],
            'region': _0x4192ce['COxBb']
        };
        _0x568f52 = new Serverless(), _0x568f52['setProvider'](_0x4192ce['eCjJV'], new AwsProvider(_0x568f52, _0x29536c)), _0x302a05 = new AwsCompileWebsocketsEvents(_0x568f52, _0x29536c);
    }), _0x4192ce['ONiCh'](it, _0x4192ce['LSODh'], () => {
        _0x302a05['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': _0x4192ce['tIPdC'] }] } };
        const _0x32c8ac = _0x302a05['validate']();
        _0x4192ce['RHpbw'](expect, _0x32c8ac['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC']
            }]);
    }), _0x4192ce['ONiCh'](it, _0x4192ce['tILNh'], () => {
        _0x302a05['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': _0x4192ce['tIPdC'] } }] } };
        const _0x5d66c7 = _0x302a05['validate']();
        _0x4192ce['rfPnw'](expect, _0x5d66c7['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC']
            }]);
    }), _0x4192ce['YlUDi'](it, _0x4192ce['pxZvT'], () => {
        _0x302a05['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4192ce['tIPdC'],
                            'authorizer': _0x4192ce['WPxzz']
                        }
                    }]
            }
        };
        const _0x284604 = _0x302a05['validate']();
        _0x4192ce['XDvVK'](expect, _0x284604['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC'],
                'authorizer': {
                    'name': _0x4192ce['WPxzz'],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4192ce['uVwjj'],
                                { 'Ref': _0x4192ce['FHqrT'] },
                                _0x4192ce['gPWdc'],
                                { 'Ref': _0x4192ce['Zztrf'] },
                                _0x4192ce['xkSFR'],
                                {
                                    'Fn::GetAtt': [
                                        _0x4192ce['rUpOv'],
                                        _0x4192ce['tfaBt']
                                    ]
                                },
                                _0x4192ce['ANgDI']
                            ]
                        ]
                    },
                    'identitySource': [_0x4192ce['Ckxza']],
                    'permission': _0x4192ce['rUpOv']
                }
            }]);
    }), _0x4192ce['dyzna'](it, _0x4192ce['CXUqj'], () => {
        _0x302a05['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4192ce['tIPdC'],
                            'authorizer': _0x4192ce['uXioy']
                        }
                    }]
            }
        };
        const _0x5cb885 = _0x302a05['validate']();
        _0x4192ce['xKwGS'](expect, _0x5cb885['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC'],
                'authorizer': {
                    'name': _0x4192ce['WPxzz'],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4192ce['uVwjj'],
                                { 'Ref': _0x4192ce['FHqrT'] },
                                _0x4192ce['gPWdc'],
                                { 'Ref': _0x4192ce['Zztrf'] },
                                _0x4192ce['xkSFR'],
                                _0x4192ce['uXioy'],
                                _0x4192ce['ANgDI']
                            ]
                        ]
                    },
                    'identitySource': [_0x4192ce['Ckxza']],
                    'permission': _0x4192ce['uXioy']
                }
            }]);
    }), _0x4192ce['cMtlu'](it, _0x4192ce['jjsvo'], () => {
        _0x302a05['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4192ce['tIPdC'],
                            'authorizer': {
                                'name': _0x4192ce['WPxzz'],
                                'identitySource': [
                                    _0x4192ce['Ckxza'],
                                    _0x4192ce['APXts']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x554c86 = _0x302a05['validate']();
        _0x4192ce['xKwGS'](expect, _0x554c86['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC'],
                'authorizer': {
                    'name': _0x4192ce['WPxzz'],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4192ce['uVwjj'],
                                { 'Ref': _0x4192ce['FHqrT'] },
                                _0x4192ce['gPWdc'],
                                { 'Ref': _0x4192ce['Zztrf'] },
                                _0x4192ce['xkSFR'],
                                {
                                    'Fn::GetAtt': [
                                        _0x4192ce['rUpOv'],
                                        _0x4192ce['tfaBt']
                                    ]
                                },
                                _0x4192ce['ANgDI']
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x4192ce['Ckxza'],
                        _0x4192ce['APXts']
                    ],
                    'permission': _0x4192ce['rUpOv']
                }
            }]);
    }), _0x4192ce['cMtlu'](it, _0x4192ce['TIido'], () => {
        _0x302a05['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4192ce['tIPdC'],
                            'authorizer': {
                                'arn': _0x4192ce['uXioy'],
                                'identitySource': [
                                    _0x4192ce['Ckxza'],
                                    _0x4192ce['APXts']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x4e1625 = _0x302a05['validate']();
        _0x4192ce['xKwGS'](expect, _0x4e1625['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC'],
                'authorizer': {
                    'name': _0x4192ce['WPxzz'],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4192ce['uVwjj'],
                                { 'Ref': _0x4192ce['FHqrT'] },
                                _0x4192ce['gPWdc'],
                                { 'Ref': _0x4192ce['Zztrf'] },
                                _0x4192ce['xkSFR'],
                                _0x4192ce['uXioy'],
                                _0x4192ce['ANgDI']
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x4192ce['Ckxza'],
                        _0x4192ce['APXts']
                    ],
                    'permission': _0x4192ce['uXioy']
                }
            }]);
    }), _0x4192ce['cMtlu'](it, _0x4192ce['ETPYP'], () => {
        _0x302a05['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4192ce['tIPdC'],
                            'routeResponseSelectionExpression': _0x4192ce['dRoDo']
                        }
                    }]
            }
        };
        const _0x2a669a = _0x302a05['validate']();
        _0x4192ce['xKwGS'](expect, _0x2a669a['events'])['to']['deep']['equal']([{
                'functionName': _0x4192ce['SNQTw'],
                'route': _0x4192ce['tIPdC'],
                'routeResponseSelectionExpression': _0x4192ce['dRoDo']
            }]);
    }), _0x4192ce['cMtlu'](it, _0x4192ce['BKQcf'], () => {
        _0x302a05['serverless']['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x47bdee = _0x302a05['validate']();
        _0x4192ce['xKwGS'](expect, _0x47bdee['events'])['to']['be']['an'](_0x4192ce['vFExh'])['with']['length'](0x0);
    });
}), describe('#validate()\x20using\x20runServerless\x20util', () => {
    const _0x524898 = {
        'equiV': 'authName',
        'ZAQas': function (_0x4eb5db, _0xf9400c) {
            return _0x4eb5db(_0xf9400c);
        },
        'ngEbG': 'function',
        'zmBHW': 'index.handler',
        'PfhMT': '$connect',
        'JxqUI': 'arn',
        'PJSGY': 'arnName',
        'uNpWQ': 'package',
        'mKdLp': function (_0x348525, _0x48675a) {
            return _0x348525(_0x48675a);
        },
        'lGLMz': function (_0xef59f5, _0x5afc40) {
            return _0xef59f5(_0x5afc40);
        },
        'uAFqo': function (_0x2bcc87, _0x446cde, _0x9618da) {
            return _0x2bcc87(_0x446cde, _0x9618da);
        },
        'avelb': 'should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied'
    };
    _0x524898['uAFqo'](it, _0x524898['avelb'], async () => {
        const _0x13a061 = _0x524898['equiV'], {
                cfTemplate: _0x1b1f21,
                awsNaming: _0x24eb5d
            } = await _0x524898['ZAQas'](runServerless, {
                'fixture': _0x524898['ngEbG'],
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0x524898['zmBHW'],
                            'events': [{
                                    'websocket': {
                                        'route': _0x524898['PfhMT'],
                                        'authorizer': {
                                            'name': _0x13a061,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x524898['JxqUI'],
                                                        _0x524898['PJSGY']
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x524898['uNpWQ']
            }), _0x52a2b9 = _0x1b1f21['Resources'], _0x2f8fd3 = _0x24eb5d;
        _0x524898['mKdLp'](expect, _0x52a2b9[_0x2f8fd3['getWebsocketsAuthorizerLogicalId'](_0x13a061)])['to']['exist'], _0x524898['lGLMz'](expect, _0x52a2b9[_0x2f8fd3['getWebsocketsAuthorizerLogicalId'](_0x13a061)]['Properties']['Name'])['to']['deep']['equal'](_0x13a061);
    });
});
