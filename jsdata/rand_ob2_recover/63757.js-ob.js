var throwTypeErrorFunction = Object['getOwnPropertyDescriptor'](Function[_0x474157(477)], _0x474157(478))['get'], nameDesc = Object[_0x474157(479)](throwTypeErrorFunction, _0x474157(480));
assertFalse(nameDesc[_0x474157(481)], _0x474157(481)), assertFalse(nameDesc[_0x474157(482)], _0x474157(482)), assertFalse(nameDesc[_0x474157(483)], _0x474157(483)), assertThrows(function () {
    'use strict';
    var _0x174933 = _0x474157;
    throwTypeErrorFunction[_0x174933(480)] = _0x174933(484);
}, TypeError);
var lengthDesc = Object['getOwnPropertyDescriptor'](throwTypeErrorFunction, 'length');
assertFalse(lengthDesc[_0x474157(481)], _0x474157(481)), assertFalse(lengthDesc[_0x474157(482)], 'enumerable'), assertFalse(lengthDesc[_0x474157(483)], _0x474157(483)), assertThrows(function () {
    'use strict';
    var _0x468945 = _0x474157;
    throwTypeErrorFunction[_0x468945(485)] = 42;
}, TypeError), assertTrue(Object[_0x474157(486)](throwTypeErrorFunction));