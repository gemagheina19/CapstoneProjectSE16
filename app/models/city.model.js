module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('city', {
        cityname: {
            type: Sequelize.STRING,
        },
        images: {
            type: Sequelize.TEXT,
        },
       
    });
    return City;
}
