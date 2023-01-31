import express from "express";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const sql = postgres(process.env.DATABASE_URL);
const port = process.env.PORT || 3000

app.use(express.static("page"));

app.get("/api/pokemons", (_, res) => {
  sql`SELECT * FROM pokemons`.then((data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});