'use strict';
var YAMLException = require('./exception'), TYPE_CONSTRUCTOR_OPTIONS = [
        'kind',
        'resolve',
        'construct',
        'instanceOf',
        'predicate',
        'represent',
        'defaultStyle',
        'styleAliases'
    ], YAML_NODE_KINDS = [
        'scalar',
        'sequence',
        'mapping'
    ];
function compileStyleAliases(_0x12ce93) {
    var _0x63aada = {
            'CTWnR': function (_0x3e829c, _0x1a16a5) {
                return _0x3e829c(_0x1a16a5);
            },
            'xwYmf': function (_0x4eb34d, _0x45a557) {
                return _0x4eb34d !== _0x45a557;
            }
        }, _0x48050d = {};
    return _0x63aada['xwYmf'](_0x12ce93, null) && Object['keys'](_0x12ce93)['forEach'](function (_0x324d10) {
        var _0xce3b25 = {
            'gpxcP': function (_0x4fd6ac, _0x3139a8) {
                return _0x63aada['CTWnR'](_0x4fd6ac, _0x3139a8);
            }
        };
        _0x12ce93[_0x324d10]['forEach'](function (_0x3c4aa1) {
            _0x48050d[_0xce3b25['gpxcP'](String, _0x3c4aa1)] = _0x324d10;
        });
    }), _0x48050d;
}
function Type(_0x3476d6, _0x201e5b) {
    var _0x2adf05 = {
            'zJLMU': '2|1|6|3|10|7|0|12|11|9|8|4|5',
            'SrQzW': 'construct',
            'cGWYI': function (_0x1d5121, _0x3e1069) {
                return _0x1d5121 || _0x3e1069;
            },
            'yaBGk': function (_0x1bcc5d, _0x2a9614) {
                return _0x1bcc5d === _0x2a9614;
            },
            'erWFJ': function (_0x1c247d, _0x3f7da5) {
                return _0x1c247d + _0x3f7da5;
            },
            'NvXQR': function (_0x2ae20d, _0x52226d) {
                return _0x2ae20d + _0x52226d;
            },
            'AHTKD': 'Unknown\x20option\x20\x22',
            'EAzWh': '\x22\x20is\x20met\x20in\x20definition\x20of\x20\x22',
            'aNgvv': '\x22\x20YAML\x20type.',
            'nAkEP': function (_0x11ce60, _0x440860) {
                return _0x11ce60(_0x440860);
            },
            'SgXMK': 'styleAliases',
            'diRoK': function (_0x12976d, _0x1a6ceb) {
                return _0x12976d === _0x1a6ceb;
            },
            'RUYsd': function (_0x969f01, _0x2c7245) {
                return _0x969f01 + _0x2c7245;
            },
            'cpAae': function (_0x3bd104, _0x113cf2) {
                return _0x3bd104 + _0x113cf2;
            },
            'rjlcm': function (_0x206712, _0x2eeccc) {
                return _0x206712 + _0x2eeccc;
            },
            'TOXwM': 'Unknown\x20kind\x20\x22',
            'HPHSS': '\x22\x20is\x20specified\x20for\x20\x22',
            'PjLrW': 'resolve',
            'WDuwo': 'defaultStyle',
            'DAWtr': 'represent',
            'IGFjq': 'kind',
            'BBRDj': 'predicate',
            'pwpjU': 'instanceOf'
        }, _0x53dc98 = _0x2adf05['zJLMU']['split']('|'), _0x40f104 = 0x0;
    while (!![]) {
        switch (_0x53dc98[_0x40f104++]) {
        case '0':
            this['construct'] = _0x201e5b[_0x2adf05['SrQzW']] || function (_0xf4b83) {
                return _0xf4b83;
            };
            continue;
        case '1':
            _0x201e5b = _0x2adf05['cGWYI'](_0x201e5b, {});
            continue;
        case '2':
            var _0x366119 = {
                'RtkJL': function (_0x372497, _0x1486e4) {
                    return _0x2adf05['yaBGk'](_0x372497, _0x1486e4);
                },
                'UoWUZ': function (_0x64a19b, _0x2c469f) {
                    return _0x2adf05['erWFJ'](_0x64a19b, _0x2c469f);
                },
                'rRooC': function (_0xbc9efb, _0x2c71af) {
                    return _0x2adf05['NvXQR'](_0xbc9efb, _0x2c71af);
                },
                'uFzGq': _0x2adf05['AHTKD'],
                'jpiIu': _0x2adf05['EAzWh'],
                'KoZtL': _0x2adf05['aNgvv']
            };
            continue;
        case '3':
            this['tag'] = _0x3476d6;
            continue;
        case '4':
            this['styleAliases'] = _0x2adf05['nAkEP'](compileStyleAliases, _0x201e5b[_0x2adf05['SgXMK']] || null);
            continue;
        case '5':
            if (_0x2adf05['diRoK'](YAML_NODE_KINDS['indexOf'](this['kind']), -0x1))
                throw new YAMLException(_0x2adf05['NvXQR'](_0x2adf05['RUYsd'](_0x2adf05['cpAae'](_0x2adf05['rjlcm'](_0x2adf05['TOXwM'], this['kind']), _0x2adf05['HPHSS']), _0x3476d6), _0x2adf05['aNgvv']));
            continue;
        case '6':
            Object['keys'](_0x201e5b)['forEach'](function (_0x422feb) {
                if (_0x366119['RtkJL'](TYPE_CONSTRUCTOR_OPTIONS['indexOf'](_0x422feb), -0x1))
                    throw new YAMLException(_0x366119['UoWUZ'](_0x366119['UoWUZ'](_0x366119['rRooC'](_0x366119['rRooC'](_0x366119['uFzGq'], _0x422feb), _0x366119['jpiIu']), _0x3476d6), _0x366119['KoZtL']));
            });
            continue;
        case '7':
            this['resolve'] = _0x201e5b[_0x2adf05['PjLrW']] || function () {
                return !![];
            };
            continue;
        case '8':
            this['defaultStyle'] = _0x201e5b[_0x2adf05['WDuwo']] || null;
            continue;
        case '9':
            this['represent'] = _0x201e5b[_0x2adf05['DAWtr']] || null;
            continue;
        case '10':
            this['kind'] = _0x201e5b[_0x2adf05['IGFjq']] || null;
            continue;
        case '11':
            this['predicate'] = _0x201e5b[_0x2adf05['BBRDj']] || null;
            continue;
        case '12':
            this['instanceOf'] = _0x201e5b[_0x2adf05['pwpjU']] || null;
            continue;
        }
        break;
    }
}
module['exports'] = Type;
