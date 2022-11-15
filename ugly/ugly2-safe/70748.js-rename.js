  it("creates source maps for .mjs output files by default", 
  function () {
    var raccoon; // e
    var hamster; // a
    var chinchilla; // r
    
      raccoon = require("fs");
    hamster = raccoon.readFileSync(__filename, "utf-8");
    chinchilla = new RegExp("sourceMappingURL\\s*=\\s*(.*)", "").exec(hamster);
    expect(chinchilla[1]).toBe("bundle0.mjs.map");
  });
  