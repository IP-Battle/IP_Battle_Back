

import * as socket from 'socket.io';
import { roomType } from '../types/room';
import { feachQuestion } from './feachQuestion';

export const matching = (io: socket.Server, socketId: string, waitPlayer: Set<string>, room: roomType) => {
  waitPlayer.add(socketId);
  if (waitPlayer.size >= 2) {
    const roomId = Math.floor(Math.random() * 10000);
    const player = new Array(...waitPlayer)

    room[roomId] = [
      {
        playerId: player[0],
        questionData: {},
        finish: false
      },
      {
        playerId: player[1],
        questionData: {},
        finish: false
      },
    ];
    waitPlayer.delete(player[0]);
    waitPlayer.delete(player[1]);

    io.to(room[roomId][0].playerId).emit("gameStart", roomId);
    io.to(room[roomId][1].playerId).emit("gameStart", roomId);

    
    feachQuestion(io, room[roomId][0].playerId, []);
    feachQuestion(io, room[roomId][1].playerId, []);
  }
  console.log(waitPlayer)
}