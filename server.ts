//ライブラリ
import express from 'express';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {

  console.log(`Start the server at Port${port}`);
});


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/${process.env.PUBLIC_HTMLFILE}`);
});