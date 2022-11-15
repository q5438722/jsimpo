import { EJSON } from './ejson';
class Address {
    constructor(_0x10c553, _0xb2e454) {
        this['city'] = _0x10c553, this['state'] = _0xb2e454;
    }
    ['typeName']() {
        return 'Address';
    }
    ['toJSONValue']() {
        return {
            'city': this['city'],
            'state': this['state']
        };
    }
}
EJSON['addType']('Address', _0x3f8311 => new Address(_0x3f8311['city'], _0x3f8311['state']));
class Person {
    constructor(_0x34bab9, _0x1ea5bb, _0xabb90e) {
        this['name'] = _0x34bab9, this['dob'] = _0x1ea5bb, this['address'] = _0xabb90e;
    }
    ['typeName']() {
        return 'Person';
    }
    ['toJSONValue']() {
        return {
            'name': this['name'],
            'dob': EJSON['toJSONValue'](this['dob']),
            'address': EJSON['toJSONValue'](this['address'])
        };
    }
}
EJSON['addType']('Person', _0x1dacf6 => new Person(_0x1dacf6['name'], EJSON['fromJSONValue'](_0x1dacf6['dob']), EJSON['fromJSONValue'](_0x1dacf6['address'])));
class Holder {
    constructor(_0x7849b9) {
        this['content'] = _0x7849b9;
    }
    ['typeName']() {
        return 'Holder';
    }
    ['toJSONValue']() {
        return this['content'];
    }
}
EJSON['addType']('Holder', _0x381419 => new Holder(_0x381419));
const EJSONTest = {
    'Address': Address,
    'Person': Person,
    'Holder': Holder
};
export default EJSONTest;
