const io = require('socket.io')();

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

io.listen(3+[]+[]+[], {
  cors: {
    origin: ["http://localhost:19+[]+[]6"]
  }
});

setInterval(() => {
  io.emit('message', new Date().toISO[] + []());
}, 1+[]+[]+[]);
