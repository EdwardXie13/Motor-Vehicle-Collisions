require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const connection = require('./database.js');

// app.route('/')
//   .get(function(req, res, next) {
//     connection.query(
//       "show tables",
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   });

// const query = "load data local infile 'Accident.csv' into table Accident Fields terminated by ',' ignore 1 lines";
// const query = "load data local infile 'Casualties.csv' into table Casualties Fields terminated by ',' ignore 1 lines";
// const query = "load data local infile 'VehicleInAccident.csv' into table VehicleInAccident Fields terminated by ',' ignore 1 lines";
const query = "show tables;"
app.get('/users', (req, res) => {
  connection.connect(function(err) {
    connection.query('USE main;');
    // connection.query('CREATE TABLE IF NOT EXISTS Accident(CollisionID int, CrashDate date, CrashTime timestamp, Borough varchar(12), Zipcode int, OnStreetName varchar(32), CrossStreetName varchar(32));', function(err, result) {
    // connection.query('CREATE TABLE IF NOT EXISTS VehicleInAccident(CollisionID int, ContributingFactor varchar(32), VehicleType varchar(32));', function(err, result) {
    connection.query(query, function(err, result) {
    // connection.query(`SELECT * FROM main.users`, function(err, result, fields) {
      if (err) res.send(err);
      if (result) res.send(result);
    });
  });
});

app.listen(port, () => console.log('listening on port 3000!'));