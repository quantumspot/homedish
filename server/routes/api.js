const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../auth/user.js');

router.post('/signup',
  User.signup,
  userController.createUser,
  (req, res) => 
    res.status(200).json(res.locals.user)
);

// router.post('/updateUser', 
//   userController.getUser,
//   userController.updateUser,
//   (req, res) => 
//     res.status(200).json('address added successfully')
// );

router.get('/email', 
  userController.getUser,
  (req, res) => {
    console.log(req.query)
    res.status(200).json(res.locals.user)
  }
);




module.exports = router;