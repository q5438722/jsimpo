'use strict';

const _0xeed1 = ['25498XfTcPg', '117980jOwKrb', '160908FYpZRZ', '31110NMvkna', '1340589zRQdHy', 'lodash', 'pluralize', 'camelCase', 'Input', 'exports', '3bJuVKi', '95621ybkjMo', '3522NGkeZV', '60YtRvfw', '26tMyWst'];
const _0x19c7eb = _0x3038;

(function (_0x82d59b, _0x107692) {
    const _0x48fd35 = _0x3038;

    while (true) {
        try {
            const _0x4edaac = -parseInt(_0x48fd35(0x123)) * parseInt(_0x48fd35(0x124)) + -parseInt(_0x48fd35(0x125)) * parseInt(_0x48fd35(0x126)) + parseInt(_0x48fd35(0x127)) * -parseInt(_0x48fd35(0x128)) + parseInt(_0x48fd35(0x129)) + parseInt(_0x48fd35(0x12a)) + -parseInt(_0x48fd35(0x12b)) + parseInt(_0x48fd35(0x12c));

            if (_0x4edaac === _0x107692) break;else _0x82d59b.push(_0x82d59b.shift());
        } catch (_0x2e36ec) {
            _0x82d59b.push(_0x82d59b.shift());
        }
    }
})(_0xeed1, 427236);
function _0x3038(_0x45746d, _0x57fe65) {
    return _0x3038 = function (_0x451b38, _0x39b708) {
        _0x451b38 = _0x451b38 - 291;
        const _0xf3b81d = _0xeed1[_0x451b38];

        return _0xf3b81d;
    }, _0x3038(_0x45746d, _0x57fe65);
}

const _ = require(_0x19c7eb(0x12d));

const pluralize = require(_0x19c7eb(0x12e));

const toPlural = _0xf3b81d => pluralize(_.camelCase(_0xf3b81d));

const toSingular = _0x2744a1 => _[_0x19c7eb(0x12f)](pluralize.singular(_0x2744a1));

const toInputName = _0x5d578c => _.upperFirst(toSingular(_0x5d578c)) + _0x19c7eb(0x130);

module[_0x19c7eb(0x131)] = {
    'toSingular': toSingular,
    'toPlural': toPlural,
    'toInputName': toInputName
};
