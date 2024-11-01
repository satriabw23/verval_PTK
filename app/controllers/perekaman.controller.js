'use strict';

const utils = require('../../common/utils');
const service = require('../services/perekaman.service');

const perekamanPTK = async (req, res) => {
    try {
        const data = await service.perekamanPTK(req.body);
        utils.successResponse(req, res, data);
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}; 

const controller = {
    perekamanPTK,
}

module.exports = controller;