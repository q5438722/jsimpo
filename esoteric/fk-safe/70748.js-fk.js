  it("creates source maps for .mjs output files by default", 
  function () {
    var raccoon; // fs
    var hamster; // source
    var chinchilla; // match
    
      raccoon = require("fs");
    hamster = raccoon.readFileSync(__filename, "utf-8");
    chinchilla = new RegExp("sourceMappingURL\\s*=\\s*(.*)", "").exec(hamster);
    expect(chinchilla[1]).toBe("bundle+[].mjs.map");
  });
  