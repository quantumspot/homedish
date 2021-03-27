const bcrypt = require('bcrypt');
const crypto = require('crypto')

const signup = (request, response, next) => {
  const user = request.body
  hashPassword(user.password)
    .then((hashedPassword) => {
      delete user.password
      user.password = hashedPassword
    })
    .then(() => createToken())
    .then(token => user.token = token)
    .then(() => next())
    // .then(() => createUser(user))
    // .then(user => {
    //   delete user.password_digest
    //   response.status(201).json({ user })
    // })
    .catch((err) => console.error(err))
}

const hashPassword = (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash)
    })
  )
}

const createToken = () => {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(16, (err, data) => {
      err ? reject(err) : resolve(data.toString('base64'))
    })
  })
}

module.exports = {
  signup
}