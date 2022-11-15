'use strict';
const _0x41d1 = [
    'renderChoice',
    'footer',
    'state',
    'error',
    'choices',
    'validate',
    'function',
    'value',
    'name',
    'string',
    'submit',
    'newChoice',
    'some',
    'alert',
    'initial',
    'isDisabled',
    'enabled',
    'exports',
    '10189UYtQde',
    '22wBQnXH',
    '113WnwWhh',
    '831gCMLRm',
    '190053CKNFCs',
    '1bdCEhd',
    '127657WKFtZW',
    '2UVNcOZ',
    '267316EBHtgJ',
    '138077FKGrLy',
    '695016ZlKiKt',
    './select',
    './form',
    'prototype',
    'align',
    'options',
    'left',
    'find',
    'emptyError',
    'dispatch',
    'focused',
    'parent',
    'editable',
    'call',
    'append',
    'delete',
    'space',
    'number',
    'next',
    'prev',
    'indicator',
    'resolve',
    'indent',
    'role',
    'heading'
];
const _0x33152a = _0x399c;
(function (_0x3b28f3, _0x7b1b4) {
    const _0x26bfee = _0x399c;
    while (!![]) {
        try {
            const _0x116ac7 = parseInt(_0x26bfee(0x19b)) * -parseInt(_0x26bfee(0x19c)) + parseInt(_0x26bfee(0x19d)) * parseInt(_0x26bfee(0x19e)) + parseInt(_0x26bfee(0x19f)) * -parseInt(_0x26bfee(0x1a0)) + -parseInt(_0x26bfee(0x1a1)) * parseInt(_0x26bfee(0x1a2)) + parseInt(_0x26bfee(0x1a3)) + -parseInt(_0x26bfee(0x1a4)) + parseInt(_0x26bfee(0x1a5));
            if (_0x116ac7 === _0x7b1b4)
                break;
            else
                _0x3b28f3['push'](_0x3b28f3['shift']());
        } catch (_0x511ea9) {
            _0x3b28f3['push'](_0x3b28f3['shift']());
        }
    }
}(_0x41d1, 0x3cb39));
function _0x399c(_0x54c75a, _0x1e20cb) {
    return _0x399c = function (_0x41d139, _0x399c15) {
        _0x41d139 = _0x41d139 - 0x19b;
        let _0xcf4d4d = _0x41d1[_0x41d139];
        return _0xcf4d4d;
    }, _0x399c(_0x54c75a, _0x1e20cb);
}
const Select = require(_0x33152a(0x1a6)), Form = require(_0x33152a(0x1a7)), form = Form[_0x33152a(0x1a8)];
class Editable extends Select {
    constructor(_0x2bbeef) {
        const _0x2fd59e = _0x33152a;
        super({
            ..._0x2bbeef,
            'multiple': !![]
        }), this[_0x2fd59e(0x1a9)] = [
            this[_0x2fd59e(0x1aa)][_0x2fd59e(0x1a9)],
            _0x2fd59e(0x1ab)
        ][_0x2fd59e(0x1ac)](_0x47143d => _0x47143d != null), this[_0x2fd59e(0x1ad)] = '', this['values'] = {};
    }
    [_0x33152a(0x1ae)](_0x1b7f95, _0x290bb1) {
        const _0x144258 = _0x33152a;
        let _0x3c272d = this[_0x144258(0x1af)], _0x1fdb57 = _0x3c272d[_0x144258(0x1b0)] || {};
        if (!_0x3c272d['editable'] && !_0x1fdb57[_0x144258(0x1b1)]) {
            if (_0x1b7f95 === 'a' || _0x1b7f95 === 'i')
                return super[_0x1b7f95]();
        }
        return form[_0x144258(0x1ae)][_0x144258(0x1b2)](this, _0x1b7f95, _0x290bb1);
    }
    [_0x33152a(0x1b3)](_0xa25bc8, _0x1bcba4) {
        const _0x453030 = _0x33152a;
        return form[_0x453030(0x1b3)]['call'](this, _0xa25bc8, _0x1bcba4);
    }
    ['delete'](_0x8952c2, _0x276d6e) {
        const _0x57dea2 = _0x33152a;
        return form[_0x57dea2(0x1b4)][_0x57dea2(0x1b2)](this, _0x8952c2, _0x276d6e);
    }
    [_0x33152a(0x1b5)](_0x3ab58a) {
        const _0x53f8ed = _0x33152a;
        return this[_0x53f8ed(0x1af)][_0x53f8ed(0x1b1)] ? this[_0x53f8ed(0x1b3)](_0x3ab58a) : super[_0x53f8ed(0x1b5)]();
    }
    [_0x33152a(0x1b6)](_0x4b3d90) {
        const _0x5d9a3a = _0x33152a;
        return this['focused'][_0x5d9a3a(0x1b1)] ? this[_0x5d9a3a(0x1b3)](_0x4b3d90) : super[_0x5d9a3a(0x1b6)](_0x4b3d90);
    }
    [_0x33152a(0x1b7)]() {
        const _0x577a3f = _0x33152a;
        return this[_0x577a3f(0x1af)][_0x577a3f(0x1b1)] ? form[_0x577a3f(0x1b7)]['call'](this) : super[_0x577a3f(0x1b7)]();
    }
    [_0x33152a(0x1b8)]() {
        const _0x56feea = _0x33152a;
        return this[_0x56feea(0x1af)][_0x56feea(0x1b1)] ? form[_0x56feea(0x1b8)]['call'](this) : super['prev']();
    }
    async ['indicator'](_0x3463dc, _0x4a02f2) {
        const _0x235888 = _0x33152a;
        let _0x1bfcd2 = _0x3463dc[_0x235888(0x1b9)] || '', _0x4081d4 = _0x3463dc['editable'] ? _0x1bfcd2 : super['indicator'](_0x3463dc, _0x4a02f2);
        return await this[_0x235888(0x1ba)](_0x4081d4, this['state'], _0x3463dc, _0x4a02f2) || '';
    }
    [_0x33152a(0x1bb)](_0x1f69cb) {
        const _0x45ed91 = _0x33152a;
        return _0x1f69cb[_0x45ed91(0x1bc)] === _0x45ed91(0x1bd) ? '' : _0x1f69cb['editable'] ? '\x20' : '\x20\x20';
    }
    async [_0x33152a(0x1be)](_0x537a6e, _0xae5a86) {
        const _0x461c93 = _0x33152a;
        _0x537a6e[_0x461c93(0x1bb)] = '';
        if (_0x537a6e[_0x461c93(0x1b1)])
            return form[_0x461c93(0x1be)][_0x461c93(0x1b2)](this, _0x537a6e, _0xae5a86);
        return super['renderChoice'](_0x537a6e, _0xae5a86);
    }
    ['error']() {
        return '';
    }
    [_0x33152a(0x1bf)]() {
        const _0x158bfb = _0x33152a;
        return this[_0x158bfb(0x1c0)][_0x158bfb(0x1c1)];
    }
    async ['validate']() {
        const _0x41a2d7 = _0x33152a;
        let _0x21e4a = !![];
        for (let _0x4e0cef of this[_0x41a2d7(0x1c2)]) {
            if (typeof _0x4e0cef[_0x41a2d7(0x1c3)] !== _0x41a2d7(0x1c4))
                continue;
            if (_0x4e0cef['role'] === 'heading')
                continue;
            let _0x53eab0 = _0x4e0cef[_0x41a2d7(0x1b0)] ? this[_0x41a2d7(0x1c5)][_0x4e0cef[_0x41a2d7(0x1b0)][_0x41a2d7(0x1c6)]] : this[_0x41a2d7(0x1c5)];
            if (_0x4e0cef[_0x41a2d7(0x1b1)])
                _0x53eab0 = _0x4e0cef[_0x41a2d7(0x1c5)] === _0x4e0cef['name'] ? _0x4e0cef['initial'] || '' : _0x4e0cef[_0x41a2d7(0x1c5)];
            else
                !this['isDisabled'](_0x4e0cef) && (_0x53eab0 = _0x4e0cef['enabled'] === !![]);
            _0x21e4a = await _0x4e0cef[_0x41a2d7(0x1c3)](_0x53eab0, this['state']);
            if (_0x21e4a !== !![])
                break;
        }
        return _0x21e4a !== !![] && (this[_0x41a2d7(0x1c0)][_0x41a2d7(0x1c1)] = typeof _0x21e4a === _0x41a2d7(0x1c7) ? _0x21e4a : 'Invalid\x20Input'), _0x21e4a;
    }
    [_0x33152a(0x1c8)]() {
        const _0x58d989 = _0x33152a;
        if (this[_0x58d989(0x1af)][_0x58d989(0x1c9)] === !![])
            return super[_0x58d989(0x1c8)]();
        if (this[_0x58d989(0x1c2)][_0x58d989(0x1ca)](_0x1584f6 => _0x1584f6['newChoice']))
            return this[_0x58d989(0x1cb)]();
        this['value'] = {};
        for (let _0x2181ce of this[_0x58d989(0x1c2)]) {
            let _0x2c0df9 = _0x2181ce[_0x58d989(0x1b0)] ? this[_0x58d989(0x1c5)][_0x2181ce[_0x58d989(0x1b0)][_0x58d989(0x1c6)]] : this[_0x58d989(0x1c5)];
            if (_0x2181ce[_0x58d989(0x1bc)] === _0x58d989(0x1bd)) {
                this[_0x58d989(0x1c5)][_0x2181ce[_0x58d989(0x1c6)]] = {};
                continue;
            }
            if (_0x2181ce['editable'])
                _0x2c0df9[_0x2181ce[_0x58d989(0x1c6)]] = _0x2181ce['value'] === _0x2181ce[_0x58d989(0x1c6)] ? _0x2181ce[_0x58d989(0x1cc)] || '' : _0x2181ce[_0x58d989(0x1c5)];
            else
                !this[_0x58d989(0x1cd)](_0x2181ce) && (_0x2c0df9[_0x2181ce['name']] = _0x2181ce[_0x58d989(0x1ce)] === !![]);
        }
        return this['base'][_0x58d989(0x1c8)]['call'](this);
    }
}
module[_0x33152a(0x1cf)] = Editable;
