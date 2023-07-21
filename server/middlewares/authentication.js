const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const secret = process.env.JWT_SECRET || "jasamedika";

function generateToken(object) {
  const access_token = jwt.sign(object, secret);
  return access_token
}

function verifyOperator(req, res, next) {
  const { access_token } = req.headers
  if (access_token) {
    jwt.verify(access_token, secret, (err, user) => {
      if (err) {
        err.name = 'FORBIDDEN';
        return next(err)
      }
      if (user.role == 'Operator') {
        req.user = { id: user.id };
        next();
      } else {
        return next({name : 'FORBIDDEN'})
      }
    })
  } else {
    next({ name: "Invalid" })
  }
}

function verifyAdmin(req, res, next) {
  const { access_token } = req.headers
  if (access_token) {
    jwt.verify(access_token, secret, (err, user) => {
      if (err) {
        err.name = 'FORBIDDEN';
        return next(err)
      }
      if (user.role == 'Admin') {
        req.user = { id: user.id };
        next();
      } else {
        return next({name : 'FORBIDDEN'})
      }
    })
  } else {
    next({ name: "Invalid" })
  }
}

module.exports = { verifyOperator, verifyAdmin, generateToken }