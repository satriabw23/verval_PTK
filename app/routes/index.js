'use strict';

const router = require("express").Router();
const ROUTER_NAME = require("../constants/api-router");

// AUTH

router.use(ROUTER_NAME.APP_ROUTER.PEREKAMAN, require('./perekaman.route'));
router.use(ROUTER_NAME.APP_ROUTER.REFERENSI, require('./referensi.route'));

module.exports = router;