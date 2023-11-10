import swaggerJSDoc from 'swagger-jsdoc';

// Swagger JSDoc configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tech Tales',
      version: '1.0.0',
      description: 'Tech Tales API Documentation',
    },
  },
  apis: ['./src/routes/*.ts'], // Point to the TypeScript route files containing JSDoc comments
};

// Initialize Swagger JSDoc
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;