/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const db = require("./src/db/database");
require("dotenv").config();

const app = express();
const PORT = 3001;
const SECRET_KEY = process.env.SECRET_KEY || "secret_key";

//untested authentication
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user; // Attach user info to request
    next();
  });
};

app.use(bodyParser.json());
// app.use(express.json());

app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !!process.env.SECRET_KEY, maxAge: 3600000 }, // Use true if HTTPS
  })
);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/dashboard", authenticateToken, (req, res) => {
  res.status(200).json({ message: `Welcome, ${req.user.username}` });
});

// Example: Fetch all records
app.get("/api/get-users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ?";
  console.log("im here");
  db.get(query, [username], async (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    console.log("im here 2");
    if (!row) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    console.log("im here 3", row);
    const isMatch = await bcrypt.compare(password, row.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    console.log("im here 4");
    const token = jwt.sign({ id: row.id, username: row.username }, SECRET_KEY, {
      expiresIn: "1h",
    });
    console.log("im here 5");
    return res.status(200).json({ message: "Login successful", token });
  });
});

app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPwd = await bcrypt.hash(password, 10);
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.run(query, [username, hashedPwd], function (err) {
    if (err) {
      if (err.errno === 19) {
        res
          .status(500)
          .json({ error: "Email address already exist. Please try again." });
      } else {
        res.status(500).json({ error: err.message });
      }
    } else {
      res.status(200).json({ message: "Registered!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
