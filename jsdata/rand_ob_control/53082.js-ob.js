'use strict';
const Select = require('./select'), Form = require('./form'), form = Form['prototype'];
class Editable extends Select {
    constructor(_0xba2b4d) {
        const _0x274039 = { 'MuGMI': 'left' };
        super({
            ..._0xba2b4d,
            'multiple': !![]
        }), this['align'] = [
            this['options']['align'],
            _0x274039['MuGMI']
        ]['find'](_0x5c3356 => _0x5c3356 != null), this['emptyError'] = '', this['values'] = {};
    }
    ['dispatch'](_0x269546, _0x50a8b1) {
        const _0x223b83 = {
            'GCeiG': function (_0xb88b11, _0x46612a) {
                return _0xb88b11 === _0x46612a;
            }
        };
        let _0x119d2d = this['focused'], _0x2b10aa = _0x119d2d['parent'] || {};
        if (!_0x119d2d['editable'] && !_0x2b10aa['editable']) {
            if (_0x223b83['GCeiG'](_0x269546, 'a') || _0x223b83['GCeiG'](_0x269546, 'i'))
                return super[_0x269546]();
        }
        return form['dispatch']['call'](this, _0x269546, _0x50a8b1);
    }
    ['append'](_0x3cf3d7, _0x2dd56a) {
        return form['append']['call'](this, _0x3cf3d7, _0x2dd56a);
    }
    ['delete'](_0x16f38f, _0x35a03d) {
        return form['delete']['call'](this, _0x16f38f, _0x35a03d);
    }
    ['space'](_0x1a9648) {
        return this['focused']['editable'] ? this['append'](_0x1a9648) : super['space']();
    }
    ['number'](_0x19d4ff) {
        return this['focused']['editable'] ? this['append'](_0x19d4ff) : super['number'](_0x19d4ff);
    }
    ['next']() {
        return this['focused']['editable'] ? form['next']['call'](this) : super['next']();
    }
    ['prev']() {
        return this['focused']['editable'] ? form['prev']['call'](this) : super['prev']();
    }
    async ['indicator'](_0x4485a6, _0x3faff6) {
        let _0x23fdb1 = _0x4485a6['indicator'] || '', _0x1f2f81 = _0x4485a6['editable'] ? _0x23fdb1 : super['indicator'](_0x4485a6, _0x3faff6);
        return await this['resolve'](_0x1f2f81, this['state'], _0x4485a6, _0x3faff6) || '';
    }
    ['indent'](_0x19a153) {
        const _0x5ba4fd = {
            'noElW': function (_0x5016e0, _0x5b7def) {
                return _0x5016e0 === _0x5b7def;
            },
            'oScMQ': 'heading'
        };
        return _0x5ba4fd['noElW'](_0x19a153['role'], _0x5ba4fd['oScMQ']) ? '' : _0x19a153['editable'] ? '\x20' : '\x20\x20';
    }
    async ['renderChoice'](_0x3e7e0b, _0x1fdca3) {
        _0x3e7e0b['indent'] = '';
        if (_0x3e7e0b['editable'])
            return form['renderChoice']['call'](this, _0x3e7e0b, _0x1fdca3);
        return super['renderChoice'](_0x3e7e0b, _0x1fdca3);
    }
    ['error']() {
        return '';
    }
    ['footer']() {
        return this['state']['error'];
    }
    async ['validate']() {
        const _0x16e5a8 = {
            'AHVim': function (_0x1838e6, _0x150190) {
                return _0x1838e6 !== _0x150190;
            },
            'HAsJN': 'function',
            'FaOMs': function (_0x14e9d4, _0x57bd4c) {
                return _0x14e9d4 === _0x57bd4c;
            },
            'TGrVp': 'heading',
            'JedtA': function (_0x9f9978, _0x59ef60) {
                return _0x9f9978 === _0x59ef60;
            },
            'oqacW': function (_0x1a5895, _0xf4166) {
                return _0x1a5895 !== _0xf4166;
            },
            'KVEeT': function (_0x43562a, _0x44ec1c) {
                return _0x43562a === _0x44ec1c;
            },
            'ecOHt': 'string',
            'GVoNY': 'Invalid\x20Input'
        };
        let _0x50df01 = !![];
        for (let _0x115511 of this['choices']) {
            if (_0x16e5a8['AHVim'](typeof _0x115511['validate'], _0x16e5a8['HAsJN']))
                continue;
            if (_0x16e5a8['FaOMs'](_0x115511['role'], _0x16e5a8['TGrVp']))
                continue;
            let _0x49fe7b = _0x115511['parent'] ? this['value'][_0x115511['parent']['name']] : this['value'];
            if (_0x115511['editable'])
                _0x49fe7b = _0x16e5a8['JedtA'](_0x115511['value'], _0x115511['name']) ? _0x115511['initial'] || '' : _0x115511['value'];
            else
                !this['isDisabled'](_0x115511) && (_0x49fe7b = _0x16e5a8['JedtA'](_0x115511['enabled'], !![]));
            _0x50df01 = await _0x115511['validate'](_0x49fe7b, this['state']);
            if (_0x16e5a8['oqacW'](_0x50df01, !![]))
                break;
        }
        return _0x16e5a8['oqacW'](_0x50df01, !![]) && (this['state']['error'] = _0x16e5a8['KVEeT'](typeof _0x50df01, _0x16e5a8['ecOHt']) ? _0x50df01 : _0x16e5a8['GVoNY']), _0x50df01;
    }
    ['submit']() {
        const _0x3f1e37 = {
            'pRRaU': function (_0x34095c, _0x4b0e00) {
                return _0x34095c === _0x4b0e00;
            },
            'CbHoY': function (_0x13f029, _0x115458) {
                return _0x13f029 === _0x115458;
            },
            'oSJAD': 'heading',
            'oysst': function (_0x434aab, _0x4f3fa0) {
                return _0x434aab === _0x4f3fa0;
            },
            'wWIbT': function (_0x376fa3, _0x529f70) {
                return _0x376fa3 === _0x529f70;
            }
        };
        if (_0x3f1e37['pRRaU'](this['focused']['newChoice'], !![]))
            return super['submit']();
        if (this['choices']['some'](_0x3e7557 => _0x3e7557['newChoice']))
            return this['alert']();
        this['value'] = {};
        for (let _0x47fbb9 of this['choices']) {
            let _0x43e8b1 = _0x47fbb9['parent'] ? this['value'][_0x47fbb9['parent']['name']] : this['value'];
            if (_0x3f1e37['CbHoY'](_0x47fbb9['role'], _0x3f1e37['oSJAD'])) {
                this['value'][_0x47fbb9['name']] = {};
                continue;
            }
            if (_0x47fbb9['editable'])
                _0x43e8b1[_0x47fbb9['name']] = _0x3f1e37['oysst'](_0x47fbb9['value'], _0x47fbb9['name']) ? _0x47fbb9['initial'] || '' : _0x47fbb9['value'];
            else
                !this['isDisabled'](_0x47fbb9) && (_0x43e8b1[_0x47fbb9['name']] = _0x3f1e37['wWIbT'](_0x47fbb9['enabled'], !![]));
        }
        return this['base']['submit']['call'](this);
    }
}
module['exports'] = Editable;
