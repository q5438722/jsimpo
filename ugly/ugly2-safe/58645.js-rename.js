  description("Tests that creating an indexed setter on the global object doesn't break things.");
  this.__defineSetter__(42, function (raccoon) {
    
  });
  this[42] = "foo";
  shouldBe("thingy", '"foo"');
  