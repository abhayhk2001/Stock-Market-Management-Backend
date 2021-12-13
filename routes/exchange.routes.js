const express = require("express");
const exchangeControllers = require("../controllers/exchange.controllers");
const router = express.Router();

router.get("/login", exchangeControllers.getMe);
/* 
/login->post
/companydetails->get
/investordetsils->get
*/
module.exports = router;
