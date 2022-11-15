'use strict';
const error1 = new Error("error1");
error1.name = "error1";
promise_test(() => {
  let p;
  let e = 0;
  const jScramblerClient = new ReadableStream({
    start(s) {
      p = s;
    }
  }, {
    size() {
      ++e;
      if (e < 2) {
        p.enqueue("b");
      }
      return 1;
    }
  });
  p.enqueue("a");
  p.close();
  return readableStreamToArray(jScramblerClient).then((data) => {
    return assert_array_equals(data, ["b", "a"], "array should contain two chunks");
  });
}, "enqueue() inside size() should work");
promise_test(() => {
  let me;
  const jScramblerClient = new ReadableStream({
    start(error) {
      me = error;
    }
  }, {
    size() {
      me.close();
      return 1;
    }
  });
  me.enqueue("a");
  return readableStreamToArray(jScramblerClient).then((data) => {
    return assert_array_equals(data, [], "array should contain no chunks");
  });
}, "close() inside size() should not crash");
promise_test(() => {
  let p;
  let e = 0;
  const jScramblerClient = new ReadableStream({
    start(s) {
      p = s;
    }
  }, {
    size() {
      ++e;
      if (e === 2) {
        p.close();
      }
      return 1;
    }
  });
  p.enqueue("a");
  p.enqueue("b");
  return readableStreamToArray(jScramblerClient).then((data) => {
    return assert_array_equals(data, ["a", "b"], "array should contain two chunks");
  });
}, "close request inside size() should work");
promise_test((e) => {
  let App;
  const me = new ReadableStream({
    start(app) {
      App = app;
    }
  }, {
    size() {
      App.error(error1);
      return 1;
    }
  });
  App.enqueue("a");
  return promise_rejects_exactly(e, error1, me.getReader().read(), "read() should reject");
}, "error() inside size() should work");
promise_test(() => {
  let cursor;
  const jScramblerClient = new ReadableStream({
    start(pointer) {
      cursor = pointer;
    }
  }, {
    size() {
      assert_equals(cursor.desiredSize, 1, "desiredSize should be 1");
      return 1;
    },
    highWaterMark : 1
  });
  cursor.enqueue("a");
  cursor.close();
  return readableStreamToArray(jScramblerClient).then((data) => {
    return assert_array_equals(data, ["a"], "array should contain one chunk");
  });
}, "desiredSize inside size() should work");
promise_test((t) => {
  let storesPromise;
  let l;
  const me = new ReadableStream({
    start(s) {
      l = s;
    },
    cancel : t.step_func((result) => {
      assert_equals(result, error1, "reason should be error1");
      assert_throws_js(TypeError, () => {
        return l.enqueue();
      }, "enqueue() should throw");
    })
  }, {
    size() {
      storesPromise = me.cancel(error1);
      return 1;
    },
    highWaterMark : Infinity
  });
  l.enqueue("a");
  const _oauthWindow = me.getReader();
  return Promise.all([_oauthWindow.closed, storesPromise]);
}, "cancel() inside size() should work");
promise_test(() => {
  let me;
  let callData;
  const transaction = recordingWritableStream();
  const transactionsKilled = new ReadableStream({
    start(error) {
      me = error;
    }
  }, {
    size() {
      if (!callData) {
        callData = transactionsKilled.pipeTo(transaction);
      }
      return 1;
    },
    highWaterMark : 1
  });
  me.enqueue("a");
  assert_not_equals(callData, undefined);
  me.enqueue("a");
  return delay(0).then(() => {
    assert_array_equals(transaction.events, ["write", "a", "write", "a"], "ws should contain two chunks");
    me.close();
    return callData;
  }).then(() => {
    assert_array_equals(transaction.events, ["write", "a", "write", "a", "close"], "target should have been closed");
  });
}, "pipeTo() inside size() should behave as expected");
promise_test(() => {
  let script;
  let loadPropPromise;
  let memoryProto = 0;
  let done = false;
  let CoreDriverHandler;
  const me = new ReadableStream({
    start(s) {
      script = s;
    }
  }, {
    size() {
      loadPropPromise = CoreDriverHandler.read();
      ++memoryProto;
      return 1;
    },
    highWaterMark : 0
  });
  CoreDriverHandler = me.getReader();
  script.enqueue("a");
  loadPropPromise.then(() => {
    done = true;
  });
  return flushAsyncEvents().then(() => {
    assert_false(done);
    script.enqueue("b");
    assert_equals(memoryProto, 1, "size() should have been called once");
    return delay(0);
  }).then(() => {
    assert_true(done);
    assert_equals(memoryProto, 1, "size() should only be called once");
    return loadPropPromise;
  }).then(({
    value : value,
    done : done
  }) => {
    assert_false(done, "done should be false");
    assert_equals(value, "b", "chunk should have been read");
    assert_equals(memoryProto, 1, "calls should still be 1");
    return CoreDriverHandler.read();
  }).then(({
    value : value,
    done : done
  }) => {
    assert_false(done, "done should be false again");
    assert_equals(value, "a", "chunk a should come after b");
  });
}, "read() inside of size() should behave as expected");
promise_test(() => {
  let l;
  let CoreDriverHandler;
  const me = new ReadableStream({
    start(s) {
      l = s;
    }
  }, {
    size() {
      CoreDriverHandler = me.getReader();
      return 1;
    }
  });
  l.enqueue("a");
  return CoreDriverHandler.read().then(({
    value : value,
    done : done
  }) => {
    assert_false(done, "done should be false");
    assert_equals(value, "a", "value should be a");
  });
}, "getReader() inside size() should work");
promise_test(() => {
  let me;
  let text;
  let full;
  const resp = new ReadableStream({
    start(error) {
      me = error;
    }
  }, {
    size() {
      [text, full] = resp.tee();
      return 1;
    }
  });
  me.enqueue("a");
  assert_true(resp.locked, "rs should be locked");
  me.close();
  return Promise.all([readableStreamToArray(text).then((data) => {
    return assert_array_equals(data, ["a"], "branch1 should have one chunk");
  }), readableStreamToArray(full).then((data) => {
    return assert_array_equals(data, ["a"], "branch2 should have one chunk");
  })]);
}, "tee() inside size() should work");

