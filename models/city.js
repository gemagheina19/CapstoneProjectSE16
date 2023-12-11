// models/city.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const City = sequelize.define('City', {
  cityName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON,
  },
});

module.exports = City;
