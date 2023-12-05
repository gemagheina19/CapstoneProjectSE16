const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // Menggunakan path.join untuk menemukan alamat file HTML
  const htmlPath = path.join(__dirname, '../views/index.html');
  res.sendFile(htmlPath);
});

module.exports = router;