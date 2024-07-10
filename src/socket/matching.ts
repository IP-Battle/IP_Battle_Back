

import * as socket from 'socket.io';
import { roomType } from '../types/room';
import { feachQuestion } from './feachQuestion';

export const matching = (io: socket.Server, socketId: string, waitPlayer: string[], room: roomType) => {
  waitPlayer.push(socketId);
  if (waitPlayer.length >= 2) {
    const roomId = Math.floor(Math.random() * 10000);
    room[roomId] = [
      {
        playerId: waitPlayer[0],
        questionData: {},
        finish: false
      },
      {
        playerId: waitPlayer[1],
        questionData: {},
        finish: false
      },
    ];
    waitPlayer = [];

    io.to(room[roomId][0].playerId).emit("gameStart", roomId);
    io.to(room[roomId][1].playerId).emit("gameStart", roomId);

    
    feachQuestion(io, room[roomId][0].playerId, []);
    feachQuestion(io, room[roomId][1].playerId, []);
  }
}