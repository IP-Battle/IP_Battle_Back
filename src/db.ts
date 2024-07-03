import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.db");

export const initDatabase = () => {
  db.serialize(() => {
    /*
    questionテーブルの作成
    id: 問題ID
    questionText: 問題文
    aSelect: 選択肢ア
    iSelect: 選択肢イ
    uSelect: 選択肢ウ
    eSelect: 選択肢エ
    answer: 正解
    explanation: 解説
    accuracyRate: 正答率
    */
    db.run("CREATE TABLE IF NOT EXISTS question(id INTEGER PRIMARY KEY, questionText TEXT, aSelect TEXT, iSelect TEXT, uSelect TEXT, eSelect TEXT, answer TEXT, explanation TEXT, accuracyRate REAL)");
    //db.run("insert into question(id,questionText,aSelect,iSelect,uSelect,eSelect,answer,explanation,accuracyRate) values(?,?,?,?,?,?,?,?,?)", 1, "マーケティングオートメーション (MA) に関する記述として、最も適切なものは どれか。", "企業内に蓄積された大量のデータを分析して、事業戦略などに有効活用する。", "小売業やサービス業において、販売した商品単位の情報の収集・蓄積及び分析 を行う。", "これまで人間が手作業で行っていた定型業務を、AIや機械学習などを取り入れ たソフトウェアのロボットが代行することによって自動化や効率化を図る。", "見込み顧客の抽出,獲得、育成などの営業活動を効率化する。", "エ", "未対応です", 1.0);

    /*db.each("select * from question", (err, row: any) => {
      console.log(`${row.id}, ${row.questionText}, ${row.aSelect}, ${row.iSelect}, ${row.uSelect}, ${row.eSelect}, ${row.answer}, ${row.explanation}, ${row.accuracyRate}`);
    });*/
  });

  db.close();
}