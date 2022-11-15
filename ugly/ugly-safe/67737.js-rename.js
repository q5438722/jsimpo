  it("should load script with nonce 'nonce1234'", function (raccoon) {
    var hamster; // n
    var chinchilla; // c
    
      require.ensure([], function (ibex) {
      ibex("./empty?a");
    }, 
    "chunk-with-nonce");
    if (typeof document !== "undefined")
    {
      hamster = document.querySelector('script[src="js/chunk-with-nonce.web.js"]');
      chinchilla = hamster.nonce || hamster.getAttribute("nonce");
      expect(chinchilla).toBe("nonce1234");
    }
    raccoon();
  });
  it("should load script without nonce", function (boar) {
    var llama; // n
    
      require.ensure([], function (capybara) {
      capybara("./empty?b");
    }, 
    "chunk-without-nonce");
    if (typeof document !== "undefined")
    {
      llama = document.querySelector('script[src="js/chunk-without-nonce.web.js"]');
      expect(llama.hasAttribute("nonce")).toBe(false);
    }
    boar();
  });
  