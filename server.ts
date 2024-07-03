//ライブラリ
import express from 'express';
import http from 'http';
import * as socket from 'socket.io';
import * as dotenv from "dotenv";
import path from 'path';
//
import config from "./src/config";
import { connection } from './src/socket/connection';
import { playersType } from './src/types/players';
import { feachQuestion } from './src/socket/feachQuestion';
import { initDatabase } from './src/db';

const port = config.port;
const corsOrigin = config.corsOrigin;

dotenv.config();
const app = express();

initDatabase();


//静的ファイルの読み込み
app.use(express.static(path.join(`${__dirname}/public/`)));
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/public/${process.env.PUBLIC_HTMLFILE}`);
});

//socket通信
const server = new http.Server(app);
const io = new socket.Server(server, {
  cors: {
    origin: corsOrigin,
    credentials: true
  },
});

//サーバー起動
server.listen(port, () => {
  console.log(`Start the server at Port${port}`);
  const players: playersType[] = [];
  io.on('connection', (socket) => {
    connection(io, socket.id, players)
    
    socket.on('feachQuestion', (arg) => feachQuestion(io, socket.id, arg));
  });
});