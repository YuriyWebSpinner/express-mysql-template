const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const options = require('../../config/swagger');

module.exports = (app, apis) => {
  const swaggerSpec = swaggerJSDoc({...options, apis});
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
