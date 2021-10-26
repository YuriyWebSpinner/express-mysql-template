const errorHandler = (err, req, res, next) => {
  let status = 500;
  let message = '';
  let additional = err;
  
  const jsonResponse = {
    message,
    ...additional
  };
  
  console.error('jsonResponse', err);
  res.status(status);
  res.json(jsonResponse);
}

module.exports = errorHandler;
