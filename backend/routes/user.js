const express = require("express");
const app = express();
const controller = require("../controllers/user");

app.route("/user").post(controller.create);

module.exports = app;
