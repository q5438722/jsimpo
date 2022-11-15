'use strict';
const path = require("path");
const http = require("http");
const server = http["createServer"](async(mmCoreSplitViewBlock, theImage) => {
  const bindCaptor = async(query) => {
    const resultTpl = require("./" + path["join"](_0x190732["qEJlB"], query));
    try {
      return await (resultTpl["render"] || resultTpl["default"] || resultTpl)(mmCoreSplitViewBlock, theImage);
    } catch (_0x38c128) {
      theImage["statusCode"] = 500;
      return theImage["end"](_0x190732["oMSQX"]);
    }
  };
  try {
    await bindCaptor(_0x190732["rWgma"]);
  } catch (e) {
    console["error"]("failed to render", e);
    theImage["statusCode"] = 500;
    theImage["end"](_0x190732["zPjQz"]);
  }
});
const port = process["env"]["PORT"] || 3000;
server["listen"](port, () => {
  var PL$9 = {};
  console["log"](PL$9["ckWGe"], port);
});

