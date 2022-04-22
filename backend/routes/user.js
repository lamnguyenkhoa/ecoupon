const express = require("express");
const app = express();
const controller = require("../controllers/user");

app.route("/user").get(controller.findAll).post(controller.create);

app.route("/user/:id").get(controller.findOne);

module.exports = app;
