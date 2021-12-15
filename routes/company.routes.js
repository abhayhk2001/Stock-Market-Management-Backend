const express = require("express");
const companyControllers = require("../controllers/company.controllers");
const router = express.Router();

router.post("/login",companyControllers.authorize);
router.get("/profile",companyControllers.getProfile);
router.get("/companydetails",companyControllers.getCompanyDetails);
router.get("/investordetails",companyControllers.getInvestorDetails);


/* 
/login->post 1
/profile->get 1
/companydetails->get 
/investordetails->get
*/
module.exports = router;
