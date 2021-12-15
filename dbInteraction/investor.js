var db = require.main.require("./dbInteraction/config");

function authorizeLogin(username, password, isvalid) {
  var sql = `select * from investorlogin where username = '${username}'`;
  console.log(sql);
  db.executeQuery(sql, [], function (result, err) {
    console.log(err);
    if (result[0].password == password) {
      isvalid(result[0].iid);
    } else {
      isvalid(false);
    }
  });
}

function registerInvestor(data, success) {
  var sql = `insert into investor
                values (${data.id},'${data.firstname}','${data.lastname}','${data.middlename}','${data.pnum}',${data.noinvestments})`;
  db.executeQuery(sql, [username], function (result, err) {
    if (result[0].password == password) {
      isvalid(true);
    } else {
      isvalid(false);
    }
  });
}

function getInvestorDetails(data, success) {
  var sql = `select * from investor where iid = ?`;
  db.executeQuery(sql, [data.id], function (result, err) {
    if (err == null) {
      success(true, result[0]);
    } else {
      success(false, null);
    }
  });
}

function addInvestment(data, success) {
  var sql = `insert into investments values('${data.dateofpurchase}',${data.numofshares},${data.current},${data.purchaseamt},'held',${data.iid},${data.cid})`;
  // dateofpurchase varchar(255), numofshares int, curramt int, purchaseamt int, status varchar(255), iid int, cid int, FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (cid) REFERENCES company(cid)
  db.executeQuery(sql, function (err) {
    if (err == null) {
      success(true);
    } else {
      success(false);
    }
  });
}

function removeInvestment(data, success) {
  var sql = `delete from investments where iid = ?`;
  // dateofpurchase varchar(255), numofshares int, curramt int, purchaseamt int, status varchar(255), iid int, cid int, FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (cid) REFERENCES company(cid)
  db.executeQuery(sql, [data.id], function (err) {
    if (err == null) {
      success(true);
    } else {
      success(false);
    }
  });
}

function getInvestmentData(data, success) {
  var sql = `select * from investments where iid = ?`;
  db.executeQuery(sql, [data.id], function (result, err) {
    if (err == null) {
      success(true, result[0]);
    } else {
      success(false, null);
    }
  });
}

module.exports = {
  authorizeLogin,
  registerInvestor,
  getInvestorDetails,
  addInvestment,
  removeInvestment,
  getInvestmentData,
};
