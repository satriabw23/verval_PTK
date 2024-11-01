'use strict'

const sql = require('mssql')

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
    enableArithAbort: true
  }
}

const pool = new sql.ConnectionPool(config);

pool.on('error', err => {
  console.log('error', err)
})

module.exports = pool;