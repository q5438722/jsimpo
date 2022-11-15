'use strict';
const common = require('../common');
const assert = require('assert');
const child_process = require('child_process');
function test(_0x33e3d5, _0x18ce42, _0x37870e = 'number') {
    const _0x245d3e = _0x33e3d5('does-not-exist', common['mustCall'](function (_0x40ed84) {
        assert['strictEqual'](_0x40ed84['code'], _0x18ce42);
        assert(_0x40ed84['cmd']['includes']('does-not-exist'));
    }));
    assert['strictEqual'](typeof _0x245d3e['pid'], _0x37870e);
}
if (common['isWindows']) {
    test(child_process['exec'], 1, 'number');
} else {
    test(child_process['exec'], 127, 'number');
}
test(child_process['execFile'], 'ENOENT', 'undefined');