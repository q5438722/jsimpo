'use strict';
const _0x3802 = [
    'OPmEi',
    'fSHIw',
    'WFCgc',
    'submit',
    'npexh',
    'newChoice',
    'choices',
    'some',
    'alert',
    'LCayB',
    'pwJgo',
    'base',
    '1369885OpzNUW',
    '34079jnaLQr',
    '33BSVOUN',
    '1475LWyAeP',
    '205hMjQzp',
    '2563kMFcod',
    '507jhvTQy',
    '27kDOmqu',
    '34566QkHNfd',
    '3239JahVGc',
    '331scSZEM',
    '86hAEjTI',
    '15121ZbnKfy',
    'prototype',
    'align',
    'options',
    'find',
    'emptyError',
    'dispatch',
    'parent',
    'editable',
    'append',
    'delete',
    'call',
    'space',
    'focused',
    'number',
    'next',
    'prev',
    'indicator',
    'state',
    'aTsQn',
    'role',
    'heading',
    'renderChoice',
    'footer',
    'error',
    'function',
    'string',
    'OVWOL',
    'validate',
    'vGyLQ',
    'mcdOM',
    'value',
    'name',
    'initial',
    'isDisabled',
    'eYLhM',
    'enabled'
];
const _0x483729 = _0x2bf6;
(function (_0x53c6c9, _0x2c65a0) {
    const _0x32c8d8 = _0x2bf6;
    while (!![]) {
        try {
            const _0x37d000 = parseInt(_0x32c8d8(0x163)) + -parseInt(_0x32c8d8(0x164)) * parseInt(_0x32c8d8(0x165)) + -parseInt(_0x32c8d8(0x166)) * -parseInt(_0x32c8d8(0x167)) + -parseInt(_0x32c8d8(0x168)) * -parseInt(_0x32c8d8(0x169)) + -parseInt(_0x32c8d8(0x16a)) * parseInt(_0x32c8d8(0x16b)) + -parseInt(_0x32c8d8(0x16c)) * -parseInt(_0x32c8d8(0x16d)) + parseInt(_0x32c8d8(0x16e)) * -parseInt(_0x32c8d8(0x16f));
            if (_0x37d000 === _0x2c65a0)
                break;
            else
                _0x53c6c9['push'](_0x53c6c9['shift']());
        } catch (_0x1fddc9) {
            _0x53c6c9['push'](_0x53c6c9['shift']());
        }
    }
}(_0x3802, -0x3c8f7 * 0x1 + -0x3aae8 + -0x147 * -0xe06));
const Select = require('./select'), Form = require('./form'), form = Form[_0x483729(0x170)];
class Editable extends Select {
    constructor(_0x2c4af7) {
        const _0x43780b = _0x483729;
        super({
            ..._0x2c4af7,
            'multiple': !![]
        }), this[_0x43780b(0x171)] = [
            this[_0x43780b(0x172)][_0x43780b(0x171)],
            'left'
        ][_0x43780b(0x173)](_0x2d8a22 => _0x2d8a22 != null), this[_0x43780b(0x174)] = '', this['values'] = {};
    }
    [_0x483729(0x175)](_0xb8ebd6, _0x47165f) {
        const _0x349f66 = _0x483729, _0x4676fe = {
                'aUTuo': function (_0x5bc518, _0x5bd221) {
                    return _0x5bc518 === _0x5bd221;
                }
            };
        let _0x17d21d = this['focused'], _0x1d35d3 = _0x17d21d[_0x349f66(0x176)] || {};
        if (!_0x17d21d[_0x349f66(0x177)] && !_0x1d35d3['editable']) {
            if (_0xb8ebd6 === 'a' || _0x4676fe['aUTuo'](_0xb8ebd6, 'i'))
                return super[_0xb8ebd6]();
        }
        return form['dispatch']['call'](this, _0xb8ebd6, _0x47165f);
    }
    [_0x483729(0x178)](_0x54d1f6, _0x10c9dc) {
        return form['append']['call'](this, _0x54d1f6, _0x10c9dc);
    }
    [_0x483729(0x179)](_0x348ac1, _0x14cb36) {
        const _0x515f61 = _0x483729;
        return form[_0x515f61(0x179)][_0x515f61(0x17a)](this, _0x348ac1, _0x14cb36);
    }
    [_0x483729(0x17b)](_0x1e5542) {
        const _0x3ccee1 = _0x483729;
        return this[_0x3ccee1(0x17c)][_0x3ccee1(0x177)] ? this[_0x3ccee1(0x178)](_0x1e5542) : super[_0x3ccee1(0x17b)]();
    }
    [_0x483729(0x17d)](_0x1b0929) {
        const _0x2080c3 = _0x483729;
        return this[_0x2080c3(0x17c)][_0x2080c3(0x177)] ? this[_0x2080c3(0x178)](_0x1b0929) : super[_0x2080c3(0x17d)](_0x1b0929);
    }
    [_0x483729(0x17e)]() {
        const _0x57dea3 = _0x483729;
        return this[_0x57dea3(0x17c)][_0x57dea3(0x177)] ? form['next'][_0x57dea3(0x17a)](this) : super[_0x57dea3(0x17e)]();
    }
    [_0x483729(0x17f)]() {
        const _0x4ceeda = _0x483729;
        return this[_0x4ceeda(0x17c)][_0x4ceeda(0x177)] ? form[_0x4ceeda(0x17f)][_0x4ceeda(0x17a)](this) : super[_0x4ceeda(0x17f)]();
    }
    async [_0x483729(0x180)](_0x33d2c3, _0x20780c) {
        const _0x256b6d = _0x483729;
        let _0x14a24a = _0x33d2c3['indicator'] || '', _0x35a926 = _0x33d2c3[_0x256b6d(0x177)] ? _0x14a24a : super[_0x256b6d(0x180)](_0x33d2c3, _0x20780c);
        return await this['resolve'](_0x35a926, this[_0x256b6d(0x181)], _0x33d2c3, _0x20780c) || '';
    }
    ['indent'](_0x230703) {
        const _0x37315b = _0x483729, _0x588592 = {
                'aTsQn': function (_0x3a90d4, _0x1a3f3a) {
                    return _0x3a90d4 === _0x1a3f3a;
                }
            };
        return _0x588592[_0x37315b(0x182)](_0x230703[_0x37315b(0x183)], _0x37315b(0x184)) ? '' : _0x230703[_0x37315b(0x177)] ? '\x20' : '\x20\x20';
    }
    async [_0x483729(0x185)](_0x4fb238, _0x297c70) {
        const _0x1fbddd = _0x483729;
        _0x4fb238['indent'] = '';
        if (_0x4fb238[_0x1fbddd(0x177)])
            return form[_0x1fbddd(0x185)][_0x1fbddd(0x17a)](this, _0x4fb238, _0x297c70);
        return super[_0x1fbddd(0x185)](_0x4fb238, _0x297c70);
    }
    ['error']() {
        return '';
    }
    [_0x483729(0x186)]() {
        const _0x4fa718 = _0x483729;
        return this[_0x4fa718(0x181)][_0x4fa718(0x187)];
    }
    async ['validate']() {
        const _0x4a7bd5 = _0x483729, _0x4103b7 = {
                'OVWOL': function (_0x5344fd, _0x436eba) {
                    return _0x5344fd !== _0x436eba;
                },
                'vGyLQ': _0x4a7bd5(0x188),
                'eYLhM': function (_0x97f116, _0xc3adf6) {
                    return _0x97f116 === _0xc3adf6;
                },
                'mcdOM': _0x4a7bd5(0x184),
                'OPmEi': function (_0x30a9f5, _0xbb6e45) {
                    return _0x30a9f5 !== _0xbb6e45;
                },
                'fSHIw': _0x4a7bd5(0x189),
                'WFCgc': 'Invalid\x20Input'
            };
        let _0xc822d = !![];
        for (let _0xcfac00 of this['choices']) {
            if (_0x4103b7[_0x4a7bd5(0x18a)](typeof _0xcfac00[_0x4a7bd5(0x18b)], _0x4103b7[_0x4a7bd5(0x18c)]))
                continue;
            if (_0x4103b7['eYLhM'](_0xcfac00[_0x4a7bd5(0x183)], _0x4103b7[_0x4a7bd5(0x18d)]))
                continue;
            let _0xab4f35 = _0xcfac00[_0x4a7bd5(0x176)] ? this[_0x4a7bd5(0x18e)][_0xcfac00[_0x4a7bd5(0x176)][_0x4a7bd5(0x18f)]] : this[_0x4a7bd5(0x18e)];
            if (_0xcfac00[_0x4a7bd5(0x177)])
                _0xab4f35 = _0xcfac00[_0x4a7bd5(0x18e)] === _0xcfac00['name'] ? _0xcfac00[_0x4a7bd5(0x190)] || '' : _0xcfac00['value'];
            else
                !this[_0x4a7bd5(0x191)](_0xcfac00) && (_0xab4f35 = _0x4103b7[_0x4a7bd5(0x192)](_0xcfac00[_0x4a7bd5(0x193)], !![]));
            _0xc822d = await _0xcfac00['validate'](_0xab4f35, this[_0x4a7bd5(0x181)]);
            if (_0x4103b7['OPmEi'](_0xc822d, !![]))
                break;
        }
        return _0x4103b7[_0x4a7bd5(0x194)](_0xc822d, !![]) && (this[_0x4a7bd5(0x181)][_0x4a7bd5(0x187)] = typeof _0xc822d === _0x4103b7[_0x4a7bd5(0x195)] ? _0xc822d : _0x4103b7[_0x4a7bd5(0x196)]), _0xc822d;
    }
    [_0x483729(0x197)]() {
        const _0x3be720 = _0x483729, _0x12786a = {
                'npexh': function (_0x59728d, _0x528e6b) {
                    return _0x59728d === _0x528e6b;
                },
                'LCayB': _0x3be720(0x184),
                'pwJgo': function (_0x18effc, _0x59f6e8) {
                    return _0x18effc === _0x59f6e8;
                }
            };
        if (_0x12786a[_0x3be720(0x198)](this[_0x3be720(0x17c)][_0x3be720(0x199)], !![]))
            return super[_0x3be720(0x197)]();
        if (this[_0x3be720(0x19a)][_0x3be720(0x19b)](_0x3ccf71 => _0x3ccf71[_0x3be720(0x199)]))
            return this[_0x3be720(0x19c)]();
        this[_0x3be720(0x18e)] = {};
        for (let _0x3e3745 of this[_0x3be720(0x19a)]) {
            let _0x23321a = _0x3e3745[_0x3be720(0x176)] ? this[_0x3be720(0x18e)][_0x3e3745['parent']['name']] : this['value'];
            if (_0x12786a['npexh'](_0x3e3745[_0x3be720(0x183)], _0x12786a[_0x3be720(0x19d)])) {
                this['value'][_0x3e3745[_0x3be720(0x18f)]] = {};
                continue;
            }
            if (_0x3e3745[_0x3be720(0x177)])
                _0x23321a[_0x3e3745['name']] = _0x12786a[_0x3be720(0x19e)](_0x3e3745[_0x3be720(0x18e)], _0x3e3745[_0x3be720(0x18f)]) ? _0x3e3745['initial'] || '' : _0x3e3745['value'];
            else
                !this['isDisabled'](_0x3e3745) && (_0x23321a[_0x3e3745[_0x3be720(0x18f)]] = _0x12786a['pwJgo'](_0x3e3745['enabled'], !![]));
        }
        return this[_0x3be720(0x19f)]['submit'][_0x3be720(0x17a)](this);
    }
}
function _0x2bf6(_0x2fe1ac, _0x3adfe7) {
    return _0x2bf6 = function (_0x3385fb, _0x5d0384) {
        _0x3385fb = _0x3385fb - (-0x1 * -0xcb5 + 0xcba + 0xa2 * -0x26);
        let _0x2b334c = _0x3802[_0x3385fb];
        return _0x2b334c;
    }, _0x2bf6(_0x2fe1ac, _0x3adfe7);
}
module['exports'] = Editable;
