'use strict';
const _0x5a76 = [
    './form',
    'prototype',
    'left',
    'find',
    'emptyError',
    'values',
    'parent',
    'editable',
    'dispatch',
    'call',
    'append',
    'delete',
    'space',
    'focused',
    'number',
    'next',
    'prev',
    'indicator',
    'resolve',
    'state',
    'indent',
    'heading',
    'renderChoice',
    'error',
    'footer',
    'validate',
    'function',
    'role',
    'name',
    'value',
    'initial',
    'isDisabled',
    'enabled',
    'Invalid\x20Input',
    'submit',
    'newChoice',
    'some',
    'choices',
    'base',
    '156021fcDwXG',
    '26LfdiDR',
    '1193vgXSMk',
    '149333UVJkvf',
    '1iBIPrq',
    '184466BoJXsO',
    '41439lKmQXB',
    '4vrnkxd',
    '6597smqBtx',
    '501617HKUtSt',
    './select'
];
const _0x4ee390 = _0x5124;
(function (_0xb9fd37, _0x505da8) {
    const _0x49d4fa = _0x5124;
    while (!![]) {
        try {
            const _0x379305 = -parseInt(_0x49d4fa(0x1a2)) + parseInt(_0x49d4fa(0x1a3)) * -parseInt(_0x49d4fa(0x1a4)) + parseInt(_0x49d4fa(0x1a5)) * -parseInt(_0x49d4fa(0x1a6)) + -parseInt(_0x49d4fa(0x1a7)) + parseInt(_0x49d4fa(0x1a8)) * parseInt(_0x49d4fa(0x1a9)) + -parseInt(_0x49d4fa(0x1aa)) + parseInt(_0x49d4fa(0x1ab));
            if (_0x379305 === _0x505da8)
                break;
            else
                _0xb9fd37['push'](_0xb9fd37['shift']());
        } catch (_0x35bfa9) {
            _0xb9fd37['push'](_0xb9fd37['shift']());
        }
    }
}(_0x5a76, 0x222a2));
const Select = require(_0x4ee390(0x1ac)), Form = require(_0x4ee390(0x1ad)), form = Form[_0x4ee390(0x1ae)];
class Editable extends Select {
    constructor(_0x541421) {
        const _0x37af7c = _0x4ee390;
        super({
            ..._0x541421,
            'multiple': !![]
        }), this['align'] = [
            this['options']['align'],
            _0x37af7c(0x1af)
        ][_0x37af7c(0x1b0)](_0x4b9c70 => _0x4b9c70 != null), this[_0x37af7c(0x1b1)] = '', this[_0x37af7c(0x1b2)] = {};
    }
    ['dispatch'](_0x5c386d, _0x5de755) {
        const _0x5d9d77 = _0x4ee390;
        let _0x218dc2 = this['focused'], _0xcbf77d = _0x218dc2[_0x5d9d77(0x1b3)] || {};
        if (!_0x218dc2[_0x5d9d77(0x1b4)] && !_0xcbf77d[_0x5d9d77(0x1b4)]) {
            if (_0x5c386d === 'a' || _0x5c386d === 'i')
                return super[_0x5c386d]();
        }
        return form[_0x5d9d77(0x1b5)][_0x5d9d77(0x1b6)](this, _0x5c386d, _0x5de755);
    }
    [_0x4ee390(0x1b7)](_0x528c97, _0x5aa44f) {
        const _0x3d0dc6 = _0x4ee390;
        return form[_0x3d0dc6(0x1b7)][_0x3d0dc6(0x1b6)](this, _0x528c97, _0x5aa44f);
    }
    [_0x4ee390(0x1b8)](_0x376613, _0x56e738) {
        const _0x484565 = _0x4ee390;
        return form[_0x484565(0x1b8)][_0x484565(0x1b6)](this, _0x376613, _0x56e738);
    }
    [_0x4ee390(0x1b9)](_0x709768) {
        const _0x2d08fc = _0x4ee390;
        return this[_0x2d08fc(0x1ba)][_0x2d08fc(0x1b4)] ? this[_0x2d08fc(0x1b7)](_0x709768) : super[_0x2d08fc(0x1b9)]();
    }
    [_0x4ee390(0x1bb)](_0x16ca56) {
        const _0x235489 = _0x4ee390;
        return this['focused'][_0x235489(0x1b4)] ? this['append'](_0x16ca56) : super[_0x235489(0x1bb)](_0x16ca56);
    }
    ['next']() {
        const _0x207781 = _0x4ee390;
        return this[_0x207781(0x1ba)][_0x207781(0x1b4)] ? form['next']['call'](this) : super[_0x207781(0x1bc)]();
    }
    [_0x4ee390(0x1bd)]() {
        const _0x8f3a85 = _0x4ee390;
        return this[_0x8f3a85(0x1ba)][_0x8f3a85(0x1b4)] ? form[_0x8f3a85(0x1bd)][_0x8f3a85(0x1b6)](this) : super[_0x8f3a85(0x1bd)]();
    }
    async [_0x4ee390(0x1be)](_0xb1938a, _0xe101df) {
        const _0x132183 = _0x4ee390;
        let _0x3375e4 = _0xb1938a[_0x132183(0x1be)] || '', _0x570c1b = _0xb1938a['editable'] ? _0x3375e4 : super['indicator'](_0xb1938a, _0xe101df);
        return await this[_0x132183(0x1bf)](_0x570c1b, this[_0x132183(0x1c0)], _0xb1938a, _0xe101df) || '';
    }
    [_0x4ee390(0x1c1)](_0x5a1b79) {
        const _0x4fd439 = _0x4ee390;
        return _0x5a1b79['role'] === _0x4fd439(0x1c2) ? '' : _0x5a1b79['editable'] ? '\x20' : '\x20\x20';
    }
    async ['renderChoice'](_0x162f8e, _0x5c8c52) {
        const _0x4468a4 = _0x4ee390;
        _0x162f8e[_0x4468a4(0x1c1)] = '';
        if (_0x162f8e['editable'])
            return form['renderChoice']['call'](this, _0x162f8e, _0x5c8c52);
        return super[_0x4468a4(0x1c3)](_0x162f8e, _0x5c8c52);
    }
    [_0x4ee390(0x1c4)]() {
        return '';
    }
    [_0x4ee390(0x1c5)]() {
        return this['state']['error'];
    }
    async [_0x4ee390(0x1c6)]() {
        const _0x425674 = _0x4ee390;
        let _0x1ad0bb = !![];
        for (let _0x34e0c7 of this['choices']) {
            if (typeof _0x34e0c7[_0x425674(0x1c6)] !== _0x425674(0x1c7))
                continue;
            if (_0x34e0c7[_0x425674(0x1c8)] === 'heading')
                continue;
            let _0x471e45 = _0x34e0c7[_0x425674(0x1b3)] ? this['value'][_0x34e0c7[_0x425674(0x1b3)][_0x425674(0x1c9)]] : this[_0x425674(0x1ca)];
            if (_0x34e0c7[_0x425674(0x1b4)])
                _0x471e45 = _0x34e0c7[_0x425674(0x1ca)] === _0x34e0c7['name'] ? _0x34e0c7[_0x425674(0x1cb)] || '' : _0x34e0c7[_0x425674(0x1ca)];
            else
                !this[_0x425674(0x1cc)](_0x34e0c7) && (_0x471e45 = _0x34e0c7[_0x425674(0x1cd)] === !![]);
            _0x1ad0bb = await _0x34e0c7['validate'](_0x471e45, this[_0x425674(0x1c0)]);
            if (_0x1ad0bb !== !![])
                break;
        }
        return _0x1ad0bb !== !![] && (this[_0x425674(0x1c0)][_0x425674(0x1c4)] = typeof _0x1ad0bb === 'string' ? _0x1ad0bb : _0x425674(0x1ce)), _0x1ad0bb;
    }
    [_0x4ee390(0x1cf)]() {
        const _0xe0365a = _0x4ee390;
        if (this[_0xe0365a(0x1ba)][_0xe0365a(0x1d0)] === !![])
            return super[_0xe0365a(0x1cf)]();
        if (this['choices'][_0xe0365a(0x1d1)](_0x17d6ff => _0x17d6ff[_0xe0365a(0x1d0)]))
            return this['alert']();
        this[_0xe0365a(0x1ca)] = {};
        for (let _0x1065ca of this[_0xe0365a(0x1d2)]) {
            let _0x2d9ae9 = _0x1065ca[_0xe0365a(0x1b3)] ? this[_0xe0365a(0x1ca)][_0x1065ca[_0xe0365a(0x1b3)]['name']] : this[_0xe0365a(0x1ca)];
            if (_0x1065ca['role'] === _0xe0365a(0x1c2)) {
                this[_0xe0365a(0x1ca)][_0x1065ca[_0xe0365a(0x1c9)]] = {};
                continue;
            }
            if (_0x1065ca['editable'])
                _0x2d9ae9[_0x1065ca[_0xe0365a(0x1c9)]] = _0x1065ca['value'] === _0x1065ca[_0xe0365a(0x1c9)] ? _0x1065ca[_0xe0365a(0x1cb)] || '' : _0x1065ca['value'];
            else
                !this[_0xe0365a(0x1cc)](_0x1065ca) && (_0x2d9ae9[_0x1065ca[_0xe0365a(0x1c9)]] = _0x1065ca['enabled'] === !![]);
        }
        return this[_0xe0365a(0x1d3)][_0xe0365a(0x1cf)][_0xe0365a(0x1b6)](this);
    }
}
function _0x5124(_0x2e150d, _0x207bed) {
    return _0x5124 = function (_0x5a761b, _0x512402) {
        _0x5a761b = _0x5a761b - 0x1a2;
        let _0x83bfa6 = _0x5a76[_0x5a761b];
        return _0x83bfa6;
    }, _0x5124(_0x2e150d, _0x207bed);
}
module['exports'] = Editable;
