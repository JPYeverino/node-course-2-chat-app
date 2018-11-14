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
  // socket.emit('newMessage', {
  //   from: 'User1',
  //   text: "See u then",
  //   createdAt: 123123
  // });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  });

  socket.on('disconnect', () => {
    console.log("User was disconnected");
  });
});


server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});