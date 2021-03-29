const e = require('express');
const db = require('../models/homeModels');

const cookController = {};
// CREATE TABLE recipes (
//   recipe_id serial PRIMARY KEY,
//   cook_id INT NOT NULL,
//   title VARCHAR(50) NOT NULL,
//   description VARCHAR(255) NOT NULL,
//   allergens VARCHAR(255) NOT NULL,
//   country_of_origin VARCHAR(50),
//   meal_type VARCHAR(50),
//   FOREIGN KEY cook_id REFERENCES Cooks(cook_id),
// );
cookController.addRecipe = (req, res, next) => {
  const { title, description, allergens, country_of_origin, meal_type, cook_id } = req.body;
  
  const text = `INSERT INTO Recipes(title, description, allergens, country_of_origin, meal_type, cook_id) VALUES($1, $2, $3, $4, $5, $6)`;
  const vals = [`${title}`, `${description}`, `${allergens}`, `${country_of_origin}`, `${meal_type}`, `${cook_id}`];
  
  db
    .query(text, vals)
    .then(data => 
      console.log(data.rows)
    )
    .catch(e => {next({
      log: `recipeController.addRecipe: ${e}`,
      message: { err: 'recipeController.addRecipe: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());

}
module.exports = cookController;