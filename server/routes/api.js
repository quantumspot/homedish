const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cookController = require('../controllers/cookController');
const recipeController = require('../controllers/recipeController');

const User = require('../auth/user.js');

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
  userController.getUser,
  userController.deleteUser,
  (req, res) => {
    res.status(200)
  }
);


module.exports = router;