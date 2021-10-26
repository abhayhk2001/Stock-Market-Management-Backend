const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhayhkashyap",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL Connected");
});

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/createdb", (req, res) => {
  let sql = "create database nodemysql";
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send("Database created");
  });
  sql = "use nodemysql";
  db.query(sql, (err) => {});
});

app.get("/createtable", (req, res) => {
  //   let sql = "use nodemysql";
  //   db.query(sql, (err) => {});
  let q =
    "create table customers(id int, name varchar(20), address varchar(255))";
  db.query(q, (err) => {});
});

app.get("/insert", (req, res) => {
  var sql = "INSERT INTO customers (name, address) VALUES ?";
  values = [
    ["John", "Highway 71"],
    ["Peter", "Lowstreet 4"],
    ["Amy", "Apple st 652"],
  ];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.listen("3000", () => {
  console.log("Sever started");
});
