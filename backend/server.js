/* Back end specifications:
    -API built on whatever framework you choose. You can build an API that interacts with other APIs as well in order to integrate them.
    -API root endpoint at http://HOST/app/.
    -Should create (if nonexistent) and interact with a database of users and interactions (this can be logs, even). These can be separate databases for different microservices or separate tables in one database. It is up to your team’s decisions.
    -Database can be of any type you choose.
    
Database specifications:
    -User database - registration details (username, email address, etc.)
    -Interaction database - details of user interactions (login history, access logs, etc.)
*/

var express = require("express");
var app = express();

const user_db = require("./user_data.js");
const interact_db = require("./interact_data.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server port
var HTTP_PORT = 5555;

//start the server
const server = app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});

//root endpoint /app/
app.get("/app/", (req, res, next) => {
  res.json({ message: "Root endpoint works! (200)" });
  res.status(200);
});

/*
//add a new user
app.post("/app/create/", (req, res, next) => {
  //perform the necessary code
});

//delete an existing user
app.delete("/app/delete/", (req, res, next) => {
  //perform the necessary code
});

//update email -- track update
app.put("/app/update/email", (req, res, next) => {
  //perform the necessary code
});

//update password  -- track update
app.put("/app/update/password/", (req, res, next) => {
  //perform the necessary code
});

// track login
app.post("/app/login/", (req, res, next) => {
  //perform the necessary code
});

//track logout
app.post("/app/logout/", (req, res, next) => {
  //perform the necessary code
});

// check if email & password valid
app.get("/app/exist", (req, res, next) => {
  //perform the necessary code
});

//check if email already exists
app.get("/app/email", (req, res, next) => {
  //perform the necessary code
});
*/
