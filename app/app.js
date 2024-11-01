'use strict';

const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv').config({ path: __dirname + '/../.env' });

const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yaml');
const app = express();

const API_CONST = require('../app/constants/api-router');
const mainAppRouter = require('../app/routes');

// Swagger setup
const swaggerFile = fs.readFileSync('./api-documentation/perekaman_ptk_api_document.yaml', 'utf8');
const swaggerDocument = YAML.parse(swaggerFile);

// Serve Swagger UI on /api-docs route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Public image middleware
app.use("/public-image", express.static("data"));

app.use(logger(process.env.LOGGER));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

// Set environment mode
app.set('env', process.env.EXPRESS_ENV);

// Set middleware
app.use(cors());
app.use(helmet());

// Main app routes
app.use(API_CONST.MAIN_API_ROUTER, mainAppRouter);

// Error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        // Only show error details in development mode
        error: req.app.get('env') === 'development' ? err : {}
    });
});

// Set port
app.set('port', process.env.PORT);
app.listen(app.get('port'), () => {
    console.log('App module listening on port', app.get('port'));
    console.log('Datetime', new Date());
    console.log('Timezone', process.env.TZ);
});

module.exports = app;
