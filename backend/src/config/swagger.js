const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Bakery Shop API',
            version: '1.0.0',
            description: 'API documentation for the Bakery Shop B2B Portal',
        },
        servers: [
            {
                url: 'http://localhost:5003/api',
                description: 'Development server (Docker)',
            },
        ],
    },
    apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsDoc(options);

module.exports = {
    swaggerUi,
    specs,
};
