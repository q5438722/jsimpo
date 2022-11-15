'use strict';
const io = require("socket.io")();
io.on("connection", (o) => {
  console.log(`connect: ${o.id}`);
  o.on("disconnect", () => {
    console.log(`disconnect: ${o.id}`);
  });
});
io.listen(3e3, {
  cors : {
    origin : ["http://localhost:19006"]
  }
});
setInterval(() => {
  io.emit("message", (new Date).toISOString());
}, 1e3);

