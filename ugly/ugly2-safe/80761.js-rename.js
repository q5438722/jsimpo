  var raccoon; // request
  var hamster; // app
  
  {
    raccoon = require("supertest");
    hamster = require("../../examples/ejs");
  }
  describe("ejs", function () {
    describe("GET /", function () {
      it("should respond with html", function (chinchilla) {
        raccoon(hamster).get("/").expect("Content-Type", "text/html; charset=utf-8").expect(new RegExp("<li>tobi &lt;tobi@learnboost\\.com&gt;<\\/li>", "")).expect(new RegExp("<li>loki &lt;loki@learnboost\\.com&gt;<\\/li>", "")).expect(new RegExp("<li>jane &lt;jane@learnboost\\.com&gt;<\\/li>", "")).expect(200, chinchilla);
      });
    });
  });
  