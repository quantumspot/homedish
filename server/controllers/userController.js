const e = require('express');
const db = require('../models/homeModels');
const cors = require('cors');

const userController = {};

userController.createUser = (req, res, next) => {
  console.log(req.body);
  const { name, email_address, password, address, allergies } = req.body;

  
  const text = 'INSERT INTO Users(name, email_address, password, address, allergies, created_on, last_login) VALUES($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *';
  const values = [`${name}`, `${email_address}`, `${password}`, `${address}`, `${allergies}`];

  db
    .query(text, values)
    .then(res => {
      console.log("createUser line 16: ", res.rows);
    })
    .catch(e => {next({
      log: `userController.createUser: ${e}`,
      message: { err: 'userController.createUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}

module.exports = userController;