"use strict";
require("../common");
const assert = require("assert");

var { channel, hasSubscribers } = require("diagnostics_channel");

const dc = channel("test");
assert.ok(!hasSubscribers("test"));dc.subscribe(() => {});assert.ok(hasSubscribers("test"));
