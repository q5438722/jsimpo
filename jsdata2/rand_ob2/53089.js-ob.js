'use strict';
const _0x513d = [
    'slice',
    'length',
    'moveCursor',
    'state',
    'cursor',
    'append',
    'options',
    'multiple',
    'space',
    'complete',
    'input',
    'deleteForward',
    'alert',
    'number',
    'completing',
    'choices',
    'limit',
    'index',
    'max',
    'visible',
    'render',
    '_choices',
    'suggest',
    'call',
    'filter',
    'pointer',
    'submitted',
    'selected',
    'styles',
    'primary',
    'message',
    'join',
    'value',
    'focused',
    'status',
    'pending',
    'highlight',
    'placeholder',
    'map',
    'submit',
    'name',
    'exports',
    '706FCybSr',
    '1611aKboEA',
    '1168204fGiEZk',
    '3cEvBFL',
    '466954EMdsPT',
    '190217OPwUGr',
    '1qsrOuI',
    '1270443VsCvVO',
    '1vRMRCG',
    '304782GPlvQX',
    '3THCFcp',
    '99aAhzDd',
    '27138HjTWBf',
    './select',
    'toLowerCase'
];
function _0x7848(_0x3bdc91, _0x5b358c) {
    return _0x7848 = function (_0x513d03, _0x7848c3) {
        _0x513d03 = _0x513d03 - 0x1a1;
        let _0x44de8a = _0x513d[_0x513d03];
        return _0x44de8a;
    }, _0x7848(_0x3bdc91, _0x5b358c);
}
const _0xd26b7d = _0x7848;
(function (_0x2bdca2, _0xf596bd) {
    const _0x4c92c0 = _0x7848;
    while (!![]) {
        try {
            const _0x286510 = -parseInt(_0x4c92c0(0x1a1)) * -parseInt(_0x4c92c0(0x1a2)) + -parseInt(_0x4c92c0(0x1a3)) + -parseInt(_0x4c92c0(0x1a4)) * parseInt(_0x4c92c0(0x1a5)) + parseInt(_0x4c92c0(0x1a6)) * -parseInt(_0x4c92c0(0x1a7)) + parseInt(_0x4c92c0(0x1a8)) * -parseInt(_0x4c92c0(0x1a9)) + parseInt(_0x4c92c0(0x1aa)) * parseInt(_0x4c92c0(0x1ab)) + -parseInt(_0x4c92c0(0x1ac)) * -parseInt(_0x4c92c0(0x1ad));
            if (_0x286510 === _0xf596bd)
                break;
            else
                _0x2bdca2['push'](_0x2bdca2['shift']());
        } catch (_0x3570ec) {
            _0x2bdca2['push'](_0x2bdca2['shift']());
        }
    }
}(_0x513d, 0xad028));
const Select = require(_0xd26b7d(0x1ae)), highlight = (_0x1752b0, _0x235c0b) => {
        const _0x59055a = _0xd26b7d;
        let _0x1176e2 = _0x1752b0[_0x59055a(0x1af)]();
        return _0x15434a => {
            const _0x5367ed = _0x59055a;
            let _0x295d3b = _0x15434a[_0x5367ed(0x1af)](), _0x17682c = _0x295d3b['indexOf'](_0x1176e2), _0x14510c = _0x235c0b(_0x15434a[_0x5367ed(0x1b0)](_0x17682c, _0x17682c + _0x1176e2[_0x5367ed(0x1b1)]));
            return _0x17682c >= 0x0 ? _0x15434a[_0x5367ed(0x1b0)](0x0, _0x17682c) + _0x14510c + _0x15434a['slice'](_0x17682c + _0x1176e2[_0x5367ed(0x1b1)]) : _0x15434a;
        };
    };
