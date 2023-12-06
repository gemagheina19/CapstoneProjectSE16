const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/../pembayaran1/pagebayar1.html');
});

module.exports = router;