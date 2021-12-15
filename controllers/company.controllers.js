var companyDb = require.main.require('./dbInteraction/company');

const authorize = async (req, res) => {
  companyDb.authorizeLogin(req.body.username,req.body.password,(state,id)=>{
    if(state == true){ 
      res.status(200).json({
        message: "success",
        id: id
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};


const getProfile = async(req,res)=>{
      companyDb.getProfile(req.headers.id,(result,status)=>{
        if(status){

          res.status(200).json({
            "message": "success",
            "profile": result
          })
        }
        else{
          res.status(400).json({
            message: "bad request"
          })
        }
      })
}



const getCompanyDetails = async(req,res)=>{
  companyDb.getCompanyDetails(req.headers.id,(result,status)=>{
    if(status){
      res.status(200).json({
        "message":"success",
        "details": result
      })
    }
    else{
      res.status(400).json({
        "message":"bad request"
      })
    }
  })
}

const getInvestorDetails = async(req,res)=>{
  companyDb.getInvestorDetails(req.headers.iid,req.headers.cid,(result,status)=>{
    if(status){
      res.status(200).json({
        "message":"success",
        "details": result
      })
    }
    else{
      res.status(400).json({
        "message":"bad request"
      })
    }
  })
}


module.exports = { 
  authorize,
  getProfile,
  getCompanyDetails,
  getInvestorDetails
};
