'use strict';

const HTTP_STATUS = require('../app/constants/http-status');

const baseResponseWithData = (res, data) => {
    return res.status(HTTP_STATUS.status_code.success).json({
        message: HTTP_STATUS.message.success,
        data: data
    })
}

const baseResponse = (res) => {
    return res.status(HTTP_STATUS.status_code.success).json({
        message: HTTP_STATUS.message.success,
        data: {}
    })
}

const baseResponsePaginate = (res, paginateData, page, limit) => {

    if (page === undefined && limit === undefined) {
        return baseResponseWithData(res, paginateData)
    }

    const { count: totalItems, rows: items } = paginateData;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return res.status(HTTP_STATUS.status_code.success).json({
        message: HTTP_STATUS.message.success,
        data: items,
        totalItems,
        totalPages,
        currentPage
    })
}

const response = {
    baseResponseWithData,
    baseResponse,
    baseResponsePaginate
}

module.exports = response;