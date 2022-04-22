const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');

// The currentUser/newUser in done() strategy function will be passed as user into this
// After we serialize the user, we will attach it to the cookie
passport.serializeUser((user, done) => {
  console.log('serialize');
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('deserialize');
  console.log(id);
  User.findById(id).then((user) => {
    console.log(user);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options
      clientID:
        '336388235401-0nlactkm282o3fpf172u8hk7081lqoi1.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      // Check if user exists
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('User existed: ' + currentUser);
          done(null, currentUser);
        } else {
          // If not, create new
          const user = new User({
            name: profile.displayName,
            googleId: profile.id,
          });
          user.save().then((newUser) => {
            console.log('new user created ' + newUser);
            done(null, newUser);
          });
        }
      });
    }
  )
);
