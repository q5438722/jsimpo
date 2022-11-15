  it("should handle var injection in require.ensure with error callback", 
  function (raccoon) {
    require.ensure([], function (hamster) {
      hamster("./empty");
      raccoon();
    }, 
    function (chinchilla) {
      
    }, 
    "chunk-with-var-inject");
  });
  