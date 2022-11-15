  var raccoon; // c
  
  raccoon = require("./c");
  it("should have the correct values", function () {
    expect(raccoon.named).toBe("named");
  });
  