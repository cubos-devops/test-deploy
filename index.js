const express = require("express");
const pg = require("pg");

const app = express();

const port = process.env.PORT || 3000;

if (process.env.TEST_DB) {
  const user = process.env.DB_USER || "postgres";
  const pass = process.env.DB_PASS || "postgres";
  const host = process.env.DB_HOST || "localhost";
  const db_port = process.env.DB_PORT || "5432";
  const database = process.env.DB_NAME || "postgres";

  const client = new pg.Client(
    `postgres://${user}:${pass}@${host}:${db_port}/${database}`
  );
  client.connect();
}

app.get("/", (req, res) => {
  res.send("Hello World! 🦆");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
