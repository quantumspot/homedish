const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookController = require('../controllers/cookController');
const recipeController = require('../controllers/recipeController');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../auth/user.js');
const passport = require('passport');
require('../auth/passport');

router.post('/signup',
  User.signup,
  userController.createUser,
  cookController.addCook,
  (req, res) => 
    res.status(201).send(res.locals.user)
);

router.post('/login',
  passport.authenticate('local'),
  userController.getUser,
  User.createSignInToken,
  (req, res) => (
    res.status(200).send(res.locals.user)
  )
);

router.post('/updateUser', 
  userController.getUserId,
  userController.updateUser
);

router.post('/addRecipe', 
  recipeController.addRecipe,
  (req, res) => (
    res.status(201).send(res.locals.recipe)
  )
);

// router.post('/editRecipe')

router.get('/getUser', 
  userController.getUser,
  (req, res) => {
    res.status(200).json(res.locals.user)
  }
);

router.delete('/deleteUser',
  userController.getUser,
  userController.deleteUser,
  (req, res) => {
    res.status(200)
  }
);


module.exports = router;