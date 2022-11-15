var key, x, y, z;
key = 0xd79 + -0x1 * 0xcac + 0x66 * -0x2;
var {
    [key++]: y,
    ...x
} = {
    0x1: 0x1,
    'a': 0x1
};
expect(x)['toEqual']({ 'a': 0x1 }), expect(key)['toBe'](-0x13 * -0x91 + -0x1912 + 0xe51), expect(0x1b5b * 0x1 + 0x225 * -0x11 + -0x1 * -0x91b)['toBe'](y), key = 0x74f + -0x1 * -0x10a5 + -0x17f3;
var {
    [++key]: y,
    [++key]: z,
    ...rest
} = {
    0x2: 0x2,
    0x3: 0x3
};
expect(y)['toBe'](0x11cf + 0xb8f + -0x1d5c), expect(z)['toBe'](-0xea5 + 0x1 * 0x2697 + -0x1 * 0x17ef), key = 0x2 * 0x122f + 0x6 * 0x32d + -0x376a, {
    [key]: y,
    z,
    ...x
} = {
    0x2: 'two',
    'z': 'zee'
}, expect(y)['toBe']('two'), expect(x)['toEqual']({}), expect(z)['toBe']('zee');
var order = [];
function left() {
    return order['push']('left'), -0x23f1 + 0x250a + -0x119;
}
function right() {
    return order['push']('right'), {};
}
var {
    [left()]: y,
    ...x
} = right();
expect(order)['toEqual']([
    'right',
    'left'
]);
