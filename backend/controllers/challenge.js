const utils = require('./utils');
const Challenge = require('../models/challenge');

exports.create = async (req, res) => {
  // Create a challenge
  const challenge = new Challenge({
    name: req.body.name,
    description: req.body.description,
    coupon: req.body.coupon,
    category: req.body.category,
  });

  // Save this challenge to database
  challenge
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

exports.findAll = (req, res) => {
  utils.findAllData(Challenge, req, res);
};

exports.findOne = async (req, res) => {
  utils.findOneData(Challenge, req, res);
};

exports.delete = async (req, res) => {
  utils.deleteData(Challenge, req, res);
};

exports.update = async (req, res) => {
  utils.updateData(Challenge, req, res);
};
