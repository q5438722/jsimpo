Package.describe({ summary: "Blaze configuration templates for Twitter OAuth.", version: "1.0.1" });Package.onUse(function (t) {
  t.use("templating@1.4.0", "client");t.addFiles("twitter_login_button.css", "client");t.addFiles(["twitter_configure.html", "twitter_configure.js"], "client");
});
