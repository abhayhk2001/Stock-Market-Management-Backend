var express = require("express");
var logger = require("morgan");
const bodyParser = require("body-parser");

var investorRouter = require("./routes/investor.routes");
var companyRouter = require("./routes/company.routes");
var adminRouter = require("./routes/admin.routes");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing
app.use("/investor", investorRouter);
app.use("/company", companyRouter);
app.use("/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: "No Such Route Exists",
  });
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message",
  });
});

app.listen();
module.exports = app;