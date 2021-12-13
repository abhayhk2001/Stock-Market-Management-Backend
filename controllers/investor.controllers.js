var investorDb = require.main.require('./dbInteraction/investor');


// const getMe = async (req, res) => {
//   investorDb.authorizeLogin((result)=>{
//     console.log(result)
//     res.status(200).send(result);
//   })
// };//sample for testing db connectivity

const authorize = async (req, res) => {
  investorDb.authorizeLogin(req.body.username,req.body.password,(state)=>{
    if(state == true){
      res.status(200).json({
        message: "success"
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};

const register = async (req, res) => {
  investorDb.registerInvestor(req.body,(state)=>{
    if(state == true){
      res.status(200).json({
        message: "success"
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};

const getProfile = async (req, res) => {
  investorDb.getInvestorDetails(req.body,(state, result)=>{
    if(state == true){
      res.status(200).json({
        message: "success",
        data : result
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};

const addShare = async (req, res) => {
  investorDb.addInvestment(req.body,(state)=>{
    if(state == true){
      res.status(200).json({
        message: "success"
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};

const deleteShare = async (req, res) => {
  investorDb.removeInvestment(req.body,(state)=>{
    if(state == true){
      res.status(200).json({
        message: "success"
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};

const getInvestments = async (req, res) => {
  investorDb.getInvestmentData(req.body,(state,result)=>{
    if(state == true){
      res.status(200).json({
        message: "success",
        data: result
      })
    }
    else{
      res.status(400).json({
        message: "Bad request",
      });
    }
  })
};




module.exports = { 
  // getMe,
  authorize,
  register,
  getProfile,
  addShare,
  deleteShare,
  getInvestments
};
