const db = require("../models");
const User = db.users;

// CREATE: untuk enambahkan data kedalam tabel book
exports.create = (req, res) => {
  // validate request
  if (!req.body.username) {
    return res.status(400).send({
      message: "username can not be empty",
    });
  }

  if (!req.body.password) {
    return res.status(400).send({
      message: "password can not be empty",
    });
  }

  if (!req.body.nama) {
    return res.status(400).send({
      message: "nama can not be empty",
    });
  }

  if (!req.body.hp) {
    return res.status(400).send({
      message: "hp can not be empty",
    });
  }

  if (!req.body.role) {
    return res.status(400).send({
      message: "role can not be empty",
    });
  }




  // daya yang didapatkan dari inputan oleh pengguna
  const user = {
    username: req.body.username,
    password: req.body.password,
    nama : req.body.nama,
    hp : req.body.hp,
    role : req.body.role,

    //published: req.body.published ? req.body.published : false,
  };

  // proses menyimpan kedalam database
  User.create(user)
    .then((data) => {
      res.json({
        message: "user created successfully.",
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
  User.findAll()
    .then((users) => {
      res.json({
        message: "Books retrieved successfully.",
        data: users,
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
  User.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Book updated successfully.",
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
  User.destroy({
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
  User.findByPk(req.params.id)
    .then((user) => {
      res.json({
        message: "Book retrieved successfully.",
        data: user,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error occurred while retrieving book.",
        data: null,
      });
    });
};
