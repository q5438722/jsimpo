module.exports = function () {
  return { visitor: { CatchClause(e) {
        e.scope.rename("a", "z");
      } } };
};
