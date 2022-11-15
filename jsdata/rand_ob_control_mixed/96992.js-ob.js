var fs = require('fs'), conf = require('../../../constants.js');
function find_extensions(_0x22f382, _0x10dcbe, _0x37e0d9) {
    var _0xb0f54b = {
        'Jtbqg': function (_0x4ed8a3, _0x34e8a7) {
            return _0x4ed8a3 === _0x34e8a7;
        },
        'emqoO': function (_0x18cc2c, _0x355662) {
            return _0x18cc2c + _0x355662;
        },
        'tjXCG': function (_0x1a7f17, _0xe74860) {
            return _0x1a7f17 + _0xe74860;
        },
        'XonTU': function (_0x2b1596, _0x16bafc) {
            return _0x2b1596 + _0x16bafc;
        },
        'otjqH': function (_0x19bc6d, _0x293306) {
            return _0x19bc6d + _0x293306;
        },
        'eokqs': function (_0x548621, _0x408591, _0xb55d40, _0x39249f) {
            return _0x548621(_0x408591, _0xb55d40, _0x39249f);
        },
        'LTqfO': function (_0xff0fb1, _0x4207ec) {
            return _0xff0fb1 < _0x4207ec;
        },
        'vvUfF': function (_0x2ecab0, _0x570049) {
            return _0x2ecab0 + _0x570049;
        },
        'ZciWk': function (_0x3b6ac8, _0x394882) {
            return _0x3b6ac8 == _0x394882;
        },
        'cweYA': 'node_modules',
        'jqnbn': function (_0x435a95, _0x2f22d7) {
            return _0x435a95 & _0x2f22d7;
        },
        'Kpplm': 'mode'
    };
    try {
        fs['accessSync'](_0x22f382, fs['constants']['R_OK']);
    } catch (_0x22f323) {
        return;
    }
    fs['statSync'](_0x22f382)['isDirectory']() && _0xb0f54b['ZciWk'](_0x22f382['indexOf'](_0xb0f54b['cweYA']), -0x1) && _0xb0f54b['jqnbn'](fs['statSync'](_0x22f382)[_0xb0f54b['Kpplm']], 0x4) && fs['readdirSync'](_0x22f382)['forEach'](_0xfc59c0 => {
        var _0x594b1;
        if (_0xb0f54b['Jtbqg'](Number['parseInt'](_0xb0f54b['emqoO'](_0x22f382['lastIndexOf']('/'), 0x1)), _0x22f382['length']))
            _0x594b1 = _0xb0f54b['tjXCG'](_0x22f382, _0xfc59c0);
        else
            _0x594b1 = _0xb0f54b['XonTU'](_0xb0f54b['otjqH'](_0x22f382, '/'), _0xfc59c0);
        if (fs['statSync'](_0x594b1)['isDirectory']())
            _0xb0f54b['eokqs'](find_extensions, _0x594b1, _0x10dcbe, _0x37e0d9);
        else {
            var _0x56dee1 = !![];
            for (var _0x4555a5 = 0x0; _0xb0f54b['LTqfO'](_0x4555a5, _0x10dcbe['length']); _0x4555a5++)
                if (_0x10dcbe[_0x4555a5]['test'](_0xfc59c0))
                    _0x56dee1 = ![];
            if (_0x56dee1)
                _0x37e0d9['push'](_0xb0f54b['otjqH'](_0xb0f54b['vvUfF'](_0x22f382, '/'), _0xfc59c0));
        }
    });
}
module['exports']['make_available_extension'] = function make_available_extension(_0x4a5126, _0x455408) {
    var _0x3a26b0 = {
        'gJFmT': function (_0x3f8fcf, _0x43d372) {
            return _0x3f8fcf == _0x43d372;
        },
        'Clynb': 'object',
        'gVOsS': function (_0x2b2ca0, _0x34cdc9) {
            return _0x2b2ca0 == _0x34cdc9;
        },
        'uagKu': '1|4|0|2|3',
        'ckCwl': function (_0x11fb58, _0x163676) {
            return _0x11fb58 < _0x163676;
        },
        'doROG': function (_0x2c0558, _0x3d0b00) {
            return _0x2c0558 + _0x3d0b00;
        },
        'IkokY': function (_0x19646d, _0x4520f2, _0x11950f, _0x3269e9) {
            return _0x19646d(_0x4520f2, _0x11950f, _0x3269e9);
        },
        'csUvu': function (_0x4ee18e, _0x2ada44) {
            return _0x4ee18e + _0x2ada44;
        }
    };
    if (_0x3a26b0['gJFmT'](typeof _0x4a5126, _0x3a26b0['Clynb']) && _0x3a26b0['gVOsS'](typeof _0x455408, _0x3a26b0['Clynb'])) {
        var _0x43da5c = _0x3a26b0['uagKu']['split']('|'), _0x44b49c = 0x0;
        while (!![]) {
            switch (_0x43da5c[_0x44b49c++]) {
            case '0':
                var _0x4625b5 = [];
                continue;
            case '1':
                var _0x2a1742 = _0x4a5126['ext']['split'](',');
                continue;
            case '2':
                for (var _0x1c756a = 0x0; _0x3a26b0['ckCwl'](_0x1c756a, _0x2a1742['length']); _0x1c756a++)
                    _0x4625b5[_0x1c756a] = new RegExp(_0x3a26b0['doROG'](_0x2a1742[_0x1c756a], '$'));
                continue;
            case '3':
                _0x3a26b0['IkokY'](find_extensions, process['cwd'](), _0x4625b5, _0x455408);
                continue;
            case '4':
                for (var _0x1c756a = 0x0; _0x3a26b0['ckCwl'](_0x1c756a, _0x2a1742['length']); _0x1c756a++)
                    _0x2a1742[_0x1c756a] = _0x3a26b0['csUvu']('.', _0x2a1742[_0x1c756a]);
                continue;
            }
            break;
        }
    }
};
