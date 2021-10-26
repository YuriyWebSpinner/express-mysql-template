module.exports = res => ({
  fail: ({ status = 500, message = "Internal Server Error" } = {}) => res.status(status).json({ message }),
  success: ({ status = 200, data = { success: true } } = {}) => res.status(status).json(data),
  notFound: ({ status = 404, message = "Data Not Found" } = {}) => res.status(status).json({ message }),
  badRequest: ({ status = 400, message = "Bad request, try again" } = {}) => res.status(status).json({ message }),
  badEntity: ({ status = 422, message = "Unprocessable entity, try again" } = {}) =>
    res.status(status).json({ message }),
  forbidden: ({ status = 403, message = "Request will not be fulfilled" } = {}) => res.status(status).json({ message }),
});
