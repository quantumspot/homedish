const { Pool } = require('pg');
const HOMEDISH_URI = require('./keys');



// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: 'postgres://ebjuozbx:ftPff-zNlFsTxMgEQ1n7u_xK7tPCrI3W@kashin.db.elephantsql.com:5432/ebjuozbx'
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

// CREATE TABLE Users(
//   user_id serial PRIMARY KEY,
//   first_name varchar(50) NOT NULL,
//   last_name varchar(50) NOT NULL,
//   email_address varchar(254) UNIQUE NOT NULL,
//   password varchar(50) NOT NULL,
//   address varchar(255),
//   created_on timestamp NOT NULL,
//   last_login timestamp
// );

// CREATE TABLE recipe (
//  recipe_id serial PRIMARY KEY,
//  title VARCHAR(50) NOT NULL,
//  description VARCHAR(255) NOT NULL,
//  allergens CHECK NOT NULL,
//  country_of_origin VARCHAR(50),
//  meal_type VARCHAR(50),
//  price VARCHAR(10),
//  rating 
//  servings_left
//  FOREIGN KEY cook_id
//    REFERENCES (cooks)
//  