// status can be enum

var mysql = require("mysql2");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abdurrahaman",
  database: "dbmsproj",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  var s =
    "create table bankdetails(accno varchar(255), name varchar(255), ifsc varchar(255), branch varchar(255), pnum varchar(255), primary key(accno))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });
  s =
    "create table location(addid int,addline1 varchar(255),addline2 varchar(255), city varchar(255), country varchar(255), state varchar(255), zip varchar(255), primary key(addid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table investor(iid int,  firstname varchar(255), lastname varchar(255), middlename varchar(255), pnum varchar(255), noinvestments int,primary key(iid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table category(catid int, categoryname varchar(255),primary key(catid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table investorlogin(iid int, username varchar(255), password varchar(255), FOREIGN KEY (iid) REFERENCES investor(iid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });
  s =
    "create table privatedetails(aadhar varchar(255), pan varchar(255), iid int , accno varchar(255), FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (accno) REFERENCES bankdetails(accno))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table exchange(code int, name varchar(255), curr varchar(255), marketcap_in_billions float, nooflistings int, addid int,primary key(code), FOREIGN KEY (addid) REFERENCES location(addid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table company(cid int, name varchar(255), revenue bigint, noofshares int, pubshares int, shareval int, registration varchar(255), exccode int, addid int, primary key(cid), FOREIGN KEY (exccode) REFERENCES exchange(code), FOREIGN KEY (addid) REFERENCES location(addid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table companylogin(cid int, username varchar(255), password varchar(255), FOREIGN KEY (cid) REFERENCES company(cid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table categorized(cid int, catid int, FOREIGN KEY (cid) REFERENCES company(cid), FOREIGN KEY (catid) REFERENCES category(catid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s =
    "create table Investments(dateofpurchase varchar(255), numofshares int, curramt int, purchaseamt int, status varchar(255), iid int, cid int, FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (cid) REFERENCES company(cid))";
  con.query(s, function (err) {
    if (err) console.log(err);
    console.log("Connected!");
  });

  s = `insert into bankdetails(accno, name, ifsc, branch, pnum) values ('1243','1234','1234','23','lkjhgf')`;
  con.query(s, function (err) {
    if (err) console.log(err);
    else console.log("inserted!");
  });
});
