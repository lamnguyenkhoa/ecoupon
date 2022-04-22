const utils = require('./utils');
const User = require('../models/user');

exports.profile = async (req, res) => {
  res.send(req.user);
};

exports.create = async (req, res) => {
  // Create an user
  const user = new User({
    name: req.body.name,
    googleId: req.body.googleId,
    ownedCoupon: req.body.ownedCoupon || [],
  });

  // Save this user to database
  user
    .save()
    .then(async () => {
      res.status(200).send(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = async (req, res) => {
  utils.findAllData(User, req, res);
};

exports.findOne = async (req, res) => {
  utils.findOneData(User, req, res);
};

exports.delete = async (req, res) => {
  utils.deleteData(User, req, res);
};

exports.update = async (req, res) => {
  utils.updateData(User, req, res);
};
