const e = require('express');
const db = require('../models/homeModels');

const userController = {};

userController.createUser = (req, res, next) => {
  const { name, email_address, password, address, allergies } = req.body;

  const text = 'INSERT INTO Users(name, email_address, password, address, allergies, profile_img, created_on, last_login) VALUES($1, $2, $3, $4, $5, $6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *';
  const val = [`${name}`, `${email_address}`, `${password}`, `${address}`, `${allergies}`, ''];

  db
    .query(text, val)
    .then(data => {
      res.locals.user = data.rows[0];
    })
    .catch(e => {next({
      log: `userController.createUser: ${e}`,
      message: { err: 'userController.createUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}

userController.getUser = (req, res, next) => {
  const { email } = req.query;

  const text = `SELECT * FROM Users WHERE email_address = $1`
  const val = [`${email}`]

  db
    .query(text, val)
    .then(data => {
      console.log("getUser res: ", res)
      res.locals.user = data.rows;
    })
    .catch(e => {next({
      log: `userController.getUser: ${e}`,
      message: { err: 'userController.getUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}

// userController.updateUser = (req, res, next) => {
//   const { name, email_address, address, allergies } = req.body;

//   const text = `UPDATE Users SET address = $1 WHERE Users.email_address = $2;`
//   const vals = [`${address}`, ]

// }



module.exports = userController;