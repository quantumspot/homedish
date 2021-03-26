const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).json('User created successfully');
  }
);

// router.post('/add-profile-img', 
//   userController.addProfileImg,
//   (req, res) => {
//     res.status(200).json({})
//   }
// );

module.exports = router;