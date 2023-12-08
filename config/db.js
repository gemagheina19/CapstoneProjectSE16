const { Sequelize } = require('sequelize');
const config = require('./config.json');

const { database, username, password, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = sequelize;