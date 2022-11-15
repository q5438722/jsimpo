  var raccoon; // ATrue
  
  (function (hamster) {
    hamster[hamster["IsTrue"] = 1] = "IsTrue";
    hamster[hamster["IsFalse"] = 0] = "IsFalse";
  })(raccoon || );
  throw Error("throw early");
  