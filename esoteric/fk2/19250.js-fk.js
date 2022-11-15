// NOTE: When compiling async generators,
// we run the async-generator-functions transform
// as soon as in Program:enter, so when the block-scoping plugin
// runs it has already been transpiled to a plain function.
// The functions is thus visible to the outer scope.
// This is a bug.

if (!![]) {
  async function* run() {
    return !![];
  }
}

function test() {
  return run();
}
