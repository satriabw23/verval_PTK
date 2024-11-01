'use strict'

const fs = require('fs');
const dir = __dirname;
const jwt = require('jsonwebtoken');

const HTTP_STATUS = require('../app/constants/http-status');

const privateKey = fs.readFileSync(dir + '/private.key', 'utf8');
const publicKey = fs.readFileSync(dir + '/public.key', 'utf8');

const issuer = 'pt-btu.co.id';
const subject = 'development-team@pt-btu.co.id';

const signOptions = {
    issuer: issuer,
    subject: subject,
    expiresIn: "24h",
    algorithm: "RS256"
};

async function verifyJWT(token) {
    try {
        const verify = jwt.verify(token, publicKey);
        return verify;
    } catch (ex) {
        return 'token-expired';
    }
}

const authorization = {

    createJwt: async function (payload) {
        const jwtSign = jwt.sign(payload, privateKey, signOptions);
        return jwtSign
    },

    jwt: function (req, res, next) {

        const authorization = req.headers['authorization'];

        if (authorization) {

            const token = authorization.split(' ')[1];

            verifyJWT(token).then(
                decodedToken => {
                    if (decodedToken === 'token-expired') {
                        res.status(401).json({ message: 'Token telah expired, silahkan login terlebih dahulu.', data: {} });
                    } else {
                        //TODO: deprecated this method. Use new one below instead.
                        req.body.decodedToken = decodedToken;

                        // New Decoded Token. Change decodedToken object location to req instead put it on body to handle form data overriding values
                        req.decodedToken = decodedToken
                        next();
                    }
                }
            ).catch((err) => {
                res.status(HTTP_STATUS.status_code.unauthorized).json({ message: HTTP_STATUS.message.unauthorized, data: {} });
            })

        } else {
            res.status(HTTP_STATUS.status_code.unauthorized).json({ message: HTTP_STATUS.message.unauthorized, data: {} });
        }
    }
}

module.exports = authorization