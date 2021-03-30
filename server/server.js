const path = require('path');
const express = require('express');
const userController = require('./controllers/userController');
const app = express();

const PORT = 3000;
const { apiRouter } = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

module.exports = app;