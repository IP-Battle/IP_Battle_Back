

import * as socket from 'socket.io';
import { roomType } from '../types/room';
import { feachQuestion } from './feachQuestion';

export const matching = (io: socket.Server, socketId: string, waitPlayer: string[], room: roomType ) => {
  waitPlayer.push(socketId);
  if (waitPlayer.length >= 2) {
    const roomId = Math.floor(Math.random() * 10000);
    room[roomId] = [waitPlayer[0], waitPlayer[1]];
    waitPlayer = [];

    feachQuestion(io, room[roomId][0], []);
    feachQuestion(io, room[roomId][1], []);
    io.to(room[roomId][0]).emit("gameStart", roomId);
    io.to(room[roomId][1]).emit("gameStart", roomId);
  }
}