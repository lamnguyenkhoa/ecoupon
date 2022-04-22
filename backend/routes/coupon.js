const express = require('express');
const app = express();
const controller = require('../controllers/coupon');

app.route('/coupon').post(controller.create);

app.route('/coupon/getall').get(controller.findAll);

app
  .route('/coupon/:id')
  .get(controller.findOne)
  .delete(controller.delete)
  .put(controller.update);

module.exports = app;
