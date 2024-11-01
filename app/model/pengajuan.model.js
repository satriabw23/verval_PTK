'use strict'

const { DataTypes } = require('sequelize');
const db = require('../../config/database.sequelize');

const Autentikasi = db.define('aksi', {
    aksiId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    kode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    keterangan: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null
    },
    lastUpdate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: null
    },
    expiredDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
}, {
    schema: 'ref',
    timestamps: true,
    name: {
        singular: 'aksi',
        plural: 'aksi'
    },
    createdAt: 'createDate',
    updatedAt: 'lastUpdate',
    paranoid: false,
    underscored: true,
    freezeTableName: true

});

module.exports = Autentikasi