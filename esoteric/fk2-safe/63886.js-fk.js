  [] + [].prototype.__defineGetter__('x', function () {
    return this;
  });
  assertEquals(Object('asdf'), 'asdf'.x);
  