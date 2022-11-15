'use strict';
module['exports'] = function shouldIgnoreConsoleError(_0x6bf007, _0x203b8e) {
    var _0x442200 = {
        'nKfpz': function (_0x54048e, _0x5e3436) {
            return _0x54048e === _0x5e3436;
        },
        'vdBtj': 'string',
        'fGiCQ': function (_0x19739f, _0x3ff48a) {
            return _0x19739f === _0x3ff48a;
        },
        'ZKONc': 'Error:\x20Uncaught\x20[',
        'RNwYa': 'The\x20above\x20error\x20occurred',
        'hvjev': function (_0x24168f, _0x4a92b5) {
            return _0x24168f !== _0x4a92b5;
        },
        'nnSdN': 'ReactDOM.render\x20is\x20no\x20longer\x20supported\x20in\x20React\x2018',
        'LtcvG': 'ReactDOM.hydrate\x20is\x20no\x20longer\x20supported\x20in\x20React\x2018',
        'FlxZU': function (_0x2e1dee, _0x1f2fdb) {
            return _0x2e1dee != _0x1f2fdb;
        },
        'fvGAN': function (_0x4120c3, _0x39b8ef) {
            return _0x4120c3 === _0x39b8ef;
        }
    };
    if (__DEV__) {
        if (_0x442200['nKfpz'](typeof _0x6bf007, _0x442200['vdBtj'])) {
            if (_0x442200['fGiCQ'](_0x6bf007['indexOf'](_0x442200['ZKONc']), 0x0))
                return !![];
            if (_0x442200['fGiCQ'](_0x6bf007['indexOf'](_0x442200['RNwYa']), 0x0))
                return !![];
            if (_0x442200['hvjev'](_0x6bf007['indexOf'](_0x442200['nnSdN']), -0x1) || _0x442200['hvjev'](_0x6bf007['indexOf'](_0x442200['LtcvG']), -0x1))
                return !![];
        }
    } else {
        if (_0x442200['FlxZU'](_0x6bf007, null) && _0x442200['fGiCQ'](typeof _0x6bf007['message'], _0x442200['vdBtj']) && _0x442200['fGiCQ'](typeof _0x6bf007['stack'], _0x442200['vdBtj']) && _0x442200['fvGAN'](_0x203b8e['length'], 0x0))
            return !![];
    }
    return ![];
};
