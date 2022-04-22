const express = require('express');
const app = express();
const controller = require('../controllers/user');

// Simple route middleware to ensure user is authenticated.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.error = 'Please sign in!';
  res.redirect('/auth/login');
}

app
  .route('/user')
  .post(controller.create)
  .get(ensureAuthenticated, controller.profile);

app.route('/user/getall').get(controller.findAll);

app
  .route('/user/:id')
  .get(controller.findOne)
  .delete(controller.delete)
  .put(controller.update);

module.exports = app;
