var db = require.main.require("./dbInteraction/config");

function authorizeLogin(username, password, isvalid) {
    var sql = `select * from companylogin where username = '${username}' and password = '${password}'`;
    db.executeQuery(sql,function (err, result) {
      console.log(result);
      if (!err && result.length == 1) {
        isvalid(true,result[0].cid);
      } else {
        isvalid(false);
      }
    });
  }

  function getCatogories(cid){
    let categories = new Array();
    var sql = `select catid from categorized where cid = '${cid}'`
    db.executeQuery(sql,function(err,result){
      // console.log("catid",result);
      for(let i = 0;i<result.length;i++){
        sql = `select categoryname from category where catid = ${result[i].catid}`
        db.executeQuery(sql,function(err,result1){
        // console.log("catege",result1[0].categoryname);
          categories.push(result1[0].categoryname);
        })
      }
    })
    return categories;
  }

  function getProfile(id, callback){
      let categories = getCatogories(id);
      var sql = `select * from company where cid = '${id}'`;
      db.executeQuery(sql,function(err,result){
          if(!err && result.length!=0){
              sql = `select * from location where addid = ${result[0].addid}`
              db.executeQuery(sql,function(err,addresult){
                    result[0]['addid'] = addresult;
                    result[0]['categories'] = categories;
                  callback(result,true);
              })
          }
          else{
              callback(null,false);
          }
      })
  }

  function getCompanyDetails(id,callback){
    //cid | name  | revenue | noofshares | pubshares | shareval | registration | exccode | addid
    let categories = getCatogories(id);
    var sql = `select cid, name, noofshares, pubshares, shareval, registration, exccode, addid from company where cid = '${id}'`;
    db.executeQuery(sql,function(err,result){
        // console.log(err);
        if(!err && result.length!=0){
            sql = `select * from location where addid = ${result[0].addid}`
            db.executeQuery(sql,function(err,addresult){
                  result[0]['addid'] = addresult;
                  result[0]['categories'] = categories;
                callback(result,true);
            })
        }
        else{
            callback(null,false);
        }
    })
  }

  function getInvestorDetails(iid,cid,callback){
      // console.log(iid,cid);
    var sql = `select * from investor where iid = ${iid}`;
    db.executeQuery(sql,function(err,result){
        // console.log(err);
        if(!err && result.length!=0){
            sql = `select dateofpurchase, numofshares, curramt, purchaseamt, status from investments where iid = ${iid} and cid = '${cid}'`
            db.executeQuery(sql,function(err,addresult){
                  result[0]['investment-details'] = addresult;
                callback(result,true);
            })
        }
        else{
            callback(null,false);
        }
    })
  }


  module.exports = {
    authorizeLogin,
    getProfile,
    getCompanyDetails,
    getInvestorDetails
  };