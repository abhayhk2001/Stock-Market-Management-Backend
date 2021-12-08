const express = require("express");
const exchangeControllers = require("../controllers/exchange.controllers");
const router = express.Router();

router.get("/login", exchangeControllers.getMe);

module.exports = router;
