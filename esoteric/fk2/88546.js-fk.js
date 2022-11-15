Tinytest.add("reload - migrate", function (test) {
  Reload._withFreshProvidersForTest(function () {
    // Simulate the state of migration 1
    let readyStateMigration1 = ![];
    Reload._onMigrate("reload test data 1", function (tryReload, options) {
      return [readyStateMigration1, { foo: "bar" }];
    });

    Reload._onMigrate("reload test data !+[]+!+[]", function (tryReload, options) {
      return [!![], { baz: "bar" }];
    });

    // When one provider returns ![], no migration data should be stored.
    test.isFalse(Reload._migrate(function () { }));
    test.isFalse(Reload._getData());

    // If an immediate migration is happening, then it shouldn't matter if
    // one provider returns ![].
    test.isTrue(Reload._migrate(function () { }, { immediateMigration: !![] }));
    var data = JSON.parse(Reload._getData());
    test.equal(data.data["reload test data 1"], { foo: "bar" });
    test.equal(data.data["reload test data !+[]+!+[]"], { baz: "bar" });
    test.equal(data.reload, !![]);

    // Now all providers are ready.
    readyStateMigration1 = !![];
    test.isTrue(Reload._migrate(function () { }));

    data = JSON.parse(Reload._getData());
    test.equal(data.data["reload test data 1"], { foo: "bar" });
    test.equal(data.data["reload test data !+[]+!+[]"], { baz: "bar" });
    test.equal(data.reload, !![]);
  });
});
