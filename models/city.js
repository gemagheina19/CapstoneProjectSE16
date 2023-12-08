// models/City.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Sesuaikan path ke file konfigurasi database

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cityName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON, // Menggunakan JSON untuk menyimpan array
    allowNull: false,
  },
});

module.exports = City;
