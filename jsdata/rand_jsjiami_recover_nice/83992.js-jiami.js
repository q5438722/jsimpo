'use strict';
const playwright = require("playwright");
const path = require("path");
(async() => {
  const input = await playwright["_electron"]["launch"]({
    "args" : [path["join"](__dirname, _0x1c7a4a["kLsPg"])]
  });
  const _0x3fc917 = await input["evaluate"](async({
    app : appTree
  }) => {
    return appTree["getAppPath"]();
  });
  await input["close"]();
  if (_0x3fc917 !== __dirname) {
    throw new Error('Malformed app path: got "' + _0x3fc917 + '", expected "' + __dirname + '"');
  }
  console["log"]("playwright._electron SUCCESS");
})()["catch"]((record) => {
  console["error"](record);
  process["exit"](1);
});

