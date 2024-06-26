//ライブラリ
import express from 'express';
import http from 'http';
import * as socket from 'socket.io';
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

//静的ファイルの読み込み
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/${process.env.PUBLIC_HTMLFILE}`);
});

//socket通信
const server = new http.Server(app);
const io = new socket.Server(server);
io.on('connection', (socket) => {
  console.log('connected');
});

//サーバー起動
server.listen(port, () => {
  console.log(`Start the server at Port${port}`);
});