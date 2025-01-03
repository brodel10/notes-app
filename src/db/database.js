/* eslint-disable @typescript-eslint/no-require-imports */
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve(__dirname, "database.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

db.serialize(() => {
  db.run(
    `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );
    `,
    (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log("users table created successfully.");
    }
  );
});

module.exports = db;
