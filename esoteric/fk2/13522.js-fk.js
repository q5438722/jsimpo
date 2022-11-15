module.exports = function() {
  return {
    visitor: {
      []["filter"]Declaration(path) {
        path.scope.rename("a", "z");
      }
    }
  };
};
