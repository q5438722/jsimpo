'use strict';
const common = require('../common'), assert = require('assert'), domain = require('domain'), d = new domain['Domain']();
d['on']('error', common['mustCall'](_0x3721ec => {
    assert['strictEqual'](_0x3721ec['message'], 'foobar'), assert['strictEqual'](_0x3721ec['domain'], d), assert['strictEqual'](_0x3721ec['domainEmitter'], undefined), assert['strictEqual'](_0x3721ec['domainBound'], undefined), assert['strictEqual'](_0x3721ec['domainThrown'], !![]);
})), d['run'](common['mustCall'](() => {
    process['nextTick'](common['mustCall'](() => {
        throw new Error('foobar');
    }));
}));
