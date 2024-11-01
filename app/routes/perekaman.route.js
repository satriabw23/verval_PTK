'use strict';

const express = require("express");
const router = express.Router();
const controller = require('../controllers/perekaman.controller');
const commonSanitization = require('../../common/sanitization');
const commonValidator = require('../../common/validator');
const authorization = require('../../middleware/authorization');

router.post('/perekaman-ptk', controller.perekamanPTK);

router.use('*', commonValidator.payloadValidation, commonSanitization.sanitizationMiddleware);

router.use('*', authorization.jwt);

module.exports = router;
