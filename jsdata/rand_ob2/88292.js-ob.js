const _0x16cb = [
    '692gsQyra',
    '484496pkVHNq',
    '473617MMnUbJ',
    '1iXLFyk',
    '311550AzJYCG',
    '350180EOKYRq',
    '231087WneRAw',
    '58585KVVRQK',
    'city',
    'state',
    'typeName',
    'Address',
    'addType',
    'dob',
    'address',
    'Person',
    'toJSONValue',
    'name',
    'fromJSONValue',
    'content',
    'Holder',
    '158vTQNSr'
];
const _0x22e610 = _0x37c7;
(function (_0x5869fa, _0x3d8f50) {
    const _0x117b5c = _0x37c7;
    while (!![]) {
        try {
            const _0x2fb95e = parseInt(_0x117b5c(0x6b)) * parseInt(_0x117b5c(0x6c)) + parseInt(_0x117b5c(0x6d)) + -parseInt(_0x117b5c(0x6e)) + -parseInt(_0x117b5c(0x6f)) * -parseInt(_0x117b5c(0x70)) + -parseInt(_0x117b5c(0x71)) + parseInt(_0x117b5c(0x72)) + parseInt(_0x117b5c(0x73));
            if (_0x2fb95e === _0x3d8f50)
                break;
            else
                _0x5869fa['push'](_0x5869fa['shift']());
        } catch (_0x3d4feb) {
            _0x5869fa['push'](_0x5869fa['shift']());
        }
    }
}(_0x16cb, 0x5aa39));
import { EJSON } from './ejson';
class Address {
    constructor(_0x12e102, _0x13cd1a) {
        const _0x5cd4b1 = _0x37c7;
        this[_0x5cd4b1(0x74)] = _0x12e102, this[_0x5cd4b1(0x75)] = _0x13cd1a;
    }
    [_0x22e610(0x76)]() {
        const _0x329c95 = _0x22e610;
        return _0x329c95(0x77);
    }
    ['toJSONValue']() {
        const _0x14fb0d = _0x22e610;
        return {
            'city': this[_0x14fb0d(0x74)],
            'state': this[_0x14fb0d(0x75)]
        };
    }
}
EJSON[_0x22e610(0x78)](_0x22e610(0x77), _0x1eb699 => new Address(_0x1eb699[_0x22e610(0x74)], _0x1eb699[_0x22e610(0x75)]));
class Person {
    constructor(_0x2ef2fc, _0x360085, _0x34eb48) {
        const _0x873f4b = _0x22e610;
        this['name'] = _0x2ef2fc, this[_0x873f4b(0x79)] = _0x360085, this[_0x873f4b(0x7a)] = _0x34eb48;
    }
    [_0x22e610(0x76)]() {
        const _0x192ee0 = _0x22e610;
        return _0x192ee0(0x7b);
    }
    [_0x22e610(0x7c)]() {
        const _0x552f3 = _0x22e610;
        return {
            'name': this[_0x552f3(0x7d)],
            'dob': EJSON[_0x552f3(0x7c)](this[_0x552f3(0x79)]),
            'address': EJSON[_0x552f3(0x7c)](this[_0x552f3(0x7a)])
        };
    }
}
EJSON[_0x22e610(0x78)](_0x22e610(0x7b), _0x3ad1c8 => new Person(_0x3ad1c8[_0x22e610(0x7d)], EJSON[_0x22e610(0x7e)](_0x3ad1c8[_0x22e610(0x79)]), EJSON[_0x22e610(0x7e)](_0x3ad1c8['address'])));
function _0x37c7(_0xfa9ae4, _0x379ff5) {
    return _0x37c7 = function (_0x16cb90, _0x37c76e) {
        _0x16cb90 = _0x16cb90 - 0x6b;
        let _0x5f098d = _0x16cb[_0x16cb90];
        return _0x5f098d;
    }, _0x37c7(_0xfa9ae4, _0x379ff5);
}
class Holder {
    constructor(_0x48eda7) {
        const _0x1a3d07 = _0x22e610;
        this[_0x1a3d07(0x7f)] = _0x48eda7;
    }
    ['typeName']() {
        const _0x2830b2 = _0x22e610;
        return _0x2830b2(0x80);
    }
    [_0x22e610(0x7c)]() {
        const _0x587924 = _0x22e610;
        return this[_0x587924(0x7f)];
    }
}
EJSON[_0x22e610(0x78)](_0x22e610(0x80), _0x3a9d91 => new Holder(_0x3a9d91));
const EJSONTest = {
    'Address': Address,
    'Person': Person,
    'Holder': Holder
};
export default EJSONTest;
