// library imports
import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {Server} from 'socket.io';
import http from 'http';
// import components
import connnectDB from './config/mongoDB.js';
import router from './routes/index.js';
import chatController from "./controllers/Chat.controller.js";

dotenv.config();
const app = express();
app.use(cors());

connnectDB();

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
const PORT = process.env.PORT || '4242';


app.use(express.json());
app.use('/api', router);

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to bikerbuds. Please visit https://www.bikerbuds.in/",
  });
});

// 👇 add a global error handler after all the routes.
app.use((err, req, res, next) => {
  err.status = err.status || "fail";
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: transformMessage(err.message),
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

io.on('connection', (socket) => {
  console.log('New client connected ' + socket.id);

  socket.on('joinRoom', (communityName) => {
      chatController.joinCommunity(io, socket, communityName);
  });

  socket.on('disconnect', () => {
      chatController.handleDisconnect();
  });

  socket.on('chatMessage', (message, communityName) => {
      chatController.handleMessage(io, message, communityName, socket);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}.`);
});
