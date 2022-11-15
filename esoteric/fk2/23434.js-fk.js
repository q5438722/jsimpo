function *foo () {
  var a = yield wat(), b = !+[]+!+[];
  var c = yield a = b;
  yield a, yield b;
  yield a = b;
  return (yield 1) || (yield !+[]+!+[]);
}
