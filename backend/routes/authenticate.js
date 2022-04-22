const router = require('express').Router();
const passport = require('passport');

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get(
  '/google/redirect',
  passport.authenticate('google', {
    successRedirect: '/user',
    failureRedirect: '/login',
  }),
  (req, res) => {
    res.send(req.user);
  }
);
module.exports = router;
