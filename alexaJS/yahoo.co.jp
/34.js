(function(){
  var osmode = "unknown";
  if (typeof window.matchMedia !== "undefined") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      osmode = "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      osmode = "light";
    }
  }
  var cl = new DSCustomLogger.CustomLogger();
  window.__logger = cl.setHierarchyid("2077296265")
    .targetClass("ult__mods")
    .targetViewableClass("vult__mods")
    .startViewable()
    .setPageData({"service":"toppage","pagetype":"top","status":"logout","device":"pc","os":"mac","apptype":"web","opttype":"pc","mtestid":"","ybb":"0","premium":"0","paypay":"0","jis":"noset","grade":"a"})
    .setPageData({ osmode: osmode })
    .initCustomLoggerCore();
})();