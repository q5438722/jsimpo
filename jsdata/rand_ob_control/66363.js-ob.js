'use strict';
var __importDefault = this && this['__importDefault'] || function (_0x577bba) {
    return _0x577bba && _0x577bba['__esModule'] ? _0x577bba : { 'default': _0x577bba };
};
Object['defineProperty'](exports, '__esModule', { 'value': !![] });
const debug_1 = __importDefault(require('debug')), debug = debug_1['default']('https-proxy-agent:parse-proxy-response');
function parseProxyResponse(_0x4d391f) {
    const _0x5c23c5 = {
        'oMhOS': function (_0x2085e3, _0x420d9b) {
            return _0x2085e3(_0x420d9b);
        },
        'VfaDz': 'readable',
        'lyrxP': 'end',
        'QoXoj': 'error',
        'nxOuf': 'close',
        'fxsnW': function (_0x58c978, _0xf31411, _0x459058) {
            return _0x58c978(_0xf31411, _0x459058);
        },
        'UQSyq': 'onclose\x20had\x20error\x20%o',
        'oQtOG': function (_0x2a0096) {
            return _0x2a0096();
        },
        'vFOLW': function (_0x287f4c, _0x4adc20, _0x31f620) {
            return _0x287f4c(_0x4adc20, _0x31f620);
        },
        'WgOSR': 'onerror\x20%o',
        'mmYuD': function (_0x194e24, _0x3319ab) {
            return _0x194e24(_0x3319ab);
        },
        'BsxxR': 'onend',
        'hanwD': '\x0d\x0a\x0d\x0a',
        'KTlYZ': function (_0x1b7686, _0x3bc97d) {
            return _0x1b7686 === _0x3bc97d;
        },
        'bGBFe': 'have\x20not\x20received\x20end\x20of\x20HTTP\x20headers\x20yet...',
        'hfRjw': 'ascii',
        'OrzPV': function (_0x3df6e8, _0x5753ad, _0x5bba1d) {
            return _0x3df6e8(_0x5753ad, _0x5bba1d);
        },
        'iYbYO': 'got\x20proxy\x20server\x20response:\x20%o',
        'Iyddc': function (_0x21bc67) {
            return _0x21bc67();
        }
    };
    return new Promise((_0x426a9a, _0x1c5219) => {
        const _0x176d0b = {
            'nFPmg': function (_0xbaa3d4, _0x460239) {
                return _0x5c23c5['mmYuD'](_0xbaa3d4, _0x460239);
            },
            'zSIQJ': _0x5c23c5['BsxxR'],
            'cwGdx': _0x5c23c5['hanwD'],
            'NLJwQ': function (_0x396861, _0x28d56f) {
                return _0x5c23c5['KTlYZ'](_0x396861, _0x28d56f);
            },
            'tYvNb': function (_0x263c26, _0x574736) {
                return _0x5c23c5['mmYuD'](_0x263c26, _0x574736);
            },
            'gAOKX': _0x5c23c5['bGBFe'],
            'kySaC': function (_0x4f8a60) {
                return _0x5c23c5['oQtOG'](_0x4f8a60);
            },
            'rQaro': _0x5c23c5['hfRjw'],
            'hEXEk': function (_0x416d6f, _0x1515a7, _0x229915) {
                return _0x5c23c5['OrzPV'](_0x416d6f, _0x1515a7, _0x229915);
            },
            'eYacv': _0x5c23c5['iYbYO']
        };
        let _0x13f505 = 0x0;
        const _0x54cacc = [];
        function _0x390fe3() {
            const _0x2c5f31 = _0x4d391f['read']();
            if (_0x2c5f31)
                _0x5c23c5['oMhOS'](_0x1921a5, _0x2c5f31);
            else
                _0x4d391f['once'](_0x5c23c5['VfaDz'], _0x390fe3);
        }
        function _0xb8e5b7() {
            _0x4d391f['removeListener'](_0x5c23c5['lyrxP'], _0x233939), _0x4d391f['removeListener'](_0x5c23c5['QoXoj'], _0x37e9a4), _0x4d391f['removeListener'](_0x5c23c5['nxOuf'], _0x1a5a57), _0x4d391f['removeListener'](_0x5c23c5['VfaDz'], _0x390fe3);
        }
        function _0x1a5a57(_0x59994a) {
            _0x5c23c5['fxsnW'](debug, _0x5c23c5['UQSyq'], _0x59994a);
        }
        function _0x233939() {
            _0x176d0b['nFPmg'](debug, _0x176d0b['zSIQJ']);
        }
        function _0x37e9a4(_0x3196c0) {
            _0x5c23c5['oQtOG'](_0xb8e5b7), _0x5c23c5['vFOLW'](debug, _0x5c23c5['WgOSR'], _0x3196c0), _0x5c23c5['oMhOS'](_0x1c5219, _0x3196c0);
        }
        function _0x1921a5(_0x59ad61) {
            _0x54cacc['push'](_0x59ad61), _0x13f505 += _0x59ad61['length'];
            const _0x4adaa5 = Buffer['concat'](_0x54cacc, _0x13f505), _0x86244d = _0x4adaa5['indexOf'](_0x176d0b['cwGdx']);
            if (_0x176d0b['NLJwQ'](_0x86244d, -0x1)) {
                _0x176d0b['tYvNb'](debug, _0x176d0b['gAOKX']), _0x176d0b['kySaC'](_0x390fe3);
                return;
            }
            const _0x55f5b6 = _0x4adaa5['toString'](_0x176d0b['rQaro'], 0x0, _0x4adaa5['indexOf']('\x0d\x0a')), _0x4ea5b7 = +_0x55f5b6['split']('\x20')[0x1];
            _0x176d0b['hEXEk'](debug, _0x176d0b['eYacv'], _0x55f5b6), _0x176d0b['tYvNb'](_0x426a9a, {
                'statusCode': _0x4ea5b7,
                'buffered': _0x4adaa5
            });
        }
        _0x4d391f['on'](_0x5c23c5['QoXoj'], _0x37e9a4), _0x4d391f['on'](_0x5c23c5['nxOuf'], _0x1a5a57), _0x4d391f['on'](_0x5c23c5['lyrxP'], _0x233939), _0x5c23c5['Iyddc'](_0x390fe3);
    });
}
exports['default'] = parseProxyResponse;
