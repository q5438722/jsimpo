import _0x308ff6 from 'wrap-ansi';
import _0x39ae85 from 'chalk';
import _0x49dfcf from 'boxen';
import { maxCharsPerLine } from './constants';
export function indent(_0x5ccd99, _0x2091d4 = '\x20') {
    return _0x2091d4['repeat'](_0x5ccd99);
}
export function indentLines(_0x220bee, _0x342cf6, _0x5b2c45) {
    const _0x3be89c = {
            'AHPGG': function (_0x21a642, _0x8c75f9) {
                return _0x21a642(_0x8c75f9);
            },
            'mZFtk': function (_0x3ef95e, _0x2f92c1) {
                return _0x3ef95e === _0x2f92c1;
            },
            'NqkQc': function (_0x14ca10, _0x2bbba3) {
                return _0x14ca10 + _0x2bbba3;
            },
            'wPxaU': function (_0x4707fc, _0x325f6c) {
                return _0x4707fc + _0x325f6c;
            }
        }, _0x291acc = Array['isArray'](_0x220bee) ? _0x220bee : _0x220bee['split']('\x0a');
    let _0x43902a = '';
    if (_0x291acc['length']) {
        const _0x5c880e = _0x3be89c['AHPGG'](indent, _0x3be89c['mZFtk'](_0x5b2c45, undefined) ? _0x342cf6 : _0x5b2c45);
        _0x43902a = _0x3be89c['NqkQc'](_0x5c880e, _0x291acc['shift']());
    }
    if (_0x291acc['length']) {
        const _0x3a845f = _0x3be89c['AHPGG'](indent, _0x342cf6);
        _0x43902a += _0x3be89c['wPxaU']('\x0a', _0x291acc['map'](_0x50e436 => _0x3a845f + _0x50e436)['join']('\x0a'));
    }
    return _0x43902a;
}
export function foldLines(_0x1753b3, _0x269ad3, _0xce2ceb, _0x313a56 = maxCharsPerLine()) {
    const _0x1ed95a = {
        'EjjEY': function (_0x4be507, _0x3d4560, _0x4b745a, _0x4e0162) {
            return _0x4be507(_0x3d4560, _0x4b745a, _0x4e0162);
        },
        'Kuhbf': function (_0x20db52, _0x51c54e, _0x189363) {
            return _0x20db52(_0x51c54e, _0x189363);
        }
    };
    return _0x1ed95a['EjjEY'](indentLines, _0x1ed95a['Kuhbf'](_0x308ff6, _0x1753b3, _0x313a56), _0x269ad3, _0xce2ceb);
}
export function colorize(_0x161ef7) {
    return _0x161ef7['replace'](/\[[^ ]+]/g, _0x47db52 => _0x39ae85['grey'](_0x47db52))['replace'](/<[^ ]+>/g, _0x32dfa7 => _0x39ae85['green'](_0x32dfa7))['replace'](/ (-[-\w,]+)/g, _0x53cc65 => _0x39ae85['bold'](_0x53cc65))['replace'](/`([^`]+)`/g, (_0x24b2a5, _0x554c10) => _0x39ae85['bold']['cyan'](_0x554c10));
}
export function box(_0x429c54, _0x3b4e7c, _0x2316a1) {
    const _0x2345ee = {
        'zxjzP': function (_0x4ae60a, _0x28843d) {
            return _0x4ae60a + _0x28843d;
        },
        'TKxNT': function (_0x58a6dc, _0x56365f, _0x3498bb) {
            return _0x58a6dc(_0x56365f, _0x3498bb);
        },
        'UhjLa': 'Nuxt\x20Message',
        'MQamc': function (_0x190886, _0x5b00cc, _0x24894b, _0xa77347, _0x1ccdb9) {
            return _0x190886(_0x5b00cc, _0x24894b, _0xa77347, _0x1ccdb9);
        },
        'VIGAi': function (_0x1ee597) {
            return _0x1ee597();
        },
        'FeUGn': 'white',
        'tCIsl': 'round'
    };
    return _0x2345ee['zxjzP'](_0x2345ee['TKxNT'](_0x49dfcf, [
        _0x3b4e7c || _0x39ae85['white'](_0x2345ee['UhjLa']),
        '',
        _0x39ae85['white'](_0x2345ee['MQamc'](foldLines, _0x429c54, 0x0, 0x0, _0x2345ee['VIGAi'](maxCharsPerLine)))
    ]['join']('\x0a'), Object['assign']({
        'borderColor': _0x2345ee['FeUGn'],
        'borderStyle': _0x2345ee['tCIsl'],
        'padding': 0x1,
        'margin': 0x1
    }, _0x2316a1)), '\x0a');
}
export function successBox(_0xb30fb1, _0x5d5465) {
    const _0x2cd70e = {
        'cDHwy': function (_0x2459af, _0x88af05, _0x3450d4, _0x1dc8e3) {
            return _0x2459af(_0x88af05, _0x3450d4, _0x1dc8e3);
        },
        'vKZqt': '✔\x20Nuxt\x20Success',
        'hVTsU': 'green'
    };
    return _0x2cd70e['cDHwy'](box, _0xb30fb1, _0x5d5465 || _0x39ae85['green'](_0x2cd70e['vKZqt']), { 'borderColor': _0x2cd70e['hVTsU'] });
}
export function warningBox(_0x4ed73c, _0x507148) {
    const _0x8a6917 = {
        'nlfCu': function (_0x45ede9, _0x55c79d, _0x26bf88, _0x5ca3ec) {
            return _0x45ede9(_0x55c79d, _0x26bf88, _0x5ca3ec);
        },
        'LBodv': '⚠\x20Nuxt\x20Warning',
        'BcQMX': 'yellow'
    };
    return _0x8a6917['nlfCu'](box, _0x4ed73c, _0x507148 || _0x39ae85['yellow'](_0x8a6917['LBodv']), { 'borderColor': _0x8a6917['BcQMX'] });
}
export function errorBox(_0x1fd66f, _0x3a5033) {
    const _0x2a3255 = {
        'YKifL': function (_0x148e7c, _0x559c45, _0x40785d, _0x43c493) {
            return _0x148e7c(_0x559c45, _0x40785d, _0x43c493);
        },
        'vmQfE': '✖\x20Nuxt\x20Error',
        'LZABq': 'red'
    };
    return _0x2a3255['YKifL'](box, _0x1fd66f, _0x3a5033 || _0x39ae85['red'](_0x2a3255['vmQfE']), { 'borderColor': _0x2a3255['LZABq'] });
}
export function fatalBox(_0x22a381, _0x2c23f5) {
    const _0x1b4681 = {
        'zBDlV': function (_0xb9f26, _0xfb450f, _0x47b0a5) {
            return _0xb9f26(_0xfb450f, _0x47b0a5);
        },
        'zwoBx': '✖\x20Nuxt\x20Fatal\x20Error'
    };
    return _0x1b4681['zBDlV'](errorBox, _0x22a381, _0x2c23f5 || _0x39ae85['red'](_0x1b4681['zwoBx']));
}
