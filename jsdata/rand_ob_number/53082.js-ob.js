'use strict';
const Select = require('./select'), Form = require('./form'), form = Form['prototype'];
class Editable extends Select {
    constructor(_0x3514c1) {
        super({
            ..._0x3514c1,
            'multiple': !![]
        }), this['align'] = [
            this['options']['align'],
            'left'
        ]['find'](_0x16f076 => _0x16f076 != null), this['emptyError'] = '', this['values'] = {};
    }
    ['dispatch'](_0x4ac84e, _0x4da45f) {
        let _0x3844d8 = this['focused'], _0x15559a = _0x3844d8['parent'] || {};
        if (!_0x3844d8['editable'] && !_0x15559a['editable']) {
            if (_0x4ac84e === 'a' || _0x4ac84e === 'i')
                return super[_0x4ac84e]();
        }
        return form['dispatch']['call'](this, _0x4ac84e, _0x4da45f);
    }
    ['append'](_0x5cb49a, _0x276e1e) {
        return form['append']['call'](this, _0x5cb49a, _0x276e1e);
    }
    ['delete'](_0x44c947, _0x44205) {
        return form['delete']['call'](this, _0x44c947, _0x44205);
    }
    ['space'](_0x499e11) {
        return this['focused']['editable'] ? this['append'](_0x499e11) : super['space']();
    }
    ['number'](_0x1aaf2b) {
        return this['focused']['editable'] ? this['append'](_0x1aaf2b) : super['number'](_0x1aaf2b);
    }
    ['next']() {
        return this['focused']['editable'] ? form['next']['call'](this) : super['next']();
    }
    ['prev']() {
        return this['focused']['editable'] ? form['prev']['call'](this) : super['prev']();
    }
    async ['indicator'](_0x224c62, _0x2bd8d4) {
        let _0x1ddf2e = _0x224c62['indicator'] || '', _0xa9ff68 = _0x224c62['editable'] ? _0x1ddf2e : super['indicator'](_0x224c62, _0x2bd8d4);
        return await this['resolve'](_0xa9ff68, this['state'], _0x224c62, _0x2bd8d4) || '';
    }
    ['indent'](_0x5b5f29) {
        return _0x5b5f29['role'] === 'heading' ? '' : _0x5b5f29['editable'] ? '\x20' : '\x20\x20';
    }
    async ['renderChoice'](_0x58c693, _0x2f049b) {
        _0x58c693['indent'] = '';
        if (_0x58c693['editable'])
            return form['renderChoice']['call'](this, _0x58c693, _0x2f049b);
        return super['renderChoice'](_0x58c693, _0x2f049b);
    }
    ['error']() {
        return '';
    }
    ['footer']() {
        return this['state']['error'];
    }
    async ['validate']() {
        let _0xc2f02d = !![];
        for (let _0xf5d0b4 of this['choices']) {
            if (typeof _0xf5d0b4['validate'] !== 'function')
                continue;
            if (_0xf5d0b4['role'] === 'heading')
                continue;
            let _0x22c80a = _0xf5d0b4['parent'] ? this['value'][_0xf5d0b4['parent']['name']] : this['value'];
            if (_0xf5d0b4['editable'])
                _0x22c80a = _0xf5d0b4['value'] === _0xf5d0b4['name'] ? _0xf5d0b4['initial'] || '' : _0xf5d0b4['value'];
            else
                !this['isDisabled'](_0xf5d0b4) && (_0x22c80a = _0xf5d0b4['enabled'] === !![]);
            _0xc2f02d = await _0xf5d0b4['validate'](_0x22c80a, this['state']);
            if (_0xc2f02d !== !![])
                break;
        }
        return _0xc2f02d !== !![] && (this['state']['error'] = typeof _0xc2f02d === 'string' ? _0xc2f02d : 'Invalid\x20Input'), _0xc2f02d;
    }
    ['submit']() {
        if (this['focused']['newChoice'] === !![])
            return super['submit']();
        if (this['choices']['some'](_0xb45075 => _0xb45075['newChoice']))
            return this['alert']();
        this['value'] = {};
        for (let _0xb29298 of this['choices']) {
            let _0xb56f27 = _0xb29298['parent'] ? this['value'][_0xb29298['parent']['name']] : this['value'];
            if (_0xb29298['role'] === 'heading') {
                this['value'][_0xb29298['name']] = {};
                continue;
            }
            if (_0xb29298['editable'])
                _0xb56f27[_0xb29298['name']] = _0xb29298['value'] === _0xb29298['name'] ? _0xb29298['initial'] || '' : _0xb29298['value'];
            else
                !this['isDisabled'](_0xb29298) && (_0xb56f27[_0xb29298['name']] = _0xb29298['enabled'] === !![]);
        }
        return this['base']['submit']['call'](this);
    }
}
module['exports'] = Editable;
