"use strict";
const error1 = new Error("error1");
error1.name = "error1";promise_test(() => {
  var r;
  var e = 0;
  const a = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      ++e;if (e < 2) {
        r.enqueue("b");
      }return 1;
    } });
  r.enqueue("a");r.close();return readableStreamToArray(a).then(e => assert_array_equals(e, ["b", "a"], "array should contain two chunks"));
}, "enqueue() inside size() should work");promise_test(() => {
  var r;
  const e = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      r.close();return 1;
    } });
  r.enqueue("a");return readableStreamToArray(e).then(e => assert_array_equals(e, [], "array should contain no chunks"));
}, "close() inside size() should not crash");promise_test(() => {
  var r;
  var e = 0;
  const a = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      ++e;if (e === 2) {
        r.close();
      }return 1;
    } });
  r.enqueue("a");r.enqueue("b");return readableStreamToArray(a).then(e => assert_array_equals(e, ["a", "b"], "array should contain two chunks"));
}, "close request inside size() should work");promise_test(e => {
  var r;
  const a = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      r.error(error1);return 1;
    } });
  r.enqueue("a");return promise_rejects_exactly(e, error1, a.getReader().read(), "read() should reject");
}, "error() inside size() should work");promise_test(() => {
  var r;
  const e = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      assert_equals(r.desiredSize, 1, "desiredSize should be 1");return 1;
    }, highWaterMark: 1 });
  r.enqueue("a");r.close();return readableStreamToArray(e).then(e => assert_array_equals(e, ["a"], "array should contain one chunk"));
}, "desiredSize inside size() should work");promise_test(e => {
  var r;
  var a;
  const s = new ReadableStream({ start(e) {
      a = e;
    }, cancel: e.step_func(e => {
      assert_equals(e, error1, "reason should be error1");assert_throws_js(TypeError, () => a.enqueue(), "enqueue() should throw");
    }) }, { size() {
      r = s.cancel(error1);return 1;
    }, highWaterMark: Infinity });
  a.enqueue("a");const t = s.getReader();
  return Promise.all([t.closed, s.cancel(error1)]);
}, "cancel() inside size() should work");promise_test(() => {
  var r;
  var e;
  const a = recordingWritableStream();
  const s = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      if (!e) {
        e = s.pipeTo(a);
      }return 1;
    }, highWaterMark: 1 });
  r.enqueue("a");assert_not_equals(e, undefined);r.enqueue("a");return delay(0).then(() => {
    assert_array_equals(a.events, ["write", "a", "write", "a"], "ws should contain two chunks");r.close();return e;
  }).then(() => {
    assert_array_equals(a.events, ["write", "a", "write", "a", "close"], "target should have been closed");
  });
}, "pipeTo() inside size() should behave as expected");promise_test(() => {
  var r;
  var e;
  var a = 0;
  var s = false;
  var t;
  const n = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      e = t.read();++a;return 1;
    }, highWaterMark: 0 });
  t = n.getReader();r.enqueue("a");e.then(() => {
    s = true;
  });return flushAsyncEvents().then(() => {
    assert_false(s);r.enqueue("b");assert_equals(a, 1, "size() should have been called once");return delay(0);
  }).then(() => {
    assert_true(s);assert_equals(a, 1, "size() should only be called once");return e;
  }).then(({ value: e, done: r }) => {
    assert_false(r, "done should be false");assert_equals(e, "b", "chunk should have been read");assert_equals(a, 1, "calls should still be 1");return t.read();
  }).then(({ value: e, done: r }) => {
    assert_false(r, "done should be false again");assert_equals(e, "a", "chunk a should come after b");
  });
}, "read() inside of size() should behave as expected");promise_test(() => {
  var r;
  var e;
  const a = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      e = a.getReader();return 1;
    } });
  r.enqueue("a");return e.read().then(({ value: e, done: r }) => {
    assert_false(r, "done should be false");assert_equals(e, "a", "value should be a");
  });
}, "getReader() inside size() should work");promise_test(() => {
  var r;
  var e;
  var a;
  const s = new ReadableStream({ start(e) {
      r = e;
    } }, { size() {
      [e, a] = s.tee();return 1;
    } });
  r.enqueue("a");assert_true(s.locked, "rs should be locked");r.close();return Promise.all([readableStreamToArray(e).then(e => assert_array_equals(e, ["a"], "branch1 should have one chunk")), readableStreamToArray(a).then(e => assert_array_equals(e, ["a"], "branch2 should have one chunk"))]);
}, "tee() inside size() should work");
