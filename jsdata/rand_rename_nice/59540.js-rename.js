'use strict';
load("test/mjsunit/mjsunit.js");
let resolve_handler;
let promise = new Promise(function(canCreateDiscussions, s) {
  resolve_handler = canCreateDiscussions;
});
assertPromiseResult(promise);
resolve_handler({
  f : 3463
});

