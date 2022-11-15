import { compile } from '../../../packages/weex-template-compiler';
import { strToRegExp } from '../helpers/index';
describe('compile\x20style', () => {
    const _0x278ab3 = {
        'NZIOF': function (_0x3d46ee, _0x12c910) {
            return _0x3d46ee(_0x12c910);
        },
        'IkElY': function (_0xf4f421, _0x23cd55) {
            return _0xf4f421(_0x23cd55);
        },
        'DpREn': function (_0x2a1349, _0x2d5954) {
            return _0x2a1349(_0x2d5954);
        },
        'wnrfV': function (_0x1c1c93, _0x308414) {
            return _0x1c1c93(_0x308414);
        },
        'CfHYF': function (_0x1c8eec, _0x23512d) {
            return _0x1c8eec(_0x23512d);
        },
        'dpEvU': function (_0xaa9fe4, _0x5ecde4) {
            return _0xaa9fe4(_0x5ecde4);
        },
        'UGNeh': function (_0x35dbe3, _0x408527) {
            return _0x35dbe3(_0x408527);
        },
        'DNipJ': function (_0x1300a0, _0x321a2f) {
            return _0x1300a0(_0x321a2f);
        },
        'GUHop': function (_0x560769, _0x181ccb) {
            return _0x560769(_0x181ccb);
        },
        'JNThy': function (_0x249812, _0x370c8d) {
            return _0x249812(_0x370c8d);
        },
        'ivpUB': function (_0x3d514d, _0x5cc079) {
            return _0x3d514d(_0x5cc079);
        },
        'ZGfXA': function (_0x2552cc, _0x52ec2f) {
            return _0x2552cc(_0x52ec2f);
        },
        'hIoao': function (_0x4b5935, _0x5e5d3b) {
            return _0x4b5935(_0x5e5d3b);
        },
        'fimoa': function (_0x427723, _0x3573e7) {
            return _0x427723(_0x3573e7);
        },
        'IxxxU': function (_0x10e0b5, _0x4b20e2) {
            return _0x10e0b5(_0x4b20e2);
        },
        'nYMHA': function (_0x573dda, _0x39c4af) {
            return _0x573dda(_0x39c4af);
        },
        'WExEK': function (_0x26ade0, _0x373115) {
            return _0x26ade0(_0x373115);
        },
        'AqfrH': function (_0xf46a9f, _0x46a1c3) {
            return _0xf46a9f(_0x46a1c3);
        },
        'xMAwE': function (_0x2b337f, _0xb14464) {
            return _0x2b337f(_0xb14464);
        },
        'gsxFf': function (_0x437d6b, _0x13f8a3) {
            return _0x437d6b(_0x13f8a3);
        },
        'WRASO': function (_0x4585e2, _0x5dc0a5) {
            return _0x4585e2(_0x5dc0a5);
        },
        'dAFDs': function (_0x364695, _0x37dfdb) {
            return _0x364695(_0x37dfdb);
        },
        'JMyuD': function (_0x8028a2, _0x2745dd) {
            return _0x8028a2(_0x2745dd);
        },
        'gBrMY': function (_0x50cf9f, _0x5cc2d6) {
            return _0x50cf9f(_0x5cc2d6);
        },
        'ZOfQc': function (_0x1ca262, _0xfe65d1) {
            return _0x1ca262(_0xfe65d1);
        },
        'cQnYp': function (_0x55edf5, _0x39fe8d) {
            return _0x55edf5(_0x39fe8d);
        },
        'yFnoa': function (_0x20ce4e, _0xa35b66) {
            return _0x20ce4e(_0xa35b66);
        },
        'qjrdn': function (_0x3d0405, _0x3d9468) {
            return _0x3d0405(_0x3d9468);
        },
        'IWsof': function (_0x1ba296, _0x396310) {
            return _0x1ba296(_0x396310);
        },
        'LFTZl': function (_0x589907, _0xe3a1be, _0x837ada) {
            return _0x589907(_0xe3a1be, _0x837ada);
        },
        'tYHLl': 'should\x20be\x20compiled',
        'dSKSe': 'should\x20compile\x20empty\x20style\x20value',
        'mrstH': function (_0x458de7, _0x1631fd, _0x51e5c3) {
            return _0x458de7(_0x1631fd, _0x51e5c3);
        },
        'EsEBK': 'should\x20compile\x20style\x20value\x20with\x20trailing\x20semicolon',
        'eJpAg': function (_0x344ba8, _0x226fa7, _0x33ef4f) {
            return _0x344ba8(_0x226fa7, _0x33ef4f);
        },
        'EnUWF': 'should\x20compile\x20hyphenated\x20style\x20name\x20&\x20value',
        'umiKV': function (_0x30d308, _0x5b7de7, _0x2d0132) {
            return _0x30d308(_0x5b7de7, _0x2d0132);
        },
        'XtXSo': 'should\x20compile\x20dynamic\x20style',
        'zJhAx': 'should\x20compile\x20style\x20binding\x20of\x20array',
        'dMOUh': function (_0x212c75, _0x17c6ef, _0x4221ab) {
            return _0x212c75(_0x17c6ef, _0x4221ab);
        },
        'UvhWX': 'should\x20compile\x20style\x20binding\x20of\x20map',
        'hqdgq': function (_0x5f2cdf, _0x1e83f0, _0x3ecb2b) {
            return _0x5f2cdf(_0x1e83f0, _0x3ecb2b);
        },
        'puWYO': 'should\x20compile\x20style\x20binding\x20of\x20a\x20variable',
        'aLlsR': 'should\x20compile\x20style\x20binding\x20by\x20shorthand'
    };
    _0x278ab3['LFTZl'](it, _0x278ab3['tYHLl'], () => {
        const {
            render: _0x2a6272,
            staticRenderFns: _0x3de4bd,
            errors: _0x287a76
        } = _0x278ab3['NZIOF'](compile, '<div\x20style=\x22a:\x20x;\x20b:\x20y\x22></div>');
        _0x278ab3['NZIOF'](expect, _0x2a6272)['not']['toBeUndefined'](), _0x278ab3['IkElY'](expect, _0x3de4bd)['not']['toBeUndefined'](), _0x278ab3['DpREn'](expect, _0x3de4bd['length'])['toEqual'](0x0), _0x278ab3['wnrfV'](expect, _0x2a6272)['toMatch'](_0x278ab3['wnrfV'](strToRegExp, 'staticStyle:{a:\x22x\x22,b:\x22y\x22}')), _0x278ab3['CfHYF'](expect, _0x287a76)['toEqual']([]);
    }), _0x278ab3['LFTZl'](it, _0x278ab3['dSKSe'], () => {
        const {
            render: _0x40071d,
            staticRenderFns: _0x1c0ef4,
            errors: _0x42e267
        } = _0x278ab3['CfHYF'](compile, '<div\x20style=\x22\x22></div>');
        _0x278ab3['dpEvU'](expect, _0x40071d)['not']['toBeUndefined'](), _0x278ab3['dpEvU'](expect, _0x1c0ef4)['not']['toBeUndefined'](), _0x278ab3['dpEvU'](expect, _0x1c0ef4['length'])['toEqual'](0x0), _0x278ab3['dpEvU'](expect, _0x40071d)['toMatch'](/[(^style|^staticStyle)]/), _0x278ab3['dpEvU'](expect, _0x42e267)['toEqual']([]);
    }), _0x278ab3['mrstH'](it, _0x278ab3['EsEBK'], () => {
        const {
            render: _0x47fde3,
            staticRenderFns: _0x4f42b1,
            errors: _0x1919f6
        } = _0x278ab3['dpEvU'](compile, '<div\x20style=\x22a:\x20x;\x20b:\x20y;\x22></div>');
        _0x278ab3['UGNeh'](expect, _0x47fde3)['not']['toBeUndefined'](), _0x278ab3['UGNeh'](expect, _0x4f42b1)['not']['toBeUndefined'](), _0x278ab3['UGNeh'](expect, _0x4f42b1['length'])['toEqual'](0x0), _0x278ab3['DNipJ'](expect, _0x47fde3)['toMatch'](_0x278ab3['DNipJ'](strToRegExp, 'staticStyle:{a:\x22x\x22,b:\x22y\x22}')), _0x278ab3['DNipJ'](expect, _0x1919f6)['toEqual']([]);
    }), _0x278ab3['eJpAg'](it, _0x278ab3['EnUWF'], () => {
        const {
            render: _0x57562b,
            staticRenderFns: _0x315494,
            errors: _0xc2147d
        } = _0x278ab3['GUHop'](compile, '<div\x20style=\x22-abc-def:\x20x-y;\x20abc-def:\x20x-y\x22></div>');
        _0x278ab3['GUHop'](expect, _0x57562b)['not']['toBeUndefined'](), _0x278ab3['GUHop'](expect, _0x315494)['not']['toBeUndefined'](), _0x278ab3['JNThy'](expect, _0x315494['length'])['toEqual'](0x0), _0x278ab3['ivpUB'](expect, _0x57562b)['toMatch'](_0x278ab3['ivpUB'](strToRegExp, 'staticStyle:{AbcDef:\x22x-y\x22,abcDef:\x22x-y\x22}')), _0x278ab3['ZGfXA'](expect, _0xc2147d)['toEqual']([]);
    }), _0x278ab3['umiKV'](it, _0x278ab3['XtXSo'], () => {
        const {
            render: _0x391859,
            staticRenderFns: _0x26907c,
            errors: _0x26baae
        } = _0x278ab3['ZGfXA'](compile, '<div\x20style=\x22a:\x20x;\x20b:\x20{{y}}\x22></div>');
        _0x278ab3['hIoao'](expect, _0x391859)['not']['toBeUndefined'](), _0x278ab3['hIoao'](expect, _0x26907c)['toEqual']([]), _0x278ab3['fimoa'](expect, _0x391859)['toMatch'](_0x278ab3['fimoa'](strToRegExp, 'style:{a:\x22x\x22,b:_s(y)}')), _0x278ab3['fimoa'](expect, _0x26baae)['not']['toBeUndefined'](), _0x278ab3['fimoa'](expect, _0x26baae['length'])['toEqual'](0x1), _0x278ab3['IxxxU'](expect, _0x26baae[0x0])['toMatch'](_0x278ab3['nYMHA'](strToRegExp, 'b:\x20{{y}}')), _0x278ab3['WExEK'](expect, _0x26baae[0x0])['toMatch'](_0x278ab3['AqfrH'](strToRegExp, 'v-bind'));
    }), _0x278ab3['umiKV'](it, _0x278ab3['zJhAx'], () => {
        const {
            render: _0x560128,
            staticRenderFns: _0x6ee0f1,
            errors: _0x3f0e37
        } = _0x278ab3['xMAwE'](compile, '<div\x20v-bind:style=\x22[a,\x20b,\x20c]\x22></div>');
        _0x278ab3['xMAwE'](expect, _0x560128)['not']['toBeUndefined'](), _0x278ab3['gsxFf'](expect, _0x6ee0f1)['toEqual']([]), _0x278ab3['gsxFf'](expect, _0x560128)['toMatch'](_0x278ab3['WRASO'](strToRegExp, 'style:[a,\x20b,\x20c]')), _0x278ab3['dAFDs'](expect, _0x3f0e37)['toEqual']([]);
    }), _0x278ab3['dMOUh'](it, _0x278ab3['UvhWX'], () => {
        const {
            render: _0x521d90,
            staticRenderFns: _0x45fe0c,
            errors: _0x303a81
        } = _0x278ab3['dAFDs'](compile, '<div\x20v-bind:style=\x22{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}\x22></div>');
        _0x278ab3['JMyuD'](expect, _0x521d90)['not']['toBeUndefined'](), _0x278ab3['JMyuD'](expect, _0x45fe0c)['toEqual']([]), _0x278ab3['JMyuD'](expect, _0x521d90)['toMatch'](_0x278ab3['JMyuD'](strToRegExp, 'style:{\x20a:\x20x,\x20b:\x20\x27y\x27\x20+\x20z\x20}')), _0x278ab3['gBrMY'](expect, _0x303a81)['toEqual']([]);
    }), _0x278ab3['hqdgq'](it, _0x278ab3['puWYO'], () => {
        const {
            render: _0x70ed15,
            staticRenderFns: _0x145d1a,
            errors: _0x83e5c2
        } = _0x278ab3['gBrMY'](compile, '<div\x20v-bind:style=\x22x\x22></div>');
        _0x278ab3['ZOfQc'](expect, _0x70ed15)['not']['toBeUndefined'](), _0x278ab3['ZOfQc'](expect, _0x145d1a)['toEqual']([]), _0x278ab3['ZOfQc'](expect, _0x70ed15)['toMatch'](_0x278ab3['ZOfQc'](strToRegExp, 'style:x')), _0x278ab3['cQnYp'](expect, _0x83e5c2)['toEqual']([]);
    }), _0x278ab3['hqdgq'](it, _0x278ab3['aLlsR'], () => {
        const {
            render: _0x1b9ee7,
            staticRenderFns: _0x4c4370,
            errors: _0x3f478d
        } = _0x278ab3['yFnoa'](compile, '<div\x20:style=\x22[a,\x20b,\x20c]\x22></div>');
        _0x278ab3['yFnoa'](expect, _0x1b9ee7)['not']['toBeUndefined'](), _0x278ab3['qjrdn'](expect, _0x4c4370)['toEqual']([]), _0x278ab3['qjrdn'](expect, _0x1b9ee7)['toMatch'](_0x278ab3['qjrdn'](strToRegExp, 'style:[a,\x20b,\x20c]')), _0x278ab3['IWsof'](expect, _0x3f478d)['toEqual']([]);
    });
});
