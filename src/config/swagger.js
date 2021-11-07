module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Project template',
      version: '1.0.0',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              example: 'test@gmail.com'
            },
            password: {
              type: 'string',
              example: '1234'
            },
            name: {
              type: 'string',
              example: 'John'
            },
            level: {
              type: 'number',
              example: 0
            }
          }
        }
      }
    }
  },
};
