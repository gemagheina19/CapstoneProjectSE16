module.exports = (sequelize, Sequelize) => {
    const Paket = sequelize.define('paket', {
        nama: {
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
    return Paket;
}

//ID , NAMA, FASILITAS, IMAGES, HARGA...?