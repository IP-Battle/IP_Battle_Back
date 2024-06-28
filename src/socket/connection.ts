import * as socket from 'socket.io';
import { playersType } from "../types/players";

export const connection = (io: socket.Server, socketId: string, players: playersType[]) => {
  players.push({
    id: socketId,
    name: `名無し${players.length + 1}`,
    room: -1,
    score: 0,
    questionIds: []
  });
  console.log(`${socketId}が接続しました`);
  io.emit("joinPlayer", socketId);
}