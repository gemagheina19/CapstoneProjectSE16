module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        nama: {
            type: Sequelize.STRING,
        },
        hp :{
            type : Sequelize.DOUBLE,
        },
        role : {
            type : Sequelize.ENUM('admin','user'),
        },
        
    });
    return User;
}
