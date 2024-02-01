const swaggerJsdoc = require('swagger-jsdoc');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nazwa Twojego API',
      version: '1.0.0',
      description: 'Opis Twojego API',
    },
  },
  apis: ['./authRoutes.js', './userRoutes.js', './trailRoutes.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
