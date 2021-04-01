const e = require('express');
const db = require('../models/homeModels');

const recipeController = {};

recipeController.addRecipe = (req, res, next) => {
  const { title, description, allergens, country_of_origin, meal_type, cook_id, image_url, price, servings } = req.body;
  
  const text = `INSERT INTO Recipes(title, description, allergens, country_of_origin, meal_type, cook_id, image_url, price, servings) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  const vals = [`${title}`, `${description}`, `${allergens}`, `${country_of_origin}`, `${meal_type}`, `${cook_id}`, `${image_url}`, `${price}`, `${servings}`];
  
  db
    .query(text, vals)
    .then(data => {
      res.locals.recipe = data.rows[0]
    })
    .catch(e => {next({
      log: `recipeController.addRecipe: ${e}`,
      message: { err: 'recipeController.addRecipe: ERROR: Check server logs for details' }
    })
    }
    ).then(() => next());

}


// get all recipes

// get recipe

// delete recipe

// edit recipe

module.exports = recipeController;