const { Pool } = require('pg');
// const HOMEDISH_URI = require('./keys');

const pool = new Pool({
  connectionString: 'postgres://ebjuozbx:ftPff-zNlFsTxMgEQ1n7u_xK7tPCrI3W@kashin.db.elephantsql.com:5432/ebjuozbx'
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
