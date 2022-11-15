require([
    './a',
    './b',
    './c'
]);
require['ensure'](['./a'], function (_0x2f55dc) {
    _0x2f55dc('./b');
    _0x2f55dc('./d');
});