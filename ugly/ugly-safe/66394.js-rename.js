"use strict";
  function chives(hamster) {
    if (typeof Buffer.from === "function")
    {
      if (Array.isArray(hamster))
      {
        hamster = Buffer.from(hamster);
      }
      else
        if (typeof hamster === "string")
        {
          hamster = Buffer.from(hamster, "utf8");
        }
    }
    else
    {
      if (Array.isArray(hamster))
      {
        hamster = new Buffer(hamster);
      }
      else
        if (typeof hamster === "string")
        {
          hamster = new Buffer(hamster, "utf8");
        }
    }
    return raccoon.createHash("sha1").update(hamster).digest();
  }
  var raccoon; // crypto
  
  raccoon = require("crypto");
  module.exports = sha1;
  