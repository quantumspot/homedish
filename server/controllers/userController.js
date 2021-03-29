const e = require('express');
const db = require('../models/homeModels');

const userController = {};
// http://localhost:8080/api/signup
userController.createUser = (req, res, next) => {
  const { name, email_address, password, address, allergies, profile_img, is_cook } = req.body;
  
  const text = 'INSERT INTO Users(name, email_address, password, address, allergies, profile_img, is_cook, created_on, last_login) VALUES($1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING user_id, name, email_address, address, allergies, profile_img, is_cook, created_on, last_login;';
  const val = [`${name}`, `${email_address}`, `${password}`, `${address}`, `${allergies}`, `${profile_img}`, `${is_cook}`];

  db
    .query(text, val)
    .then(data => {
      const thisData = data.rows[0]
      const userData = {
        name: thisData.name,
        email_address: thisData.email_address,
        address: thisData.address,
        allergies: thisData.allergies,
        is_cook: thisData.is_cook,
        user_id: thisData.user_id,
        token: req.body.token
      }
      res.locals.user = userData
    })
    .catch(e => {next({
      log: `userController.createUser: ${e}`,
      message: { err: 'userController.createUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}
// http://localhost:8080/api/getUser/?email='email'
userController.getUser = (req, res, next) => {
  let email;
  if (req.query) { email = req.query.email } 
  else { email = res.locals.user.email_address }

  const text = `SELECT name, email_address, address, allergies, last_login FROM Users WHERE email_address = $1;`
  const val = [`${email}`]

  db
    .query(text, val)
    .then(data => {
      res.locals.user = data.rows[0];
    })
    .catch(e => {next({
      log: `userController.getUser: ${e}`,
      message: { err: 'userController.getUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}

userController.getUserId = (req, res, next) => {
  const { email } = req.query;
  const text = `SELECT user_id FROM Users WHERE email_address = $1;`
  const val = [`${email}`]

  db
    .query(text, val)
    .then(data => {
      res.locals.userId = data.rows[0].user_id;
    })
    .catch(e => {next({
      log: `userController.getUser: ${e}`,
      message: { err: 'userController.getUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}
// http://localhost:8080/api/updateUser/?email='email'
userController.updateUser = (req, res, next) => {
  const user = res.locals.userId;
  const { column, change } = req.body;
   
  const text = `UPDATE Users SET ${column} = $1 WHERE user_id = ${user};`
  const val = [`${change}`]
  
  db
    .query(text, val)
    .then(data => {
      res.status(200);
    })
    .catch(e => {next({
      log: `userController.updateUser: ${e}`,
      message: { err: 'userController.updateUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());
}

userController.deleteUser = (req, res, next) => {
  const user = res.locals.userId;
  
  const text = 'DELETE from Cooks WHERE user_id = $1; DELETE from Users WHERE user_id = $1;';
  const val = [`${user}`];

  db
    .query(text, val)
    .then(data => {
      res.status(200);
    })
    .catch(e => {next({
      log: `userController.updateUser: ${e}`,
      message: { err: 'userController.updateUser: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());

}


module.exports = userController;