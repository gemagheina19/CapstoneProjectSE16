const dbConfig = require('../config/db.config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB, 
    dbConfig.USER, 
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAlias: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua models yang ada pada aplikasi
db.cities = require('./city.model')(sequelize, Sequelize);
db.package = require('./paket.model')(sequelize,Sequelize);
<<<<<<< HEAD
db.users = require('./user.model')(sequelize,Sequelize);
=======
db.rooms = require('./rooms.model')(sequelize,Sequelize);
>>>>>>> b2a8f9b612bdeeb66d7b5fc248b3565f6b10169b
module.exports = db;
