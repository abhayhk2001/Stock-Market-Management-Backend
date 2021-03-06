var express = require("express");
var logger = require("morgan");
const bodyParser = require("body-parser");
// const client = require("./dbInteraction/redis");

var investorRouter = require("./routes/investor.routes");
var companyRouter = require("./routes/company.routes");
var adminRouter = require("./routes/exchange.routes");

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing
app.use("/investor", investorRouter);
app.use("/company", companyRouter);
app.use("/exchange", adminRouter);

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   res.status(err.status || 404).json({
//     message: "No Such Route Exists",
//   });
// });

// error handler
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500).json({
//     message: "Error message",
//   });
// });

app.listen(process.env.PORT || 8000, () => {
  console.log("Server started...");
});

module.exports = app;
