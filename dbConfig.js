// File: dbConfig.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Sesuaikan dengan username MySQL Anda
  password: '', // Sesuaikan dengan password MySQL Anda
  database: 'livingspace' // Sesuaikan dengan nama database yang akan Anda gunakan
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

module.exports = connection;
