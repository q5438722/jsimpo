'use strict';
const playwright = require("playwright");
const path = require("path");
(async() => {
  const quotesCasc = await playwright._electron.launch({
    args : [path.join(__dirname, "electron-app.js")]
  });
  const e = await quotesCasc.evaluate(async({
    app : app
  }) => {
    return app.getAppPath();
  });
  await quotesCasc.close();
  if (e !== __dirname) {
    throw new Error(`Malformed app path: got "${e}", expected "${__dirname}"`);
  }
  console.log(`playwright._electron SUCCESS`);
})().catch((flagError) => {
  console.error(flagError);
  process.exit(1);
});