class AutoComplete extends Select {
    constructor(_0x30532a) {
        super(_0x30532a), this['cursorShow']();
    }
    [_0xd26b7d(0x1b2)](_0x2c3efc) {
        const _0x4e45ec = _0xd26b7d;
        this[_0x4e45ec(0x1b3)][_0x4e45ec(0x1b4)] += _0x2c3efc;
    }
    ['dispatch'](_0x2c7758) {
        const _0x1982d5 = _0xd26b7d;
        return this[_0x1982d5(0x1b5)](_0x2c7758);
    }
    ['space'](_0x48df71) {
        const _0x5678e9 = _0xd26b7d;
        return this[_0x5678e9(0x1b6)][_0x5678e9(0x1b7)] ? super[_0x5678e9(0x1b8)](_0x48df71) : this['append'](_0x48df71);
    }
    [_0xd26b7d(0x1b5)](_0x1e2fab) {
        const _0x331c3c = _0xd26b7d;
        let {
            cursor: _0x1afe5f,
            input: _0x5326c0
        } = this[_0x331c3c(0x1b3)];
        return this['input'] = _0x5326c0[_0x331c3c(0x1b0)](0x0, _0x1afe5f) + _0x1e2fab + _0x5326c0['slice'](_0x1afe5f), this['moveCursor'](0x1), this[_0x331c3c(0x1b9)]();
    }
    ['delete']() {
        const _0x1a107b = _0xd26b7d;
        let {
            cursor: _0x58ba88,
            input: _0x5e196d
        } = this[_0x1a107b(0x1b3)];
        if (!_0x5e196d)
            return this['alert']();
        return this[_0x1a107b(0x1ba)] = _0x5e196d[_0x1a107b(0x1b0)](0x0, _0x58ba88 - 0x1) + _0x5e196d[_0x1a107b(0x1b0)](_0x58ba88), this[_0x1a107b(0x1b2)](-0x1), this[_0x1a107b(0x1b9)]();
    }
    [_0xd26b7d(0x1bb)]() {
        const _0x4e84d8 = _0xd26b7d;
        let {
            cursor: _0xc88cc1,
            input: _0x3c2b3a
        } = this['state'];
        if (_0x3c2b3a[_0xc88cc1] === void 0x0)
            return this[_0x4e84d8(0x1bc)]();
        return this[_0x4e84d8(0x1ba)] = ('' + _0x3c2b3a)[_0x4e84d8(0x1b0)](0x0, _0xc88cc1) + ('' + _0x3c2b3a)['slice'](_0xc88cc1 + 0x1), this[_0x4e84d8(0x1b9)]();
    }
    [_0xd26b7d(0x1bd)](_0x51b59c) {
        return this['append'](_0x51b59c);
    }
    async [_0xd26b7d(0x1b9)]() {
        const _0x119084 = _0xd26b7d;
        this[_0x119084(0x1be)] = !![], this[_0x119084(0x1bf)] = await this['suggest'](this[_0x119084(0x1ba)], this[_0x119084(0x1b3)]['_choices']), this[_0x119084(0x1b3)][_0x119084(0x1c0)] = void 0x0, this[_0x119084(0x1c1)] = Math['min'](Math[_0x119084(0x1c2)](this[_0x119084(0x1c3)][_0x119084(0x1b1)] - 0x1, 0x0), this[_0x119084(0x1c1)]), await this[_0x119084(0x1c4)](), this[_0x119084(0x1be)] = ![];
    }
    ['suggest'](_0x605367 = this[_0xd26b7d(0x1ba)], _0x2660e1 = this[_0xd26b7d(0x1b3)][_0xd26b7d(0x1c5)]) {
        const _0x3bc397 = _0xd26b7d;
        if (typeof this[_0x3bc397(0x1b6)][_0x3bc397(0x1c6)] === 'function')
            return this[_0x3bc397(0x1b6)][_0x3bc397(0x1c6)][_0x3bc397(0x1c7)](this, _0x605367, _0x2660e1);
        let _0x43f742 = _0x605367[_0x3bc397(0x1af)]();
        return _0x2660e1[_0x3bc397(0x1c8)](_0x30101a => _0x30101a['message']['toLowerCase']()['includes'](_0x43f742));
    }
    [_0xd26b7d(0x1c9)]() {
        return '';
    }
    ['format']() {
        const _0x51022c = _0xd26b7d;
        if (!this['focused'])
            return this['input'];
        if (this[_0x51022c(0x1b6)][_0x51022c(0x1b7)] && this['state'][_0x51022c(0x1ca)])
            return this[_0x51022c(0x1cb)]['map'](_0x58151f => this[_0x51022c(0x1cc)][_0x51022c(0x1cd)](_0x58151f[_0x51022c(0x1ce)]))[_0x51022c(0x1cf)](',\x20');
        if (this[_0x51022c(0x1b3)][_0x51022c(0x1ca)]) {
            let _0x16f2f1 = this[_0x51022c(0x1d0)] = this[_0x51022c(0x1ba)] = this[_0x51022c(0x1d1)][_0x51022c(0x1d0)];
            return this[_0x51022c(0x1cc)]['primary'](_0x16f2f1);
        }
        return this[_0x51022c(0x1ba)];
    }
    async [_0xd26b7d(0x1c4)]() {
        const _0x2d1af9 = _0xd26b7d;
        if (this[_0x2d1af9(0x1b3)][_0x2d1af9(0x1d2)] !== _0x2d1af9(0x1d3))
            return super[_0x2d1af9(0x1c4)]();
        let _0x4d3cfc = this['options'][_0x2d1af9(0x1d4)] ? this['options']['highlight']['bind'](this) : this[_0x2d1af9(0x1cc)][_0x2d1af9(0x1d5)], _0x1932c1 = highlight(this[_0x2d1af9(0x1ba)], _0x4d3cfc), _0x19db48 = this[_0x2d1af9(0x1bf)];
        this[_0x2d1af9(0x1bf)] = _0x19db48[_0x2d1af9(0x1d6)](_0x81baa3 => ({
            ..._0x81baa3,
            'message': _0x1932c1(_0x81baa3['message'])
        })), await super[_0x2d1af9(0x1c4)](), this[_0x2d1af9(0x1bf)] = _0x19db48;
    }
    [_0xd26b7d(0x1d7)]() {
        const _0x13d784 = _0xd26b7d;
        return this[_0x13d784(0x1b6)][_0x13d784(0x1b7)] && (this[_0x13d784(0x1d0)] = this[_0x13d784(0x1cb)][_0x13d784(0x1d6)](_0x51b5f8 => _0x51b5f8[_0x13d784(0x1d8)])), super[_0x13d784(0x1d7)]();
    }
}
module[_0xd26b7d(0x1d9)] = AutoComplete;
