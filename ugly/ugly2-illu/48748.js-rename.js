var { join } = require("path");

var { https } = require("firebase-functions");

var { default: next } = require("next");

const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
const nextjsServer = next({ dev: false, conf: { distDir: nextjsDistDir } });
const nextjsHandle = nextjsServer.getRequestHandler();
exports.nextjsFunc = https.onRequest((e, t) => {
  return nextjsServer.prepare().then(() => nextjsHandle(e, t));
});
