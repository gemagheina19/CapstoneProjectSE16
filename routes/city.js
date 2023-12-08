// routes/city.js
const express = require('express');
const router = express.Router();
const fs = require('fs').promises; // Gunakan modul fs dengan promises
const path = require('path');
const { City } = require('../models/city'); // Sesuaikan path ke model City

// Endpoint untuk menampilkan data kota
router.get('/', async (req, res) => {
  try {
    // Ambil data dari database
    const cities = await City.findAll();

    // Baca isi file HTML
    const htmlContent = await fs.readFile(path.join(__dirname, '../views/city.html'), 'utf8');

    // Kirim file HTML dengan data yang telah di-render
    const renderedHtml = renderHtmlWithData(htmlContent, cities);
    res.send(renderedHtml);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Fungsi untuk merender HTML dengan data
function renderHtmlWithData(html, data) {
  // Di sini Anda bisa menggunakan teknik apa pun yang diinginkan untuk menyisipkan data ke dalam HTML.
  // Sebagai contoh, saya menggunakan string templating sederhana dengan menggantikan placeholder {{cities}}
  return html.replace('{{cities}}', generateCityList(data));
}

// Fungsi untuk menghasilkan daftar kota dari data
function generateCityList(cities) {
  if (!cities || cities.length === 0) {
    return '<p>No cities found.</p>';
  }

  const listItems = cities.map(city => `<li>${city.cityName}</li>`).join('');
  return `<ul>${listItems}</ul>`;
}

module.exports = router;
