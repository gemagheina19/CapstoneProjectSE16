module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define('city', {
        cityName: {
            type: Sequelize.STRING,
        },
        images: {
            type: Sequelize.TEXT,
        },
        
    });
    return City;
}
