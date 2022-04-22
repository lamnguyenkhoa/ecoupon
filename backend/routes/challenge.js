const express = require('express');
const app = express();
const controller = require('../controllers/challenge');

app.route('/challenge').post(controller.create);

app.route('/challenge/getall').get(controller.findAll);

app
  .route('/challenge/:id')
  .get(controller.findOne)
  .delete(controller.delete)
  .put(controller.update);

module.exports = app;
