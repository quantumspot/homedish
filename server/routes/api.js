const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup',
  userController.createUser,
  (req, res) => 
    res.status(200).json(res.locals.user)
);

router.get('/email', 
  userController.getUser,
  (req, res) => {
    console.log(req.query)
    res.status(200).json(res.locals.user)
  }
);


module.exports = router;