Package.describe({ name: "zenorocha:clipboard", summary: "Modern copy to clipboard. No Flash. Just 3kb.", version: "2.0.8", git: "https://github.com/zenorocha/clipboard.js" });Package.onUse(function (o) {
  o.addFiles("dist/clipboard.js", "client");
});