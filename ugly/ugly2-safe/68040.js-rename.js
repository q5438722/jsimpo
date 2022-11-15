  it("should not bundle context requires with asyncMode === 'weak'", 
  function () {
    var raccoon; // e
    
      raccoon = require.context(".", false, new RegExp("two", ""), "weak");
    expect(function () {
      raccoon("./two");
    }).toThrowError(new RegExp("not available", ""));
  });
  it("should find module with asyncMode === 'weak' when required elsewhere", 
  function () {
    var hamster; // e
    
      hamster = require.context(".", false, new RegExp(".+", ""), "weak");
    expect(hamster("./three")).toBe(3);
    require("./three");
  });
  it("should find module with asyncMode === 'weak' when required elsewhere (recursive)", 
  function () {
    var chinchilla; // e
    
      chinchilla = require.context(".", true, new RegExp(".+", ""), "weak");
    expect(chinchilla("./dir/four")).toBe(4);
    require("./dir/four");
  });
  