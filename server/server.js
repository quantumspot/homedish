const path = require('path');
const express = require('express');
const userController = require('./controllers/userController');
const app = express();
const passport = require('passport');
const PORT = 3000;
const init = require('./auth/passport');
const apiRouter = require('./routes/api');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt')
const db = require('./models/homeModels');

init();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


passport.use(new LocalStrategy((username, password, cb) => {
  const query = `SELECT user_id, email_address, password FROM Users WHERE email_address = $1`
  const values = [username];
  db.query(query, values)
    .then((data) => {
      const user = data.rows[0];
      if (!user) return cb(null, false);
      if (bcrypt.compare(password, user.password)) return cb(null, user);
      else return cb(null, false);
    })
    .catch(err => cb(err))
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', apiRouter);

app.use('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
});

app.use((err, req, res, next) => {
  console.log(err)
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = passport;