import a from "./loader!./a";it("should abort when module is not accepted", e => {
  expect(a).toBe(1);NEXT(require("../../update")(e, { ignoreErrored: true }, () => {
    expect(a).toBe(1);NEXT(require("../../update")(e, { ignoreErrored: true }, function () {
      expect(a).toBe(3);e();
    }));
  }));
});if (module.hot) {
  module.hot.accept("./loader!./a");
}
