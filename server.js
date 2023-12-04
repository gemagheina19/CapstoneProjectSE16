const express = require('express');
const app = express();
const port = 3000; // atau port yang Anda inginkan

// Data Kota (Contoh: Statik)
const cities = [
  { id: 1, name: 'Jakarta', image: 'url-to-jakarta-image.jpg' },
  { id: 2, name: 'Surabaya', image: 'url-to-surabaya-image.jpg' },
  // tambahkan kota lain sesuai kebutuhan
];

// Endpoint static API untuk data kota
app.get('/api/cities', (req, res) => {
  res.json(cities);
});

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});