const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
});

// connection.connect(function(err) {
//   if (err) throw err;

//   connection.query('CREATE DATABASE IF NOT EXISTS main;');
//   connection.query('USE main;');
//   connection.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
//     console.log(result);
//   });
//   // connection.end();
// });

module.exports = connection;