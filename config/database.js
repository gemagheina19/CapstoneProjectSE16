// config/database.js
const { Sequelize } = require('sequelize');
const config = require('./config.json'); // Pastikan path ini sesuai dengan struktur proyek Anda

const sequelize = new Sequelize(config.development);

module.exports = sequelize;