/*
Database specifications:
    -User database - registration details (username, email address, etc.)
    -Interaction database - details of user interactions (login history, access logs, etc.)
    
    table Logs {
    username TEXT,
    time TEXT,
    action TEXT {log in, log out, update}
}
*/

//ensures no failures
("use strict");

const Database = require("better-sqlite3");
const interact_db = new Database("log.db");
const stmt = interact_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='Logs';`);
let row = stmt.get();
if (row == undefined) {
  const sqlInit = `
        CREATE TABLE Logs ( 
            id INTEGER PRIMARY KEY,
            username TEXT,
            time TEXT,
            action TEXT
            );
    `;
  // Execute SQL commands that we just wrote above.
  interact_db.exec(sqlInit);
  // Echo information a
}

module.exports = interact_db;
