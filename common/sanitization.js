'use strict'

const validator = require('validator');
const utils = require('../common/utils');
const _ = require('underscore');

const ENUM_VALIDATION = require('../app/constants/enum-validation');
const HTTP_STATUS = require('../app/constants/http-status');
const SANITATION = require('../app/validator/sanitization');

function sanitizationMiddleware(req, res, next) {

    try {

        let validatorStatus = true;
        let keterangan = '';

        const dataInvalid = {
            status_code: HTTP_STATUS.status_code.bad_request,
            message: HTTP_STATUS.message.bad_request,
            data: {}
        }

        const bodyName = _.allKeys(req.body);

        for (let i = 0; i < bodyName.length; i++) {
            const checked = checkData(bodyName[i], req);

            validatorStatus = checked.validatorStatus;
            keterangan = checked.keterangan;

            if (validatorStatus) {
                continue;
            } else {
                break;
            }
        }

        if (validatorStatus) {
            next();
        } else {
            res.status(dataInvalid.status_code).json(
                {
                    status_code: HTTP_STATUS.status_code.bad_request,
                    message: 'Data ' + keterangan.replace("_", " ").toUpperCase() + ' tidak sesuai format yang ditetapkan.',
                    data: {}
                }
            );
        }

    } catch (ex) {
        utils.errorCatchResponse(req, res, ex);
    }
}

function checkData(bodyName, req) {

    let validatorStatus = true;
    let keterangan = '';
    const checkValidation = SANITATION.filter(a => a.bodyName === bodyName)

    req.body[bodyName] = req.body[bodyName] == null ? '' : req.body[bodyName];

    if (checkValidation.length > 0) {
        if (checkValidation[0].validationType === ENUM_VALIDATION.IS_LENGTH) {
            if (!validator.isLength(req.body[bodyName], { min: checkValidation[0].min, max: checkValidation[0].max })) {
                validatorStatus = false;
                keterangan = checkValidation[0].bodyName;
            }
        } else if (checkValidation[0].validationType === ENUM_VALIDATION.IS_NUMERIC) {
            if (!validator.isNumeric(req.body[bodyName].toString(), { min: checkValidation[0].min, max: checkValidation[0].max })) {
                validatorStatus = false;
                keterangan = checkValidation[0].bodyName;
            }
        } else if (checkValidation[0].validationType === ENUM_VALIDATION.IS_EMAIL) {
            if (!validator.isEmail(req.body[bodyName])) {
                validatorStatus = false;
                keterangan = checkValidation[0].bodyName;
            }
        } else if (checkValidation[0].validationType === ENUM_VALIDATION.IS_DATE) {
            if (!validator.isDate(req.body[bodyName])) {
                validatorStatus = false;
                keterangan = checkValidation[0].bodyName;
            }
        } else {
            console.log('no selected enum')
        }
    }

    return {
        validatorStatus: validatorStatus,
        keterangan: keterangan
    };

}

const sanitization = {
    sanitizationMiddleware
}

module.exports = sanitization;