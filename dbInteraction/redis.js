const redis = require("redis");
require("dotenv").config();

const client = redis.createClient();

client.connect();

client.on("connect", () => {
  console.log("Connected to our redis instance!");
});

module.exports = {
  executeRedis: function (arr) {
    client.sendCommand(arr);
  },
};
