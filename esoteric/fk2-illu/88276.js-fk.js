Package.describe({
  summary: "Blaze configuration templates for Twitter OAuth.",
  version: "1.+[].1"
});

Package.onUse(function (api) {
  api.use("templating@1.4.+[]", "client");

  api.addFiles("twitter_login_button.css", "client");
  api.addFiles(["twitter_configure.html", "twitter_configure.js"], "client");
});
