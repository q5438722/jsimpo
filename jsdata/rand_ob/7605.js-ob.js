const _0x3bb6 = [
    'toEqual',
    'toMatch',
    'YmILH',
    'dalko',
    '<div\x20style=\x22\x22></div>',
    'GmSeq',
    'ScGeV',
    'ajlbu',
    '<div\x20style=\x22a:\x20x;\x20b:\x20y;\x22></div>',
    'gSZaQ',
    'dCBRG',
    'staticStyle:{a:\x22x\x22,b:\x22y\x22}',
    'Dlkgr',
    'IUYPj',
    'LqrFC',
    'nlJTv',
    'ziKrH',
    'staticStyle:{AbcDef:\x22x-y\x22,abcDef:\x22x-y\x22}',
    'dCKsF',
    'pKydp',
    'SvAqh',
    'UozqP',
    'b:\x20{{y}}',
    'TQTGm',
    'v-bind',
    'uXXOx',
    '<div\x20v-bind:style=\x22[a,\x20b,\x20c]\x22></div>',
    'style:[a,\x20b,\x20c]',
    'BPEwk',
    'mGEMU',
    'oJrWU',
    'jtLHk',
    'style:x',
    'sbqCD',
    '103483MVCfRd',
    '5XrpTFR',
    '806667eDNzEH',
    '1vakcZv',
    '396883rLhLbW',
    '205502CqHGCl',
    '1dONGvX',
    '437545OFKPAx',
    '61wpDTnc',
    '15674HagAcT',
    '834838tzANtx',
    'should\x20compile\x20hyphenated\x20style\x20name\x20&\x20value',
    'should\x20compile\x20dynamic\x20style',
    'should\x20compile\x20style\x20binding\x20of\x20array',
    'should\x20compile\x20style\x20binding\x20of\x20a\x20variable',
    'should\x20compile\x20style\x20binding\x20by\x20shorthand',
    'ToveL',
    'VDWWP',
    '<div\x20style=\x22a:\x20x;\x20b:\x20y\x22></div>',
    'cGGWe',
    'not',
    'toBeUndefined',
    'qiSBJ',
    'length'
];
function _0x4ef2(_0x4a1642, _0x7d7468) {
    return _0x4ef2 = function (_0xe599e2, _0xbe4474) {
        _0xe599e2 = _0xe599e2 - (0x2f5 * -0x1 + -0x16d3 + 0x1a33);
        let _0x1cd543 = _0x3bb6[_0xe599e2];
        return _0x1cd543;
    }, _0x4ef2(_0x4a1642, _0x7d7468);
}
(function (_0xfe4f5c, _0x4cd002) {
    const _0x11eaf3 = _0x4ef2;
    while (!![]) {
        try {
            const _0xfdc993 = -parseInt(_0x11eaf3(0x6b)) * -parseInt(_0x11eaf3(0x6c)) + parseInt(_0x11eaf3(0x6d)) + parseInt(_0x11eaf3(0x6e)) * -parseInt(_0x11eaf3(0x6f)) + parseInt(_0x11eaf3(0x70)) + parseInt(_0x11eaf3(0x71)) * -parseInt(_0x11eaf3(0x72)) + -parseInt(_0x11eaf3(0x73)) * parseInt(_0x11eaf3(0x74)) + parseInt(_0x11eaf3(0x75));
            if (_0xfdc993 === _0x4cd002)
                break;
            else
                _0xfe4f5c['push'](_0xfe4f5c['shift']());
        } catch (_0x3ef652) {
            _0xfe4f5c['push'](_0xfe4f5c['shift']());
        }
    }
}(_0x3bb6, 0x1141ca + -0xa057 * 0x11 + 0x225b5));
import { compile } from '../../../packages/weex-template-compiler';
import { strToRegExp } from '../helpers/index';
describe('compile\x20style', () => {
    const _0x47dca4 = _0x4ef2, _0xce3841 = {
            'VDWWP': function (_0x21aaae, _0x1c7496) {
                return _0x21aaae(_0x1c7496);
            },
            'cGGWe': function (_0x3b269e, _0x949652) {
                return _0x3b269e(_0x949652);
            },
            'qiSBJ': function (_0xa434a4, _0x1433ed) {
                return _0xa434a4(_0x1433ed);
            },
            'YmILH': function (_0x1e8521, _0x3e4922) {
                return _0x1e8521(_0x3e4922);
            },
            'GmSeq': function (_0x31e149, _0x8c6ec) {
                return _0x31e149(_0x8c6ec);
            },
            'ScGeV': function (_0x34d4f2, _0x4d3d52) {
                return _0x34d4f2(_0x4d3d52);
            },
            'ajlbu': function (_0x20d2f4, _0x306f1f) {
                return _0x20d2f4(_0x306f1f);
            },
            'VWnyB': function (_0x369f0a, _0x2d15e5) {
                return _0x369f0a(_0x2d15e5);
            },
            'gSZaQ': function (_0x59b4a7, _0x9cd54a) {
                return _0x59b4a7(_0x9cd54a);
            },
            'dCBRG': function (_0x182d6d, _0x619772) {
                return _0x182d6d(_0x619772);
            },
            'Dlkgr': function (_0x22a4ab, _0x56d0f2) {
                return _0x22a4ab(_0x56d0f2);
            },
            'nlJTv': function (_0x241631, _0x4b6958) {
                return _0x241631(_0x4b6958);
            },
            'ziKrH': function (_0x45036c, _0x4e47fa) {
                return _0x45036c(_0x4e47fa);
            },
            'pKydp': function (_0x1b351e, _0x2d0834) {
                return _0x1b351e(_0x2d0834);
            },
            'SvAqh': function (_0x3acfc7, _0x55598b) {
                return _0x3acfc7(_0x55598b);
            },
            'UozqP': function (_0x2eb83a, _0x5b2e5f) {
                return _0x2eb83a(_0x5b2e5f);
            },
            'TQTGm': function (_0x7de242, _0x52f526) {
                return _0x7de242(_0x52f526);
            },
            'uXXOx': function (_0x56898f, _0x336962) {
                return _0x56898f(_0x336962);
            },
            'AEzSj': function (_0x290ea0, _0x2988d7) {
                return _0x290ea0(_0x2988d7);
            },
            'mGEMU': function (_0x218f2b, _0x201b74) {
                return _0x218f2b(_0x201b74);
            },
            'jtLHk': function (_0x308119, _0x291ed2) {
                return _0x308119(_0x291ed2);
            },
            'ToveL': 'should\x20be\x20compiled',
            'dalko': function (_0x1dbfb8, _0x4c694c, _0x3874bf) {
                return _0x1dbfb8(_0x4c694c, _0x3874bf);
            },
            'gpIyo': 'should\x20compile\x20empty\x20style\x20value',
            'WOeeJ': 'should\x20compile\x20style\x20value\x20with\x20trailing\x20semicolon',
            'IUYPj': function (_0x2b6d5f, _0x5e22fc, _0x591396) {
                return _0x2b6d5f(_0x5e22fc, _0x591396);
            },
            'LqrFC': _0x47dca4(0x76),
            'dCKsF': _0x47dca4(0x77),
            'IWyil': _0x47dca4(0x78),
            'BPEwk': function (_0x28549e, _0x56a0e6, _0x3098ec) {
                return _0x28549e(_0x56a0e6, _0x3098ec);
            },
            'oJrWU': _0x47dca4(0x79),
            'sbqCD': _0x47dca4(0x7a)
        };
    it(_0xce3841[_0x47dca4(0x7b)], () => {
        const _0x43a0ad = _0x47dca4, {
                render: _0x4dad13,
                staticRenderFns: _0x1ec022,
                errors: _0x5c17ac
            } = _0xce3841[_0x43a0ad(0x7c)](compile, _0x43a0ad(0x7d));
        _0xce3841[_0x43a0ad(0x7e)](expect, _0x4dad13)[_0x43a0ad(0x7f)][_0x43a0ad(0x80)](), _0xce3841[_0x43a0ad(0x81)](expect, _0x1ec022)['not'][_0x43a0ad(0x80)](), _0xce3841[_0x43a0ad(0x81)](expect, _0x1ec022[_0x43a0ad(0x82)])[_0x43a0ad(0x83)](0x1 * -0x12e9 + 0x2201 + 0x1c * -0x8a), _0xce3841[_0x43a0ad(0x81)](expect, _0x4dad13)[_0x43a0ad(0x84)](_0xce3841[_0x43a0ad(0x85)](strToRegExp, 'staticStyle:{a:\x22x\x22,b:\x22y\x22}')), _0xce3841['YmILH'](expect, _0x5c17ac)['toEqual']([]);
    }), _0xce3841[_0x47dca4(0x86)](it, _0xce3841['gpIyo'], () => {
        const _0x4e4330 = _0x47dca4, {
                render: _0x322351,
                staticRenderFns: _0x47dfa6,
                errors: _0xeb1423
            } = _0xce3841[_0x4e4330(0x85)](compile, _0x4e4330(0x87));
        _0xce3841[_0x4e4330(0x88)](expect, _0x322351)['not'][_0x4e4330(0x80)](), expect(_0x47dfa6)[_0x4e4330(0x7f)][_0x4e4330(0x80)](), _0xce3841[_0x4e4330(0x89)](expect, _0x47dfa6[_0x4e4330(0x82)])[_0x4e4330(0x83)](-0x2645 * -0x1 + 0x11e7 + -0x4 * 0xe0b), _0xce3841[_0x4e4330(0x8a)](expect, _0x322351)[_0x4e4330(0x84)](/[(^style|^staticStyle)]/), expect(_0xeb1423)[_0x4e4330(0x83)]([]);
    }), _0xce3841[_0x47dca4(0x86)](it, _0xce3841['WOeeJ'], () => {
        const _0x25985c = _0x47dca4, {
                render: _0x4e1acd,
                staticRenderFns: _0x32a927,
                errors: _0x293ef4
            } = _0xce3841[_0x25985c(0x8a)](compile, _0x25985c(0x8b));
        _0xce3841[_0x25985c(0x8a)](expect, _0x4e1acd)[_0x25985c(0x7f)][_0x25985c(0x80)](), expect(_0x32a927)['not'][_0x25985c(0x80)](), _0xce3841['VWnyB'](expect, _0x32a927['length'])[_0x25985c(0x83)](-0x20ec + -0x1 * 0xfd3 + -0x30bf * -0x1), _0xce3841[_0x25985c(0x8c)](expect, _0x4e1acd)[_0x25985c(0x84)](_0xce3841[_0x25985c(0x8d)](strToRegExp, _0x25985c(0x8e))), _0xce3841[_0x25985c(0x8f)](expect, _0x293ef4)[_0x25985c(0x83)]([]);
    }), _0xce3841[_0x47dca4(0x90)](it, _0xce3841[_0x47dca4(0x91)], () => {
        const _0x45e50c = _0x47dca4, {
                render: _0x3eabd4,
                staticRenderFns: _0x1961aa,
                errors: _0x11dde3
            } = _0xce3841[_0x45e50c(0x92)](compile, '<div\x20style=\x22-abc-def:\x20x-y;\x20abc-def:\x20x-y\x22></div>');
        expect(_0x3eabd4)[_0x45e50c(0x7f)][_0x45e50c(0x80)](), _0xce3841['ziKrH'](expect, _0x1961aa)['not'][_0x45e50c(0x80)](), _0xce3841[_0x45e50c(0x93)](expect, _0x1961aa[_0x45e50c(0x82)])[_0x45e50c(0x83)](0x1ef7 + 0x1 * 0x1046 + -0x2f3d), _0xce3841[_0x45e50c(0x93)](expect, _0x3eabd4)[_0x45e50c(0x84)](_0xce3841[_0x45e50c(0x93)](strToRegExp, _0x45e50c(0x94))), _0xce3841['ziKrH'](expect, _0x11dde3)[_0x45e50c(0x83)]([]);
    }), _0xce3841[_0x47dca4(0x90)](it, _0xce3841[_0x47dca4(0x95)], () => {
        const _0x2d5c68 = _0x47dca4, {
                render: _0x2fccd3,
                staticRenderFns: _0x159d5e,
                errors: _0x41defa
            } = _0xce3841['pKydp'](compile, '<div\x20style=\x22a:\x20x;\x20b:\x20{{y}}\x22></div>');
        _0xce3841[_0x2d5c68(0x96)](expect, _0x2fccd3)['not'][_0x2d5c68(0x80)](), _0xce3841[_0x2d5c68(0x96)](expect, _0x159d5e)[_0x2d5c68(0x83)]([]), expect(_0x2fccd3)['toMatch'](strToRegExp('style:{a:\x22x\x22,b:_s(y)}')), _0xce3841[_0x2d5c68(0x97)](expect, _0x41defa)[_0x2d5c68(0x7f)][_0x2d5c68(0x80)](), _0xce3841['UozqP'](expect, _0x41defa['length'])[_0x2d5c68(0x83)](-0x10 * -0x9 + -0xc72 + 0xbe3), expect(_0x41defa[0x13 * 0x1db + -0x52 * 0x34 + -0x1299])['toMatch'](_0xce3841[_0x2d5c68(0x98)](strToRegExp, _0x2d5c68(0x99))), _0xce3841[_0x2d5c68(0x98)](expect, _0x41defa[-0x5f3 * 0x2 + 0x1a76 + 0xe90 * -0x1])[_0x2d5c68(0x84)](_0xce3841[_0x2d5c68(0x9a)](strToRegExp, _0x2d5c68(0x9b)));
    }), _0xce3841[_0x47dca4(0x90)](it, _0xce3841['IWyil'], () => {
        const _0x26b31b = _0x47dca4, {
                render: _0x122494,
                staticRenderFns: _0x30b7ae,
                errors: _0x1f8da3
            } = _0xce3841[_0x26b31b(0x9c)](compile, _0x26b31b(0x9d));
        _0xce3841[_0x26b31b(0x9c)](expect, _0x122494)[_0x26b31b(0x7f)][_0x26b31b(0x80)](), _0xce3841[_0x26b31b(0x9c)](expect, _0x30b7ae)[_0x26b31b(0x83)]([]), _0xce3841[_0x26b31b(0x9c)](expect, _0x122494)['toMatch'](_0xce3841[_0x26b31b(0x9c)](strToRegExp, _0x26b31b(0x9e))), _0xce3841['AEzSj'](expect, _0x1f8da3)[_0x26b31b(0x83)]([]);
    }), _0xce3841[_0x47dca4(0x9f)](it, 'should\x20compile\x20style\x20binding\x20of\x20map', () => {
        const _0x10a8a0 = _0x47dca4, {
                render: _0x4da8fb,
                staticRenderFns: _0x55475f,
                errors: _0x3303a0
            } = _0xce3841[_0x10a8a0(0xa0)](compile, '<div\x20v-bind:style=\x22{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}\x22></div>');
        _0xce3841[_0x10a8a0(0xa0)](expect, _0x4da8fb)[_0x10a8a0(0x7f)]['toBeUndefined'](), expect(_0x55475f)[_0x10a8a0(0x83)]([]), _0xce3841[_0x10a8a0(0xa0)](expect, _0x4da8fb)[_0x10a8a0(0x84)](strToRegExp('style:{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}')), expect(_0x3303a0)[_0x10a8a0(0x83)]([]);
    }), it(_0xce3841[_0x47dca4(0xa1)], () => {
        const _0x31d9f9 = _0x47dca4, {
                render: _0x17a8be,
                staticRenderFns: _0x1c93f7,
                errors: _0x21430d
            } = _0xce3841[_0x31d9f9(0xa0)](compile, '<div\x20v-bind:style=\x22x\x22></div>');
        expect(_0x17a8be)['not'][_0x31d9f9(0x80)](), _0xce3841[_0x31d9f9(0xa2)](expect, _0x1c93f7)[_0x31d9f9(0x83)]([]), expect(_0x17a8be)['toMatch'](_0xce3841['jtLHk'](strToRegExp, _0x31d9f9(0xa3))), _0xce3841['jtLHk'](expect, _0x21430d)['toEqual']([]);
    }), it(_0xce3841[_0x47dca4(0xa4)], () => {
        const _0x2f57f0 = _0x47dca4, {
                render: _0x452a2b,
                staticRenderFns: _0xbfe71d,
                errors: _0x21bacc
            } = compile('<div\x20:style=\x22[a,\x20b,\x20c]\x22></div>');
        _0xce3841['jtLHk'](expect, _0x452a2b)['not']['toBeUndefined'](), expect(_0xbfe71d)[_0x2f57f0(0x83)]([]), _0xce3841['jtLHk'](expect, _0x452a2b)[_0x2f57f0(0x84)](strToRegExp(_0x2f57f0(0x9e))), expect(_0x21bacc)['toEqual']([]);
    });
});
