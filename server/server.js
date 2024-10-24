import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("this is my root");
});

app.get("/games", async function (request, response) {
  const result = await db.query("SELECT * FROM games");
  const games = result.rows;
  response.json(games);
});

app.post("/games", async function (request, response) {
  const name = request.body.name;
  const title = request.body.title;
  const rating = request.body.rating;
  console.log(name, title, rating);
  const result = await db.query(
    `INSERT INTO games (name, title, rating) VALUES ('${name}', '${title}', '${rating}')`
  );
  response.json(result);
});

app.listen(8080, function () {
  console.log("app is running port 8080");
});

//0PPeesM0bXH5BkFc password
