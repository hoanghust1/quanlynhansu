'use strict';
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quanlynhansu"
});

conn.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = conn;
