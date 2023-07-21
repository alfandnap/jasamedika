function errorHandler(err, req, res, next) {
  let status;
  let message;
  console.log(err);
  switch (err.name) {
      case 'SequelizeConstraintError':
      case 'SequelizeValidationError':
          status = 400;
          message = err.errors.map(el => { return el.message });
          break;
      case 'FORBIDDEN':
          status = 403;
          message = 'Unauthorized';
          break;
      case 'Invalid':
          status = 401;
          message = 'Invalid email/password';
          break;
      case 'NOTFOUND':
          status = 404;
          message = 'NOTFOUND';
          break;
      default:
          status = 500;
          message = 'Internal Server Error';
          break;
  }
  res.status(status).json({ message })
}

module.exports = errorHandler