const passport = require('passport');
const db = require('../models/homeModels');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
      // FIX THIS QUERY PLEASE <3 
    const query = `SELECT * FROM Users WHERE user_id = $1`;
    const values = [id];
    db.query(query, values)
      .then(user => done(null, user))
      .catch(err => done(err, null))
  });
};