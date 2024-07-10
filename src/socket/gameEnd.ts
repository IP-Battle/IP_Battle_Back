import * as socket from 'socket.io';
import { roomType } from '../types/room';

import sqlite3 from "sqlite3";
import { questionType } from '../types/question';
const db = new sqlite3.Database("./database.db");

export const gameEnd = (
  io: socket.Server, 
  socketId: string, 
  rooms: roomType, 
  roomId: number, 
  questionData: {[questionId: number]: boolean}) => {
  
  const playerIndex = getPlayerIndex(socketId, rooms, roomId);
  rooms[roomId][playerIndex].questionData = questionData;
  rooms[roomId][playerIndex].finish = true;

  if(rooms[roomId][0].finish && rooms[roomId][1].finish) {
    
    let playerScores = {
      [rooms[roomId][0].playerId]: 0,
      [rooms[roomId][1].playerId]: 0
    };

    db.serialize(() => {
      rooms[roomId].forEach((player) => {
        db.all("select * from question where id in (?)", Object.keys(player.questionData), (err, rows: questionType[]) => {
          if (err) {
            console.log(err);
            return;
          }
          rows.forEach((question) => {
            if(player.questionData[question.id]) {
              playerScores[player.playerId] += 1 - question.accuracyRate;
            }
          });
        });
      });
    });
    

    io.to(rooms[roomId][0].playerId).emit("gameFinish", playerScores[0] > playerScores[1]);
    io.to(rooms[roomId][1].playerId).emit("gameFinish", playerScores[0] < playerScores[1]);
  }
}

const getPlayerIndex = (playerId: string, rooms: roomType, roomId: number) => {
  if(rooms[roomId][0].playerId === playerId) {
    return 0
  }else {
    return 1
  };
}