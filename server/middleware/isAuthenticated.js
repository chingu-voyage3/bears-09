const passport = require('passport');

module.exports = function isAuthenticated(req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {
      res.status(403).send({
        error: 'You dont have access to this resource.'
      });
    } else {
      req.user = user;
      next();
    }
  })(req, res, next);
};
