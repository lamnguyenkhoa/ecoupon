const User = require("../models/user");

exports.create = async (req, res) => {
  // Validate requests
  if (!req.body.name) {
    return res.status(400).send({
      message: "Missing name!",
    });
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: "Missing email!",
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: "Missing password!",
    });
  }

  // Create an event
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    ownedCoupon: req.body.ownedCoupon || [],
  });

  // Save this event to database
  user
    .save()
    .then(async (data) => {
      res.status(200).send(req.body);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error when creating user!",
      });
    });
};
