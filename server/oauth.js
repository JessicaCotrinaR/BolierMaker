const router = require("express").Router();
const passport = require("passport");
const { User } = require("./db");
module.exports = router;
// handles the callback after Google has authenticated the user (GET /auth/google/callback)
// router.get(
//     "/callback",
//     passport.authenticate("google", {
//       successRedirect: "/home", // or wherever
//       failureRedirect: "/", // or wherever
//     })
//   );
passport.serializeUser((user, done) => {
    try {
      done(null, user.id);
    } catch (err) {
      done(err);
    }
  });
  passport.deserializeUser((id, done) => {
    User.findByPK(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err);
      });
  });