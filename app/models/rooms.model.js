module.exports = (sequelize, Sequelize) => {
    const rooms = sequelize.define('rooms', {
        deskripsi: {
            type: Sequelize.STRING,
            
        },
        fasilitas: {
            type: Sequelize.JSON,
           
        },
        images: {
            type: Sequelize.JSON,
            
        },
        harga: {
            type: Sequelize.DECIMAL,
            
        },
    });
    return rooms;
}