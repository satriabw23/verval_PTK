'use strict'

const utils = require('./utils');
const HTTP_STATUS = require('../app/constants/http-status');
const PAYLOAD_VALIDATOR_DATA = require('../app/validator/payload');

const payloadValidation = (req, res, next) => {
    try {
        let countValidation = 0;
        let countDataLength = 0;
        let comparison = "";
        const data = PAYLOAD_VALIDATOR_DATA;
        var error = 0;
        data.forEach(val => {
            countValidation = 0;
            countDataLength = 0;
            if (req.baseUrl.split('/')[3] + '/' + req.baseUrl.split('/')[4] === val.app_route + '/' + val.url && req.method === val.method) {
                if (val.body.length > 0) {
                    countDataLength = val.body.length;
                    val.body.forEach(valBody => {
                        comparison = valBody.nama;
                        if (req.body[comparison] || req.body[comparison] === null || req.body[comparison] === 0 || req.body[comparison] === '') {
                            countValidation++;
                        } else {
                            console.log(comparison);
                        }
                    });
                    error = countValidation === countDataLength ? 0 : 1;
                } else {
                    countValidation = 1;
                }
            }
        });

        if (error === 0) {
            next();
        } else {
            res.status(HTTP_STATUS.status_code.bad_request).json({ status_code: HTTP_STATUS.status_code.bad_request, message: 'Variabel ' + comparison.replace("_", " ").toUpperCase() + ' tidak ditemukan.', data: {} })
        }
    } catch (ex) {
        utils.errorCatchResponse(req, res, ex)
    }
}

const validator = {
    payloadValidation
}

module.exports = validator