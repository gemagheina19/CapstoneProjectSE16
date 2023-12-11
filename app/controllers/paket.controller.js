const db = require("../models");
const Paket = db.package;

// CREATE: untuk enambahkan data kedalam tabel book
exports.create = (req, res) => {
  // validate request
  if (!req.body.nama) {
    return res.status(400).send({
      message: "nama tidak boleh kosong",
    });
  }

  if (!req.body.fasilitas) {
    return res.status(400).send({
      message: "fasilitas tidak boleh kosong",
    });
  }

  if (!req.body.images) {
    return res.status(400).send({
      message: "gambar tidak boleh kosong",
    });
  }

  if (!req.body.harga) {
    return res.status(400).send({
      message: "harga tidak boleh kosong",
    });
  }



  // daya yang didapatkan dari inputan oleh pengguna
  const paket = {
    nama: req.body.nama,
    fasilitas: req.body.fasilitas,
    images : req.body.images,
    harga : req.body.harga,
    //published: req.body.published ? req.body.published : false,
  };

  // proses menyimpan kedalam database
  Paket.create(paket)
    .then((data) => {
      res.json({
        message: "paket created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while creating the Book.",
        data: null,
      });
    });
};

// READ: menampilkan atau mengambil semua data sesuai model dari database
exports.findAll = (req, res) => {
  Paket.findAll()
    .then((package) => {
      res.json({
        message: "package retrieved successfully.",
        data: package,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving books.",
        data: null,
      });
    });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
exports.update = (req, res) => {
  const id = req.params.id;
  Paket.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "paket updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update book with id=${id}. Maybe book was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while updating the book.",
        data: null,
      });
    });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
  const id = req.params.id;
  Paket.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete book with id=${id}. Maybe book was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while deleting the book.",
        data: null,
      });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
  Paket.findByPk(req.params.id)
    .then((paket) => {
      res.json({
        message: "Book retrieved successfully.",
        data: paket,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
