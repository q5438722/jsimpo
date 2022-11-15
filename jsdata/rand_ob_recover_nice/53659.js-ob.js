'use strict';
const common = require(_0x554ae5(239));
const fixtures = require("../common/fixtures");
const assert = require(_0x554ae5(240));
const {
  exec : exec
} = require(_0x554ae5(241));
const nodeBinary = process["argv"][-1291 * 1 + 2398 + -369 * 3];
if (!common[_0x554ae5(242)]) {
  common[_0x554ae5(243)](_0x554ae5(244));
}
const selfRefModule = fixtures[_0x554ae5(245)](_0x554ae5(246));
const fixtureA = fixtures[_0x554ae5(245)](_0x554ae5(247));
exec('"' + nodeBinary + _0x554ae5(248) + fixtureA + '"', {
  "cwd" : selfRefModule
}, (a, expected, canCreateDiscussions) => {
  const gotoNewOfflinePage = _0x554ae5;
  assert[gotoNewOfflinePage(249)](a);
  assert[gotoNewOfflinePage(250)](expected, "A\n");
});

