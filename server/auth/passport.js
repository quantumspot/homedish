const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/homeModels');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy((email_address, password, cb) => {
  db.query('SELECT user_id, email_address, password FROM users WHERE email_address=$1', [email_address], (err, result) => {
    if(err) {
      console.log('Error when selecting user on login', err)
      return cb(err)
    }

    if(result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, function(err, res) {
        if(res) {
          cb(null, { user_id: first.id, email_address: first.email_address })
         } else {
          cb(null, false)
         }
       })
     } else {
       cb(null, false)
     }
  })
}))


passport.serializeUser((user, done) => {
  done(null, user.user_id)
})

passport.deserializeUser((id, cb) => {
  db.query('SELECT id, username, type FROM users WHERE id = $1', [parseInt(id, 10)], (err, results) => {
    if(err) {
      console.log('error selecting user on session deserialize', err)
      return cb(err)
    }

    cb(null, results.rows[0])
  })
})