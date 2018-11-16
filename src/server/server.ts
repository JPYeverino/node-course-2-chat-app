import * as path from 'path';
import * as http from 'http';
import * as express from 'express';
import * as socketIO from 'socket.io';
import generateMessage from './utils/message'
import { callbackify } from 'util';

const publicPath = path.join(__dirname, '/../../public');
const port = process.env.PORT || 3000;

const app: express.Application = express();
const server = http.createServer(app);
const io = socketIO(server);


app.use(express.static(publicPath)); //It gets the static files.

io.on('connection', socket => {
  console.log('New user connected');
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from de server');
  });
  
  socket.on('disconnect', () => {
    console.log("User was disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});