"use strict";

const Database = require("better-sqlite3");
const db = new Database("user.db");
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='user';`);
let row = stmt.get();
if (row == undefined) {
  const sqlInit = `
        CREATE TABLE user ( 
            first TEXT,
            last TEXT,
            email TEXT,
            password TEXT
            );
    `;

  db.exec(sqlInit);
}

module.exports = db;
