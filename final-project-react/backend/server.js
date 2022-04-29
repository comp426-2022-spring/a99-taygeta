var express = require("express");
var app = express();

//const bodyParser = require("body-parser");

//commenting out database code for now while I'm getting everything set up.
//sometimes SQL can be finicky

//const db = require("./database.js");
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

/*
app.post("/app/email/", (req, res, next) => {
  try {
    const stmt = db.prepare("SELECT COUNT(*) FROM user WHERE email = ?");
    const info = stmt.run(req.body.email);

    res.status(200).json(info);
  } catch (e) {
    res.status(200).json("not found");
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
  const stmt = db.prepare("SELECT COUNT(*) as COUNT FROM user").all();
  res.status(200).json(stmt[0]["COUNT"]);
});

app.get("/app/delete/", (req, res, next) => {
  const stmt = db.prepare("DELETE FROM user WHERE email= ?");
  const info = stmt.run("raven61@live.unc.edu");
  res.status(200).json(info);
});
/*
export async function test() {
  app.get("/app/", (req, res) => {
    //const stmt = db.prepare("SELECT * FROM test").all();
    res.json({ message: "Your API works! (200)" });
    res.status(200);
  });
}
*/
