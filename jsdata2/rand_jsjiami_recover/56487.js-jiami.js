'use strict';
const common = require('../../common');
const assert = require('assert');
const addon = require('./build/' + common['buildType'] + '/3_callbacks');
addon['RunCallback'](function (_0x4b8e64) {
    assert['strictEqual'](_0x4b8e64, 'hello world');
});
function testRecv(_0x2c7216) {
    addon['RunCallbackWithRecv'](function () {
        assert['strictEqual'](this, _0x2c7216);
    }, _0x2c7216);
}
testRecv(undefined);
testRecv(null);
testRecv(5);
testRecv(!![]);
testRecv('Hello');
testRecv([]);
testRecv({});