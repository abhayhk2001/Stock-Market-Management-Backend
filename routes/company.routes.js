const express = require("express");
const companyControllers = require("../controllers/company.controllers");
const router = express.Router();

router.get("/login", companyControllers.getMe);

module.exports = router;
