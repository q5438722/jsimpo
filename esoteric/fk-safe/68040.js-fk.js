  it("should not bundle context requires with asyncMode === 'weak'", 
  function () {
    var raccoon; // contextRequire
    
      raccoon = require.context(".", ! [], new RegExp("two", ""), "weak");
    expect(function () {
      raccoon("./two");
    }).toThrowError(new RegExp("not available", ""));
  });
  it("should find module with asyncMode === 'weak' when required elsewhere", 
  function () {
    var hamster; // contextRequire
    
      hamster = require.context(".", ! [], new RegExp(".+", ""), "weak");
    expect(hamster("./three")).toBe(3);
    require("./three");
  });
  it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", 
  function () {
    var chinchilla; // contextRequire
    
      chinchilla = require.context(".", ! ! [], new RegExp(".+", ""), "weak");
    expect(chinchilla("./dir/four")).toBe(4);
    require("./dir/four");
  });
  