const express = require('express');
const app = express();
const controller = require('../controllers/user');

app.route('/user').post(controller.create);

app.route('/user/getall').get(controller.findAll);

app
  .route('/user/:id')
  .get(controller.findOne)
  .delete(controller.delete)
  .put(controller.update);

module.exports = app;
