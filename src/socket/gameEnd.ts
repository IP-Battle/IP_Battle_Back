import * as socket from 'socket.io';
import { roomType } from '../types/room';

import sqlite3 from "sqlite3";
import { questionType } from '../types/question';
const db = new sqlite3.Database("./database.db");

export const gameEnd = async (
  io: socket.Server,
  socketId: string,
  rooms: roomType,
  roomId: number,
  questionData: { [questionId: number]: boolean }) => {

  if (!rooms[roomId]) {
    return;
  }

  const playerIndex = getPlayerIndex(socketId, rooms, roomId);
  rooms[roomId][playerIndex].questionData = questionData;
  rooms[roomId][playerIndex].finish = true;

  if (rooms[roomId][0].finish && rooms[roomId][1].finish) {
    console.log("finish")

    let playerScores = [
      await getPlayerScore(rooms[roomId][0].questionData),
      await getPlayerScore(rooms[roomId][1].questionData)
    ];

    io.to(rooms[roomId][0].playerId).emit("gameFinish", judge(playerScores[0], playerScores[1]));
    io.to(rooms[roomId][1].playerId).emit("gameFinish", judge(playerScores[1], playerScores[0]));

    delete rooms[roomId];
  }
}

const getPlayerScore = async (questionData: { [questionId: number]: boolean }): Promise<number> => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(`select * from question where id in (${Object.keys(questionData).join(",")})`,
        (err, rows: questionType[]) => {
          if (err) {
            console.log(`Error: ${err}`);
            return reject(err)
          }
          let score = 0;
          score = rows.reduce((sum, question) => {
            if (questionData[question.id]) {
              return sum + question.accuracyRate;
            } else {
              return sum;
            }
          }, 0);
          return resolve(score)
        });
    })
  });
}

const getPlayerIndex = (playerId: string, rooms: roomType, roomId: number) => {
  if (rooms[roomId][0].playerId === playerId) {
    return 0
  } else {
    return 1
  };
}

//勝敗
const judge = (player1: number, player2: number) => {
  if (player1 > player2) {
    return 0;
  } else if (player1 < player2) {
    return 1;
  } else {
    return 2;
  }
}