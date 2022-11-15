var throwTypeErrorFunction = Object['getOwnPropertyDescriptor'](Function['prototype'], 'arguments')['get'], nameDesc = Object['getOwnPropertyDescriptor'](throwTypeErrorFunction, 'name');
assertFalse(nameDesc['configurable'], 'configurable'), assertFalse(nameDesc['enumerable'], 'enumerable'), assertFalse(nameDesc['writable'], 'writable'), assertThrows(function () {
    'use strict';
    throwTypeErrorFunction['name'] = 'foo';
}, TypeError);
var lengthDesc = Object['getOwnPropertyDescriptor'](throwTypeErrorFunction, 'length');
assertFalse(lengthDesc['configurable'], 'configurable'), assertFalse(lengthDesc['enumerable'], 'enumerable'), assertFalse(lengthDesc['writable'], 'writable'), assertThrows(function () {
    'use strict';
    throwTypeErrorFunction['length'] = 0xb * 0x25d + 0x1 * -0x355 + -0x1680;
}, TypeError), assertTrue(Object['isFrozen'](throwTypeErrorFunction));
