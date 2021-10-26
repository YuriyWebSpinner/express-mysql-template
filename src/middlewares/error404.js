const error404Handler = (req, res) => {
  const logger = req.logger;
  const message = `Page ${req.protocol}://${req.hostname}${req.originalUrl} not found. Method - ${req.method}`;
  logger.error(message);
  res.status(404).json({
    success: false,
    message
  });
}

module.exports = error404Handler;
