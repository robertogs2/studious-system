'use strict';

// Module that handles the RESTful service routes
let express = require('express');
let router = module.exports = express.Router();

let test = require('./test');
router.use('/test',test);

let queries = require('./queries');
router.use('/queries',queries);

let email = require('./email');
router.use('/email', email);