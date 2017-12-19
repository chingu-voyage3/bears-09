const passport = require('passport'),
  User = require('../models/user'),
  config = require('./config'),
  JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt,
  LocalStrategy = require('passport-local');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          return done(null, false, {
            error: 'Your login details could not be verified. Please try again.'
          });
        }

        user.comparePassword(password, function(err, isMatch) {
          if (err) {
            return done(err);
          }
          if (!isMatch) {
            return done(null, false, {
              error:
                'Your login details could not be verified. Please try again.'
            });
          }

          return done(null, user);
        });
      } catch (e) {
        return done(e);
      }
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret
    },
    async (jwtPayload, done) => {
      try {
        const user = await User.findById(jwtPayload._id);

        if (!user) {
          return done(new Error(), false);
        }
        return done(null, user);
      } catch (e) {
        return done(new Error(), false);
      }
    }
  )
);
