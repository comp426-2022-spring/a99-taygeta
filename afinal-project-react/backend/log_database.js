"use strict";

const Database = require("better-sqlite3");
const l_db = new Database("log.db");
const stmt = l_db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='log';`);
let row = stmt.get();
console.log(row);
if (row == undefined) {
  const sqlInit = `
        CREATE TABLE log ( 
            email TEXT,
            action TEXT,
            time TEXT
            );
    `;

  l_db.exec(sqlInit);
}

module.exports = l_db;
