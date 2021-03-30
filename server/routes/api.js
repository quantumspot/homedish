const express = require('express');
const passport = require('passport');
const router = express.Router();
const userController = require('../controllers/userController');
const cookController = require('../controllers/cookController');
const recipeController = require('../controllers/recipeController');
const LocalStrategy = require('passport-local');
const db = require('../models/homeModels');
const bcrypt = require('bcrypt')
const init = require('../auth/passport');

const User = require('../auth/user.js');

init();
passport.use(new LocalStrategy((username, password, cb) => {
  const query = `SELECT user_id, email_address, password FROM Users WHERE email_address = $1`
  const values = [username];
  db.query(query, values)
    .then((data) => {
      const user = data.rows[0];
      if (!user) return cb(null, false);
      if (bcrypt.compare(password, user.password)) return cb(null, user);
      else return cb(null, false);
    })
    .catch(err => cb(err))
}))

router.post('/login',
  passport.authenticate('signup', { session: false }),

  async (req, res, next) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

router.post('/signup',
  User.signup,
  userController.createUser,
  cookController.addCook,
  (req, res) =>
    res.status(201).json(res.locals.user)
);

router.post('/updateUser',
  userController.getUserId,
  userController.updateUser
);

router.post('/addRecipe',
  recipeController.addRecipe,
  (req, res) => (
    res.status(201)
  )
);

router.get('/getUser',
  userController.getUser,
  (req, res) => {
    res.status(200).json(res.locals.user)
  }
);

router.delete('/deleteUser',
  userController.deleteUser,
  (req, res) => {
    res.status(200)
  }
);


module.exports = {router, passport};