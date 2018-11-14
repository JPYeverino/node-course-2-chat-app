import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as socketIO from 'socket.io';

const publicPath = path.join(__dirname, '/../../public');
const port = process.env.PORT || 3000;

const app: express.Application = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath)); //It gets the static files.

io.on('connection', socket => {
  console.log('New user connected');
  socket.emit('newMessage', {
    from: "Admin",
    text: "Welcome to the chat app",
    createdAt: new Date().getTime()
  });

  socket.broadcast.emit('newMessage', {
    from: "Admin",
    text: "New user joined",
    createdAt: new Date().getTime()
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  

  socket.on('disconnect', () => {
    console.log("User was disconnected");
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});