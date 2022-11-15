'use strict';
const {expect} = require('chai'), resolveMeta = require('../../../../../lib/configuration/variables/resolve-meta'), isPropertyResolved = require('../../../../../lib/configuration/variables/is-property-resolved');
describe('test/unit/lib/configuration/variables/is-property-resolved.test.js', () => {
    const _0x39e1a9 = {
        'QpKJy': function (_0x26b6a9, _0x372dd7) {
            return _0x26b6a9(_0x372dd7);
        },
        'exjHK': '${a:}',
        'fyVXO': 'foo',
        'BDjFH': function (_0x4d5074, _0xbf676, _0x536886) {
            return _0x4d5074(_0xbf676, _0x536886);
        },
        'iHHpk': 'root',
        'TMCTE': function (_0x127374, _0x58ffc3) {
            return _0x127374(_0x58ffc3);
        },
        'btIIS': 'childParent\x00child',
        'NgiGt': 'childParent',
        'GQbMc': 'parent\x00parentChild',
        'MUqQH': function (_0x3af20e, _0x2be636, _0x3b98e2) {
            return _0x3af20e(_0x2be636, _0x3b98e2);
        },
        'YSZzu': 'rooto',
        'PIRdm': function (_0x43ec78, _0xafc46c, _0x3976ff) {
            return _0x43ec78(_0xafc46c, _0x3976ff);
        },
        'ETIog': 'childParent\x00ok',
        'GPkma': function (_0x524f9c, _0x4b8014) {
            return _0x524f9c(_0x4b8014);
        },
        'ItYJw': function (_0x50dd89, _0x20fb8c, _0x439d4b) {
            return _0x50dd89(_0x20fb8c, _0x439d4b);
        },
        'ZKVVp': 'elo',
        'tvwdN': 'childParent\x00none',
        'rHytf': function (_0x682b9f, _0xa20687) {
            return _0x682b9f(_0xa20687);
        },
        'ZviUU': function (_0x3740fc, _0x43d5d5, _0xae4e24) {
            return _0x3740fc(_0x43d5d5, _0xae4e24);
        },
        'olIYL': 'should\x20match\x20property\x20directly',
        'HVyMu': 'should\x20match\x20if\x20children\x20are\x20behind\x20variables',
        'fJioB': 'should\x20match\x20if\x20parent\x20is\x20behind\x20variables',
        'YoetN': 'should\x20not\x20match\x20not\x20affected',
        'rDpWd': function (_0x5a6ad3, _0x50f246, _0x2ca766) {
            return _0x5a6ad3(_0x50f246, _0x2ca766);
        },
        'hbKct': 'should\x20not\x20match\x20not\x20existing'
    };
    let _0x2a6337;
    _0x39e1a9['rHytf'](before, () => {
        _0x2a6337 = _0x39e1a9['QpKJy'](resolveMeta, {
            'root': _0x39e1a9['exjHK'],
            'childParent': {
                'child': _0x39e1a9['exjHK'],
                'ok': !![]
            },
            'parent': _0x39e1a9['exjHK'],
            'rooto': _0x39e1a9['fyVXO']
        });
    }), _0x39e1a9['ZviUU'](it, _0x39e1a9['olIYL'], () => {
        _0x39e1a9['QpKJy'](expect, _0x39e1a9['BDjFH'](isPropertyResolved, _0x2a6337, _0x39e1a9['iHHpk']))['to']['be']['false'], _0x39e1a9['TMCTE'](expect, _0x39e1a9['BDjFH'](isPropertyResolved, _0x2a6337, _0x39e1a9['btIIS']))['to']['be']['false'];
    }), _0x39e1a9['ZviUU'](it, _0x39e1a9['HVyMu'], () => {
        _0x39e1a9['TMCTE'](expect, _0x39e1a9['BDjFH'](isPropertyResolved, _0x2a6337, _0x39e1a9['NgiGt']))['to']['be']['false'];
    }), _0x39e1a9['ZviUU'](it, _0x39e1a9['fJioB'], () => {
        _0x39e1a9['TMCTE'](expect, _0x39e1a9['BDjFH'](isPropertyResolved, _0x2a6337, _0x39e1a9['GQbMc']))['to']['be']['false'];
    }), _0x39e1a9['ZviUU'](it, _0x39e1a9['YoetN'], () => {
        _0x39e1a9['TMCTE'](expect, _0x39e1a9['MUqQH'](isPropertyResolved, _0x2a6337, _0x39e1a9['YSZzu']))['to']['be']['true'], _0x39e1a9['TMCTE'](expect, _0x39e1a9['PIRdm'](isPropertyResolved, _0x2a6337, _0x39e1a9['ETIog']))['to']['be']['true'];
    }), _0x39e1a9['rDpWd'](it, _0x39e1a9['hbKct'], () => {
        _0x39e1a9['GPkma'](expect, _0x39e1a9['ItYJw'](isPropertyResolved, _0x2a6337, _0x39e1a9['ZKVVp']))['to']['be']['true'], _0x39e1a9['GPkma'](expect, _0x39e1a9['ItYJw'](isPropertyResolved, _0x2a6337, _0x39e1a9['tvwdN']))['to']['be']['true'];
    });
});
