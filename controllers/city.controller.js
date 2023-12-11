const db = require("../models");
const City = db.cities;

// CREATE: untuk enambahkan data kedalam tabel city
exports.create = (req, res) => {
  // validate request
  if (!req.body.cityName) {
    return res.status(400).send({
      message: "Title can not be empty",
    });
  }

  // daya yang didapatkan dari inputan oleh pengguna
  const city = {
    cityName: req.body.cityName,
    images: req.body.images,
   
  };

  // proses menyimpan kedalam database
  City.create(city)
    .then((data) => {
      res.json({
        message: "City created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the City.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  City.findAll()
    .then((cities) => {
      res.json({
        message: "City retrieved successfully.",
        data: cities,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving cities.",
        data: null,
      });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
  const id = req.params.id;
  City.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "City updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update cITY with id=${id}. Maybe City was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the city.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  City.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "city deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete city with id=${id}. Maybe city was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the city.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  City.findByPk(req.params.id)
    .then((city) => {
      res.json({
        message: "City retrieved successfully.",
        data: city,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving city.",
        data: null,
      });
    });
};
