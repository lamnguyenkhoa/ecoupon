const utils = require('./utils');
const Coupon = require('../models/coupon');

exports.create = async (req, res) => {
  // Create a coupon
  const coupon = new Coupon({
    title: req.body.title,
    description: req.body.description,
    company: req.body.company,
    validBefore: req.body.validBefore,
    remaining: req.body.remaining,
  });

  // Save this coupon to database
  coupon
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
  utils.findAllData(Coupon, req, res);
};

exports.findOne = async (req, res) => {
  utils.findOneData(Coupon, req, res);
};

exports.delete = async (req, res) => {
  utils.deleteData(Coupon, req, res);
};

exports.update = async (req, res) => {
  utils.updateData(Coupon, req, res);
};
