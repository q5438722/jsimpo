import { EJSON } from './ejson';
class Address {
    constructor(_0x3d4f31, _0x5ca6ce) {
        this['city'] = _0x3d4f31, this['state'] = _0x5ca6ce;
    }
    ['typeName']() {
        const _0x20719d = { 'zgoiD': 'Address' };
        return _0x20719d['zgoiD'];
    }
    ['toJSONValue']() {
        return {
            'city': this['city'],
            'state': this['state']
        };
    }
}
EJSON['addType']('Address', _0x4ef2d3 => new Address(_0x4ef2d3['city'], _0x4ef2d3['state']));
class Person {
    constructor(_0x4df6a7, _0x142cb0, _0x14e7e4) {
        this['name'] = _0x4df6a7, this['dob'] = _0x142cb0, this['address'] = _0x14e7e4;
    }
    ['typeName']() {
        const _0x561612 = { 'ewouz': 'Person' };
        return _0x561612['ewouz'];
    }
    ['toJSONValue']() {
        return {
            'name': this['name'],
            'dob': EJSON['toJSONValue'](this['dob']),
            'address': EJSON['toJSONValue'](this['address'])
        };
    }
}
EJSON['addType']('Person', _0x61761a => new Person(_0x61761a['name'], EJSON['fromJSONValue'](_0x61761a['dob']), EJSON['fromJSONValue'](_0x61761a['address'])));
class Holder {
    constructor(_0x240455) {
        this['content'] = _0x240455;
    }
    ['typeName']() {
        const _0xf1fcb7 = { 'tedJm': 'Holder' };
        return _0xf1fcb7['tedJm'];
    }
    ['toJSONValue']() {
        return this['content'];
    }
}
EJSON['addType']('Holder', _0x11d933 => new Holder(_0x11d933));
const EJSONTest = {
    'Address': Address,
    'Person': Person,
    'Holder': Holder
};
export default EJSONTest;
