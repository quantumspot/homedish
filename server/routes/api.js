const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup',
  userController.createUser,
  (req, res) => {
    res.status(200).json('User created successfully');
  }
);


module.exports = router;