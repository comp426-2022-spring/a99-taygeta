/*
Database specifications:
    -User database - registration details (username, email address, etc.)
    -Interaction database - details of user interactions (login history, access logs, etc.)

table Users {
    first-name TEXT,
    last-name TEXT,
    username TEXT
    email TEXT,
    password TEXT
}
*/

("use strict");

const Database = require("better-sqlite3");
const user_db = new Database("user.db");
const stmt = user_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='Users';`);
let row = stmt.get();

if (row == undefined) {
  const sqlInit = `
        CREATE TABLE Users ( 
            id INTEGER PRIMARY KEY,
            first_name TEXT,
            last_name TEXT,
            username TEXT,
            email TEXT,
            password TEXT
            );
    `;
  // Execute SQL commands that we just wrote above.
  user_db.exec(sqlInit);
}

module.exports = user_db;
