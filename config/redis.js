'use strict'

const redis = require("redis");

const client = redis.createClient({
    socket : {
        port : parseInt(process.env.REDIS_PORT),
        host: process.env.REDIS_HOST
    }
});
client.on('error', (err) => console.log('Redis Client Error', err));

module.exports = client;