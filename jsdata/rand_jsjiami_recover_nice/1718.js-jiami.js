'use strict';
const io = require("socket.io")();
io["on"]("connection", (PL$5) => {
  console["log"]("connect: " + PL$5["id"]);
  PL$5["on"]("disconnect", () => {
    console["log"]("disconnect: " + PL$5["id"]);
  });
});
io["listen"](3000, {
  "cors" : {
    "origin" : ["http://localhost:19006"]
  }
});
setInterval(() => {
  io["emit"]("message", (new Date)["toISOString"]());
}, 1000);

