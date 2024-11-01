'use strict';

const repository = require('../repository/perekaman.repository');

const perekamanPTK = async (params) => {
    try {
        const res = await repository.perekamanPTK(params)
        return res;
    } catch (ex) {
        throw ex;
    }
};


const service = {
    perekamanPTK,
    
}

module.exports = service;