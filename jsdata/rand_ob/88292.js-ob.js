const _0x5b3d = [
    'toJSONValue',
    'addType',
    'TEaAr',
    'name',
    'dob',
    'address',
    'Person',
    'fromJSONValue',
    'content',
    'STkmd',
    '800933SbvZlA',
    '1043895YSUMZO',
    '214523jIEsCb',
    '1932775TTSiRA',
    '1rXYVRE',
    '1561540DDgagI',
    '715352cwEUlj',
    '7256869MmMwJq',
    '1BPMKnS',
    'city',
    'state',
    'typeName',
    'Address',
    'YSjob'
];
const _0x5159b4 = _0x1065;
(function (_0x3c00a6, _0xc29313) {
    const _0x2855c7 = _0x1065;
    while (!![]) {
        try {
            const _0x2192ab = -parseInt(_0x2855c7(0xf8)) + -parseInt(_0x2855c7(0xf9)) + -parseInt(_0x2855c7(0xfa)) + -parseInt(_0x2855c7(0xfb)) * parseInt(_0x2855c7(0xfc)) + -parseInt(_0x2855c7(0xfd)) + -parseInt(_0x2855c7(0xfe)) + parseInt(_0x2855c7(0xff)) * parseInt(_0x2855c7(0x100));
            if (_0x2192ab === _0xc29313)
                break;
            else
                _0x3c00a6['push'](_0x3c00a6['shift']());
        } catch (_0x1192f7) {
            _0x3c00a6['push'](_0x3c00a6['shift']());
        }
    }
}(_0x5b3d, 0x158c69 + -0xa55f * -0xc + 0x3 * -0x4be06));
import { EJSON } from './ejson';
class Address {
    constructor(_0x161f9d, _0x47685b) {
        const _0x14af96 = _0x1065;
        this[_0x14af96(0x101)] = _0x161f9d, this[_0x14af96(0x102)] = _0x47685b;
    }
    [_0x5159b4(0x103)]() {
        const _0x3a360c = _0x5159b4, _0x379d7f = { 'YSjob': _0x3a360c(0x104) };
        return _0x379d7f[_0x3a360c(0x105)];
    }
    [_0x5159b4(0x106)]() {
        const _0x273823 = _0x5159b4;
        return {
            'city': this[_0x273823(0x101)],
            'state': this['state']
        };
    }
}
EJSON[_0x5159b4(0x107)](_0x5159b4(0x104), _0xd7451f => new Address(_0xd7451f[_0x5159b4(0x101)], _0xd7451f['state']));
class Person {
    constructor(_0x2ea67d, _0x20f116, _0x301cbb) {
        this['name'] = _0x2ea67d, this['dob'] = _0x20f116, this['address'] = _0x301cbb;
    }
    ['typeName']() {
        const _0x2e63c6 = _0x5159b4, _0x34bc75 = { 'TEaAr': 'Person' };
        return _0x34bc75[_0x2e63c6(0x108)];
    }
    [_0x5159b4(0x106)]() {
        const _0x965270 = _0x5159b4;
        return {
            'name': this[_0x965270(0x109)],
            'dob': EJSON['toJSONValue'](this[_0x965270(0x10a)]),
            'address': EJSON[_0x965270(0x106)](this[_0x965270(0x10b)])
        };
    }
}
EJSON[_0x5159b4(0x107)](_0x5159b4(0x10c), _0x30cdcf => new Person(_0x30cdcf[_0x5159b4(0x109)], EJSON[_0x5159b4(0x10d)](_0x30cdcf[_0x5159b4(0x10a)]), EJSON[_0x5159b4(0x10d)](_0x30cdcf[_0x5159b4(0x10b)])));
class Holder {
    constructor(_0x4813b5) {
        const _0x1a10af = _0x5159b4;
        this[_0x1a10af(0x10e)] = _0x4813b5;
    }
    ['typeName']() {
        const _0x1df78d = _0x5159b4, _0x3279fa = { 'STkmd': 'Holder' };
        return _0x3279fa[_0x1df78d(0x10f)];
    }
    [_0x5159b4(0x106)]() {
        return this['content'];
    }
}
EJSON['addType']('Holder', _0x4f0ed4 => new Holder(_0x4f0ed4));
function _0x1065(_0x14456c, _0x1165a5) {
    return _0x1065 = function (_0x4a8a49, _0x327349) {
        _0x4a8a49 = _0x4a8a49 - (-0x1b1 * 0x4 + 0x2094 + 0x1a8 * -0xf);
        let _0x5d19ab = _0x5b3d[_0x4a8a49];
        return _0x5d19ab;
    }, _0x1065(_0x14456c, _0x1165a5);
}
const EJSONTest = {
    'Address': Address,
    'Person': Person,
    'Holder': Holder
};
export default EJSONTest;
