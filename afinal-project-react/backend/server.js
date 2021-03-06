var express = require("express");
var app = express();

const db = require("./database.js");
const l_db = require("./log_database.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Content-Type", "application/json");
  next();
});

var HTTP_PORT = 5555;

const server = app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//root endpoint

app.get("/app/", (req, res) => {
  res.json({ message: "Our API works! (200)" });
  res.status(200);
});

app.post("/app/email/", (req, res, next) => {
  const email = req.body.email;
  const psw = req.body.psw;
  let stmt = db
    .prepare(`SELECT COUNT(*) AS COUNT FROM user WHERE email = '${email}'`)
    .all();
  if (stmt[0]["COUNT"] == 0) {
    res.status(200).json("email doesn't exist");
  } else {
    let stmt = db
      .prepare(
        `SELECT COUNT(*) AS COUNT FROM user WHERE email = '${email}' AND password='${psw}'`
      )
      .all();
    if (stmt[0]["COUNT"] == 0) {
      res.status(200).json("password doesn't match");
    } else {
      res.status(200).json("email and password found");
    }
  }
});

app.post("/app/new/user/", (req, res, next) => {
  let data = {
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    psw: req.body.psw,
  };

  const stmt = db.prepare(
    "INSERT INTO user (first, last, email, password) VALUES (?, ?, ?, ?)"
  );
  const info = stmt.run(data.first, data.last, data.email, data.psw);
  res.status(200).json(info);
});

app.get("/app/allUsers/", (req, res, next) => {
  const stmt = db.prepare("SELECT * FROM user").all();
  res.status(200).json(stmt);
});

app.post("/app/delete/", (req, res, next) => {
  const email = req.body.email;
  console.log(email);
  const stmt = db.prepare("DELETE FROM user WHERE email= ?");
  const info = stmt.run(email);
  res.status(200).json(info);
});

app.put("/app/update/", (req, res, next) => {
  const first = req.body.first;
  const last = req.body.last;
  const email = req.body.last;
  const stmt = db.prepare(
    "UPDATE user SET first = ?, last = ? WHERE email = ?"
  );
  const info = stmt.run(first, last, email);
  res.status(200).json(stmt);
});

app.post("/app/log/login", (req, res, next) => {
  const stmt = l_db.prepare(
    "INSERT INTO log (email, action, time) VALUES (?, ?, ?)"
  );
  const info = stmt.run(req.body.email, "login", Date.now());
  res.status(200).json(info);
});

app.post("/app/log/delete", (req, res, next) => {
  const stmt = l_db.prepare(
    "INSERT INTO log (email, action, time) VALUES (?, ?, ?)"
  );
  const info = stmt.run(req.body.email, "delete", Date.now());
  res.status(200).json(info);
});

app.post("/app/log/register", (req, res, next) => {
  const stmt = l_db.prepare(
    "INSERT INTO log (email, action, time) VALUES (?, ?, ?)"
  );
  const info = stmt.run(req.body.email, "register", Date.now());
  res.status(200).json(info);
});

app.get("/app/allLogs", (req, res, next) => {
  const stmt = l_db.prepare("SELECT * FROM log").all();
  res.status(200).json(stmt);
});
