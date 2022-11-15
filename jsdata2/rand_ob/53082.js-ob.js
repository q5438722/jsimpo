'use strict';
const _0x3e94 = [
    '487656vahlJd',
    '84787VooIHq',
    '13773fNBflJ',
    '39318svxQWV',
    '21584JNUrqS',
    '2MwfUng',
    '236334cAukVO',
    './form',
    'prototype',
    'align',
    'options',
    'find',
    'emptyError',
    'values',
    'dispatch',
    'focused',
    'parent',
    'editable',
    'VTYzN',
    'hihSF',
    'append',
    'delete',
    'call',
    'space',
    'number',
    'next',
    'prev',
    'indicator',
    'resolve',
    'state',
    'indent',
    'gujut',
    'heading',
    'renderChoice',
    'error',
    'footer',
    'function',
    'string',
    'choices',
    'KPqSW',
    'validate',
    'tsvde',
    'qrlWi',
    'value',
    'name',
    'isDisabled',
    'uHnuC',
    'enabled',
    'EBChI',
    'FYlVj',
    'ALCBU',
    'submit',
    'HwGda',
    'newChoice',
    'some',
    'alert',
    'ouPKF',
    'base',
    'exports',
    '473513DiMvHU'
];
const _0x29498b = _0x312a;
(function (_0x32ee73, _0x1aa4d6) {
    const _0x454b1c = _0x312a;
    while (!![]) {
        try {
            const _0x86e6e0 = -parseInt(_0x454b1c(0xa3)) + parseInt(_0x454b1c(0xa4)) + parseInt(_0x454b1c(0xa5)) + -parseInt(_0x454b1c(0xa6)) + parseInt(_0x454b1c(0xa7)) + parseInt(_0x454b1c(0xa8)) * -parseInt(_0x454b1c(0xa9)) + parseInt(_0x454b1c(0xaa));
            if (_0x86e6e0 === _0x1aa4d6)
                break;
            else
                _0x32ee73['push'](_0x32ee73['shift']());
        } catch (_0xe5257e) {
            _0x32ee73['push'](_0x32ee73['shift']());
        }
    }
}(_0x3e94, 0x7a45 * -0xa + -0x96634 + 0x1305af));
const Select = require('./select'), Form = require(_0x29498b(0xab)), form = Form[_0x29498b(0xac)];
class Editable extends Select {
    constructor(_0x19fbe8) {
        const _0x541c2b = _0x29498b;
        super({
            ..._0x19fbe8,
            'multiple': !![]
        }), this[_0x541c2b(0xad)] = [
            this[_0x541c2b(0xae)][_0x541c2b(0xad)],
            'left'
        ][_0x541c2b(0xaf)](_0x460962 => _0x460962 != null), this[_0x541c2b(0xb0)] = '', this[_0x541c2b(0xb1)] = {};
    }
    [_0x29498b(0xb2)](_0xd2b0d7, _0x27e5c9) {
        const _0x194d5e = _0x29498b, _0x4b9086 = {
                'VTYzN': function (_0x556113, _0x2adc51) {
                    return _0x556113 === _0x2adc51;
                },
                'hihSF': function (_0x57cb3b, _0x33977b) {
                    return _0x57cb3b === _0x33977b;
                }
            };
        let _0x37624e = this[_0x194d5e(0xb3)], _0x2eb77c = _0x37624e[_0x194d5e(0xb4)] || {};
        if (!_0x37624e[_0x194d5e(0xb5)] && !_0x2eb77c[_0x194d5e(0xb5)]) {
            if (_0x4b9086[_0x194d5e(0xb6)](_0xd2b0d7, 'a') || _0x4b9086[_0x194d5e(0xb7)](_0xd2b0d7, 'i'))
                return super[_0xd2b0d7]();
        }
        return form[_0x194d5e(0xb2)]['call'](this, _0xd2b0d7, _0x27e5c9);
    }
    [_0x29498b(0xb8)](_0x21a1ee, _0x302df5) {
        const _0x2d796a = _0x29498b;
        return form[_0x2d796a(0xb8)]['call'](this, _0x21a1ee, _0x302df5);
    }
    [_0x29498b(0xb9)](_0x4039a3, _0x28bbc2) {
        const _0x18e772 = _0x29498b;
        return form['delete'][_0x18e772(0xba)](this, _0x4039a3, _0x28bbc2);
    }
    [_0x29498b(0xbb)](_0x5155d6) {
        const _0x42be2d = _0x29498b;
        return this['focused'][_0x42be2d(0xb5)] ? this[_0x42be2d(0xb8)](_0x5155d6) : super[_0x42be2d(0xbb)]();
    }
    [_0x29498b(0xbc)](_0xc8bf6b) {
        const _0x21f283 = _0x29498b;
        return this[_0x21f283(0xb3)][_0x21f283(0xb5)] ? this[_0x21f283(0xb8)](_0xc8bf6b) : super[_0x21f283(0xbc)](_0xc8bf6b);
    }
    ['next']() {
        const _0x28e936 = _0x29498b;
        return this[_0x28e936(0xb3)][_0x28e936(0xb5)] ? form[_0x28e936(0xbd)][_0x28e936(0xba)](this) : super[_0x28e936(0xbd)]();
    }
    ['prev']() {
        const _0x539432 = _0x29498b;
        return this[_0x539432(0xb3)][_0x539432(0xb5)] ? form[_0x539432(0xbe)]['call'](this) : super[_0x539432(0xbe)]();
    }
    async [_0x29498b(0xbf)](_0x453ecd, _0x99f28e) {
        const _0x3b46ac = _0x29498b;
        let _0x5ead5d = _0x453ecd[_0x3b46ac(0xbf)] || '', _0x14c258 = _0x453ecd['editable'] ? _0x5ead5d : super['indicator'](_0x453ecd, _0x99f28e);
        return await this[_0x3b46ac(0xc0)](_0x14c258, this[_0x3b46ac(0xc1)], _0x453ecd, _0x99f28e) || '';
    }
    [_0x29498b(0xc2)](_0x320e46) {
        const _0x54750b = _0x29498b, _0x25863a = {
                'gujut': function (_0x1de2c7, _0xec215b) {
                    return _0x1de2c7 === _0xec215b;
                }
            };
        return _0x25863a[_0x54750b(0xc3)](_0x320e46['role'], _0x54750b(0xc4)) ? '' : _0x320e46[_0x54750b(0xb5)] ? '\x20' : '\x20\x20';
    }
    async ['renderChoice'](_0x2afb4e, _0x4da4ca) {
        const _0xf278af = _0x29498b;
        _0x2afb4e[_0xf278af(0xc2)] = '';
        if (_0x2afb4e[_0xf278af(0xb5)])
            return form['renderChoice'][_0xf278af(0xba)](this, _0x2afb4e, _0x4da4ca);
        return super[_0xf278af(0xc5)](_0x2afb4e, _0x4da4ca);
    }
    [_0x29498b(0xc6)]() {
        return '';
    }
    [_0x29498b(0xc7)]() {
        const _0x81e0cd = _0x29498b;
        return this[_0x81e0cd(0xc1)][_0x81e0cd(0xc6)];
    }
    async ['validate']() {
        const _0xdcb75a = _0x29498b, _0x154207 = {
                'KPqSW': function (_0x95f448, _0x287957) {
                    return _0x95f448 !== _0x287957;
                },
                'tsvde': _0xdcb75a(0xc8),
                'uHnuC': function (_0x302a5d, _0x25eb2c) {
                    return _0x302a5d === _0x25eb2c;
                },
                'qrlWi': _0xdcb75a(0xc4),
                'EBChI': function (_0x1926ce, _0x2265e2) {
                    return _0x1926ce !== _0x2265e2;
                },
                'FYlVj': _0xdcb75a(0xc9),
                'ALCBU': 'Invalid\x20Input'
            };
        let _0x172bad = !![];
        for (let _0x418695 of this[_0xdcb75a(0xca)]) {
            if (_0x154207[_0xdcb75a(0xcb)](typeof _0x418695[_0xdcb75a(0xcc)], _0x154207[_0xdcb75a(0xcd)]))
                continue;
            if (_0x154207['uHnuC'](_0x418695['role'], _0x154207[_0xdcb75a(0xce)]))
                continue;
            let _0x21f8e9 = _0x418695[_0xdcb75a(0xb4)] ? this[_0xdcb75a(0xcf)][_0x418695[_0xdcb75a(0xb4)]['name']] : this[_0xdcb75a(0xcf)];
            if (_0x418695['editable'])
                _0x21f8e9 = _0x418695['value'] === _0x418695[_0xdcb75a(0xd0)] ? _0x418695['initial'] || '' : _0x418695[_0xdcb75a(0xcf)];
            else
                !this[_0xdcb75a(0xd1)](_0x418695) && (_0x21f8e9 = _0x154207[_0xdcb75a(0xd2)](_0x418695[_0xdcb75a(0xd3)], !![]));
            _0x172bad = await _0x418695['validate'](_0x21f8e9, this['state']);
            if (_0x154207[_0xdcb75a(0xcb)](_0x172bad, !![]))
                break;
        }
        return _0x154207[_0xdcb75a(0xd4)](_0x172bad, !![]) && (this[_0xdcb75a(0xc1)][_0xdcb75a(0xc6)] = _0x154207[_0xdcb75a(0xd2)](typeof _0x172bad, _0x154207[_0xdcb75a(0xd5)]) ? _0x172bad : _0x154207[_0xdcb75a(0xd6)]), _0x172bad;
    }
    [_0x29498b(0xd7)]() {
        const _0x3c67fc = _0x29498b, _0x11246e = {
                'HwGda': function (_0x9e69c9, _0x14df31) {
                    return _0x9e69c9 === _0x14df31;
                },
                'inNCl': 'heading',
                'ouPKF': function (_0x474a15, _0x428f6c) {
                    return _0x474a15 === _0x428f6c;
                }
            };
        if (_0x11246e[_0x3c67fc(0xd8)](this[_0x3c67fc(0xb3)][_0x3c67fc(0xd9)], !![]))
            return super[_0x3c67fc(0xd7)]();
        if (this['choices'][_0x3c67fc(0xda)](_0x20b4d2 => _0x20b4d2[_0x3c67fc(0xd9)]))
            return this[_0x3c67fc(0xdb)]();
        this[_0x3c67fc(0xcf)] = {};
        for (let _0x1a270d of this['choices']) {
            let _0x547c8a = _0x1a270d[_0x3c67fc(0xb4)] ? this['value'][_0x1a270d['parent'][_0x3c67fc(0xd0)]] : this[_0x3c67fc(0xcf)];
            if (_0x11246e[_0x3c67fc(0xd8)](_0x1a270d['role'], _0x11246e['inNCl'])) {
                this['value'][_0x1a270d[_0x3c67fc(0xd0)]] = {};
                continue;
            }
            if (_0x1a270d[_0x3c67fc(0xb5)])
                _0x547c8a[_0x1a270d['name']] = _0x11246e['ouPKF'](_0x1a270d['value'], _0x1a270d[_0x3c67fc(0xd0)]) ? _0x1a270d['initial'] || '' : _0x1a270d[_0x3c67fc(0xcf)];
            else
                !this['isDisabled'](_0x1a270d) && (_0x547c8a[_0x1a270d[_0x3c67fc(0xd0)]] = _0x11246e[_0x3c67fc(0xdc)](_0x1a270d[_0x3c67fc(0xd3)], !![]));
        }
        return this[_0x3c67fc(0xdd)][_0x3c67fc(0xd7)][_0x3c67fc(0xba)](this);
    }
}
function _0x312a(_0x20c860, _0x3f9409) {
    return _0x312a = function (_0x559832, _0x17ebb6) {
        _0x559832 = _0x559832 - (0x1 * -0x25d2 + 0xfc3 * -0x1 + 0x3638);
        let _0x1fbb8c = _0x3e94[_0x559832];
        return _0x1fbb8c;
    }, _0x312a(_0x20c860, _0x3f9409);
}
module[_0x29498b(0xde)] = Editable;
