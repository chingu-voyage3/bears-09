const jwt = require('jsonwebtoken'),
  User = require('../models/user'),
  config = require('../config/config');

function getToken(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.jwtSecret, {
    expiresIn: ONE_WEEK
  });
}

exports.register = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    let user = await User.findOne({ email: email });

    user = new User({
      email,
      password,
      profile: { firstName, lastName }
    });

    await user.save();
    const userJSON = user.toJSON();
    res.send({ user: userJSON, token: getToken(userJSON) });
  } catch (e) {
    res.status(400).send({
      error: 'This email account is already in use.'
    });
  }
};

exports.login = async (req, res) => {
  try {
    const userJSON = req.user.toJSON();
    res.send({
      user: userJSON,
      token: getToken(userJSON)
    });
  } catch (e) {
    res.status(403).send({
      error: 'The login information was incorrect.'
    });
  }
};
