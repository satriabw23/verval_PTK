'use strict'

const moment = require('moment');
const pdfToBase64 = require('pdf-to-base64');

const fs = require('fs');
const HTTP_STATUS = require('../app/constants/http-status');

const successResponse = (req, res, data) => {
    res.status((data.status_code) ? parseInt(data.status_code) : 200).json(data);
}

const successResponseWithMessage = (req, res, data, msg = '') => {
    data.message = (msg === '') ? data.message : msg;
    res.status((data.status_code) ? parseInt(data.status_code) : 200).json(data);
}

const errorCatchResponse = (req, res, err, msg = '') => {

    console.error('=== Throw Exception ===', new Date());
    console.error('=== Start Error ===');
    console.error(err);
    console.error('=== End Error ===');

    const data = {
        status_code: HTTP_STATUS.status_code.internal_server_error, message: HTTP_STATUS.message.internal_server_error
    };
    res.status(HTTP_STATUS.status_code.internal_server_error).json(data);
}

const responseFromQueryConverter = (query, conn) => {

    let res = {};

    if (query.length === 4) {

        res = {
            status_code: parseInt(query[2][0].status_code),
            message: query[3][0].message,
            data: query[0]
        }

    } else {

        res = {
            status_code: parseInt(query[1][0].status_code),
            message: query[2][0].message
        }
    }

    conn.end();
    return res

}

const responseFromQueryConverterServerSidePagination = (query, conn) => {

    let res = {};

    if (query.length === 5) {

        res = {
            status_code: parseInt(query[2][0].status_code),
            message: query[3][0].message,
            count: parseInt(query[4][0].count),
            data: query[0]
        }

    }

    conn.end();
    return res

}

const responseFromQueryTransactionConverter = (query, conn) => {

    const res = {
        status_code: parseInt(query[1][0].status_code),
        message: query[2][0].message
    }

    conn.end();
    return res

}

const safeNullFormat = (data) => {
    return (data == undefined || data == '') ? null : data;
}

const momentNow = () => {
    return moment().format();
}

const convertPdfToBase64 = (exposeName = '', res) => {

    let pdfBase64 = '';
    let exposeFileName = (exposeName.toLocaleLowerCase().indexOf('.pdf') > -1) ? exposeName : exposeName + '.pdf';

    setTimeout(() => {
        const fullPath = process.cwd() + `/data/${exposeFileName}`;
        pdfToBase64(fullPath).then(
            data => {
                pdfBase64 = data;
                res.status(HTTP_STATUS.status_code.success).json({ status: HTTP_STATUS.status_code.success, message: HTTP_STATUS.message.success, data: { base64: pdfBase64, fileName: exposeFileName } });
            }
        );
    }, 2000)

}

const downloadFile = (pathFile, res) => {
    let path = pathFile
    let file = fs.createReadStream(path)
    let filename = path.split('\\')[1]
    res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
    file.pipe(res)
}

const getPagination = (page, size, sortBy, sortDir) => {
    const limit = size ? +size : undefined;
    const offset = page ? page * limit : undefined;

    let orderBy = sortBy ? sortBy : 'createDate'
    let orderDir = sortDir ? sortDir : 'DESC'

    let sort = [orderBy, orderDir]
    var order = []
    order.push(sort)

    return { limit, offset, order };
}

const utils = {
    successResponse,
    successResponseWithMessage,
    errorCatchResponse,
    responseFromQueryConverter,
    responseFromQueryConverterServerSidePagination,
    responseFromQueryTransactionConverter,
    safeNullFormat,
    momentNow,
    convertPdfToBase64,
    downloadFile,
    getPagination,
}

module.exports = utils;