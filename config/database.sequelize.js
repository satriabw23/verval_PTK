'use strict'

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'mssql',
  host: process.env.DB_HOST,
  port: 1433,
  dialectOptions: {
    timezone: process.env.TZ_SEQUELIZE,
    options: {
      encrypt: false,
      trustServerCertificate: true,
    }
  },
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
    evict: 20000,
  },
  logging: true
});

module.exports = sequelize;
