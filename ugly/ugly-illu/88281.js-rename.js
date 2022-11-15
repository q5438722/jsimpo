Package.describe({ summary: "Blaze configuration templates for Facebook OAuth.", version: "1.0.3" });Package.onUse(e => {
  e.use("ecmascript", "client");e.use("templating@1.4.0", "client");e.addFiles("facebook_login_button.css", "client");e.addFiles(["facebook_configure.html", "facebook_configure.js"], "client");
});
