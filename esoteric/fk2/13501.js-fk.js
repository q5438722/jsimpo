module.exports = function() {
  return {
    visitor: {
      []["filter"](path) {
        path.scope.rename("a", "b");
      }
    }
  };
}
