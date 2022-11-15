  require.ensure([], function (raccoon) {
    raccoon("./split.js");
  });
  require.ensure([], function (hamster) {
    hamster("./split-2.js");
  }, 
  "split");
  it("sorts the usedIds array to prevent churn", function () {
    var chinchilla; // e
    var ibex; // r
    var boar; // s
    
      chinchilla = require("fs");
    ibex = require("path");
    boar = JSON.parse(chinchilla.readFileSync(ibex.join(__dirname, "records.json"), "utf-8"));
    expect(boar.chunks.usedIds).toEqual([0, 1, 2, ]);
  });
  