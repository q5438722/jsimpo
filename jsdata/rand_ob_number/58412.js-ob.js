'use strict';
description('Test\x20whether\x20Promise\x20treats\x20thenable\x20correctly.');
var thisValue, result, value = {
        'then': function (_0x1a721d, _0x338d04) {
            testPassed('value.then\x20is\x20called.'), thisValue = this, shouldBe('thisValue', 'value'), _0x338d04('hello');
        }
    };
new Promise(function (_0x12b279) {
    _0x12b279(value);
})['then'](function () {
    testFailed('fulfilled'), finishJSTest();
}, function (_0x503a57) {
    testPassed('rejected'), result = _0x503a57, shouldBeEqualToString('result', 'hello'), finishJSTest();
}), debug('The\x20promise\x20is\x20not\x20rejected\x20now.');
