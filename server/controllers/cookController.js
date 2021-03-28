const e = require('express');
const db = require('../models/homeModels');

const cookController = {};

// CREATE TABLE Cooks (
//   cook_id serial not null primary key,
//   user_id int references Users(user_id),
//   cooking_experience INTEGER,
//   kitchen_name VARCHAR(30) NOT NULL
// );

cookController.addCook = (req, res, next) => {
  if (!res.locals.user.is_cook) return next();

  const { user_id, cooking_experience, kitchen_name } = res.locals.user;
  
  const text = `INSERT INTO Cooks(user_id, cooking_experience, kitchen_name) VALUES($1, $2, $3) RETURNING cooking_experience, kitchen_name;`;
  const vals = [`${user_id}`, `${cooking_experience}`, `${kitchen_name}`];
  
  db
    .query(text, vals)
    .then(data => 
      console.log(data.rows)
    )
    .catch(e => {next({
      log: `cookController.addCook: ${e}`,
      message: { err: 'cookController.addCook: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());

}
module.exports = cookController;