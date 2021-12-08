const express = require("express");
const investorControllers = require("../controllers/investor.controllers");
const router = express.Router();

router.get("/login", investorControllers.getMe);

module.exports = router;
