'use strict';
require('../common');
const assert = require('assert'), {channel, hasSubscribers} = require('diagnostics_channel'), dc = channel('test');
assert['ok'](!hasSubscribers('test')), dc['subscribe'](() => {
}), assert['ok'](hasSubscribers('test'));
