// Routes
const podcastRoutes = require('./routes/podcasts');

// Authentication
const passport = require('passport');
const AuthenticationController = require('./controllers/authentication');
// const isAuthenticated = require('./middleware/isAuthenticated');

module.exports = app => {
  app.use('/podcasts', podcastRoutes);

  // AUTH ROUTES
  app.post('/auth/register', AuthenticationController.register);
  app.post(
    '/auth/login',
    passport.authenticate('local', { session: false }),
    AuthenticationController.login
  );

  /* protected api route example
  app.get('/api/resource', isAuthenticated, (req, res) => {
    res.send({ user: req.user });
  });
  */
};
