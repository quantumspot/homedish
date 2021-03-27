const { Pool } = require('pg');
const HOMEDISH_URI = require('./keys');

const pool = new Pool({
  connectionString: HOMEDISH_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
