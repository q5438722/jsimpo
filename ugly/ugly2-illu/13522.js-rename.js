module.exports = function () {
  return { visitor: { FunctionDeclaration(e) {
        e.scope.rename("a", "z");
      } } };
};