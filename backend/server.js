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

/* ACTIONS:
    update email/password
    add a new user
    delete a user
    track log in 
    track log out
    track update
    check if user/email exists
    check if username and password are valid
*/
