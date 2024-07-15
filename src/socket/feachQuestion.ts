import * as socket from 'socket.io';
import { questionType } from '../types/question';

import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database.db");


export const feachQuestion = (io: socket.Server, socketId: string, answeredQuestions: number[]) => {

  db.serialize(() => {
    db.get("select * from question where id not in (?) order by random() limit 1", String(answeredQuestions), (err, row: questionType) => {
      if (err) {
        console.log(err);
        return;
      }
      io.to(socketId).emit("responseQuestion", row);
    });
  });
}