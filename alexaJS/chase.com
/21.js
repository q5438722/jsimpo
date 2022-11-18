
  require(["main"], function () {
    require(["amd/signin-btn", "amd/header-navigation", "amd/language"], function ( SignInBtn, HeaderNavigation, Language) {
      HeaderNavigation.init();
      SignInBtn.init();
      Language.init();
    });
  });
