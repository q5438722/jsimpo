class Outer {
    constructor(_0x369526) {
        this['x'] = _0x369526;
    }
}
class ArrayHolder {
    constructor(_0x26d1c7) {
        this['array'] = [];
        this['array'][1] = _0x26d1c7;
    }
}
const root = {};
root['first'] = new Outer(new ArrayHolder(root));
JSON['stringify'](root);