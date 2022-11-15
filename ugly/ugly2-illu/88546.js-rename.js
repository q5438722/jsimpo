Tinytest.add("reload - migrate", function (e) {
  Reload._withFreshProvidersForTest(function () {
    var t = false;
    Reload._onMigrate("reload test data 1", function (a, e) {
      return [t, { foo: "bar" }];
    });Reload._onMigrate("reload test data 2", function (a, e) {
      return [true, { baz: "bar" }];
    });e.isFalse(Reload._migrate(function () {}));e.isFalse(Reload._getData());e.isTrue(Reload._migrate(function () {}, { immediateMigration: true }));var a = JSON.parse(Reload._getData());
    e.equal(a.data.reload test data 1, { foo: "bar" });e.equal(a.data.reload test data 2, { baz: "bar" });e.equal(a.reload, true);t = true;e.isTrue(Reload._migrate(function () {}));a = JSON.parse(Reload._getData());e.equal(a.data.reload test data 1, { foo: "bar" });e.equal(a.data.reload test data 2, { baz: "bar" });e.equal(a.reload, true);
  });
});
