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

function insertlogindetails(data) {
  var sql = `insert into investorlogin values(${data.id},'${data.username}','${data.password}')`;
  db.executeQuery(sql, function (err) {
    return err;
  });
}

function insertprivatedetails(data) {
  var sql = `insert into privatedetails values('${data.aadhar}','${data.pan}',${data.id},'${data.account}')`;
  db.executeQuery(sql, function (err) {
    console.log(err);
    return err;
  });
}

function insertbankdetails(data) {
  var sql = `insert into bankdetails values('${data.account}','${data.bankname}','${data.ifsc}','${data.branch}','${data.bankpnum}')`;
  db.executeQuery(sql, function (err) {
    console.log(err);
    if (!err) {
      return insertprivatedetails(data);
    }
    return err;
  });
}

function registerInvestor(data, success) {
  var sql = `insert into investor
                values (${data.id},'${data.firstname}','${data.lastname}','${data.middlename}','${data.pnum}',${data.noinvestments},'${data.email}')`;
  db.executeQuery(sql, function (err) {
    console.log(err);
    if (!err && !insertlogindetails(data) && !insertbankdetails(data)) {
      success(true);
    } else {
      success(false);
    }
  });
}

function getBankDetails(presult, accno, success) {
  var sql = `select * from bankdetails where accno = '${accno}'`;
  db.executeQuery(sql, function (err, result) {
    console.log(err, result);
    if (!err) {
      presult[0].privateDetails.bankdetails = result[0];
      success(true, presult);
    } else {
      success(false, null);
    }
  });
}

function getPrivateDetails(presult, id, success) {
  var sql = `select aadhar, pan, accno from privatedetails where iid = ${id}`;
  db.executeQuery(sql, function (err, result) {
    console.log(err, result);
    if (!err && result.length > 0) {
      presult[0].privateDetails = {
        aadhar: result[0].aadhar,
        pan: result[0].pan,
        bankdetails: result[0].bankdetails,
      };
      getBankDetails(presult, result[0].accno, success);
    } else {
      success(false, null);
    }
  });
}

function getLoginandPrivate(presult, id, success) {
  var sql = `select username, password from investorlogin where iid = ${id}`;
  db.executeQuery(sql, function (err, result) {
    console.log(err, result);
    if (!err) {
      presult[0].loginCredentials = result[0];
      getPrivateDetails(presult, presult[0].iid, success);
    } else {
      success(false, null);
    }
  });
}

function getInvestorDetails(data, success) {
  var sql = `select * from investor where iid = ${data.id}`;
  db.executeQuery(sql, function (err, result) {
    console.log(err, result);
    if (!err && result.length > 0) {
      getLoginandPrivate(result, data.id, success);
    } else {
      success(false, null);
    }
  });
}

function addInvestment(data, success) {
  var sql = `insert into investments values('${data.dateofpurchase}',${data.numofshares},${data.current},${data.purchaseamt},'not sold',${data.iid},${data.cid})`;
  // dateofpurchase varchar(255), numofshares int, curramt int, purchaseamt int, status varchar(255), iid int, cid int, FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (cid) REFERENCES company(cid)
  db.executeQuery(sql, function (err) {
    console.log(err);
    if (!err) {
      success(true);
    } else {
      success(false);
    }
  });
}

function removeInvestment(data, success) {
  var sql = `update investments set status = 'sold' where iid = ${data.iid} and cid = ${data.cid} and dateofpurchase = ${data.date}`;
  // dateofpurchase varchar(255), numofshares int, curramt int, purchaseamt int, status varchar(255), iid int, cid int, FOREIGN KEY (iid) REFERENCES investor(iid), FOREIGN KEY (cid) REFERENCES company(cid)
  db.executeQuery(sql, function (err) {
    console.log(err);
    if (err == null) {
      success(true);
    } else {
      success(false);
    }
  });
}

function getInvestmentData(data, success) {
  var sql = `select * from investments where iid = ${data.id}`;
  db.executeQuery(sql, function (err, result) {
    if (err == null) {
      success(true, result);
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
