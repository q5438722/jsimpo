module.exports = function () {
  return { visitor: { Function(e) {
        e.scope.rename("a", "b");
      } } };
};
