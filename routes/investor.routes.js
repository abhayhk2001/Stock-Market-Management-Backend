const express = require("express");
const investorControllers = require("../controllers/investor.controllers");
const router = express.Router();

// router.get("/login", investorControllers.getMe);//sample for testing db connectivity

router.post("/login",investorControllers.authorize);
router.post("/register",investorControllers.register);
router.get("/profile",investorControllers.getProfile);
router.post("/addshare",investorControllers.addShare);
router.delete("/deleteshare",investorControllers.deleteShare);
router.get("/investments",investorControllers.getInvestments);
// router.get("/companydetails",) from redis 
/* 
/login->post 1
/register->post 1
/profile->get 1
/addshare->post 1
/deleteshare->delete 1
/investments->get
/companydetails->get
*/

module.exports = router;
